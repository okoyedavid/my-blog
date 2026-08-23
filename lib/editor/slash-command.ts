import { Extension, type Editor, type Range } from "@tiptap/core";
import { PluginKey } from "@tiptap/pm/state";
import Suggestion, {
  type SuggestionKeyDownProps,
  type SuggestionProps,
} from "@tiptap/suggestion";

export type SlashCommandItem = {
  id: string;
  label: string;
  description: string;
};

export type SlashCommandRenderState = {
  editor: Editor;
  range: Range;
  query: string;
  items: SlashCommandItem[];
  clientRect: (() => DOMRect | null) | null;
  command: (item: SlashCommandItem) => void;
};

export type SlashCommandBridge = {
  items: SlashCommandItem[];
  onChange: (state: SlashCommandRenderState | null) => void;
  onKeyDown: (props: SuggestionKeyDownProps) => boolean;
};

const slashCommandPluginKey = new PluginKey("slashCommand");

function runSlashCommand(editor: Editor, range: Range, item: SlashCommandItem) {
  const chain = editor.chain().focus().deleteRange(range);

  switch (item.id) {
    case "paragraph":
      chain.setParagraph().run();
      break;
    case "heading-1":
      chain.setHeading({ level: 1 }).run();
      break;
    case "heading-2":
      chain.setHeading({ level: 2 }).run();
      break;
    case "heading-3":
      chain.setHeading({ level: 3 }).run();
      break;
    case "bullet-list":
      chain.toggleBulletList().run();
      break;
    case "ordered-list":
      chain.toggleOrderedList().run();
      break;
    case "blockquote":
      chain.toggleBlockquote().run();
      break;
    case "code-block":
      chain.toggleCodeBlock().run();
      break;
    case "horizontal-rule":
      chain.setHorizontalRule().run();
      break;
    default:
      chain.run();
  }
}

export function createSlashCommandExtension(bridge: SlashCommandBridge) {
  return Extension.create({
    name: "slashCommand",

    addProseMirrorPlugins() {
      return [
        Suggestion<SlashCommandItem, SlashCommandItem>({
          editor: this.editor,
          pluginKey: slashCommandPluginKey,
          char: "/",
          startOfLine: true,
          allowedPrefixes: null,
          items: ({ query }) => {
            const normalized = query.trim().toLowerCase();
            if (!normalized) return bridge.items;

            return bridge.items.filter((item) =>
              `${item.label} ${item.description}`
                .toLowerCase()
                .includes(normalized),
            );
          },
          command: ({ editor, range, props }) => {
            if (props.id === "image") {
              editor.chain().focus().deleteRange(range).run();
              bridge.onChange(null);
              window.dispatchEvent(new CustomEvent("editor:open-image-picker"));
              return;
            }

            runSlashCommand(editor, range, props);
          },
          render: () => ({
            onStart: (props: SuggestionProps<SlashCommandItem, SlashCommandItem>) =>
              bridge.onChange({
                ...props,
                clientRect: props.clientRect ?? null,
              }),
            onUpdate: (props: SuggestionProps<SlashCommandItem, SlashCommandItem>) =>
              bridge.onChange({
                ...props,
                clientRect: props.clientRect ?? null,
              }),
            onExit: () => bridge.onChange(null),
            onKeyDown: bridge.onKeyDown,
          }),
        }),
      ];
    },
  });
}

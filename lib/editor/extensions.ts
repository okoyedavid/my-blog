import type { Extensions } from "@tiptap/core";
import CharacterCount from "@tiptap/extension-character-count";
import Color from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import { FontSize } from "@/lib/editor/font-size";
import {
  createSlashCommandExtension,
  type SlashCommandBridge,
} from "@/lib/editor/slash-command";

const DraftImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      assetId: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-asset-id"),
        renderHTML: (attributes) =>
          attributes.assetId ? { "data-asset-id": attributes.assetId } : {},
      },
    };
  },
});

export function getBaseExtensions(): Extensions {
  return [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3],
      },
      codeBlock: {
        HTMLAttributes: {
          class: "editor-code-block",
        },
      },
      bulletList: {
        HTMLAttributes: {
          class: "editor-list editor-list-bullet",
        },
      },
      orderedList: {
        HTMLAttributes: {
          class: "editor-list editor-list-ordered",
        },
      },
      blockquote: {
        HTMLAttributes: {
          class: "editor-blockquote",
        },
      },
      horizontalRule: {
        HTMLAttributes: {
          class: "editor-hr",
        },
      },
    }),
    TextStyle,
    FontSize,
    FontFamily.configure({
      types: ["textStyle"],
    }),
    Color.configure({
      types: ["textStyle"],
    }),
    Underline,
    Highlight.configure({
      multicolor: true,
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
      alignments: ["left", "center", "right", "justify"],
    }),
    Link.configure({
      openOnClick: false,
      autolink: true,
      defaultProtocol: "https",
      HTMLAttributes: {
        class: "editor-link",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
      },
    }),
    DraftImage.configure({
      inline: false,
      allowBase64: false,
      HTMLAttributes: {
        class: "editor-image",
      },
    }),
    Typography,
  ];
}

export function getClientExtensions(slashCommand?: SlashCommandBridge): Extensions {
  return [
    ...getBaseExtensions(),
    Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === "heading") {
          return "Add a section heading";
        }

        return "Type '/' for commands or start writing your story";
      },
      includeChildren: true,
    }),
    CharacterCount.configure(),
    ...(slashCommand ? [createSlashCommandExtension(slashCommand)] : []),
  ];
}

export function getSerializationExtensions(): Extensions {
  return getBaseExtensions();
}

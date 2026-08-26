"use client";

import type { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Code,
  FileCode2,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  ImageIcon,
  Link2,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Plus,
  Quote,
  Redo2,
  RemoveFormatting,
  Strikethrough,
  Underline as UnderlineIcon,
  Undo2,
} from "lucide-react";

type EditorToolbarProps = {
  editor: Editor | null;
  disabled?: boolean;
  urlPanel:
    | {
        mode: "link" | "image";
        value: string;
      }
    | null;
  onOpenLink: () => void;
  onOpenImage: () => void;
  onClosePanel: () => void;
  onUrlChange: (value: string) => void;
  onSubmitUrl: () => void;
};

const fontFamilies = [
  { label: "Arial", value: "Arial" },
  { label: "Georgia", value: "Georgia" },
  { label: "Inter", value: "Inter" },
  { label: "Merriweather", value: "Merriweather" },
  { label: "Times New Roman", value: "\"Times New Roman\"" },
];

const fontSizes = ["12px", "14px", "16px", "18px", "24px", "32px"];

// These are intentional article colours. Unstyled text remains theme-aware.
const textColors = [
  { label: "Default", value: "" },
  { label: "Ink", value: "#404040" },
  { label: "Ocean", value: "#2563eb" },
  { label: "Forest", value: "#047857" },
  { label: "Rose", value: "#be123c" },
];

function ToolbarDivider() {
  return <div className="mx-1 h-6 w-px shrink-0 bg-[color:var(--border)]" aria-hidden="true" />;
}

function ToolbarGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-nowrap items-center gap-1 md:flex-wrap">{children}</div>;
}

function ToolbarIconButton({
  label,
  active,
  disabled,
  onClick,
  children,
}: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border text-[color:var(--foreground)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--control-border-soft)] ${
        active
          ? "border-[color:var(--control-border)] bg-[color:var(--panel-inverse)] text-[color:var(--panel-inverse-foreground)]"
          : "border-transparent hover:bg-[color:var(--panel-soft)]"
      } disabled:text-[color:var(--muted-foreground)] disabled:hover:bg-transparent`}
    >
      {children}
    </button>
  );
}

function ToolbarSelect({
  label,
  value,
  onChange,
  options,
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
  className?: string;
}) {
  return (
    <label className={`relative ${className ?? ""}`}>
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-8 w-full appearance-none rounded-lg border border-[color:var(--border)] bg-[color:var(--panel-strong)] px-2 pr-7 text-sm text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--control-border)] focus:ring-2 focus:ring-[color:var(--control-border-soft)]"
      >
        {options.map((option) => (
          <option key={option.value || option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
    </label>
  );
}

function getBlockValue(editor: Editor) {
  if (editor.isActive("heading", { level: 1 })) return "h1";
  if (editor.isActive("heading", { level: 2 })) return "h2";
  if (editor.isActive("heading", { level: 3 })) return "h3";
  return "paragraph";
}

function getFontFamilyValue(editor: Editor) {
  return (editor.getAttributes("textStyle").fontFamily as string | undefined) ?? "";
}

function getFontSizeValue(editor: Editor) {
  return (editor.getAttributes("textStyle").fontSize as string | undefined) ?? "16px";
}

function getTextColorValue(editor: Editor) {
  return (editor.getAttributes("textStyle").color as string | undefined) ?? "";
}

function updateFontSize(editor: Editor, nextSize: string) {
  if (nextSize === "16px") {
    editor.chain().focus().unsetFontSize().run();
    return;
  }

  editor.chain().focus().setFontSize(nextSize).run();
}

export function EditorToolbar({
  editor,
  disabled,
  urlPanel,
  onOpenLink,
  onOpenImage,
  onClosePanel,
  onUrlChange,
  onSubmitUrl,
}: EditorToolbarProps) {
  if (!editor) {
    return (
      <div className="relative z-30 rounded-[var(--radius-small)] border border-[color:var(--border)] bg-[color:var(--panel-strong)] px-3 py-2 md:sticky md:top-[4.5rem]">
        <div className="h-9 animate-pulse rounded-lg bg-[color:var(--panel-soft)]" />
      </div>
    );
  }

  const hasSelection = !editor.state.selection.empty;
  const blockValue = getBlockValue(editor);
  const fontFamily = getFontFamilyValue(editor);
  const fontSize = getFontSizeValue(editor);
  const textColor = getTextColorValue(editor);
  const fontSizeIndex = Math.max(fontSizes.indexOf(fontSize), 2);

  return (
    <div className="relative z-30 md:sticky md:top-[4.5rem]">
      <div className="rounded-[var(--radius-small)] border border-[color:var(--border)] bg-[color:var(--panel-strong)]/95 px-3 py-2 backdrop-blur-xl">
        <div className="h-14 w-full overflow-x-auto overflow-y-hidden pb-1 md:h-auto md:overflow-visible">
          <div className="flex min-w-max flex-nowrap items-center gap-1 md:min-w-0 md:flex-wrap">
            <ToolbarGroup>
              <ToolbarIconButton
                label="Undo"
                disabled={disabled || !editor.can().chain().focus().undo().run()}
                onClick={() => editor.chain().focus().undo().run()}
              >
                <Undo2 className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Redo"
                disabled={disabled || !editor.can().chain().focus().redo().run()}
                onClick={() => editor.chain().focus().redo().run()}
              >
                <Redo2 className="h-4 w-4" />
              </ToolbarIconButton>
            </ToolbarGroup>

            <ToolbarDivider />

            <ToolbarGroup>
              <ToolbarSelect
                label="Paragraph style"
                value={blockValue}
                onChange={(value) => {
                  const chain = editor.chain().focus();
                  if (value === "paragraph") chain.setParagraph().run();
                  if (value === "h1") chain.toggleHeading({ level: 1 }).run();
                  if (value === "h2") chain.toggleHeading({ level: 2 }).run();
                  if (value === "h3") chain.toggleHeading({ level: 3 }).run();
                }}
                className="w-[8.5rem]"
                options={[
                  { label: "Paragraph", value: "paragraph" },
                  { label: "Heading 1", value: "h1" },
                  { label: "Heading 2", value: "h2" },
                  { label: "Heading 3", value: "h3" },
                ]}
              />
              <ToolbarIconButton
                label="Heading 1"
                active={editor.isActive("heading", { level: 1 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              >
                <Heading1 className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Heading 2"
                active={editor.isActive("heading", { level: 2 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              >
                <Heading2 className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Heading 3"
                active={editor.isActive("heading", { level: 3 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              >
                <Heading3 className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarSelect
                label="Font family"
                value={fontFamily}
                onChange={(value) => {
                  if (!value) {
                    editor.chain().focus().unsetFontFamily().run();
                    return;
                  }

                  editor.chain().focus().setFontFamily(value).run();
                }}
                className="w-[9rem]"
                options={[{ label: "Default font", value: "" }, ...fontFamilies]}
              />
              <ToolbarIconButton
                label="Decrease font size"
                onClick={() => updateFontSize(editor, fontSizes[Math.max(fontSizeIndex - 1, 0)])}
              >
                <Minus className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarSelect
                label="Font size"
                value={fontSize}
                onChange={(value) => updateFontSize(editor, value)}
                className="w-[4.5rem]"
                options={fontSizes.map((size) => ({ label: size.replace("px", ""), value: size }))}
              />
              <ToolbarIconButton
                label="Increase font size"
                onClick={() => updateFontSize(editor, fontSizes[Math.min(fontSizeIndex + 1, fontSizes.length - 1)])}
              >
                <Plus className="h-4 w-4" />
              </ToolbarIconButton>
            </ToolbarGroup>

            <ToolbarDivider />

            <ToolbarGroup>
              <ToolbarIconButton
                label="Bold"
                active={editor.isActive("bold")}
                onClick={() => editor.chain().focus().toggleBold().run()}
              >
                <Bold className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Italic"
                active={editor.isActive("italic")}
                onClick={() => editor.chain().focus().toggleItalic().run()}
              >
                <span className="text-base italic">I</span>
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Underline"
                active={editor.isActive("underline")}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
              >
                <UnderlineIcon className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Strikethrough"
                active={editor.isActive("strike")}
                onClick={() => editor.chain().focus().toggleStrike().run()}
              >
                <Strikethrough className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Inline code"
                active={editor.isActive("code")}
                onClick={() => editor.chain().focus().toggleCode().run()}
              >
                <Code className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarSelect
                label="Text color"
                value={textColor}
                onChange={(value) => {
                  if (!value) {
                    editor.chain().focus().unsetColor().run();
                    return;
                  }

                  editor.chain().focus().setColor(value).run();
                }}
                className="w-[6rem]"
                options={textColors}
              />
              <ToolbarIconButton
                label="Highlight"
                active={editor.isActive("highlight")}
                onClick={() =>
                  editor.chain().focus().toggleHighlight({ color: "#fef08a" }).run()
                }
              >
                <Highlighter className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Clear text style"
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .unsetColor()
                    .unsetFontFamily()
                    .unsetFontSize()
                    .unsetHighlight()
                    .run()
                }
              >
                <RemoveFormatting className="h-4 w-4" />
              </ToolbarIconButton>
            </ToolbarGroup>

            <ToolbarDivider />

            <ToolbarGroup>
              <ToolbarIconButton
                label="Align left"
                active={editor.isActive({ textAlign: "left" })}
                onClick={() => editor.chain().focus().setTextAlign("left").run()}
              >
                <AlignLeft className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Align center"
                active={editor.isActive({ textAlign: "center" })}
                onClick={() => editor.chain().focus().setTextAlign("center").run()}
              >
                <AlignCenter className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Align right"
                active={editor.isActive({ textAlign: "right" })}
                onClick={() => editor.chain().focus().setTextAlign("right").run()}
              >
                <AlignRight className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Justify"
                active={editor.isActive({ textAlign: "justify" })}
                onClick={() => editor.chain().focus().setTextAlign("justify").run()}
              >
                <AlignJustify className="h-4 w-4" />
              </ToolbarIconButton>
            </ToolbarGroup>

            <ToolbarDivider />

            <ToolbarGroup>
              <ToolbarIconButton
                label="Bullet list"
                active={editor.isActive("bulletList")}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
              >
                <List className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Ordered list"
                active={editor.isActive("orderedList")}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
              >
                <ListOrdered className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Blockquote"
                active={editor.isActive("blockquote")}
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
              >
                <Quote className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Code block"
                active={editor.isActive("codeBlock")}
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              >
                <FileCode2 className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Horizontal rule"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
              >
                <Pilcrow className="h-4 w-4" />
              </ToolbarIconButton>
            </ToolbarGroup>

            <ToolbarDivider />

            <ToolbarGroup>
              <ToolbarIconButton
                label="Insert link"
                active={editor.isActive("link")}
                disabled={disabled || !hasSelection}
                onClick={onOpenLink}
              >
                <Link2 className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Remove link"
                disabled={disabled || !editor.isActive("link")}
                onClick={() => editor.chain().focus().unsetLink().run()}
              >
                <RemoveFormatting className="h-4 w-4" />
              </ToolbarIconButton>
              <ToolbarIconButton
                label="Insert image"
                onClick={onOpenImage}
              >
                <ImageIcon className="h-4 w-4" />
              </ToolbarIconButton>
            </ToolbarGroup>
          </div>
        </div>

        {urlPanel ? (
          <div className="mt-2 flex flex-col gap-2 border-t border-[color:var(--border)] pt-2 md:flex-row md:items-center">
            <label className="grid flex-1 gap-1 text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--muted-foreground)]">
              <span>{urlPanel.mode === "link" ? "Link URL" : "Image URL"}</span>
              <input
                value={urlPanel.value}
                onChange={(event) => onUrlChange(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    onSubmitUrl();
                  }

                  if (event.key === "Escape") {
                    event.preventDefault();
                    onClosePanel();
                  }
                }}
                autoFocus
                placeholder={
                  urlPanel.mode === "link"
                    ? "https://example.com/article"
                    : "https://images.example.com/photo.jpg"
                }
                className="h-9 rounded-lg border border-[color:var(--border)] bg-[color:var(--panel-strong)] px-3 text-sm font-normal normal-case tracking-normal text-[color:var(--foreground)] outline-none transition placeholder:text-[color:var(--muted-foreground)] focus:border-[color:var(--control-border)] focus:ring-2 focus:ring-[color:var(--control-border-soft)]"
                aria-label={`${urlPanel.mode} URL`}
              />
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onSubmitUrl}
                className="inline-flex h-9 items-center rounded-md bg-[color:var(--brand-500)] px-3 text-sm font-semibold text-[color:var(--brand-foreground)] transition hover:bg-[color:var(--brand-600)]"
              >
                Insert
              </button>
              <button
                type="button"
                onClick={onClosePanel}
                className="inline-flex h-9 items-center rounded-md border border-[color:var(--border)] bg-[color:var(--panel-strong)] px-3 text-sm font-medium text-[color:var(--foreground)] transition hover:bg-[color:var(--panel-soft)]"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

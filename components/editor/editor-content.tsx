"use client";

import { EditorContent as TiptapEditorContent, type Editor } from "@tiptap/react";
import type { KeyboardEventHandler } from "react";

type EditorContentProps = {
  editor: Editor | null;
  onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement>;
};

export function EditorContent({
  editor,
  onKeyDownCapture,
}: EditorContentProps) {
  return (
    <div
      onKeyDownCapture={onKeyDownCapture}
      className="rounded-[var(--radius-medium)] border border-[color:var(--border)] bg-[color:var(--panel-strong)] px-4 py-3 sm:px-8 sm:py-6"
    >
      <div className="mx-auto w-full max-w-3xl">
        <TiptapEditorContent editor={editor} />
      </div>
    </div>
  );
}

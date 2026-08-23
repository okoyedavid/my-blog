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
      className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_-45px_rgba(15,23,42,0.14)] sm:p-6"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-4 hidden select-none items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-5 py-2 text-[11px] font-medium tracking-[0.24em] text-slate-400 md:flex">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
        </div>
        <TiptapEditorContent editor={editor} />
      </div>
    </div>
  );
}

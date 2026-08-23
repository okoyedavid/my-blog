"use client";

import {
  autoUpdate,
  computePosition,
  flip,
  inline,
  offset,
  shift,
  size,
  type VirtualElement,
} from "@floating-ui/dom";
import type { Editor } from "@tiptap/react";
import { useEffect, useRef, useState } from "react";

type EditorBubbleMenuProps = {
  editor: Editor | null;
  onOpenLink: () => void;
};

export function EditorBubbleMenu({ editor, onOpenLink }: EditorBubbleMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!editor || !menu || editor.state.selection.empty) {
      setPosition(null);
      return;
    }

    const reference: VirtualElement = {
      contextElement: editor.view.dom,
      getBoundingClientRect: () => {
        const { from, to } = editor.state.selection;
        const start = editor.view.coordsAtPos(from);
        const end = editor.view.coordsAtPos(to);
        const left = Math.min(start.left, end.left);
        const right = Math.max(start.right, end.right);
        const top = Math.min(start.top, end.top);
        const bottom = Math.max(start.bottom, end.bottom);
        return new DOMRect(left, top, right - left, bottom - top);
      },
      getClientRects: () => {
        const rect = reference.getBoundingClientRect();
        return [rect];
      },
    };

    const update = () =>
      computePosition(reference, menu, {
        strategy: "fixed",
        placement: "top",
        middleware: [
          inline(),
          offset(8),
          flip({ padding: 12 }),
          shift({ padding: 12 }),
          size({
            padding: 12,
            apply({ availableWidth, elements }) {
              elements.floating.style.maxWidth = `${Math.max(0, availableWidth)}px`;
            },
          }),
        ],
      }).then(({ x, y }) => setPosition({ x, y }));

    const cleanup = autoUpdate(reference, menu, update, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true,
      layoutShift: true,
    });
    return cleanup;
  }, [editor, editor?.state.selection.from, editor?.state.selection.to]);

  if (!editor || editor.state.selection.empty) return null;

  return (
    <div
      ref={menuRef}
      className="pointer-events-none fixed left-0 top-0 z-40 max-w-[calc(100vw-1.5rem)]"
      style={{
        transform: position ? `translate3d(${position.x}px,${position.y}px,0)` : undefined,
        visibility: position ? "visible" : "hidden",
      }}
    >
      <div className="pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-inverse)]/95 p-1 text-[color:var(--panel-inverse-foreground)] shadow-xl backdrop-blur">
        {[
          { label: "Bold", active: editor.isActive("bold"), action: () => editor.chain().focus().toggleBold().run() },
          { label: "Italic", active: editor.isActive("italic"), action: () => editor.chain().focus().toggleItalic().run() },
          { label: editor.isActive("link") ? "Edit link" : "Link", active: editor.isActive("link"), action: onOpenLink },
        ].map((item) => (
          <button
            key={item.label}
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={item.action}
            className={`shrink-0 rounded-xl px-3 py-2 text-xs font-semibold transition ${item.active ? "bg-white/15 text-white" : "text-slate-200 hover:bg-white/10 hover:text-white"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

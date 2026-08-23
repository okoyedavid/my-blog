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
import type { SlashCommandItem } from "@/lib/editor/slash-command";
import { useEffect, useRef, useState } from "react";

type Props = {
  clientRect: (() => DOMRect | null) | null;
  contextElement: HTMLElement | null;
  items: SlashCommandItem[];
  selectedIndex: number;
  onSelect: (item: SlashCommandItem) => void;
};

export function EditorSlashCommand({ clientRect, contextElement, items, selectedIndex, onSelect }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!clientRect || !contextElement || !menu) return;
    const reference: VirtualElement = {
      contextElement,
      getBoundingClientRect: () => clientRect() ?? new DOMRect(),
      getClientRects: () => [clientRect() ?? new DOMRect()],
    };
    const update = () =>
      computePosition(reference, menu, {
        strategy: "fixed",
        placement: "bottom-start",
        middleware: [
          inline(),
          offset(8),
          flip({ padding: 12, fallbackPlacements: ["top-start", "bottom-end", "top-end"] }),
          shift({ padding: 12 }),
          size({
            padding: 12,
            apply({ availableHeight, availableWidth, elements }) {
              elements.floating.style.maxHeight = `${Math.max(120, availableHeight)}px`;
              elements.floating.style.maxWidth = `${Math.max(0, availableWidth)}px`;
            },
          }),
        ],
      }).then(({ x, y }) => setPosition({ x, y }));
    return autoUpdate(reference, menu, update);
  }, [clientRect, contextElement, items.length]);

  if (!clientRect || items.length === 0) return null;

  return (
    <div
      ref={menuRef}
      className="fixed left-0 top-0 z-50 w-[min(320px,calc(100vw-24px))] overflow-y-auto rounded-[24px] border border-white/60 bg-[color:var(--panel-strong)]/95 p-2 shadow-[0_28px_90px_-40px_rgba(15,23,42,0.7)] backdrop-blur"
      style={{
        transform: position ? `translate3d(${position.x}px,${position.y}px,0)` : undefined,
        visibility: position ? "visible" : "hidden",
      }}
      role="menu"
      aria-label="Slash command menu"
    >
      <div className="mb-2 px-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">Insert block</div>
      <div className="space-y-1">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="menuitem"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => onSelect(item)}
            className={`flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition ${index === selectedIndex ? "bg-[color:var(--brand-500)] text-white" : "hover:bg-slate-100/80"}`}
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-current/15 bg-white/10 text-xs font-semibold">/</span>
            <span className="min-w-0 space-y-1">
              <span className="block text-sm font-semibold">{item.label}</span>
              <span className={`block text-xs ${index === selectedIndex ? "text-sky-100" : "text-[color:var(--muted-foreground)]"}`}>{item.description}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

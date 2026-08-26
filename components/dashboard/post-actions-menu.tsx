"use client";

import { BarChart3, Ellipsis, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function PostActionsMenu({ slug }: { slug: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const close = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", close);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Open post actions"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="grid size-9 place-items-center rounded-full border border-transparent transition hover:border-[color:var(--border)] hover:bg-[color:var(--panel-soft)]"
      >
        <Ellipsis aria-hidden="true" className="size-4" />
      </button>

      {isOpen ? (
        <div
          role="menu"
          className="absolute right-0 top-11 z-50 w-44 rounded-xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-1.5 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.5)]"
        >
          <Link
            href={`/blog/${slug}`}
            target="_blank"
            role="menuitem"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-[color:var(--panel-soft)] hover:opacity-100"
          >
            <ExternalLink aria-hidden="true" className="size-4 text-[color:var(--muted-foreground)]" />
            View post
          </Link>
          <Link
            href={`/dashboard/analytics/${slug}`}
            role="menuitem"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-[color:var(--panel-soft)] hover:opacity-100"
          >
            <BarChart3 aria-hidden="true" className="size-4 text-[color:var(--muted-foreground)]" />
            Analyze
          </Link>
        </div>
      ) : null}
    </div>
  );
}

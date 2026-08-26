"use client";

import { ImagePlus, Trash2 } from "lucide-react";
import { useRef } from "react";

type Props = {
  compact?: boolean;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  onTitleChange: (value: string) => void;
  onSlugChange: (value: string) => void;
  onExcerptChange: (value: string) => void;
  onCoverImageChange: (value: string) => void;
  onCoverFileChange: (file: File) => void;
};

const fieldLabel = "text-sm font-semibold text-ink";

export function PostMetadataForm({
  compact = false,
  title,
  slug,
  excerpt,
  coverImage,
  onTitleChange,
  onSlugChange,
  onExcerptChange,
  onCoverImageChange,
  onCoverFileChange,
}: Props) {
  const coverInputRef = useRef<HTMLInputElement>(null);

  return (
    <section className={compact ? "" : "border-y border-border py-6 sm:py-8"}>
      {compact ? null : (
        <div className="border-b border-border pb-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Post details</p>
          <p className="mt-1 text-sm text-muted-foreground">The information readers see before opening your article.</p>
        </div>
      )}

      <div className={`grid gap-5 ${compact ? "" : "mt-5 lg:grid-cols-2"}`}>
        <label className={`grid gap-2 ${compact ? "" : "lg:col-span-2"}`}>
          <span className={fieldLabel}>Title</span>
          <input value={title} onChange={(event) => onTitleChange(event.target.value)} placeholder="Untitled post" className="mb-0 block min-h-12 w-full rounded-[var(--radius-small)] border border-border bg-panel-strong px-4 py-3 text-base font-medium text-ink transition placeholder:text-control-muted hover:border-control-border-soft focus:border-control-border focus:outline-none focus:ring-2 focus:ring-control-border-soft" />
        </label>

        <label className={`grid gap-2 ${compact ? "" : "lg:col-span-2"}`}>
          <span className={fieldLabel}>URL slug</span>
          <span className="flex min-w-0 items-center rounded-[var(--radius-small)] bg-panel-strong ring-1 ring-border focus-within:ring-2 focus-within:ring-control-border-soft">
            <span className="shrink-0 pl-4 text-sm text-muted-foreground">/blog/</span>
            <input value={slug} onChange={(event) => onSlugChange(event.target.value)} placeholder="generated-from-title" className="min-w-0 flex-1 border-0 bg-transparent px-1 py-4 text-sm font-medium text-foreground outline-none" />
          </span>
        </label>

        <label className="grid gap-2">
          <span className="flex items-center justify-between gap-3">
            <span className={fieldLabel}>Excerpt</span>
            <span className="text-xs text-muted-foreground">{excerpt.length}/320</span>
          </span>
          <textarea value={excerpt} maxLength={320} onChange={(event) => onExcerptChange(event.target.value)} placeholder="A short summary for cards, previews, and search." className="mb-0 block min-h-48 w-full rounded-[var(--radius-small)] border border-border bg-panel-strong p-4 text-base font-medium text-ink transition placeholder:text-control-muted hover:border-control-border-soft focus:border-control-border focus:outline-none focus:ring-2 focus:ring-control-border-soft" />
        </label>

        <div className="grid gap-2">
          <span className={fieldLabel}>Cover image</span>
          <input ref={coverInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="sr-only" onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) onCoverFileChange(file);
            event.target.value = "";
          }} />
          {coverImage ? (
            <div className="group relative min-h-48 overflow-hidden rounded-[var(--radius-small)] bg-panel-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={coverImage} alt="Post cover preview" className="h-full min-h-48 w-full object-cover" />
              <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                <button type="button" onClick={() => coverInputRef.current?.click()} className="flex-1 rounded-full bg-ink px-4 py-[0.66em] font-mono text-base leading-none text-paper transition-opacity hover:opacity-50">Replace</button>
                <button type="button" aria-label="Remove cover image" onClick={() => onCoverImageChange("")} className="grid h-11 w-11 place-items-center rounded-full bg-ink p-0 font-mono text-paper transition-opacity hover:opacity-50"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ) : (
            <button type="button" onClick={() => coverInputRef.current?.click()} className="grid min-h-48 place-items-center rounded-[var(--radius-small)] border border-dashed border-border bg-panel-soft p-6 text-center transition hover:border-muted-foreground hover:bg-panel-soft">
              <span><ImagePlus className="mx-auto h-6 w-6" /><span className="mt-3 block text-sm font-semibold">Choose a cover image</span><span className="mt-1 block text-xs text-muted-foreground">JPG, PNG, WebP or GIF · up to 10 MB</span></span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

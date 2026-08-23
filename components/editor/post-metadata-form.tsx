"use client";

import { ImagePlus, Trash2 } from "lucide-react";
import { useRef } from "react";

type Props = {
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

const fieldLabel = "text-sm font-semibold text-[color:var(--black)]";

export function PostMetadataForm({
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
    <section className="rounded-[var(--radius-medium)] bg-[color:var(--black-5)] p-5 sm:p-7">
      <div className="border-b border-black/10 pb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/55">Post details</p>
        <p className="mt-1 text-sm text-black/60">The information readers see before opening your article.</p>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <label className="grid gap-2 lg:col-span-2">
          <span className={fieldLabel}>Title</span>
          <input value={title} onChange={(event) => onTitleChange(event.target.value)} placeholder="Untitled post" className="text-field cc-editor-title w-input u-margin-bottom-0" />
        </label>

        <label className="grid gap-2 lg:col-span-2">
          <span className={fieldLabel}>URL slug</span>
          <span className="flex min-w-0 items-center rounded-[var(--pill-radius)] bg-[color:var(--black-5)] ring-1 ring-black/10 focus-within:ring-black/30">
            <span className="shrink-0 pl-4 text-sm text-black/45">/blog/</span>
            <input value={slug} onChange={(event) => onSlugChange(event.target.value)} placeholder="generated-from-title" className="min-w-0 flex-1 border-0 bg-transparent px-1 py-4 text-sm font-medium text-black outline-none" />
          </span>
        </label>

        <label className="grid gap-2">
          <span className="flex items-center justify-between gap-3">
            <span className={fieldLabel}>Excerpt</span>
            <span className="text-xs text-black/45">{excerpt.length}/320</span>
          </span>
          <textarea value={excerpt} maxLength={320} onChange={(event) => onExcerptChange(event.target.value)} placeholder="A short summary for cards, previews, and search." className="text-field cc-message w-input u-margin-bottom-0" />
        </label>

        <div className="grid gap-2">
          <span className={fieldLabel}>Cover image</span>
          <input ref={coverInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="sr-only" onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) onCoverFileChange(file);
            event.target.value = "";
          }} />
          {coverImage ? (
            <div className="group relative min-h-48 overflow-hidden rounded-[var(--radius-small)] bg-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={coverImage} alt="Post cover preview" className="h-full min-h-48 w-full object-cover" />
              <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                <button type="button" onClick={() => coverInputRef.current?.click()} className="button flex-1">Replace</button>
                <button type="button" aria-label="Remove cover image" onClick={() => onCoverImageChange("")} className="button grid h-11 w-11 place-items-center p-0"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ) : (
            <button type="button" onClick={() => coverInputRef.current?.click()} className="grid min-h-48 place-items-center rounded-[var(--radius-small)] border border-dashed border-black/25 bg-black/[0.03] p-6 text-center transition hover:border-black/50 hover:bg-black/[0.06]">
              <span><ImagePlus className="mx-auto h-6 w-6" /><span className="mt-3 block text-sm font-semibold">Choose a cover image</span><span className="mt-1 block text-xs text-black/50">JPG, PNG, WebP or GIF · up to 10 MB</span></span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

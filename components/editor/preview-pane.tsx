"use client";

type PreviewPaneProps = {
  title: string;
  excerpt: string;
  coverImage: string;
  contentHtml: string;
};

export function PreviewPane({
  title,
  excerpt,
  coverImage,
  contentHtml,
}: PreviewPaneProps) {
  return (
    <section className="rounded-[32px] border border-white/60 bg-[color:var(--panel-strong)]/95 p-6 shadow-[0_24px_80px_-45px_rgba(15,23,42,0.6)] backdrop-blur sm:p-10">
      <div className="mx-auto max-w-3xl">
        <div className="border-b border-[color:var(--border)] pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
            Preview
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            {title.trim() || "Untitled post"}
          </h1>
          {excerpt.trim() ? (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
              {excerpt}
            </p>
          ) : null}
        </div>

        {coverImage ? (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[28px] border border-[color:var(--border)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={coverImage}
              alt={title || "Post cover image"}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}

        <div
          className="editor-preview mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </section>
  );
}

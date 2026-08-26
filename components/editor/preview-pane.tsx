"use client";

type PreviewPaneProps = {
  modal?: boolean;
  title: string;
  excerpt: string;
  coverImage: string;
  contentHtml: string;
};

export function PreviewPane({
  modal = false,
  title,
  excerpt,
  coverImage,
  contentHtml,
}: PreviewPaneProps) {
  return (
    <section className={modal ? "bg-panel-strong px-6 py-8 sm:px-12 sm:py-14" : "rounded-[var(--radius-medium)] border border-border bg-panel-strong p-6 sm:p-10"}>
      <div className="mx-auto max-w-3xl">
        <div className="border-b border-border pb-8">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Preview
          </p>
          <h1 className="mb-6 mt-3 max-w-3xl font-serif text-[clamp(3rem,8vw,5rem)] leading-[1.04] tracking-[-0.025em]">
            {title.trim() || "Untitled post"}
          </h1>
          {excerpt.trim() ? (
            <p className="mt-4 max-w-2xl text-xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
              {excerpt}
            </p>
          ) : null}
        </div>

        {coverImage ? (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={coverImage}
              alt={title || "Post cover image"}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}

        <div
          className="editor-preview-content mx-auto mt-10 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </section>
  );
}

import { Clock3, FileText } from "lucide-react";
import Link from "next/link";

import { NewPostButton } from "@/components/dashboard/new-post-button";
import { getAllPosts } from "@/lib/posts/repository";

export const metadata = { title: "Drafts" };

export default async function DraftsPage() {
  const posts = await getAllPosts();
  const drafts = posts.filter((post) => post.status === "draft");

  return (
    <div className="mx-auto max-w-[76rem]">
      <header className="flex flex-col justify-between gap-5 border-b border-border pb-7 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Library</p>
          <h1 className="m-0 mt-2 text-4xl tracking-[-0.04em] sm:text-5xl">Drafts</h1>
          <p className="mb-0 mt-3 text-muted-foreground">Every unfinished idea, ready when you are.</p>
        </div>
        <NewPostButton className="w-full self-start sm:w-44" />
      </header>

      <section className="mt-7 overflow-hidden rounded-[var(--radius-medium)] border border-border bg-panel-strong">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="m-0 text-sm font-semibold">All drafts</p>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{drafts.length} total</span>
        </div>
        {drafts.length ? (
          <ul className="m-0 list-none gap-0 p-0">
            {drafts.map((post) => (
              <li key={post.id} className="border-b border-border last:border-0">
                <Link href={`/dashboard/editor/${post.id}`} className="group flex items-center gap-4 px-5 py-5 hover:bg-panel-soft hover:opacity-100">
                  <span className="grid size-11 flex-none place-items-center rounded-xl border border-border bg-panel">
                    <FileText aria-hidden="true" className="size-4 text-muted-foreground" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold">{post.title || "Untitled draft"}</span>
                    <span className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock3 aria-hidden="true" className="size-3" /> Updated {new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(post.updatedAt))}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground transition-transform group-hover:translate-x-1">Edit →</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="px-5 py-16 text-center">
            <p className="font-serif text-2xl font-bold">No drafts waiting.</p>
            <p className="text-sm text-muted-foreground">Start a new post and it will appear here automatically.</p>
          </div>
        )}
      </section>
    </div>
  );
}

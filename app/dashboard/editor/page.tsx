import type { Metadata } from "next";
import Link from "next/link";

import { NewPostButton } from "@/components/dashboard/new-post-button";

export const metadata: Metadata = {
  title: "New Draft",
  description: "Start a new article draft.",
  robots: { index: false, follow: false },
};

export default function DashboardEditorEntryPage() {
  return (
    <div className="grid min-h-[calc(100dvh-4rem)] place-items-center px-4 py-12">
      <section className="w-full max-w-xl rounded-[var(--radius-medium)] border border-border bg-panel-strong p-6 text-center sm:p-9">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Writing desk</p>
        <h1 className="m-0 mt-3 text-4xl tracking-[-0.04em]">Start with a blank page.</h1>
        <p className="mx-auto mb-0 mt-4 max-w-md text-sm leading-6 text-muted-foreground">A draft is created only after you choose to begin, keeping the library free of accidental empty posts.</p>
        <div className="mx-auto mt-7 w-full max-w-52"><NewPostButton /></div>
        <Link href="/dashboard/drafts" className="mt-4 inline-block font-mono text-xs text-muted-foreground">Return to drafts</Link>
      </section>
    </div>
  );
}

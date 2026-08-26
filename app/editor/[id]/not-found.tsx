import Link from "next/link";

export default function EditorNotFound() {
  return (
    <div className="editor-workspace min-h-screen bg-background px-4 py-12 text-foreground">
      <div className="mx-auto max-w-2xl border-y border-border py-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Missing draft
        </p>
        <h1 className="mt-3 font-serif text-3xl tracking-tight">
          This editor draft no longer exists.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Create a new draft to keep writing, or return to the dashboard.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/editor"
            className="rounded-full bg-panel-inverse px-4 py-2 text-sm font-semibold text-panel-inverse-foreground"
          >
            New draft
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-border bg-panel px-4 py-2 text-sm font-semibold"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

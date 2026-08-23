import Link from "next/link";

export default function EditorNotFound() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] px-4 py-12 text-[color:var(--foreground)]">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.65)]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
          Missing draft
        </p>
        <h1 className="mt-3 font-serif text-3xl tracking-tight">
          This editor draft no longer exists.
        </h1>
        <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
          Create a new draft to keep writing, or return to the dashboard.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/editor"
            className="rounded-full bg-[color:var(--brand-500)] px-4 py-2 text-sm font-semibold text-white"
          >
            New draft
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-2 text-sm font-semibold"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

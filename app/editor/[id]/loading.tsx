export default function EditorDetailLoading() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] px-4 py-12 text-[color:var(--foreground)]">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="h-28 animate-pulse rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-strong)]" />
        <div className="h-56 animate-pulse rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-strong)]" />
        <div className="h-[28rem] animate-pulse rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-strong)]" />
      </div>
    </div>
  );
}


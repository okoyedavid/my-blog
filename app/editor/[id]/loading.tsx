export default function EditorDetailLoading() {
  return (
    <div className="editor-workspace min-h-screen bg-background px-4 py-12 text-foreground">
      <div className="mx-auto max-w-[68rem] space-y-6">
        <div className="h-28 animate-pulse border-b border-border bg-panel-soft/40" />
        <div className="h-56 animate-pulse border-y border-border bg-panel-soft/40" />
        <div className="h-[28rem] animate-pulse rounded-[var(--radius-medium)] border border-border bg-panel-strong" />
      </div>
    </div>
  );
}

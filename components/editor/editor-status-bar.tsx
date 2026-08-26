"use client";

import type { PostStats } from "@/lib/posts/types";

type EditorStatusBarProps = {
  saveState: "idle" | "saving" | "saved" | "error";
  lastSavedAt: string | null;
  stats: PostStats;
  isDirty: boolean;
  errorMessage: string | null;
};

const saveStateLabel = {
  idle: "Unsaved changes",
  saving: "Saving...",
  saved: "Saved",
  error: "Save failed",
} as const;

export function EditorStatusBar({
  saveState,
  lastSavedAt,
  stats,
  isDirty,
  errorMessage,
}: EditorStatusBarProps) {
  const formattedTime = lastSavedAt
    ? new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }).format(new Date(lastSavedAt))
    : null;

  return (
    <div className="border-t border-[color:var(--border)] px-1 py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span
            className={`rounded-full px-3 py-1 font-medium ${
              saveState === "error"
                ? "bg-[color:var(--danger-bg)] text-[color:var(--danger-foreground)]"
                : saveState === "saving"
                  ? "bg-[color:var(--warning-bg)] text-[color:var(--warning-foreground)]"
                  : "bg-[color:var(--success-bg)] text-[color:var(--success-foreground)]"
            }`}
          >
            {saveStateLabel[saveState]}
          </span>
          {formattedTime ? (
            <span className="text-[color:var(--muted-foreground)]">
              Last saved at {formattedTime}
            </span>
          ) : null}
          {isDirty && saveState !== "saving" ? (
            <span className="text-[color:var(--muted-foreground)]">
              Changes are queued locally.
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted-foreground)]">
          <span>{stats.words} words</span>
          <span>{stats.characters} characters</span>
          <span>{stats.readingTimeMinutes} min read</span>
        </div>
      </div>

      {errorMessage ? (
        <p className="mt-3 text-sm text-[color:var(--danger-foreground)]">{errorMessage}</p>
      ) : null}
    </div>
  );
}

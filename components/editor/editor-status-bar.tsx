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
    <div className="rounded-[24px] border border-slate-200 bg-white px-4 py-3 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.12)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span
            className={`rounded-full px-3 py-1 font-medium ${
              saveState === "error"
                ? "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200"
                : saveState === "saving"
                  ? "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200"
                  : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200"
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
        <p className="mt-3 text-sm text-rose-600 dark:text-rose-300">{errorMessage}</p>
      ) : null}
    </div>
  );
}

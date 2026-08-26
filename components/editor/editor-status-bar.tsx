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
    <div className="border-t border-border px-1 py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span
            className={`rounded-full px-3 py-1 font-medium ${
              saveState === "error"
                ? "bg-danger-bg text-danger-foreground"
                : saveState === "saving"
                  ? "bg-warning-bg text-warning-foreground"
                  : "bg-success-bg text-success-foreground"
            }`}
          >
            {saveStateLabel[saveState]}
          </span>
          {formattedTime ? (
            <span className="text-muted-foreground">
              Last saved at {formattedTime}
            </span>
          ) : null}
          {isDirty && saveState !== "saving" ? (
            <span className="text-muted-foreground">
              Changes are queued locally.
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>{stats.words} words</span>
          <span>{stats.characters} characters</span>
          <span>{stats.readingTimeMinutes} min read</span>
        </div>
      </div>

      {errorMessage ? (
        <p className="mt-3 text-sm text-danger-foreground">{errorMessage}</p>
      ) : null}
    </div>
  );
}

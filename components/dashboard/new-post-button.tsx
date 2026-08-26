"use client";

import { PenLine } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function NewPostButton({
  collapsed = false,
  className = "",
}: {
  collapsed?: boolean;
  className?: string;
}) {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createDraft = async () => {
    if (isCreating) return;
    setIsCreating(true);
    setError(null);

    try {
      const response = await fetch("/api/posts", { method: "POST" });
      const result = (await response.json()) as {
        post?: { id: string };
        error?: string;
      };
      if (!response.ok || !result.post) {
        throw new Error(result.error || "Could not create the draft.");
      }
      router.push(`/dashboard/editor/${result.post.id}`);
      router.refresh();
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "Could not create the draft.",
      );
      setIsCreating(false);
    }
  };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => void createDraft()}
        disabled={isCreating}
        aria-label={collapsed ? "Create a new post" : undefined}
        title={collapsed ? "New post" : undefined}
        className={`flex min-h-11 w-full items-center rounded-full bg-[color:var(--panel-inverse)] text-sm font-semibold text-[color:var(--panel-inverse-foreground)] transition hover:opacity-80 disabled:cursor-wait disabled:opacity-55 ${collapsed ? "justify-center px-0" : "justify-between px-4"}`}
      >
        <span className="flex items-center gap-2.5">
          <PenLine aria-hidden="true" className="size-4" />
          {collapsed ? null : isCreating ? "Creating draft…" : "New post"}
        </span>
        {collapsed ? null : <span aria-hidden="true">＋</span>}
      </button>
      {error && !collapsed ? (
        <p role="alert" className="mb-0 mt-2 px-2 text-xs text-[color:var(--danger-foreground)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const themeEvent = "okoye-theme-change";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handleSystemChange = () => {
    if (window.localStorage.getItem("okoye-theme")) return;
    document.documentElement.dataset.theme = media.matches ? "dark" : "light";
    onStoreChange();
  };

  window.addEventListener(themeEvent, onStoreChange);
  media.addEventListener("change", handleSystemChange);

  return () => {
    window.removeEventListener(themeEvent, onStoreChange);
    media.removeEventListener("change", handleSystemChange);
  };
}

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextTheme: Theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("okoye-theme", nextTheme);
    window.dispatchEvent(new Event(themeEvent));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[var(--control-border)] bg-[var(--control-bg)] font-mono text-xs leading-none transition-colors hover:bg-[var(--control-focus)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--control-border-soft)] ${compact ? "size-10 p-0" : "min-h-9 px-3 py-2"}`}
    >
      {isDark ? <Sun aria-hidden="true" className="size-4" /> : <Moon aria-hidden="true" className="size-4" />}
      {compact ? null : <span>{isDark ? "Light mode" : "Dark mode"}</span>}
    </button>
  );
}

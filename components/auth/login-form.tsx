"use client";

import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { useAuth } from "@/components/editor/editor-shell";

export function LoginForm({ returnTo = "/dashboard" }: { returnTo?: string }) {
  const router = useRouter();
  const { isAuthenticated, isReady, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const normalizedEmail = email.trim();
    if (!normalizedEmail || !password) {
      setError("Enter your email and password to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      login({ email: normalizedEmail, password });
      router.replace(returnTo);
      router.refresh();
    } catch {
      setError("We couldn’t sign you in. Check your details and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[var(--radius-medium)] border border-border bg-panel-strong p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)] sm:p-8">
      <div className="mb-8 border-b border-border pb-6">
        <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Writer access
        </p>
        <h1 className="m-0 font-serif text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-[-0.04em]">
          Welcome back.
        </h1>
        <p className="mb-0 mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
          Sign in to return to your drafts and continue shaping your next story.
        </p>
      </div>

      {isReady && isAuthenticated ? (
        <div className="rounded-[var(--radius-small)] border border-border bg-panel-soft p-4">
          <p className="mb-3 text-sm text-muted-foreground">
            You’re already signed in and ready to write.
          </p>
          <Link
            href={returnTo}
            className="inline-flex min-h-11 w-full items-center justify-between rounded-full bg-panel-inverse px-5 text-sm font-semibold text-panel-inverse-foreground hover:opacity-80"
          >
            Continue to the editor
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5">
            <label className="m-0 grid gap-2" htmlFor="login-email">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Email address
              </span>
              <input
                id="login-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                autoFocus
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="h-12 w-full rounded-[var(--radius-small)] border border-border bg-panel px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-control-border focus:ring-2 focus:ring-control-border-soft"
              />
            </label>

            <label className="m-0 grid gap-2" htmlFor="login-password">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Password
              </span>
              <span className="relative block">
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-[var(--radius-small)] border border-border bg-panel px-4 pr-12 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-control-border focus:ring-2 focus:ring-control-border-soft"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="absolute right-1.5 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition hover:bg-panel-soft hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-control-border-soft"
                >
                  {showPassword ? (
                    <EyeOff aria-hidden="true" className="size-4" />
                  ) : (
                    <Eye aria-hidden="true" className="size-4" />
                  )}
                </button>
              </span>
            </label>

            {error ? (
              <p
                role="alert"
                className="m-0 rounded-xl bg-danger-bg px-4 py-3 text-sm text-danger-foreground"
              >
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-panel-inverse px-5 text-sm font-semibold text-panel-inverse-foreground transition hover:opacity-80 disabled:cursor-wait disabled:opacity-55"
            >
              <span>{isSubmitting ? "Opening your desk…" : "Sign in"}</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </form>
      )}

      <p className="mb-0 mt-6 text-center text-xs leading-5 text-muted-foreground">
        This area is reserved for contributors to Okoye’s Log.
      </p>
    </div>
  );
}

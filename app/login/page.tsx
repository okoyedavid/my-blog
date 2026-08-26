import type { Metadata } from "next";
import Link from "next/link";

import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Writer Login",
  description: "Sign in to the Okoye’s Log writing desk.",
  robots: { index: false, follow: false },
};

function getSafeReturnPath(value: string | string[] | undefined) {
  const path = Array.isArray(value) ? value[0] : value;
  return path?.startsWith("/") && !path.startsWith("//") ? path : "/dashboard";
}

export default async function LoginPage({
  searchParams,
}: PageProps<"/login">) {
  const query = await searchParams;
  const returnTo = getSafeReturnPath(query.next);

  return (
    <main className="auth-workspace relative flex min-h-[calc(100dvh-4rem)] flex-1 overflow-hidden bg-[color:var(--background)] px-4 py-8 text-[color:var(--foreground)] sm:px-6 sm:py-12 lg:items-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-12 size-72 rounded-full border border-[color:var(--border)] opacity-70 sm:size-[28rem] lg:-right-36 lg:top-1/2 lg:-translate-y-1/2"
      >
        <div className="absolute inset-[16%] rounded-full border border-[color:var(--border)]" />
        <div className="absolute inset-[34%] rounded-full bg-[color:var(--panel-soft)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[68rem] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,29rem)] lg:gap-20">
        <section className="max-w-xl pt-4 lg:pt-0">
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
            <span className="grid size-8 place-items-center rounded-full border border-[color:var(--control-border)] text-[color:var(--foreground)]">
              01
            </span>
            The writing desk
          </div>

          <p className="mb-4 font-serif text-[clamp(2.8rem,7vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.055em]">
            Good writing starts with a quiet place.
          </p>
          <p className="mb-0 max-w-lg text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg sm:leading-8">
            A focused workspace for drafting technical notes, refining ideas, and publishing stories worth returning to.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[color:var(--border)] pt-5 font-mono text-xs text-[color:var(--muted-foreground)]">
            <span>Draft</span>
            <span aria-hidden="true">→</span>
            <span>Refine</span>
            <span aria-hidden="true">→</span>
            <span>Publish</span>
          </div>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-medium underline decoration-[color:var(--border)] underline-offset-4"
          >
            ← Back to the journal
          </Link>
        </section>

        <section aria-label="Sign in to the writing desk">
          <LoginForm returnTo={returnTo} />
        </section>
      </div>
    </main>
  );
}

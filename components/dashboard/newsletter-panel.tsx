"use client";

import { Check, Mail, Send, Users } from "lucide-react";
import { FormEvent, useState } from "react";

export function NewsletterPanel() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [saved, setSaved] = useState(false);

  const saveDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem(
      "okoye-newsletter-draft",
      JSON.stringify({ subject, message, savedAt: new Date().toISOString() }),
    );
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
      <form onSubmit={saveDraft} className="rounded-[var(--radius-medium)] border border-border bg-panel-strong p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="m-0 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Compose</p>
            <h2 className="mb-0 mt-2 text-2xl">New newsletter</h2>
          </div>
          <span className="rounded-full bg-warning-bg px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-warning-foreground">Delivery not connected</span>
        </div>
        <div className="mt-6 grid gap-5">
          <label className="m-0 grid gap-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Subject</span>
            <input value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="What are you sharing?" className="h-12 rounded-xl border border-border bg-panel px-4 outline-none focus:border-control-border focus:ring-2 focus:ring-control-border-soft" />
          </label>
          <label className="m-0 grid gap-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Message</span>
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={12} placeholder="Write a note to your readers…" className="resize-y rounded-xl border border-border bg-panel p-4 leading-7 outline-none focus:border-control-border focus:ring-2 focus:ring-control-border-soft" />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
            <p className="m-0 text-xs text-muted-foreground">Sending will be enabled when an email provider is connected.</p>
            <div className="flex items-center gap-2">
              <button type="submit" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold">
                {saved ? <Check aria-hidden="true" className="size-4" /> : null}{saved ? "Draft saved" : "Save draft"}
              </button>
              <button type="button" disabled className="inline-flex min-h-10 cursor-not-allowed items-center gap-2 rounded-full bg-panel-inverse px-4 text-sm font-semibold text-panel-inverse-foreground opacity-45"><Send aria-hidden="true" className="size-4" /> Send</button>
            </div>
          </div>
        </div>
      </form>

      <aside className="space-y-4">
        <article className="rounded-[var(--radius-small)] border border-border bg-panel-strong p-5"><Users aria-hidden="true" className="size-4 text-muted-foreground" /><p className="mb-1 mt-5 font-serif text-4xl font-bold">1,284</p><p className="m-0 text-sm text-muted-foreground">Active subscribers</p></article>
        <article className="rounded-[var(--radius-small)] border border-border bg-panel-strong p-5"><Mail aria-hidden="true" className="size-4 text-muted-foreground" /><p className="mb-1 mt-5 font-serif text-4xl font-bold">62%</p><p className="m-0 text-sm text-muted-foreground">Average open rate</p></article>
        <div className="rounded-[var(--radius-small)] border border-dashed border-brand-border bg-brand-soft p-5"><p className="m-0 text-sm font-semibold">Next step</p><p className="mb-0 mt-2 text-xs leading-5 text-muted-foreground">Connect Resend, Buttondown, or another delivery service when you are ready to send.</p></div>
      </aside>
    </div>
  );
}

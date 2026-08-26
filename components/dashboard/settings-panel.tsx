"use client";

import { Bell, Camera, Check, Laptop, LogOut, Moon, Smartphone, Sun } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState, useSyncExternalStore } from "react";

import { useAuth } from "@/components/editor/editor-shell";

type SettingsTab = "profile" | "appearance" | "sessions" | "notifications";
const tabs: { id: SettingsTab; label: string }[] = [
  { id: "profile", label: "Profile" },
  { id: "appearance", label: "Appearance" },
  { id: "sessions", label: "Sessions" },
  { id: "notifications", label: "Notifications" },
];
const themeEvent = "okoye-theme-change";

function getTheme() { return document.documentElement.dataset.theme === "dark" ? "dark" : "light"; }
function subscribeTheme(onChange: () => void) { window.addEventListener(themeEvent, onChange); return () => window.removeEventListener(themeEvent, onChange); }
function applyTheme(next: "light" | "dark") { document.documentElement.dataset.theme = next; localStorage.setItem("okoye-theme", next); window.dispatchEvent(new Event(themeEvent)); }

export function SettingsPanel({ initialTab }: { initialTab: SettingsTab }) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "light");
  const tab = initialTab;
  const [name, setName] = useState(user?.name ?? "David Okoye");
  const [email, setEmail] = useState(user?.email ?? "david@example.com");
  const [bio, setBio] = useState("Full-stack engineer writing about secure products, systems, and thoughtful interfaces.");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [sessions, setSessions] = useState(["current", "mobile"]);
  const [pendingSessionRevoke, setPendingSessionRevoke] = useState<string | null>(null);
  const [confirmingLogout, setConfirmingLogout] = useState(false);
  const [preferences, setPreferences] = useState({ comments: true, milestones: true, newsletter: false, security: true });

  const chooseTab = (next: SettingsTab) => {
    router.replace(`/dashboard/settings?tab=${next}`, { scroll: false });
  };
  const saveProfile = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem("okoye-dashboard-profile", JSON.stringify({ name, email, bio }));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };
  const loadAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(typeof reader.result === "string" ? reader.result : null);
    reader.readAsDataURL(file);
  };
  const updatePreference = (key: keyof typeof preferences) => {
    setPreferences((current) => {
      const next = { ...current, [key]: !current[key] };
      localStorage.setItem("okoye-notification-preferences", JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[13rem_minmax(0,1fr)]">
      <nav aria-label="Settings" className="lg:sticky lg:top-24 lg:self-start">
        <div className="flex gap-1 overflow-x-auto rounded-xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-1 lg:flex-col">
          {tabs.map((item) => <button key={item.id} type="button" onClick={() => chooseTab(item.id)} className={`whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm font-medium transition ${tab === item.id ? "bg-[color:var(--panel-inverse)] text-[color:var(--panel-inverse-foreground)]" : "text-[color:var(--muted-foreground)] hover:bg-[color:var(--panel-soft)]"}`}>{item.label}</button>)}
        </div>
      </nav>

      <section className="min-w-0 rounded-[var(--radius-medium)] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-5 sm:p-7">
        {tab === "profile" ? (
          <form onSubmit={saveProfile}>
            <SettingsHeading eyebrow="Personal details" title="Profile" description="Update how you appear across the dashboard and your articles." />
            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid size-24 flex-none place-items-center overflow-hidden rounded-full bg-[color:var(--brand-soft)] font-serif text-2xl font-bold">
                {avatar ? <Image src={avatar} alt="Profile preview" width={96} height={96} unoptimized className="size-full object-cover" /> : name.slice(0, 2).toUpperCase()}
              </div>
              <div><label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-semibold"><Camera aria-hidden="true" className="size-4" /> Change photo<input type="file" accept="image/*" onChange={loadAvatar} className="sr-only" /></label><p className="mb-0 mt-2 text-xs text-[color:var(--muted-foreground)]">JPG, PNG, or WebP. Previewed locally.</p></div>
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <SettingsField label="Display name"><input value={name} onChange={(event) => setName(event.target.value)} className="settings-input" /></SettingsField>
              <SettingsField label="Email"><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="settings-input" /></SettingsField>
              <SettingsField label="Bio" wide><textarea rows={4} value={bio} onChange={(event) => setBio(event.target.value)} className="settings-input h-auto resize-y py-3" /></SettingsField>
            </div>
            <div className="mt-6 flex justify-end"><button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[color:var(--panel-inverse)] px-5 text-sm font-semibold text-[color:var(--panel-inverse-foreground)]">{saved ? <Check aria-hidden="true" className="size-4" /> : null}{saved ? "Saved" : "Save profile"}</button></div>
          </form>
        ) : null}

          {tab === "appearance" ? <div><SettingsHeading eyebrow="Interface" title="Appearance" description="Choose the theme used throughout the site and writing dashboard." /><div className="mt-7 grid gap-4 sm:grid-cols-2">{(["light", "dark"] as const).map((option) => { const Icon = option === "light" ? Sun : Moon; return <button key={option} type="button" onClick={() => applyTheme(option)} className={`rounded-2xl border p-5 text-left transition ${theme === option ? "border-[color:var(--control-border)] ring-2 ring-[color:var(--control-border-soft)]" : "border-[color:var(--border)] hover:bg-[color:var(--panel-soft)]"}`}><span className={`mb-5 grid size-11 place-items-center rounded-full ${option === "light" ? "bg-[#f2efe7] text-[#262626]" : "bg-[#262626] text-[#f3efe7]"}`}><Icon aria-hidden="true" className="size-5" /></span><span className="block font-semibold capitalize">{option} mode</span><span className="mt-1 block text-xs text-[color:var(--muted-foreground)]">{option === "light" ? "Warm paper tones for daytime writing." : "A low-glare desk for evening work."}</span>{theme === option ? <span className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em]"><Check aria-hidden="true" className="size-3" /> Active</span> : null}</button>; })}</div></div> : null}

        {tab === "sessions" ? <div><SettingsHeading eyebrow="Security" title="Active sessions" description="Review the devices currently signed in to your writing account." /><div className="mt-7 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">{sessions.includes("current") ? <SessionRow icon={Laptop} title="Chrome on Windows" meta="Lagos, Nigeria · Current session" current onRevoke={() => undefined} /> : null}{sessions.includes("mobile") ? <SessionRow icon={Smartphone} title="Safari on iPhone" meta="Lagos, Nigeria · Active 2 days ago" confirming={pendingSessionRevoke === "mobile"} onRevoke={() => { if (pendingSessionRevoke === "mobile") { setSessions((items) => items.filter((item) => item !== "mobile")); setPendingSessionRevoke(null); } else { setPendingSessionRevoke("mobile"); } }} /> : null}</div><button type="button" onClick={() => { if (!confirmingLogout) { setConfirmingLogout(true); return; } logout(); router.push("/login"); }} className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-semibold text-[color:var(--danger-foreground)]"><LogOut aria-hidden="true" className="size-4" /> {confirmingLogout ? "Confirm sign out" : "Sign out current session"}</button></div> : null}

        {tab === "notifications" ? <div><SettingsHeading eyebrow="Inbox" title="Notifications" description="Choose which events should get your attention." /><div className="mt-7 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">{Object.entries({ comments: ["Reader responses", "New comments and replies on your posts."], milestones: ["Performance milestones", "Traffic spikes and completion-rate changes."], newsletter: ["Newsletter reports", "Delivery and open-rate summaries."], security: ["Security alerts", "New sessions and account changes."] }).map(([key, content]) => { const preferenceKey = key as keyof typeof preferences; const checked = preferences[preferenceKey]; return <label key={key} className="m-0 flex items-center justify-between gap-5 py-5"><span><span className="block text-sm font-semibold">{content[0]}</span><span className="mt-1 block text-xs text-[color:var(--muted-foreground)]">{content[1]}</span></span><input type="checkbox" checked={checked} onChange={() => updatePreference(preferenceKey)} className="size-5 accent-[color:var(--brand-500)]" /></label>; })}</div><div className="mt-7 rounded-2xl bg-[color:var(--panel-soft)] p-5"><div className="flex gap-3"><Bell aria-hidden="true" className="mt-0.5 size-4" /><div><p className="m-0 text-sm font-semibold">3 unread notifications</p><p className="mb-0 mt-1 text-xs text-[color:var(--muted-foreground)]">Your portfolio article crossed 4,000 clicks, two readers subscribed, and a new session was opened.</p></div></div></div></div> : null}
      </section>
    </div>
  );
}

function SettingsHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <header className="border-b border-[color:var(--border)] pb-6"><p className="m-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">{eyebrow}</p><h2 className="mb-0 mt-2 text-3xl">{title}</h2><p className="mb-0 mt-2 text-sm text-[color:var(--muted-foreground)]">{description}</p></header>; }
function SettingsField({ label, wide = false, children }: { label: string; wide?: boolean; children: React.ReactNode }) { return <label className={`m-0 grid gap-2 ${wide ? "sm:col-span-2" : ""}`}><span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted-foreground)]">{label}</span>{children}</label>; }
function SessionRow({ icon: Icon, title, meta, current = false, confirming = false, onRevoke }: { icon: typeof Laptop; title: string; meta: string; current?: boolean; confirming?: boolean; onRevoke: () => void }) { return <div className="flex items-center gap-4 py-5"><span className="grid size-11 flex-none place-items-center rounded-xl bg-[color:var(--panel-soft)]"><Icon aria-hidden="true" className="size-4" /></span><span className="min-w-0 flex-1"><span className="block text-sm font-semibold">{title}</span><span className="block truncate text-xs text-[color:var(--muted-foreground)]">{meta}</span></span>{current ? <span className="rounded-full bg-[color:var(--success-bg)] px-3 py-1 font-mono text-[9px] uppercase text-[color:var(--success-foreground)]">Current</span> : <button type="button" onClick={onRevoke} className="text-xs font-semibold text-[color:var(--danger-foreground)]">{confirming ? "Confirm revoke" : "Revoke"}</button>}</div>; }

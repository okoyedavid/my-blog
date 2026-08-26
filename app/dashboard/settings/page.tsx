import { SettingsPanel } from "@/components/dashboard/settings-panel";

export const metadata = { title: "Settings" };

const validTabs = ["profile", "appearance", "sessions", "notifications"] as const;

export default async function SettingsPage({ searchParams }: PageProps<"/dashboard/settings">) {
  const query = await searchParams;
  const requested = Array.isArray(query.tab) ? query.tab[0] : query.tab;
  const initialTab = validTabs.find((tab) => tab === requested) ?? "profile";
  return <div className="mx-auto max-w-[76rem]"><header className="border-b border-border pb-7"><p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Account</p><h1 className="m-0 mt-2 text-4xl tracking-[-0.04em] sm:text-5xl">Settings</h1><p className="mb-0 mt-3 text-muted-foreground">Manage your profile, appearance, sessions, and notifications.</p></header><div className="mt-7"><SettingsPanel initialTab={initialTab} /></div></div>;
}

"use client";

import {
  Bell,
  ChevronLeft,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Mail,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useAuth } from "@/components/editor/editor-shell";
import { NewPostButton } from "@/components/dashboard/new-post-button";

const navigation = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/drafts", label: "Drafts", icon: FileText },
  { href: "/dashboard/categories", label: "Categories", icon: FolderOpen },
  { href: "/dashboard/newsletter", label: "Newsletter", icon: Mail },
];

const accountNavigation = [
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/settings?tab=notifications", label: "Notifications", icon: Bell },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady, user } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isEditor = pathname.startsWith("/dashboard/editor");
  const sidebarScope = isEditor ? "editor" : "dashboard";
  const [sidebarPreference, setSidebarPreference] = useState<{
    scope: "editor" | "dashboard";
    collapsed: boolean;
  } | null>(null);
  const isCollapsed =
    sidebarPreference?.scope === sidebarScope
      ? sidebarPreference.collapsed
      : isEditor;
  const [editorDetailsOpen, setEditorDetailsOpen] = useState(true);

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [isAuthenticated, isReady, pathname, router]);

  useEffect(() => {
    const updateDetailsVisibility = (event: Event) => {
      setEditorDetailsOpen((event as CustomEvent<boolean>).detail);
    };
    window.addEventListener(
      "editor-details-visibility",
      updateDetailsVisibility,
    );
    return () =>
      window.removeEventListener(
        "editor-details-visibility",
        updateDetailsVisibility,
      );
  }, []);

  if (!isReady || !isAuthenticated) {
    return (
      <div className="dashboard-shell grid min-h-dvh place-items-center bg-background text-foreground">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Opening dashboard…
        </p>
      </div>
    );
  }

  const isActive = (href: string, exact = false) =>
    exact ? pathname === href : pathname.startsWith(href.split("?")[0]);

  const renderSidebar = (collapsed: boolean) => (
    <aside
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) setIsMobileOpen(false);
      }}
      className={`flex h-full flex-col bg-panel-strong py-5 text-foreground ${collapsed ? "px-2" : "px-4"}`}
    >
      <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between px-2"}`}>
        <Link href="/" aria-label="Okoye’s Log homepage" className={`font-serif font-bold tracking-[-0.035em] ${collapsed ? "grid size-10 place-items-center rounded-full border border-border text-lg" : "text-xl"}`}>
          {collapsed ? "O" : "Okoye’s Log"}
        </Link>
        <button type="button" onClick={() => setIsMobileOpen(false)} aria-label="Close dashboard navigation" className="grid size-9 place-items-center rounded-full hover:bg-panel-soft lg:hidden">
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>

      <NewPostButton collapsed={collapsed} className="mt-7" />

      <nav aria-label="Dashboard" className="mt-7">
        {collapsed ? null : <p className="px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Workspace</p>}
        <ul className="m-0 mt-2 list-none gap-1 p-0">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href, item.exact);
            return <li key={item.href}><Link href={item.href} title={collapsed ? item.label : undefined} aria-label={collapsed ? item.label : undefined} aria-current={active ? "page" : undefined} className={`flex items-center rounded-xl py-2.5 text-sm font-medium hover:opacity-100 ${collapsed ? "justify-center px-0" : "gap-3 px-3"} ${active ? "bg-panel-soft text-foreground" : "text-muted-foreground hover:bg-panel-soft"}`}><Icon aria-hidden="true" className="size-4" />{collapsed ? null : item.label}</Link></li>;
          })}
        </ul>
      </nav>

      <nav aria-label="Account" className="mt-7">
        {collapsed ? null : <p className="px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Account</p>}
        <ul className="m-0 mt-2 list-none gap-1 p-0">
          {accountNavigation.map((item) => {
            const Icon = item.icon;
            const active = item.label === "Settings" && pathname === "/dashboard/settings";
            return <li key={item.label}><Link href={item.href} title={collapsed ? item.label : undefined} aria-label={collapsed ? item.label : undefined} aria-current={active ? "page" : undefined} className={`relative flex items-center rounded-xl py-2.5 text-sm font-medium hover:opacity-100 ${collapsed ? "justify-center px-0" : "gap-3 px-3"} ${active ? "bg-panel-soft" : "text-muted-foreground hover:bg-panel-soft"}`}><Icon aria-hidden="true" className="size-4" />{collapsed ? null : item.label}{item.label === "Notifications" ? (collapsed ? <span className="absolute right-2 top-1.5 size-2 rounded-full bg-[#b14b38]" /> : <span className="ml-auto grid size-5 place-items-center rounded-full bg-panel-inverse font-mono text-[9px] text-panel-inverse-foreground">3</span>) : null}</Link></li>;
          })}
        </ul>
      </nav>

      <div className="mt-auto border-t border-border pt-4">
        <Link href="/dashboard/settings?tab=profile" title={collapsed ? "Profile" : undefined} className={`flex items-center rounded-xl p-2 hover:bg-panel-soft hover:opacity-100 ${collapsed ? "justify-center" : "gap-3"}`}>
          <span className="grid size-10 place-items-center rounded-full bg-brand-soft font-serif text-sm font-bold">{user?.name?.slice(0, 2).toUpperCase() ?? "DO"}</span>
          {collapsed ? null : <span className="min-w-0"><span className="block truncate text-sm font-semibold">{user?.name ?? "David Okoye"}</span><span className="block truncate text-xs text-muted-foreground">{user?.email}</span></span>}
        </Link>
      </div>
    </aside>
  );

  return (
    <div className="dashboard-shell min-h-dvh bg-background text-foreground">
      <div className={`fixed inset-y-0 left-0 z-40 hidden border-r border-border transition-[width] duration-200 lg:block ${isCollapsed ? "w-[4.5rem]" : "w-64"}`}>
        {renderSidebar(isCollapsed)}
        <button
          type="button"
          onClick={() => setSidebarPreference({ scope: sidebarScope, collapsed: !isCollapsed })}
          aria-label={isCollapsed ? "Expand dashboard sidebar" : "Collapse dashboard sidebar"}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-20 z-50 grid size-7 place-items-center rounded-full border border-border bg-panel-strong shadow-sm transition hover:bg-panel-soft"
        >
          {isCollapsed ? <PanelLeftOpen aria-hidden="true" className="size-3.5" /> : <PanelLeftClose aria-hidden="true" className="size-3.5" />}
        </button>
      </div>

      {isMobileOpen ? (
        <>
          <button
            type="button"
            aria-label="Close dashboard navigation"
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-[1090] bg-black/45 backdrop-blur-[2px] lg:hidden"
          />
          <div className="fixed inset-y-0 left-0 z-[1100] w-[min(86vw,18rem)] border-r border-border lg:hidden">
            {renderSidebar(false)}
          </div>
        </>
      ) : null}

      <div className={`transition-[padding] duration-200 ${isCollapsed ? "lg:pl-[4.5rem]" : "lg:pl-64"}`}>
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/92 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open dashboard navigation"
              className="grid size-10 place-items-center rounded-full border border-border lg:hidden"
            >
              <Menu aria-hidden="true" className="size-4" />
            </button>
            {isEditor ? (
              <div className="flex min-w-0 items-center gap-3">
                <Link href="/dashboard/drafts" className="flex shrink-0 items-center gap-1.5 text-sm font-medium">
                  <ChevronLeft aria-hidden="true" className="size-4" />
                  <span className="max-sm:hidden">Back to drafts</span>
                </Link>
                <span aria-hidden="true" className="h-7 w-px bg-border" />
                <div className="min-w-0">
                  <p className="m-0 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Writing desk</p>
                  <p className="m-0 truncate text-sm font-semibold">Blog editor</p>
                </div>
              </div>
            ) : (
              <div>
                <p className="m-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Writing workspace</p>
                <p className="m-0 text-sm font-semibold">Dashboard</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {isEditor && !editorDetailsOpen ? (
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("editor-open-details"))}
                className="inline-flex min-h-10 items-center rounded-full border border-control-border bg-panel-strong px-3 font-mono text-[10px] font-semibold sm:px-4 sm:text-xs"
              >
                Post details
              </button>
            ) : null}
            {!isEditor ? <Link href="/dashboard/settings?tab=notifications" aria-label="Notifications" className="relative grid size-10 place-items-center rounded-full border border-border">
              <Bell aria-hidden="true" className="size-4" />
              <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#b14b38]" />
            </Link> : null}
          </div>
        </header>

        <main className={isEditor ? "min-w-0" : "min-w-0 px-4 py-7 sm:px-6 lg:px-8 lg:py-9"}>{children}</main>
      </div>
    </div>
  );
}

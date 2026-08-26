import { Eye, MousePointerClick, Newspaper, Users } from "lucide-react";

import { PostActionsMenu } from "@/components/dashboard/post-actions-menu";
import { NewPostButton } from "@/components/dashboard/new-post-button";
import {
  dashboardTotals,
  formatMetric,
  trafficSeries,
  trendingPosts,
} from "@/lib/dashboard/analytics";

const summaryCards = [
  { label: "Total clicks", value: formatMetric(dashboardTotals.clicks), note: "+14.2% this month", icon: MousePointerClick },
  { label: "Unique readers", value: formatMetric(dashboardTotals.readers), note: "+9.8% this month", icon: Eye },
  { label: "Completion rate", value: `${dashboardTotals.averageCompletion}%`, note: "+3.4% this month", icon: Newspaper },
  { label: "Subscribers", value: formatMetric(dashboardTotals.subscribers), note: "+42 this month", icon: Users },
];

export default function DashboardPage() {
  const maxTraffic = Math.max(...trafficSeries.map((day) => day.value));

  return (
    <div className="mx-auto max-w-[88rem]">
      <header className="flex flex-col justify-between gap-5 border-b border-border pb-7 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Overview · Sample analytics</p>
          <h1 className="m-0 mt-2 text-4xl tracking-[-0.04em] sm:text-5xl">Your writing, at a glance.</h1>
          <p className="mb-0 mt-3 max-w-2xl text-muted-foreground">See what readers are opening, finishing, and returning to across Okoye’s Log.</p>
        </div>
        <NewPostButton className="w-full self-start sm:w-44" />
      </header>

      <section aria-label="Performance summary" className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.label} className="rounded-[var(--radius-small)] border border-border bg-panel-strong p-5">
              <div className="flex items-start justify-between">
                <p className="m-0 text-sm text-muted-foreground">{card.label}</p>
                <Icon aria-hidden="true" className="size-4 text-muted-foreground" />
              </div>
              <p className="mb-1 mt-5 font-serif text-4xl font-bold leading-none tracking-[-0.04em]">{card.value}</p>
              <p className="m-0 font-mono text-[10px] uppercase tracking-[0.1em] text-success-foreground">{card.note}</p>
            </article>
          );
        })}
      </section>

      <div className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.65fr)]">
        <section className="rounded-[var(--radius-medium)] border border-border bg-panel-strong p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="m-0 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Reader activity</p>
              <h2 className="mb-0 mt-2 text-2xl">Clicks this week</h2>
            </div>
            <span className="rounded-full bg-success-bg px-3 py-1 font-mono text-[10px] font-semibold uppercase text-success-foreground">+14.2%</span>
          </div>
          <div className="mt-9 flex h-64 items-end gap-2 sm:gap-4">
            {trafficSeries.map((day) => (
              <div key={day.label} className="flex h-full flex-1 flex-col justify-end gap-2">
                <div className="group relative flex flex-1 items-end rounded-t-xl bg-panel-soft">
                  <div className="w-full rounded-t-xl bg-panel-inverse transition-opacity group-hover:opacity-70" style={{ height: `${(day.value / maxTraffic) * 100}%` }} />
                  <span className="absolute left-1/2 top-2 -translate-x-1/2 font-mono text-[9px] text-muted-foreground">{day.value}</span>
                </div>
                <span className="text-center font-mono text-[10px] text-muted-foreground">{day.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[var(--radius-medium)] border border-border bg-panel-strong">
          <div className="border-b border-border p-5 sm:p-6">
            <p className="m-0 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Trending now</p>
            <h2 className="mb-0 mt-2 text-2xl">Posts by clicks</h2>
          </div>
          <ol className="m-0 list-none gap-0 p-0">
            {trendingPosts.map((post, index) => (
              <li key={post.slug} className="flex items-center gap-3 border-b border-border px-5 py-4 last:border-0">
                <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0 flex-1">
                  <p className="m-0 truncate text-sm font-semibold">{post.title}</p>
                  <p className="m-0 mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{formatMetric(post.clicks)} clicks · {post.completionRate}% completed</p>
                </div>
                <PostActionsMenu slug={post.slug} />
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

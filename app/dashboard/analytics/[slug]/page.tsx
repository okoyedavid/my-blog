import { ArrowLeft, Clock3, Eye, MousePointerClick, TimerReset } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getBlog } from "@/data/blogs";
import { formatMetric, postAnalytics, trafficSeries } from "@/lib/dashboard/analytics";

export default async function PostAnalyticsPage({ params }: PageProps<"/dashboard/analytics/[slug]">) {
  const { slug } = await params;
  const post = getBlog(slug);
  const analytics = postAnalytics.find((item) => item.slug === slug);
  if (!post || !analytics) notFound();

  const metrics = [
    { label: "Clicks", value: formatMetric(analytics.clicks), icon: MousePointerClick },
    { label: "Unique readers", value: formatMetric(analytics.uniqueReaders), icon: Eye },
    { label: "Completion", value: `${analytics.completionRate}%`, icon: TimerReset },
    { label: "Average read", value: `${analytics.averageReadMinutes} min`, icon: Clock3 },
  ];
  const max = Math.max(...trafficSeries.map((day) => day.value));

  return (
    <div className="mx-auto max-w-[76rem]">
      <Link href="/dashboard" className="inline-flex items-center gap-2 font-mono text-xs text-[color:var(--muted-foreground)]"><ArrowLeft aria-hidden="true" className="size-4" /> Back to overview</Link>
      <header className="mt-6 border-b border-[color:var(--border)] pb-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">Post analytics · Dummy data</p>
        <h1 className="m-0 mt-2 max-w-4xl text-4xl tracking-[-0.04em] sm:text-5xl">{post.title}</h1>
        <p className="mb-0 mt-3 text-sm text-[color:var(--muted-foreground)]">Published {post.displayDate} · {post.category}</p>
      </header>
      <section className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return <article key={metric.label} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-5"><Icon aria-hidden="true" className="size-4 text-[color:var(--muted-foreground)]" /><p className="mb-1 mt-5 font-serif text-3xl font-bold">{metric.value}</p><p className="m-0 text-xs text-[color:var(--muted-foreground)]">{metric.label}</p></article>;
        })}
      </section>
      <section className="mt-6 rounded-[var(--radius-medium)] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6">
        <div className="flex items-end justify-between"><div><p className="m-0 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">Seven-day activity</p><h2 className="mb-0 mt-2 text-2xl">Reader clicks</h2></div><span className="font-mono text-xs text-[color:var(--success-foreground)]">{analytics.change >= 0 ? "+" : ""}{analytics.change}%</span></div>
        <div className="mt-8 flex h-72 items-end gap-3">
          {trafficSeries.map((day, index) => {
            const value = Math.max(18, day.value + ((slug.length + index * 7) % 18) - 8);
            return <div key={day.label} className="flex h-full flex-1 flex-col justify-end gap-2"><div className="flex flex-1 items-end rounded-t-xl bg-[color:var(--panel-soft)]"><div className="w-full rounded-t-xl bg-[color:var(--panel-inverse)]" style={{ height: `${(value / max) * 100}%` }} /></div><span className="text-center font-mono text-[10px] text-[color:var(--muted-foreground)]">{day.label}</span></div>;
          })}
        </div>
      </section>
    </div>
  );
}

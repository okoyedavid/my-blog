import { blogs } from "@/data/blogs";

const clickPattern = [4821, 3760, 2944, 2381, 1918, 1654, 1432, 1217];
const openRatePattern = [68, 61, 57, 53, 49, 46, 43, 39];

export const postAnalytics = blogs.map((post, index) => {
  const clicks = clickPattern[index % clickPattern.length] - index * 37;
  const impressions = Math.round(clicks * (2.4 + (index % 3) * 0.35));

  return {
    slug: post.slug,
    title: post.title,
    category: post.category,
    publishedAt: post.displayDate,
    clicks,
    impressions,
    uniqueReaders: Math.round(clicks * 0.78),
    completionRate: openRatePattern[index % openRatePattern.length],
    averageReadMinutes: Number((3.1 + (index % 5) * 0.7).toFixed(1)),
    change: [18, 12, 9, 7, -2, 5, 3, -4][index % 8],
  };
});

export const trendingPosts = [...postAnalytics]
  .sort((left, right) => right.clicks - left.clicks)
  .slice(0, 5);

export const dashboardTotals = {
  clicks: postAnalytics.reduce((total, post) => total + post.clicks, 0),
  readers: postAnalytics.reduce((total, post) => total + post.uniqueReaders, 0),
  averageCompletion: Math.round(
    postAnalytics.reduce((total, post) => total + post.completionRate, 0) /
      postAnalytics.length,
  ),
  subscribers: 1284,
};

export const trafficSeries = [
  { label: "Mon", value: 42 },
  { label: "Tue", value: 58 },
  { label: "Wed", value: 49 },
  { label: "Thu", value: 76 },
  { label: "Fri", value: 64 },
  { label: "Sat", value: 88 },
  { label: "Sun", value: 71 },
];

export function formatMetric(value: number) {
  return new Intl.NumberFormat("en", {
    notation: value >= 1000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
}

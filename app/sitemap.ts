import type { MetadataRoute } from "next";
import { blogs, categories } from "@/data/blogs";
import { absoluteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/all-blogs"), changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/about-us"), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.4 },
    { url: absoluteUrl("/tag/featured-blogs"), changeFrequency: "weekly", priority: 0.6 },
    { url: absoluteUrl("/tag/most-popular"), changeFrequency: "weekly", priority: 0.6 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: absoluteUrl(`/category/${category.slug}`),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [post.image],
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}

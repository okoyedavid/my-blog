import type { Metadata } from "next";
import { CollectionPage } from "@/components/blog/collection-page";
import { blogCollections } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Featured Blogs",
  description:
    "Read featured technical notes and selected project stories from Okoye’s Log.",
  alternates: { canonical: "/tag/featured-blogs" },
  openGraph: {
    url: "/tag/featured-blogs",
    title: "Featured Blogs",
    description: "Read featured technical notes and selected project stories from Okoye’s Log.",
  },
};

export default function Page() {
  return (
    <CollectionPage
      title="Featured Blogs"
      posts={blogCollections.featured}
      active="featured"
    />
  );
}

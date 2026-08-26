import type { Metadata } from "next";
import { CollectionPage } from "@/components/blog/collection-page";
import { blogCollections } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Most Popular",
  description:
    "Discover the technical notes and project stories readers are following most on Okoye’s Log.",
  alternates: { canonical: "/tag/most-popular" },
  openGraph: {
    url: "/tag/most-popular",
    title: "Most Popular",
    description: "Discover the technical notes and project stories readers are following most on Okoye’s Log.",
  },
};

export default function Page() {
  return (
    <CollectionPage
      title="Most Popular"
      posts={blogCollections.popular}
      active="popular"
    />
  );
}

import type { Metadata } from "next";
import { CollectionPage } from "@/components/blog/collection-page";
import { blogCollections } from "@/data/blogs";

export const metadata: Metadata = {
  title: "All Blogs",
  description:
    "Browse every technical note, project write-up, and software lesson on Okoye’s Log.",
  alternates: { canonical: "/all-blogs" },
  openGraph: {
    url: "/all-blogs",
    title: "All Blogs",
    description: "Browse every technical note, project write-up, and software lesson on Okoye’s Log.",
  },
};

export default function Page() {
  return <CollectionPage title="All blogs" posts={blogCollections.all} active="all" />;
}

import FeaturedBlogsHero from "@/features/tag/featured-blogs-hero";
import FeaturedBlogsList from "@/features/tag/featured-blogs-list";

export const metadata: Metadata = {
  title: "Featured Blogs",
  description:
    "Read ThePost's featured reporting and selected stories about Montreal's people, culture, business and events.",
};

export default function Page() {
  return (
    <>
      <FeaturedBlogsHero />
      <FeaturedBlogsList />
    </>
  );
}
import type { Metadata } from "next";

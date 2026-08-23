import AllBlogHero from "@/features/all-blogs/all-blog-hero";
import BlogList from "@/features/all-blogs/blog-list";

export const metadata: Metadata = {
  title: "All Blogs",
  description:
    "Browse every story from ThePost, including Montreal news, business, culture, events and local city life.",
};

export default function Page() {
  return (
    <div>
      <AllBlogHero />
      <BlogList />
    </div>
  );
}
import type { Metadata } from "next";

import Link from "next/link";
import { BlogGrid } from "@/components/blog/blog-grid";
import { blogCollections } from "@/data/blogs";

export default function Recent() {
  return (
    <section className="relative py-12">
      <div className="mx-auto block w-[96%] max-w-[68rem]">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-mono text-2xl leading-none tracking-[-0.066em]">Recent stories</h2>
          <Link href="/all-blogs" className="flex items-center gap-4 transition-opacity hover:opacity-70">
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>
        <BlogGrid posts={blogCollections.recent} />
      </div>
    </section>
  );
}

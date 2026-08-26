import Link from "next/link";

import { PostActionsMenu } from "@/components/dashboard/post-actions-menu";
import { blogs, categories, getBlogsByCategory } from "@/data/blogs";
import { formatMetric, postAnalytics } from "@/lib/dashboard/analytics";

export const metadata = { title: "Categories" };

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-[88rem]">
      <header className="border-b border-border pb-7">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Content library</p>
        <h1 className="m-0 mt-2 text-4xl tracking-[-0.04em] sm:text-5xl">Categories</h1>
        <p className="mb-0 mt-3 text-muted-foreground">Browse {blogs.length} published stories by subject.</p>
      </header>

      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {categories.map((category) => {
          const categoryPosts = getBlogsByCategory(category.slug);
          const clicks = postAnalytics.filter((post) => post.category === category.slug).reduce((total, post) => total + post.clicks, 0);
          return (
            <section key={category.slug} className="overflow-hidden rounded-[var(--radius-medium)] border border-border bg-panel-strong">
              <header className="flex items-start justify-between gap-5 border-b border-border p-5 sm:p-6">
                <div>
                  <span className={`mb-4 block h-2 w-14 rounded-full ${category.color}`} />
                  <h2 className="m-0 text-2xl">{category.name}</h2>
                  <p className="mb-0 mt-2 max-w-md text-sm leading-6 text-muted-foreground">{category.description}</p>
                </div>
                <div className="text-right">
                  <p className="m-0 font-serif text-2xl font-bold">{categoryPosts.length}</p>
                  <p className="m-0 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">posts</p>
                  <p className="mb-0 mt-3 font-mono text-[10px] text-muted-foreground">{formatMetric(clicks)} clicks</p>
                </div>
              </header>
              <ul className="m-0 list-none gap-0 p-0">
                {categoryPosts.map((post) => (
                  <li key={post.slug} className="flex items-center gap-3 border-b border-border px-5 py-3.5 last:border-0">
                    <Link href={`/blog/${post.slug}`} target="_blank" className="min-w-0 flex-1 truncate text-sm font-medium">{post.title}</Link>
                    <PostActionsMenu slug={post.slug} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

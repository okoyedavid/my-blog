import { BlogCard } from "@/components/blog/blog-card";
import { blogCollections, getBlog, homepage } from "@/data/blogs";

export default function Featured() {
  const spotlight = getBlog(homepage.spotlightSlug);

  return (
    <section className="relative pt-16">
      <div className="mx-auto block w-[96%] max-w-[68rem]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
          <div>
            <h2 className="mb-6 font-mono text-2xl leading-none tracking-[-0.066em]">In The Spotlight</h2>
            {spotlight ? <BlogCard post={spotlight} variant="featured" priority /> : null}
          </div>
          <div>
            <h2 className="mb-6 font-mono text-2xl leading-none tracking-[-0.066em]">Most Popular Blogs</h2>
            <div className="grid gap-4">
              {blogCollections.popular.slice(0, 3).map((post) => (
                <BlogCard key={post.slug} post={post} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

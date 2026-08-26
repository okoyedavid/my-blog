import type { BlogPost } from "@/data/blogs";
import { BlogCard } from "@/components/blog/blog-card";

type BlogGridProps = {
  posts: BlogPost[];
  emptyMessage?: string;
};

export function BlogGrid({ posts, emptyMessage = "No articles found." }: BlogGridProps) {
  if (!posts.length) {
    return <p className="py-12 text-center text-lg">{emptyMessage}</p>;
  }

  return (
    <div role="list" className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div role="listitem" key={post.slug}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
}

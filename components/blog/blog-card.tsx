import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";
import { CategoryPill } from "@/components/blog/category-pill";

type BlogCardProps = {
  post: BlogPost;
  variant?: "standard" | "featured" | "compact";
  priority?: boolean;
};

export function BlogCard({ post, variant = "standard", priority = false }: BlogCardProps) {
  if (variant === "compact") {
    return (
      <article>
        <Link
          href={`/blog/${post.slug}`}
          className="mb-4 block rounded-2xl p-6 transition-opacity hover:opacity-70"
        >
          <div className="flex items-center justify-between gap-3">
            <CategoryPill category={post.category} />
            <time dateTime={post.publishedAt} className="font-mono text-sm leading-6 tracking-[0.0125em]">
              {post.displayDate}
            </time>
          </div>
          <h3 className="mt-2 text-2xl font-medium leading-[1.15] tracking-[-0.015em]">{post.title}</h3>
          <span className="sr-only">Read article</span>
        </Link>
      </article>
    );
  }

  const featured = variant === "featured";

  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="block transition-opacity hover:opacity-70">
        <div
          className={`relative aspect-video overflow-hidden ${featured ? "rounded-3xl" : "rounded-2xl"}`}
        >
          <Image
            fill
            priority={priority}
            src={post.image}
            alt={post.title}
            sizes={featured ? "(max-width: 768px) 96vw, 64vw" : "(max-width: 768px) 96vw, 33vw"}
            className="object-cover mix-blend-luminosity"
          />
          {featured ? (
            <div className="absolute left-4 top-4">
              <CategoryPill category={post.category} />
            </div>
          ) : null}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <CategoryPill category={post.category} />
          <time dateTime={post.publishedAt} className="font-mono text-sm leading-6 tracking-[0.0125em]">
            {post.displayDate}
          </time>
        </div>
        {featured ? (
          <h2 className="mb-2 mt-1 text-5xl font-medium leading-[1.05] tracking-[-0.035em]">{post.title}</h2>
        ) : (
          <h3 className="mb-1 mt-2 text-2xl font-medium leading-[1.15] tracking-[-0.015em]">{post.title}</h3>
        )}
        <span className="sr-only">Read article</span>
      </Link>
    </article>
  );
}

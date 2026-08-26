import type { BlogPost } from "@/data/blogs";
import { BlogGrid } from "@/components/blog/blog-grid";
import { CollectionNav } from "@/components/blog/collection-nav";

type CollectionPageProps = {
  title: string;
  posts: BlogPost[];
  active?: "all" | "featured" | "popular";
  description?: string;
  emptyMessage?: string;
};

export function CollectionPage({
  title,
  posts,
  active,
  description,
  emptyMessage,
}: CollectionPageProps) {
  return (
    <>
      <section className="relative pt-24">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-serif text-[clamp(3.5rem,8vw,6rem)] leading-none tracking-[-0.075em]">{title}</h1>
              {description ? <p className="mt-4 max-w-2xl leading-6 tracking-[0.0125em]">{description}</p> : null}
            </div>
            {active ? <CollectionNav active={active} /> : null}
          </div>
        </div>
      </section>
      <section className="relative py-12">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <BlogGrid posts={posts} emptyMessage={emptyMessage} />
        </div>
      </section>
    </>
  );
}

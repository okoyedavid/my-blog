import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog/blog-grid";
import { searchBlogs } from "@/data/blogs";

type SearchPageProps = { searchParams: Promise<{ query?: string | string[] }> };

function getQuery(value?: string | string[]) {
  return (Array.isArray(value) ? value[0] : value)?.trim() ?? "";
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const query = getQuery((await searchParams).query);
  return {
    title: query ? `Search results for “${query}”` : "Search",
    description: query ? `Search Okoye’s Log for posts matching “${query}”.` : "Search the technical notes and project stories on Okoye’s Log.",
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = getQuery((await searchParams).query);
  const results = searchBlogs(query);

  return (
    <>
      <section className="relative pt-24">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <h1 className="font-serif text-[clamp(3.5rem,8vw,6rem)] leading-none tracking-[-0.075em]">Search</h1>
          <form action="/search" className="mt-8 flex max-w-3xl gap-3">
            <label htmlFor="site-search" className="sr-only">Search articles</label>
            <input id="site-search" name="query" type="search" defaultValue={query} placeholder="Search stories, topics, or categories" className="min-h-12 min-w-0 flex-1 rounded-full border border-transparent bg-[var(--control-bg)] px-5 py-3 text-[var(--black)] outline-none transition-colors placeholder:text-[var(--control-muted)] focus:border-[var(--control-border)]" />
            <button type="submit" className="shrink-0 rounded-full bg-[var(--black)] px-5 py-3 text-[var(--white)] transition-opacity hover:opacity-80">Search</button>
          </form>
        </div>
      </section>
      <section className="relative py-12">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <h2 className="mb-6 font-mono text-2xl leading-none tracking-[-0.066em]">
            {query ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”` : "Enter a search term"}
          </h2>
          <BlogGrid posts={results} emptyMessage={query ? "No articles matched your search." : "Search the archive above."} />
        </div>
      </section>
    </>
  );
}

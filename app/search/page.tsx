import SearchHero from "@/features/search/search-hero";
import SearchResults from "@/features/search/search-results";

type SearchPageProps = {
  searchParams: Promise<{ query?: string | string[] }>;
};

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const value = (await searchParams).query;
  const query = (Array.isArray(value) ? value[0] : value)?.trim();
  return {
    title: query ? `Search results for “${query}”` : "Search",
    description: query
      ? `Search ThePost for Montreal stories matching “${query}”.`
      : "Search ThePost's Montreal news, culture, business and city-life stories.",
    robots: { index: false, follow: true },
  };
}

export default function Page() {
  return (
    <div>
      <SearchHero />
      <SearchResults />
    </div>
  );
}
import type { Metadata } from "next";

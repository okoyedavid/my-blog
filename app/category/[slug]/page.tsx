import type { Metadata } from "next";
import CategoryHero from "@/features/category/category-hero";
import CategoryList from "@/features/category/category-list";
import FeaturedCategory from "@/features/category/featured-category";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

function categoryName(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryName(slug) || "Montreal";
  return {
    title: `${category} News`,
    description: `Explore ThePost's latest ${category.toLowerCase()} reporting, insights and stories from across Montreal.`,
  };
}

export default function Page() {
  return (
    <div>
      <CategoryHero />
      <FeaturedCategory />
      <CategoryList />
    </div>
  );
}

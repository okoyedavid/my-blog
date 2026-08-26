import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionPage } from "@/components/blog/collection-page";
import { getBlogsByCategory, getCategory } from "@/data/blogs";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found" };

  return {
    title: `${category.name} Articles`,
    description: category.description,
    alternates: { canonical: `/category/${category.slug}` },
    openGraph: {
      type: "website",
      url: `/category/${category.slug}`,
      title: `${category.name} Articles`,
      description: category.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Articles`,
      description: category.description,
    },
  };
}

export default async function Page({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <CollectionPage
      title={category.name}
      description={category.description}
      posts={getBlogsByCategory(category.slug)}
    />
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/blog-article";
import { blogs, getBlog } from "@/data/blogs";

type BlogPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = getBlog((await params).slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    other: {
      "article:section": post.category,
    },
  };
}

export default async function BlogDetails({ params }: BlogPageProps) {
  const post = getBlog((await params).slug);
  if (!post) notFound();

  const related = blogs
    .filter((candidate) => candidate.category === post.category && candidate.slug !== post.slug)
    .slice(0, 3);

  return <BlogArticle post={post} related={related} />;
}

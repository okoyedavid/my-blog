import type { BlogPost } from "@/data/blogs";
import { absoluteUrl, site } from "@/data/site";

export function ArticleJsonLd({ post, categoryName }: { post: BlogPost; categoryName: string }) {
  const articleUrl = absoluteUrl(`/blog/${post.slug}`);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        image: [post.image],
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        mainEntityOfPage: articleUrl,
        articleSection: categoryName,
        keywords: post.technologies?.join(", "),
        author: {
          "@type": "Person",
          "@id": `${site.url}/#author`,
          name: site.author.name,
          url: site.portfolioUrl,
        },
        publisher: {
          "@type": "Person",
          "@id": `${site.url}/#author`,
          name: site.author.name,
          url: site.portfolioUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: categoryName,
            item: absoluteUrl(`/category/${post.category}`),
          },
          { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }}
    />
  );
}

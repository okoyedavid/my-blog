import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";
import { getCategory } from "@/data/blogs";
import { BlogGrid } from "@/components/blog/blog-grid";
import { CategoryPill } from "@/components/blog/category-pill";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

type BlogArticleProps = { post: BlogPost; related: BlogPost[] };

const container = "mx-auto block w-[96%] max-w-[68rem]";
const bodyHeading = "mb-3 mt-10 text-4xl font-medium leading-[1.1] tracking-[-0.035em]";
const bodyCopy = "mb-5 text-lg leading-7 tracking-[0.0125em]";

export function BlogArticle({ post, related }: BlogArticleProps) {
  const category = getCategory(post.category);

  return (
    <article>
      <ArticleJsonLd post={post} categoryName={category?.name ?? post.category} />
      <header className="relative pb-12 pt-24">
        <div className={container}>
          <Link href={`/category/${post.category}`} className="inline-flex items-center gap-2 text-sm leading-[1.4] tracking-[-0.005em] transition-opacity hover:opacity-70">
            <span aria-hidden="true">←</span>
            {category?.name}
          </Link>
          <h1 className="mb-6 mt-2 max-w-5xl font-serif text-[clamp(3.5rem,8vw,6rem)] leading-[1.04] tracking-[-0.025em]">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <time dateTime={post.publishedAt} className="text-xl leading-[1.3] tracking-[-0.01em]">{post.displayDate}</time>
            <span className="text-sm leading-[1.4] tracking-[-0.005em]">By {post.author}</span>
            <CategoryPill category={post.category} linked />
          </div>
          <p className="mt-4 max-w-4xl text-2xl leading-[1.35] tracking-[-0.01em]">{post.excerpt}</p>
          {post.technologies?.length ? (
            <ul className="mt-6 flex list-none flex-row flex-wrap gap-2 p-0">
              {post.technologies.map((technology) => (
                <li key={technology} className="rounded-full bg-ink-5 px-3 py-1 font-mono text-xs leading-5">
                  {technology}
                </li>
              ))}
            </ul>
          ) : null}
          {post.projectUrl ? (
            <a
              href={post.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-medium"
            >
              View project <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </header>

      <div className={container}>
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          <Image fill priority src={post.image} alt={post.title} sizes="96vw" className="object-cover" />
        </div>
      </div>

      <section className="relative py-12">
        <div className={container}>
          <div className="mx-auto max-w-3xl">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className={bodyHeading}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={bodyCopy}>{paragraph}</p>
                ))}
                {section.points?.length ? (
                  <ul className="mb-6 ml-5 list-disc gap-2">
                    {section.points.map((point) => (
                      <li key={point} className="pl-1 text-lg leading-7 tracking-[0.0125em]">{point}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="relative py-12">
          <div className={container}>
            <h2 className="mb-6 font-mono text-2xl leading-none tracking-[-0.066em]">More in {category?.name}</h2>
            <BlogGrid posts={related} />
          </div>
        </section>
      ) : null}
    </article>
  );
}

import Link from "next/link";

type Collection = "all" | "featured" | "popular";

const links: Array<{ key: Collection; label: string; href: string }> = [
  { key: "all", label: "All", href: "/all-blogs" },
  { key: "featured", label: "Featured Blogs", href: "/tag/featured-blogs" },
  { key: "popular", label: "Most Popular", href: "/tag/most-popular" },
];

export function CollectionNav({ active }: { active: Collection }) {
  return (
    <nav aria-label="Article collections" className="flex flex-wrap items-center gap-2">
      {links.map((link, index) => (
        <span key={link.key} className="flex items-center gap-2">
          {index ? <span className="font-mono text-lg opacity-50">/</span> : null}
          <Link
            href={link.href}
            aria-current={active === link.key ? "page" : undefined}
            className={`font-mono text-lg leading-none tracking-[-0.05em] transition-opacity hover:opacity-100 ${active === link.key ? "opacity-100" : "opacity-50"}`}
          >
            {link.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}

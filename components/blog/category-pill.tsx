import Link from "next/link";
import { getCategory, type CategorySlug } from "@/data/blogs";

type CategoryPillProps = {
  category: CategorySlug;
  large?: boolean;
  linked?: boolean;
  size?: "default" | "footer";
};

export function CategoryPill({
  category,
  large = false,
  linked = false,
  size = "default",
}: CategoryPillProps) {
  const details = getCategory(category);
  if (!details) return null;

  const pillClassName = `inline-block rounded-full px-3 py-1.5 font-mono text-sm leading-none tracking-[-0.025em] text-[#262626] ${
    large ? "px-4 py-2 text-[clamp(2rem,5vw,3.25rem)]" : ""
  } ${size === "footer" ? "text-xl" : ""} ${details.color}`;
  const label = <span className={pillClassName}>{details.name}</span>;

  return linked ? (
    <Link href={`/category/${details.slug}`} className="inline-block">
      {label}
      <span className="sr-only">View {details.name} articles</span>
    </Link>
  ) : (
    label
  );
}

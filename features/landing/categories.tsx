import { CategoryPill } from "@/components/blog/category-pill";
import { categories } from "@/data/blogs";

export default function Categories() {
  return (
    <section className="relative pt-24">
      <div className="mx-auto block w-[96%] max-w-[68rem]">
        <h2 className="mb-4 font-mono text-2xl leading-none tracking-[-0.066em]">Categories</h2>
        <div role="list" className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <div role="listitem" key={category.slug}>
              <CategoryPill category={category.slug} large linked />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

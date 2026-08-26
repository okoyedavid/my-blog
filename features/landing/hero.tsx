import Link from "next/link";
import { homepage } from "@/data/blogs";

const links = [
  { href: "/all-blogs", label: "All Blogs" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Hero() {
  return (
    <section className="relative pb-0 pt-20">
      <div className="mx-auto block w-[96%] max-w-[68rem]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h1 className="font-serif text-[clamp(4rem,11.2vw,7.2rem)] font-bold leading-[1.04] tracking-[-0.025em]">{homepage.title}</h1>
            <p className="font-sans text-[clamp(2rem,5vw,2.5rem)] italic leading-[1.1] tracking-[-0.02em]">{homepage.tagline}</p>
          </div>
          <nav aria-label="Home" className="flex flex-wrap items-center gap-2">
            {links.map((link, index) => (
              <span key={link.href} className="flex items-center gap-2">
                {index ? <span className="font-mono text-lg opacity-50">/</span> : null}
                <Link href={link.href} className="font-mono text-lg tracking-[-0.05em] opacity-50 transition-opacity hover:opacity-100">{link.label}</Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

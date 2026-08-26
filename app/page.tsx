import About from "@/features/landing/about";
import Categories from "@/features/landing/categories";
import Featured from "@/features/landing/featured";
import Hero from "@/features/landing/hero";
import Recent from "@/features/landing/recent";

export const metadata: Metadata = {
  title: { absolute: "Okoye’s Log — Technical Notes and Project Stories" },
  description:
    "Technical notes, project write-ups, and lessons from building software by David Okoye.",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/rss.xml" },
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Categories />
      <Recent />
      <About />
    </div>
  );
}
import type { Metadata } from "next";

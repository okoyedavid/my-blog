import About from "@/features/landing/about";
import Categories from "@/features/landing/categories";
import Featured from "@/features/landing/featured";
import Hero from "@/features/landing/hero";
import Recent from "@/features/landing/recent";

export const metadata: Metadata = {
  title: { absolute: "ThePost — Your Gateway to the Heart of Montreal" },
  description:
    "Explore the latest Montreal stories, featured reporting, local categories and recent news from ThePost.",
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

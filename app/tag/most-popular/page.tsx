import MostPopularHero from "@/features/tag/most-popular-hero";
import MostPopularList from "@/features/tag/most-popular-list";

export const metadata: Metadata = {
  title: "Most Popular",
  description:
    "Discover the Montreal stories readers are following most across ThePost.",
};

export default function Page() {
  return (
    <div>
      <MostPopularHero />
      <MostPopularList />
    </div>
  );
}

import type { Metadata } from "next";

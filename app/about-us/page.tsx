import AboutContent from "@/features/about/about-content";
import AboutHero from "@/features/about/about-hero";

export const metadata: Metadata = {
  title: "About David Okoye",
  description:
    "Learn about David Okoye and the thinking behind Okoye’s Log.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    url: "/about-us",
    title: "About David Okoye",
    description: "Learn about David Okoye and the thinking behind Okoye’s Log.",
  },
};

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
}
import type { Metadata } from "next";

import AboutContent from "@/features/about/about-content";
import AboutHero from "@/features/about/about-hero";
import Team from "@/features/about/Team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet ThePost team and learn about our mission to deliver accurate, impartial and engaging journalism about Montreal.",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <Team />
    </>
  );
}
import type { Metadata } from "next";

import Contact from "@/features/contact/contact";
import ContactFooter from "@/features/contact/contact-footer";
import ContactHero from "@/features/contact/contact-hero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ThePost team in Montreal with story ideas, questions, feedback or partnership enquiries.",
};

export default function Page() {
  return (
    <div>
      <ContactHero />
      <Contact />
      <ContactFooter />
    </div>
  );
}
import type { Metadata } from "next";

import Contact from "@/features/contact/contact";
import ContactFooter from "@/features/contact/contact-footer";
import ContactHero from "@/features/contact/contact-hero";

export const metadata: Metadata = {
  title: "Contact David Okoye",
  description:
    "Contact David Okoye with questions, feedback, project ideas, or collaboration enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact David Okoye",
    description: "Contact David Okoye with questions, feedback, project ideas, or collaboration enquiries.",
  },
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

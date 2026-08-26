import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "New Draft",
  description: "Create a new article draft in the Okoye’s Log editor.",
  robots: { index: false, follow: false },
};

export default async function EditorEntryPage() {
  redirect("/dashboard/editor");
}
import type { Metadata } from "next";

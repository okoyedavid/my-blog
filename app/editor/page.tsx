import { redirect } from "next/navigation";
import { createPost } from "@/lib/posts/repository";

export const metadata: Metadata = {
  title: "New Draft",
  description: "Create a new article draft in the Okoye’s Log editor.",
  robots: { index: false, follow: false },
};

export default async function EditorEntryPage() {
  const post = await createPost();

  redirect(`/editor/${post.id}`);
}
import type { Metadata } from "next";

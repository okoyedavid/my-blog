import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EditorShell } from "@/components/editor/editor-shell";
import { getPostById } from "@/lib/posts/repository";

export async function generateMetadata({ params }: PageProps<"/dashboard/editor/[id]">): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);
  return {
    title: post?.title ? `Edit: ${post.title}` : "Untitled Draft",
    robots: { index: false, follow: false },
  };
}

export default async function DashboardEditorPage({ params }: PageProps<"/dashboard/editor/[id]">) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();
  return <EditorShell initialPost={post} />;
}

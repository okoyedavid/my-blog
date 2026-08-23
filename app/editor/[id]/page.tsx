import { notFound } from "next/navigation";
import { EditorShell } from "@/components/editor/editor-shell";
import { getPostById } from "@/lib/posts/repository";

type EditorDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: EditorDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);
  return {
    title: post?.title ? `Edit: ${post.title}` : "Untitled Draft",
    description: post?.title
      ? `Edit the “${post.title}” article in ThePost editor.`
      : "Edit an article draft in ThePost editor.",
    robots: { index: false, follow: false },
  };
}

export default async function EditorDetailPage({
  params,
}: EditorDetailPageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return <EditorShell initialPost={post} />;
}
import type { Metadata } from "next";

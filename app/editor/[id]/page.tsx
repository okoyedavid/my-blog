import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Opening editor",
  robots: { index: false, follow: false },
};

export default async function LegacyEditorPage({ params }: PageProps<"/editor/[id]">) {
  const { id } = await params;
  redirect(`/dashboard/editor/${id}`);
}

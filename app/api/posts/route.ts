import { NextResponse } from "next/server";
import { createPost } from "@/lib/posts/repository";

export async function POST() {
  try {
    const post = await createPost();
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create draft.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}


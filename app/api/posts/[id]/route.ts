import { NextRequest, NextResponse } from "next/server";
import {
  getPostById,
  publishPost,
  revertPostToDraft,
  updatePost,
} from "@/lib/posts/repository";
import { postSaveSchema } from "@/lib/editor/validate";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const post = await getPostById(id);

  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }

  return NextResponse.json({ post });
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const parsed = postSaveSchema.parse(body);

    const operation = parsed.status === "published" ? publishPost : updatePost;
    const post = await operation(id, {
      ...parsed,
      coverImage: parsed.coverImage || null,
    });

    return NextResponse.json({ post });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save post.";
    const status = message === "Post not found." ? 404 : 400;

    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const parsed = postSaveSchema.parse(body);
    const post = await revertPostToDraft(id, {
      ...parsed,
      status: "draft",
      coverImage: parsed.coverImage || null,
    });

    return NextResponse.json({ post });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to revert post.";
    const status = message === "Post not found." ? 404 : 400;

    return NextResponse.json({ error: message }, { status });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanitizePostHtml } from "@/lib/editor/sanitize";

const previewSchema = z.object({
  contentHtml: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contentHtml } = previewSchema.parse(body);

    return NextResponse.json({
      contentHtml: sanitizePostHtml(contentHtml),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to prepare preview.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}


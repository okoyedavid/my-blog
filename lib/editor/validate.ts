import { z } from "zod";
import { slugify } from "@/lib/editor/slug";
import { deriveExcerptFromPlainText, ensureDocumentContent } from "@/lib/editor/serialize";
import type { PostSavePayload } from "@/lib/posts/types";

const statusSchema = z.enum(["draft", "published"]);

const contentSchema = z.object({
  type: z.literal("doc"),
}).passthrough();

const assetSchema = z.object({
  id: z.string().uuid(),
  kind: z.enum(["cover", "content"]),
  url: z.string().nullable(),
  filename: z.string().max(255),
  mimeType: z.string().max(100),
  status: z.enum(["local", "uploaded", "failed"]),
});

export const postSaveSchema = z.object({
  title: z.string().trim().max(180),
  slug: z.string().trim().max(200),
  excerpt: z.string().trim().max(320),
  coverImage: z.union([z.string().trim().url(), z.literal(""), z.null()]),
  contentJson: contentSchema,
  contentHtml: z.string(),
  plainText: z.string(),
  status: statusSchema,
  assets: z.array(assetSchema).optional(),
});

export function normalizePostSavePayload(input: PostSavePayload): PostSavePayload {
  const parsed = postSaveSchema.parse(input);

  return {
    title: parsed.title.trim(),
    slug: slugify(parsed.slug),
    excerpt: parsed.excerpt.trim(),
    coverImage: parsed.coverImage || null,
    contentJson: ensureDocumentContent(parsed.contentJson),
    contentHtml: parsed.contentHtml,
    plainText: parsed.plainText.trim(),
    status: parsed.status,
    assets: parsed.assets,
  };
}

export function validatePublishPayload(input: PostSavePayload) {
  const normalized = normalizePostSavePayload(input);

  if (!normalized.title) {
    throw new Error("A title is required before publishing.");
  }

  if (!normalized.plainText.trim()) {
    throw new Error("Add meaningful body content before publishing.");
  }

  return {
    ...normalized,
    slug: normalized.slug || slugify(normalized.title),
    excerpt:
      normalized.excerpt || deriveExcerptFromPlainText(normalized.plainText),
  };
}

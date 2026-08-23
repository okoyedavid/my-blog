import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import { deriveExcerptFromPlainText, ensureDocumentContent } from "@/lib/editor/serialize";
import { sanitizePostHtml } from "@/lib/editor/sanitize";
import { slugify } from "@/lib/editor/slug";
import { normalizePostSavePayload, validatePublishPayload } from "@/lib/editor/validate";
import type { Post, PostInput, PostRecord, PostSavePayload } from "@/lib/posts/types";

const DATA_DIR = path.join(process.cwd(), "data");
const POSTS_FILE = path.join(DATA_DIR, "posts.json");

const emptyDocument = ensureDocumentContent({
  type: "doc",
  content: [{ type: "paragraph" }],
});

let writeQueue = Promise.resolve();

async function ensureStore() {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    await readFile(POSTS_FILE, "utf8");
  } catch {
    const initial: PostRecord = { posts: [] };
    await writeFile(POSTS_FILE, JSON.stringify(initial, null, 2), "utf8");
  }
}

async function readStore() {
  await ensureStore();
  const raw = await readFile(POSTS_FILE, "utf8");
  return JSON.parse(raw) as PostRecord;
}

async function writeStore(record: PostRecord) {
  await ensureStore();
  writeQueue = writeQueue.then(() =>
    writeFile(POSTS_FILE, JSON.stringify(record, null, 2), "utf8"),
  );
  await writeQueue;
}

function buildBlankPost(): Post {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    title: "",
    slug: "",
    excerpt: "",
    coverImage: null,
    contentJson: emptyDocument,
    contentHtml: "<p></p>",
    plainText: "",
    status: "draft",
    createdAt: now,
    updatedAt: now,
    publishedAt: null,
  };
}

function applyInput(existing: Post, input: PostInput): Post {
  return {
    ...existing,
    ...input,
    excerpt: input.excerpt.trim(),
    slug: slugify(input.slug),
    coverImage: input.coverImage || null,
    contentJson: ensureDocumentContent(input.contentJson),
    contentHtml: sanitizePostHtml(input.contentHtml),
    plainText: input.plainText.trim(),
    updatedAt: new Date().toISOString(),
  };
}

export async function createPost(initial?: Partial<PostInput>) {
  const record = await readStore();
  const base = buildBlankPost();
  const next = initial
    ? applyInput(base, {
        title: initial.title ?? base.title,
        slug: initial.slug ?? base.slug,
        excerpt: initial.excerpt ?? base.excerpt,
        coverImage: initial.coverImage ?? base.coverImage,
        contentJson: initial.contentJson ?? base.contentJson,
        contentHtml: initial.contentHtml ?? base.contentHtml,
        plainText: initial.plainText ?? base.plainText,
        status: initial.status ?? base.status,
        publishedAt: initial.publishedAt ?? base.publishedAt,
      })
    : base;

  record.posts.unshift(next);
  await writeStore(record);
  return next;
}

export const getPostById = cache(async (id: string) => {
  const record = await readStore();
  return record.posts.find((post) => post.id === id) ?? null;
});

export const getPublishedPostBySlug = cache(async (slug: string) => {
  const record = await readStore();
  return (
    record.posts.find(
      (post) => post.slug === slug && post.status === "published",
    ) ?? null
  );
});

export async function updatePost(id: string, input: PostSavePayload) {
  const normalized = normalizePostSavePayload(input);
  const record = await readStore();
  const index = record.posts.findIndex((post) => post.id === id);

  if (index === -1) {
    throw new Error("Post not found.");
  }

  const current = record.posts[index];
  const next = applyInput(current, {
    ...normalized,
    publishedAt: current.publishedAt,
  });

  record.posts[index] = next;
  await writeStore(record);
  return next;
}

export async function publishPost(id: string, input: PostSavePayload) {
  const normalized = validatePublishPayload(input);
  const record = await readStore();
  const index = record.posts.findIndex((post) => post.id === id);

  if (index === -1) {
    throw new Error("Post not found.");
  }

  const current = record.posts[index];
  const now = new Date().toISOString();
  const next = applyInput(current, {
    ...normalized,
    status: "published",
    slug: normalized.slug || slugify(normalized.title),
    excerpt:
      normalized.excerpt || deriveExcerptFromPlainText(normalized.plainText),
    publishedAt: current.publishedAt ?? now,
  });

  record.posts[index] = {
    ...next,
    status: "published",
    publishedAt: current.publishedAt ?? now,
  };

  await writeStore(record);
  return record.posts[index];
}

export async function revertPostToDraft(id: string, input: PostSavePayload) {
  return updatePost(id, {
    ...input,
    status: "draft",
  });
}


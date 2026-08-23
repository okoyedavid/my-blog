import type { JSONContent } from "@tiptap/core";

export type PostStatus = "draft" | "published";

export type PostAsset = {
  id: string;
  kind: "cover" | "content";
  url: string | null;
  filename: string;
  mimeType: string;
  status: "local" | "uploaded" | "failed";
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string | null;
  contentJson: JSONContent;
  contentHtml: string;
  plainText: string;
  status: PostStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  assets?: PostAsset[];
};

export type PostRecord = {
  posts: Post[];
};

export type PostInput = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string | null;
  contentJson: JSONContent;
  contentHtml: string;
  plainText: string;
  status: PostStatus;
  publishedAt?: string | null;
  assets?: PostAsset[];
};

export type PostSavePayload = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string | null;
  contentJson: JSONContent;
  contentHtml: string;
  plainText: string;
  status: PostStatus;
  assets?: PostAsset[];
};

export type PostStats = {
  words: number;
  characters: number;
  readingTimeMinutes: number;
};

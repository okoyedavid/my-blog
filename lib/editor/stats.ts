import type { PostStats } from "@/lib/posts/types";

export function countWords(text: string) {
  const normalized = text.trim();

  if (!normalized) {
    return 0;
  }

  return normalized.split(/\s+/).filter(Boolean).length;
}

export function countCharacters(text: string) {
  return text.trim().length;
}

export function calculateReadingTime(text: string, wordsPerMinute = 200) {
  const words = countWords(text);

  if (words === 0) {
    return 0;
  }

  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function buildPostStats(text: string): PostStats {
  return {
    words: countWords(text),
    characters: countCharacters(text),
    readingTimeMinutes: calculateReadingTime(text),
  };
}


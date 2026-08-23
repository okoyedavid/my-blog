import { generateHTML, generateText, type Extensions, type JSONContent } from "@tiptap/core";
import { getSerializationExtensions } from "@/lib/editor/extensions";

const extensions: Extensions = getSerializationExtensions();

export function ensureDocumentContent(contentJson?: JSONContent | null): JSONContent {
  if (!contentJson || typeof contentJson !== "object") {
    return {
      type: "doc",
      content: [{ type: "paragraph" }],
    };
  }

  if (contentJson.type !== "doc") {
    return {
      type: "doc",
      content: [{ type: "paragraph" }],
    };
  }

  return contentJson;
}

export function deriveHtmlFromContent(contentJson: JSONContent) {
  return generateHTML(ensureDocumentContent(contentJson), extensions);
}

export function derivePlainTextFromContent(contentJson: JSONContent) {
  return generateText(ensureDocumentContent(contentJson), extensions, {
    blockSeparator: "\n\n",
  }).trim();
}

export function deriveExcerptFromPlainText(plainText: string, maxLength = 180) {
  const normalized = plainText.replace(/\s+/g, " ").trim();

  if (!normalized) {
    return "";
  }

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength).replace(/\s+\S*$/, "").trim()}...`;
}

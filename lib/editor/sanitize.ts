import sanitizeHtml, { type IOptions } from "sanitize-html";

const defaultAllowedTags = [
  "p",
  "br",
  "strong",
  "em",
  "u",
  "s",
  "blockquote",
  "pre",
  "code",
  "ul",
  "ol",
  "li",
  "span",
  "mark",
  "a",
  "hr",
  "img",
  "h1",
  "h2",
  "h3",
];

export const SANITIZE_OPTIONS: IOptions = {
  allowedTags: defaultAllowedTags,
  allowedAttributes: {
    a: ["href", "name", "target", "rel", "class"],
    img: ["src", "alt", "title", "class", "data-asset-id"],
    span: ["style"],
    mark: ["style"],
    code: ["class"],
    pre: ["class"],
    p: ["class", "style"],
    h1: ["class", "style"],
    h2: ["class", "style"],
    h3: ["class", "style"],
    ul: ["class"],
    ol: ["class"],
    blockquote: ["class"],
    hr: ["class"],
  },
  allowedSchemes: ["http", "https", "mailto"],
  allowedClasses: {
    a: ["editor-link"],
    img: ["editor-image"],
    code: ["editor-code-block"],
    pre: ["editor-code-block"],
    ul: ["editor-list", "editor-list-bullet"],
    ol: ["editor-list", "editor-list-ordered"],
    blockquote: ["editor-blockquote"],
    hr: ["editor-hr"],
  },
  allowedStyles: {
    "*": {
      "text-align": [/^left$/, /^center$/, /^right$/, /^justify$/],
      color: [/^#[0-9a-fA-F]{3,8}$/, /^rgb\((\d{1,3},\s*){2}\d{1,3}\)$/],
      "font-size": [/^\d+(px|rem|em|%)$/],
      "font-family": [/^[a-zA-Z0-9 "',-]+$/],
      "background-color": [/^#[0-9a-fA-F]{3,8}$/],
    },
  },
};

export function sanitizePostHtml(contentHtml: string) {
  return sanitizeHtml(contentHtml, SANITIZE_OPTIONS);
}

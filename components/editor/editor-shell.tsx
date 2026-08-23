"use client";

import { createContext, useContext } from "react";

import { EditorBubbleMenu } from "@/components/editor/editor-bubble-menu";
import { EditorContent } from "@/components/editor/editor-content";
import { EditorSlashCommand } from "@/components/editor/editor-slash-command";
import { EditorStatusBar } from "@/components/editor/editor-status-bar";
import { EditorToolbar } from "@/components/editor/editor-toolbar";
import { PostMetadataForm } from "@/components/editor/post-metadata-form";
import { PreviewPane } from "@/components/editor/preview-pane";
import { getClientExtensions } from "@/lib/editor/extensions";
import {
  createDraftAsset,
  deleteDraftAsset,
  getDraftAsset,
  saveDraftAsset,
  uploadDraftAsset,
} from "@/lib/editor/draft-assets";
import {
  deriveHtmlFromContent,
  derivePlainTextFromContent,
} from "@/lib/editor/serialize";
import type {
  SlashCommandItem,
  SlashCommandRenderState,
} from "@/lib/editor/slash-command";
import { slugify } from "@/lib/editor/slug";
import { buildPostStats } from "@/lib/editor/stats";
import type { Post, PostAsset } from "@/lib/posts/types";
import { useEditor } from "@tiptap/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type SaveState = "idle" | "saving" | "saved" | "error";

type UrlPanelState = {
  mode: "link" | "image";
  value: string;
} | null;

const slashCommandItems: SlashCommandItem[] = [
  {
    id: "paragraph",
    label: "Paragraph",
    description: "Continue with a regular paragraph.",
  },
  {
    id: "heading-1",
    label: "Heading 1",
    description: "Large section heading for major structure.",
  },
  {
    id: "heading-2",
    label: "Heading 2",
    description: "Medium heading for subsections.",
  },
  {
    id: "heading-3",
    label: "Heading 3",
    description: "Compact heading for nested sections.",
  },
  {
    id: "bullet-list",
    label: "Bullet list",
    description: "Create an unordered list.",
  },
  {
    id: "ordered-list",
    label: "Ordered list",
    description: "Create a numbered list.",
  },
  {
    id: "blockquote",
    label: "Quote",
    description: "Pull out a quoted passage.",
  },
  {
    id: "code-block",
    label: "Code block",
    description: "Insert a fenced code block.",
  },
  {
    id: "horizontal-rule",
    label: "Horizontal rule",
    description: "Add a visual divider.",
  },
  { id: "image", label: "Image", description: "Insert an image by URL." },
] as const;

function createSnapshot(post: {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string | null;
  contentJson: Post["contentJson"];
  contentHtml: string;
  plainText: string;
  status: Post["status"];
  assets?: PostAsset[];
}) {
  return JSON.stringify(post);
}

function normalizeUrl(input: string) {
  const value = input.trim();

  if (!value) {
    return null;
  }

  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    return url.toString();
  } catch {
    return null;
  }
}

function replaceAssetUrls(value: Post["contentJson"], urls: Map<string, string>): Post["contentJson"] {
  const visit = (node: Post["contentJson"]): Post["contentJson"] => ({
    ...node,
    attrs:
      node.attrs?.assetId && urls.has(String(node.attrs.assetId))
        ? { ...node.attrs, src: urls.get(String(node.attrs.assetId)), assetId: null }
        : node.attrs,
    content: node.content?.map(visit),
  });
  return visit(value);
}

function collectAssetIds(value: Post["contentJson"]) {
  const ids = new Set<string>();
  const visit = (node: Post["contentJson"]) => {
    if (node.attrs?.assetId) ids.add(String(node.attrs.assetId));
    node.content?.forEach(visit);
  };
  visit(value);
  return ids;
}

export function EditorShell({ initialPost }: { initialPost: Post }) {
  const router = useRouter();
  const { isAuthenticated, isReady } = useAuth();
  const [title, setTitle] = useState(initialPost.title);
  const [slug, setSlug] = useState(initialPost.slug);
  const [excerpt, setExcerpt] = useState(initialPost.excerpt);
  const [coverImage, setCoverImage] = useState(initialPost.coverImage ?? "");
  const [assets, setAssets] = useState<PostAsset[]>(initialPost.assets ?? []);
  const [status, setStatus] = useState<Post["status"]>(initialPost.status);
  const [contentJson, setContentJson] = useState(initialPost.contentJson);
  const [contentHtml, setContentHtml] = useState(initialPost.contentHtml);
  const [plainText, setPlainText] = useState(initialPost.plainText);
  const [saveState, setSaveState] = useState<SaveState>("saved");
  const [lastSavedAt, setLastSavedAt] = useState(initialPost.updatedAt);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [publishError, setPublishError] = useState<string | null>(null);
  const [isPreview, setIsPreview] = useState(false);
  const [previewHtml, setPreviewHtml] = useState(initialPost.contentHtml);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [slugTouched, setSlugTouched] = useState(Boolean(initialPost.slug));
  const [urlPanel, setUrlPanel] = useState<UrlPanelState>(null);
  const [slashState, setSlashState] = useState<SlashCommandRenderState | null>(null);
  const [slashSelectedIndex, setSlashSelectedIndex] = useState(0);
  const slashStateRef = useRef<SlashCommandRenderState | null>(null);
  const slashSelectedIndexRef = useRef(0);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const inFlightRef = useRef(false);
  const autosaveTimeoutRef = useRef<number | null>(null);
  const queuedPayloadRef = useRef<{
    snapshot: string;
    payload: {
      title: string;
      slug: string;
      excerpt: string;
      coverImage: string | null;
      contentJson: Post["contentJson"];
      contentHtml: string;
      plainText: string;
      status: Post["status"];
      assets: PostAsset[];
    };
  } | null>(null);
  const persistedSnapshotRef = useRef(
    createSnapshot({
      title: initialPost.title,
      slug: initialPost.slug,
      excerpt: initialPost.excerpt,
      coverImage: initialPost.coverImage,
      contentJson: initialPost.contentJson,
      contentHtml: initialPost.contentHtml,
      plainText: initialPost.plainText,
      status: initialPost.status,
      assets: initialPost.assets ?? [],
    }),
  );

  const slashBridge = useMemo(() => ({
    items: slashCommandItems,
    onChange: (next: SlashCommandRenderState | null) => {
      slashStateRef.current = next;
      slashSelectedIndexRef.current = 0;
      setSlashSelectedIndex(0);
      setSlashState(next);
    },
    onKeyDown: ({ event }: { event: KeyboardEvent }) => {
      const current = slashStateRef.current;
      if (!current || current.items.length === 0) return false;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        const direction = event.key === "ArrowDown" ? 1 : -1;
        const next = (slashSelectedIndexRef.current + direction + current.items.length) % current.items.length;
        slashSelectedIndexRef.current = next;
        setSlashSelectedIndex(next);
        return true;
      }
      if (event.key === "Enter") {
        current.command(current.items[slashSelectedIndexRef.current] ?? current.items[0]);
        return true;
      }
      return event.key === "Escape";
    },
  }), []);

  const editor = useEditor({
    immediatelyRender: false,
    autofocus: "end",
    extensions: getClientExtensions(slashBridge),
    content: initialPost.contentJson,
    editorProps: {
      attributes: {
        class:
          "editor-prosemirror min-h-[480px] w-full max-w-none rounded-[28px] px-2 py-4 text-[17px] leading-8 outline-none sm:px-4",
      },
    },
    onUpdate({ editor: currentEditor }) {
      setContentJson(currentEditor.getJSON());
      setContentHtml(currentEditor.getHTML());
      setPlainText(currentEditor.getText({ blockSeparator: "\n\n" }).trim());

    },
  });

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      startTransition(() => {
        router.replace("/login");
      });
    }
  }, [isAuthenticated, isReady, router]);

  const payload = useMemo(
    () => ({
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      coverImage:
        coverImage.startsWith("blob:") ? null : coverImage.trim() || null,
      contentJson,
      contentHtml,
      plainText,
      status,
      assets,
    }),
    [
      title,
      slug,
      excerpt,
      coverImage,
      contentJson,
      contentHtml,
      plainText,
      status,
      assets,
    ],
  );

  const snapshot = useMemo(() => createSnapshot(payload), [payload]);
  const isDirty = snapshot !== persistedSnapshotRef.current;
  const stats = useMemo(() => buildPostStats(plainText), [plainText]);

  const persistPost = useCallback(
    async (nextPayload: typeof payload) => {
      const nextSnapshot = createSnapshot(nextPayload);
      if (inFlightRef.current) {
        queuedPayloadRef.current = {
          snapshot: nextSnapshot,
          payload: nextPayload,
        };
        return;
      }

      inFlightRef.current = true;
      setSaveState("saving");
      setErrorMessage(null);

      try {
        const response = await fetch(`/api/posts/${initialPost.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nextPayload),
        });
        const result = (await response.json()) as {
          post?: Post;
          error?: string;
        };
        if (!response.ok || !result.post) {
          throw new Error(result.error ?? "Failed to save the post.");
        }

        persistedSnapshotRef.current = createSnapshot({
          title: result.post.title,
          slug: result.post.slug,
          excerpt: result.post.excerpt,
          coverImage: result.post.coverImage,
          contentJson: result.post.contentJson,
          contentHtml: result.post.contentHtml,
          plainText: result.post.plainText,
          status: result.post.status,
        });

        setSaveState("saved");
        setLastSavedAt(result.post.updatedAt);
        setStatus(result.post.status);
        setSlug(result.post.slug);
        setExcerpt(result.post.excerpt);
        setPreviewHtml(result.post.contentHtml);
        setAssets(result.post.assets ?? []);
      } catch (error) {
        setSaveState("error");
        setErrorMessage(
          error instanceof Error ? error.message : "Failed to save the post.",
        );
        throw error;
      } finally {
        inFlightRef.current = false;
        if (
          queuedPayloadRef.current &&
          queuedPayloadRef.current.snapshot !== persistedSnapshotRef.current
        ) {
          const queued = queuedPayloadRef.current;
          queuedPayloadRef.current = null;
          void persistPost(queued.payload);
        } else {
          queuedPayloadRef.current = null;
        }
      }
    },
    [initialPost.id],
  );

  useEffect(() => {
    if (!isDirty) return;
    if (saveState !== "saving") setSaveState("idle");

    autosaveTimeoutRef.current = window.setTimeout(() => {
      void persistPost(payload);
    }, 1200);

    return () => {
      if (autosaveTimeoutRef.current) {
        window.clearTimeout(autosaveTimeoutRef.current);
        autosaveTimeoutRef.current = null;
      }
    };
  }, [isDirty, payload, persistPost, saveState]);

  useEffect(() => {
    if (!isDirty) return;
    const beforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", beforeUnload);
    return () => window.removeEventListener("beforeunload", beforeUnload);
  }, [isDirty]);

  useEffect(() => {
    if (!isPreview) return;

    const timeout = window.setTimeout(async () => {
      try {
        setIsPreviewLoading(true);
        const response = await fetch("/api/posts/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contentHtml }),
        });
        const result = (await response.json()) as {
          contentHtml?: string;
          error?: string;
        };

        if (!response.ok || !result.contentHtml) {
          throw new Error(result.error ?? "Failed to prepare preview.");
        }

        setPreviewHtml(result.contentHtml);
      } catch {
        setPreviewHtml(contentHtml);
      } finally {
        setIsPreviewLoading(false);
      }
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [contentHtml, isPreview]);

  useEffect(() => {
    const openPicker = () => imageInputRef.current?.click();
    window.addEventListener("editor:open-image-picker", openPicker);
    return () => window.removeEventListener("editor:open-image-picker", openPicker);
  }, []);

  useEffect(() => {
    if (!editor) return;
    let cancelled = false;

    void (async () => {
      const localAssets = (initialPost.assets ?? []).filter((asset) => asset.status === "local");
      const resolved = await Promise.all(
        localAssets.map(async (asset) => ({ asset, stored: await getDraftAsset(asset.id) })),
      );
      if (cancelled) return;

      const urls = new Map<string, string>();
      for (const { asset, stored } of resolved) {
        if (!stored) continue;
        const objectUrl = URL.createObjectURL(stored.blob);
        urls.set(asset.id, objectUrl);
        if (asset.kind === "cover") setCoverImage(objectUrl);
      }
      if (urls.size > 0) editor.commands.setContent(replaceAssetUrls(initialPost.contentJson, urls));
    })();

    return () => {
      cancelled = true;
    };
  }, [editor, initialPost.assets, initialPost.contentJson]);

  async function stageImage(file: File, kind: PostAsset["kind"]) {
    if (!file.type.startsWith("image/")) {
      setErrorMessage("Choose an image file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage("Images must be 10 MB or smaller.");
      return;
    }

    const draftAsset = createDraftAsset(initialPost.id, file);
    await saveDraftAsset(draftAsset);
    const objectUrl = URL.createObjectURL(file);
    const nextAsset: PostAsset = {
      id: draftAsset.id,
      kind,
      url: null,
      filename: file.name,
      mimeType: file.type,
      status: "local",
    };

    if (kind === "cover") {
      const previous = assets.find((asset) => asset.kind === "cover" && asset.status === "local");
      if (previous) void deleteDraftAsset(previous.id);
      setAssets((current) => [...current.filter((asset) => asset.kind !== "cover"), nextAsset]);
      setCoverImage(objectUrl);
    } else {
      setAssets((current) => [...current, nextAsset]);
      editor?.commands.insertContent({
        type: "image",
        attrs: { src: objectUrl, assetId: draftAsset.id, alt: title || file.name },
      });
    }
    setErrorMessage(null);
  }

  function removeCoverImage() {
    const coverAsset = assets.find((asset) => asset.kind === "cover");
    if (coverAsset?.status === "local") void deleteDraftAsset(coverAsset.id);
    setAssets((current) => current.filter((asset) => asset.kind !== "cover"));
    setCoverImage("");
  }

  function openLinkPanel() {
    if (!editor || editor.state.selection.empty) return;
    setUrlPanel({
      mode: "link",
      value: editor.getAttributes("link").href ?? "",
    });
  }

  function openImagePanel() {
    imageInputRef.current?.click();
  }

  function submitUrlPanel() {
    if (!editor || !urlPanel) return;
    const normalized = normalizeUrl(urlPanel.value);
    if (!normalized) {
      setErrorMessage(
        `Enter a valid ${urlPanel.mode === "link" ? "link" : "image"} URL.`,
      );
      return;
    }

    if (urlPanel.mode === "link") {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: normalized })
        .run();
    } else {
      editor
        .chain()
        .focus()
        .setImage({ src: normalized, alt: title || "Post image" })
        .run();
    }

    setErrorMessage(null);
    setUrlPanel(null);
  }

  async function handlePublish(nextStatus: Post["status"]) {
    setIsPublishing(true);
    setPublishError(null);

    if (autosaveTimeoutRef.current) {
      window.clearTimeout(autosaveTimeoutRef.current);
      autosaveTimeoutRef.current = null;
    }

    try {
      let nextPayload = { ...payload, status: nextStatus };
      if (nextStatus === "published") {
        const referencedIds = collectAssetIds(contentJson);
        const localAssets = assets.filter(
          (asset) =>
            asset.status === "local" &&
            (asset.kind === "cover" ? Boolean(coverImage) : referencedIds.has(asset.id)),
        );
        const uploaded = await Promise.all(
          localAssets.map(async (asset) => {
            const stored = await getDraftAsset(asset.id);
            if (!stored) throw new Error(`The local image “${asset.filename}” is unavailable.`);
            return { asset, url: await uploadDraftAsset(stored) };
          }),
        );
        const urls = new Map(uploaded.map(({ asset, url }) => [asset.id, url]));
        const nextContentJson = replaceAssetUrls(contentJson, urls);
        const nextAssets = assets
          .filter((asset) => asset.status !== "local" || localAssets.some((local) => local.id === asset.id))
          .map((asset) =>
            urls.has(asset.id)
              ? { ...asset, url: urls.get(asset.id) ?? null, status: "uploaded" as const }
              : asset,
          );
        const coverAsset = nextAssets.find((asset) => asset.kind === "cover");
        nextPayload = {
          ...nextPayload,
          coverImage: coverAsset?.url ?? nextPayload.coverImage,
          contentJson: nextContentJson,
          contentHtml: deriveHtmlFromContent(nextContentJson),
          plainText: derivePlainTextFromContent(nextContentJson),
          assets: nextAssets,
        };
        await persistPost(nextPayload);
        editor?.commands.setContent(nextContentJson);
        setAssets(nextAssets);
        if (coverAsset?.url) setCoverImage(coverAsset.url);
        await Promise.all(uploaded.map(({ asset }) => deleteDraftAsset(asset.id)));
      } else {
        await persistPost(nextPayload);
      }
      setStatus(nextStatus);
    } catch (error) {
      setPublishError(
        error instanceof Error
          ? error.message
          : "Failed to update post status.",
      );
    } finally {
      setIsPublishing(false);
    }
  }

  if (!isReady || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[color:var(--background)] px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 text-center text-[color:var(--foreground)]">
          Loading editor...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[color:var(--background)] px-4 py-4 text-[color:var(--foreground)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <header className="rounded-[28px] border border-slate-200 bg-white px-5 py-4 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.12)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                Writing desk
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <h1 className="font-serif text-3xl tracking-tight sm:text-4xl">
                  Blog editor
                </h1>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {status}
                </span>
              </div>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                Draft in structured JSON, preview with sanitized HTML, publish
                to a public post route.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/dashboard"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Dashboard
              </Link>
              {status === "published" && slug ? (
                <Link
                  href={`/blog/${slug}`}
                  target="_blank"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  View live
                </Link>
              ) : null}
              <button
                type="button"
                onClick={() => setIsPreview((current) => !current)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isPreview
                    ? "bg-[color:var(--panel-inverse)] text-[color:var(--panel-inverse-foreground)]"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {isPreview ? "Back to edit" : "Preview"}
              </button>
              {status === "published" ? (
                <button
                  type="button"
                  onClick={() => void handlePublish("draft")}
                  disabled={isPublishing}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Revert to draft
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => void handlePublish("published")}
                  disabled={isPublishing}
                  className="rounded-full bg-[color:var(--brand-500)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-600)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isPublishing ? "Publishing..." : "Publish"}
                </button>
              )}
            </div>
          </div>
          {publishError ? (
            <p className="mt-3 text-sm text-rose-600 dark:text-rose-300">
              {publishError}
            </p>
          ) : null}
        </header>

        <PostMetadataForm
          title={title}
          slug={slug}
          excerpt={excerpt}
          coverImage={coverImage}
          onTitleChange={(value) => {
            setTitle(value);
            if (!slugTouched) setSlug(slugify(value));
          }}
          onSlugChange={(value) => {
            setSlugTouched(true);
            setSlug(slugify(value));
          }}
          onExcerptChange={setExcerpt}
          onCoverImageChange={removeCoverImage}
          onCoverFileChange={(file) => void stageImage(file, "cover")}
        />

        {isPreview ? (
          <div className="space-y-4">
            {isPreviewLoading ? (
              <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-4 text-sm text-[color:var(--muted-foreground)]">
                Refreshing preview...
              </div>
            ) : null}
            <PreviewPane
              title={title}
              excerpt={excerpt}
              coverImage={coverImage}
              contentHtml={previewHtml}
            />
          </div>
        ) : (
          <>
            <EditorToolbar
              editor={editor}
              urlPanel={urlPanel}
              onOpenLink={openLinkPanel}
              onOpenImage={openImagePanel}
              onClosePanel={() => setUrlPanel(null)}
              onUrlChange={(value) =>
                setUrlPanel((current) =>
                  current ? { ...current, value } : current,
                )
              }
              onSubmitUrl={submitUrlPanel}
            />

            <div className="relative">
              <EditorBubbleMenu editor={editor} onOpenLink={openLinkPanel} />
              <EditorContent
                editor={editor}
              />
              <EditorSlashCommand
                clientRect={slashState?.clientRect ?? null}
                contextElement={editor?.view.dom ?? null}
                items={slashState?.items ?? []}
                selectedIndex={Math.min(slashSelectedIndex, Math.max((slashState?.items.length ?? 1) - 1, 0))}
                onSelect={(item) => slashState?.command(item)}
              />
            </div>
          </>
        )}

        <EditorStatusBar
          saveState={saveState}
          lastSavedAt={lastSavedAt}
          stats={stats}
          isDirty={isDirty}
          errorMessage={errorMessage}
        />
        <input
          ref={imageInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void stageImage(file, "content");
            event.target.value = "";
          }}
        />
      </div>
    </div>
  );
}

export type MockUser = {
  id: string;
  name: string;
  email: string;
  role: "reader" | "contributor" | "editor";
  articleCount: number;
  joinedAt: string;
};

type AuthContextValue = {
  user: MockUser | null;
  isAuthenticated: boolean;
  isReady: boolean;
  login: (input: { email: string; password: string }) => MockUser;
  signup: (input: {
    name: string;
    email: string;
    password: string;
    role: MockUser["role"];
  }) => MockUser;
  logout: () => void;
};

const STORAGE_KEY = "waaxaa-user";

const AuthContext = createContext<AuthContextValue | null>(null);

function readStoredUser() {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as MockUser;
  } catch {
    return null;
  }
}

function persistUser(user: MockUser | null) {
  if (typeof window === "undefined") {
    return;
  }

  if (!user) {
    window.localStorage.removeItem(STORAGE_KEY);
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function buildUser(input: {
  name?: string;
  email: string;
  role?: MockUser["role"];
}) {
  const fallbackName = input.email.split("@")[0] || "Reader";

  return {
    id: crypto.randomUUID(),
    name: input.name?.trim() || fallbackName,
    email: input.email.trim().toLowerCase(),
    role: input.role || "contributor",
    articleCount: 4,
    joinedAt: new Date().toISOString(),
  } satisfies MockUser;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(() => readStoredUser());
  const [isReady] = useState(true);

  const value = useMemo<AuthContextValue>(() => {
    return {
      user,
      isAuthenticated: Boolean(user),
      isReady,
      login: (input) => {
        const existing = readStoredUser();
        const nextUser =
          existing && existing.email === input.email.trim().toLowerCase()
            ? existing
            : buildUser({ email: input.email });

        startTransition(() => {
          setUser(nextUser);
        });
        persistUser(nextUser);
        return nextUser;
      },
      signup: (input) => {
        const nextUser = buildUser({
          name: input.name,
          email: input.email,
          role: input.role,
        });

        startTransition(() => {
          setUser(nextUser);
        });
        persistUser(nextUser);
        return nextUser;
      },
      logout: () => {
        startTransition(() => {
          setUser(null);
        });
        persistUser(null);
      },
    };
  }, [isReady, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}

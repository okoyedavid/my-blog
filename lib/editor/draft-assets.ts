export type DraftAsset = {
  id: string;
  draftId: string;
  blob: Blob;
  filename: string;
  mimeType: string;
  createdAt: string;
};

const DATABASE_NAME = "myblog-editor";
const DATABASE_VERSION = 1;
const STORE_NAME = "draft-assets";

function openDatabase() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, { keyPath: "id" });
        store.createIndex("draftId", "draftId", { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function runRequest<T>(mode: IDBTransactionMode, operation: (store: IDBObjectStore) => IDBRequest<T>) {
  return openDatabase().then(
    (database) =>
      new Promise<T>((resolve, reject) => {
        const transaction = database.transaction(STORE_NAME, mode);
        const request = operation(transaction.objectStore(STORE_NAME));
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        transaction.oncomplete = () => database.close();
      }),
  );
}

export function saveDraftAsset(asset: DraftAsset) {
  return runRequest("readwrite", (store) => store.put(asset));
}

export function getDraftAsset(id: string) {
  return runRequest<DraftAsset | undefined>("readonly", (store) => store.get(id));
}

export function deleteDraftAsset(id: string) {
  return runRequest("readwrite", (store) => store.delete(id));
}

export function createDraftAsset(draftId: string, file: File): DraftAsset {
  return {
    id: crypto.randomUUID(),
    draftId,
    blob: file,
    filename: file.name,
    mimeType: file.type,
    createdAt: new Date().toISOString(),
  };
}

export async function uploadDraftAsset(asset: DraftAsset) {
  const formData = new FormData();
  formData.set("file", asset.blob, asset.filename);
  const response = await fetch("/api/uploads", { method: "POST", body: formData });
  const result = (await response.json()) as { url?: string; error?: string };
  if (!response.ok || !result.url) {
    throw new Error(result.error ?? "Failed to upload image.");
  }
  return result.url;
}

export type StoredPhotoMemory = {
  id: string;
  day: number;
  placeTitle: string;
  people: string;
  prompt: string;
  note: string;
  createdAt: string;
  blob: Blob;
};

const DATABASE = "asturies-family-memories-v1";
const STORE = "photos";

const openDatabase = () => new Promise<IDBDatabase>((resolve, reject) => {
  const request = indexedDB.open(DATABASE, 1);
  request.onupgradeneeded = () => {
    const database = request.result;
    if (!database.objectStoreNames.contains(STORE)) database.createObjectStore(STORE, { keyPath: "id" });
  };
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error ?? new Error("No s’ha pogut obrir l’àlbum local."));
});

const useStore = async <T>(mode: IDBTransactionMode, action: (store: IDBObjectStore) => IDBRequest<T>) => {
  const database = await openDatabase();
  return new Promise<T>((resolve, reject) => {
    const transaction = database.transaction(STORE, mode);
    const request = action(transaction.objectStore(STORE));
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("No s’ha pogut guardar la foto."));
    transaction.oncomplete = () => database.close();
    transaction.onerror = () => reject(transaction.error ?? new Error("Error en l’àlbum local."));
  });
};

export const getAllPhotoMemories = () => useStore<StoredPhotoMemory[]>("readonly", (store) => store.getAll());
export const putPhotoMemory = (memory: StoredPhotoMemory) => useStore<IDBValidKey>("readwrite", (store) => store.put(memory));
export const deletePhotoMemory = (id: string) => useStore<undefined>("readwrite", (store) => store.delete(id));
export const clearPhotoMemories = () => useStore<undefined>("readwrite", (store) => store.clear());

export const compressPhoto = (file: File) => new Promise<Blob>((resolve, reject) => {
  const image = new Image();
  const source = URL.createObjectURL(file);
  image.onload = () => {
    const maxSide = 1600;
    const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext("2d");
    if (!context) {
      URL.revokeObjectURL(source);
      reject(new Error("No s’ha pogut preparar la fotografia."));
      return;
    }
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      URL.revokeObjectURL(source);
      if (blob) resolve(blob);
      else reject(new Error("No s’ha pogut reduir la fotografia."));
    }, "image/jpeg", 0.82);
  };
  image.onerror = () => {
    URL.revokeObjectURL(source);
    reject(new Error("La imatge seleccionada no és vàlida."));
  };
  image.src = source;
});

export const blobToDataUrl = (blob: Blob) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(String(reader.result));
  reader.onerror = () => reject(reader.error ?? new Error("No s’ha pogut llegir la foto."));
  reader.readAsDataURL(blob);
});

export const dataUrlToBlob = async (dataUrl: string) => {
  const response = await fetch(dataUrl);
  return response.blob();
};

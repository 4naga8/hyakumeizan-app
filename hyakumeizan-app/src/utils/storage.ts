import { ClimbRecord, Photo } from '../types';

const RECORDS_KEY = 'hyakumeizan-records';
const DB_NAME = 'hyakumeizan-db';
const DB_VERSION = 1;
const PHOTOS_STORE = 'photos';

// LocalStorage操作（登頂記録）
export const recordsStorage = {
  getAll(): Record<number, ClimbRecord> {
    const data = localStorage.getItem(RECORDS_KEY);
    return data ? JSON.parse(data) : {};
  },

  get(mountainId: number): ClimbRecord | null {
    const records = this.getAll();
    return records[mountainId] || null;
  },

  save(record: ClimbRecord): void {
    const records = this.getAll();
    records[record.mountainId] = record;
    localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
  },

  delete(mountainId: number): void {
    const records = this.getAll();
    delete records[mountainId];
    localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
  },
};

// IndexedDB操作（写真）
let dbPromise: Promise<IDBDatabase> | null = null;

function openDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(PHOTOS_STORE)) {
        db.createObjectStore(PHOTOS_STORE, { keyPath: 'id' });
      }
    };
  });

  return dbPromise;
}

export const photosStorage = {
  async save(photo: Photo): Promise<void> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(PHOTOS_STORE, 'readwrite');
      const store = transaction.objectStore(PHOTOS_STORE);
      const request = store.put(photo);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  },

  async get(id: string): Promise<Photo | null> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(PHOTOS_STORE, 'readonly');
      const store = transaction.objectStore(PHOTOS_STORE);
      const request = store.get(id);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  },

  async getByMountainId(mountainId: number): Promise<Photo[]> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(PHOTOS_STORE, 'readonly');
      const store = transaction.objectStore(PHOTOS_STORE);
      const request = store.getAll();
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const photos = request.result.filter((p: Photo) => p.mountainId === mountainId);
        resolve(photos);
      };
    });
  },

  async delete(id: string): Promise<void> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(PHOTOS_STORE, 'readwrite');
      const store = transaction.objectStore(PHOTOS_STORE);
      const request = store.delete(id);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  },

  async deleteByMountainId(mountainId: number): Promise<void> {
    const photos = await this.getByMountainId(mountainId);
    for (const photo of photos) {
      await this.delete(photo.id);
    }
  },
};

// ファイルをBase64に変換
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// UUID生成
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

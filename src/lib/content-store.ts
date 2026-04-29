import "server-only";

import { getFirebaseDb } from "@/lib/firebase-admin";

export type ManagedContentType = "videos" | "news" | "gallery";

type ContactSubmission = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type EnrollmentSubmission = {
  name: string;
  phone: string;
  email: string;
  role: string;
  institution: string;
  message: string;
};

type StoredRecord = Record<string, unknown>;

const collectionNames = {
  contacts: "contacts",
  enrollments: "enrollments",
  videos: "videos",
  news: "news",
  gallery: "gallery",
} as const;

function withMetadata<T extends StoredRecord>(payload: T) {
  return {
    ...payload,
    createdAt: new Date().toISOString(),
  };
}

async function saveRecord(collection: string, payload: StoredRecord) {
  const db = getFirebaseDb();

  if (!db) {
    throw new Error(
      "Firebase não está configurado. Preencha o arquivo .env.local antes de usar os formulários."
    );
  }

  const result = await db.collection(collection).add(withMetadata(payload));
  return result.id;
}

export async function saveContactSubmission(payload: ContactSubmission) {
  return saveRecord(collectionNames.contacts, payload);
}

export async function saveEnrollmentSubmission(payload: EnrollmentSubmission) {
  return saveRecord(collectionNames.enrollments, payload);
}

export async function saveManagedContent(
  type: ManagedContentType,
  payload: StoredRecord
) {
  return saveRecord(collectionNames[type], payload);
}

export async function listManagedContent<T extends StoredRecord>(
  type: ManagedContentType
) {
  const db = getFirebaseDb();

  if (!db) {
    return [] as Array<T & { id: string }>;
  }

  const snapshot = await db
    .collection(collectionNames[type])
    .orderBy("createdAt", "desc")
    .limit(8)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as T),
  }));
}

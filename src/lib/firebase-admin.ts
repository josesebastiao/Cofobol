import "server-only";

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getFirebaseCredentials() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }

  return {
    projectId,
    clientEmail,
    privateKey,
  };
}

export function isFirebaseConfigured() {
  return Boolean(getFirebaseCredentials());
}

export function getFirebaseDb() {
  const credentials = getFirebaseCredentials();

  if (!credentials) {
    return null;
  }

  const app =
    getApps()[0] ||
    initializeApp({
      credential: cert(credentials),
      projectId: credentials.projectId,
    });

  return getFirestore(app);
}

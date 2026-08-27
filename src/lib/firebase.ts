import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "AIzaSyDemoKeyReplaceWithRealConfig",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "envo-peace-demo.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "envo-peace-demo",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "envo-peace-demo.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "000000000000",
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "1:000000000000:web:0000000000000000000000",
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

export function getFirebase() {
  if (!app) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  }
  return { app: app!, auth: auth!, db: db! };
}

export const PAYSTACK_PUBLIC_KEY =
  import.meta.env.VITE_PAYSTACK_PUBLIC_KEY ?? "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

export const FIREBASE_ENABLED =
  Boolean(import.meta.env.VITE_FIREBASE_API_KEY) &&
  import.meta.env.VITE_FIREBASE_API_KEY !== "AIzaSyDemoKeyReplaceWithRealConfig";

import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { getFirebase, FIREBASE_ENABLED } from "./firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!FIREBASE_ENABLED) {
      setLoading(false);
      return;
    }

    const { auth } = getFirebase();
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return { user, loading };
}

export async function adminLogin(email: string, password: string) {
  const { auth } = getFirebase();
  return signInWithEmailAndPassword(auth, email, password);
}

export async function adminLogout() {
  const { auth } = getFirebase();
  return signOut(auth);
}

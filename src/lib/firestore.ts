import {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore";
import { getFirebase, FIREBASE_ENABLED } from "./firebase";

export interface ProgramDoc {
  id?: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  status: "active" | "archived";
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface ImpactStat {
  id?: string;
  label: string;
  value: string;
  icon: string;
}

export interface MessageDoc {
  id?: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
  read: boolean;
  createdAt?: Timestamp;
}

export interface DonationDoc {
  id?: string;
  donorName: string;
  email: string;
  amount: number;
  currency: string;
  reference: string;
  status: string;
  method: string;
  createdAt?: Timestamp;
}

function db() {
  const { db } = getFirebase();
  return db;
}

// ---- Programs ----
export async function fetchPrograms(): Promise<ProgramDoc[]> {
  if (!FIREBASE_ENABLED) return [];
  const snap = await getDocs(collection(db(), "programs"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as ProgramDoc[];
}

export async function saveProgram(data: ProgramDoc): Promise<void> {
  if (!FIREBASE_ENABLED) return;
  if (data.id) {
    await updateDoc(doc(db(), "programs", data.id), {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } else {
    await addDoc(collection(db(), "programs"), {
      ...data,
      status: data.status ?? "active",
      createdAt: serverTimestamp(),
    });
  }
}

export async function deleteProgram(id: string): Promise<void> {
  if (!FIREBASE_ENABLED) return;
  await deleteDoc(doc(db(), "programs", id));
}

// ---- Impact Stats ----
export async function fetchImpactStats(): Promise<ImpactStat[]> {
  if (!FIREBASE_ENABLED) return [];
  const snap = await getDoc(doc(db(), "config", "impact_stats"));
  if (!snap.exists()) return [];
  const data = snap.data();
  if (!data.stats) return [];
  return data.stats as ImpactStat[];
}

export async function saveImpactStats(stats: ImpactStat[]): Promise<void> {
  if (!FIREBASE_ENABLED) return;
  await setDoc(doc(db(), "config", "impact_stats"), { stats }, { merge: true });
}

// ---- Messages ----
export async function submitMessage(data: Omit<MessageDoc, "id" | "read" | "createdAt">): Promise<void> {
  if (!FIREBASE_ENABLED) return;
  await addDoc(collection(db(), "messages"), {
    ...data,
    read: false,
    createdAt: serverTimestamp(),
  });
}

export async function fetchMessages(): Promise<MessageDoc[]> {
  if (!FIREBASE_ENABLED) return [];
  const q = query(collection(db(), "messages"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as MessageDoc[];
}

export function subscribeMessages(cb: (messages: MessageDoc[]) => void): () => void {
  if (!FIREBASE_ENABLED) return () => {};
  const q = query(collection(db(), "messages"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })) as MessageDoc[]);
  });
}

export async function markMessageRead(id: string): Promise<void> {
  if (!FIREBASE_ENABLED) return;
  await updateDoc(doc(db(), "messages", id), { read: true });
}

// ---- Donations ----
export async function recordDonation(data: Omit<DonationDoc, "id" | "createdAt">): Promise<void> {
  if (!FIREBASE_ENABLED) return;
  await addDoc(collection(db(), "donations"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export async function fetchDonations(): Promise<DonationDoc[]> {
  if (!FIREBASE_ENABLED) return [];
  const q = query(collection(db(), "donations"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as DonationDoc[];
}

// ---- News ----
export interface NewsDoc {
  id?: string;
  title: string;
  body: string;
  date: string;
  image: string;
  createdAt?: Timestamp;
}

export async function fetchNews(): Promise<NewsDoc[]> {
  if (!FIREBASE_ENABLED) return [];
  const q = query(collection(db(), "news"), orderBy("date", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as NewsDoc[];
}

export async function saveNews(data: NewsDoc): Promise<void> {
  if (!FIREBASE_ENABLED) return;
  if (data.id) {
    await updateDoc(doc(db(), "news", data.id), { ...data, updatedAt: serverTimestamp() });
  } else {
    await addDoc(collection(db(), "news"), { ...data, createdAt: serverTimestamp() });
  }
}

export async function deleteNews(id: string): Promise<void> {
  if (!FIREBASE_ENABLED) return;
  await deleteDoc(doc(db(), "news", id));
}

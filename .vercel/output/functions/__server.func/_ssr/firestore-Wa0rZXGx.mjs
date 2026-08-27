import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./button-DKsLk7wf.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { a as addDoc, c as collection, g as getFirestore, b as getDocs, d as getDoc, e as doc, q as query, o as orderBy, f as onSnapshot, s as setDoc, u as updateDoc, h as serverTimestamp, i as deleteDoc } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import { g as getAuth } from "../_libs/firebase__auth.mjs";
import { i as initializeApp } from "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const firebaseConfig = {
  apiKey: "AIzaSyDemoKeyReplaceWithRealConfig",
  authDomain: "envo-peace-demo.firebaseapp.com",
  projectId: "envo-peace-demo",
  storageBucket: "envo-peace-demo.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000"
};
let app;
let auth;
let db$1;
function getFirebase() {
  if (!app) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db$1 = getFirestore(app);
  }
  return { app, auth, db: db$1 };
}
const PAYSTACK_PUBLIC_KEY = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const FIREBASE_ENABLED = Boolean(void 0) && true;
function db() {
  const { db: db2 } = getFirebase();
  return db2;
}
async function fetchPrograms() {
  if (!FIREBASE_ENABLED) return [];
  const snap = await getDocs(collection(db(), "programs"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
async function saveProgram(data) {
  if (!FIREBASE_ENABLED) return;
  if (data.id) {
    await updateDoc(doc(db(), "programs", data.id), {
      ...data,
      updatedAt: serverTimestamp()
    });
  } else {
    await addDoc(collection(db(), "programs"), {
      ...data,
      status: data.status ?? "active",
      createdAt: serverTimestamp()
    });
  }
}
async function deleteProgram(id) {
  if (!FIREBASE_ENABLED) return;
  await deleteDoc(doc(db(), "programs", id));
}
async function fetchImpactStats() {
  if (!FIREBASE_ENABLED) return [];
  const snap = await getDoc(doc(db(), "config", "impact_stats"));
  if (!snap.exists()) return [];
  const data = snap.data();
  if (!data.stats) return [];
  return data.stats;
}
async function saveImpactStats(stats) {
  if (!FIREBASE_ENABLED) return;
  await setDoc(doc(db(), "config", "impact_stats"), { stats }, { merge: true });
}
async function submitMessage(data) {
  if (!FIREBASE_ENABLED) return;
  await addDoc(collection(db(), "messages"), {
    ...data,
    read: false,
    createdAt: serverTimestamp()
  });
}
function subscribeMessages(cb) {
  if (!FIREBASE_ENABLED) return () => {
  };
  const q = query(collection(db(), "messages"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
}
async function markMessageRead(id) {
  if (!FIREBASE_ENABLED) return;
  await updateDoc(doc(db(), "messages", id), { read: true });
}
async function recordDonation(data) {
  if (!FIREBASE_ENABLED) return;
  await addDoc(collection(db(), "donations"), {
    ...data,
    createdAt: serverTimestamp()
  });
}
async function fetchDonations() {
  if (!FIREBASE_ENABLED) return [];
  const q = query(collection(db(), "donations"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
async function fetchNews() {
  if (!FIREBASE_ENABLED) return [];
  const q = query(collection(db(), "news"), orderBy("date", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}
async function saveNews(data) {
  if (!FIREBASE_ENABLED) return;
  if (data.id) {
    await updateDoc(doc(db(), "news", data.id), { ...data, updatedAt: serverTimestamp() });
  } else {
    await addDoc(collection(db(), "news"), { ...data, createdAt: serverTimestamp() });
  }
}
async function deleteNews(id) {
  if (!FIREBASE_ENABLED) return;
  await deleteDoc(doc(db(), "news", id));
}
export {
  FIREBASE_ENABLED as F,
  Input as I,
  Label as L,
  PAYSTACK_PUBLIC_KEY as P,
  fetchImpactStats as a,
  fetchDonations as b,
  fetchNews as c,
  subscribeMessages as d,
  saveImpactStats as e,
  fetchPrograms as f,
  getFirebase as g,
  saveProgram as h,
  deleteProgram as i,
  saveNews as j,
  deleteNews as k,
  markMessageRead as m,
  recordDonation as r,
  submitMessage as s
};

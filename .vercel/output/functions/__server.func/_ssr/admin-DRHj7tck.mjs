import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer } from "./Footer-B3BLk5RQ.mjs";
import { B as Button, c as cn } from "./button-DKsLk7wf.mjs";
import { F as FIREBASE_ENABLED, g as getFirebase, L as Label, I as Input, f as fetchPrograms, a as fetchImpactStats, b as fetchDonations, c as fetchNews, d as subscribeMessages, e as saveImpactStats, m as markMessageRead, h as saveProgram, i as deleteProgram, j as saveNews, k as deleteNews } from "./firestore-Wa0rZXGx.mjs";
import { T as Textarea } from "./textarea-EB8hjw0f.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CU4Hid-b.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { o as onAuthStateChanged, s as signInWithEmailAndPassword, a as signOut } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import { o as Lock, p as CircleAlert, q as LogOut, r as FolderKanban, s as Inbox, R as Receipt, t as ChartBar, u as LayoutDashboard, v as Plus, w as Trash2, x as Save, l as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "./router-KearU_rM.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/firebase__util.mjs";
import "../_libs/firebase__component.mjs";
import "../_libs/idb.mjs";
import "../_libs/firebase__webchannel-wrapper.mjs";
import "../_libs/@grpc/grpc-js.mjs";
import "process";
import "tls";
import "fs";
import "os";
import "net";
import "events";
import "http2";
import "http";
import "url";
import "dns";
import "zlib";
import "../_libs/@grpc/proto-loader.mjs";
import "path";
import "../_libs/lodash.camelcase.mjs";
import "../_libs/protobufjs.mjs";
import "../_libs/protobufjs__aspromise.mjs";
import "../_libs/protobufjs__base64.mjs";
import "../_libs/protobufjs__eventemitter.mjs";
import "../_libs/protobufjs__float.mjs";
import "../_libs/protobufjs__utf8.mjs";
import "../_libs/protobufjs__pool.mjs";
import "../_libs/long.mjs";
import "../_libs/protobufjs__codegen.mjs";
import "../_libs/protobufjs__fetch.mjs";
import "../_libs/protobufjs__path.mjs";
import "../_libs/re2js.mjs";
function useAuth() {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
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
async function adminLogin(email, password) {
  const { auth } = getFirebase();
  return signInWithEmailAndPassword(auth, email, password);
}
async function adminLogout() {
  const { auth } = getFirebase();
  return signOut(auth);
}
function AdminPage() {
  const {
    user,
    loading
  } = useAuth();
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Loading…" })
    ] }) });
  }
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginScreen, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {});
}
function LoginScreen() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await adminLogin(email, password);
      toast.success("Welcome back!");
    } catch {
      setError("Invalid credentials. Please check your email and password.");
    }
    setSubmitting(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-7 w-7 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-2xl font-bold text-foreground", children: "Admin Login" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Sign in to manage programs, impact metrics, and messages." })
      ] }),
      !FIREBASE_ENABLED && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-start gap-2 rounded-xl border border-accent/30 bg-accent-soft/50 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80", children: "Firebase is not configured. Set the VITE_FIREBASE_* environment variables and create an admin user in Firebase Authentication to enable login." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "admin-email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "admin-email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "admin@envopeace.org" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "admin-password", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "admin-password", type: "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "••••••••" })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 shrink-0" }),
          " ",
          error
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", size: "lg", className: "w-full", disabled: submitting, children: submitting ? "Signing in…" : "Sign In" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Dashboard() {
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [programs, setPrograms] = reactExports.useState([]);
  const [impactStats, setImpactStats] = reactExports.useState([]);
  const [messages, setMessages] = reactExports.useState([]);
  const [donations, setDonations] = reactExports.useState([]);
  const [newsList, setNewsList] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (!FIREBASE_ENABLED) return;
    fetchPrograms().then(setPrograms).catch(() => {
    });
    fetchImpactStats().then(setImpactStats).catch(() => {
    });
    fetchDonations().then(setDonations).catch(() => {
    });
    fetchNews().then(setNewsList).catch(() => {
    });
    const unsub = subscribeMessages(setMessages);
    return unsub;
  }, []);
  const unreadCount = messages.filter((m) => !m.read).length;
  const totalDonations = donations.length;
  const totalPrograms = programs.length;
  async function handleLogout() {
    await adminLogout();
    toast.success("Signed out successfully.");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-8 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground md:text-3xl", children: "Admin Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage your site content, messages, and donation records." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: handleLogout, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Sign Out"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [{
        label: "Programs",
        value: totalPrograms,
        Icon: FolderKanban,
        color: "bg-primary-soft text-primary-deep"
      }, {
        label: "Unread Messages",
        value: unreadCount,
        Icon: Inbox,
        color: "bg-accent-soft text-accent-foreground"
      }, {
        label: "Donations",
        value: totalDonations,
        Icon: Receipt,
        color: "bg-primary-soft text-primary-deep"
      }, {
        label: "News Articles",
        value: newsList.length,
        Icon: ChartBar,
        color: "bg-accent-soft text-accent-foreground"
      }].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("flex h-10 w-10 items-center justify-center rounded-xl", stat.color), children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-foreground", children: stat.value })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: stat.label })
      ] }, stat.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: (v) => setActiveTab(v), className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex w-full flex-wrap justify-start gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "overview", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-4 w-4" }),
            " Overview"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "programs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "h-4 w-4" }),
            " Programs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "impact", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartBar, { className: "h-4 w-4" }),
            " Impact"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "messages", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-4 w-4" }),
            " Messages"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "donations", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-4 w-4" }),
            " Donations"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "news", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " News"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "overview", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewPanel, { programs, messages, donations, newsList, onNavigate: setActiveTab }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "programs", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramsManager, { programs, onRefresh: () => fetchPrograms().then(setPrograms) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "impact", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactEditor, { stats: impactStats, onSave: async (s) => {
          await saveImpactStats(s);
          setImpactStats(s);
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "messages", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessagesInbox, { messages, onRead: markMessageRead }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "donations", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DonationLedger, { donations }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "news", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NewsManager, { newsList, onRefresh: () => fetchNews().then(setNewsList) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function OverviewPanel({
  programs,
  messages,
  donations,
  newsList,
  onNavigate
}) {
  const recentMessages = messages.slice(0, 5);
  const recentDonations = donations.slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 text-lg font-bold text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-5 w-5 text-primary" }),
        " Recent Messages"
      ] }),
      recentMessages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "No messages yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: recentMessages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-xl border border-border bg-secondary/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: m.name }),
          !m.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-accent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
          m.reason,
          " — ",
          m.email
        ] })
      ] }, m.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "mt-4", onClick: () => onNavigate("messages"), children: "View All Messages" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 text-lg font-bold text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-5 w-5 text-primary" }),
        " Recent Donations"
      ] }),
      recentDonations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "No donations recorded yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: recentDonations.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: d.donorName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: d.method })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-primary", children: [
          d.currency === "NGN" ? "₦" : "$",
          d.amount.toLocaleString()
        ] })
      ] }, d.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "mt-4", onClick: () => onNavigate("donations"), children: "View All Donations" })
    ] })
  ] });
}
function ProgramsManager({
  programs,
  onRefresh
}) {
  const [editing, setEditing] = reactExports.useState(null);
  const [showForm, setShowForm] = reactExports.useState(false);
  function startNew() {
    setEditing({
      title: "",
      slug: "",
      category: "",
      description: "",
      image: "",
      status: "active"
    });
    setShowForm(true);
  }
  async function handleSave(data) {
    await saveProgram(data);
    toast.success("Program saved successfully.");
    setShowForm(false);
    setEditing(null);
    onRefresh();
  }
  async function handleDelete(id) {
    await deleteProgram(id);
    toast.success("Program deleted.");
    onRefresh();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Programs & Events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "sm", onClick: startNew, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Add Program"
      ] })
    ] }),
    showForm && editing && /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramForm, { initial: editing, onSave: handleSave, onCancel: () => {
      setShowForm(false);
      setEditing(null);
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: programs.length === 0 && !FIREBASE_ENABLED ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-accent/30 bg-accent-soft/50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80", children: "Firebase is not configured. Programs will appear here once Firebase environment variables are set and data is added." }) }) : programs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: 'No programs yet. Click "Add Program" to create one.' }) : programs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          p.category,
          " · ",
          p.status
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => {
          setEditing(p);
          setShowForm(true);
        }, children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => handleDelete(p.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
      ] })
    ] }, p.id)) })
  ] });
}
function ProgramForm({
  initial,
  onSave,
  onCancel
}) {
  const [data, setData] = reactExports.useState(initial);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    onSave(data);
  }, className: "mt-4 rounded-2xl border border-border bg-secondary/30 p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "p-title", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "p-title", value: data.title, onChange: (e) => setData({
          ...data,
          title: e.target.value
        }), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "p-slug", children: "Slug" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "p-slug", value: data.slug, onChange: (e) => setData({
          ...data,
          slug: e.target.value
        }), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "p-category", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "p-category", value: data.category, onChange: (e) => setData({
          ...data,
          category: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "p-image", children: "Image URL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "p-image", value: data.image, onChange: (e) => setData({
          ...data,
          image: e.target.value
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "p-desc", children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "p-desc", rows: 3, value: data.description, onChange: (e) => setData({
        ...data,
        description: e.target.value
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", variant: "hero", size: "sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
        " Save"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: onCancel, children: "Cancel" })
    ] })
  ] });
}
function ImpactEditor({
  stats,
  onSave
}) {
  const [local, setLocal] = reactExports.useState(stats);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setLocal(stats);
  }, [stats]);
  async function handleSave() {
    setSaving(true);
    await onSave(local);
    setSaving(false);
    toast.success("Impact stats updated.");
  }
  function updateStat(index, field, value) {
    const next = [...local];
    next[index] = {
      ...next[index],
      [field]: value
    };
    setLocal(next);
  }
  function addStat() {
    setLocal([...local, {
      label: "",
      value: "",
      icon: "Users"
    }]);
  }
  function removeStat(index) {
    setLocal(local.filter((_, i) => i !== index));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Impact Metrics Editor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: addStat, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Add Stat"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "These stats appear on the home page and impact page as live counters." }),
    !FIREBASE_ENABLED && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl border border-accent/30 bg-accent-soft/50 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80", children: "Firebase is not configured. Changes will not be saved until environment variables are set." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: local.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-end gap-3 rounded-xl border border-border bg-card p-4 shadow-card sm:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 sm:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Label" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: stat.label, onChange: (e) => updateStat(i, "label", e.target.value), placeholder: "Lives Impacted" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 sm:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: stat.value, onChange: (e) => updateStat(i, "value", e.target.value), placeholder: "10,000+" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 sm:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Icon Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: stat.icon, onChange: (e) => updateStat(i, "icon", e.target.value), placeholder: "Users" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => removeStat(i), className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
        " Remove"
      ] }) })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "sm", className: "mt-4", onClick: handleSave, disabled: saving, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
      " ",
      saving ? "Saving…" : "Save Changes"
    ] })
  ] });
}
function MessagesInbox({
  messages,
  onRead
}) {
  const [selected, setSelected] = reactExports.useState(null);
  async function handleClick(msg) {
    setSelected(msg);
    if (!msg.read && msg.id) {
      await onRead(msg.id);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Volunteer & Inquiry Inbox" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Real-time submissions from the contact form. Unread messages are highlighted." }),
    !FIREBASE_ENABLED && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl border border-accent/30 bg-accent-soft/50 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80", children: "Firebase is not configured. Messages will appear here once environment variables are set." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No messages yet." }) : messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleClick(m), className: cn("w-full rounded-xl border p-4 text-left transition-all", selected?.id === m.id ? "border-primary bg-primary-soft/30 shadow-soft" : "border-border bg-card hover:border-primary/40"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: m.name }),
          !m.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-accent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
          m.reason,
          " · ",
          m.email
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-foreground/60 line-clamp-1", children: m.message })
      ] }, m.id)) }),
      selected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-foreground", children: selected.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selected.email }),
            selected.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selected.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-deep", children: selected.reason })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 border-t border-border pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground", children: selected.message }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary" }),
          " ",
          selected.read ? "Read" : "Marked as read"
        ] })
      ] })
    ] })
  ] });
}
function DonationLedger({
  donations
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Donation Ledger" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Record of successful donation callbacks with donor names, references, and amounts." }),
    !FIREBASE_ENABLED && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl border border-accent/30 bg-accent-soft/50 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80", children: "Firebase is not configured. Donations will appear here once environment variables are set." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-x-auto rounded-2xl border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left font-semibold text-muted-foreground", children: "Donor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left font-semibold text-muted-foreground", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-right font-semibold text-muted-foreground", children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left font-semibold text-muted-foreground", children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left font-semibold text-muted-foreground", children: "Reference" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left font-semibold text-muted-foreground", children: "Status" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: donations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "p-6 text-center text-muted-foreground", children: "No donations recorded yet." }) }) : donations.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium text-foreground", children: d.donorName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: d.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 text-right font-bold text-primary", children: [
          d.currency === "NGN" ? "₦" : "$",
          d.amount.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: d.method }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-xs text-muted-foreground", children: d.reference }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary-deep", children: d.status }) })
      ] }, d.id)) })
    ] }) })
  ] });
}
function NewsManager({
  newsList,
  onRefresh
}) {
  const [editing, setEditing] = reactExports.useState(null);
  const [showForm, setShowForm] = reactExports.useState(false);
  function startNew() {
    setEditing({
      title: "",
      body: "",
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      image: ""
    });
    setShowForm(true);
  }
  async function handleSave(data) {
    await saveNews(data);
    toast.success("News article saved.");
    setShowForm(false);
    setEditing(null);
    onRefresh();
  }
  async function handleDelete(id) {
    await deleteNews(id);
    toast.success("Article deleted.");
    onRefresh();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "News & Articles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "sm", onClick: startNew, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Add Article"
      ] })
    ] }),
    showForm && editing && /* @__PURE__ */ jsxRuntimeExports.jsx(NewsForm, { initial: editing, onSave: handleSave, onCancel: () => {
      setShowForm(false);
      setEditing(null);
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: newsList.length === 0 && !FIREBASE_ENABLED ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-accent/30 bg-accent-soft/50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80", children: "Firebase is not configured. News articles will appear here once Firebase environment variables are set." }) }) : newsList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No articles yet." }) : newsList.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: n.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: n.date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => {
          setEditing(n);
          setShowForm(true);
        }, children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => handleDelete(n.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
      ] })
    ] }, n.id)) })
  ] });
}
function NewsForm({
  initial,
  onSave,
  onCancel
}) {
  const [data, setData] = reactExports.useState(initial);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    onSave(data);
  }, className: "mt-4 rounded-2xl border border-border bg-secondary/30 p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "n-title", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "n-title", value: data.title, onChange: (e) => setData({
          ...data,
          title: e.target.value
        }), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "n-date", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "n-date", type: "date", value: data.date, onChange: (e) => setData({
          ...data,
          date: e.target.value
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "n-image", children: "Image URL" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "n-image", value: data.image, onChange: (e) => setData({
        ...data,
        image: e.target.value
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "n-body", children: "Body" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "n-body", rows: 4, value: data.body, onChange: (e) => setData({
        ...data,
        body: e.target.value
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", variant: "hero", size: "sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
        " Save"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: onCancel, children: "Cancel" })
    ] })
  ] });
}
export {
  AdminPage as component
};

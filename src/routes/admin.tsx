import { useState, useEffect, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, FolderKanban, ChartBar as BarChart3, Inbox, Receipt, LogOut, Plus, Trash2, Save, Mail, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Lock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useAuth, adminLogin, adminLogout } from "@/lib/auth";
import {
  fetchPrograms,
  saveProgram,
  deleteProgram,
  fetchImpactStats,
  saveImpactStats,
  subscribeMessages,
  markMessageRead,
  fetchDonations,
  fetchNews,
  saveNews,
  deleteNews,
  type ProgramDoc,
  type ImpactStat,
  type MessageDoc,
  type DonationDoc,
  type NewsDoc,
} from "@/lib/firestore";
import { FIREBASE_ENABLED } from "@/lib/firebase";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Envo Peace and Development Foundation" },
      { name: "description", content: "Secure administrative dashboard for managing programs, impact metrics, messages, and donations." },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  return <Dashboard />;
}

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleLogin(e: FormEvent) {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-elegant">
                <Lock className="h-7 w-7 text-primary-foreground" />
              </span>
              <h1 className="mt-4 text-2xl font-bold text-foreground">Admin Login</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Sign in to manage programs, impact metrics, and messages.
              </p>
            </div>

            {!FIREBASE_ENABLED && (
              <div className="mt-6 flex items-start gap-2 rounded-xl border border-accent/30 bg-accent-soft/50 p-3">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-xs text-foreground/80">
                  Firebase is not configured. Set the VITE_FIREBASE_* environment
                  variables and create an admin user in Firebase Authentication
                  to enable login.
                </p>
              </div>
            )}

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@envopeace.org"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>
              {error && (
                <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4 shrink-0" /> {error}
                </div>
              )}
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Signing in…" : "Sign In"}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

type TabKey = "overview" | "programs" | "impact" | "messages" | "donations" | "news";

function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [programs, setPrograms] = useState<ProgramDoc[]>([]);
  const [impactStats, setImpactStats] = useState<ImpactStat[]>([]);
  const [messages, setMessages] = useState<MessageDoc[]>([]);
  const [donations, setDonations] = useState<DonationDoc[]>([]);
  const [newsList, setNewsList] = useState<NewsDoc[]>([]);

  useEffect(() => {
    if (!FIREBASE_ENABLED) return;
    fetchPrograms().then(setPrograms).catch(() => {});
    fetchImpactStats().then(setImpactStats).catch(() => {});
    fetchDonations().then(setDonations).catch(() => {});
    fetchNews().then(setNewsList).catch(() => {});
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground md:text-3xl">Admin Dashboard</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage your site content, messages, and donation records.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" /> Sign Out
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Programs", value: totalPrograms, Icon: FolderKanban, color: "bg-primary-soft text-primary-deep" },
              { label: "Unread Messages", value: unreadCount, Icon: Inbox, color: "bg-accent-soft text-accent-foreground" },
              { label: "Donations", value: totalDonations, Icon: Receipt, color: "bg-primary-soft text-primary-deep" },
              { label: "News Articles", value: newsList.length, Icon: BarChart3, color: "bg-accent-soft text-accent-foreground" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", stat.color)}>
                    <stat.Icon className="h-5 w-5" />
                  </span>
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabKey)} className="mt-8">
            <TabsList className="flex w-full flex-wrap justify-start gap-1">
              <TabsTrigger value="overview"><LayoutDashboard className="h-4 w-4" /> Overview</TabsTrigger>
              <TabsTrigger value="programs"><FolderKanban className="h-4 w-4" /> Programs</TabsTrigger>
              <TabsTrigger value="impact"><BarChart3 className="h-4 w-4" /> Impact</TabsTrigger>
              <TabsTrigger value="messages"><Inbox className="h-4 w-4" /> Messages</TabsTrigger>
              <TabsTrigger value="donations"><Receipt className="h-4 w-4" /> Donations</TabsTrigger>
              <TabsTrigger value="news"><Plus className="h-4 w-4" /> News</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <OverviewPanel
                programs={programs}
                messages={messages}
                donations={donations}
                newsList={newsList}
                onNavigate={setActiveTab}
              />
            </TabsContent>

            <TabsContent value="programs" className="mt-6">
              <ProgramsManager programs={programs} onRefresh={() => fetchPrograms().then(setPrograms)} />
            </TabsContent>

            <TabsContent value="impact" className="mt-6">
              <ImpactEditor stats={impactStats} onSave={async (s) => { await saveImpactStats(s); setImpactStats(s); }} />
            </TabsContent>

            <TabsContent value="messages" className="mt-6">
              <MessagesInbox messages={messages} onRead={markMessageRead} />
            </TabsContent>

            <TabsContent value="donations" className="mt-6">
              <DonationLedger donations={donations} />
            </TabsContent>

            <TabsContent value="news" className="mt-6">
              <NewsManager newsList={newsList} onRefresh={() => fetchNews().then(setNewsList)} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function OverviewPanel({
  programs,
  messages,
  donations,
  newsList,
  onNavigate,
}: {
  programs: ProgramDoc[];
  messages: MessageDoc[];
  donations: DonationDoc[];
  newsList: NewsDoc[];
  onNavigate: (tab: TabKey) => void;
}) {
  const recentMessages = messages.slice(0, 5);
  const recentDonations = donations.slice(0, 5);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Inbox className="h-5 w-5 text-primary" /> Recent Messages
        </h3>
        {recentMessages.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">No messages yet.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {recentMessages.map((m) => (
              <li key={m.id} className="rounded-xl border border-border bg-secondary/30 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{m.name}</span>
                  {!m.read && <span className="h-2 w-2 rounded-full bg-accent" />}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{m.reason} — {m.email}</p>
              </li>
            ))}
          </ul>
        )}
        <Button variant="outline" size="sm" className="mt-4" onClick={() => onNavigate("messages")}>
          View All Messages
        </Button>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Receipt className="h-5 w-5 text-primary" /> Recent Donations
        </h3>
        {recentDonations.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">No donations recorded yet.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {recentDonations.map((d) => (
              <li key={d.id} className="flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-3">
                <div>
                  <span className="text-sm font-medium text-foreground">{d.donorName}</span>
                  <p className="text-xs text-muted-foreground">{d.method}</p>
                </div>
                <span className="text-sm font-bold text-primary">
                  {d.currency === "NGN" ? "₦" : "$"}{d.amount.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}
        <Button variant="outline" size="sm" className="mt-4" onClick={() => onNavigate("donations")}>
          View All Donations
        </Button>
      </div>
    </div>
  );
}

function ProgramsManager({ programs, onRefresh }: { programs: ProgramDoc[]; onRefresh: () => void }) {
  const [editing, setEditing] = useState<ProgramDoc | null>(null);
  const [showForm, setShowForm] = useState(false);

  function startNew() {
    setEditing({ title: "", slug: "", category: "", description: "", image: "", status: "active" });
    setShowForm(true);
  }

  async function handleSave(data: ProgramDoc) {
    await saveProgram(data);
    toast.success("Program saved successfully.");
    setShowForm(false);
    setEditing(null);
    onRefresh();
  }

  async function handleDelete(id: string) {
    await deleteProgram(id);
    toast.success("Program deleted.");
    onRefresh();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">Programs & Events</h3>
        <Button variant="hero" size="sm" onClick={startNew}>
          <Plus className="h-4 w-4" /> Add Program
        </Button>
      </div>

      {showForm && editing && (
        <ProgramForm
          initial={editing}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )}

      <div className="mt-6 space-y-3">
        {programs.length === 0 && !FIREBASE_ENABLED ? (
          <div className="rounded-xl border border-accent/30 bg-accent-soft/50 p-4">
            <p className="text-sm text-foreground/80">
              Firebase is not configured. Programs will appear here once Firebase environment variables are set and data is added.
            </p>
          </div>
        ) : programs.length === 0 ? (
          <p className="text-sm text-muted-foreground">No programs yet. Click "Add Program" to create one.</p>
        ) : (
          programs.map((p) => (
            <div key={p.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-card">
              <div>
                <span className="text-sm font-bold text-foreground">{p.title}</span>
                <p className="text-xs text-muted-foreground">{p.category} · {p.status}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => { setEditing(p); setShowForm(true); }}
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(p.id!)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function ProgramForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: ProgramDoc;
  onSave: (data: ProgramDoc) => void;
  onCancel: () => void;
}) {
  const [data, setData] = useState<ProgramDoc>(initial);

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSave(data); }}
      className="mt-4 rounded-2xl border border-border bg-secondary/30 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="p-title">Title</Label>
          <Input id="p-title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="p-slug">Slug</Label>
          <Input id="p-slug" value={data.slug} onChange={(e) => setData({ ...data, slug: e.target.value })} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="p-category">Category</Label>
          <Input id="p-category" value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="p-image">Image URL</Label>
          <Input id="p-image" value={data.image} onChange={(e) => setData({ ...data, image: e.target.value })} />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor="p-desc">Description</Label>
        <Textarea id="p-desc" rows={3} value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
      </div>
      <div className="mt-4 flex gap-2">
        <Button type="submit" variant="hero" size="sm">
          <Save className="h-4 w-4" /> Save
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

function ImpactEditor({ stats, onSave }: { stats: ImpactStat[]; onSave: (s: ImpactStat[]) => void }) {
  const [local, setLocal] = useState<ImpactStat[]>(stats);
  const [saving, setSaving] = useState(false);

  useEffect(() => { setLocal(stats); }, [stats]);

  async function handleSave() {
    setSaving(true);
    await onSave(local);
    setSaving(false);
    toast.success("Impact stats updated.");
  }

  function updateStat(index: number, field: keyof ImpactStat, value: string) {
    const next = [...local];
    next[index] = { ...next[index], [field]: value };
    setLocal(next);
  }

  function addStat() {
    setLocal([...local, { label: "", value: "", icon: "Users" }]);
  }

  function removeStat(index: number) {
    setLocal(local.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">Impact Metrics Editor</h3>
        <Button variant="outline" size="sm" onClick={addStat}>
          <Plus className="h-4 w-4" /> Add Stat
        </Button>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        These stats appear on the home page and impact page as live counters.
      </p>

      {!FIREBASE_ENABLED && (
        <div className="mt-4 rounded-xl border border-accent/30 bg-accent-soft/50 p-3">
          <p className="text-xs text-foreground/80">
            Firebase is not configured. Changes will not be saved until environment variables are set.
          </p>
        </div>
      )}

      <div className="mt-6 space-y-3">
        {local.map((stat, i) => (
          <div key={i} className="grid items-end gap-3 rounded-xl border border-border bg-card p-4 shadow-card sm:grid-cols-12">
            <div className="space-y-1 sm:col-span-4">
              <Label className="text-xs">Label</Label>
              <Input value={stat.label} onChange={(e) => updateStat(i, "label", e.target.value)} placeholder="Lives Impacted" />
            </div>
            <div className="space-y-1 sm:col-span-3">
              <Label className="text-xs">Value</Label>
              <Input value={stat.value} onChange={(e) => updateStat(i, "value", e.target.value)} placeholder="10,000+" />
            </div>
            <div className="space-y-1 sm:col-span-3">
              <Label className="text-xs">Icon Name</Label>
              <Input value={stat.icon} onChange={(e) => updateStat(i, "icon", e.target.value)} placeholder="Users" />
            </div>
            <div className="sm:col-span-2">
              <Button variant="outline" size="sm" onClick={() => removeStat(i)} className="w-full">
                <Trash2 className="h-4 w-4" /> Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button variant="hero" size="sm" className="mt-4" onClick={handleSave} disabled={saving}>
        <Save className="h-4 w-4" /> {saving ? "Saving…" : "Save Changes"}
      </Button>
    </div>
  );
}

function MessagesInbox({ messages, onRead }: { messages: MessageDoc[]; onRead: (id: string) => void }) {
  const [selected, setSelected] = useState<MessageDoc | null>(null);

  async function handleClick(msg: MessageDoc) {
    setSelected(msg);
    if (!msg.read && msg.id) {
      await onRead(msg.id);
    }
  }

  return (
    <div>
      <h3 className="text-lg font-bold text-foreground">Volunteer & Inquiry Inbox</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Real-time submissions from the contact form. Unread messages are highlighted.
      </p>

      {!FIREBASE_ENABLED && (
        <div className="mt-4 rounded-xl border border-accent/30 bg-accent-soft/50 p-3">
          <p className="text-xs text-foreground/80">
            Firebase is not configured. Messages will appear here once environment variables are set.
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="space-y-2">
          {messages.length === 0 ? (
            <p className="text-sm text-muted-foreground">No messages yet.</p>
          ) : (
            messages.map((m) => (
              <button
                key={m.id}
                onClick={() => handleClick(m)}
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition-all",
                  selected?.id === m.id
                    ? "border-primary bg-primary-soft/30 shadow-soft"
                    : "border-border bg-card hover:border-primary/40",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">{m.name}</span>
                  {!m.read && <span className="h-2 w-2 rounded-full bg-accent" />}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{m.reason} · {m.email}</p>
                <p className="mt-1 text-xs text-foreground/60 line-clamp-1">{m.message}</p>
              </button>
            ))
          )}
        </div>

        {selected && (
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-bold text-foreground">{selected.name}</h4>
                <p className="text-sm text-muted-foreground">{selected.email}</p>
                {selected.phone && <p className="text-sm text-muted-foreground">{selected.phone}</p>}
              </div>
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-deep">
                {selected.reason}
              </span>
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-sm leading-relaxed text-foreground">{selected.message}</p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" /> {selected.read ? "Read" : "Marked as read"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DonationLedger({ donations }: { donations: DonationDoc[] }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-foreground">Donation Ledger</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Record of successful donation callbacks with donor names, references, and amounts.
      </p>

      {!FIREBASE_ENABLED && (
        <div className="mt-4 rounded-xl border border-accent/30 bg-accent-soft/50 p-3">
          <p className="text-xs text-foreground/80">
            Firebase is not configured. Donations will appear here once environment variables are set.
          </p>
        </div>
      )}

      <div className="mt-6 overflow-x-auto rounded-2xl border border-border shadow-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr className="border-b border-border">
              <th className="p-3 text-left font-semibold text-muted-foreground">Donor</th>
              <th className="p-3 text-left font-semibold text-muted-foreground">Email</th>
              <th className="p-3 text-right font-semibold text-muted-foreground">Amount</th>
              <th className="p-3 text-left font-semibold text-muted-foreground">Method</th>
              <th className="p-3 text-left font-semibold text-muted-foreground">Reference</th>
              <th className="p-3 text-left font-semibold text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {donations.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6 text-center text-muted-foreground">
                  No donations recorded yet.
                </td>
              </tr>
            ) : (
              donations.map((d) => (
                <tr key={d.id} className="border-b border-border last:border-0">
                  <td className="p-3 font-medium text-foreground">{d.donorName}</td>
                  <td className="p-3 text-muted-foreground">{d.email}</td>
                  <td className="p-3 text-right font-bold text-primary">
                    {d.currency === "NGN" ? "₦" : "$"}{d.amount.toLocaleString()}
                  </td>
                  <td className="p-3 text-muted-foreground">{d.method}</td>
                  <td className="p-3 text-xs text-muted-foreground">{d.reference}</td>
                  <td className="p-3">
                    <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary-deep">
                      {d.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function NewsManager({ newsList, onRefresh }: { newsList: NewsDoc[]; onRefresh: () => void }) {
  const [editing, setEditing] = useState<NewsDoc | null>(null);
  const [showForm, setShowForm] = useState(false);

  function startNew() {
    setEditing({ title: "", body: "", date: new Date().toISOString().slice(0, 10), image: "" });
    setShowForm(true);
  }

  async function handleSave(data: NewsDoc) {
    await saveNews(data);
    toast.success("News article saved.");
    setShowForm(false);
    setEditing(null);
    onRefresh();
  }

  async function handleDelete(id: string) {
    await deleteNews(id);
    toast.success("Article deleted.");
    onRefresh();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">News & Articles</h3>
        <Button variant="hero" size="sm" onClick={startNew}>
          <Plus className="h-4 w-4" /> Add Article
        </Button>
      </div>

      {showForm && editing && (
        <NewsForm initial={editing} onSave={handleSave} onCancel={() => { setShowForm(false); setEditing(null); }} />
      )}

      <div className="mt-6 space-y-3">
        {newsList.length === 0 && !FIREBASE_ENABLED ? (
          <div className="rounded-xl border border-accent/30 bg-accent-soft/50 p-4">
            <p className="text-sm text-foreground/80">
              Firebase is not configured. News articles will appear here once Firebase environment variables are set.
            </p>
          </div>
        ) : newsList.length === 0 ? (
          <p className="text-sm text-muted-foreground">No articles yet.</p>
        ) : (
          newsList.map((n) => (
            <div key={n.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-card">
              <div>
                <span className="text-sm font-bold text-foreground">{n.title}</span>
                <p className="text-xs text-muted-foreground">{n.date}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => { setEditing(n); setShowForm(true); }}>
                  Edit
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDelete(n.id!)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function NewsForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: NewsDoc;
  onSave: (data: NewsDoc) => void;
  onCancel: () => void;
}) {
  const [data, setData] = useState<NewsDoc>(initial);

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSave(data); }}
      className="mt-4 rounded-2xl border border-border bg-secondary/30 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="n-title">Title</Label>
          <Input id="n-title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="n-date">Date</Label>
          <Input id="n-date" type="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor="n-image">Image URL</Label>
        <Input id="n-image" value={data.image} onChange={(e) => setData({ ...data, image: e.target.value })} />
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor="n-body">Body</Label>
        <Textarea id="n-body" rows={4} value={data.body} onChange={(e) => setData({ ...data, body: e.target.value })} />
      </div>
      <div className="mt-4 flex gap-2">
        <Button type="submit" variant="hero" size="sm">
          <Save className="h-4 w-4" /> Save
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

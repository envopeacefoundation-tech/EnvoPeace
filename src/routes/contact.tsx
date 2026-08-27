import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send, CircleCheck as CheckCircle2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { submitMessage } from "@/lib/firestore";
import { FIREBASE_ENABLED } from "@/lib/firebase";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Envo Peace and Development Foundation" },
      { name: "description", content: "Get in touch with Envo Peace and Development Foundation. Visit us at No. 1, Hilltop Rd, Abakaliki, Nigeria or call +234 806 356 3604." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [reason, setReason] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (FIREBASE_ENABLED) {
      try {
        await submitMessage({ name, email, phone, reason, message });
      } catch {
        toast.error("Could not send message. Please try again or call us directly.");
        return;
      }
    }
    setSubmitted(true);
    toast.success("Message sent — we'll be in touch soon!");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-28 pb-28 md:pt-36 md:pb-32">
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
          <div className="mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" /> Get Involved
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl animate-fade-up">
              Let's build something <span className="bg-gradient-accent bg-clip-text text-transparent">together.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-100">
              Whether you want to volunteer, partner, or just say hello — we'd
              love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">Reach Us</h2>
                <p className="mt-2 text-muted-foreground">
                  We're here to answer any questions and welcome new partners and volunteers.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { Icon: MapPin, label: "Visit", value: "No. 1, Hilltop Rd, Abakaliki, Nigeria" },
                    { Icon: Phone, label: "Call", value: "+234 806 356 3604" },
                    { Icon: Mail, label: "Email", value: "hello@envopeace.org" },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-card">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                        <Icon className="h-5 w-5 text-primary-deep" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-card">
                  <div className="relative h-64 bg-secondary/40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="mx-auto h-10 w-10 text-primary" />
                        <p className="mt-2 text-sm font-medium text-foreground">Abakaliki, Ebonyi State</p>
                        <p className="text-xs text-muted-foreground">Nigeria</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-soft/30 to-accent-soft/30" />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 shadow-card md:p-10"
              >
                <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you within 48 hours.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for contacting</Label>
                    <Select value={reason} onValueChange={setReason}>
                      <SelectTrigger id="reason">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="donation">Donation Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how you'd like to be involved…"
                  />
                </div>
                <Button type="submit" variant="hero" size="xl" className="mt-6 w-full sm:w-auto">
                  {submitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
                {!FIREBASE_ENABLED && (
                  <p className="mt-3 text-xs text-muted-foreground">
                    Note: Firebase is not configured. Messages will not be saved until environment variables are set.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

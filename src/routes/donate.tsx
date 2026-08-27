import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Heart, Check, Copy, Bitcoin, DollarSign, Coins, Shield, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { initiatePaystack, nairaToKobo, type PaystackResponse } from "@/lib/paystack";
import { recordDonation } from "@/lib/firestore";
import { FIREBASE_ENABLED } from "@/lib/firebase";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Envo Peace and Development Foundation" },
      { name: "description", content: "Support our mission with a secure donation via Paystack (Naira/USD) or cryptocurrency. Every gift creates lasting impact." },
    ],
  }),
  component: DonatePage,
});

const nairaPresets = [5000, 10000, 25000, 50000, 100000];
const usdPresets = [25, 50, 100, 250, 500];

function impactForNaira(amount: number): string {
  const usd = amount / 500;
  if (usd >= 100) return "Sponsors a full month of youth skills training for one beneficiary.";
  if (usd >= 50) return "Provides essential healthcare supplies for a family in need.";
  if (usd >= 25) return "Funds educational support — books and materials — for a child.";
  if (usd >= 10) return "Delivers a community outreach kit with food and basic supplies.";
  return "Every gift counts. Thank you for standing with us.";
}

function impactForUsd(amount: number): string {
  if (amount >= 100) return "Sponsors a full month of youth skills training for one beneficiary.";
  if (amount >= 50) return "Provides essential healthcare supplies for a family in need.";
  if (amount >= 25) return "Funds educational support — books and materials — for a child.";
  return "Every gift counts. Thank you for standing with us.";
}

const cryptoAddresses = [
  { label: "Bitcoin (BTC)", address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", symbol: "₿" },
  { label: "USDT (TRC20)", address: "TQn9Y2khEsLJW1ChVWFkMeH4M9rZ2bX9kP", symbol: "₮" },
  { label: "USDT (ERC20)", address: "0x71C7657EC8e3A2c0b7c4B5D3E9f1A2b3C4d5E6f7", symbol: "₮" },
];

function DonatePage() {
  const [nairaAmount, setNairaAmount] = useState(25000);
  const [nairaCustom, setNairaCustom] = useState("");
  const [usdAmount, setUsdAmount] = useState(50);
  const [usdCustom, setUsdCustom] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [processing, setProcessing] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  async function handleNairaDonate() {
    if (!donorEmail || !donorName) {
      toast.error("Please enter your name and email to continue.");
      return;
    }
    const amount = nairaCustom ? Number(nairaCustom) : nairaAmount;
    if (!amount || amount < 100) {
      toast.error("Minimum donation is ₦100.");
      return;
    }
    setProcessing(true);
    try {
      await initiatePaystack(
        {
          email: donorEmail,
          name: donorName,
          amountKobo: nairaToKobo(amount),
          currency: "NGN",
        },
        async (response: PaystackResponse) => {
          toast.success("Donation successful! Thank you for your generosity.");
          if (FIREBASE_ENABLED) {
            await recordDonation({
              donorName,
              email: donorEmail,
              amount,
              currency: "NGN",
              reference: response.reference,
              status: response.status,
              method: "Paystack",
            });
          }
          setProcessing(false);
        },
        () => {
          toast("Donation cancelled.");
          setProcessing(false);
        },
      );
    } catch {
      toast.error("Could not start payment. Please try again.");
      setProcessing(false);
    }
  }

  async function handleUsdDonate() {
    if (!donorEmail || !donorName) {
      toast.error("Please enter your name and email to continue.");
      return;
    }
    const amount = usdCustom ? Number(usdCustom) : usdAmount;
    if (!amount || amount < 1) {
      toast.error("Minimum donation is $1.");
      return;
    }
    setProcessing(true);
    try {
      await initiatePaystack(
        {
          email: donorEmail,
          name: donorName,
          amountKobo: Math.round(amount * 100),
          currency: "USD",
        },
        async (response: PaystackResponse) => {
          toast.success("Donation successful! Thank you for your generosity.");
          if (FIREBASE_ENABLED) {
            await recordDonation({
              donorName,
              email: donorEmail,
              amount,
              currency: "USD",
              reference: response.reference,
              status: response.status,
              method: "Paystack",
            });
          }
          setProcessing(false);
        },
        () => {
          toast("Donation cancelled.");
          setProcessing(false);
        },
      );
    } catch {
      toast.error("Could not start payment. Please try again.");
      setProcessing(false);
    }
  }

  function copyAddress(label: string, address: string) {
    navigator.clipboard.writeText(address);
    setCopied(label);
    toast.success("Wallet address copied to clipboard.");
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
          <div className="mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" /> Support Our Cause
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl animate-fade-up">
              Your gift, <span className="bg-gradient-accent bg-clip-text text-transparent">multiplied.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-100">
              Choose your preferred payment method below. Every contribution goes
              directly to programs that restore hope and build peaceful communities.
            </p>
          </div>
        </section>

        {/* Donation Tabs */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            {/* Donor Info */}
            <div className="mb-8 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
              <h3 className="text-lg font-bold text-foreground">Your Information</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We need your name and email to process your donation and send you a receipt.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="donor-name">Full Name</Label>
                  <Input
                    id="donor-name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="donor-email">Email Address</Label>
                  <Input
                    id="donor-email"
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
            </div>

            <Tabs defaultValue="naira" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="naira">
                  <span className="flex items-center gap-1.5">
                    <Coins className="h-4 w-4" /> Naira (₦)
                  </span>
                </TabsTrigger>
                <TabsTrigger value="usd">
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="h-4 w-4" /> USD ($)
                  </span>
                </TabsTrigger>
                <TabsTrigger value="crypto">
                  <span className="flex items-center gap-1.5">
                    <Bitcoin className="h-4 w-4" /> Crypto
                  </span>
                </TabsTrigger>
              </TabsList>

              {/* Naira Tab */}
              <TabsContent value="naira">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₦</span>
                    <span className="text-lg font-semibold text-foreground">Naira Donation</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Default currency for Nigerian donors. Processed securely via Paystack.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {nairaPresets.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => { setNairaAmount(p); setNairaCustom(""); }}
                        className={cn(
                          "rounded-xl border-2 px-3 py-4 text-sm font-bold transition-all",
                          nairaAmount === p && !nairaCustom
                            ? "border-primary bg-primary-soft text-primary-deep"
                            : "border-border bg-background text-foreground hover:border-primary/40",
                        )}
                      >
                        ₦{p.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  <label className="mt-4 block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Custom amount (₦)
                    </span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary">
                      <span className="text-base font-bold text-muted-foreground">₦</span>
                      <Input
                        type="number"
                        inputMode="numeric"
                        min={100}
                        value={nairaCustom}
                        onChange={(e) => {
                          setNairaCustom(e.target.value);
                          const n = Number(e.target.value);
                          if (!Number.isNaN(n) && n > 0) setNairaAmount(n);
                        }}
                        placeholder="Enter amount"
                        className="border-0 bg-transparent px-0 text-base font-semibold shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </label>

                  <div className="mt-5 rounded-xl bg-accent-soft/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                      Your ₦{(nairaCustom ? Number(nairaCustom) : nairaAmount).toLocaleString()} gift
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {impactForNaira(nairaCustom ? Number(nairaCustom) : nairaAmount)}
                    </p>
                  </div>

                  <Button
                    variant="hero"
                    size="xl"
                    className="mt-5 w-full"
                    onClick={handleNairaDonate}
                    disabled={processing}
                  >
                    {processing ? (
                      <>Processing…</>
                    ) : (
                      <>
                        <Heart className="h-4 w-4" /> Donate ₦{(nairaCustom ? Number(nairaCustom) : nairaAmount).toLocaleString()}
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>

              {/* USD Tab */}
              <TabsContent value="usd">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">$</span>
                    <span className="text-lg font-semibold text-foreground">USD Donation</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    For international donors. Processed securely via Paystack.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {usdPresets.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => { setUsdAmount(p); setUsdCustom(""); }}
                        className={cn(
                          "rounded-xl border-2 px-3 py-4 text-sm font-bold transition-all",
                          usdAmount === p && !usdCustom
                            ? "border-primary bg-primary-soft text-primary-deep"
                            : "border-border bg-background text-foreground hover:border-primary/40",
                        )}
                      >
                        ${p}
                      </button>
                    ))}
                  </div>

                  <label className="mt-4 block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Custom amount ($)
                    </span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary">
                      <span className="text-base font-bold text-muted-foreground">$</span>
                      <Input
                        type="number"
                        inputMode="numeric"
                        min={1}
                        value={usdCustom}
                        onChange={(e) => {
                          setUsdCustom(e.target.value);
                          const n = Number(e.target.value);
                          if (!Number.isNaN(n) && n > 0) setUsdAmount(n);
                        }}
                        placeholder="Enter amount"
                        className="border-0 bg-transparent px-0 text-base font-semibold shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </label>

                  <div className="mt-5 rounded-xl bg-accent-soft/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                      Your ${(usdCustom ? Number(usdCustom) : usdAmount).toLocaleString()} gift
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {impactForUsd(usdCustom ? Number(usdCustom) : usdAmount)}
                    </p>
                  </div>

                  <Button
                    variant="hero"
                    size="xl"
                    className="mt-5 w-full"
                    onClick={handleUsdDonate}
                    disabled={processing}
                  >
                    {processing ? (
                      <>Processing…</>
                    ) : (
                      <>
                        <Heart className="h-4 w-4" /> Donate ${(usdCustom ? Number(usdCustom) : usdAmount).toLocaleString()}
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>

              {/* Crypto Tab */}
              <TabsContent value="crypto">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
                  <div className="flex items-center gap-2">
                    <Bitcoin className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold text-foreground">Cryptocurrency Donation</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Send Bitcoin or USDT directly to our wallet addresses. After sending,
                    please contact us with your transaction hash so we can confirm and record your gift.
                  </p>

                  <div className="mt-6 space-y-4">
                    {cryptoAddresses.map((crypto) => (
                      <div
                        key={crypto.label}
                        className="rounded-2xl border border-border bg-secondary/40 p-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-foreground">{crypto.label}</span>
                          <span className="text-2xl font-bold text-primary">{crypto.symbol}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <code className="flex-1 truncate rounded-lg bg-background px-3 py-2 text-xs text-foreground/80">
                            {crypto.address}
                          </code>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyAddress(crypto.label, crypto.address)}
                          >
                            {copied === crypto.label ? (
                              <><Check className="h-4 w-4" /> Copied</>
                            ) : (
                              <><Copy className="h-4 w-4" /> Copy</>
                            )}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-accent-soft/70 p-4">
                    <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Shield className="h-4 w-4 text-accent" />
                      After sending, email hello@envopeace.org with your transaction hash and name
                      so we can send you a receipt.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-primary" /> Secure checkout
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" /> 100% goes to programs
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="h-4 w-4 text-primary" /> Tax-deductible where eligible
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

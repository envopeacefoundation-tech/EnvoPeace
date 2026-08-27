import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Currency = "USD" | "NGN";

const presets: Record<Currency, number[]> = {
  USD: [25, 50, 100, 250],
  NGN: [5000, 10000, 25000, 50000],
};

const symbol: Record<Currency, string> = { USD: "$", NGN: "₦" };

function impactFor(currency: Currency, amount: number): string {
  const usd = currency === "USD" ? amount : amount / 500;
  if (usd >= 100) return "Sponsors a full month of youth skills training for one beneficiary.";
  if (usd >= 50) return "Provides essential healthcare supplies for a family in need.";
  if (usd >= 25) return "Funds educational support — books and materials — for a child.";
  if (usd >= 10) return "Delivers a community outreach kit with food and basic supplies.";
  if (usd > 0) return "Every gift counts. Thank you for standing with us.";
  return "Pick an amount to see the impact your gift will make.";
}

export function QuickDonate() {
  const [currency, setCurrency] = useState<Currency>("NGN");
  const [amount, setAmount] = useState<number>(10000);
  const [custom, setCustom] = useState("");

  const formatted = `${symbol[currency]}${amount.toLocaleString()}`;

  return (
    <section className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-hero shadow-elegant">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12 lg:p-16">
            <div className="text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                <Heart className="h-3.5 w-3.5" /> Support Our Cause
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                Your gift, multiplied.
              </h2>
              <p className="mt-4 text-primary-foreground/85 md:text-lg">
                See the real-world impact of your generosity before you give.
                Pick an amount and we'll show you exactly what it supports.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-primary-foreground/80">
                {[
                  "100% of every gift is directed to programs",
                  "Transparent reporting on impact",
                  "Tax-deductible where eligible",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-accent" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-soft md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Quick Give</h3>
                <div className="inline-flex rounded-full border border-border bg-secondary p-1">
                  {(Object.keys(presets) as Currency[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        setCurrency(c);
                        setAmount(presets[c][1]);
                        setCustom("");
                      }}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                        currency === c
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {presets[currency].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setAmount(p);
                      setCustom("");
                    }}
                    className={cn(
                      "rounded-xl border-2 px-3 py-3 text-sm font-bold transition-all",
                      amount === p && !custom
                        ? "border-primary bg-primary-soft text-primary-deep"
                        : "border-border bg-background text-foreground hover:border-primary/40",
                    )}
                  >
                    {symbol[currency]}{p.toLocaleString()}
                  </button>
                ))}
              </div>

              <label className="mt-4 block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Custom amount
                </span>
                <div className="mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary">
                  <span className="text-base font-bold text-muted-foreground">
                    {symbol[currency]}
                  </span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    value={custom}
                    onChange={(e) => {
                      const v = e.target.value;
                      setCustom(v);
                      const n = Number(v);
                      if (!Number.isNaN(n) && n > 0) setAmount(n);
                    }}
                    placeholder="Enter amount"
                    className="h-10 w-full border-0 bg-transparent px-0 text-base font-semibold outline-none"
                  />
                </div>
              </label>

              <div className="mt-5 rounded-xl bg-accent-soft/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                  Your {formatted} gift
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {impactFor(currency, amount)}
                </p>
              </div>

              <Button asChild variant="hero" size="xl" className="mt-5 w-full">
                <Link to="/donate">
                  <Heart className="h-4 w-4" /> Donate {formatted}
                </Link>
              </Button>
              <p className="mt-2 text-center text-[11px] text-muted-foreground">
                Secure checkout via Paystack · Crypto also available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

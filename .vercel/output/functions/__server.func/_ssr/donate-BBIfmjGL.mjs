import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer } from "./Footer-B3BLk5RQ.mjs";
import { c as cn, B as Button } from "./button-DKsLk7wf.mjs";
import { L as Label, I as Input, F as FIREBASE_ENABLED, r as recordDonation, P as PAYSTACK_PUBLIC_KEY } from "./firestore-Wa0rZXGx.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CU4Hid-b.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import { b as Sparkles, i as Coins, D as DollarSign, B as Bitcoin, c as Heart, g as Check, j as Copy, k as Shield } from "../_libs/lucide-react.mjs";
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
import "../_libs/firebase__component.mjs";
import "../_libs/firebase__util.mjs";
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
import "../_libs/idb.mjs";
let scriptLoaded = false;
let scriptLoading = null;
function loadPaystackScript() {
  if (scriptLoaded) return Promise.resolve();
  if (scriptLoading) return scriptLoading;
  scriptLoading = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load Paystack script"));
    document.head.appendChild(script);
  });
  return scriptLoading;
}
async function initiatePaystack(params, onSuccess, onClose) {
  await loadPaystackScript();
  if (!window.PaystackPop) {
    throw new Error("Paystack script loaded but PaystackPop not found");
  }
  const reference = `ENV-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
  const config = {
    key: PAYSTACK_PUBLIC_KEY,
    email: params.email,
    amount: params.amountKobo,
    currency: params.currency,
    ref: reference,
    metadata: {
      custom_fields: [
        { display_name: "Donor Name", variable_name: "donor_name", value: params.name },
        ...params.metadata ?? []
      ]
    },
    callback: onSuccess,
    onClose
  };
  const handler = window.PaystackPop.setup(config);
  handler.openIframe();
}
function nairaToKobo(naira) {
  return Math.round(naira * 100);
}
const nairaPresets = [5e3, 1e4, 25e3, 5e4, 1e5];
const usdPresets = [25, 50, 100, 250, 500];
function impactForNaira(amount) {
  const usd = amount / 500;
  if (usd >= 100) return "Sponsors a full month of youth skills training for one beneficiary.";
  if (usd >= 50) return "Provides essential healthcare supplies for a family in need.";
  if (usd >= 25) return "Funds educational support — books and materials — for a child.";
  if (usd >= 10) return "Delivers a community outreach kit with food and basic supplies.";
  return "Every gift counts. Thank you for standing with us.";
}
function impactForUsd(amount) {
  if (amount >= 100) return "Sponsors a full month of youth skills training for one beneficiary.";
  if (amount >= 50) return "Provides essential healthcare supplies for a family in need.";
  if (amount >= 25) return "Funds educational support — books and materials — for a child.";
  return "Every gift counts. Thank you for standing with us.";
}
const cryptoAddresses = [{
  label: "Bitcoin (BTC)",
  address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  symbol: "₿"
}, {
  label: "USDT (TRC20)",
  address: "TQn9Y2khEsLJW1ChVWFkMeH4M9rZ2bX9kP",
  symbol: "₮"
}, {
  label: "USDT (ERC20)",
  address: "0x71C7657EC8e3A2c0b7c4B5D3E9f1A2b3C4d5E6f7",
  symbol: "₮"
}];
function DonatePage() {
  const [nairaAmount, setNairaAmount] = reactExports.useState(25e3);
  const [nairaCustom, setNairaCustom] = reactExports.useState("");
  const [usdAmount, setUsdAmount] = reactExports.useState(50);
  const [usdCustom, setUsdCustom] = reactExports.useState("");
  const [donorName, setDonorName] = reactExports.useState("");
  const [donorEmail, setDonorEmail] = reactExports.useState("");
  const [processing, setProcessing] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(null);
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
      await initiatePaystack({
        email: donorEmail,
        name: donorName,
        amountKobo: nairaToKobo(amount),
        currency: "NGN"
      }, async (response) => {
        toast.success("Donation successful! Thank you for your generosity.");
        if (FIREBASE_ENABLED) {
          await recordDonation({
            donorName,
            email: donorEmail,
            amount,
            currency: "NGN",
            reference: response.reference,
            status: response.status,
            method: "Paystack"
          });
        }
        setProcessing(false);
      }, () => {
        toast("Donation cancelled.");
        setProcessing(false);
      });
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
      await initiatePaystack({
        email: donorEmail,
        name: donorName,
        amountKobo: Math.round(amount * 100),
        currency: "USD"
      }, async (response) => {
        toast.success("Donation successful! Thank you for your generosity.");
        if (FIREBASE_ENABLED) {
          await recordDonation({
            donorName,
            email: donorEmail,
            amount,
            currency: "USD",
            reference: response.reference,
            status: response.status,
            method: "Paystack"
          });
        }
        setProcessing(false);
      }, () => {
        toast("Donation cancelled.");
        setProcessing(false);
      });
    } catch {
      toast.error("Could not start payment. Please try again.");
      setProcessing(false);
    }
  }
  function copyAddress(label, address) {
    navigator.clipboard.writeText(address);
    setCopied(label);
    toast.success("Wallet address copied to clipboard.");
    setTimeout(() => setCopied(null), 2e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Support Our Cause"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl animate-fade-up", children: [
            "Your gift, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-accent bg-clip-text text-transparent", children: "multiplied." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-100", children: "Choose your preferred payment method below. Every contribution goes directly to programs that restore hope and build peaceful communities." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Your Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "We need your name and email to process your donation and send you a receipt." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donor-name", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "donor-name", value: donorName, onChange: (e) => setDonorName(e.target.value), placeholder: "Jane Doe" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donor-email", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "donor-email", type: "email", value: donorEmail, onChange: (e) => setDonorEmail(e.target.value), placeholder: "jane@example.com" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "naira", className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "naira", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "h-4 w-4" }),
              " Naira (₦)"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "usd", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4" }),
              " USD ($)"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "crypto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bitcoin, { className: "h-4 w-4" }),
              " Crypto"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "naira", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-card md:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-primary", children: "₦" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-foreground", children: "Naira Donation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Default currency for Nigerian donors. Processed securely via Paystack." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3", children: nairaPresets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
              setNairaAmount(p);
              setNairaCustom("");
            }, className: cn("rounded-xl border-2 px-3 py-4 text-sm font-bold transition-all", nairaAmount === p && !nairaCustom ? "border-primary bg-primary-soft text-primary-deep" : "border-border bg-background text-foreground hover:border-primary/40"), children: [
              "₦",
              p.toLocaleString()
            ] }, p)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-4 block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Custom amount (₦)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-muted-foreground", children: "₦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", inputMode: "numeric", min: 100, value: nairaCustom, onChange: (e) => {
                  setNairaCustom(e.target.value);
                  const n = Number(e.target.value);
                  if (!Number.isNaN(n) && n > 0) setNairaAmount(n);
                }, placeholder: "Enter amount", className: "border-0 bg-transparent px-0 text-base font-semibold shadow-none focus-visible:ring-0" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl bg-accent-soft/70 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-accent-foreground/80", children: [
                "Your ₦",
                (nairaCustom ? Number(nairaCustom) : nairaAmount).toLocaleString(),
                " gift"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-foreground", children: impactForNaira(nairaCustom ? Number(nairaCustom) : nairaAmount) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", className: "mt-5 w-full", onClick: handleNairaDonate, disabled: processing, children: processing ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Processing…" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
              " Donate ₦",
              (nairaCustom ? Number(nairaCustom) : nairaAmount).toLocaleString()
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "usd", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-card md:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-primary", children: "$" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-foreground", children: "USD Donation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "For international donors. Processed securely via Paystack." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3", children: usdPresets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
              setUsdAmount(p);
              setUsdCustom("");
            }, className: cn("rounded-xl border-2 px-3 py-4 text-sm font-bold transition-all", usdAmount === p && !usdCustom ? "border-primary bg-primary-soft text-primary-deep" : "border-border bg-background text-foreground hover:border-primary/40"), children: [
              "$",
              p
            ] }, p)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-4 block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Custom amount ($)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-muted-foreground", children: "$" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", inputMode: "numeric", min: 1, value: usdCustom, onChange: (e) => {
                  setUsdCustom(e.target.value);
                  const n = Number(e.target.value);
                  if (!Number.isNaN(n) && n > 0) setUsdAmount(n);
                }, placeholder: "Enter amount", className: "border-0 bg-transparent px-0 text-base font-semibold shadow-none focus-visible:ring-0" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl bg-accent-soft/70 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-accent-foreground/80", children: [
                "Your $",
                (usdCustom ? Number(usdCustom) : usdAmount).toLocaleString(),
                " gift"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-foreground", children: impactForUsd(usdCustom ? Number(usdCustom) : usdAmount) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", className: "mt-5 w-full", onClick: handleUsdDonate, disabled: processing, children: processing ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Processing…" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
              " Donate $",
              (usdCustom ? Number(usdCustom) : usdAmount).toLocaleString()
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "crypto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-card md:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bitcoin, { className: "h-6 w-6 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-foreground", children: "Cryptocurrency Donation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Send Bitcoin or USDT directly to our wallet addresses. After sending, please contact us with your transaction hash so we can confirm and record your gift." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: cryptoAddresses.map((crypto) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-secondary/40 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: crypto.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-primary", children: crypto.symbol })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "flex-1 truncate rounded-lg bg-background px-3 py-2 text-xs text-foreground/80", children: crypto.address }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => copyAddress(crypto.label, crypto.address), children: copied === crypto.label ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
                  " Copied"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }),
                  " Copy"
                ] }) })
              ] })
            ] }, crypto.label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-xl bg-accent-soft/70 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm font-medium text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-accent" }),
              "After sending, email hello@envopeace.org with your transaction hash and name so we can send you a receipt."
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary" }),
            " Secure checkout"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" }),
            " 100% goes to programs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-primary" }),
            " Tax-deductible where eligible"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  DonatePage as component
};

import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer } from "./Footer-BDZUeZfA.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button, c as cn } from "./button-DKsLk7wf.mjs";
import { I as ImpactCounter } from "./ImpactCounter-DYe8krEe.mjs";
import { p as programs } from "./router-BXmZtTLQ.mjs";
import { M as MissionQuote } from "./MissionQuote-ZuothLev.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { b as Sparkles, A as ArrowRight, U as Users, d as MapPin, H as HeartHandshake, c as Heart, g as Check } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const heroImg = "https://images.pexels.com/photos/9090746/pexels-photo-9090746.jpeg?auto=compress&cs=tinysrgb&w=1600";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden pt-24 md:pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 -z-10 opacity-30 mix-blend-overlay",
        style: {
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Peace · Hope · Development"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up", children: [
          "Restoring Hope,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-accent bg-clip-text text-transparent", children: "Building Peaceful Communities" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-100", children: "We don't just give—we uplift, inspire, and build pathways for a better future across Nigeria and beyond." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 animate-fade-up delay-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/programs", children: [
            "Explore Our Programs ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "heroOutline", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get Involved" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-primary-foreground/20 pt-8 sm:grid-cols-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounter, { value: "10,000+", label: "Lives Impacted", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6" }), delay: 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounter, { value: "25+", label: "Communities", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6" }), delay: 100 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounter, { value: "5,000+", label: "Families Served", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "h-6 w-6" }), delay: 200 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounter, { value: "200+", label: "Volunteers", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6" }), delay: 300 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 animate-scale-in delay-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl bg-gradient-accent opacity-30 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: heroImg,
            alt: "Volunteers guiding children in a community outreach activity",
            width: 1600,
            height: 1100,
            className: "relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant ring-1 ring-primary-foreground/10"
          }
        )
      ] }) })
    ] })
  ] });
}
function FeaturedPrograms() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "scroll-mt-24 bg-secondary/60 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Our Core Pillars" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: [
        "Five focus areas. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "One mission." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground md:text-lg", children: "Each program is designed to deliver lasting impact—not just short-term relief." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: [
      programs.map(({ icon: Icon, title, desc, slug, image }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/programs/$slug",
          params: { slug },
          className: "group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant focus:outline-none focus-visible:ring-2 focus-visible:ring-primary animate-fade-up",
          style: { animationDelay: `${i * 100}ms` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: image,
                  alt: title,
                  loading: "lazy",
                  className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/20 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background/90 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary-deep" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground group-hover:text-primary", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2", children: desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold uppercase tracking-wider text-accent-foreground/70", children: [
                  "Pillar 0",
                  i + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100", children: [
                  "Learn more ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ] })
              ] })
            ] })
          ]
        },
        slug
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/programs",
          className: "group flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-primary/30 bg-primary-soft/30 p-8 text-center transition-all hover:border-primary hover:bg-primary-soft/50 animate-fade-up",
          style: { animationDelay: "500ms" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-7 w-7 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold text-foreground", children: "Explore All Programs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "See how each pillar creates lasting change" })
          ]
        }
      )
    ] })
  ] }) });
}
const presets = {
  USD: [25, 50, 100, 250],
  NGN: [5e3, 1e4, 25e3, 5e4]
};
const symbol = { USD: "$", NGN: "₦" };
function impactFor(currency, amount) {
  const usd = currency === "USD" ? amount : amount / 500;
  if (usd >= 100) return "Sponsors a full month of youth skills training for one beneficiary.";
  if (usd >= 50) return "Provides essential healthcare supplies for a family in need.";
  if (usd >= 25) return "Funds educational support — books and materials — for a child.";
  if (usd >= 10) return "Delivers a community outreach kit with food and basic supplies.";
  if (usd > 0) return "Every gift counts. Thank you for standing with us.";
  return "Pick an amount to see the impact your gift will make.";
}
function QuickDonate() {
  const [currency, setCurrency] = reactExports.useState("NGN");
  const [amount, setAmount] = reactExports.useState(1e4);
  const [custom, setCustom] = reactExports.useState("");
  const formatted = `${symbol[currency]}${amount.toLocaleString()}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "scroll-mt-24 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl bg-gradient-hero shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 p-8 md:grid-cols-2 md:p-12 lg:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5" }),
        " Support Our Cause"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold sm:text-4xl md:text-5xl", children: "Your gift, multiplied." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-primary-foreground/85 md:text-lg", children: "See the real-world impact of your generosity before you give. Pick an amount and we'll show you exactly what it supports." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2 text-sm text-primary-foreground/80", children: [
        "100% of every gift is directed to programs",
        "Transparent reporting on impact",
        "Tax-deductible where eligible"
      ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 text-accent" }),
        " ",
        t
      ] }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-6 shadow-soft md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Quick Give" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-full border border-border bg-secondary p-1", children: Object.keys(presets).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setCurrency(c);
              setAmount(presets[c][1]);
              setCustom("");
            },
            className: cn(
              "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
              currency === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            ),
            children: c
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4", children: presets[currency].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            setAmount(p);
            setCustom("");
          },
          className: cn(
            "rounded-xl border-2 px-3 py-3 text-sm font-bold transition-all",
            amount === p && !custom ? "border-primary bg-primary-soft text-primary-deep" : "border-border bg-background text-foreground hover:border-primary/40"
          ),
          children: [
            symbol[currency],
            p.toLocaleString()
          ]
        },
        p
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-4 block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Custom amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-muted-foreground", children: symbol[currency] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              inputMode: "numeric",
              min: 1,
              value: custom,
              onChange: (e) => {
                const v = e.target.value;
                setCustom(v);
                const n = Number(v);
                if (!Number.isNaN(n) && n > 0) setAmount(n);
              },
              placeholder: "Enter amount",
              className: "h-10 w-full border-0 bg-transparent px-0 text-base font-semibold outline-none"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl bg-accent-soft/70 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-accent-foreground/80", children: [
          "Your ",
          formatted,
          " gift"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-foreground", children: impactFor(currency, amount) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "xl", className: "mt-5 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/donate", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
        " Donate ",
        formatted
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-[11px] text-muted-foreground", children: "Secure checkout via Paystack · Crypto also available" })
    ] })
  ] }) }) }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedPrograms, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MissionQuote, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuickDonate, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
  ] });
}
export {
  Index as component
};

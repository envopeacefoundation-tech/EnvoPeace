import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, F as Footer } from "./Footer-B3BLk5RQ.mjs";
import { B as Button, c as cn } from "./button-DKsLk7wf.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { R as Route, p as programs } from "./router-KearU_rM.mjs";
import { z as ArrowLeft, l as CircleCheck, y as Target, d as MapPin, J as HandHeart, K as CircleQuestionMark, c as Heart, A as ArrowRight, C as ChevronDown } from "../_libs/lucide-react.mjs";
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
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
function ProgramPage() {
  const {
    program
  } = Route.useLoaderData();
  const Icon = program.icon;
  const others = programs.filter((p) => p.slug !== program.slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/programs", className: "inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
            " All Programs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-4 animate-fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/15 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-8 w-8" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider", children: "Our Programs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl animate-fade-up delay-100", children: program.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-200", children: program.tagline })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-16 md:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl shadow-elegant animate-scale-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: program.image, alt: program.title, className: "h-[300px] w-full object-cover md:h-[450px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 px-4 md:px-8 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground md:text-3xl", children: "Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg", children: program.overview }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-12 text-xl font-bold text-foreground md:text-2xl", children: "What we do" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: program.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: h.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: h.body })
          ] }, h.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-12 text-xl font-bold text-foreground md:text-2xl", children: "Impact so far" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: program.outcomes.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o })
          ] }, o)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-12 flex items-center gap-2 text-xl font-bold text-foreground md:text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6 text-primary" }),
            " Our approach"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: program.approach.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-hero text-base font-bold text-primary-foreground", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: step.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: step.body })
            ] })
          ] }, step.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden rounded-3xl border border-border bg-secondary/40 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-56 md:h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: program.caseStudy.image, alt: program.caseStudy.title, loading: "lazy", className: "h-full w-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
                " ",
                program.caseStudy.location
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold text-foreground", children: program.caseStudy.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: program.caseStudy.story })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-12 flex items-center gap-2 text-xl font-bold text-foreground md:text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HandHeart, { className: "h-6 w-6 text-primary" }),
            " How you can help"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: program.howToHelp.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: item.body })
          ] }, item.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-12 flex items-center gap-2 text-xl font-bold text-foreground md:text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-6 w-6 text-primary" }),
            " Frequently asked questions"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "mt-6 w-full", children: program.faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-base font-medium text-foreground", children: faq.question }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm leading-relaxed text-muted-foreground", children: faq.answer })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:sticky lg:top-28 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-gradient-hero p-7 text-primary-foreground shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Help fund this program" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-primary-foreground/85", children: [
            "Every contribution directly supports families and communities through ",
            program.title.toLowerCase(),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "secondary", className: "mt-5 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/donate", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
            " Donate Now"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "mt-2 w-full bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get Involved" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-secondary/50 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground md:text-3xl", children: "Explore other programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: others.map((p) => {
          const OIcon = p.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/programs/$slug", params: {
            slug: p.slug
          }, className: "group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OIcon, { className: "h-6 w-6 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-bold text-foreground group-hover:text-primary", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground line-clamp-2", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-1 text-sm font-semibold text-primary", children: [
              "Learn more ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ] })
          ] }, p.slug);
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProgramPage as component
};

import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer } from "./Footer-BDZUeZfA.mjs";
import { I as ImpactCounter } from "./ImpactCounter-DYe8krEe.mjs";
import { g as galleryImages, d as defaultBeneficiaryStories } from "./router-BXmZtTLQ.mjs";
import { b as Sparkles, U as Users, d as MapPin, H as HeartHandshake, Q as Quote } from "../_libs/lucide-react.mjs";
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
import "./button-DKsLk7wf.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const categories = ["All", "Outreach", "Education", "Healthcare", "Youth", "Community"];
function ImpactPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filteredImages = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden pt-28 pb-28 md:pt-36 md:pb-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Our Impact"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl animate-fade-up", children: [
            "Real change. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-accent bg-clip-text text-transparent", children: "Real people." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-100", children: "Behind every number is a story of hope restored, a life transformed, and a community strengthened. See the impact of your support." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl bg-gradient-hero p-8 shadow-elegant md:p-12 lg:p-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-8 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounter, { value: "10,000+", label: "Lives Impacted", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-7 w-7" }), delay: 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounter, { value: "25+", label: "Communities", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-7 w-7" }), delay: 100 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounter, { value: "5,000+", label: "Families Served", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "h-7 w-7" }), delay: 200 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounter, { value: "200+", label: "Volunteers", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-7 w-7" }), delay: 300 })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Grassroots Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: [
            "Our work in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "pictures" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground md:text-lg", children: "A visual journey through our community outreach, education, healthcare, youth empowerment, and development programs." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveCategory(cat), className: "rounded-full px-4 py-2 text-sm font-medium transition-colors " + (activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70 hover:bg-primary-soft hover:text-primary-deep"), children: cat }, cat)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4", children: filteredImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl shadow-card transition-all hover:shadow-soft animate-fade-up", style: {
          animationDelay: `${i * 50}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.url, alt: img.caption, loading: "lazy", className: "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-3 opacity-0 transition-opacity group-hover:opacity-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-accent", children: img.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/90", children: img.caption })
          ] })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/60 py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Beneficiary Stories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: [
            "Voices of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "hope" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground md:text-lg", children: "Hear directly from the people whose lives have been changed through our programs." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 md:grid-cols-3", children: defaultBeneficiaryStories.map((story, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl border border-border bg-card shadow-card animate-fade-up", style: {
          animationDelay: `${i * 100}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: story.image, alt: story.name, loading: "lazy", className: "h-full w-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-primary-foreground", children: [
                story.name,
                ", ",
                story.age
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/80", children: story.program })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: story.quote }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs font-medium text-foreground/70", children: story.location })
          ] })
        ] }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ImpactPage as component
};

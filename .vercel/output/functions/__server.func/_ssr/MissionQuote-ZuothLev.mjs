import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { Q as Quote } from "../_libs/lucide-react.mjs";
const founderImg = "https://images.pexels.com/photos/38076758/pexels-photo-38076758.jpeg?auto=compress&cs=tinysrgb&w=1000";
function MissionQuote() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-hero shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-8 p-8 md:grid-cols-5 md:p-12 lg:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-2xl bg-gradient-accent opacity-30 blur-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: founderImg,
          alt: "Founder Alh Nasir Ernest Nwagwu Nwaze (PhD)",
          loading: "lazy",
          className: "relative aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-10 w-10 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-4 text-2xl font-medium leading-relaxed md:text-3xl", children: '"We do not measure success by what we give, but by the hope we restore and the dignity we preserve. Every community we touch must be left stronger than we found it."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-primary-foreground/20 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold", children: "Alh Nasir Ernest Nwagwu Nwaze (PhD)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70", children: "Founder, Envo Peace and Development Foundation" })
      ] })
    ] })
  ] }) }) }) });
}
export {
  MissionQuote as M
};

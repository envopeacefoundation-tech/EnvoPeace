import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as HeartHandshake, G as GraduationCap, S as Stethoscope, U as Users, a as Sprout } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-COa0WmSz.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Envo Peace" },
      { name: "description", content: "Envo Peace and Development Foundation — restoring hope and building peaceful communities across Nigeria through outreach, education, healthcare, and youth empowerment." },
      { property: "og:title", content: "Envo Peace and Development Foundation" },
      { property: "og:description", content: "Restoring hope. Building peaceful communities. Join our mission." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Envo Peace and Development Foundation" },
      { name: "twitter:description", content: "Restoring hope. Building peaceful communities." }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$7 = () => import("./programs-g0OZSfzr.mjs");
const Route$7 = createFileRoute("/programs")({
  head: () => ({
    meta: [{
      title: "Our Programs — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "Explore our five core programs: Outreach, Educational Support, Healthcare Assistance, Youth Empowerment, and Community Development."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./impact-CKtqRAiV.mjs");
const Route$6 = createFileRoute("/impact")({
  head: () => ({
    meta: [{
      title: "Our Impact — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "See the real-world impact of our work through community metrics, photo galleries, and beneficiary stories."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./donate-CYanbZPY.mjs");
const Route$5 = createFileRoute("/donate")({
  head: () => ({
    meta: [{
      title: "Donate — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "Support our mission with a secure donation via Paystack (Naira/USD) or cryptocurrency. Every gift creates lasting impact."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-BfYgzGLC.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "Get in touch with Envo Peace and Development Foundation. Visit us at No. 1, Hilltop Rd, Abakaliki, Nigeria or call +234 806 356 3604."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin-vJejb0w1.mjs");
const Route$3 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin Dashboard — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "Secure administrative dashboard for managing programs, impact metrics, messages, and donations."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-C4CJ5nMf.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "Learn about our founding vision, mission, and the five operational pillars driving community transformation across Nigeria."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-CC9w4--d.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Envo Peace and Development Foundation — Restoring Hope, Building Peaceful Communities"
    }, {
      name: "description",
      content: "A purpose-driven NGO empowering underserved communities through outreach, education, healthcare, and youth empowerment programs across Nigeria and beyond."
    }, {
      property: "og:title",
      content: "Envo Peace and Development Foundation"
    }, {
      property: "og:description",
      content: "Restoring hope. Building peaceful communities. Join our mission."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const programs = [
  {
    slug: "outreach",
    icon: HeartHandshake,
    title: "Outreach Programs",
    tagline: "Meeting communities where they are.",
    desc: "Boots-on-the-ground initiatives that bring relief, dignity, and hope directly to underserved communities.",
    overview: "Our outreach teams travel into rural villages, displacement camps, and overlooked urban neighborhoods to deliver food, hygiene kits, clothing, and emotional support. Every visit begins with listening — so the help we deliver matches the need on the ground.",
    image: "https://images.pexels.com/photos/6646899/pexels-photo-6646899.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Relief Distribution", body: "Food packs, hygiene kits, and clothing for vulnerable families." },
      { title: "Community Listening", body: "House-to-house visits to understand needs before we act." },
      { title: "Crisis Response", body: "Rapid mobilization to communities affected by displacement or disaster." }
    ],
    outcomes: [
      "Over 5,000 families served across South-East Nigeria",
      "Active in 25+ rural and peri-urban communities",
      "Quarterly relief campaigns powered by local volunteers"
    ],
    caseStudy: {
      title: "Ezzaa Community Relief Drive",
      location: "Ezzaa, Ebonyi State",
      story: "In early 2024, flooding displaced over 200 families in the Ezzaa community. Within 72 hours, our volunteer team mobilized to distribute emergency food packs, blankets, and hygiene kits to every affected household. We followed up with a three-month recovery program that helped families rebuild their homes and restart their livelihoods.",
      image: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  },
  {
    slug: "education",
    icon: GraduationCap,
    title: "Educational Support",
    tagline: "Keeping every child in the classroom.",
    desc: "Scholarships, learning materials, and mentorship that keep children and young adults in school.",
    overview: "We believe education is the most reliable path out of poverty. Our education program covers school fees, uniforms, books, and exam registrations for children from low-income homes, paired with mentorship to keep them on track.",
    image: "https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Scholarships", body: "Sponsorships for primary, secondary, and tertiary students." },
      { title: "Learning Materials", body: "Books, uniforms, and stationery delivered each new term." },
      { title: "Mentorship Circles", body: "Volunteer mentors guiding students through academic and life decisions." }
    ],
    outcomes: [
      "Hundreds of children sponsored back into school",
      "Partnerships with local schools and PTAs",
      "After-school study clubs in rural communities"
    ],
    caseStudy: {
      title: "Back-to-School Scholarship Initiative",
      location: "Abakaliki, Ebonyi State",
      story: "When 14-year-old Amaka's family could no longer afford her school fees, she was weeks away from dropping out. Our scholarship program covered her fees, books, and uniform for the full academic year. Today, Amaka is one of the top students in her class and dreams of becoming a doctor.",
      image: "https://images.pexels.com/photos/34211750/pexels-photo-34211750.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  },
  {
    slug: "healthcare",
    icon: Stethoscope,
    title: "Healthcare Assistance",
    tagline: "Healthcare as a right, not a privilege.",
    desc: "Free medical outreaches, essential medications, and access to care for vulnerable families.",
    overview: "Our medical outreaches partner with licensed doctors, nurses, and pharmacists to bring free consultations, screenings, and medicines to communities with limited access to clinics. We focus on maternal health, malaria prevention, and chronic disease screening.",
    image: "https://images.pexels.com/photos/30688589/pexels-photo-30688589.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Free Medical Outreaches", body: "Consultations, screenings, and medication for under-served areas." },
      { title: "Maternal & Child Care", body: "Pre-natal support, vaccinations, and infant nutrition guidance." },
      { title: "Health Education", body: "Workshops on hygiene, nutrition, and preventive care." }
    ],
    outcomes: [
      "Thousands of free consultations delivered",
      "Essential medications dispensed at no cost",
      "Referral support for critical cases"
    ],
    caseStudy: {
      title: "Maternal Health Outreach",
      location: "Onueke, Ebonyi State",
      story: "Many women in rural Ebonyi communities lack access to prenatal care. Our team of volunteer doctors and nurses set up a two-day free clinic that served over 300 women, providing screenings, prenatal vitamins, and health education. We identified several high-risk pregnancies and connected the mothers to nearby hospitals for ongoing care.",
      image: "https://images.pexels.com/photos/7447009/pexels-photo-7447009.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  },
  {
    slug: "youth",
    icon: Users,
    title: "Youth Empowerment",
    tagline: "Building the next generation of African leaders.",
    desc: "Skills training, leadership development, and entrepreneurship pathways for African youth.",
    overview: "We equip young people with the skills, mindset, and networks to thrive. From vocational training to leadership bootcamps and small-business grants, our youth programs turn ambition into livelihood.",
    image: "https://images.pexels.com/photos/6802855/pexels-photo-6802855.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Vocational Training", body: "Tailoring, ICT, catering, and trade skills with certification." },
      { title: "Leadership Bootcamps", body: "Workshops on character, communication, and civic responsibility." },
      { title: "Startup Grants", body: "Seed funding and mentorship for youth-led micro-businesses." }
    ],
    outcomes: [
      "Young entrepreneurs launched with seed grants",
      "Annual leadership summit for emerging leaders",
      "Job-ready graduates from our skills programs"
    ],
    caseStudy: {
      title: "Youth Tailoring Cooperative",
      location: "Abakaliki, Ebonyi State",
      story: "Chidi, a 22-year-old who struggled to find work, joined our six-month tailoring program. After graduating with a certification and a sewing machine through our startup grant, he opened a small shop that now employs two other young people from his neighborhood. His business is growing, and he mentors new trainees in our program.",
      image: "https://images.pexels.com/photos/20853652/pexels-photo-20853652.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  },
  {
    slug: "community",
    icon: Sprout,
    title: "Community Development",
    tagline: "Lifting whole communities, not just individuals.",
    desc: "Sustainable infrastructure, peace-building, and grassroots projects that lift entire communities.",
    overview: "We partner with community leaders to build the infrastructure and social fabric that lasting development requires — clean water, safe gathering spaces, peace dialogues, and grassroots organizing.",
    image: "https://images.pexels.com/photos/28101461/pexels-photo-28101461.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Clean Water Projects", body: "Boreholes and water points for communities without safe water." },
      { title: "Peace Dialogues", body: "Mediation and reconciliation between communities in conflict." },
      { title: "Grassroots Organizing", body: "Training local committees to lead their own development." }
    ],
    outcomes: [
      "Water access restored in remote villages",
      "Peace committees established across multiple communities",
      "Long-term partnerships with local government"
    ],
    caseStudy: {
      title: "Clean Water Borehole Project",
      location: "Ndiagu, Ebonyi State",
      story: "For decades, the people of Ndiagu walked over 4 kilometers each day to fetch water from a contaminated stream. In partnership with the community, we drilled a solar-powered borehole that now serves over 1,500 residents with clean, safe drinking water. The community formed a water committee to maintain the facility and ensure its sustainability.",
      image: "https://images.pexels.com/photos/34172771/pexels-photo-34172771.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  }
];
function getProgram(slug) {
  return programs.find((p) => p.slug === slug);
}
const defaultBeneficiaryStories = [
  {
    name: "Amaka",
    age: 14,
    program: "Educational Support",
    location: "Abakaliki, Ebonyi State",
    quote: "When my family could no longer afford my school fees, I thought my education was over. Envo Peace stepped in and covered everything. Today I am one of the top students in my class, and I dream of becoming a doctor to help my community.",
    image: "https://images.pexels.com/photos/34379886/pexels-photo-34379886.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Chidi",
    age: 22,
    program: "Youth Empowerment",
    location: "Abakaliki, Ebonyi State",
    quote: "I was jobless for two years before joining the tailoring program. Now I run my own shop and employ two other young people. The startup grant and mentorship changed my life — I went from waiting for opportunity to creating it.",
    image: "https://images.pexels.com/photos/20853652/pexels-photo-20853652.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Mama Nkechi",
    age: 52,
    program: "Healthcare Assistance",
    location: "Onueke, Ebonyi State",
    quote: "I had not seen a doctor in years because the clinic was too far and too expensive. The free medical outreach came to our village and the doctors checked me, gave me medicine, and found that my blood pressure was too high. They connected me to a hospital and probably saved my life.",
    image: "https://images.pexels.com/photos/19982405/pexels-photo-19982405.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];
const galleryImages = [
  { url: "https://images.pexels.com/photos/9090746/pexels-photo-9090746.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Youth outreach activity in a rural community", category: "Outreach" },
  { url: "https://images.pexels.com/photos/6646899/pexels-photo-6646899.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Volunteers distributing food aid boxes", category: "Outreach" },
  { url: "https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Children reading at school", category: "Education" },
  { url: "https://images.pexels.com/photos/34211750/pexels-photo-34211750.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Students collaborating on an assignment", category: "Education" },
  { url: "https://images.pexels.com/photos/30688589/pexels-photo-30688589.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Healthcare checkup in Lagos, Nigeria", category: "Healthcare" },
  { url: "https://images.pexels.com/photos/7447009/pexels-photo-7447009.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Doctor giving a child a health check-up", category: "Healthcare" },
  { url: "https://images.pexels.com/photos/6802855/pexels-photo-6802855.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Youth skills training — tailoring program", category: "Youth" },
  { url: "https://images.pexels.com/photos/16850257/pexels-photo-16850257.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Mentor guiding youth in carpentry workshop", category: "Youth" },
  { url: "https://images.pexels.com/photos/28101461/pexels-photo-28101461.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Clean water access for a village", category: "Community" },
  { url: "https://images.pexels.com/photos/34172771/pexels-photo-34172771.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Children collecting water from a communal tap", category: "Community" },
  { url: "https://images.pexels.com/photos/27638656/pexels-photo-27638656.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Community gathering celebrating unity", category: "Community" },
  { url: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Volunteers moving aid boxes for charity", category: "Outreach" }
];
const $$splitComponentImporter = () => import("./programs._slug-B5DUMVc2.mjs");
const $$splitErrorComponentImporter = () => import("./programs._slug-BfiCsrxG.mjs");
const $$splitNotFoundComponentImporter = () => import("./programs._slug-CDx-80Hz.mjs");
const Route = createFileRoute("/programs/$slug")({
  head: ({
    params
  }) => {
    const p = getProgram(params.slug);
    const title = p ? `${p.title} — Envo Peace and Development Foundation` : "Program — Envo Peace";
    const desc = p?.desc ?? "Explore our programs at Envo Peace and Development Foundation.";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }]
    };
  },
  loader: ({
    params
  }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return {
      program
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ProgramsRoute = Route$7.update({
  id: "/programs",
  path: "/programs",
  getParentRoute: () => Route$8
});
const ImpactRoute = Route$6.update({
  id: "/impact",
  path: "/impact",
  getParentRoute: () => Route$8
});
const DonateRoute = Route$5.update({
  id: "/donate",
  path: "/donate",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AdminRoute = Route$3.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const ProgramsSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProgramsRoute
});
const ProgramsRouteChildren = {
  ProgramsSlugRoute
};
const ProgramsRouteWithChildren = ProgramsRoute._addFileChildren(
  ProgramsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  ContactRoute,
  DonateRoute,
  ImpactRoute,
  ProgramsRoute: ProgramsRouteWithChildren
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  defaultBeneficiaryStories as d,
  galleryImages as g,
  programs as p,
  router as r
};

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
const appCss = "/assets/styles-BR3AlW82.css";
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
const $$splitComponentImporter$7 = () => import("./programs-FAj2Acvt.mjs");
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
const $$splitComponentImporter$6 = () => import("./impact-CUG9o32K.mjs");
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
const $$splitComponentImporter$5 = () => import("./donate-BBIfmjGL.mjs");
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
const $$splitComponentImporter$4 = () => import("./contact-CdaRqi4m.mjs");
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
const $$splitComponentImporter$3 = () => import("./admin-DRHj7tck.mjs");
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
const $$splitComponentImporter$2 = () => import("./about-TCvgiHlb.mjs");
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
const $$splitComponentImporter$1 = () => import("./index-RFFW-sBN.mjs");
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
    overview: "Our outreach teams travel into rural villages, displacement camps, and overlooked urban neighborhoods to deliver food, hygiene kits, clothing, and emotional support. Every visit begins with listening — so the help we deliver matches the need on the ground. We work hand-in-hand with local leaders and community health workers to identify the most vulnerable families, ensuring that no one is left behind. Beyond material relief, our outreach builds trust and long-term relationships that become the foundation for all our other programs.",
    image: "https://images.pexels.com/photos/6646899/pexels-photo-6646899.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Relief Distribution", body: "Food packs, hygiene kits, and clothing for vulnerable families, tailored to the season and local context." },
      { title: "Community Listening", body: "House-to-house visits to understand needs before we act, building trust with each family we meet." },
      { title: "Crisis Response", body: "Rapid mobilization to communities affected by displacement, flooding, or disaster — often within 72 hours." },
      { title: "Dignity-First Approach", body: "Every interaction is designed to preserve dignity: we sit, we listen, and we deliver aid with respect." }
    ],
    outcomes: [
      "Over 5,000 families served across South-East Nigeria",
      "Active in 25+ rural and peri-urban communities",
      "Quarterly relief campaigns powered by local volunteers",
      "Rapid-response teams deployed within 72 hours of crises"
    ],
    approach: [
      { title: "Assess", body: "We begin with a needs assessment conducted alongside local leaders and community health workers, mapping the most vulnerable households and prioritizing accordingly." },
      { title: "Mobilize", body: "We rally volunteers, source relief items locally where possible to support local economies, and organize logistics for distribution." },
      { title: "Deliver", body: "Aid is delivered door-to-door or at community centers, ensuring it reaches those who need it most — including the elderly, disabled, and displaced." },
      { title: "Follow Up", body: "Every outreach is followed by a return visit to check on families, connect them to longer-term programs, and measure impact." }
    ],
    howToHelp: [
      { title: "Sponsor a Relief Pack", body: "A gift of ₦20,000 provides a family with a month's supply of food, hygiene essentials, and basic clothing." },
      { title: "Volunteer on the Ground", body: "Join our outreach teams in Ebonyi State for quarterly relief campaigns and community visits." },
      { title: "Donate in Kind", body: "We accept gently-used clothing, school supplies, and medical items — contact us to arrange a drop-off." },
      { title: "Spread the Word", body: "Share our outreach stories on social media to help us reach more communities and supporters." }
    ],
    faqs: [
      { question: "How do you choose which communities to visit?", answer: "We work with local government partners, community leaders, and our own field assessments to identify communities with the greatest unmet need. We prioritize areas with limited access to government services or other NGOs." },
      { question: "Can I volunteer if I don't live in Nigeria?", answer: "Yes! While on-the-ground volunteering is local, we welcome remote volunteers for fundraising, storytelling, logistics, and skills-based support. Reach out through our Contact page." },
      { question: "What happens after an outreach visit?", answer: "We follow up within two to four weeks to check on families and connect them with relevant longer-term programs — such as education sponsorships, healthcare, or skills training — depending on their needs." }
    ],
    caseStudy: {
      title: "Ezzaa Community Relief Drive",
      location: "Ezzaa, Ebonyi State",
      story: "In early 4, flooding displaced over 200 families in the Ezzaa community. Within 72 hours, our volunteer team mobilized to distribute emergency food packs, blankets, and hygiene kits to every affected household. We followed up with a three-month recovery program that helped families rebuild their homes and restart their livelihoods. Today, the community has a standing relationship with our foundation and receives quarterly support visits.",
      image: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  },
  {
    slug: "education",
    icon: GraduationCap,
    title: "Educational Support",
    tagline: "Keeping every child in the classroom.",
    desc: "Scholarships, learning materials, and mentorship that keep children and young adults in school.",
    overview: "We believe education is the most reliable path out of poverty. Our education program covers school fees, uniforms, books, and exam registrations for children from low-income homes, paired with mentorship to keep them on track. We work with school administrators and PTAs to identify students at risk of dropping out, and we stay involved throughout the academic year — not just at enrollment. Our goal is not just to send children to school, but to see them through to graduation and beyond.",
    image: "https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Scholarships", body: "Full sponsorships covering tuition, uniforms, and exam fees for primary, secondary, and tertiary students." },
      { title: "Learning Materials", body: "Textbooks, notebooks, uniforms, and stationery delivered at the start of each new term." },
      { title: "Mentorship Circles", body: "Volunteer mentors guide students through academic challenges, career decisions, and personal growth." },
      { title: "After-School Clubs", body: "Study clubs in rural communities provide a quiet space, tutoring, and peer support for students without electricity or study space at home." }
    ],
    outcomes: [
      "Hundreds of children sponsored back into school",
      "Partnerships with 15+ local schools and PTAs",
      "After-school study clubs established in 8 rural communities",
      "92% of sponsored students remained in school through the academic year"
    ],
    approach: [
      { title: "Identify", body: "We work with school administrators and community leaders to identify students at the greatest risk of dropping out due to financial hardship." },
      { title: "Sponsor", body: "We cover the full cost of attendance — tuition, uniforms, books, and exam fees — so families face zero financial barriers." },
      { title: "Mentor", body: "Each sponsored student is paired with a volunteer mentor who provides academic guidance and emotional support throughout the year." },
      { title: "Monitor", body: "We track attendance, grades, and wellbeing each term, stepping in quickly when a student is struggling." }
    ],
    howToHelp: [
      { title: "Sponsor a Child", body: "₦50,000 covers a full year of primary or secondary education for one child — tuition, uniforms, books, and mentorship." },
      { title: "Donate Books & Supplies", body: "New or gently-used textbooks, notebooks, and stationery are always needed for our term distributions." },
      { title: "Become a Mentor", body: "Commit to mentoring a student through the academic year — meet monthly, call regularly, and be a steady presence." },
      { title: "Fund a Study Club", body: "₦100,000 sets up an after-school study club with solar lighting, books, and a volunteer tutor for a full year." }
    ],
    faqs: [
      { question: "How are students selected for sponsorship?", answer: "We partner with school administrators and PTAs to identify students whose families cannot afford tuition. We verify financial need through home visits and community references, and prioritize orphans, girls, and children from single-parent households." },
      { question: "Can I sponsor a specific child?", answer: "Yes. We offer a one-to-one sponsorship program where you are matched with a specific student. You will receive their name, photo, and termly progress reports so you can see the impact of your support." },
      { question: "What happens if a sponsored student struggles academically?", answer: "Our mentors and program coordinators step in immediately — providing extra tutoring, counseling, or home visits. We are committed to seeing each student through, not just enrolling them." }
    ],
    caseStudy: {
      title: "Back-to-School Scholarship Initiative",
      location: "Abakaliki, Ebonyi State",
      story: "When 14-year-old Amaka's family could no longer afford her school fees, she was weeks away from dropping out. Our scholarship program covered her fees, books, and uniform for the full academic year. Today, Amaka is one of the top students in her class and dreams of becoming a doctor. Her mentor, a volunteer medical student, visits her monthly and has become a role model and a lifeline.",
      image: "https://images.pexels.com/photos/34211750/pexels-photo-34211750.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  },
  {
    slug: "healthcare",
    icon: Stethoscope,
    title: "Healthcare Assistance",
    tagline: "Healthcare as a right, not a privilege.",
    desc: "Free medical outreaches, essential medications, and access to care for vulnerable families.",
    overview: "Our medical outreaches partner with licensed doctors, nurses, and pharmacists to bring free consultations, screenings, and medicines to communities with limited access to clinics. We focus on maternal health, malaria prevention, and chronic disease screening — the conditions that cause the most suffering in the communities we serve. Each outreach is staffed by volunteer medical professionals and supported by community health workers who help with follow-up and referrals. We do not replace the formal health system; we extend its reach to those it has left behind.",
    image: "https://images.pexels.com/photos/30688589/pexels-photo-30688589.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Free Medical Outreaches", body: "Multi-day clinics offering consultations, screenings, and medication at no cost to patients in underserved areas." },
      { title: "Maternal & Child Care", body: "Pre-natal checkups, vaccinations, infant nutrition guidance, and safe-delivery kits for expectant mothers." },
      { title: "Health Education", body: "Workshops on hygiene, nutrition, malaria prevention, and managing chronic conditions like hypertension and diabetes." },
      { title: "Referral & Follow-Up", body: "We connect critical cases to nearby hospitals and cover transport and initial treatment costs where needed." }
    ],
    outcomes: [
      "Thousands of free consultations delivered",
      "Essential medications dispensed at no cost to over 3,000 patients",
      "Referral support for 150+ critical cases",
      "Maternal health outreaches serving 300+ women per clinic"
    ],
    approach: [
      { title: "Partner", body: "We collaborate with local health authorities, community leaders, and volunteer medical professionals to plan each outreach." },
      { title: "Set Up Clinic", body: "We transform community centers, schools, or churches into temporary clinics with consultation, pharmacy, and screening stations." },
      { title: "Treat", body: "Patients receive free consultations, diagnoses, medications, and health education over one to three days of clinic operation." },
      { title: "Refer & Follow Up", body: "Critical cases are referred to hospitals with transport and financial support. Community health workers follow up within two weeks." }
    ],
    howToHelp: [
      { title: "Fund a Medical Outreach", body: "₦500,000 funds a two-day free clinic serving 300+ patients with doctors, nurses, medications, and screenings." },
      { title: "Volunteer as a Medical Professional", body: "Licensed doctors, nurses, and pharmacists are needed for our quarterly outreaches. Contact us to join the roster." },
      { title: "Donate Medical Supplies", body: "We accept unexpired medications, blood pressure monitors, glucometers, and maternal health supplies." },
      { title: "Sponsor a Mother", body: "₦30,000 provides a full maternal care package — prenatal visits, vitamins, and a safe-delivery kit for one expectant mother." }
    ],
    faqs: [
      { question: "Are the doctors and nurses qualified?", answer: "Yes. All medical volunteers are licensed professionals verified by our medical coordinator. We partner with local medical associations and teaching hospitals to recruit qualified practitioners for every outreach." },
      { question: "What conditions do you treat?", answer: "We handle common conditions — malaria, hypertension, diabetes, respiratory infections, maternal health, and minor injuries. We refer complex or surgical cases to partner hospitals with financial support." },
      { question: "How often do outreaches happen?", answer: "We run quarterly medical outreaches, with additional emergency clinics in response to outbreaks or crises. Each clinic typically runs for two to three days." }
    ],
    caseStudy: {
      title: "Maternal Health Outreach",
      location: "Onueke, Ebonyi State",
      story: "Many women in rural Ebonyi communities lack access to prenatal care. Our team of volunteer doctors and nurses set up a two-day free clinic that served over 300 women, providing screenings, prenatal vitamins, and health education. We identified several high-risk pregnancies and connected the mothers to nearby hospitals for ongoing care. One of those mothers, Mrs. O, went on to deliver a healthy baby at a partner hospital — a outcome she credits to the outreach that caught her condition early.",
      image: "https://images.pexels.com/photos/7447009/pexels-photo-7447009.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  },
  {
    slug: "youth",
    icon: Users,
    title: "Youth Empowerment",
    tagline: "Building the next generation of African leaders.",
    desc: "Skills training, leadership development, and entrepreneurship pathways for African youth.",
    overview: "We equip young people with the skills, mindset, and networks to thrive. From vocational training to leadership bootcamps and small-business grants, our youth programs turn ambition into livelihood. We focus on youth aged 16–30 who face limited economic opportunities, providing them with market-relevant skills, mentorship from established professionals, and the startup capital they need to launch their own ventures. Our graduates become employers, mentors, and community leaders — multiplying the impact of every naira invested.",
    image: "https://images.pexels.com/photos/6802855/pexels-photo-6802855.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Vocational Training", body: "Six-month programs in tailoring, ICT, catering, and trade skills with industry-recognized certification." },
      { title: "Leadership Bootcamps", body: "Intensive weekend workshops on character, communication, civic responsibility, and community organizing." },
      { title: "Startup Grants", body: "Seed funding of ₦100,000–₦250,000 plus six months of mentorship for youth-led micro-businesses." },
      { title: "Alumni Network", body: "Graduates join a growing alumni network that provides peer support, referrals, and ongoing learning opportunities." }
    ],
    outcomes: [
      "Over 200 young entrepreneurs launched with seed grants",
      "Annual leadership summit gathering 500+ emerging leaders",
      "Job-ready graduates from our skills programs now employed across 5 states",
      "Alumni network of 400+ members supporting each other"
    ],
    approach: [
      { title: "Recruit", body: "We recruit youth through community outreach, school partnerships, and referrals from local leaders, prioritizing those with the fewest alternatives." },
      { title: "Train", body: "Participants complete intensive, hands-on training in their chosen vocation, taught by experienced practitioners." },
      { title: "Mentor", body: "Each trainee is matched with a mentor in their field who provides guidance, industry connections, and accountability." },
      { title: "Launch", body: "Graduates can apply for startup grants to launch their own businesses, with ongoing mentorship and access to the alumni network." }
    ],
    howToHelp: [
      { title: "Fund a Training Seat", body: "₦150,000 covers six months of vocational training, materials, and certification for one young person." },
      { title: "Provide a Startup Grant", body: "₦250,000 seeds a youth-led micro-business with equipment, initial stock, and six months of mentorship." },
      { title: "Volunteer as a Mentor", body: "Share your professional expertise with a young entrepreneur or trainee in your field." },
      { title: "Donate Equipment", body: "Sewing machines, computers, catering equipment, and tools are always needed for our training centers." }
    ],
    faqs: [
      { question: "Who is eligible for the youth programs?", answer: "Our programs are open to youth aged 16–30, with priority given to those from low-income backgrounds, out-of-school youth, and young women. No prior qualifications are required for most programs." },
      { question: "How do startup grants work?", answer: "Graduates of our training programs can submit a business plan. Approved applicants receive ₦100,000–₦250,000 in seed funding, plus six months of mentorship from an experienced business owner." },
      { question: "Can I hire graduates from your programs?", answer: "Absolutely. We maintain a roster of job-ready graduates and would love to connect you. Many of our alumni are skilled tailors, caterers, IT technicians, and tradespeople ready for employment." }
    ],
    caseStudy: {
      title: "Youth Tailoring Cooperative",
      location: "Abakaliki, Ebonyi State",
      story: "Chidi, a 22-year-old who struggled to find work for two years, joined our six-month tailoring program. After graduating with a certification and a sewing machine through our startup grant, he opened a small shop that now employs two other young people from his neighborhood. His business is growing, and he mentors new trainees in our program — completing the cycle from trainee to employer.",
      image: "https://images.pexels.com/photos/20853652/pexels-photo-20853652.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  },
  {
    slug: "community",
    icon: Sprout,
    title: "Community Development",
    tagline: "Lifting whole communities, not just individuals.",
    desc: "Sustainable infrastructure, peace-building, and grassroots projects that lift entire communities.",
    overview: "We partner with community leaders to build the infrastructure and social fabric that lasting development requires — clean water, safe gathering spaces, peace dialogues, and grassroots organizing. Unlike our other programs that focus on individuals and families, community development targets the systems and structures that affect everyone. We do not arrive with solutions; we arrive with questions, and we work alongside communities to co-create projects that they own, maintain, and sustain long after our involvement ends.",
    image: "https://images.pexels.com/photos/28101461/pexels-photo-28101461.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      { title: "Clean Water Projects", body: "Solar-powered boreholes and water points for communities without safe drinking water, with community-led maintenance committees." },
      { title: "Peace Dialogues", body: "Mediation and reconciliation processes between communities in conflict, led by trained local facilitators." },
      { title: "Grassroots Organizing", body: "Training local development committees to identify needs, plan projects, and advocate for their communities with government." },
      { title: "Community Infrastructure", body: "Building or renovating markets, town halls, playgrounds, and other shared spaces that strengthen community life." }
    ],
    outcomes: [
      "Water access restored for 5,000+ residents across 4 villages",
      "Peace committees established in 6 communities with a history of conflict",
      "Long-term partnerships with 3 local government areas",
      "Community development committees trained in 10 communities"
    ],
    approach: [
      { title: "Listen", body: "We begin with extended community meetings — not to present a plan, but to understand what residents see as their most pressing needs." },
      { title: "Co-Plan", body: "We work with community leaders and development committees to design a project that is feasible, sustainable, and community-owned." },
      { title: "Build Together", body: "Community members contribute labor, local materials, and oversight. We provide funding, technical expertise, and project management." },
      { title: "Hand Over", body: "Once complete, the project is handed to a community maintenance committee with training and a sustainability plan." }
    ],
    howToHelp: [
      { title: "Fund a Borehole", body: "₦2,000,000 drills a solar-powered borehole serving 1,000+ residents with clean water for years to come." },
      { title: "Support a Peace Dialogue", body: "₦500,000 funds a multi-day mediation process between communities in conflict, including facilitators and logistics." },
      { title: "Train a Development Committee", body: "₦300,000 trains a local committee in project planning, budgeting, and government advocacy." },
      { title: "Volunteer Your Expertise", body: "Engineers, project managers, and facilitators are needed to support our community projects. Contact us to get involved." }
    ],
    faqs: [
      { question: "How do you ensure projects are sustainable?", answer: "Every project includes a community maintenance committee trained to operate and maintain the infrastructure. We also establish a maintenance fund, contributed to by the community, to cover future repairs." },
      { question: "What kinds of conflicts do your peace dialogues address?", answer: "We work on inter-communal conflicts — often over land, boundaries, or resources — and help communities find mediated solutions through trained local facilitators. We do not intervene in criminal or political conflicts." },
      { question: "Can my community apply for a development project?", answer: "Yes. If your community has a pressing infrastructure or peace-building need, reach out through our Contact page. We assess requests based on need, feasibility, and community readiness." }
    ],
    caseStudy: {
      title: "Clean Water Borehole Project",
      location: "Ndiagu, Ebonyi State",
      story: "For decades, the people of Ndiagu walked over 4 kilometers each day to fetch water from a contaminated stream. In partnership with the community, we drilled a solar-powered borehole that now serves over 1,500 residents with clean, safe drinking water. The community formed a water committee to maintain the facility, contributed local labor during construction, and established a small maintenance fund. Two years later, the borehole is still running — maintained entirely by the community.",
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
const $$splitComponentImporter = () => import("./programs._slug-CS3L7yy5.mjs");
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

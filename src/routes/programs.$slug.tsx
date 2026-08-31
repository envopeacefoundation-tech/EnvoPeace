import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CircleCheck as CheckCircle2, Heart, Circle as HelpCircle, MapPin, HandHeart, Target } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProgram, programs, type Program } from "@/components/site/programs-data";

export const Route = createFileRoute("/programs/$slug")({
  head: ({ params }) => {
    const p = getProgram(params.slug);
    const title = p ? `${p.title} — Envo Peace and Development Foundation` : "Program — Envo Peace";
    const desc = p?.desc ?? "Explore our programs at Envo Peace and Development Foundation.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Program not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Back to home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="flex min-h-screen items-center justify-center">
      <Button onClick={reset}>Try again</Button>
    </div>
  ),
  component: ProgramPage,
});

function ProgramPage() {
  const { program } = Route.useLoaderData() as { program: Program };
  const Icon = program.icon;
  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
          <div className="mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground animate-fade-in"
            >
              <ArrowLeft className="h-4 w-4" /> All Programs
            </Link>
            <div className="mt-6 flex items-center gap-4 animate-fade-up">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/15 backdrop-blur">
                <Icon className="h-8 w-8" />
              </span>
              <span className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                Our Programs
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl animate-fade-up delay-100">
              {program.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-200">
              {program.tagline}
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant animate-scale-in">
              <img
                src={program.image}
                alt={program.title}
                className="h-[300px] w-full object-cover md:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {program.overview}
              </p>

              <h3 className="mt-12 text-xl font-bold text-foreground md:text-2xl">What we do</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {program.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-border bg-card p-5 shadow-card"
                  >
                    <h4 className="font-semibold text-foreground">{h.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {h.body}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-12 text-xl font-bold text-foreground md:text-2xl">Impact so far</h3>
              <ul className="mt-4 space-y-3">
                {program.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              {/* Approach */}
              <h3 className="mt-12 flex items-center gap-2 text-xl font-bold text-foreground md:text-2xl">
                <Target className="h-6 w-6 text-primary" /> Our approach
              </h3>
              <div className="mt-6 space-y-4">
                {program.approach.map((step, i) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-hero text-base font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Case Study */}
              <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-secondary/40 shadow-card">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-56 md:h-auto">
                    <img
                      src={program.caseStudy.image}
                      alt={program.caseStudy.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                      <MapPin className="h-3.5 w-3.5" /> {program.caseStudy.location}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-foreground">{program.caseStudy.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {program.caseStudy.story}
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Help */}
              <h3 className="mt-12 flex items-center gap-2 text-xl font-bold text-foreground md:text-2xl">
                <HandHeart className="h-6 w-6 text-primary" /> How you can help
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {program.howToHelp.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant"
                  >
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h3 className="mt-12 flex items-center gap-2 text-xl font-bold text-foreground md:text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" /> Frequently asked questions
              </h3>
              <Accordion type="single" collapsible className="mt-6 w-full">
                {program.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 self-start">
              <div className="rounded-3xl border border-border bg-gradient-hero p-7 text-primary-foreground shadow-elegant">
                <h3 className="text-xl font-bold">Help fund this program</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Every contribution directly supports families and communities through {program.title.toLowerCase()}.
                </p>
                <Button asChild variant="secondary" className="mt-5 w-full">
                  <Link to="/donate">
                    <Heart className="h-4 w-4" /> Donate Now
                  </Link>
                </Button>
                <Button asChild variant="outline" className="mt-2 w-full bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Link to="/contact">Get Involved</Link>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {/* Other Programs */}
        <section className="border-t border-border bg-secondary/50 py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Explore other programs</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => {
                const OIcon = p.icon;
                return (
                  <Link
                    key={p.slug}
                    to="/programs/$slug"
                    params={{ slug: p.slug }}
                    className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero">
                      <OIcon className="h-6 w-6 text-primary-foreground" />
                    </span>
                    <h3 className="mt-4 font-bold text-foreground group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

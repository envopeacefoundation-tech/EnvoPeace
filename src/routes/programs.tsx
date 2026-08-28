import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { programs } from "@/components/site/programs-data";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Envo Peace and Development Foundation" },
      { name: "description", content: "Explore our five core programs: Outreach, Educational Support, Healthcare Assistance, Youth Empowerment, and Community Development." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          <div className="absolute inset-0 -z-10 bg-gradient-hero-fade" />
          <div className="mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" /> Our Core Pillars
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl animate-fade-up">
              Five focus areas. <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">One mission.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-100">
              Each program is designed to deliver lasting impact—not just
              short-term relief. Explore our five core pillars below.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.slug}
                    to="/programs/$slug"
                    params={{ slug: p.slug }}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant focus:outline-none focus-visible:ring-2 focus-visible:ring-primary animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/20 to-transparent" />
                      <span className="absolute bottom-3 left-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background/90 backdrop-blur">
                        <Icon className="h-6 w-6 text-primary-deep" />
                      </span>
                      <span className="absolute top-3 right-3 rounded-full bg-accent/90 px-3 py-1 text-xs font-bold text-accent-foreground">
                        Pillar 0{i + 1}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">{p.tagline}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {p.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
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

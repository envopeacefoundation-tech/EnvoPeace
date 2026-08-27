import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { programs } from "./programs-data";

export function FeaturedPrograms() {
  return (
    <section className="scroll-mt-24 bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Core Pillars
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Five focus areas. <span className="text-primary">One mission.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Each program is designed to deliver lasting impact—not just
            short-term relief.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, desc, slug, image }, i) => (
            <Link
              key={slug}
              to="/programs/$slug"
              params={{ slug }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant focus:outline-none focus-visible:ring-2 focus-visible:ring-primary animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/20 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background/90 backdrop-blur">
                  <Icon className="h-6 w-6 text-primary-deep" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {desc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/70">
                    Pillar 0{i + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <Link
            to="/programs"
            className="group flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-primary/30 bg-primary-soft/30 p-8 text-center transition-all hover:border-primary hover:bg-primary-soft/50 animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft">
              <ArrowRight className="h-7 w-7 text-primary-foreground" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">Explore All Programs</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              See how each pillar creates lasting change
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

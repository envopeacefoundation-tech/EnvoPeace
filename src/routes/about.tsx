import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Sparkles, CircleCheck as CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { programs } from "@/components/site/programs-data";
import { MissionQuote } from "@/components/site/MissionQuote";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Envo Peace and Development Foundation" },
      { name: "description", content: "Learn about our founding vision, mission, and the five operational pillars driving community transformation across Nigeria." },
    ],
  }),
  component: AboutPage,
});

const founderImg = "https://images.pexels.com/photos/38076758/pexels-photo-38076758.jpeg?auto=compress&cs=tinysrgb&w=1000";
const communityImg = "https://images.pexels.com/photos/27638656/pexels-photo-27638656.jpeg?auto=compress&cs=tinysrgb&w=1200";

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          <div className="absolute inset-0 -z-10 bg-gradient-hero-fade" />
          <div className="mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" /> About Us
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl animate-fade-up">
              Purpose-driven. <span className="bg-gradient-accent bg-clip-text text-transparent">People-first.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-100">
              Envo Peace and Development Foundation is a purpose-driven
              Non-profit and Non-governmental organization committed to
              improving lives by creating peaceful environments and restoring
              hope in our communities.
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative animate-fade-up">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-accent-soft" />
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-primary-soft" />
                <img
                  src={founderImg}
                  alt="Founder Alh Nasir Ernest Nwagwu Nwaze (PhD)"
                  loading="lazy"
                  className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
                />
              </div>
              <div className="animate-fade-up delay-100">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Our Founder
                </span>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                  Alh Nasir Ernest Nwagwu Nwaze (PhD)
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Founded by Alh Nasir Ernest Nwagwu Nwaze (PhD), the Envo Peace
                  and Development Foundation was born from a simple conviction:
                  that every person, regardless of their circumstances, deserves
                  the opportunity to live with dignity, hope, and purpose.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Dr. Nwaze's vision was shaped by decades of witnessing the
                  resilience of underserved communities across Nigeria. He
                  believed that lasting change comes not from charity alone, but
                  from empowerment — equipping communities with the tools,
                  skills, and confidence to build their own futures.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Today, the foundation carries this vision forward through five
                  core programs that have touched thousands of lives across
                  South-East Nigeria and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-secondary/60 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-card animate-fade-up">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  To restore hope through tangible, sustainable action —
                  empowering the underserved, creating peaceful environments, and
                  building pathways for growth that last beyond our involvement.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-card animate-fade-up delay-100">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent shadow-soft">
                  <Eye className="h-7 w-7 text-accent-foreground" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Peaceful, thriving communities across Africa and beyond — where
                  every child has access to education, every family has access to
                  healthcare, and every young person has the opportunity to reach
                  their full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Five Pillars */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Operational Pillars
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Five pathways to <span className="text-primary">lasting change</span>
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Each pillar addresses a critical need, working together to create
                holistic community transformation.
              </p>
            </div>
            <div className="mt-14 space-y-6">
              {programs.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.slug}
                    className="grid items-center gap-6 rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-soft md:grid-cols-12 md:p-8 animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="md:col-span-1">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft">
                        <Icon className="h-7 w-7 text-primary-foreground" />
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/70">
                        Pillar 0{i + 1}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-foreground">{p.title}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{p.tagline}</p>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                        {p.highlights.map((h) => (
                          <li key={h.title} className="flex items-center gap-1.5 text-xs text-foreground/80">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {h.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Image */}
        <section className="relative isolate overflow-hidden py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={communityImg}
                alt="A joyful community gathering celebrating unity and diversity"
                loading="lazy"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
                  Building peace, one community at a time.
                </h2>
                <p className="mt-2 max-w-2xl text-primary-foreground/85">
                  Our work is rooted in the belief that lasting peace and
                  development begin at the community level.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MissionQuote />
      </main>
      <Footer />
    </div>
  );
}

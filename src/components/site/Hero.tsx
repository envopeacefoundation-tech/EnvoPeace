import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImpactCounter } from "./ImpactCounter";
import { Users, MapPin, HeartHandshake, Sparkles as SparklesIcon } from "lucide-react";

const heroImg = "https://images.pexels.com/photos/9090746/pexels-photo-9090746.jpeg?auto=compress&cs=tinysrgb&w=1600";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div
        className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-10 md:px-8 md:py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" /> Peace · Hope · Development
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
            Restoring Hope,<br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Building Peaceful Communities
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-100">
            We don't just give—we uplift, inspire, and build pathways for a
            better future across Nigeria and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up delay-200">
            <Button asChild variant="hero" size="xl">
              <Link to="/programs">
                Explore Our Programs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-4 border-t border-primary-foreground/20 pt-8 sm:grid-cols-4 sm:gap-6 lg:max-w-4xl lg:gap-12">
            <ImpactCounter value="10,000+" label="Lives Impacted" icon={<Users className="h-6 w-6" />} delay={0} />
            <ImpactCounter value="25+" label="Communities" icon={<MapPin className="h-6 w-6" />} delay={100} />
            <ImpactCounter value="5,000+" label="Families Served" icon={<HeartHandshake className="h-6 w-6" />} delay={200} />
            <ImpactCounter value="200+" label="Volunteers" icon={<SparklesIcon className="h-6 w-6" />} delay={300} />
          </dl>
        </div>

        <div className="lg:col-span-5 animate-scale-in delay-300">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-30 blur-2xl" />
            <img
              src={heroImg}
              alt="Volunteers guiding children in a community outreach activity"
              width={1600}
              height={1100}
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant ring-1 ring-primary-foreground/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

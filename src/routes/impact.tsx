import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Quote } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ImpactCounter } from "@/components/site/ImpactCounter";
import { galleryImages, defaultBeneficiaryStories } from "@/components/site/programs-data";
import { Users, MapPin, HeartHandshake, Sparkles as SparklesIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Envo Peace and Development Foundation" },
      { name: "description", content: "See the real-world impact of our work through community metrics, photo galleries, and beneficiary stories." },
    ],
  }),
  component: ImpactPage,
});

const categories = ["All", "Outreach", "Education", "Healthcare", "Youth", "Community"];

function ImpactPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
          <div className="mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" /> Our Impact
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl animate-fade-up">
              Real change. <span className="bg-gradient-accent bg-clip-text text-transparent">Real people.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl animate-fade-up delay-100">
              Behind every number is a story of hope restored, a life transformed,
              and a community strengthened. See the impact of your support.
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="rounded-3xl bg-gradient-hero p-8 shadow-elegant md:p-12 lg:p-16">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                <ImpactCounter value="10,000+" label="Lives Impacted" icon={<Users className="h-7 w-7" />} delay={0} />
                <ImpactCounter value="25+" label="Communities" icon={<MapPin className="h-7 w-7" />} delay={100} />
                <ImpactCounter value="5,000+" label="Families Served" icon={<HeartHandshake className="h-7 w-7" />} delay={200} />
                <ImpactCounter value="200+" label="Volunteers" icon={<SparklesIcon className="h-7 w-7" />} delay={300} />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Grassroots Gallery
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Our work in <span className="text-primary">pictures</span>
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                A visual journey through our community outreach, education, healthcare,
                youth empowerment, and development programs.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                    (activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground/70 hover:bg-primary-soft hover:text-primary-deep")
                  }
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {filteredImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl shadow-card transition-all hover:shadow-soft animate-fade-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                      {img.category}
                    </span>
                    <p className="text-xs text-primary-foreground/90">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficiary Stories */}
        <section className="bg-secondary/60 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Beneficiary Stories
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Voices of <span className="text-primary">hope</span>
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Hear directly from the people whose lives have been changed through
                our programs.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {defaultBeneficiaryStories.map((story, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-3xl border border-border bg-card shadow-card animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-lg font-bold text-primary-foreground">{story.name}, {story.age}</p>
                      <p className="text-xs text-primary-foreground/80">{story.program}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Quote className="h-6 w-6 text-accent" />
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {story.quote}
                    </p>
                    <p className="mt-4 text-xs font-medium text-foreground/70">
                      {story.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

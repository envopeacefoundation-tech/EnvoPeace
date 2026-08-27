import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedPrograms } from "@/components/site/FeaturedPrograms";
import { MissionQuote } from "@/components/site/MissionQuote";
import { QuickDonate } from "@/components/site/QuickDonate";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Envo Peace and Development Foundation — Restoring Hope, Building Peaceful Communities" },
      { name: "description", content: "A purpose-driven NGO empowering underserved communities through outreach, education, healthcare, and youth empowerment programs across Nigeria and beyond." },
      { property: "og:title", content: "Envo Peace and Development Foundation" },
      { property: "og:description", content: "Restoring hope. Building peaceful communities. Join our mission." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedPrograms />
        <MissionQuote />
        <QuickDonate />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}

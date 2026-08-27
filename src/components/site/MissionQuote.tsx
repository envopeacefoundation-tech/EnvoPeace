import { Quote } from "lucide-react";

const founderImg = "https://images.pexels.com/photos/38076758/pexels-photo-38076758.jpeg?auto=compress&cs=tinysrgb&w=1000";

export function MissionQuote() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero shadow-elegant">
          <div className="grid items-center gap-8 p-8 md:grid-cols-5 md:p-12 lg:p-16">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-accent opacity-30 blur-xl" />
                <img
                  src={founderImg}
                  alt="Founder Alh Nasir Ernest Nwagwu Nwaze (PhD)"
                  loading="lazy"
                  className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
                />
              </div>
            </div>
            <div className="md:col-span-3 text-primary-foreground">
              <Quote className="h-10 w-10 text-accent" />
              <blockquote className="mt-4 text-2xl font-medium leading-relaxed md:text-3xl">
                "We do not measure success by what we give, but by the hope we
                restore and the dignity we preserve. Every community we touch
                must be left stronger than we found it."
              </blockquote>
              <div className="mt-6 border-t border-primary-foreground/20 pt-4">
                <p className="text-base font-bold">
                  Alh Nasir Ernest Nwagwu Nwaze (PhD)
                </p>
                <p className="text-sm text-primary-foreground/70">
                  Founder, Envo Peace and Development Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

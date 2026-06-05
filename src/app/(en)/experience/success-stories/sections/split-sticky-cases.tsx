/**
 * SplitStickyCases (English)
 *
 * 2-column layout: scrollable text (left) + sticky vertical image (right) + 2 CTAs.
 * Contains 2 cases (Gulfstream dominant + Honeywell supporting) + DHL subordinate close.
 */

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SplitStickyCases() {
  return (
    <section
      data-component="SplitStickyCases"
      data-component-file="src/app/(en)/experience/success-stories/sections/split-sticky-cases.tsx"
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-20 md:py-28 lg:py-32"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 px-4 md:px-12 lg:px-0 xl:px-8">
        {/* Left column: scrollable text */}
        <div className="flex-1 lg:max-w-[55%] space-y-20">
          {/* Case 1: Gulfstream Aerospace (dominant) */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Success Story 1
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
              Gulfstream Aerospace: 40 Years Trusting Nelson
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Working with a Fortune 500 member like Gulfstream means meeting
              the highest corporate standards in the aerospace industry. Meeting
              their strict safety, quality, and compliance requirements not only
              makes us proud — it establishes us as a strategic partner capable
              of supporting global leaders.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              After the 7.2 earthquake in 2010 that damaged their existing
              plant, Gulfstream trusted our In-House Construction team to
              build their largest facility in the city. They did not look for
              alternatives. They did not open a bidding process. They assigned
              directly.
            </p>

            {/* Anchor data — each fact appears ONCE */}
            <div className="space-y-4 border-l-2 border-blue-600/30 pl-6">
              <div>
                <p className="font-semibold text-foreground">
                  5 facilities built by our In-House Construction team
                </p>
                <p className="text-muted-foreground">
                  Including the 562,000 ft² facility — the largest in
                  Mexicali — built after the 2010 earthquake.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  +1M square feet
                </p>
                <p className="text-muted-foreground">
                  What began as a small operation at El Vigia Industrial Park
                  has evolved extraordinarily over the years. Gulfstream has
                  consolidated more than 1 million square feet with us,
                  steadily expanding its facilities.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Direct assignment without bidding
                </p>
                <p className="text-muted-foreground">
                  For their most recent expansion, Gulfstream did not open
                  a bidding process. When you have been with the same
                  contractor for 40 years, the selection process is no
                  longer necessary.
                </p>
              </div>
            </div>
          </div>

          {/* Transition Gulfstream to Honeywell */}
          <p className="text-lg leading-relaxed text-muted-foreground italic">
            40 years with the same client is hard evidence to ignore.
            But there is another proof: the filters a contractor must pass
            before even setting foot on the site.
          </p>

          {/* Case 2: Honeywell Aerospace (strong support) */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Success Story 2
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
              Honeywell Aerospace: Global Corporation that Trusts the
              Industrial Park Experts
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Honeywell Aerospace is a global corporation whose contractor
              selection standards run through ISN — the strictest international
              platform for safety and quality. Holding an active certification
              in this system places us within a select group of world-class
              contractors.
            </p>

            {/* Honeywell anchor data */}
            <div className="space-y-4 border-l-2 border-blue-600/30 pl-6">
              <div>
                <p className="font-semibold text-foreground">
                  40+ years of relationship
                </p>
                <p className="text-muted-foreground">
                  Our alliance of more than 40 years is backed by facts:
                  multiple successful expansions, including the key Mission 1,
                  2, and 3 projects, built end to end by our In-House
                  Construction team.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  ISN &quot;Recommended&quot; rating
                </p>
                <p className="text-muted-foreground">
                  Our In-House Construction team does not just meet the basic
                  standards — it holds the highest rating the platform allows.
                  This &quot;Recommended&quot; level attests to our absolute
                  commitment to operational excellence.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Direct technical collaboration
                </p>
                <p className="text-muted-foreground">
                  The purest reflection of this trust was the development of
                  the aerospace wind tunnel: a high-engineering project built
                  shoulder to shoulder by Honeywell&apos;s engineering teams
                  and our In-House Construction team, demonstrating
                  extraordinary technical synergy.
                </p>
              </div>
            </div>
          </div>

          {/* DHL + Subordinate context */}
          <div className="border-t border-border pt-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Today,{" "}
              <strong className="text-foreground">
                more than 30 international corporations
              </strong>{" "}
              — including DHL, Vertiv, Envista, Aqualung, and Intuitive
              Surgical, to name a few — operate successfully in Grupo
              Nelson&apos;s industrial parks. Our greatest pride is that the
              vast majority choose to expand or start new projects with us,
              reflecting a loyalty rate unmatched in the market.
            </p>
          </div>

          {/* Argumentative close */}
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              If Gulfstream did not need to look for alternatives in 40
              years, and we hold ISN&apos;s highest possible rating to work on
              Honeywell&apos;s facilities — the standard is already proven.
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our best calling card is not what we can say about ourselves, but
              the rigor of the standards our global clients demand of us. That
              corporations of this caliber trust our quality, safety, and
              compliance systems is the truest testament to Grupo
              Nelson&apos;s excellence.
            </p>
          </div>
        </div>

        {/* Right column: sticky image + CTAs */}
        <div className="hidden lg:block lg:w-[40%] xl:w-[38%]">
          <div className="sticky top-8">
            <div className="overflow-hidden rounded-sm">
              <Image
                src="/honeywell/honeywell-en-parque-industrial-de-mexicali-3.jpeg"
                alt="Honeywell industrial facility at Grupo Nelson park, Mexicali"
                width={600}
                height={1200}
                className="w-full object-cover aspect-[3/4] rounded-sm"
              />
            </div>

            {/* 2 CTAs below the image */}
            <div className="flex flex-col gap-3 mt-6">
              <Button
                asChild
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-base py-6 font-semibold"
              >
                <Link href="/contact">Request a consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full text-base py-6 font-semibold"
              >
                <Link href="/experience/operational-excellence">See full experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

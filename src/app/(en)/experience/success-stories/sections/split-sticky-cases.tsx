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
              Gulfstream Aerospace: 35 Years Trusting Nelson
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Gulfstream is Fortune 500. Aerospace manufacturing. One of the
              companies with the most demanding production standards in the
              world — corporate safety, quality, and compliance standards
              that automatically disqualify most contractors.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              After the 7.2 earthquake in 2010 that damaged their existing
              plant, Gulfstream trusted Baumex to build the largest facility
              in the city. They did not look for alternatives. They did not
              open a bidding process. They assigned directly.
            </p>

            {/* Anchor data — each fact appears ONCE */}
            <div className="space-y-4 border-l-2 border-blue-600/30 pl-6">
              <div>
                <p className="font-semibold text-foreground">
                  5 facilities built by Baumex
                </p>
                <p className="text-muted-foreground">
                  Including the 562,000 ft² facility — the largest in
                  Mexicali — built after the 2010 earthquake.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  From 5,000 to 550,000 square feet
                </p>
                <p className="text-muted-foreground">
                  Gulfstream started with a small operation at El Vigia and
                  today occupies the largest facility in the city. Multiple
                  expansions across different generations of Grupo Nelson
                  parks.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Direct assignment without bidding
                </p>
                <p className="text-muted-foreground">
                  For their most recent expansion, Gulfstream did not open
                  a bidding process. When you have been with the same
                  contractor for 35 years, the selection process is no
                  longer necessary.
                </p>
              </div>
            </div>
          </div>

          {/* Transition Gulfstream to Honeywell */}
          <p className="text-lg leading-relaxed text-muted-foreground italic">
            35 years with the same client is hard evidence to ignore.
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
              selection standards go through the ISN platform — a safety,
              documentation, and quality filter that most local contractors
              cannot pass. To even work on their facilities, you need an
              active ISN rating.
            </p>

            {/* Honeywell anchor data */}
            <div className="space-y-4 border-l-2 border-blue-600/30 pl-6">
              <div>
                <p className="font-semibold text-foreground">
                  30+ years of relationship
                </p>
                <p className="text-muted-foreground">
                  Multiple expansions — Mission 1, 2, and 3 — built by
                  Baumex over three decades of continuous relationship.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  ISN &quot;Recommended&quot; rating
                </p>
                <p className="text-muted-foreground">
                  The highest rating the platform allows. It is not just
                  that Baumex meets Honeywell&apos;s standards — it holds
                  the maximum rating of the system that measures them.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Direct technical collaboration
                </p>
                <p className="text-muted-foreground">
                  When Honeywell needed an aerospace wind tunnel, the
                  executive project was developed jointly between Honeywell
                  engineers and Baumex engineers. That only happens when the
                  level of trust is high.
                </p>
              </div>
            </div>
          </div>

          {/* DHL + Subordinate context */}
          <div className="border-t border-border pt-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              It is not just aerospace.{" "}
              <strong className="text-foreground">DHL</strong> chose Grupo
              Nelson for its logistics operation in Mexicali — and came
              back after the first project.{" "}
              <strong className="text-foreground">
                30 international corporations
              </strong>{" "}
              operate today in Grupo Nelson parks. Most return, expand, or
              start new projects.
            </p>
          </div>

          {/* Argumentative close */}
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              If Gulfstream did not need to look for alternatives in 35
              years, and Honeywell gave Baumex the highest possible
              rating — the standard is already proven.
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What these clients&apos; standards demand says more about
              Grupo Nelson than anything Nelson could say about itself.
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
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-base py-6 font-semibold"
              >
                <Link href="/contact">Request a consultation</Link>
              </Button>
              <Button
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

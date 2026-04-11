import type { Metadata } from "next";
import Header from "@/components/Header";
import { HeroMarketing1Beta } from "./sections/hero-marketing-1-beta";
import { SplitStickyCases } from "./sections/split-sticky-cases";
import { MosaicCases } from "./sections/mosaic-cases";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "The most demanding companies operating in Mexicali already chose Grupo Nelson. Gulfstream 35 years, Honeywell 30+. Long-term relationships measured in decades.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen mt-30">
      <Header lang="en" />

      <main>
        {/* Block 1: Hero with overlay, grid, CTAs + lower 2-col div */}
        <HeroMarketing1Beta />

        {/* Block 2: Split sticky — scrollable text + fixed image */}
        <SplitStickyCases />

        {/* Block 3: Mosaic — local version for success-stories territory */}
        <MosaicCases />
      </main>
    </div>
  );
}

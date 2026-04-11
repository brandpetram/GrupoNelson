import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import { Container, Separator } from "@/components/container";
import { ProductIllustration } from "@/app/(dev)/product/sections/product-illustration";
import LogoCloudClients from "./sections/logo-cloud-clients";
import { FeatureCardsResults } from "./sections/feature-cards-results";
import HowWeWork from "./sections/how-we-work";
import { InhouseCapabilities } from "./sections/inhouse-capabilities";
import { CallToAction as CtaExcellence } from "./sections/cta";
import { TestimonialExcellence } from "./sections/testimonial";
import { AuditableDocumentation } from "./sections/auditable-documentation";
import { ControlDimensions } from "./sections/control-dimensions";
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/experience/operational-excellence',
  title: 'Operational Excellence',
  description: "75 projects completed in 28 years. 1,092,745 man-hours worked with a documented safety record. Weekly site control with documented reports. Baumex, Grupo Nelson's in-house general contractor.",
})

export default function OperationalExcellencePage() {
  return (
    <div className="overflow-x-clip ">
      <div className="pb-32 bg-zinc-300/10 dark:bg-zinc-950/10">
        <Header lang="en" />
      </div>

      <main className="bg-blue-950/10 dark:bg-blue-500/20">
        {/* Hero + Site Control Table */}
        <section id="home" className="overflow-hidden  ">
          <div className="relative">
            <Container className="@4xl:px-12 px-6 py-3 text-center">
              <span className="text-muted-foreground font-mono text-sm uppercase">
                Operational Excellence
              </span>
            </Container>
            <Container asGrid>
              <div className="grid grid-cols-10 gap-px">
                <div aria-hidden className="max-sm:hidden">
                  <div data-grid-content />
                </div>

                <div className="col-span-full sm:col-span-8">
                  <div data-grid-content className="pb-16 pt-12 text-center">
                    <div className="relative mx-auto max-w-3xl text-center">
                      <h1 className="text-foreground text-balance text-5xl font-semibold tracking-tight lg:text-6xl">
                        Site control. Measurable progress. Weekly reports.
                      </h1>
                      <p className="text-muted-foreground mx-auto mb-8 mt-6 text-balance text-lg">
                        75 projects completed in 28 years. 1,092,745 man-hours
                        worked without a single serious accident. The difference
                        between promising discipline and showing the documents
                        that prove it.
                      </p>

                      <Button
                        asChild
                        size="lg"
                        className="border-transparent px-4 text-sm shadow-xl shadow-blue-900/40"
                      >
                        <Link href="/contact">Request a consultation</Link>
                      </Button>
                      <span className="text-muted-foreground mt-3 block text-center text-sm">
                        Baumex General Contractor · Grupo Nelson
                      </span>
                    </div>
                  </div>
                </div>

                <div aria-hidden className="max-sm:hidden">
                  <div data-grid-content />
                </div>
              </div>
            </Container>
            <div className="relative">
              <div className="absolute inset-0 grid grid-rows-[auto_1fr]">
                <Container asGrid >
                  <div
                    aria-hidden
                    className="col-span-full grid grid-cols-10 gap-px"
                  >
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="odd:aspect-2/1 last:aspect-2/1 aspect-square last:col-span-2 odd:col-span-2"
                      >
                        <div data-grid-content />
                      </div>
                    ))}
                  </div>
                  <div
                    aria-hidden
                    className="col-span-full grid grid-cols-10 gap-px"
                  >
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="even:aspect-2/1 aspect-square odd:rounded odd:bg-blue-200 even:col-span-2"
                      >
                        <div data-grid-content />
                      </div>
                    ))}
                  </div>
                  <div
                    aria-hidden
                    className="col-span-full grid grid-cols-10 gap-px"
                  >
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="odd:aspect-2/1 last:aspect-2/1 aspect-square last:col-span-2 odd:col-span-2"
                      >
                        <div data-grid-content />
                      </div>
                    ))}
                  </div>
                </Container>

                <Container aria-hidden >
                  <></>
                </Container>
              </div>
              <div className="-translate-y-6">
                <ProductIllustration />
              </div>
            </div>
          </div>
          <LogoCloudClients />
        </section>
        <Separator className="h-24" />

        {/* Result Cards: Safety + Track Record */}
        <FeatureCardsResults />
        <Separator className="h-24" />

        {/* How We Work: 3 Steps */}
        <HowWeWork />
        <Separator className="h-24" />

        {/* Testimonial — Gulfstream as proof of the method */}
        <TestimonialExcellence />
        <Separator className="h-24" />

        {/* In-house Capabilities + Certifications */}
        <InhouseCapabilities />

        {/* Auditable Documentation — submittals, minutes, EPGC */}
        <AuditableDocumentation />

        {/* 3 Control Dimensions — schedule, quality, safety */}
        <ControlDimensions />

        {/* CTA */}
        <CtaExcellence />
      </main>
    </div>
  );
}

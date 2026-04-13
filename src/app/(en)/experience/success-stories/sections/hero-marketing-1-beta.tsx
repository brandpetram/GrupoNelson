/**
 * HeroMarketing1Beta (English)
 *
 * English translation of the HeroMarketing1Beta component
 * for the success-stories page.
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImagenRectangulo } from "@/components/ui/brandpetram/imagen-rectangulo";
import { EmblemaGrupoNelson } from "@/components/ui/brandpetram/emblema-nelson";
import { PoligonoIcono1 } from "@/components/ui/brandpetram/poligono-icono-1";

export function HeroMarketing1Beta() {
  return (
    <div
      data-component="HeroMarketing1Beta"
      data-component-file="src/app/(en)/experience/success-stories/sections/hero-marketing-1-beta.tsx"
    >
      {/* Background image with overlay and grid */}
      <div className="mx-auto w-full">
        <ImagenRectangulo
          src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-422.jpg"
          alt="Grupo Nelson industrial facilities in Mexicali"
          className="aspect-square md:aspect-21/9 rounded-sm"
          overlayOpacity={0.5}
          gridConfig={{
            strokeColor: "stroke-white/40",
            highlightColor: "fill-white/10",
            showHighlights: true,
            gridSize: 100,
            fadePosition: "center",
            fadeRadius: "24rem",
            animate: {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1.2, delay: 1.2, ease: "easeOut" },
            },
          }}
        />
      </div>

      {/* Overlapping text box with CTAs above the H1 */}
      <div className="relative z-10 -mt-32 md:-mt-24 xl:-mt-80">
        <div className="rounded-2xl bg-background/80 px-6 md:px-12 1200:mx-[10rem] 1920:mx-[20rem] py-12 md:py-16 lg:py-20">
          {/* CTAs above the title */}
          <div className="">
            <div className="flex flex-wrap items-center gap-8 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-base px-8 py-6 font-semibold"
              >
                <Link href="/contact">Get started</Link>
              </Button>
              <Link
                href="/experience/operational-excellence"
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-blue-600 transition-colors py-6"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none tracking-tight text-foreground">
              The most demanding companies operating in Mexicali already chose
              Grupo Nelson — and most of them stayed.
            </h1>
          </div>
        </div>
      </div>

      {/* Lower div — 2 columns: SVG left + H2 and P right */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-[5rem] ">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start px-4 md:px-12 lg:px-20 xl:px-28">
          {/* Left column: SVG / Emblem */}
          <div className="flex-shrink-0">
            <PoligonoIcono1
              icon={
                <EmblemaGrupoNelson className="w-full h-full" />
              }
              backgroundColor="bg-blue-500 to-blue-600 bg-linear-to-br"
              iconColor="text-white"
              iconSize="size-16 md:size-24 lg:size-28"
              hoverEffect="rotate"
              className="rounded-sm p-5 md:p-7 lg:p-9"
            />
          </div>

          {/* Right column: H2 + P */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground">
              What these clients&apos; standards demand says more about
              Grupo Nelson than anything Nelson could say about itself.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
              These success stories are not edited testimonials — they are
              verifiable facts with names, numbers, and decades of history.
              Gulfstream has been with us for 35 years. Honeywell for 30+.
              Long-term relationships where clients expand and start new
              projects.
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-base py-6 font-semibold"
              >
                <Link href="/contact">Request a consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

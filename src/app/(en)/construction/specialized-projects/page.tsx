import Header from "@/components/Header";
import { CuadritosLluviaDos } from "@/components/ui/brandpetram/cuadritos-lluvia-dos";
import { GridOverlay } from "@/components/ui/brandpetram/grid";
import {
  SplitSimpleBP,
  splitParagraphClass,
} from "@/components/brandpetram/split-simple-bp";
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/specialized-projects',
  title: 'Specialized Projects',
  description: 'Specialized industrial projects in Mexicali: 95 m column-free bridge, 52,200 m² facility with BRB seismic systems, 3,000 HP wind tunnel, millimeter-precision foundations.',
})

export default function SpecializedProjectsPage() {
  return (
    <div className="overflow-hidden">
      <Header variant="dark" lang="en" />

      <main>
        {/* ── Hero ── */}
        <div
          className="relative bg-gray-800 overflow-hidden pb-72 xl:pb-96"
          style={{
            backgroundImage:
              'url("/contructora-mexicali/puente-skyworks.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
          <GridOverlay
            strokeColor="stroke-white/15"
            gridSize={100}
            showHighlights={true}
            highlightColor="fill-white/5"
            fadePosition="center"
            fadeRadius="24rem"
          />

          {/* Dot pattern */}
          <div
            className="hidden sm:block sm:absolute sm:inset-0"
            aria-hidden="true"
          >
            <svg
              className="absolute bottom-[10rem] right-0 translate-x-1/2 text-foreground/10 xl:translate-x-0"
              width={364}
              height={384}
              viewBox="0 0 364 384"
              fill="none"
            >
              <defs>
                <pattern
                  id="pe-dot-pattern"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={364}
                height={384}
                fill="url(#pe-dot-pattern)"
              />
            </svg>
          </div>

          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="mt-32 sm:mt-40 1200:mt-48">
              <div className="mx-auto md:max-w-5xl 1024:max-w-3xl 1200:max-w-5xl 1280:max-w-6xl 1536:max-w-7xl 1728:max-w-400 1920:max-w-440">
                <div className="1200:grid 1200:grid-cols-12 1200:gap-8">
                  <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto 1200:col-span-6 1200:text-left 1200:flex 1200:items-center">
                    <div>
                      <span className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2">
                        <span className="px-3 py-0.5 text-white text-xs md:text-sm font-semibold leading-5 uppercase tracking-wide bg-linear-to-br from-blue-600 to-blue-700 rounded-full">
                          Specialized Projects
                        </span>
                        <span className="ml-4 text-xs md:text-sm">
                          Problems solved
                        </span>
                      </span>
                      <h1 className="mt-4 text-3xl 360:text-[2.5rem] 393:text-[3rem] 430:text-[3.5rem] 768:text-[4rem] 834:text-[4.5rem] 1024:text-[5rem] 1200:text-[3.5rem] 1280:text-[4rem] 1366:text-[4.5rem] 1440:text-[5rem] 1536:text-[4.5rem] 1728:text-[5rem] 1920:text-[5.5rem] tracking-tight font-extrabold text-white sm:mt-5 leading-none 1200:mt-6">
                        Four challenges that had no standard solution
                      </h1>
                      <p className="mt-3 text-sm 360:text-sm 393:text-[1rem] 430:text-[1.1rem] 768:text-xl 834:text-xl 1024:text-[1.5rem] 1200:text-[1.2rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-gray-300 sm:mt-5">
                        Each one started with a requirement that didn&apos;t exist
                        in any catalog. It was researched, designed, and built.
                        Today all four are operational.
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center 1200:justify-start">
                        <div className="rounded-xs shadow">
                          <a
                            href="/contact"
                            className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xs text-white bg-linear-to-br from-blue-600 to-blue-700 hover:opacity-90 md:py-4 md:text-lg md:px-10"
                          >
                            Contact Us
                          </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <a
                            href="/construction/portfolio"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xs text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                          >
                            View portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative squares */}
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-bottom-right">
            <CuadritosLluviaDos />
          </div>
        </div>

        {/* ── Case 1: Skyworks Bridge ── */}
        <div className="pt-16 md:pt-24" />
        <SplitSimpleBP
          tagline="Semiconductors"
          title="A 95 m column-free bridge to transport microchips"
          imagePosition="left"
          imageSrc="/contructora-mexicali/puente-skyworks-2.jpg"
          imageAlt="Skyworks Bridge — 95 meters with no intermediate columns"
          showCuadritos
          cuadritosPosition="right"
        >
          <p className={splitParagraphClass}>
            <strong>Skyworks</strong> needed to move microchips between two
            semiconductor plants separated by a boulevard and a federal CNA
            drainage channel. The chips travel in golf carts with{" "}
            <strong>temperature-controlled</strong> conditions — the connection
            had to be an enclosed bridge, with no intermediate columns, over an
            active roadway.
          </p>
          <p className={splitParagraphClass}>
            The bridge was poured <strong>in a single day</strong>, with two
            concrete pumps, with no construction joints — a single 95-meter
            piece. The foundation goes down to <strong>18 meters</strong> deep
            in collapsible sandy soil, seismic zone 4. Permits involved{" "}
            <strong>three levels of government</strong>: CNA (federal), state
            government, and municipality. The roadway was closed only on a
            Sunday. Structure assembly took two consecutive Sundays, with two
            months of prior logistics coordination.
          </p>
          <p className={splitParagraphClass}>
            Today the microchips cross the boulevard in temperature-controlled
            golf carts. The bridge is operational.
          </p>
        </SplitSimpleBP>

        <div className="h-20 768:h-24 1200:h-32" />

        {/* ── Case 2: Gulfstream ── */}
        <SplitSimpleBP
          tagline="Aerospace"
          title="A 7.2-magnitude earthquake defined how the largest building in Mexicali was built"
          imagePosition="right"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-276.jpg"
          imageAlt="Gulfstream facility — 52,200 m², the largest in Mexicali"
          showCuadritos
          cuadritosPosition="right"
          cuadritosInvert
        >
          <p className={splitParagraphClass}>
            In <strong>2010</strong>, a{" "}
            <strong>magnitude 7.2</strong> earthquake damaged{" "}
            <strong>Gulfstream</strong>&apos;s existing plant in Mexicali and
            caused a two-week production shutdown. When Gulfstream decided to
            build its new <strong>52,200 m²</strong> facility, the requirement
            was clear: an earthquake must never stop the operation again.
          </p>
          <p className={splitParagraphClass}>
            Baumex proposed{" "}
            <strong>BRB (Buckling-Restrained Braces)</strong> seismic systems —
            energy dissipators at strategic structural points. It was the first
            time Baumex implemented them. Technology used in Mexico City and
            Japan, applied for the first time at this scale in a Baumex project.
            The proposal came from Baumex, not the client.
          </p>
          <p className={splitParagraphClass}>
            Today it is <strong>the largest industrial building in Mexicali</strong>,
            with <strong>13,500 m² of offices</strong> — unprecedented for an
            industrial facility in the region. It is operational.
          </p>
        </SplitSimpleBP>

        <div className="h-20 768:h-24 1200:h-32" />

        {/* ── Case 3: Honeywell Wind Tunnel ── */}
        <SplitSimpleBP
          tagline="Aerospace"
          title="A wind tunnel with $30,000 USD soundproof doors"
          imagePosition="left"
          imageSrc="/fotos-dron/CONSTRUCTORA BAUMEX/HONEYWELL/nave-industrial-honeywell-1.JPG"
          imageAlt="Honeywell facility — aerospace wind tunnel"
          showCuadritos
          cuadritosPosition="right"
        >
          <p className={splitParagraphClass}>
            <strong>Honeywell</strong> needed to simulate flight conditions —
            air speed and volume — for aerospace component testing. The
            requirement had no precedent in Baumex projects.
          </p>
          <p className={splitParagraphClass}>
            The building stands <strong>20 meters tall</strong> and houses a{" "}
            <strong>3,000 HP</strong> blower powered by 4.16 KV high voltage.
            The <strong>2.5 x 2.5 meter</strong> ducts are fabricated with
            welded structural plate — not sheet metal, because the air force
            would destroy it. The soundproof armored doors cost{" "}
            <strong>~$30,000 USD per pair</strong>. The foundation and structure
            were calculated to withstand extreme vibrations from continuous
            operation.
          </p>
          <p className={splitParagraphClass}>
            The executive project was developed jointly between{" "}
            <strong>Honeywell</strong> engineers and{" "}
            <strong>Baumex</strong> engineers. Construction took 8 months plus
            additional months of testing by Honeywell. Today the tunnel is
            operational and aerospace components are tested under simulated
            flight conditions.
          </p>
        </SplitSimpleBP>

        <div className="h-20 768:h-24 1200:h-32" />

        {/* ── Case 4: Deacero ── */}
        <SplitSimpleBP
          tagline="Steel"
          title="50,000 m² where a single centimeter of error ruins millions in equipment"
          imagePosition="right"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
          imageAlt="Deacero plant — millimeter-precision foundations"
          showCuadritos
          cuadritosPosition="right"
          cuadritosInvert
        >
          <p className={splitParagraphClass}>
            <strong>Deacero</strong> needed a steel recycling plant with
            large-scale industrial cranes. The challenge: hundreds of bases and
            embedded anchors with{" "}
            <strong>millimeter-level tolerance</strong> for mounting imported
            equipment. If the anchors don&apos;t fit exactly, the project fails.
          </p>
          <p className={splitParagraphClass}>
            <strong>5 hectares of yards</strong> (50,000 m²) with deep
            foundations at <strong>15 meters</strong> using reinforced concrete
            piles. Precision topographic control at every anchor point. The
            completed work delivery had to match millimetrically with the
            equipment Deacero installed afterward — cranes, conveyor belts,
            and process lines.
          </p>
          <p className={splitParagraphClass}>
            Equipment installed. Plant operational.
          </p>
        </SplitSimpleBP>

        {/* ── Closing + CTA ── */}
        <div className="px-10 1200:px-0 lg:max-w-5xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto py-20 md:py-28 text-center">
          <p className="text-balance text-muted-foreground text-[1rem] 768:text-[1.125rem] 1024:text-[1.25rem] 1200:text-[1.25rem] 1366:text-[1.375rem] 1536:text-[1.5rem] 1728:text-[1.625rem] 1920:text-[1.75rem] leading-relaxed tracking-wide max-w-4xl mx-auto">
            Each of these projects started with a new problem. It was
            researched, designed, and built. What&apos;s yours?
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xs bg-blue-600 px-8 py-3.5 text-[0.9375rem] 1200:text-[1rem] 1536:text-[1.0625rem] font-semibold text-white shadow hover:bg-blue-700 transition-colors"
            >
              Tell us what your operation needs
            </a>
            <a
              href="/construction/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xs px-8 py-3.5 text-[0.9375rem] 1200:text-[1rem] 1536:text-[1.0625rem] font-semibold text-foreground hover:bg-accent transition-colors"
            >
              View full portfolio
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

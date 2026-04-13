import Header from "@/components/Header";
import { OffsetWithFeatureListBP } from "@/components/brandpetram/offset-with-feature-list-bp";
import {
  SplitSimpleBP,
  splitParagraphClass,
} from "@/components/brandpetram/split-simple-bp";
import { EditorialCascadaBeta } from "@/components/brandpetram/editorial-cascada-beta";
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/about/difference',
  title: 'The Nelson Difference',
  description: 'What sets Grupo Nelson apart: direct operation by the founding family, built-to-suit industrial construction, and first-class industrial parks in Mexicali.',
})

export default function DifferencePage() {
  return (
    <div className="min-h-[200vh] overflow-x-clip">
      <Header lang="en" />

      <main>
        {/* ── Divider line with spacing ── */}
        <div className="pt-32 md:pt-40 pb-6 md:pb-8">
          <hr className="border-border w-11/12 mx-auto" />
        </div>

        {/* ── Editorial Cascada ── */}
        <div>
          <EditorialCascadaBeta
            lang="en"
            titulo="The Nelson Difference: pioneers of border manufacturing since 1965, direct operation by the founding family, and in-house construction."
            parrafo="Grupo Nelson established the first maquiladora in Mexicali in 1965. Three generations later, the founding family still operates every park, every contract, and every construction project. Very few industrial developers in this city combine 60 years of permanence, operationally involved owners, and an in-house construction firm with 28 years of experience. That translates to less risk, less friction, and more speed for your project."
            stats={[
              { titulo: 'Pioneers since 1965', descripcion: 'Established the first maquiladora in Mexicali' },
              { titulo: 'Owners operating directly', descripcion: 'They negotiate, decide, and respond personally' },
              { titulo: 'In-house construction', descripcion: 'Baumex: 28 years and 75 projects with our own team' },
            ]}
            destacado="Long-term relationships — the majority of clients expand or start new projects decade after decade."
            ctaPrimarioTexto="Request a Consultation"
            ctaPrimarioHref="/contact"
            ctaSecundarioTexto="See Our Track Record"
            ctaSecundarioHref="/about/track-record"
          />
        </div>

        {/* ── Banner divider ── */}
        <div className="px-10 1200:px-0 lg:max-w-5xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto pb-20 md:pb-32">
          <h1 className="text-balance text-foreground px-7 font-light text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] leading-relaxed">
            Real permanence, direct access to the owners, and{" "}
            <span className="font-bold text-blue-600 uppercase">
              in-house construction
            </span>{" "}
            — three things your project needs and very few in Mexicali
            can offer together.
          </h1>
        </div>

        {/* ── Differentiator 1: Permanence ── */}
        <SplitSimpleBP
          tagline="60+ years"
          title="They established the first maquiladora in Mexicali — and they are still here"
          imagePosition="left"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
          imageAlt="Nelson Industrial Park in Mexicali — 60 years of history"
          showCuadritos
          cuadritosPosition="right"
        >
          <p className={splitParagraphClass}>
            In <strong>1965</strong>, Rodolfo Nelson Sr. established the first
            maquiladora in <strong>Mexicali</strong>. The modern industrial
            parks of the region did not exist. The manufacturing ecosystem
            that today houses{" "}
            <strong>30 international corporations</strong> did not exist. Grupo
            Nelson was here before any of that — and is still here.
          </p>
          <p className={splitParagraphClass}>
            <strong>Gulfstream</strong> has been working with the family for{" "}
            <strong>35 years</strong>.{" "}
            <strong>Honeywell</strong>, 30. They are not going to disappear
            in the middle of your 15-year lease.
          </p>
        </SplitSimpleBP>

        <div className="h-20 768:h-24 1200:h-32" />

        {/* ── Differentiator 2: Direct ownership ── */}
        <SplitSimpleBP
          tagline="Direct ownership"
          title="Talk to the owners, not regional managers"
          imagePosition="right"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg"
          imageAlt="Nelson family — direct operation in Mexicali"
          showCuadritos
          cuadritosPosition="right"
          cuadritosInvert
        >
          <p className={splitParagraphClass}>
            The founding family of Grupo Nelson is not on an honorary board
            — they hold active operational roles. When you need to change a
            contract clause, you speak with the person who can decide on the
            spot. Not with a regional manager who rotates every two years.
          </p>
          <p className={splitParagraphClass}>
            That translates to <strong>speed of decision</strong>,{" "}
            <strong>personal accountability</strong>, and{" "}
            <strong>continuity</strong>. Contracts of{" "}
            <strong>10 to 15 years</strong> negotiated directly with
            decision-makers.
          </p>
        </SplitSimpleBP>

        <div className="h-16 768:h-20 1200:h-24" />

        {/* ── Differentiator 3: In-house construction ── */}
        <SplitSimpleBP
          tagline="In-house construction"
          title="Baumex: one contract, one point of responsibility, from land to turnkey"
          imagePosition="left"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
          imageAlt="Baumex construction — industrial buildings in Mexicali"
        >
          <p className={splitParagraphClass}>
            If you need a building that does not exist in inventory,{" "}
            <strong>Baumex</strong> designs and builds it. It is Grupo
            Nelson&apos;s own construction firm — not a subcontracted third party.
            A single contract covers design, permits, construction, and
            delivery.
          </p>
          <p className={splitParagraphClass}>
            <strong>28 years</strong> of operation.{" "}
            <strong>75 projects</strong> completed. The same group that
            manages the park where you will operate is the one that builds
            your facility.
          </p>
        </SplitSimpleBP>

        {/* ── Validation block ── */}
        <OffsetWithFeatureListBP lang="en" />

        {/* ── Closing + CTA ── */}
        <div className="px-10 1200:px-0 lg:max-w-5xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto py-20 md:py-28 text-center">
          <p className="text-balance text-muted-foreground text-[1rem] 768:text-[1.125rem] 1024:text-[1.25rem] 1200:text-[1.25rem] 1366:text-[1.375rem] 1536:text-[1.5rem] 1728:text-[1.625rem] 1920:text-[1.75rem] leading-relaxed tracking-wide max-w-4xl mx-auto">
            Less risk. Less friction. More speed. That is what 60 years of
            permanence, owners operating directly, and in-house construction
            mean — working together for your project.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xs bg-blue-600 px-8 py-3.5 text-[0.9375rem] 1200:text-[1rem] 1536:text-[1.0625rem] font-semibold text-white shadow hover:bg-blue-700 transition-colors"
            >
              Request a Consultation
            </a>
            <a
              href="/about/track-record"
              className="inline-flex items-center justify-center gap-2 rounded-xs px-8 py-3.5 text-[0.9375rem] 1200:text-[1rem] 1536:text-[1.0625rem] font-semibold text-foreground hover:bg-accent transition-colors"
            >
              See Our Track Record
            </a>
          </div>
        </div>

        {/* END COMMERCIAL COPY */}
      </main>
    </div>
  );
}

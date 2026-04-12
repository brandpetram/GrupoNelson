import Header from '@/components/Header'
import HeroMotionPlus from '@/components/brandpetram/hero-motionplus'
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  FireIcon,
} from '@heroicons/react/24/outline'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/experience/standards-certifications',
  title: 'Standards & Certifications',
  description: 'Baumex meets three types of requirements: corporate (ISN Recommended by Honeywell), engineering (IBC, FM Global, BRB, NFPA, LEED), and regulatory (NOM-009, NOM-027, DC-3). Each standard demonstrated in real industrial facilities in Mexicali.',
})

const engineeringStandards = [
  {
    name: 'International Building Code',
    description:
      'Grupo Nelson facilities are designed under IBC — not under the Baja California building code. For an American buyer: your facility in Mexicali is designed under the same construction standards as across the border.',
    icon: GlobeAltIcon,
  },
  {
    name: 'FM Global: certified building envelope',
    description:
      'The 550,000 ft² Gulfstream facility holds FM Global certification on walls, TPO roofing, steel structure, and fire suppression system — the most demanding asset protection standard in the world. Result: significantly lower insurance premiums for the tenant.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'BRB seismic engineering',
    description:
      'Baumex implemented Buckling-Restrained Braces for the first time in industrial facilities in Mexicali — technology proven in Mexico City and Japan, applied in seismic zone 4 on the 550,000 ft² Gulfstream facility. It is not a certification: it is structural engineering that protects the continuity of your operation.',
    icon: BoltIcon,
  },
  {
    name: 'NFPA: fire protection',
    description:
      'Nelson Industrial Park II operates with a centralized system under NFPA and FM standards — 360,000-gallon tank, sprinklers, pumps, and detection. Protection does not depend solely on your facility: it is park-level infrastructure.',
    icon: FireIcon,
  },
]

export default function StandardsCertificationsPage() {
  return (
    <div className="min-h-[200vh]">
      <Header lang="en" />

      <main>
        {/* HERO */}
        <div className="pt-20 md:pt-30">
        <HeroMotionPlus
          lang="en"
          badge="Standards · Certifications · Compliance"
          headlineTop="Three types of requirements."
          headlineAccent="Each one demonstrated in a real project."
          subtitle="Your project comes with three types of requirements: your corporate standards, your industry and insurer standards, and regulatory compliance. Baumex has met all three — in real industrial facilities in Mexicali."
          primaryButtonText="Request a consultation"
          primaryButtonHref="/contact"
          secondaryButtonText="See the standards"
          secondaryButtonHref="#engineering-standards"
          metrics={[
            { value: 'ISN', label: 'Recommended' },
            { value: 'LEED', label: 'Environmental' },
            { value: 'FM Global', label: 'Asset protection' },
            { value: 'IBC', label: 'International' },
            { value: 'NFPA', label: 'Fire protection' },
          ]}
        />
        </div>

        {/* LAYER 1 */}
        <div className="mx-auto px-8 md:px-12 pt-16 pb-16 max-w-4xl">

          {/* LAYER 1 — Corporate certifications */}
          <div className="mb-8" id="corporate-certifications">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Corporate requirements
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              What your corporate office requires to approve the contractor
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Before your project begins, your corporate office needs to
              validate that the contractor meets their safety, documentation,
              and quality standards. These certifications already exist.
            </p>

            {/* ISN */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4">
                Honeywell rates Baumex as &quot;Recommended&quot; on
                ISNetworld
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                ISNetworld is the platform Fortune 500 companies use to
                evaluate and approve contractors. Without an active rating,
                most local contractors do not pass the due diligence phase.
              </p>
              <p className="text-lg leading-relaxed">
                Baumex holds a &quot;Recommended&quot; rating — the highest
                on the platform — active for Honeywell Aero-Mexicali and
                Honeywell Mexico-Corporate. If your corporate office
                requires ISN validation, the precedent already exists and
                is verifiable.
              </p>
            </div>

            {/* LEED */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4">
                LEED Certification — Gulfstream 550,000 ft²
              </h3>
              <p className="text-lg leading-relaxed">
                The 550,000 ft² Gulfstream facility is in the LEED
                certification process — verifiable environmental compliance
                that facilitates your corporate ESG approval. The complete
                process — solar energy, HVAC efficiency, water recovery —
                is detailed in{' '}
                <a
                  href="/construction/leed"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  the dedicated LEED section
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* LAYER 2 — Engineering and construction standards */}
        <div id="engineering-standards" style={{ scrollMarginTop: '100px' }} className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-400">
                Engineering standards
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                What your industry and insurer require for the building
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Beyond the legal minimum, the most demanding clients require
                construction, asset protection, and engineering standards
                that ensure building integrity and operational continuity.
                None of these are mandatory under Mexican law — they are
                superior standards that Baumex already meets.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {engineeringStandards.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-white">
                      <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                        <feature.icon
                          aria-hidden="true"
                          className="size-6 text-white"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-400">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* LAYER 3 + CTA */}
        <div className="mx-auto px-8 md:px-12 pt-16 pb-32 max-w-4xl">

          {/* LAYER 3 — Documented regulatory compliance */}
          <div className="mb-24">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Regulatory compliance
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              What the regulations require — documented with verifiable rigor
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Every contractor should comply with Mexican safety regulations.
              The difference is how it is documented: daily permits,
              quantitative risk matrices, and records that withstand a
              corporate audit.
            </p>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              {/* NOM-009 */}
              <div>
                <h3 className="text-lg font-bold mb-2">NOM-009-STPS-2011</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Work at heights
                </p>
                <p className="text-base leading-relaxed">
                  Daily work permits with blood pressure checks before
                  ascending, fall prevention checklist, tiered signatures by
                  supervisor and safety coordinator. Each permit is a
                  verifiable record.
                </p>
              </div>

              {/* NOM-027 */}
              <div>
                <h3 className="text-lg font-bold mb-2">NOM-027-STPS-2008</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Hot work
                </p>
                <p className="text-base leading-relaxed">
                  Specialized permits for welding and torch cutting: fire
                  extinguishers in position, combustibles removed to 10
                  meters, fire watch present throughout the entire
                  operation.
                </p>
              </div>

              {/* DC-3 */}
              <div>
                <h3 className="text-lg font-bold mb-2">DC-3</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Certified labor training
                </p>
                <p className="text-base leading-relaxed">
                  All Baumex personnel hold DC-3 labor skills certification.
                  It is not a training policy: it is verifiable certification
                  of every worker in the field.
                </p>
              </div>

              {/* OSHA */}
              <div>
                <h3 className="text-lg font-bold mb-2">OSHA Standards</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  U.S.-comparable safety
                </p>
                <p className="text-base leading-relaxed">
                  Baumex safety manuals are based on OSHA standards in
                  addition to Mexican regulations. For an American buyer:
                  on-site safety meets standards comparable to those in your
                  home country.
                </p>
              </div>
            </div>

            {/* EPGC */}
            <div>
              <h3 className="text-lg font-bold mb-2">
                Independent validation: EPGC
              </h3>
              <p className="text-base leading-relaxed">
                Quality control does not depend solely on Baumex. Independent
                laboratories such as EPGC (Especialistas en Geotecnia y
                Concretos) verify earthwork compaction and foundation quality
                on every project. A third party validates it.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
              Build under the standards your project requires
            </h2>
            <p className="text-lg leading-relaxed">
              Corporate certifications, engineering standards, documented
              regulatory compliance — each one resolved in real projects. If
              your operation has specific compliance requirements, there is
              precedent.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

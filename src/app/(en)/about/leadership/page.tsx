import Header from '@/components/Header'
import { MosaicoLiderazgo } from '@/components/brandpetram/mosaico-liderazgo'
import type { MosaicoItem } from '@/components/brandpetram/mosaico-liderazgo'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/about/leadership',
  title: 'Leadership',
  description: 'Four generations leading the development of industrial parks and built-to-suit industrial buildings in Mexicali. The founding family operates every project directly.',
})

const team = [
  {
    name: 'Commercial Director',
    role: 'Business development and client relations',
    description:
      'Receives your project, negotiates terms, and provides commercial follow-through. Key decisions are made in executive council with the other directors — not by an account executive without authority.',
  },
  {
    name: 'Construction Director',
    role: 'Baumex — built-to-suit construction',
    description:
      'Baumex, the in-house construction firm, executes every project from start to finish. Engineering and budget decisions are validated in executive council — your project does not depend on a single project manager.',
  },
  {
    name: 'Administrative Director',
    role: 'Financial and contractual operations',
    description:
      'Manages the financial and contractual operations of the group. Your contract terms and operational adjustments are resolved in executive council — with closing authority and decades of continuity.',
  },
  {
    name: 'Client Services Director',
    role: 'Park infrastructure, services, and maintenance',
    description:
      'Keeps the park infrastructure running: services, maintenance, improvement projects. Operational issues escalate to the executive council when needed — not to a ticketing department.',
  },
]

const stats = [
  { value: '60+', label: 'years of the family operating' },
  { value: '4.5M+', label: 'sq ft developed' },
  { value: '4', label: 'active generations' },
]

const results = [
  {
    value: '35+',
    label: 'years with Gulfstream',
    detail:
      'Fortune 500 aerospace company. Direct assignment — no bidding process — for the fifth expansion. Trust with the owners eliminated the formal process.',
  },
  {
    value: '3+',
    label: 'decades with Honeywell',
    detail:
      'Honeywell Aerospace has operated with Grupo Nelson for over 3 decades. Multiple expansions with the same executive team on the other side.',
  },
  {
    value: '35+',
    label: 'years with our longest-standing clients',
    detail:
      'Long-term relationships measured in decades, not contracts. The direct relationship with the owners produces a level of service that justifies staying.',
  },
]

const mosaicoContent: MosaicoItem[] = [
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-1.jpeg",
    alt: "Grupo Nelson industrial building in Mexicali",
    aspect: "square",
  },
  {
    type: "card",
    title: "The founding family still operates directly",
    description:
      "Since 1965, the owners of Grupo Nelson handle every project personally. No corporate layers.",
    href: "/about/leadership",
    bg: "bg-blue-700",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-3.jpeg",
    alt: "Honeywell at Mexicali industrial park",
    aspect: "tall",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-5.jpeg",
    alt: "Nelson Industrial Park Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-2.jpeg",
    alt: "Industrial buildings in Mexicali",
    aspect: "tall",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-6.jpeg",
    alt: "Honeywell Mexicali",
    aspect: "square",
  },
  {
    type: "card",
    title: "Long-term relationships",
    description:
      "Gulfstream has been here for over 35 years. Honeywell for over 3 decades. The direct relationship with the owners produces loyalty measured in decades.",
    href: "/about/leadership",
    bg: "bg-indigo-600",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg",
    alt: "Industrial building Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg",
    alt: "Industrial building construction Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-9.jpeg",
    alt: "Mexicali industrial park",
    aspect: "square",
  },
  {
    type: "card",
    title: "Four generations, one family operating",
    description:
      "The person who negotiates your contract is the same one who signs it. No corporate layers, no executive rotation.",
    href: "/about/leadership",
    bg: "bg-sky-700",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-10.jpeg",
    alt: "Industrial building in Mexicali",
    aspect: "tall",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-4.jpeg",
    alt: "Industrial park in Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-12.jpeg",
    alt: "Honeywell industrial building Mexicali",
    aspect: "tall",
  },
  {
    type: "card",
    title: "30 years leading construction",
    description:
      "Baumex was founded in 1997 and has operated for nearly 30 years under the same leadership. Continuity extends beyond the family.",
    href: "/about/leadership",
    bg: "bg-blue-900",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-7.jpeg",
    alt: "Grupo Nelson industrial building",
    aspect: "square",
  },
]

export default function LeadershipPage() {
  return (
    <div className="min-h-screen">
      <Header lang="en" />

      <main>
        <div className="lg:w-10/12 lg:mx-auto">

        {/* ── BLOCK 1: HERO ── */}
        <section className="relative isolate overflow-hidden px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-24 md:pb-32">
          {/* Background SVG grid */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full stroke-muted-foreground/10"
          >
            <defs>
              <pattern
                id="liderazgo-grid-pattern"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M0.5 0V200M200 0.5L0 0.499983" />
              </pattern>
            </defs>
            <rect fill="url(#liderazgo-grid-pattern)" width="100%" height="100%" strokeWidth={0} />
          </svg>

          {/* Decorative color cloud */}
          <div
            aria-hidden="true"
            className="absolute -top-40 right-0 -z-10 transform-gpu blur-3xl sm:right-1/4 sm:top-10"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#80b5ff] to-[#8989fc] opacity-10"
            />
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/70 mb-8">
            Leadership
          </p>

          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight max-w-5xl mb-12">
            The person who negotiates your contract is the one who decides, who supervises, and who will still be there in 15&nbsp;years
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
            The family that established the first maquiladora in Mexicali in 1965 is still
            operating directly — 60 years later. There are no corporate layers between your
            project and the person with the authority to approve it.
          </p>
        </section>

        {/* ── STATS BAR ── */}
        <section className="border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`px-6 md:px-12 lg:px-20 py-10 md:py-14 ${i < 3 ? 'border-r border-border/50 max-md:[&:nth-child(2)]:border-r-0 max-md:[&:nth-child(1)]:border-b max-md:[&:nth-child(2)]:border-b max-md:border-border/50' : ''}`}
              >
                <p className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOCK 2: EXECUTIVE TEAM ── */}
        <section className="border-t border-border/50 px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 mb-16 md:mb-24">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/70 mb-4">
                Executive team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                With name, role, and authority
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
                In a 10- to 15-year contract, the person on the other side of the table is not
                a minor detail. With Grupo Nelson, that person is the owner.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {team.map((member, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-[1fr_2fr] gap-4 md:gap-20 py-10 md:py-12 border-t border-border/30 first:border-t-border/50"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary/80">{member.role}</p>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground/80 max-w-xl">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOCK 3: CONTINUITY ── */}
        <section className="relative border-t border-border/50 bg-muted/20">
          <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/70 mb-12">
              Continuity
            </p>

            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight max-w-4xl mb-12">
              Our construction firm was founded in 1997 and has operated for nearly 30 years under the same leadership. The person who will lead your project knows every square meter that has been built here.
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
              <p className="text-base leading-relaxed text-muted-foreground/80">
                Leadership continuity is not limited to the family. Baumex was co-founded
                alongside the second generation — it is not a rotating contractor or a
                recently assigned manager.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground/80">
                And continuity looks forward: the fourth generation is already working for
                the group. When you sign a 15-year lease, the people on the other side will
                be there when it ends — and when it renews.
              </p>
            </div>
          </div>
        </section>

        {/* ── BLOCK 4: RESULTS ── */}
        <section className="border-t border-border/50 px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/70 mb-8">
              Results
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
              Gulfstream has been with the same owners for over 35 years — and stopped bidding
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              For its fifth expansion, Gulfstream did not open a selection process. It assigned
              directly to Grupo Nelson. After more than 35 years with the same people, the
              process was no longer necessary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {results.map((result, i) => (
              <div
                key={i}
                className={`py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-border/30' : ''}`}
              >
                <p className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-2">
                  {result.value}
                </p>
                <p className="text-sm font-medium text-primary/80 mb-4">{result.label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground/70">
                  {result.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOCK 5: CTA ── */}
        <section className="border-t border-border/50 bg-muted/20">
          <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
              Meet the team that will handle your project
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto mb-10">
              No corporate layers. No manager rotation. The person who negotiates your
              contract is the same one who signs it and the same one who will answer your
              call in 10 years.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-primary/90 hover:gap-4"
            >
              Request a Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </section>

        </div>

        <MosaicoLiderazgo content={mosaicoContent} lang="en" />
      </main>
    </div>
  )
}

import Header from '@/components/Header'
import { LogosGridBP2 } from '@/components/brandpetram/logos-grid-bp-2'
import { StatsGridBPGamma } from '@/components/brandpetram/stats-grid-bp-gamma'
import { EditorialCascadaBP } from '@/components/brandpetram/editorial-cascada-bp'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/about/track-record',
  title: 'Track Record',
  description: 'Over 60 years developing industrial parks and built-to-suit industrial buildings in Mexicali. Fortune 500 companies trust Grupo Nelson.',
})

export default function TrackRecordPage() {
  return (
    <div className="min-h-[200vh] overflow-x-clip">
      <Header lang="en" />

      <main>
        {/* ── Logos Grid — Page hero ── */}
        <div className="pt-20">
          <LogosGridBP2
            tagline="Track Record"
            title="33 international corporations trust Grupo Nelson"
            paragraph={
              <>
                From <strong>Gulfstream</strong> to <strong>DHL</strong>, the
                world&apos;s most demanding companies operate in Grupo Nelson parks.
                Each one went through its own due diligence process. Each one signed.
              </>
            }
          />
        </div>

        <StatsGridBPGamma
          stats={[
            { value: '60+', label: 'years of track record\nin the industry' },
            { value: '4M ft²', label: 'square feet\ndeveloped' },
            { value: '30', label: 'international\ncorporations' },
            { value: '5', label: 'industrial parks\nin Mexicali' },
            { value: '3', label: 'generations\nof the Nelson family' },
            { value: '80%', label: 'clients who\nrenew their lease' },
            { value: '75+', label: 'projects built\nby Baumex' },
            { value: '4', label: 'Fortune 500 companies\noperating here' },
          ]}
          editorial="Three generations building the industrial infrastructure that drives Mexicali."
          youtubeLabel="Watch on YouTube"
        />

        {/* ── Editorial text + cascading cubes ── */}
        <EditorialCascadaBP
          titulo="From the first maquiladora in Mexicali to the city's largest industrial building."
          parrafo="In 1965, Rodolfo Nelson Sr. established the first maquiladora in Mexicali. There were no industrial parks — there was a vision. Three generations later, that vision became five parks, four million square feet developed, and the trust of thirty international corporations that chose Mexicali because Grupo Nelson had already built the infrastructure they needed."
          ctaTitulo="Looking for Industrial Parks in Mexicali?"
          ctaSubtitulo="Sixty years of experience back every project."
          ctaPrimarioTexto="Contact Us"
          ctaPrimarioHref="/contact"
          ctaSecundarioTexto="About Grupo Nelson"
          ctaSecundarioHref="/about/difference"
        />
      </main>
    </div>
  )
}

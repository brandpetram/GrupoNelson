import Header from '@/components/Header'
import Link from 'next/link'
import { Building2 } from 'lucide-react'
import { getIndustrialParks } from '@/data/parks/parks-sanity'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/industrial-parks',
  title: 'Industrial Parks in Mexicali',
  description: '4 industrial parks in Mexicali with over 4.5 million sq ft. Built-to-suit industrial buildings, available land, and more than 60 years of experience.',
})

export default async function IndustrialParksPage() {
  const industrialParks = await getIndustrialParks()
  return (
    <div className="min-h-screen bg-background">
      <Header lang="en" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Industrial Parks in Mexicali
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Over 60 years developing world-class industrial infrastructure in the border region.
            </p>
          </div>
        </div>
      </section>

      {/* Parks Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrialParks.map((park) => (
              <Link
                key={park.slug}
                href={`/industrial-parks/${park.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={park.heroImage}
                    alt={park.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {park.name}
                      </h2>
                      {(park.totalBuildings ?? (park.buildings?.length ?? 0)) > 0 && (
                        <p className="text-sm text-muted-foreground">
                          {park.totalBuildings ?? (park.buildings?.length ?? 0)} buildings
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {park.description}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {park.address ?? park.location}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}

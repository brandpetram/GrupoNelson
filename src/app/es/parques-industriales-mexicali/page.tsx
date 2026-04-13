import Header from '@/components/Header'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { getIndustrialParks } from '@/data/parks/parks-sanity'
import { createMetadata } from '@/lib/create-metadata'
import { ParkMiniMap } from '@/components/brandpetram/park-mini-map'

// Coordenadas de respaldo — solo se usan si Sanity no tiene las del parque.
// Nelson II tiene coordenadas exactas; las demás son aproximaciones
// basadas en la dirección (Carretera a San Luis R.C.) y deben verificarse.
const FALLBACK_COORDS: Record<string, { lat: number; lng: number }> = {
  'nelson-ii': { lat: 32.576969, lng: -115.411850 },
  'nelson-i': { lat: 32.550000, lng: -115.393000 },
  'vigia-i': { lat: 32.557000, lng: -115.398000 },
  'vigia-ii': { lat: 32.558000, lng: -115.397000 },
}

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/parques-industriales-mexicali',
  title: 'Parques Industriales en Mexicali',
  description: '5 parques industriales en Mexicali con más de 4.5 millones de pies². Naves industriales built-to-suit, terrenos disponibles y más de 60 años de experiencia.',
})

export default async function ParquesIndustrialesMexicaliPage() {
  const parks = await getIndustrialParks()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-medium text-blue-600 tracking-[0.25em] uppercase mb-4">
            Grupo Nelson
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Parques Industriales en Mexicali
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed text-balance">
            Más de 60 años desarrollando infraestructura industrial de clase mundial en la región fronteriza de Mexicali.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 text-sm text-muted-foreground">
            <span><span className="font-semibold text-foreground">4</span> parques</span>
            <span className="text-border hidden sm:inline">·</span>
            <span><span className="font-semibold text-foreground">75+</span> hectáreas</span>
            <span className="text-border hidden sm:inline">·</span>
            <span><span className="font-semibold text-foreground">28+</span> empresas establecidas</span>
          </div>
        </div>
      </section>

      {/* Secciones de parques — orden invertido: Nelson II primero */}
      {[...parks].reverse().map((park) => {
        const coords = park.coordinates ?? FALLBACK_COORDS[park.slug]
        const buildingCount = park.totalBuildings ?? (park.buildings?.length ?? 0)

        return (
          <section key={park.slug} className="mb-12 last:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 px-10">

              {/* Foto */}
              <div
                className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-muted"
              >
                <img
                  src={park.heroImage}
                  alt={park.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {park.immediateAvailability && (
                  <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                    <span className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Disponible ahora
                    </span>
                  </div>
                )}
              </div>

              {/* Datos + Mapa */}
              <div className="px-6 py-8 lg:px-12 xl:px-16 lg:py-8 flex flex-col justify-center">
                <p className="text-xs font-medium text-blue-600 tracking-[0.2em] uppercase mb-2">
                  Parque Industrial
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                  {park.shortName}
                </h2>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                  <div>
                    <p className="text-2xl lg:text-3xl font-semibold tabular-nums">
                      {park.landSizeHectares}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                      Hectáreas
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-semibold tabular-nums">
                      {park.since}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                      Fundado
                    </p>
                  </div>
                  {buildingCount > 0 && (
                    <div>
                      <p className="text-2xl lg:text-3xl font-semibold tabular-nums">
                        {buildingCount}
                      </p>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                        Naves
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-2xl lg:text-3xl font-semibold tabular-nums">
                      {park.establishedCompanies}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                      Empresas
                    </p>
                  </div>
                </div>

                {/* Espacio disponible */}
                {(park.availableLandM2 ?? 0) > 0 && (
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">
                      {new Intl.NumberFormat('es-MX').format(park.availableLandM2!)} m²
                    </span>{' '}
                    de terreno disponible
                  </p>
                )}
                {(park.availableAreaM2 ?? 0) > 0 && (
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">
                      {new Intl.NumberFormat('es-MX').format(park.availableAreaM2!)} m²
                    </span>{' '}
                    de nave disponible
                  </p>
                )}

                {/* Dirección */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{park.address ?? park.location}</span>
                </div>

                {/* CTA */}
                <Link
                  href={`/parques-industriales-mexicali/${park.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Ver detalles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

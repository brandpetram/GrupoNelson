import type { IndustrialPark } from '@/data/parks/types'

interface ParkHeroProps {
  park: IndustrialPark
}

export function ParkHero({ park }: ParkHeroProps) {
  return (
    <section className="relative">
      <div className="aspect-[16/7] md:aspect-[16/5] overflow-hidden">
        <img
          src={park.heroImage}
          alt={park.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Contenido sobre imagen */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {park.name}
          </h1>
          <p className="text-lg text-white/80 mt-2">{park.location}</p>

          {/* Badges de datos generales */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
              Desde {park.since}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
              {park.landSizeHectares} hectáreas
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
              {park.establishedCompanies} {park.establishedCompanies === 1 ? 'empresa' : 'empresas'} establecidas
            </span>
            {park.buildings.length > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
                {park.totalBuildings ?? park.buildings.length} naves
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

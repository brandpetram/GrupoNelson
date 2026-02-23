'use client'

import type { IndustrialPark, Building } from '@/data/parks/types'

interface ParkSpecsSidebarProps {
  currentPark: IndustrialPark
  allParks: IndustrialPark[]
  selectedBuildingId: string
  onSelectBuilding: (buildingId: string) => void
}

export function ParkSpecsSidebar({
  currentPark,
  allParks,
  selectedBuildingId,
  onSelectBuilding,
}: ParkSpecsSidebarProps) {
  return (
    <div
      className="sticky self-start hidden lg:block lg:col-span-3"
      style={{ top: '100px' }}
    >
      <div className="p-6 text-muted-foreground text-sm space-y-6">
        {/* Navegación entre parques */}
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
            Parques en Mexicali
          </h3>
          <ul className="space-y-2">
            {allParks.map((park) => (
              <li key={park.slug} className="leading-snug">
                <a
                  href={`/parques-industriales-mexicali/${park.slug}`}
                  className={
                    park.slug === currentPark.slug
                      ? 'text-primary font-semibold'
                      : 'hover:text-orange-500 transition-colors'
                  }
                >
                  {park.shortName}
                  {!park.hasSpecs && (
                    <span className="ml-1.5 text-xs text-muted-foreground/60">(Próximamente)</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Selector de naves */}
        {currentPark.buildings.length > 0 && (
          <div className="pt-4 border-t border-border">
            <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
              Naves
            </h3>
            <ul className="space-y-1">
              {currentPark.buildings.map((building) => (
                <li key={building.id}>
                  <button
                    onClick={() => onSelectBuilding(building.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      building.id === selectedBuildingId
                        ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {building.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

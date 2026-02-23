'use client'

import { useState } from 'react'
import type { IndustrialPark } from '@/data/parks/types'
import { ParkSpecsSidebar } from './park-specs-sidebar'
import { ParkSpecsDescriptionList } from './park-specs-description-list'

interface ParkSpecsLayoutProps {
  park: IndustrialPark
  allParks: IndustrialPark[]
}

export function ParkSpecsLayout({ park, allParks }: ParkSpecsLayoutProps) {
  const [selectedBuildingId, setSelectedBuildingId] = useState(
    park.buildings[0]?.id ?? ''
  )

  const selectedBuilding = park.buildings.find((b) => b.id === selectedBuildingId)

  // Parque sin specs (ej: Nelson I)
  if (!park.hasSpecs || park.buildings.length === 0) {
    return (
      <section className="container mx-auto md:w-10/12 px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <ParkSpecsSidebar
            currentPark={park}
            allParks={allParks}
            selectedBuildingId=""
            onSelectBuilding={() => {}}
          />
          <div className="lg:col-span-9">
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Especificaciones técnicas en preparación.
              </p>
              <p className="text-muted-foreground mt-2">
                Contáctenos para más información sobre este parque.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container mx-auto md:w-10/12 px-4 py-8 lg:py-16">
      {/* Infraestructura del parque */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">Infraestructura del Parque</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {park.infrastructure.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Selector de naves mobile */}
      <div className="lg:hidden mb-6 overflow-x-auto -mx-4 px-4">
        <div className="flex gap-2 min-w-max pb-2">
          {park.buildings.map((building) => (
            <button
              key={building.id}
              onClick={() => setSelectedBuildingId(building.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                building.id === selectedBuildingId
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {building.name}
            </button>
          ))}
        </div>
      </div>

      {/* Layout 2 columnas */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <ParkSpecsSidebar
          currentPark={park}
          allParks={allParks}
          selectedBuildingId={selectedBuildingId}
          onSelectBuilding={setSelectedBuildingId}
        />

        <div className="lg:col-span-9">
          {selectedBuilding ? (
            <ParkSpecsDescriptionList building={selectedBuilding} />
          ) : (
            <p className="text-muted-foreground">Seleccione una nave para ver sus especificaciones.</p>
          )}
        </div>
      </div>
    </section>
  )
}

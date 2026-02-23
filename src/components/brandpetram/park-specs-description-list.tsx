'use client'

import type { Building } from '@/data/parks/types'

interface ParkSpecsDescriptionListProps {
  building: Building
}

// Componente para un par dt/dd
function SpecRow({ label, value }: { label: string; value: string | undefined }) {
  if (!value) return null
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1 md:gap-4 py-2 border-b border-border/50 last:border-b-0">
      <dt className="text-base font-medium text-muted-foreground">{label}</dt>
      <dd className="text-base text-foreground">{value}</dd>
    </div>
  )
}

// Componente para un par dt/dd indentado (sub-áreas)
function SpecSubRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1 md:gap-4 py-1.5 pl-4 md:pl-6">
      <dt className="text-base text-muted-foreground/80">{label}</dt>
      <dd className="text-base text-foreground/80">{value}</dd>
    </div>
  )
}

// Sección con título
function SpecSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-lg font-semibold text-blue-600 border-b-2 border-stone-900/20 pb-2 mb-3">
        {title}
      </h3>
      <dl className="space-y-0">{children}</dl>
    </section>
  )
}

// Formatear área con m2 y sqft
function formatArea(m2: number, sqft?: number): string {
  const m2Str = m2.toLocaleString('es-MX', { maximumFractionDigits: 2 })
  if (sqft) {
    const sqftStr = sqft.toLocaleString('es-MX', { maximumFractionDigits: 2 })
    return `${m2Str} m² (${sqftStr} sq ft)`
  }
  return `${m2Str} m²`
}

// Formatear altura con m y ft
function formatHeight(m: number, ft?: number): string {
  if (ft) return `${m} m (${ft} ft)`
  return `${m} m`
}

export function ParkSpecsDescriptionList({ building }: ParkSpecsDescriptionListProps) {
  const { generalData, structure, constructionSpecs, loadingArea, exteriorArea, fireProtection, hvac } = building

  return (
    <article className="space-y-8">
      {/* Header de la nave */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{building.name}</h2>
        <p className="text-muted-foreground mt-1">
          {formatArea(generalData.totalConstructionArea.m2, generalData.totalConstructionArea.sqft)}
        </p>
      </div>

      {/* Datos Generales */}
      <SpecSection title="Datos Generales">
        <SpecRow label="Área de terreno" value={formatArea(generalData.landArea.m2, generalData.landArea.sqft)} />
        <SpecRow label="Construcción total" value={formatArea(generalData.totalConstructionArea.m2, generalData.totalConstructionArea.sqft)} />
        {generalData.subAreas?.warehouse && (
          <SpecSubRow label="Almacén" value={formatArea(generalData.subAreas.warehouse.m2, generalData.subAreas.warehouse.sqft)} />
        )}
        {generalData.subAreas?.offices && (
          <SpecSubRow label="Oficinas" value={formatArea(generalData.subAreas.offices.m2, generalData.subAreas.offices.sqft)} />
        )}
        {generalData.subAreas?.mezzanine && (
          <SpecSubRow label="Mezzanine" value={formatArea(generalData.subAreas.mezzanine.m2, generalData.subAreas.mezzanine.sqft)} />
        )}
        {generalData.subAreas?.bathrooms && (
          <SpecSubRow label="Baños" value={formatArea(generalData.subAreas.bathrooms.m2, generalData.subAreas.bathrooms.sqft)} />
        )}
        {generalData.subAreas?.dockNorth && (
          <SpecSubRow label="Andén Norte" value={formatArea(generalData.subAreas.dockNorth.m2, generalData.subAreas.dockNorth.sqft)} />
        )}
        {generalData.subAreas?.dockSouth && (
          <SpecSubRow label="Andén Sur" value={formatArea(generalData.subAreas.dockSouth.m2, generalData.subAreas.dockSouth.sqft)} />
        )}
        {generalData.subAreas?.other?.map((item) => (
          <SpecSubRow key={item.label} label={item.label} value={formatArea(item.area.m2, item.area.sqft)} />
        ))}
        {generalData.specificAddress && (
          <SpecRow label="Dirección" value={generalData.specificAddress} />
        )}
      </SpecSection>

      {/* Estructura */}
      <SpecSection title="Estructura">
        <SpecRow label="Tipo" value={structure.type} />
        {structure.complianceCode && <SpecRow label="Código" value={structure.complianceCode} />}
        {structure.maxHeight && <SpecRow label="Altura máxima" value={formatHeight(structure.maxHeight.m, structure.maxHeight.ft)} />}
        {structure.minHeight && <SpecRow label="Altura mínima" value={formatHeight(structure.minHeight.m, structure.minHeight.ft)} />}
        {structure.clearHeight && <SpecRow label="Altura libre" value={formatHeight(structure.clearHeight.m, structure.clearHeight.ft)} />}
        {structure.beamSpacing && <SpecRow label="Crujías" value={structure.beamSpacing} />}
        {structure.bays?.map((bay) => (
          <div key={bay.name} className="pl-4 md:pl-6 pt-2">
            <p className="text-sm font-medium text-foreground/70 mb-1">{bay.name}</p>
            {bay.minHeight && <SpecSubRow label="Altura mínima" value={formatHeight(bay.minHeight.m, bay.minHeight.ft)} />}
            {bay.clearHeight && <SpecSubRow label="Altura libre" value={formatHeight(bay.clearHeight.m, bay.clearHeight.ft)} />}
            {bay.beamSpacing && <SpecSubRow label="Crujías" value={bay.beamSpacing} />}
          </div>
        ))}
      </SpecSection>

      {/* Piso */}
      <SpecSection title="Piso">
        <SpecRow label="Especificación" value={constructionSpecs.floor.description} />
        {constructionSpecs.floor.joints && <SpecRow label="Juntas" value={constructionSpecs.floor.joints} />}
        {constructionSpecs.floor.finish && <SpecRow label="Acabado" value={constructionSpecs.floor.finish} />}
      </SpecSection>

      {/* Techo */}
      <SpecSection title="Techo">
        <SpecRow label="Material" value={constructionSpecs.roof.material} />
        {constructionSpecs.roof.gauge && <SpecRow label="Calibre" value={String(constructionSpecs.roof.gauge)} />}
        {constructionSpecs.roof.insulation && <SpecRow label="Aislamiento" value={constructionSpecs.roof.insulation} />}
        {constructionSpecs.roof.skylights && <SpecRow label="Tragaluces" value="Sí" />}
        {constructionSpecs.roof.rainwaterSystem && <SpecRow label="Sistema pluvial" value="Sistema de recolección de agua pluvial" />}
      </SpecSection>

      {/* Paredes */}
      <SpecSection title="Paredes">
        <SpecRow label="Material" value={constructionSpecs.walls.material} />
        {constructionSpecs.walls.dimensions && <SpecRow label="Dimensiones" value={constructionSpecs.walls.dimensions} />}
        {constructionSpecs.walls.color && <SpecRow label="Color" value={constructionSpecs.walls.color} />}
        {constructionSpecs.walls.windows && <SpecRow label="Ventanas" value={constructionSpecs.walls.windows} />}
      </SpecSection>

      {/* Iluminación */}
      <SpecSection title="Iluminación">
        {constructionSpecs.lighting.substation && <SpecRow label="Subestación" value={constructionSpecs.lighting.substation} />}
        {constructionSpecs.lighting.warehouseLighting && <SpecRow label="Almacén" value={constructionSpecs.lighting.warehouseLighting} />}
        {constructionSpecs.lighting.officeLighting && <SpecRow label="Oficinas" value={constructionSpecs.lighting.officeLighting} />}
        {constructionSpecs.lighting.exteriorLighting && <SpecRow label="Exterior" value={constructionSpecs.lighting.exteriorLighting} />}
        {constructionSpecs.lighting.additionalNotes && <SpecRow label="Notas" value={constructionSpecs.lighting.additionalNotes} />}
      </SpecSection>

      {/* Baños */}
      <SpecSection title="Baños">
        <SpecRow label="Descripción" value={constructionSpecs.bathrooms.description} />
        {constructionSpecs.bathrooms.details?.map((detail) => (
          <SpecSubRow key={detail.area} label={detail.area} value={detail.fixtures} />
        ))}
      </SpecSection>

      {/* Áreas de Carga */}
      <SpecSection title="Áreas de Carga">
        {loadingArea.totalDocks !== undefined && <SpecRow label="Total andenes" value={String(loadingArea.totalDocks)} />}
        {loadingArea.docksWithLevelers !== undefined && <SpecRow label="Con niveladores" value={String(loadingArea.docksWithLevelers)} />}
        {loadingArea.docksWithoutLevelers !== undefined && <SpecRow label="Sin niveladores" value={String(loadingArea.docksWithoutLevelers)} />}
        {loadingArea.floorLevelDoors !== undefined && <SpecRow label="A nivel de piso" value={String(loadingArea.floorLevelDoors)} />}
        {loadingArea.railDoors !== undefined && <SpecRow label="Puertas de riel" value={String(loadingArea.railDoors)} />}
        {loadingArea.rollUpDoors !== undefined && <SpecRow label="Puertas enrollables" value={String(loadingArea.rollUpDoors)} />}
        {loadingArea.description && <SpecRow label="Detalle" value={loadingArea.description} />}
      </SpecSection>

      {/* Exterior (si aplica) */}
      {exteriorArea && (
        <SpecSection title="Exterior">
          {exteriorArea.parkingSpaces !== undefined && <SpecRow label="Estacionamiento" value={`${exteriorArea.parkingSpaces} espacios`} />}
          {exteriorArea.truckSpaces !== undefined && <SpecRow label="Camiones" value={`${exteriorArea.truckSpaces} espacios`} />}
          {exteriorArea.maneuveringYard && <SpecRow label="Patio de maniobras" value={exteriorArea.maneuveringYard} />}
          {exteriorArea.guardBooth && <SpecRow label="Caseta de vigilancia" value="Sí" />}
        </SpecSection>
      )}

      {/* HVAC (si aplica) */}
      {hvac && (
        <SpecSection title="HVAC">
          <SpecRow label="Descripción" value={hvac.description} />
        </SpecSection>
      )}

      {/* Protección Contra Incendios */}
      <SpecSection title="Protección Contra Incendios">
        {fireProtection.cabinets && <SpecRow label="Gabinetes" value="Gabinetes y mangueras" />}
        {fireProtection.sprinklers && <SpecRow label="Rociadores" value="Sistema de rociadores (sprinkler)" />}
        {fireProtection.waterTank && <SpecRow label="Cisterna" value="Tanque de almacenamiento de agua" />}
        {fireProtection.complianceStandards && (
          <SpecRow label="Estándares" value={fireProtection.complianceStandards.join(', ')} />
        )}
        {fireProtection.description && <SpecRow label="Detalle" value={fireProtection.description} />}
      </SpecSection>
    </article>
  )
}

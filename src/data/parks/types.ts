// Interfaces para el sistema de datos de parques industriales
// Dos niveles: Parque (general) y Nave/Building (específico)

// === Utilidades de medida ===

/** Área con medidas en m² y sq ft */
export interface AreaMeasure {
  m2: number
  sqft?: number
}

/** Altura con medidas en metros y pies */
export interface HeightMeasure {
  m: number
  ft?: number
}

// === NIVEL NAVE (specs específicas de cada edificio) ===

export interface ConstructionSubAreas {
  warehouse?: AreaMeasure
  offices?: AreaMeasure
  mezzanine?: AreaMeasure
  bathrooms?: AreaMeasure
  dockNorth?: AreaMeasure
  dockSouth?: AreaMeasure
  other?: { label: string; area: AreaMeasure }[]
}

export interface GeneralData {
  landArea: AreaMeasure
  totalConstructionArea: AreaMeasure
  subAreas?: ConstructionSubAreas
  specificAddress?: string
}

export interface StructureBay {
  name: string
  minHeight?: HeightMeasure
  clearHeight?: HeightMeasure
  beamSpacing?: string
}

export interface StructureData {
  type: string
  complianceCode?: string
  maxHeight?: HeightMeasure
  minHeight?: HeightMeasure
  clearHeight?: HeightMeasure
  beamSpacing?: string
  bays?: StructureBay[]
}

export interface FloorSpec {
  description: string
  joints?: string
  finish?: string
}

export interface RoofSpec {
  material: string
  gauge?: number
  insulation?: string
  skylights?: boolean
  rainwaterSystem?: boolean
}

export interface WallSpec {
  material: string
  dimensions?: string
  color?: string
  windows?: string
}

export interface LightingSpec {
  substation?: string
  warehouseLighting?: string
  officeLighting?: string
  exteriorLighting?: string
  additionalNotes?: string
}

export interface BathroomDetail {
  area: string
  fixtures: string
}

export interface BathroomSpec {
  description: string
  details?: BathroomDetail[]
}

export interface ConstructionSpecs {
  floor: FloorSpec
  roof: RoofSpec
  walls: WallSpec
  lighting: LightingSpec
  bathrooms: BathroomSpec
}

export interface LoadingArea {
  totalDocks?: number
  docksWithLevelers?: number
  docksWithoutLevelers?: number
  floorLevelDoors?: number
  railDoors?: number
  rollUpDoors?: number
  description?: string
}

export interface ExteriorArea {
  parkingSpaces?: number
  truckSpaces?: number
  maneuveringYard?: string
  guardBooth?: boolean
}

export interface FireProtection {
  cabinets: boolean
  sprinklers: boolean
  waterTank: boolean
  complianceStandards?: string[]
  description?: string
}

export interface HvacSpec {
  description: string
}

export interface BuildingAvailability {
  status?: 'available' | 'occupied' | 'partial'
  availableM2?: number
  availableFrom?: string
}

/** Una nave (building) individual */
export interface Building {
  id: string
  name: string
  availability?: BuildingAvailability
  generalData: GeneralData
  structure?: StructureData
  constructionSpecs?: ConstructionSpecs
  loadingArea?: LoadingArea
  exteriorArea?: ExteriorArea
  fireProtection?: FireProtection
  hvac?: HvacSpec
  /** Empresa inquilina (si se conoce) */
  tenant?: string
}

// === GALERÍA DE FOTOS ===

export interface GalleryGroup {
  /** Etiqueta visible: "Parque", "DHL", "Gulfstream", etc. */
  label: string
  images: string[]
}

// === NIVEL PARQUE (data general/común) ===

/** Un parque industrial */
export interface IndustrialPark {
  slug: string
  name: string
  shortName: string
  description: string
  heroImage: string
  since: number
  location: string
  address?: string
  landSizeHectares: number
  availableBuildings?: number
  availableAreaM2?: number
  availableLandM2?: number
  immediateAvailability?: boolean
  immediateAvailabilityNote?: string
  establishedCompanies: number
  totalBuildings?: number
  /** Empresas establecidas en el parque (independiente de las naves) */
  tenants?: { name: string; logo?: string }[]
  /** 'pending' cuando hay información por confirmar con el cliente */
  availableInfo?: 'pending'
  infrastructure: string[]
  buildings: Building[]
  hasSpecs: boolean
  coordinates?: { lat: number; lng: number }
  mapsUrl?: string
  gallery?: GalleryGroup[]
}

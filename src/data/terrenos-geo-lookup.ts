import terrenosGeo from './terrenos-geo.json'
import type { Feature, Polygon, Point } from 'geojson'

export type TerrenoGeoFeature = Feature<Polygon | Point>

// Índice por id para lookup O(1)
const geoIndex = new Map<string, TerrenoGeoFeature>(
  (terrenosGeo as { features: TerrenoGeoFeature[] }).features.map(f => [
    f.properties?.id as string,
    f,
  ])
)

export function getGeoFeatureById(id: string): TerrenoGeoFeature | null {
  return geoIndex.get(id) ?? null
}

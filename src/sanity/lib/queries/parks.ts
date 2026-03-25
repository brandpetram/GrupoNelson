export const allParksQuery = `*[_type == "industrialPark"] | order(name asc) {
  "slug": slug.current,
  name,
  shortName,
  description,
  heroImage,
  since,
  location,
  address,
  landSizeHectares,
  availableBuildings,
  availableAreaM2,
  availableLandM2,
  immediateAvailability,
  immediateAvailabilityNote,
  establishedCompanies,
  totalBuildings,
  tenants[] { name, logo },
  infrastructure,
  hasSpecs,
  coordinates { lat, lng },
  mapsUrl,
  gallery[] { label, images },
  buildings[] {
    "id": buildingId,
    name,
    tenant,
    availability { status, availableM2, availableFrom },
    "generalData": {
      "landArea": landArea,
      "totalConstructionArea": totalConstructionArea,
      "subAreas": subAreas,
      "specificAddress": specificAddress
    },
    "structure": structure,
    "constructionSpecs": {
      "floor": floor,
      "roof": roof,
      "walls": walls,
      "lighting": lighting,
      "bathrooms": bathroomsSpec
    },
    loadingArea,
    exteriorArea,
    fireProtection,
    "hvac": hvac
  }
}`

export const parkBySlugQuery = `*[_type == "industrialPark" && slug.current == $slug][0] {
  "slug": slug.current,
  name,
  shortName,
  description,
  heroImage,
  since,
  location,
  address,
  landSizeHectares,
  availableBuildings,
  availableAreaM2,
  availableLandM2,
  immediateAvailability,
  immediateAvailabilityNote,
  establishedCompanies,
  totalBuildings,
  tenants[] { name, logo },
  infrastructure,
  hasSpecs,
  coordinates { lat, lng },
  mapsUrl,
  gallery[] { label, images },
  buildings[] {
    "id": buildingId,
    name,
    tenant,
    availability { status, availableM2, availableFrom },
    "generalData": {
      "landArea": landArea,
      "totalConstructionArea": totalConstructionArea,
      "subAreas": subAreas,
      "specificAddress": specificAddress
    },
    "structure": structure,
    "constructionSpecs": {
      "floor": floor,
      "roof": roof,
      "walls": walls,
      "lighting": lighting,
      "bathrooms": bathroomsSpec
    },
    loadingArea,
    exteriorArea,
    fireProtection,
    "hvac": hvac
  }
}`

export const parkSlugsQuery = `*[_type == "industrialPark"].slug.current`

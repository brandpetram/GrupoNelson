/**
 * Migración de parques industriales: TypeScript estático → Sanity
 *
 * Ejecutar: node scripts/migrate-parks-to-sanity.mjs
 *
 * Lee parks-data.ts via tsx (TypeScript runner) para obtener los datos,
 * luego los sube a Sanity usando createOrReplace con IDs deterministas.
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { execSync } from 'node:child_process'

const SANITY_TOKEN = (() => {
  if (process.env.SANITY_API_WRITE_TOKEN) return process.env.SANITY_API_WRITE_TOKEN
  try {
    const envContent = readFileSync(join(import.meta.dirname, '..', '.env.local'), 'utf8')
    const match = envContent.match(/SANITY_API_WRITE_TOKEN="([^"]+)"/)
    return match?.[1]
  } catch { return null }
})()

if (!SANITY_TOKEN) {
  console.error('Error: SANITY_API_WRITE_TOKEN no encontrado')
  process.exit(1)
}

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  apiVersion: '2026-02-27',
  useCdn: false,
  token: SANITY_TOKEN,
})

// Extraer datos de parks-data.ts usando un script inline de tsx
function getParksData() {
  const script = `
    const { industrialParks } = require('./src/data/parks/parks-data.ts');
    console.log(JSON.stringify(industrialParks));
  `
  try {
    const result = execSync(`npx tsx -e "${script}"`, {
      cwd: join(import.meta.dirname, '..'),
      encoding: 'utf8',
      timeout: 30000,
    })
    return JSON.parse(result.trim())
  } catch (err) {
    console.error('Error al leer parks-data.ts:', err.message)
    process.exit(1)
  }
}

function transformBuilding(b) {
  const doc = {
    _key: b.id,
    buildingId: b.id,
    name: b.name,
    tenant: b.tenant || undefined,
  }

  // Availability
  if (b.availability) {
    doc.availability = {
      status: b.availability.status,
      availableM2: b.availability.availableM2,
      availableFrom: b.availability.availableFrom,
    }
  }

  // General data
  if (b.generalData) {
    doc.landArea = b.generalData.landArea
    doc.totalConstructionArea = b.generalData.totalConstructionArea
    doc.specificAddress = b.generalData.specificAddress

    if (b.generalData.subAreas) {
      const sa = b.generalData.subAreas
      doc.subAreas = {}
      if (sa.warehouse) doc.subAreas.warehouse = sa.warehouse
      if (sa.offices) doc.subAreas.offices = sa.offices
      if (sa.mezzanine) doc.subAreas.mezzanine = sa.mezzanine
      if (sa.bathrooms) doc.subAreas.bathrooms = sa.bathrooms
      if (sa.dockNorth) doc.subAreas.dockNorth = sa.dockNorth
      if (sa.dockSouth) doc.subAreas.dockSouth = sa.dockSouth
      // Only include if has at least one field
      if (Object.keys(doc.subAreas).length === 0) delete doc.subAreas
    }
  }

  // Structure
  if (b.structure) {
    doc.structure = {
      type: b.structure.type,
      complianceCode: b.structure.complianceCode,
      maxHeight: b.structure.maxHeight,
      minHeight: b.structure.minHeight,
      clearHeight: b.structure.clearHeight,
      beamSpacing: b.structure.beamSpacing,
    }
  }

  // Construction specs
  if (b.constructionSpecs) {
    const cs = b.constructionSpecs
    if (cs.floor) doc.floor = cs.floor
    if (cs.roof) doc.roof = cs.roof
    if (cs.walls) doc.walls = cs.walls
    if (cs.lighting) doc.lighting = cs.lighting
    if (cs.bathrooms) doc.bathroomsSpec = { description: cs.bathrooms.description }
  }

  // Loading, exterior, fire, hvac
  if (b.loadingArea) doc.loadingArea = b.loadingArea
  if (b.exteriorArea) doc.exteriorArea = b.exteriorArea
  if (b.fireProtection) doc.fireProtection = b.fireProtection
  if (b.hvac) doc.hvac = b.hvac

  // Clean undefined
  for (const key of Object.keys(doc)) {
    if (doc[key] === undefined) delete doc[key]
  }

  return doc
}

function transformPark(park) {
  const doc = {
    _id: `park-${park.slug}`,
    _type: 'industrialPark',
    slug: { _type: 'slug', current: park.slug },
    name: park.name,
    shortName: park.shortName,
    description: park.description,
    heroImage: park.heroImage,
    since: park.since,
    location: park.location,
    address: park.address,
    landSizeHectares: park.landSizeHectares,
    availableBuildings: park.availableBuildings,
    availableAreaM2: park.availableAreaM2,
    availableLandM2: park.availableLandM2,
    immediateAvailability: park.immediateAvailability,
    immediateAvailabilityNote: park.immediateAvailabilityNote,
    establishedCompanies: park.establishedCompanies,
    totalBuildings: park.totalBuildings,
    hasSpecs: park.hasSpecs,
    infrastructure: park.infrastructure,
  }

  // Coordinates
  if (park.coordinates) {
    doc.coordinates = { lat: park.coordinates.lat, lng: park.coordinates.lng }
  }

  // Maps URL
  if (park.mapsUrl) doc.mapsUrl = park.mapsUrl

  // Tenants
  if (park.tenants?.length) {
    doc.tenants = park.tenants.map((t, i) => ({
      _key: `tenant-${i}`,
      name: t.name,
      logo: t.logo,
    }))
  }

  // Gallery
  if (park.gallery?.length) {
    doc.gallery = park.gallery.map((g, i) => ({
      _key: `gallery-${i}`,
      label: g.label,
      images: g.images,
    }))
  }

  // Buildings
  if (park.buildings?.length) {
    doc.buildings = park.buildings.map(transformBuilding)
  }

  // Clean undefined
  for (const key of Object.keys(doc)) {
    if (doc[key] === undefined) delete doc[key]
  }

  return doc
}

async function migrate() {
  console.log('Leyendo datos de parks-data.ts...')
  const parks = getParksData()
  console.log(`${parks.length} parques encontrados\n`)

  let success = 0
  let failed = 0

  for (const park of parks) {
    try {
      const doc = transformPark(park)
      process.stdout.write(`${park.name} (${park.buildings?.length || 0} naves)...`)
      await client.createOrReplace(doc)
      success++
      console.log(' ✓')
    } catch (err) {
      failed++
      console.log(` ✗ ${err.message}`)
    }
  }

  console.log(`\nResultado: ${success} parques creados, ${failed} fallidos`)

  // Verificar
  const total = await client.fetch('count(*[_type == "industrialPark"])')
  console.log(`Total parques en Sanity: ${total}`)
}

migrate()

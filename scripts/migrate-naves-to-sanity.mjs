/**
 * Migración de naves industriales: TypeScript estático → Sanity
 * Ejecutar: node scripts/migrate-naves-to-sanity.mjs
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

function getNavesData() {
  const script = `const { navesIndustriales } = require('./src/data/naves-industriales.ts'); console.log(JSON.stringify(navesIndustriales));`
  try {
    const result = execSync(`npx tsx -e "${script}"`, {
      cwd: join(import.meta.dirname, '..'),
      encoding: 'utf8',
      timeout: 30000,
    })
    return JSON.parse(result.trim())
  } catch (err) {
    console.error('Error al leer naves-industriales.ts:', err.message)
    process.exit(1)
  }
}

async function migrate() {
  console.log('Leyendo datos de naves-industriales.ts...')
  const naves = getNavesData()
  console.log(`${naves.length} naves encontradas\n`)

  let success = 0
  let failed = 0

  for (const nave of naves) {
    try {
      const doc = {
        _id: `nave-${nave.id}`,
        _type: 'naveIndustrial',
        naveId: nave.id,
        nave: nave.nave,
        parque: nave.parque,
        ubicacion: nave.ubicacion,
        superficieFt2: nave.superficieFt2,
        superficieM2: nave.superficieM2,
        terreno: nave.terreno,
        clearHeightFt: nave.clearHeightFt,
        alturaMaxM: nave.alturaMaxM,
        docks: nave.docks,
        docksDetalle: nave.docksDetalle,
        estacionamiento: nave.estacionamiento,
        patioManiobras: nave.patioManiobras,
        piso: nave.piso,
        techo: nave.techo,
        paredes: nave.paredes,
        iluminacion: nave.iluminacion,
        subestacion: nave.subestacion,
        hvac: nave.hvac,
        sprinklers: nave.sprinklers,
        estatus: nave.estatus,
        nota: nave.nota,
        images: nave.images,
        shortDescription: nave.shortDescription,
        features: nave.features,
        applications: nave.applications,
      }

      // Clean undefined
      for (const key of Object.keys(doc)) {
        if (doc[key] === undefined) delete doc[key]
      }

      process.stdout.write(`${nave.nave}...`)
      await client.createOrReplace(doc)
      success++
      console.log(' ✓')
    } catch (err) {
      failed++
      console.log(` ✗ ${err.message}`)
    }
  }

  console.log(`\nResultado: ${success} naves creadas, ${failed} fallidas`)
  const total = await client.fetch('count(*[_type == "naveIndustrial"])')
  console.log(`Total naves en Sanity: ${total}`)
}

migrate()

/**
 * Script para migrar terrenos de TypeScript estático a Sanity CMS
 * Ejecutar: node scripts/migrate-terrenos-to-sanity.mjs
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const SANITY_TOKEN = (() => {
  if (process.env.SANITY_API_WRITE_TOKEN) return process.env.SANITY_API_WRITE_TOKEN
  try {
    const envContent = readFileSync(join(import.meta.dirname, '..', '.env.local'), 'utf8')
    const match = envContent.match(/SANITY_API_WRITE_TOKEN="([^"]+)"/)
    return match?.[1]
  } catch { return null }
})()

if (!SANITY_TOKEN) {
  console.error('Error: SANITY_API_WRITE_TOKEN no encontrado en .env.local')
  process.exit(1)
}

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  apiVersion: '2026-02-27',
  useCdn: false,
  token: SANITY_TOKEN,
})

const terrenos = [
  { terrenoId: 'n-l13', nombre: 'Lote 13', empresa: 'Parque Industrial Nelson', claveCatastral: 'XN-001-013', ubicacionCorta: 'Circuito Norte Lote 13', superficieM2: 8719.3, ubicacionLegal: 'Circuito Norte Lote 13, Carretera a San Luis Km 14 Parque Industrial Nelson', servicios: 'Energía eléctrica, drenaje y pluvial, telecomunicaciones', ciudad: 'Mexicali', dentroDeParque: 'Parque Industrial Nelson I' },
  { terrenoId: 'n-l9', nombre: 'Lote 9', empresa: 'Parque Industrial Nelson', claveCatastral: 'XN-001-009', ubicacionCorta: 'Circuito Norte Lote 9', superficieM2: 8450, ubicacionLegal: 'Circuito Norte Lote 9, Carretera a San Luis Km 14 Parque Industrial Nelson', servicios: 'Energía eléctrica, drenaje y pluvial, telecomunicaciones', ciudad: 'Mexicali', dentroDeParque: 'Parque Industrial Nelson I' },
  { terrenoId: 'n2-uc-1-1a', nombre: 'UC-1.1A', empresa: 'Parque Industrial Nelson II', ubicacionCorta: 'Blvd. Venustiano Carranza', superficieM2: 19634.98, ubicacionLegal: 'Blvd. Venustiano Carranza entre Manzanilla y Piñón', servicios: 'Energía eléctrica, drenaje y pluvial, telecomunicaciones', ciudad: 'Mexicali', dentroDeParque: 'Parque Industrial Nelson II' },
  { terrenoId: 'n2-uc-2-1b', nombre: 'UC-2.1B', empresa: 'Parque Industrial Nelson II', ubicacionCorta: 'Blvd. Venustiano Carranza', superficieM2: 43336.81, ubicacionLegal: 'Blvd. Venustiano Carranza entre Manzanilla y Piñón', servicios: 'Energía eléctrica, drenaje y pluvial, telecomunicaciones', ciudad: 'Mexicali', dentroDeParque: 'Parque Industrial Nelson II', nota: 'Lote más grande dentro de Nelson II' },
  { terrenoId: 'n2-uc-2-1c', nombre: 'UC-2.1C', empresa: 'Parque Industrial Nelson II', ubicacionCorta: 'Blvd. Venustiano Carranza', superficieM2: 9292.58, ubicacionLegal: 'Blvd. Venustiano Carranza entre Manzanilla y Piñón', servicios: 'Energía eléctrica, drenaje y pluvial, telecomunicaciones', ciudad: 'Mexicali', dentroDeParque: 'Parque Industrial Nelson II' },
  { terrenoId: 'pn-ej-puebla-p72', nombre: 'Ejido Puebla Parcela 72', empresa: 'Propiedades Nelson de Mexicali', claveCatastral: 'R5-072-001', ubicacionCorta: 'Ejido Puebla Parcela 72', superficieM2: 212353.99, ubicacionLegal: 'Parcela 72 Z-1 P 1/6 Sin Manzana Ejido Puebla, Mexicali', servicios: 'Lote baldío', ciudad: 'Mexicali', nota: 'Terreno más grande disponible en Mexicali (21.2 hectáreas)' },
  { terrenoId: 'pn-ej-puebla-p66', nombre: 'Ejido Puebla Parcela 66', empresa: 'Propiedades Nelson de Mexicali', claveCatastral: 'R5-066-003', ubicacionCorta: 'Ejido Puebla Parcela 66', superficieM2: 141509.65, ubicacionLegal: 'Parcela 66 Z-1 p 1/6 F.S. P.I. Sin Manzana Ejido Puebla, Mexicali', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'pn-col-calles-l6', nombre: 'Col. Calles Lote 6', empresa: 'Propiedades Nelson de Mexicali', claveCatastral: 'Q5-006-005', ubicacionCorta: 'Terreno Sr. Moreno Lote 6', superficieM2: 15363.15, ubicacionLegal: 'Urbano Vazquez SN Col. Calles, Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'pn-r-clifford-008', nombre: 'Rancho Clifford 008', empresa: 'Propiedades Nelson de Mexicali', claveCatastral: 'P8-500-008', ubicacionCorta: 'Terreno Rancho Clifford', superficieM2: 3363.04, ubicacionLegal: 'Lote Derecho de paso servidumbre CFE 2 Manzana S/M', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'pn-r-clifford-010', nombre: 'Rancho Clifford 010', empresa: 'Propiedades Nelson de Mexicali', claveCatastral: 'P8-500-010', ubicacionCorta: 'Terreno Rancho Clifford', superficieM2: 42407.34, ubicacionLegal: 'Lote SN Fraccion Oeste Porcion Central 4 Manzana S/N Rancho Clifford', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'pn-el-colorado-023', nombre: 'El Colorado 023', empresa: 'Propiedades Nelson de Mexicali', claveCatastral: 'G4-013-023', ubicacionCorta: 'Terreno El Colorado', superficieM2: 21288.44, ubicacionLegal: 'Calle Siderurgia SN Col Dos Division Dos', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'pn-r-clifford-030', nombre: 'Rancho Clifford 030', empresa: 'Propiedades Nelson de Mexicali', claveCatastral: 'P8-500-030', ubicacionCorta: 'Terreno Rancho Clifford', superficieM2: 192339.51, ubicacionLegal: 'Lote SN Fraccion Oeste Porcion Sur Fraccion 1 Manzana S/N Rancho Clifford', servicios: 'Lote baldío', ciudad: 'Mexicali', nota: 'Segundo terreno más grande (19.2 hectáreas)' },
  { terrenoId: 'pn-slp-004', nombre: 'Edificio SLP', empresa: 'Propiedades Nelson de Mexicali', claveCatastral: 'R5-050-004', ubicacionCorta: 'Edificio San Luis Potosí', superficieM2: 52943.18, superficieSqftEdificio: 52646.29, ubicacionLegal: 'Calle 4 exterior 500, San Luis Potosí, San Luis Potosí, C.P. 78426', servicios: 'Energía eléctrica, agua', ciudad: 'San Luis Potosí', nota: 'Incluye edificio de 52,646 sqft' },
  { terrenoId: 'ni-spot-technology', nombre: 'Spot Technology', empresa: 'Naves Industriales de Baja California', claveCatastral: 'K05-011-02', ubicacionCorta: 'Terreno Spot Technology', superficieM2: 20000, ubicacionLegal: 'Lote 11 Fraccion 1 Porcion 2 Colonia 2 Division 2, Cerro Prieto, Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'ni-c-calles-018', nombre: 'Col. Calles 018', empresa: 'Naves Industriales de Baja California', claveCatastral: 'Q5-018-014', ubicacionCorta: 'Terreno Col. Calles', superficieM2: 3800, ubicacionLegal: 'Lote 18 Fraccion Este Porcion 3 Col. Calles, Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'ni-c-calles-008', nombre: 'Col. Calles 008', empresa: 'Naves Industriales de Baja California', claveCatastral: 'Q5-018-008', ubicacionCorta: 'Terreno Col. Calles', superficieM2: 868.10, ubicacionLegal: 'Lote 18 Fraccion Este Porcion 3 Col. Calles, Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'ni-r-clifford-007', nombre: 'Rancho Clifford 007', empresa: 'Naves Industriales de Baja California', claveCatastral: 'P8-500-007', ubicacionCorta: 'Terreno Rancho Clifford', superficieM2: 10242.30, ubicacionLegal: 'Derecho paso de servidumbre CFE Rancho Clifford, Progreso Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'ni-r-clifford-009', nombre: 'Rancho Clifford 009', empresa: 'Naves Industriales de Baja California', claveCatastral: 'P8-500-009', ubicacionCorta: 'Terreno Rancho Clifford', superficieM2: 66090.69, ubicacionLegal: 'Lote SN Fraccion Oeste Porcion Central 3 Fraccion Sur, Col. Rancho Clifford Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'nl-carranza-p3', nombre: 'Carranza P3', empresa: 'Inmobiliaria Nelson Luken', claveCatastral: 'G4-007-026', ubicacionCorta: 'Calzada Venustiano Carranza', superficieM2: 1699.33, ubicacionLegal: 'Calzada Venustiano Carranza SN Lote 7 Fraccion 4 Porcion 6 Fraccion B porcion 3, Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'nl-carranza-p4', nombre: 'Carranza P4', empresa: 'Inmobiliaria Nelson Luken', claveCatastral: 'G4-007-027', ubicacionCorta: 'Calzada Venustiano Carranza', superficieM2: 1319.02, ubicacionLegal: 'Calzada Venustiano Carranza SN Lote 7 Fraccion 4 Porcion 6 Fraccion B porcion 4, Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'nl-carranza-p5', nombre: 'Carranza P5', empresa: 'Inmobiliaria Nelson Luken', claveCatastral: 'G4-007-028', ubicacionCorta: 'Calzada Venustiano Carranza', superficieM2: 1280.35, ubicacionLegal: 'Calzada Venustiano Carranza SN Lote 7 Fraccion 4 Porcion 6 Fraccion B porcion 5, Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'nl-carranza-p6', nombre: 'Carranza P6', empresa: 'Inmobiliaria Nelson Luken', claveCatastral: 'G4-007-029', ubicacionCorta: 'Calzada Venustiano Carranza', superficieM2: 1260.04, ubicacionLegal: 'Calzada Venustiano Carranza SN Lote 7 Fraccion 4 Porcion 6 Fraccion B porcion 6, Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'cb-ej-puebla-fr2', nombre: 'Ejido Puebla Fr. 2', empresa: 'Constructora Bademi', claveCatastral: 'R5-050-002', ubicacionCorta: 'Ejido Puebla Parcela 50', superficieM2: 2106.71, ubicacionLegal: 'Parcela 50 Z-1 P-1/6 Fraccion 2 Ejido Puebla Mexicali', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'cb-ej-puebla-fr3', nombre: 'Ejido Puebla Fr. 3', empresa: 'Constructora Bademi', claveCatastral: 'R5-050-003', ubicacionCorta: 'Ejido Puebla Parcela 50', superficieM2: 20000, ubicacionLegal: 'Parcela 50 Z-1 P-1/6 Fraccion 3 Ejido Puebla Mexicali', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'cb-ej-puebla-fr4', nombre: 'Ejido Puebla Fr. 4', empresa: 'Constructora Bademi', claveCatastral: 'R5-050-004', ubicacionCorta: 'Ejido Puebla Parcela 50', superficieM2: 22706.03, ubicacionLegal: 'Parcela 50 Z-1 P-1/6 Fraccion 4 Ejido Puebla Mexicali', servicios: 'Lote baldío', ciudad: 'Mexicali' },
  { terrenoId: 'a-c-prieto-l22', nombre: 'Cerro Prieto L22', empresa: 'Amboise', claveCatastral: 'F4-022-009', ubicacionCorta: 'Terreno Sres. Hurtado', superficieM2: 120000, ubicacionLegal: 'Lote 22 Fraccion 1 Colonia 1 Division 2 Cerro Prieto Mexicali B.C.', servicios: 'Lote baldío', ciudad: 'Mexicali', nota: '12 hectáreas' },
  { terrenoId: 'aip-slrc-pb', nombre: 'SLRC Porción B', empresa: 'Arisonora Industrial Park', claveCatastral: '670010008041*', ubicacionCorta: 'Terreno SLRC Porción B', superficieM2: 48174.20, ubicacionLegal: 'Lote Poligono 11 Fraccion Norte Porcion B Parque Industria Internacional San Luis Rio Colorado, Sonora', servicios: 'Lote baldío', ciudad: 'San Luis Río Colorado' },
  { terrenoId: 'aip-slrc-pc', nombre: 'SLRC Porción C', empresa: 'Arisonora Industrial Park', claveCatastral: '670010008008*', ubicacionCorta: 'Terreno SLRC Porción C', superficieM2: 286302.57, ubicacionLegal: 'Lote Poligono 11 Fraccion Norte Porcion C Parque Industria Internacional San Luis Rio Colorado, Sonora', servicios: 'Lote baldío', ciudad: 'San Luis Río Colorado', nota: 'Terreno más grande del inventario completo (28.6 hectáreas)' },
  { terrenoId: 'aip-slrc-pa', nombre: 'SLRC Porción A', empresa: 'Arisonora Industrial Park', claveCatastral: '670010008042*', ubicacionCorta: 'Terreno SLRC Porción A', superficieM2: 15575.77, superficieSqftEdificio: 48383.88, ubicacionLegal: 'Lote Poligono 11 Fraccion Norte Porcion A Parque Industria Internacional San Luis Rio Colorado, Sonora', servicios: 'Energía eléctrica', ciudad: 'San Luis Río Colorado', nota: 'Incluye edificio de 48,384 sqft' },
  { terrenoId: 'med-ens-el-morro', nombre: 'El Morro, Ensenada', empresa: 'MED BCN', claveCatastral: 'ZP-100-367', ubicacionCorta: 'Terreno Ensenada', superficieM2: 10000, ubicacionLegal: 'Lote Predio el Morro Fraccion A-2 Zona Playitas, Ensenada BC', servicios: 'Lote baldío', ciudad: 'Ensenada' },
]

async function migrate() {
  console.log(`Migrando ${terrenos.length} terrenos a Sanity...`)

  let success = 0
  let failed = 0

  for (const terreno of terrenos) {
    try {
      const doc = await client.createOrReplace({
        _id: `terreno-${terreno.terrenoId}`,
        _type: 'terreno',
        ...terreno,
      })
      console.log(`✓ ${terreno.nombre} (${doc._id})`)
      success++
    } catch (err) {
      console.error(`✗ ${terreno.nombre}: ${err.message}`)
      failed++
    }
  }

  console.log(`\nResultado: ${success} creados, ${failed} fallidos`)

  if (success > 0) {
    console.log('\nPublicando documentos...')
    const drafts = await client.fetch('*[_type == "terreno" && _id in path("drafts.**")]._id')
    for (const draftId of drafts) {
      const publishedId = draftId.replace('drafts.', '')
      try {
        await client.request({
          method: 'POST',
          uri: `/data/actions/production`,
          body: {
            actions: [{
              actionType: 'sanity.action.document.publish',
              draftId,
              publishedId,
            }]
          }
        })
      } catch (e) {
        // Si falla publish individual, no pasa nada
      }
    }
    console.log('Publicación completada.')
  }
}

migrate()

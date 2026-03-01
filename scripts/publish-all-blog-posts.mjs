/**
 * Publica los 30 posts del blog en Sanity
 * (promueve los drafts a publicados)
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2024-05-23',
  useCdn: false,
})

const ids = [
  'uqKP1CJoSsgXdCXPUwM01Z',  // 01 Mexicali vs. Tijuana
  '4lXD1QprlKmqniOHakmGZL',  // 02 Fortune 500
  'uqKP1CJoSsgXdCXPUwM1iP',  // 03 CaliBaja
  '4lXD1QprlKmqniOHakmITt',  // 04 Total Landed Cost
  '4lXD1QprlKmqniOHakmJJG',  // 05 China+1
  '4lXD1QprlKmqniOHakmL5u',  // 06 IMMEX 2025
  'uqKP1CJoSsgXdCXPUwM7np',  // 07 IMMEX Anexo 24 y 30
  'uqKP1CJoSsgXdCXPUwMAqX',  // 08 Triple Net
  'uqKP1CJoSsgXdCXPUwMBbi',  // 09 Costos Ocultos
  'uqKP1CJoSsgXdCXPUwMCS8',  // 10 Checklist Parque Industrial
  'uqKP1CJoSsgXdCXPUwMDYH',  // 11 Tendencias Renta
  '4lXD1QprlKmqniOHakmig0',  // 12 Sectores Naves BC
  'kllPxzrZvj3u6Zg4KwYKMS',  // 13 Clase A Guía Técnica
  'kllPxzrZvj3u6Zg4KwYLEy',  // 14 Clear Height
  '4lXD1QprlKmqniOHakmmBL',  // 15 Tilt-Up vs Metálica
  '4lXD1QprlKmqniOHakmnGW',  // 16 ESFR vs Sprinklers
  'kllPxzrZvj3u6Zg4KwYNXY',  // 17 Pisos FF100/FL50
  'uqKP1CJoSsgXdCXPUwMM5i',  // 18 Sismicidad BC
  'uqKP1CJoSsgXdCXPUwMN1N',  // 19 Docas de Carga
  '4lXD1QprlKmqniOHakmqKC',  // 20 Tiempo Construcción Nave
  'uqKP1CJoSsgXdCXPUwMOsh',  // 21 De Terreno Baldío a Parque
  'kllPxzrZvj3u6Zg4KwYQzQ',  // 22 LEED en Parques
  'uqKP1CJoSsgXdCXPUwMRAE',  // 23 Paneles Solares
  '4lXD1QprlKmqniOHakmswD',  // 24 Naves Net Zero
  'uqKP1CJoSsgXdCXPUwMTcF',  // 25 Usuario Calificado CFE
  '4lXD1QprlKmqniOHakmuP6',  // 26 Nave Distribución vs Manufactura vs Fulfillment
  'uqKP1CJoSsgXdCXPUwMW9V',  // 27 Cold Storage
  'uqKP1CJoSsgXdCXPUwMYLn',  // 28 Last-Mile Delivery
  'uqKP1CJoSsgXdCXPUwMZHS',  // 29 Automatización en Bodegas
  '4lXD1QprlKmqniOHakmxmX',  // 30 7 Tendencias Futuras
]

// Publicar en lotes de 10 usando la API de acciones
const BATCH_SIZE = 10
let publicados = 0
let errores = 0

for (let i = 0; i < ids.length; i += BATCH_SIZE) {
  const batch = ids.slice(i, i + BATCH_SIZE)

  const actions = batch.map((id) => ({
    actionType: 'sanity.action.document.publish',
    draftId: `drafts.${id}`,
    publishedId: id,
  }))

  try {
    await client.request({
      uri: `/data/actions/${client.config().dataset}`,
      method: 'POST',
      body: { actions },
    })

    for (const id of batch) {
      console.log(`✅ Publicado: ${id}`)
    }
    publicados += batch.length
  } catch (err) {
    console.error(`❌ Error en lote ${i / BATCH_SIZE + 1}: ${err.message}`)
    // Intentar uno por uno si el lote falla
    for (const id of batch) {
      try {
        await client.request({
          uri: `/data/actions/${client.config().dataset}`,
          method: 'POST',
          body: {
            actions: [
              {
                actionType: 'sanity.action.document.publish',
                draftId: `drafts.${id}`,
                publishedId: id,
              },
            ],
          },
        })
        console.log(`✅ Publicado: ${id}`)
        publicados++
      } catch (err2) {
        console.error(`❌ Error publicando ${id}: ${err2.message}`)
        errores++
      }
    }
  }
}

console.log(`\nResumen: ${publicados} publicados, ${errores} errores`)

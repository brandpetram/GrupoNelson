import fs from 'fs'
import path from 'path'

const TOKEN = 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw'
const PROJECT_ID = 'rnz30p1s'
const DATASET = 'production'
const PUBLIC_DIR = path.join(process.cwd(), 'public')

// Imagen asignada a cada noticia según el contenido
const ASIGNACIONES = [
  {
    id: 'kllPxzrZvj3u6Zg4KymSSy',
    imagen: 'parque-industrial-nelson-2-en-mexicali.jpeg',
    titulo: 'Gulfstream / Nelson II',
  },
  {
    id: 'kllPxzrZvj3u6Zg4KymSs8',
    imagen: 'grupo-nelson-naves-en-parques-industriales-en-mexicali-1.jpeg',
    titulo: 'Sitio web corporativo',
  },
  {
    id: '4lXD1QprlKmqniOHamwWCB',
    imagen: 'fundador-grupo-nelson-mexicali.jpg',
    titulo: '60 años',
  },
  {
    id: 'kllPxzrZvj3u6Zg4KymTke',
    imagen: 'parque-industrial-nelson-1-en-mexicali.jpeg',
    titulo: 'Vacancia Mexicali',
  },
  {
    id: '4lXD1QprlKmqniOHamwX5V',
    imagen: 'grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg',
    titulo: 'Nearshoring empleos',
  },
  {
    id: 'kllPxzrZvj3u6Zg4KymUtw',
    imagen: 'grupo-nelson-naves-en-parques-industriales-en-mexicali-5.jpeg',
    titulo: 'Automotriz / Aeroespacial / Medtech',
  },
  {
    id: '4lXD1QprlKmqniOHamwXb7',
    imagen: 'mex.jpg',
    titulo: 'IED México récord',
  },
  {
    id: 'uqKP1CJoSsgXdCXPUz2gvH',
    imagen: 'grupo-nelson-naves-en-parques-industriales-en-mexicali-7.jpeg',
    titulo: 'Fortune 500 BC',
  },
  {
    id: 'uqKP1CJoSsgXdCXPUz2hlh',
    imagen: 'eua.jpg',
    titulo: 'Tarifas EE.UU.',
  },
  {
    id: 'uqKP1CJoSsgXdCXPUz2j7Z',
    imagen: 'china.jpeg',
    titulo: 'Empresas Asia → México',
  },
  {
    id: 'uqKP1CJoSsgXdCXPUz2jxz',
    imagen: 'parque-industrial-el-vigia-1-en-mexicali.jpeg',
    titulo: 'Naves Clase A',
  },
  {
    id: '4lXD1QprlKmqniOHamwYMX',
    imagen: 'grupo-nelson-naves-en-parques-industriales-en-mexicali-9.jpeg',
    titulo: 'Certificación LEED',
  },
]

function mimeType(filename) {
  if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) return 'image/jpeg'
  if (filename.endsWith('.png')) return 'image/png'
  if (filename.endsWith('.webp')) return 'image/webp'
  return 'image/jpeg'
}

async function uploadImage(filePath, filename) {
  const fileBuffer = fs.readFileSync(filePath)
  const url = `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/assets/images/${DATASET}?filename=${encodeURIComponent(filename)}`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': mimeType(filename),
    },
    body: fileBuffer,
  })

  const data = await res.json()
  if (!res.ok) throw new Error(`Upload failed: ${JSON.stringify(data)}`)
  return data.document._id
}

async function patchImage(noticiaId, imageAssetId) {
  const mutations = [{
    patch: {
      id: noticiaId,
      set: {
        image: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAssetId },
        },
      },
    },
  }]

  const res = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mutations }),
    }
  )

  const data = await res.json()
  if (!res.ok) throw new Error(`Patch failed: ${JSON.stringify(data)}`)
  return data
}

async function main() {
  console.log(`\nAsignando imágenes a ${ASIGNACIONES.length} noticias...\n`)

  for (let i = 0; i < ASIGNACIONES.length; i++) {
    const { id, imagen, titulo } = ASIGNACIONES[i]
    const num = String(i + 1).padStart(2, '0')
    const imgPath = path.join(PUBLIC_DIR, imagen)

    process.stdout.write(`[${num}/12] ${titulo.padEnd(35)} → ${imagen} ... `)

    try {
      const assetId = await uploadImage(imgPath, imagen)
      await patchImage(id, assetId)
      console.log('✓')
    } catch (err) {
      console.log(`✗ ERROR: ${err.message}`)
    }
  }

  console.log('\n¡Listo! Revisa /noticias para ver las imágenes.')
}

main()

import fs from 'fs'
import path from 'path'

const TOKEN = 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw'
const PROJECT_ID = 'rnz30p1s'
const DATASET = 'production'

// 30 posts en orden de publicación (más reciente primero)
const POST_IDS = [
  'uqKP1CJoSsgXdCXPUwM01Z',
  '4lXD1QprlKmqniOHakmGZL',
  'uqKP1CJoSsgXdCXPUwM1iP',
  '4lXD1QprlKmqniOHakmITt',
  '4lXD1QprlKmqniOHakmJJG',
  '4lXD1QprlKmqniOHakmL5u',
  'uqKP1CJoSsgXdCXPUwM7np',
  'uqKP1CJoSsgXdCXPUwMAqX',
  'uqKP1CJoSsgXdCXPUwMBbi',
  'uqKP1CJoSsgXdCXPUwMCS8',
  'uqKP1CJoSsgXdCXPUwMDYH',
  '4lXD1QprlKmqniOHakmig0',
  'kllPxzrZvj3u6Zg4KwYKMS',
  'kllPxzrZvj3u6Zg4KwYLEy',
  '4lXD1QprlKmqniOHakmmBL',
  '4lXD1QprlKmqniOHakmnGW',
  'kllPxzrZvj3u6Zg4KwYNXY',
  'uqKP1CJoSsgXdCXPUwMM5i',
  'uqKP1CJoSsgXdCXPUwMN1N',
  '4lXD1QprlKmqniOHakmqKC',
  'uqKP1CJoSsgXdCXPUwMOsh',
  'kllPxzrZvj3u6Zg4KwYQzQ',
  'uqKP1CJoSsgXdCXPUwMRAE',
  '4lXD1QprlKmqniOHakmswD',
  'uqKP1CJoSsgXdCXPUwMTcF',
  '4lXD1QprlKmqniOHakmuP6',
  'uqKP1CJoSsgXdCXPUwMW9V',
  'uqKP1CJoSsgXdCXPUwMYLn',
  'uqKP1CJoSsgXdCXPUwMZHS',
  '4lXD1QprlKmqniOHakmxmX',
]

const IMAGES_DIR = path.join(process.cwd(), 'public/parques-industriales-mexicali')

// Seleccionar 30 imágenes distribuidas uniformemente de las ~500
function selectImages() {
  const allFiles = fs.readdirSync(IMAGES_DIR)
    .filter(f => {
      const fullPath = path.join(IMAGES_DIR, f)
      return f.endsWith('.jpg') && fs.statSync(fullPath).isFile()
    })
    .sort()

  const total = allFiles.length
  const selected = []
  for (let i = 0; i < 30; i++) {
    const idx = Math.round(i * (total - 1) / 29)
    selected.push(allFiles[idx])
  }
  return selected
}

async function uploadImage(filePath, filename) {
  const fileBuffer = fs.readFileSync(filePath)
  const url = `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/assets/images/${DATASET}?filename=${encodeURIComponent(filename)}`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'image/jpeg',
    },
    body: fileBuffer,
  })

  const data = await res.json()
  if (!res.ok) throw new Error(`Upload failed: ${JSON.stringify(data)}`)
  return data.document._id
}

async function updatePostImage(postId, imageAssetId) {
  const mutations = [{
    patch: {
      id: postId,
      set: {
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAssetId,
          }
        }
      }
    }
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
  const selectedImages = selectImages()
  console.log(`\nSubiendo ${selectedImages.length} imágenes a Sanity...\n`)

  for (let i = 0; i < POST_IDS.length; i++) {
    const postId = POST_IDS[i]
    const imgFilename = selectedImages[i]
    const imgPath = path.join(IMAGES_DIR, imgFilename)

    process.stdout.write(`[${String(i + 1).padStart(2, '0')}/30] ${imgFilename} → `)

    try {
      const assetId = await uploadImage(imgPath, imgFilename)
      await updatePostImage(postId, assetId)
      console.log(`✓`)
    } catch (err) {
      console.log(`✗ ERROR: ${err.message}`)
    }
  }

  console.log('\n¡Listo! Revisa /blog para ver las imágenes.')
}

main()

/**
 * Migración de imágenes: rutas string → assets nativos de Sanity
 *
 * Ejecutar: node scripts/migrate-images-to-sanity-assets.mjs
 *
 * 1. Lee todos los documentos de industrialPark y naveIndustrial
 * 2. Extrae las rutas de imagen (heroImage, gallery.images, tenants.logo, naveIndustrial.images)
 * 3. Sube cada imagen desde /public/ al CDN de Sanity
 * 4. Actualiza los documentos con las referencias al asset
 *
 * IMPORTANTE: Ejecutar ANTES de deployar el cambio de schema.
 * El script usa patch de Sanity que acepta cualquier tipo de dato.
 */

import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'node:fs'
import { join, basename, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const PROJECT_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PUBLIC_DIR = join(PROJECT_ROOT, 'public')

// --- Token ---
const SANITY_TOKEN = (() => {
  if (process.env.SANITY_API_WRITE_TOKEN) return process.env.SANITY_API_WRITE_TOKEN
  try {
    const envContent = readFileSync(join(PROJECT_ROOT, '.env.local'), 'utf8')
    // Soporta: sin comillas, con comillas dobles, con comillas simples
    const match = envContent.match(/SANITY_API_WRITE_TOKEN=["']?([^"'\n]+)["']?/)
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
  // Generar _key automáticamente para items de array nuevos (image objects en gallery/images)
  autoGenerateArrayKeys: true,
})

// --- Helpers ---

/** Cache de uploads: ruta → referencia de asset. Evita subir la misma imagen dos veces. */
const uploadCache = new Map()

/** Sube una imagen desde /public/ a Sanity y devuelve la referencia de asset */
async function uploadImage(relativePath) {
  if (uploadCache.has(relativePath)) {
    console.log(`  ♻ Cache hit: ${relativePath}`)
    return uploadCache.get(relativePath)
  }
  const filePath = join(PUBLIC_DIR, relativePath)

  if (!existsSync(filePath)) {
    console.warn(`  ⚠ Archivo no encontrado: ${relativePath}`)
    return null
  }

  const buffer = readFileSync(filePath)
  const filename = basename(relativePath)
  const ext = filename.split('.').pop()?.toLowerCase()
  const contentType = ext === 'png' ? 'image/png'
    : ext === 'svg' ? 'image/svg+xml'
    : ext === 'webp' ? 'image/webp'
    : 'image/jpeg'

  try {
    const asset = await client.assets.upload('image', buffer, {
      filename,
      contentType,
    })
    console.log(`  ✓ Subida: ${relativePath} → ${asset._id}`)
    const imageRef = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    }
    uploadCache.set(relativePath, imageRef)
    return imageRef
  } catch (err) {
    console.error(`  ✗ Error subiendo ${relativePath}:`, err.message)
    return null
  }
}

// --- Migración de Parques ---

async function migrateParks() {
  console.log('\n═══ Migrando imágenes de Parques Industriales ═══\n')

  // Incluir documentos draft para que no queden con strings después del cambio de schema
  // Traer _key de arrays para preservar identidad en Studio
  const parks = await client.fetch(`*[_type == "industrialPark"] {
    _id, name, heroImage,
    gallery[] { _key, label, images },
    tenants[] { _key, _type, name, logo }
  }`, {}, { perspective: 'raw' })

  for (const park of parks) {
    console.log(`\n▸ ${park.name} (${park._id})`)

    const patches = {}
    let failed = false

    // --- heroImage ---
    if (typeof park.heroImage === 'string' && park.heroImage.length > 0) {
      console.log(`  heroImage: ${park.heroImage}`)
      const imageRef = await uploadImage(park.heroImage)
      if (imageRef) {
        patches.heroImage = imageRef
      } else {
        console.error(`  ✗ Falló heroImage — saltando documento`)
        failures.push({ doc: park._id, field: 'heroImage', path: park.heroImage })
        failed = true
      }
    }

    // --- gallery ---
    if (!failed && park.gallery?.length > 0) {
      const newGallery = []
      for (const group of park.gallery) {
        const newImages = []
        for (const imgPath of (group.images ?? [])) {
          if (typeof imgPath === 'string' && imgPath.length > 0) {
            console.log(`  gallery[${group.label}]: ${imgPath}`)
            const imageRef = await uploadImage(imgPath)
            if (imageRef) {
              newImages.push(imageRef)
            } else {
              console.error(`  ✗ Falló gallery image — saltando documento`)
              failures.push({ doc: park._id, field: `gallery[${group.label}]`, path: imgPath })
              failed = true
              break
            }
          } else {
            newImages.push(imgPath)
          }
        }
        if (failed) break
        newGallery.push({ _key: group._key, _type: 'galleryGroup', label: group.label, images: newImages })
      }
      if (!failed) patches.gallery = newGallery
    }

    // --- tenants ---
    if (!failed && park.tenants?.length > 0) {
      const newTenants = []
      for (const tenant of park.tenants) {
        if (typeof tenant.logo === 'string' && tenant.logo.length > 0) {
          console.log(`  tenant[${tenant.name}]: ${tenant.logo}`)
          const imageRef = await uploadImage(tenant.logo)
          if (imageRef) {
            newTenants.push({ _key: tenant._key, _type: 'tenantEntry', name: tenant.name, logo: imageRef })
          } else {
            console.error(`  ✗ Falló tenant logo — saltando documento`)
            failures.push({ doc: park._id, field: `tenant[${tenant.name}]`, path: tenant.logo })
            failed = true
            break
          }
        } else {
          newTenants.push({ _key: tenant._key, _type: 'tenantEntry', name: tenant.name, logo: tenant.logo })
        }
      }
      if (!failed) patches.tenants = newTenants
    }

    // --- Aplicar patch ---
    if (failed) {
      console.log(`  ⏭ Documento NO actualizado por fallos de upload`)
    } else if (Object.keys(patches).length > 0) {
      await client.patch(park._id).set(patches).commit()
      console.log(`  ✓ Documento actualizado`)
    } else {
      console.log(`  — Sin cambios`)
    }
  }
}

// --- Migración de Naves ---

async function migrateNaves() {
  console.log('\n═══ Migrando imágenes de Naves Industriales ═══\n')

  const naves = await client.fetch(`*[_type == "naveIndustrial"] {
    _id, nave, images
  }`, {}, { perspective: 'raw' })

  for (const nave of naves) {
    console.log(`\n▸ ${nave.nave} (${nave._id})`)

    if (!nave.images?.length) {
      console.log(`  — Sin imágenes`)
      continue
    }

    const newImages = []
    let failed = false
    for (const imgPath of nave.images) {
      if (typeof imgPath === 'string' && imgPath.length > 0) {
        console.log(`  image: ${imgPath}`)
        const imageRef = await uploadImage(imgPath)
        if (imageRef) {
          newImages.push(imageRef)
        } else {
          console.error(`  ✗ Falló image — saltando documento`)
          failures.push({ doc: nave._id, field: 'images', path: imgPath })
          failed = true
          break
        }
      } else {
        newImages.push(imgPath)
      }
    }

    if (failed) {
      console.log(`  ⏭ Documento NO actualizado por fallos de upload`)
    } else if (newImages.length > 0) {
      await client.patch(nave._id).set({ images: newImages }).commit()
      console.log(`  ✓ Documento actualizado`)
    }
  }
}

// --- Main ---

/** Documentos que no se actualizaron por fallos de upload */
const failures = []

async function main() {
  console.log('Migración de imágenes: rutas string → Sanity assets')
  console.log(`Proyecto: rnz30p1s | Dataset: production`)
  console.log(`Directorio público: ${PUBLIC_DIR}\n`)

  await migrateParks()
  await migrateNaves()

  if (failures.length > 0) {
    console.error(`\n✗ Migración completada con ${failures.length} fallo(s):`)
    for (const f of failures) {
      console.error(`  - ${f.doc} → ${f.field}: ${f.path}`)
    }
    console.error('\nLos documentos con fallos NO fueron modificados. Verifica que los archivos existen en /public/ y vuelve a ejecutar.')
    process.exit(1)
  }

  console.log('\n✓ Migración completada sin errores')
}

main().catch((err) => {
  console.error('Error fatal:', err)
  process.exit(1)
})

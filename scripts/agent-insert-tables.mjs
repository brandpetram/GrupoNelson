/**
 * Agente de tablas con data para posts del blog
 *
 * Lee posts de Sanity, verifica idempotencia, e inserta bloques dataTable.
 *
 * Uso:
 *   node scripts/agent-insert-tables.mjs --dry-run          # Reporte sin mutar
 *   node scripts/agent-insert-tables.mjs --apply             # Ejecutar inserciones
 *   node scripts/agent-insert-tables.mjs --apply --post=ID   # Solo un post específico
 *   node scripts/agent-insert-tables.mjs --remove --post=ID  # Remover tabla de agente de un post
 */

import { createClient } from '@sanity/client'

const SANITY_TOKEN = 'skQZj0alAYM3fM93NUK7qMcdtyqX51scCVNO3HpXX6IiESn57nTLOCmeTeKWiwAwnRV6gBzh32BpCGIh1N9W3Mx6zEPyIxkhDfgX4FITSJCxdafzIEdkE2mlb2BAJbHeeB9IzMP8qfvYLZe1E5MYBoeovKbgKRM5NlwWPtKgrfpRAhrn0lgc'
const AGENT_TABLE_PREFIX = 'agent-table-'
const MAX_RETRIES = 3

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: SANITY_TOKEN,
  apiVersion: '2026-02-27',
  useCdn: false,
})

// --- Utilidades ---

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 40)
}

function generateTableKey(postSlug, tableTopic) {
  return `${AGENT_TABLE_PREFIX}${slugify(tableTopic || postSlug)}`
}

/**
 * Encuentra posiciones de inserción para N tablas distribuidas a lo largo del post.
 * Busca secciones (delimitadas por H2) y distribuye las tablas uniformemente.
 *
 * @param {Array} blocks - Array de bloques del body
 * @param {number} tableCount - Cuántas tablas insertar (default 2)
 * @returns {number[]} - Array de índices de inserción (de mayor a menor para no desplazar índices)
 */
function findInsertPositions(blocks, tableCount = 2) {
  // Encontrar todos los H2
  const h2Indices = []
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i]._type === 'block' && blocks[i].style === 'h2') {
      h2Indices.push(i)
    }
  }

  const positions = []

  if (h2Indices.length >= tableCount + 1) {
    // Suficientes secciones: distribuir uniformemente
    const step = Math.floor(h2Indices.length / (tableCount + 1))
    for (let t = 0; t < tableCount; t++) {
      const sectionIndex = step * (t + 1)
      // Insertar antes del H2 de la siguiente sección (al final de la sección actual)
      positions.push(h2Indices[sectionIndex] - 1)
    }
  } else if (h2Indices.length >= 2) {
    // Pocas secciones: primera tabla después del primer H2+3 bloques, segunda al 75% del post
    positions.push(Math.min(h2Indices[0] + 3, blocks.length - 1))
    positions.push(Math.floor(blocks.length * 0.75))
  } else {
    // Sin secciones claras: 33% y 75% del post
    positions.push(Math.floor(blocks.length * 0.33))
    positions.push(Math.floor(blocks.length * 0.75))
  }

  // Ordenar de mayor a menor para que al insertar no desplace los índices anteriores
  return positions.sort((a, b) => b - a)
}

// --- Operaciones Sanity ---

async function getAllPosts() {
  const query = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
    _id,
    "slug": slug.current,
    "title": title[_key == "es"][0].value,
    "bodyLocales": body[]._key,
    "esBlocks": body[_key == "es"][0].value,
    "hasAgentTable": count(body[_key == "es"][0].value[_type == "dataTable" && _key match "agent-table-*"]) > 0
  }`
  return client.fetch(query)
}

async function getPost(postId) {
  const query = `*[_id == $id][0]{
    _id,
    "slug": slug.current,
    "title": title[_key == "es"][0].value,
    "bodyLocales": body[]._key,
    "esBlocks": body[_key == "es"][0].value,
    "hasAgentTable": count(body[_key == "es"][0].value[_type == "dataTable" && _key match "agent-table-*"]) > 0
  }`
  return client.fetch(query, { id: postId })
}

async function insertTable(postId, locale, positionIndex, tableBlock, retries = 0) {
  try {
    const result = await client
      .patch(postId)
      .insert('after', `body[_key == "${locale}"].value[${positionIndex}]`, [tableBlock])
      .commit()
    return { success: true, transactionId: result._id }
  } catch (error) {
    if (retries < MAX_RETRIES) {
      const delay = Math.pow(2, retries) * 1000
      console.log(`  ⏳ Reintento ${retries + 1}/${MAX_RETRIES} en ${delay}ms...`)
      await new Promise(r => setTimeout(r, delay))
      return insertTable(postId, locale, positionIndex, tableBlock, retries + 1)
    }
    return { success: false, error: error.message }
  }
}

async function removeAgentTable(postId, locale) {
  const post = await getPost(postId)
  if (!post) return { success: false, error: 'Post no encontrado' }

  const blocks = post.esBlocks || []
  const agentTableKeys = blocks
    .filter(b => b._type === 'dataTable' && b._key?.startsWith(AGENT_TABLE_PREFIX))
    .map(b => b._key)

  if (agentTableKeys.length === 0) {
    return { success: false, error: 'No hay tablas de agente en este post' }
  }

  try {
    let patch = client.patch(postId)
    for (const key of agentTableKeys) {
      patch = patch.unset([`body[_key == "${locale}"].value[_key == "${key}"]`])
    }
    await patch.commit()
    return { success: true, removed: agentTableKeys.length }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// --- Generación de tabla ---

/**
 * Construye un bloque dataTable listo para insertar en Sanity.
 *
 * @param {object} post - Post con title, slug, esBlocks
 * @param {object} tableData - Datos de la tabla
 *   Formato: { title, source, columns: string[], rows: { cells: string[] }[] }
 * @param {number} index - Índice de la tabla (para generar keys únicos)
 */
function buildTableBlock(post, tableData, index = 0) {
  if (!tableData) return null

  const key = generateTableKey(post.slug, `${tableData.title}-${index}`)

  return {
    _type: 'dataTable',
    _key: key,
    title: tableData.title,
    source: tableData.source,
    columns: tableData.columns,
    rows: tableData.rows.map((row, i) => ({
      _key: `r${index}${i + 1}`,
      cells: row.cells,
    })),
  }
}

// --- Tablas predefinidas por tema ---

/**
 * Mapa de tablas por slug de post.
 * Cada entrada es un ARRAY de tablas (soporta 1, 2 o más por post).
 * Los datos se importan de table-data-blog.mjs
 */
import { TABLE_DATA as IMPORTED_DATA } from './table-data-blog.mjs'
const TABLE_DATA = IMPORTED_DATA

// --- Ejecución principal ---

async function runDryRun(posts) {
  console.log('\n📋 DRY RUN — No se mutará nada en Sanity\n')
  console.log(`Total posts: ${posts.length}`)

  let withTable = 0
  let withoutTable = 0
  let withData = 0

  for (const post of posts) {
    const hasTable = post.hasAgentTable
    const tables = TABLE_DATA[post.slug]
    const hasData = tables != null && tables.length > 0
    const blocks = post.esBlocks || []

    if (hasTable) {
      withTable++
      console.log(`  ⏭  [SKIP] ${post.title?.slice(0, 60)} — ya tiene tabla de agente`)
    } else if (hasData) {
      withData++
      const positions = findInsertPositions(blocks, tables.length)
      console.log(`  ✅ [INSERT] ${post.title?.slice(0, 60)} — ${tables.length} tabla(s)`)
      tables.forEach((t, i) => {
        const pos = positions[tables.length - 1 - i] // positions está en orden inverso
        console.log(`     ${i + 1}. "${t.title}" (${t.columns.length} cols, ${t.rows.length} filas) → bloque ${pos}/${blocks.length}`)
        console.log(`        Fuente: ${t.source}`)
      })
    } else {
      withoutTable++
      console.log(`  ⚠️  [NO DATA] ${post.title?.slice(0, 60)} — sin tablas registradas`)
    }
  }

  console.log(`\n--- Resumen ---`)
  console.log(`Ya tienen tabla: ${withTable}`)
  console.log(`Listos para insertar: ${withData}`)
  console.log(`Sin datos registrados: ${withoutTable}`)
}

async function runApply(posts) {
  console.log('\n🚀 APPLY — Insertando tablas en Sanity\n')

  let inserted = 0
  let skipped = 0
  let failed = 0

  for (const post of posts) {
    if (post.hasAgentTable) {
      console.log(`  ⏭  [SKIP] ${post.title?.slice(0, 60)}`)
      skipped++
      continue
    }

    const tables = TABLE_DATA[post.slug]
    if (!tables || tables.length === 0) {
      skipped++
      continue
    }

    const blocks = post.esBlocks || []
    // Posiciones en orden descendente para no desplazar índices al insertar
    const positions = findInsertPositions(blocks, tables.length)

    console.log(`  📝 Insertando ${tables.length} tabla(s) en: ${post.title?.slice(0, 60)}...`)

    // Insertar de mayor a menor posición para no alterar los índices
    let allOk = true
    for (let i = 0; i < tables.length; i++) {
      const tableData = tables[tables.length - 1 - i] // Empezar por la última tabla en la posición más alta
      const position = positions[i]
      const tableBlock = buildTableBlock(post, tableData, tables.length - 1 - i)

      if (!tableBlock) continue

      const result = await insertTable(post._id, 'es', position, tableBlock)
      if (result.success) {
        console.log(`     ✅ Tabla ${tables.length - i}: "${tableData.title}" → bloque ${position}`)
        inserted++
      } else {
        console.log(`     ❌ Tabla ${tables.length - i}: ${result.error}`)
        failed++
        allOk = false
      }
    }
  }

  console.log(`\n--- Resultado ---`)
  console.log(`Tablas insertadas: ${inserted}`)
  console.log(`Posts saltados: ${skipped}`)
  console.log(`Tablas fallidas: ${failed}`)
}

// --- CLI ---

async function main() {
  const args = process.argv.slice(2)
  const isDryRun = args.includes('--dry-run')
  const isApply = args.includes('--apply')
  const isRemove = args.includes('--remove')
  const postArg = args.find(a => a.startsWith('--post='))
  const postId = postArg?.split('=')[1]

  if (isRemove && postId) {
    console.log(`\n🗑  Removiendo tablas de agente del post ${postId}...`)
    const result = await removeAgentTable(postId, 'es')
    if (result.success) {
      console.log(`✅ Removidas: ${result.removed} tabla(s)`)
    } else {
      console.log(`❌ ${result.error}`)
    }
    return
  }

  if (!isDryRun && !isApply) {
    console.log('Uso:')
    console.log('  node scripts/agent-insert-tables.mjs --dry-run')
    console.log('  node scripts/agent-insert-tables.mjs --apply')
    console.log('  node scripts/agent-insert-tables.mjs --apply --post=DOC_ID')
    console.log('  node scripts/agent-insert-tables.mjs --remove --post=DOC_ID')
    return
  }

  let posts
  if (postId) {
    const post = await getPost(postId)
    if (!post) {
      console.error(`Post ${postId} no encontrado`)
      return
    }
    posts = [post]
  } else {
    posts = await getAllPosts()
  }

  if (isDryRun) {
    await runDryRun(posts)
  } else {
    await runApply(posts)
  }
}

main().catch(console.error)

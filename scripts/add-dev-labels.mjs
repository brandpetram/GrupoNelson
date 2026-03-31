/**
 * Script: add-dev-labels.mjs
 * Agrega atributos data-component="NombreComponente" al primer elemento JSX
 * de cada componente exportado en /src/components/brandpetram/*.tsx
 *
 * Uso: node scripts/add-dev-labels.mjs
 */

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const COMPONENTS_ROOT = join(
  import.meta.dirname,
  '..',
  'src',
  'components'
)

// Descubrir todos los subdirectorios recursivamente que contengan .tsx
async function discoverDirs(root) {
  const { readdir: rd } = await import('node:fs/promises')
  const dirs = [{ dir: root, relPrefix: 'src/components' }]

  async function walk(currentDir, relPath) {
    const entries = await rd(currentDir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== 'ui' && entry.name !== 'icons') {
        const fullPath = join(currentDir, entry.name)
        const rel = `${relPath}/${entry.name}`
        dirs.push({ dir: fullPath, relPrefix: rel })
        await walk(fullPath, rel)
      }
    }
  }

  await walk(root, 'src/components')
  return dirs
}

// Tags HTML válidos que consideramos como primer elemento
const VALID_TAGS = [
  'div',
  'section',
  'main',
  'article',
  'aside',
  'header',
  'footer',
  'nav',
  'ul',
]

const VALID_TAGS_PATTERN = VALID_TAGS.join('|')

async function main() {
  const modified = []
  const skipped = []
  let totalFiles = 0

  const SCAN_DIRS = await discoverDirs(COMPONENTS_ROOT)

  for (const { dir, relPrefix } of SCAN_DIRS) {
    let files
    try {
      files = (await readdir(dir)).filter((f) => f.endsWith('.tsx')).sort()
    } catch {
      continue // directorio no existe, skip
    }
    totalFiles += files.length
    console.log(`\n${relPrefix}: ${files.length} archivos .tsx`)

  for (const file of files) {
    const filePath = join(dir, file)
    const content = await readFile(filePath, 'utf-8')

    // Buscar nombre del componente exportado
    const exportMatch = content.match(
      /export\s+(?:default\s+)?function\s+([A-Z][A-Za-z0-9]*)/
    )
    if (!exportMatch) {
      skipped.push({ file, reason: 'No se encontró export function' })
      continue
    }

    const componentName = exportMatch[1]

    // Detectar si la función recibe props
    // Buscar lo que hay entre los paréntesis de la función
    const funcSignature = content.slice(exportMatch.index)
    const parensMatch = funcSignature.match(/function\s+[A-Z][A-Za-z0-9]*\s*\(([^)]*)\)/)
    const paramsContent = parensMatch ? parensMatch[1].trim() : ''
    // Tiene props si los paréntesis no están vacíos y no son solo {}
    const hasProps = paramsContent.length > 0 && paramsContent !== '{}' && paramsContent !== '{ }'

    // Buscar la posición del export function para enfocarnos en su cuerpo
    const exportIndex = exportMatch.index

    // Buscar el primer `return (` o `return(` o `return <` después del export
    const bodyAfterExport = content.slice(exportIndex)
    const returnMatch = bodyAfterExport.match(/return\s*\(?\s*\n?\s*</)
    if (!returnMatch) {
      skipped.push({
        file,
        reason: `No se encontró return con JSX en ${componentName}`,
      })
      continue
    }

    // Posición absoluta del `<` del primer elemento retornado
    const returnStart = exportIndex + returnMatch.index
    const returnText = bodyAfterExport.slice(returnMatch.index)

    // Extraer qué tag es el primero después de return
    const firstTagMatch = returnText.match(
      /return\s*\(?\s*\n?\s*<([a-zA-Z][a-zA-Z0-9]*)/
    )
    if (!firstTagMatch) {
      skipped.push({
        file,
        reason: `No se pudo parsear el tag del return en ${componentName}`,
      })
      continue
    }

    const tagName = firstTagMatch[1]

    // Si es Fragment (<>) - revisamos si el return tiene <>
    const fragmentCheck = returnText.match(/return\s*\(?\s*\n?\s*<>/)
    if (fragmentCheck) {
      skipped.push({
        file,
        reason: `Primer elemento es React Fragment (<>) en ${componentName}`,
      })
      continue
    }

    // Si no es un tag HTML válido, es un componente custom → skip
    if (!VALID_TAGS.includes(tagName)) {
      skipped.push({
        file,
        reason: `Primer elemento es componente custom <${tagName}> en ${componentName}`,
      })
      continue
    }

    // Verificar si ya tiene data-component
    // Buscamos desde el return hasta el cierre del tag de apertura
    const afterReturn = content.slice(returnStart)
    const openingTagEnd = afterReturn.indexOf('>')
    const openingTagText = afterReturn.slice(0, openingTagEnd + 1)

    if (openingTagText.includes('data-component=')) {
      // Si ya tiene los 3 atributos, skip
      if (openingTagText.includes('data-component-file=') && openingTagText.includes('data-component-props=')) {
        skipped.push({
          file,
          reason: `Ya tiene todos los atributos en ${componentName}`,
        })
        continue
      }
      // Actualizar: quitar atributos existentes y re-insertar todos
      const relPath = `${relPrefix}/${file}`
      let updatedContent = content
        .replace(/ data-component-props="[^"]*"/g, '')
        .replace(/ data-component-file="[^"]*"/g, '')
        .replace(/ data-component="[^"]*"/g, '')
      // Re-insertar con el nuevo regex
      const reInsertBody = updatedContent.slice(exportIndex)
      const reInsertMatch = reInsertBody.match(new RegExp(`(return\\s*\\(?\\s*\\n?\\s*<${tagName})(\\s|>|\\n)`))
      if (reInsertMatch) {
        const pos = exportIndex + reInsertMatch.index + reInsertMatch[1].length
        const newAttrs = ` data-component="${componentName}" data-component-file="${relPath}" data-component-props="${hasProps}"`
        updatedContent = updatedContent.slice(0, pos) + newAttrs + updatedContent.slice(pos)
        await writeFile(filePath, updatedContent, 'utf-8')
        modified.push({ file, componentName, tag: tagName })
      }
      continue
    }

    // Ahora necesitamos insertar data-component="ComponentName" justo después de <tagName
    // Buscar la posición exacta en el contenido original
    // Usamos un regex que encuentra el return seguido del tag
    const insertRegex = new RegExp(
      `(return\\s*\\(?\\s*\\n?\\s*<${tagName})(\\s|>|\\n)`
    )

    const insertMatch = bodyAfterExport.match(insertRegex)
    if (!insertMatch) {
      skipped.push({
        file,
        reason: `No se pudo encontrar punto de inserción para ${componentName}`,
      })
      continue
    }

    const absoluteInsertPos =
      exportIndex + insertMatch.index + insertMatch[1].length
    const charAfterTag = insertMatch[2]

    let newContent
    const relPath = `${relPrefix}/${file}`
    const attrs = ` data-component="${componentName}" data-component-file="${relPath}" data-component-props="${hasProps}"`

    if (charAfterTag === '>') {
      newContent =
        content.slice(0, absoluteInsertPos) +
        attrs +
        content.slice(absoluteInsertPos)
    } else {
      newContent =
        content.slice(0, absoluteInsertPos) +
        attrs +
        content.slice(absoluteInsertPos)
    }

    await writeFile(filePath, newContent, 'utf-8')
    modified.push({ file: `${relPrefix}/${file}`, componentName, tag: tagName })
  }
  } // fin SCAN_DIRS

  // Reporte
  console.log('=== ARCHIVOS MODIFICADOS ===')
  if (modified.length === 0) {
    console.log('  Ninguno')
  } else {
    for (const m of modified) {
      console.log(`  ✓ ${m.file} → <${m.tag} data-component="${m.componentName}">`)
    }
  }

  console.log(`\n=== ARCHIVOS OMITIDOS (${skipped.length}) ===`)
  for (const s of skipped) {
    console.log(`  ⊘ ${s.file} — ${s.reason}`)
  }

  console.log(
    `\nResumen: ${modified.length} modificados, ${skipped.length} omitidos, ${totalFiles} total`
  )
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})

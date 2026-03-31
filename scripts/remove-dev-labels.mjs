/**
 * Script: remove-dev-labels.mjs
 * Elimina atributos data-component, data-component-file y data-component-props.
 * Se ejecuta automáticamente antes de build (prebuild) para producción limpia.
 *
 * Uso: node scripts/remove-dev-labels.mjs
 */

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const COMPONENTS_ROOT = join(
  import.meta.dirname,
  '..',
  'src',
  'components'
)

async function discoverDirs(root) {
  const dirs = [root]

  async function walk(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== 'ui' && entry.name !== 'icons') {
        const fullPath = join(currentDir, entry.name)
        dirs.push(fullPath)
        await walk(fullPath)
      }
    }
  }

  await walk(root)
  return dirs
}

async function main() {
  const dirs = await discoverDirs(COMPONENTS_ROOT)
  let cleaned = 0

  for (const dir of dirs) {
    let files
    try {
      files = (await readdir(dir)).filter((f) => f.endsWith('.tsx')).sort()
    } catch {
      continue
    }

    for (const file of files) {
      const filePath = join(dir, file)
      const content = await readFile(filePath, 'utf-8')

      if (!content.includes('data-component')) continue

      const newContent = content
        .replace(/ data-component-props="[^"]*"/g, '')
        .replace(/ data-component-file="[^"]*"/g, '')
        .replace(/ data-component="[^"]*"/g, '')

      if (newContent !== content) {
        await writeFile(filePath, newContent, 'utf-8')
        cleaned++
      }
    }
  }

  console.log(`DevOverlay: ${cleaned} archivos limpiados para producción`)
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})

/**
 * Genera un inventario de todas las imágenes en public/
 * y detecta cuáles están referenciadas en el código fuente y en qué archivos.
 *
 * Uso: pnpm run inventory
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join, relative, extname } from 'path'

const PUBLIC_DIR = join(process.cwd(), 'public')
const SRC_DIR = join(process.cwd(), 'src')
const OUTPUT_PATH = join(process.cwd(), 'src', 'data', 'foto-inventory.json')

const IMAGE_EXTENSIONS = new Set([
  '.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif',
  '.JPG', '.JPEG', '.PNG',
])

// Carpetas que no contienen fotos relevantes
const SKIP_DIRS = new Set(['docs', 'video', 'logos-clientes', '_descartes'])

interface FotoEntry {
  path: string
  folder: string
  filename: string
  usedInCode: boolean
  usedIn: string[]  // rutas relativas de archivos que referencian esta foto
}

interface FolderSummary {
  folder: string
  count: number
  usedCount: number
  photos: FotoEntry[]
}

interface SourceFile {
  relativePath: string  // ej: "src/app/page.tsx"
  content: string
}

// Mapeo de rutas de archivo a nombres legibles para el visor
function friendlyName(filePath: string): string {
  // src/app/page.tsx → home
  // src/app/constructora/baumex/page.tsx → constructora/baumex
  // src/data/parks/parks-data.ts → data: parks-data
  // src/components/brandpetram/carrusel.tsx → componente: carrusel

  if (filePath.includes('/app/') && filePath.endsWith('page.tsx')) {
    const route = filePath
      .replace(/^src\/app\//, '')
      .replace(/\/page\.tsx$/, '')
      .replace(/^\(.*?\)\//, '') // quitar route groups como (marketing)
    return route || 'home'
  }

  if (filePath.includes('/data/')) {
    const name = filePath.split('/').pop()?.replace(/\.(ts|tsx)$/, '') ?? filePath
    return `data: ${name}`
  }

  if (filePath.includes('/components/')) {
    // Usar las últimas 2 partes del path para evitar ambigüedad (ej: brandpetram/carrusel)
    const parts = filePath.replace(/\.(ts|tsx)$/, '').split('/')
    const componentParts = parts.slice(-2)
    return `componente: ${componentParts.join('/')}`
  }

  return filePath
}

// Paso 1: Escanear public/ recursivamente
function scanDirectory(dir: string): string[] {
  const results: string[] = []
  const entries = readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name) || entry.name.startsWith('.')) continue
      results.push(...scanDirectory(fullPath))
    } else if (IMAGE_EXTENSIONS.has(extname(entry.name))) {
      results.push(fullPath)
    }
  }

  return results
}

// Paso 2: Leer archivos fuente individualmente
function loadSourceFiles(dir: string, basePath: string = ''): SourceFile[] {
  const files: SourceFile[] = []
  const entries = readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    const relPath = basePath ? `${basePath}/${entry.name}` : entry.name

    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue
      files.push(...loadSourceFiles(fullPath, relPath))
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      files.push({
        relativePath: `src/${relPath}`,
        content: readFileSync(fullPath, 'utf-8'),
      })
    }
  }

  return files
}

// Ejecutar
console.log('Escaneando public/...')
const allImages = scanDirectory(PUBLIC_DIR)
console.log(`  ${allImages.length} imágenes encontradas`)

console.log('Leyendo código fuente...')
const sourceFiles = loadSourceFiles(SRC_DIR)
console.log(`  ${sourceFiles.length} archivos fuente`)

console.log('Verificando referencias...')
const fotoEntries: FotoEntry[] = allImages.map((fullPath) => {
  const relativePath = '/' + relative(PUBLIC_DIR, fullPath)
  const parts = relativePath.split('/')
  const filename = parts[parts.length - 1]
  const folder = parts.length > 2 ? parts.slice(1, -1).join('/') : '(raíz)'

  // Buscar en qué archivos aparece esta ruta
  const usedIn: string[] = []
  for (const file of sourceFiles) {
    if (file.content.includes(relativePath)) {
      usedIn.push(friendlyName(file.relativePath))
    }
  }

  return {
    path: relativePath,
    folder,
    filename,
    usedInCode: usedIn.length > 0,
    usedIn,
  }
})

// Agrupar por carpeta
const folderMap = new Map<string, FotoEntry[]>()
for (const entry of fotoEntries) {
  const existing = folderMap.get(entry.folder) || []
  existing.push(entry)
  folderMap.set(entry.folder, existing)
}

const folders: FolderSummary[] = Array.from(folderMap.entries())
  .map(([folder, photos]) => ({
    folder,
    count: photos.length,
    usedCount: photos.filter((p) => p.usedInCode).length,
    photos: photos.sort((a, b) => a.filename.localeCompare(b.filename)),
  }))
  .sort((a, b) => a.folder.localeCompare(b.folder))

const inventory = {
  generatedAt: new Date().toISOString(),
  totalPhotos: fotoEntries.length,
  totalUsed: fotoEntries.filter((p) => p.usedInCode).length,
  totalUnused: fotoEntries.filter((p) => !p.usedInCode).length,
  folders,
}

writeFileSync(OUTPUT_PATH, JSON.stringify(inventory, null, 2))

console.log('')
console.log(`Inventario generado en ${OUTPUT_PATH}`)
console.log(`  Total: ${inventory.totalPhotos} imágenes`)
console.log(`  En uso: ${inventory.totalUsed}`)
console.log(`  Sin uso: ${inventory.totalUnused}`)
console.log(`  Carpetas: ${folders.length}`)
console.log('')
console.log('Desglose por carpeta:')
for (const f of folders) {
  const usedLabel = f.usedCount > 0 ? ` (${f.usedCount} en uso)` : ''
  console.log(`  ${f.count.toString().padStart(4)}  ${f.folder}${usedLabel}`)
}

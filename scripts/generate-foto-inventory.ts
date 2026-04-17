/**
 * Genera un inventario de todas las imágenes en public/
 * y detecta cuáles están referenciadas en el código fuente.
 *
 * Resuelve la cadena completa de imports (data → componente → page.tsx/layout.tsx)
 * para que el visor pueda responder "¿en qué páginas finales aparece esta foto?".
 *
 * - Distingue `import type` de imports de valor para evitar falsos positivos.
 * - Si una imagen se resuelve a un layout, reporta el layout (no explota páginas hijas).
 *
 * Uso: pnpm run inventory
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { join, relative, extname, dirname, resolve } from 'path'
import * as ts from 'typescript'

const PUBLIC_DIR = join(process.cwd(), 'public')
const SRC_DIR = join(process.cwd(), 'src')
const OUTPUT_PATH = join(process.cwd(), 'src', 'data', 'foto-inventory.json')

const IMAGE_EXTENSIONS = new Set([
  '.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif',
  '.JPG', '.JPEG', '.PNG',
])

// Carpetas de public/ sin fotos relevantes
const SKIP_DIRS = new Set(['docs', 'video', 'logos-clientes', '_descartes'])

// Extensiones que el resolver prueba para módulos sin extensión explícita
const MODULE_EXTENSIONS = ['.ts', '.tsx']

interface FotoEntry {
  path: string
  folder: string
  filename: string
  usedInCode: boolean
  /**
   * Lista de consumidores con prefijo semántico:
   * - `page: <ruta>` — página final que monta la imagen (directa o transitivamente).
   * - `layout: <ruta>` — layout que monta la imagen (aplica a todo su árbol).
   * - `componente: <carpeta/nombre>` — componente que referencia la imagen directamente.
   * - `data: <nombre>` — data file que referencia la imagen (solo cuando no alcanza una página).
   */
  usedIn: string[]
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

// ------------------------------------------------------------------
// Friendly names para el campo usedIn
// ------------------------------------------------------------------

function friendlyPageName(filePath: string): string {
  const route = filePath
    .replace(/^src\/app\//, '')
    .replace(/\/page\.tsx$/, '')
    .replace(/\([^)]+\)\/?/g, '') // quitar route groups como (dev), (admin), (legal) — con o sin slash final
    .replace(/\/$/, '')
  return route || 'home'
}

function friendlyLayoutName(filePath: string): string {
  const route = filePath
    .replace(/^src\/app\//, '')
    .replace(/\/?layout\.tsx$/, '')
  // Para layouts sí conservamos los route groups porque la semántica "(dev)" o "(en)/(legal)"
  // es relevante: le dice al usuario que la imagen aplica a todo el árbol de ese grupo.
  return route || 'root'
}

/**
 * Archivos en `src/app/**` que no son `page.tsx` ni `layout.tsx` (ej: `home-client.tsx`,
 * `sections/mosaic-cases.tsx`). Son client components o helpers acoplados a una ruta.
 */
function friendlyAppHelperName(filePath: string): string {
  const route = filePath
    .replace(/^src\/app\//, '')
    .replace(/\.(ts|tsx)$/, '')
    .replace(/\([^)]+\)\/?/g, '')
    .replace(/\/$/, '')
  return route
}

function friendlyComponentName(filePath: string): string {
  const parts = filePath.replace(/\.(ts|tsx)$/, '').split('/')
  const componentParts = parts.slice(-2)
  return componentParts.join('/')
}

function friendlyDataName(filePath: string): string {
  return filePath.split('/').pop()?.replace(/\.(ts|tsx)$/, '') ?? filePath
}

function classifyFile(filePath: string): 'page' | 'layout' | 'appHelper' | 'component' | 'data' | 'other' {
  if (filePath.startsWith('src/app/') && filePath.endsWith('/page.tsx')) return 'page'
  if (filePath.startsWith('src/app/') && filePath.endsWith('/layout.tsx')) return 'layout'
  if (filePath.startsWith('src/app/')) return 'appHelper' // client components, sections, etc.
  if (filePath.startsWith('src/data/')) return 'data'
  if (filePath.startsWith('src/components/')) return 'component'
  return 'other'
}

function labelForFile(filePath: string): string {
  const kind = classifyFile(filePath)
  switch (kind) {
    case 'page': return `page: ${friendlyPageName(filePath)}`
    case 'layout': return `layout: ${friendlyLayoutName(filePath)}`
    case 'appHelper': return `componente: ${friendlyAppHelperName(filePath)}`
    case 'component': return `componente: ${friendlyComponentName(filePath)}`
    case 'data': return `data: ${friendlyDataName(filePath)}`
    default: return filePath
  }
}

// ------------------------------------------------------------------
// Escaneo del filesystem
// ------------------------------------------------------------------

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

// ------------------------------------------------------------------
// Parseo de imports (con TypeScript compiler API)
// ------------------------------------------------------------------

/**
 * Extrae los specifiers importados como valor (no type-only).
 *
 * Ignora:
 * - `import type { X } from 'mod'` (declaración entera type-only)
 * - Imports donde todos los named bindings son `type` individualmente
 * - Imports vacíos (`import 'mod'`) no se ignoran — son side effects
 *
 * Si hay al menos un binding de valor (default, namespace, o named sin type),
 * el modulo se considera importado como runtime.
 */
function extractValueImports(content: string, filePath: string): string[] {
  const sourceFile = ts.createSourceFile(
    filePath,
    content,
    ts.ScriptTarget.Latest,
    true,
    filePath.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  )

  const modules = new Set<string>()

  function visit(node: ts.Node) {
    if (ts.isImportDeclaration(node)) {
      const moduleSpec = node.moduleSpecifier
      if (!ts.isStringLiteral(moduleSpec)) return

      const spec = moduleSpec.text

      // Caso 1: sin importClause (side-effect import: `import 'mod'`)
      // No aporta valor al grafo de fotos (nada se "propaga"), lo ignoramos.
      if (!node.importClause) return

      // Caso 2: declaración entera es type-only (`import type { X } from 'mod'`)
      if (node.importClause.isTypeOnly) return

      // Caso 3: named imports donde TODOS los bindings son `type X` individualmente
      const namedBindings = node.importClause.namedBindings
      const hasDefault = !!node.importClause.name
      const hasNamespace = namedBindings && ts.isNamespaceImport(namedBindings)

      if (hasDefault || hasNamespace) {
        modules.add(spec)
      } else if (namedBindings && ts.isNamedImports(namedBindings)) {
        const anyValueBinding = namedBindings.elements.some((el) => !el.isTypeOnly)
        if (anyValueBinding) modules.add(spec)
      }
    }

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return Array.from(modules)
}

// ------------------------------------------------------------------
// Resolución de módulos
// ------------------------------------------------------------------

/**
 * Resuelve un specifier a una ruta relativa al repo (ej: "src/components/x.tsx").
 * Devuelve null para módulos externos (react, next, etc.) o que no resuelven.
 */
function resolveModule(
  spec: string,
  fromFile: string,
  sourceFileSet: Set<string>,
): string | null {
  let candidateBase: string

  if (spec.startsWith('@/')) {
    // @/foo/bar → src/foo/bar
    candidateBase = 'src/' + spec.slice(2)
  } else if (spec.startsWith('./') || spec.startsWith('../')) {
    // Relativo al archivo fuente
    const fromDir = dirname(fromFile)
    candidateBase = normalizeRelPath(join(fromDir, spec))
  } else {
    // Externo (react, next, @radix-ui/*, etc.)
    return null
  }

  // Probar extensiones + index
  const candidates = [
    candidateBase + '.ts',
    candidateBase + '.tsx',
    candidateBase + '/index.ts',
    candidateBase + '/index.tsx',
  ]

  // Si ya trae extensión, probar tal cual
  if (/\.(ts|tsx|json)$/.test(candidateBase)) {
    candidates.unshift(candidateBase)
  }

  for (const candidate of candidates) {
    if (sourceFileSet.has(candidate)) return candidate
  }

  return null
}

function normalizeRelPath(p: string): string {
  // join() en macOS puede dejar "src/app/../../..". Lo simplificamos.
  const parts: string[] = []
  for (const segment of p.split('/')) {
    if (segment === '' || segment === '.') continue
    if (segment === '..') parts.pop()
    else parts.push(segment)
  }
  return parts.join('/')
}

// ------------------------------------------------------------------
// Grafo de imports + BFS hasta terminales
// ------------------------------------------------------------------

/**
 * Construye el grafo inverso: cada archivo → Set de archivos que lo importan.
 */
function buildReverseImportGraph(sourceFiles: SourceFile[]): Map<string, Set<string>> {
  const sourceFileSet = new Set(sourceFiles.map((f) => f.relativePath))
  const reverse = new Map<string, Set<string>>()

  for (const file of sourceFiles) {
    const imports = extractValueImports(file.content, file.relativePath)
    for (const spec of imports) {
      const resolved = resolveModule(spec, file.relativePath, sourceFileSet)
      if (!resolved) continue
      if (!reverse.has(resolved)) reverse.set(resolved, new Set())
      reverse.get(resolved)!.add(file.relativePath)
    }
  }

  return reverse
}

/**
 * BFS desde los archivos iniciales subiendo por el grafo reverso.
 * Se detiene en cada archivo terminal (page o layout) sin continuar hacia sus importadores.
 * Devuelve el set de archivos terminales alcanzados.
 */
function bfsToTerminals(
  startFiles: string[],
  reverseGraph: Map<string, Set<string>>,
): Set<string> {
  const terminals = new Set<string>()
  const visited = new Set<string>()
  const queue: string[] = [...startFiles]

  while (queue.length) {
    const current = queue.shift()!
    if (visited.has(current)) continue
    visited.add(current)

    const kind = classifyFile(current)
    if (kind === 'page' || kind === 'layout') {
      terminals.add(current)
      continue // no seguimos subiendo desde terminales
    }

    const importers = reverseGraph.get(current)
    if (!importers) continue
    for (const importer of importers) {
      if (!visited.has(importer)) queue.push(importer)
    }
  }

  return terminals
}

// ------------------------------------------------------------------
// Pipeline principal
// ------------------------------------------------------------------

console.log('Escaneando public/...')
const allImages = scanDirectory(PUBLIC_DIR)
console.log(`  ${allImages.length} imágenes encontradas`)

console.log('Leyendo código fuente...')
const sourceFiles = loadSourceFiles(SRC_DIR)
console.log(`  ${sourceFiles.length} archivos fuente`)

console.log('Construyendo grafo de imports...')
const reverseGraph = buildReverseImportGraph(sourceFiles)
console.log(`  ${reverseGraph.size} archivos con importadores`)

console.log('Resolviendo consumidores por imagen...')
const fotoEntries: FotoEntry[] = allImages.map((fullPath) => {
  const relativePath = '/' + relative(PUBLIC_DIR, fullPath)
  const parts = relativePath.split('/')
  const filename = parts[parts.length - 1]
  const folder = parts.length > 2 ? parts.slice(1, -1).join('/') : '(raíz)'

  // 1. Buscar archivos que mencionen la ruta literal.
  const directRefs = sourceFiles
    .filter((f) => f.content.includes(relativePath))
    .map((f) => f.relativePath)

  // 2. Separar los que ya son terminales (page/layout) de los intermedios.
  const terminalDirect = new Set<string>()
  const intermediateDirect: string[] = []

  for (const ref of directRefs) {
    const kind = classifyFile(ref)
    if (kind === 'page' || kind === 'layout') {
      terminalDirect.add(ref)
    } else {
      intermediateDirect.push(ref)
    }
  }

  // 3. Para los intermedios, hacer BFS hasta alcanzar pages/layouts.
  const terminalsFromBfs = bfsToTerminals(intermediateDirect, reverseGraph)

  // 4. Unir terminals directos + terminals derivados.
  const allTerminals = new Set<string>([...terminalDirect, ...terminalsFromBfs])

  // 5. Construir usedIn con prefijos.
  const usedIn: string[] = []

  // Pages/layouts primero (lo más útil para el JTBD).
  const terminalsSorted = Array.from(allTerminals).sort()
  for (const t of terminalsSorted) {
    usedIn.push(labelForFile(t))
  }

  // Luego los intermedios (componentes y data files) para debugging/transparencia.
  // Si el intermedio no resolvió a ningún terminal, igual se incluye — señala
  // fotos huérfanas (ej: array runtime sin consumer).
  const intermediatesSorted = intermediateDirect.slice().sort()
  for (const interm of intermediatesSorted) {
    usedIn.push(labelForFile(interm))
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

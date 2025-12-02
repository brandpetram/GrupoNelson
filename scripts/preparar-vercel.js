/**
 * NOMBRE: preparar-vercel.js
 * DESCRIPCIÓN: Prepara el proyecto para deploy en Vercel:
 *              1. Reemplaza dependencias locales (file:) por versiones del registro
 *              2. Crea .npmrc con el token de GitHub Packages
 *
 * USO: node scripts/preparar-vercel.js
 *
 * COMPORTAMIENTO:
 *   - Solo ejecuta si está en entorno Vercel (VERCEL=1)
 *   - Reemplaza "file:../componentes-brandpetram" por la versión especificada
 *   - Crea .npmrc con el token de NPM_AUTH_TOKEN
 *   - En local, no hace nada (permite desarrollo con symlink)
 *
 * CONFIGURACIÓN:
 *   - BRANDPETRAM_VERSION: versión a usar en producción (default: ^0.0.7)
 *   - NPM_AUTH_TOKEN: token de GitHub con permisos read:packages
 */

const fs = require('fs')
const path = require('path')

const PACKAGE_JSON_PATH = path.join(__dirname, '..', 'package.json')
const NPMRC_PATH = path.join(__dirname, '..', '.npmrc')
const LOCAL_DEP_PATTERN = 'file:../componentes-brandpetram'
const REGISTRY_VERSION = process.env.BRANDPETRAM_VERSION || '^0.0.8'

function main() {
  // Solo ejecutar en Vercel
  if (!process.env.VERCEL) {
    console.log('[preparar-vercel] No estamos en Vercel, saltando...')
    return
  }

  console.log('[preparar-vercel] Detectado entorno Vercel')

  // 1. Actualizar package.json
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'))
  const currentVersion = packageJson.dependencies['@brandpetram/componentes-2026']

  if (currentVersion === LOCAL_DEP_PATTERN) {
    console.log(`[preparar-vercel] Reemplazando "${LOCAL_DEP_PATTERN}" por "${REGISTRY_VERSION}"`)
    packageJson.dependencies['@brandpetram/componentes-2026'] = REGISTRY_VERSION
    fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n')
    console.log('[preparar-vercel] package.json actualizado')
  } else {
    console.log(`[preparar-vercel] Versión actual: ${currentVersion} (no es local, no se modifica)`)
  }

  // 2. Crear .npmrc con token
  const npmToken = process.env.NPM_AUTH_TOKEN
  if (npmToken) {
    const npmrcContent = `@brandpetram:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${npmToken}
`
    fs.writeFileSync(NPMRC_PATH, npmrcContent)
    console.log('[preparar-vercel] .npmrc creado con token')
  } else {
    console.warn('[preparar-vercel] ADVERTENCIA: NPM_AUTH_TOKEN no está definido')
  }
}

main()

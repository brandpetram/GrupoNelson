/**
 * NOMBRE: preparar-vercel.js
 * DESCRIPCIÓN: Reemplaza dependencias locales (file:) por versiones del registro
 *              antes de instalar en Vercel
 *
 * USO: node scripts/preparar-vercel.js
 *
 * COMPORTAMIENTO:
 *   - Solo modifica package.json si está en entorno Vercel (VERCEL=1)
 *   - Reemplaza "file:../componentes-brandpetram" por la versión especificada
 *   - En local, no hace nada (permite desarrollo con symlink)
 *
 * CONFIGURACIÓN:
 *   - BRANDPETRAM_VERSION: versión a usar en producción (default: ^0.0.7)
 */

const fs = require('fs')
const path = require('path')

const PACKAGE_JSON_PATH = path.join(__dirname, '..', 'package.json')
const LOCAL_DEP_PATTERN = 'file:../componentes-brandpetram'
const REGISTRY_VERSION = process.env.BRANDPETRAM_VERSION || '^0.0.7'

function main() {
  // Solo ejecutar en Vercel
  if (!process.env.VERCEL) {
    console.log('[preparar-vercel] No estamos en Vercel, saltando...')
    return
  }

  console.log('[preparar-vercel] Detectado entorno Vercel')

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
}

main()

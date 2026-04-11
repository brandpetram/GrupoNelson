/**
 * Mapa bidireccional de rutas inglés ↔ español.
 *
 * IMPORTANTE: Este mapa refleja la estructura FUTURA de Fase 6.
 *   - Inglés en (en)/ route group (URLs sin prefijo: /, /about/...)
 *   - Español en es/ segmento real (URLs con prefijo: /es/, /es/nelson/...)
 *
 * La estructura ACTUAL es diferente:
 *   - Español en / (sin prefijo)
 *   - Inglés en /en/ (con prefijo)
 *
 * Este archivo se activará en language-flags.tsx cuando Fase 6a
 * reorganice las rutas. Hasta entonces, language-flags usa lógica simple.
 *
 * Solo incluye páginas públicas traducibles.
 * No incluye: blog, noticias (Sanity), instrucciones, dev, studio, productos.
 */

/** Rutas inglés → español */
const enToEs: Record<string, string> = {
  // Home
  '/': '/es',

  // About (Nelson)
  '/about/our-story': '/es/nelson/nuestra-historia',
  '/about/track-record': '/es/nelson/trayectoria',
  '/about/difference': '/es/nelson/diferencia-nelson',
  '/about/leadership': '/es/nelson/liderazgo',

  // Industrial Parks
  '/industrial-parks': '/es/parques-industriales-mexicali',
  '/industrial-parks/nelson-ii': '/es/parques-industriales-mexicali/nelson-ii',
  '/industrial-parks/nelson-i': '/es/parques-industriales-mexicali/nelson-i',
  '/industrial-parks/vigia-i': '/es/parques-industriales-mexicali/vigia-i',
  '/industrial-parks/vigia-ii': '/es/parques-industriales-mexicali/vigia-ii',

  // Construction
  '/construction/baumex': '/es/constructora/baumex',
  '/construction/build-to-suit': '/es/constructora/build-to-suit',
  '/construction/turnkey': '/es/constructora/llave-en-mano',
  '/construction/engineering-design': '/es/constructora/diseno-e-ingenieria',
  '/construction/specialized-projects': '/es/constructora/proyectos-especializados',
  '/construction/international-standards': '/es/constructora/estandares-internacionales',
  '/construction/portfolio': '/es/constructora/portafolio',

  // LEED
  '/construction/leed': '/es/constructora/leed',
  '/construction/leed/sustainable-sites': '/es/constructora/leed/sitios-sostenibles',
  '/construction/leed/energy-atmosphere': '/es/constructora/leed/energia-atmosfera',
  '/construction/leed/indoor-environmental-quality': '/es/constructora/leed/calidad-ambiental',
  '/construction/leed/materials-resources': '/es/constructora/leed/materiales-recursos',
  '/construction/leed/certification-process': '/es/constructora/leed/proceso-certificacion',
  '/construction/leed/extreme-climate': '/es/constructora/leed/clima-extremo',
  '/construction/leed/operating-systems': '/es/constructora/leed/sistemas-operativos',

  // Experience
  '/experience/operational-excellence': '/es/experiencia/excelencia-operativa',
  '/experience/success-stories': '/es/experiencia/casos-de-exito',
  '/experience/standards-certifications': '/es/experiencia/normas-certificaciones-estandares',

  // Inventory
  '/inventory/available-buildings': '/es/inventario/naves-disponibles',
  '/inventory/land': '/es/inventario/terrenos',

  // Contact
  '/contact': '/es/contacto',
  '/thank-you': '/es/gracias',

  // Resources
  '/resources': '/es/recursos',

  // Legal
  '/privacy-policy': '/es/aviso-de-privacidad',
  '/terms': '/es/terminos',
  '/cookie-policy': '/es/politica-de-cookies',
}

/** Inverso automático: español → inglés */
const esToEn: Record<string, string> = Object.fromEntries(
  Object.entries(enToEs).map(([en, es]) => [es, en])
)

/** Obtener la ruta equivalente en español. Fallback: /es */
export function toSpanish(path: string): string {
  return enToEs[path] ?? '/es'
}

/** Obtener la ruta equivalente en inglés. Fallback: / */
export function toEnglish(path: string): string {
  return esToEn[path] ?? '/'
}

/** Verificar si una ruta tiene equivalente en el otro idioma */
export function hasTranslation(path: string): boolean {
  return path in enToEs || path in esToEn
}

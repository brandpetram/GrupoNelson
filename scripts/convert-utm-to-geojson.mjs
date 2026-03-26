/**
 * Convierte coordenadas UTM WGS-84 de los deslindes a lat/lng
 * y genera un GeoJSON con los polígonos de cada terreno.
 *
 * Zona UTM: 11N (Mexicali, Baja California ~-115°)
 * Datum: WGS-84
 *
 * Coordenadas extraídas de los PDFs de deslinde en:
 * docs/enviados-por-susana/deslindes/
 */

import proj4 from 'proj4'
import { writeFileSync } from 'fs'

// Definir proyección UTM Zona 11N WGS-84
const utm11n = '+proj=utm +zone=11 +datum=WGS84 +units=m +no_defs'
const wgs84 = '+proj=longlat +datum=WGS84 +no_defs'

function utmToLatLng(easting, northing) {
  const [lng, lat] = proj4(utm11n, wgs84, [easting, northing])
  return [lng, lat] // GeoJSON usa [lng, lat]
}

// ─── COORDENADAS UTM EXTRAÍDAS DE LOS DESLINDES ──────────────────────────

const terrenos = [
  // ── Spot Technology (K0501102) ──────────────────────────────────────────
  {
    id: 'ni-spot-technology',
    nombre: 'Spot Technology',
    claveCatastral: 'K05-011-02',
    utm: [
      { y: 3606182.6343, x: 649653.8447 },
      { y: 3606096.0174, x: 649824.5214 },
      { y: 3606052.2440, x: 649804.4845 },
      { y: 3606000.7566, x: 649782.9256 },
      { y: 3606088.9633, x: 649609.1164 },
    ],
  },

  // ── Parcela 50 - Polígono General (Constructora Bademi) ─────────────────
  // Superficie total: 204,276.170 M2
  {
    id: 'cb-parcela-50-general',
    nombre: 'Parcela 50 (Polígono General)',
    claveCatastral: 'R5-050',
    utm: [
      { y: 3602818.5045, x: 654274.2403 },
      { y: 3602633.3225, x: 654715.8007 },
      { y: 3602363.2815, x: 654144.1343 },
      { y: 3602860.8295, x: 654271.1933 },
      { y: 3602818.5045, x: 654274.2403 },
    ],
  },

  // ── Parcela 50 Fracción 1 (128,822 m²) ──────────────────────────────────
  {
    id: 'cb-ej-puebla-fr1',
    nombre: 'Ejido Puebla Fr. 1 (Parcela 50)',
    claveCatastral: 'R5-050-001',
    utm: [
      { y: 3602818.5045, x: 654274.2403 },
      { y: 3602633.3225, x: 654530.2904 },
      { y: 3602363.1121, x: 654394.4832 },
      { y: 3602363.2815, x: 654144.1343 },
      { y: 3602860.8295, x: 654271.1933 },
    ],
  },

  // ── Parcela 50 Fracción 2 (2,106.714 m²) ────────────────────────────────
  {
    id: 'cb-ej-puebla-fr2',
    nombre: 'Ejido Puebla Fr. 2',
    claveCatastral: 'R5-050-002',
    utm: [
      { y: 3602702.7556, x: 654532.2945 },
      { y: 3602629.5203, x: 654715.0803 },
      { y: 3602620.8630, x: 654712.3615 },
      { y: 3602691.2732, x: 654532.2945 },
    ],
  },

  // ── Parcela 50 Fracción 3 (20,000 m²) ───────────────────────────────────
  {
    id: 'cb-ej-puebla-fr3',
    nombre: 'Ejido Puebla Fr. 3',
    claveCatastral: 'R5-050-003',
    utm: [
      { y: 3602060.5338, x: 654314.0398 },
      { y: 3602521.0315, x: 654712.3615 },
      { y: 3602397.8530, x: 654442.7254 },
      { y: 3602457.8043, x: 654475.7751 },
    ],
  },

  // ── Parcela 50 Fracción 4 (22,706.031 m²) ──────────────────────────────
  {
    id: 'cb-ej-puebla-fr4',
    nombre: 'Ejido Puebla Fr. 4',
    claveCatastral: 'R5-050-004',
    utm: [
      { y: 3602457.8043, x: 654475.7751 },
      { y: 3602397.8530, x: 654442.7254 },
      { y: 3602263.1321, x: 654424.4922 },
      { y: 3602367.9630, x: 654714.0398 },
    ],
  },

  // ── Col. Calles 018 (Q5018014) ─────────────────────────────────────────
  {
    id: 'ni-c-calles-018',
    nombre: 'Col. Calles 018',
    claveCatastral: 'Q5-018-014',
    utm: [
      { y: 3610773.5667, x: 649852.2140 },
      { y: 3610676.0099, x: 649853.3425 },
      { y: 3610674.0507, x: 649776.1405 },
    ],
  },

  // Col. Calles 008 (Q5018008) — REMOVIDO: coordenadas incorrectas,
  // necesita re-extraer del PDF Q5018008.pdf

  // ── Carranza P3 (G4-007-026) ───────────────────────────────────────────
  {
    id: 'nl-carranza-p3',
    nombre: 'Carranza P3',
    claveCatastral: 'G4-007-026',
    utm: [
      { y: 3606721.3469, x: 649632.7986 },
      { y: 3606698.6054, x: 649621.2187 },
      { y: 3606715.4023, x: 649557.1203 },
      { y: 3606739.2245, x: 649566.6053 },
    ],
  },

  // ── Carranza P4 (G4-007-027) ───────────────────────────────────────────
  {
    id: 'nl-carranza-p4',
    nombre: 'Carranza P4',
    claveCatastral: 'G4-007-027',
    utm: [
      { y: 3606715.4023, x: 649557.1302 },
      { y: 3606698.6064, x: 649621.2187 },
      { y: 3606690.4169, x: 649617.3739 },
      { y: 3606696.2560, x: 649549.4871 },
    ],
  },

  // ── Carranza P5 (G4-007-028) ───────────────────────────────────────────
  {
    id: 'nl-carranza-p5',
    nombre: 'Carranza P5',
    claveCatastral: 'G4-007-028',
    utm: [
      { y: 3606696.2560, x: 649549.4871 },
      { y: 3606690.4169, x: 649617.3739 },
      { y: 3606680.4169, x: 649611.9572 },
      { y: 3606662.2285, x: 649602.5556 },
    ],
  },

  // ── Carranza P6 (G4-007-029) ───────────────────────────────────────────
  {
    id: 'nl-carranza-p6',
    nombre: 'Carranza P6',
    claveCatastral: 'G4-007-029',
    utm: [
      { y: 3606664.0420, x: 649601.4956 },
      { y: 3606672.1225, x: 649541.8739 },
      { y: 3606696.2560, x: 649549.4871 },
      { y: 3606680.4169, x: 649611.9572 },
    ],
  },

  // ── Rancho Clifford 009 (P8-500-009) ───────────────────────────────────
  {
    id: 'ni-r-clifford-009',
    nombre: 'Rancho Clifford 009',
    claveCatastral: 'P8-500-009',
    utm: [
      { y: 3610613.7198, x: 636846.1803 },
      { y: 3610613.6387, x: 636512.3162 },
      { y: 3610320.0948, x: 636374.4960 },
      { y: 3610404.2867, x: 636054.1870 },
      { y: 3610611.7198, x: 636846.1803 },
    ],
  },

  // ── Amboise - Sres. Hurtado (F4-022-009) ───────────────────────────────
  {
    id: 'a-c-prieto-l22',
    nombre: 'Cerro Prieto L22 (Amboise)',
    claveCatastral: 'F4-022-009',
    utm: [
      { y: 3600830.6675, x: 649345.7070 },
      { y: 3601235.1175, x: 649210.0451 },
      { y: 3601238.4384, x: 649471.4724 },
      { y: 3600830.4703, x: 649600.2382 },
    ],
  },
]

// ─── TERRENOS CON COORDENADAS MANUALES (lat/lng directo, sin UTM) ─────────

const terrenosLatLng = [
  // Edificio SLP — Calle 4 exterior 500, Interpuerto Parque Logístico, SLP
  // Coordenadas aproximadas del Interpuerto Parque Logístico, C.P. 78426
  {
    id: 'pn-slp-004',
    nombre: 'Edificio SLP',
    claveCatastral: 'R5-050-004',
    lat: 22.1485,
    lng: -100.8760,
  },
]

// ─── CONVERSIÓN Y GENERACIÓN DE GEOJSON ──────────────────────────────────

const features = terrenos.map(terreno => {
  const coordinates = terreno.utm.map(p => utmToLatLng(p.x, p.y))

  // Cerrar el polígono si no está cerrado
  const first = coordinates[0]
  const last = coordinates[coordinates.length - 1]
  if (first[0] !== last[0] || first[1] !== last[1]) {
    coordinates.push([...first])
  }

  // Calcular centroide para el pin
  const lats = coordinates.map(c => c[1])
  const lngs = coordinates.map(c => c[0])
  const centroid = {
    lat: lats.reduce((a, b) => a + b) / lats.length,
    lng: lngs.reduce((a, b) => a + b) / lngs.length,
  }

  return {
    type: 'Feature',
    properties: {
      id: terreno.id,
      nombre: terreno.nombre,
      claveCatastral: terreno.claveCatastral,
      centroid,
    },
    geometry: {
      type: 'Polygon',
      coordinates: [coordinates],
    },
  }
})

// Features de terrenos con coordenadas manuales (Point, no Polygon)
const pointFeatures = terrenosLatLng.map(t => ({
  type: 'Feature',
  properties: {
    id: t.id,
    nombre: t.nombre,
    claveCatastral: t.claveCatastral,
    centroid: { lat: t.lat, lng: t.lng },
  },
  geometry: {
    type: 'Point',
    coordinates: [t.lng, t.lat],
  },
}))

const geojson = {
  type: 'FeatureCollection',
  features: [...features, ...pointFeatures],
}

// Guardar GeoJSON
writeFileSync(
  new URL('../src/data/terrenos-geo.json', import.meta.url),
  JSON.stringify(geojson, null, 2),
  'utf-8'
)

// Imprimir resumen para validación
console.log('\n=== RESUMEN DE CONVERSIÓN ===\n')
features.forEach(f => {
  const { nombre, claveCatastral, centroid } = f.properties
  console.log(`${nombre} (${claveCatastral})`)
  console.log(`  Centroide: ${centroid.lat.toFixed(6)}, ${centroid.lng.toFixed(6)}`)
  console.log(`  Google Maps: https://www.google.com/maps?q=${centroid.lat.toFixed(6)},${centroid.lng.toFixed(6)}`)
  console.log(`  Vértices: ${f.geometry.coordinates[0].length}`)
  console.log()
})

// Terrenos con coordenadas manuales
pointFeatures.forEach(f => {
  const { nombre, claveCatastral, centroid } = f.properties
  console.log(`${nombre} (${claveCatastral}) [PIN]`)
  console.log(`  Centroide: ${centroid.lat.toFixed(6)}, ${centroid.lng.toFixed(6)}`)
  console.log(`  Google Maps: https://www.google.com/maps?q=${centroid.lat.toFixed(6)},${centroid.lng.toFixed(6)}`)
  console.log()
})

console.log(`Total: ${features.length + pointFeatures.length} terrenos (${features.length} polígonos, ${pointFeatures.length} pins)`)

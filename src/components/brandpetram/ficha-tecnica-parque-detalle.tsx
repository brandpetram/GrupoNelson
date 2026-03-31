"use client"

// Ficha técnica de parque industrial — estilo página de detalle
// Adaptado de la ficha técnica de Extrutech
// Sin props — hardcodeado con Nelson II como ejemplo

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const parque = {
  name: "Parque Industrial Nelson II",
  shortName: "Nelson II",
  since: 2018,
  heroImage: "/parque-industrial-nelson-2-en-mexicali.jpeg",
  address: "Venustiano Carranza #350, Mexicali B.C. CP. 21383",
  location: "Corredor Industrial, Blvd. Venustiano Carranza, entre Av. Piñon y Manzanilla",
  landSizeHectares: 26.6,
  totalBuildings: 3,
  establishedCompanies: 1,
  infrastructure: [
    "Seguridad 24/7",
    "Agua potable",
    "Drenaje",
    "Electricidad",
    "Comunicaciones",
    "Acceso pavimentado",
    "Gas natural",
    "Sistema centralizado de protección contra incendios bajo estándares NFPA y FM",
    "Fuerza laboral disponible en la zona",
  ],
}

const especificacionesGenerales = [
  {
    grupo: "Datos generales",
    filas: [
      { label: "Nombre", valor: "Parque Industrial Nelson II" },
      { label: "Año de operación", valor: "2018" },
      { label: "Superficie total", valor: "26.6 hectáreas" },
      { label: "Ubicación", valor: "Corredor Industrial, Blvd. Venustiano Carranza" },
      { label: "Dirección", valor: "Venustiano Carranza #350, Mexicali B.C. CP. 21383" },
    ],
  },
  {
    grupo: "Capacidad",
    filas: [
      { label: "Naves totales", valor: "3" },
      { label: "Empresas establecidas", valor: "1" },
    ],
  },
]

const naves = [
  {
    id: "nave-1",
    name: "Nave 1",
    area: "6,002.42 m² (64,609 sq ft)",
    height: "10.78 m (35.37 ft) máx",
    docks: "6 andenes",
    structure: "Marco rígido metálico",
  },
  {
    id: "nave-2",
    name: "Nave 2",
    area: "6,002.42 m² (65,651 sq ft)",
    height: "10.78 m (35.37 ft) máx",
    docks: "6 andenes con niveladores + 1 a nivel de piso",
    structure: "Marco rígido metálico",
  },
  {
    id: "nave-3",
    name: "Nave 3",
    area: "5,652.40 m² (60,841 sq ft)",
    height: "10.78 m (35.37 ft) máx / 8.53 m libre",
    docks: "6 andenes con niveladores + 1 a nivel de piso",
    structure: "Marco rígido metálico",
  },
]

export function FichaTecnicaParqueDetalle() {
  const [lightboxAbierto, setLightboxAbierto] = useState(false)
  const [naveExpandida, setNaveExpandida] = useState<string | null>(null)

  return (
    <div data-component="FichaTecnicaParqueDetalle" data-component-file="src/components/brandpetram/ficha-tecnica-parque-detalle.tsx" data-component-props="false" className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* Lightbox */}
      {lightboxAbierto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxAbierto(false)}
        >
          <div
            className="relative w-full h-full max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={parque.heroImage}
              alt={parque.name}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setLightboxAbierto(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="border-b border-zinc-100 dark:border-zinc-800 px-6 py-3">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
          <Link href="/" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Inicio</Link>
          <span>›</span>
          <Link href="/productos" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Productos</Link>
          <span>›</span>
          <Link href="/productos/catalogo-filtrado" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Parques Industriales</Link>
          <span>›</span>
          <span className="font-medium text-zinc-700 dark:text-zinc-300">{parque.shortName}</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">

        {/* Encabezado */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
              {parque.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold mt-1" style={{ color: "var(--primary)" }}>
              Desde {parque.since} · {parque.landSizeHectares} hectáreas
            </p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
              {parque.location}
            </p>
          </div>

          <button className="hidden sm:flex items-center gap-2 shrink-0 text-sm font-medium text-white px-4 py-2.5 rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--primary)" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Imprimir Ficha
          </button>
        </div>

        {/* Divisor color primario */}
        <div className="h-px w-full" style={{ backgroundColor: "var(--primary)" }} />

        {/* Layout principal: imagen + specs */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Columna izquierda — imagen del parque */}
          <div className="w-full lg:w-80 shrink-0 space-y-3">

            {/* Imagen principal */}
            <div
              className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl overflow-hidden aspect-[4/3] cursor-zoom-in group"
              onClick={() => setLightboxAbierto(true)}
            >
              <Image
                src={parque.heroImage}
                alt={parque.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-black/40 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0v0M11 8v6M8 11h6" />
                </svg>
              </div>
            </div>

            {/* Infraestructura */}
            <div className="pt-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Infraestructura</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {parque.infrastructure.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha — especificaciones */}
          <div className="flex-1 space-y-0">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
              Especificaciones del parque
            </h2>

            {especificacionesGenerales.map((seccion, si) => (
              <div key={si}>
                <div className="px-4 py-2.5 rounded-sm" style={{ backgroundColor: "var(--primary)" }}>
                  <span className="text-sm font-semibold text-white">{seccion.grupo}</span>
                </div>
                {seccion.filas.map((fila, fi) => (
                  <div
                    key={fi}
                    className={`flex justify-between items-start px-4 py-3 text-sm border-b border-zinc-100 dark:border-zinc-800 ${
                      fi % 2 === 0 ? "bg-white dark:bg-zinc-950" : "bg-zinc-50 dark:bg-zinc-900"
                    }`}
                  >
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 mr-4 shrink-0">{fila.label}</span>
                    <span className="text-zinc-600 dark:text-zinc-400 text-right">{fila.valor}</span>
                  </div>
                ))}
                <div className="mb-4" />
              </div>
            ))}

            {/* Naves */}
            <div>
              <div className="px-4 py-2.5 rounded-sm" style={{ backgroundColor: "var(--primary)" }}>
                <span className="text-sm font-semibold text-white">Naves industriales ({naves.length})</span>
              </div>
              {naves.map((nave, ni) => (
                <div key={nave.id}>
                  <button
                    onClick={() => setNaveExpandida(naveExpandida === nave.id ? null : nave.id)}
                    className={`w-full flex justify-between items-center px-4 py-3 text-sm border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors ${
                      ni % 2 === 0 ? "bg-white dark:bg-zinc-950" : "bg-zinc-50 dark:bg-zinc-900"
                    }`}
                  >
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">{nave.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-500 dark:text-zinc-400 text-right hidden sm:inline">{nave.area}</span>
                      <svg
                        className={`w-4 h-4 text-zinc-400 transition-transform ${naveExpandida === nave.id ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {naveExpandida === nave.id && (
                    <div className="px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Área total</p>
                          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{nave.area}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Altura</p>
                          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{nave.height}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Andenes</p>
                          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{nave.docks}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Estructura</p>
                          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{nave.structure}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

// Ficha técnica de parque industrial — dinámica por slug
// Lee datos reales de parks-data.ts

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { IndustrialPark, Building } from "@/data/parks/types"

function formatArea(m2: number, sqft?: number) {
  const m2Str = m2.toLocaleString("es-MX", { maximumFractionDigits: 2 })
  if (sqft) return `${m2Str} m² (${sqft.toLocaleString("en-US")} sq ft)`
  return `${m2Str} m²`
}

function formatHeight(m: number, ft?: number) {
  if (ft) return `${m} m (${ft} ft)`
  return `${m} m`
}

function buildEspecificaciones(park: IndustrialPark) {
  const navesTotal = park.totalBuildings ?? park.buildings.length

  return [
    {
      grupo: "Datos generales",
      filas: [
        { label: "Nombre", valor: park.name },
        { label: "Año de operación", valor: String(park.since) },
        { label: "Superficie total", valor: `${park.landSizeHectares} hectáreas` },
        { label: "Ubicación", valor: park.location },
        ...(park.address ? [{ label: "Dirección", valor: park.address }] : []),
      ],
    },
    {
      grupo: "Capacidad",
      filas: [
        ...(navesTotal > 0 ? [{ label: "Naves totales", valor: String(navesTotal) }] : []),
        { label: "Empresas establecidas", valor: String(park.establishedCompanies) },
      ],
    },
  ]
}

function buildNaveSummary(building: Building) {
  const area = formatArea(
    building.generalData?.totalConstructionArea?.m2 ?? 0,
    building.generalData?.totalConstructionArea?.sqft
  )
  const maxH = building.structure?.maxHeight
    ? formatHeight(building.structure.maxHeight.m, building.structure.maxHeight.ft)
    : null
  const clearH = building.structure?.clearHeight
    ? formatHeight(building.structure.clearHeight.m, building.structure.clearHeight.ft)
    : null
  const docks = building.loadingArea?.description ?? (
    building.loadingArea?.totalDocks
      ? `${building.loadingArea.totalDocks} andenes`
      : "N/A"
  )

  return { area, maxH, clearH, docks, structure: building.structure?.type }
}

export function FichaTecnicaParqueDinamica({ park }: { park: IndustrialPark }) {
  const [lightboxAbierto, setLightboxAbierto] = useState(false)
  const [naveExpandida, setNaveExpandida] = useState<string | null>(null)

  const especificaciones = buildEspecificaciones(park)

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

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
              src={park.heroImage}
              alt={park.name}
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
          <span className="font-medium text-zinc-700 dark:text-zinc-300">{park.shortName}</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">

        {/* Encabezado */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
              {park.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold mt-1" style={{ color: "var(--primary)" }}>
              Desde {park.since} · {park.landSizeHectares} hectáreas
            </p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
              {park.address ?? park.location}
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
                src={park.heroImage}
                alt={park.name}
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
                {park.infrastructure.map((item) => (
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

            {especificaciones.map((seccion, si) => (
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
            {park.buildings.length > 0 && (
              <div>
                <div className="px-4 py-2.5 rounded-sm" style={{ backgroundColor: "var(--primary)" }}>
                  <span className="text-sm font-semibold text-white">
                    Naves industriales ({park.buildings.length})
                  </span>
                </div>
                {park.buildings.map((building, ni) => {
                  const summary = buildNaveSummary(building)
                  return (
                    <div key={building.id}>
                      <button
                        onClick={() => setNaveExpandida(naveExpandida === building.id ? null : building.id)}
                        className={`w-full flex justify-between items-center px-4 py-3 text-sm border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors ${
                          ni % 2 === 0 ? "bg-white dark:bg-zinc-950" : "bg-zinc-50 dark:bg-zinc-900"
                        }`}
                      >
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200">{building.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-zinc-500 dark:text-zinc-400 text-right hidden sm:inline">{summary.area}</span>
                          <svg
                            className={`w-4 h-4 text-zinc-400 transition-transform ${naveExpandida === building.id ? "rotate-180" : ""}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {naveExpandida === building.id && (
                        <div className="px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Área total</p>
                              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{summary.area}</p>
                            </div>
                            {summary.maxH && (
                              <div>
                                <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Altura máxima</p>
                                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{summary.maxH}</p>
                              </div>
                            )}
                            {summary.clearH && (
                              <div>
                                <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Altura libre</p>
                                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{summary.clearH}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Andenes</p>
                              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{summary.docks}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Estructura</p>
                              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{summary.structure}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Piso</p>
                              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{building.constructionSpecs?.floor?.description}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Techo</p>
                              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{building.constructionSpecs?.roof?.material}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Muros</p>
                              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{building.constructionSpecs?.walls?.material}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Protección contra incendio</p>
                              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{building.fireProtection?.description}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {/* Parque sin fichas */}
            {park.buildings.length === 0 && !park.hasSpecs && (
              <div className="px-4 py-8 text-center text-sm text-zinc-400 dark:text-zinc-500 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                Las fichas técnicas de naves para este parque aún no están disponibles.
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

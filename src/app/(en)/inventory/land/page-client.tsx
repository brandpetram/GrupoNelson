'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import type { Terreno } from '@/data/terrenos'
import { MapPinIcon, Square3Stack3DIcon, BoltIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'
import { TerrenoMiniMapDynamic } from '@/components/terreno-mini-map-dynamic'
import { getGeoFeatureById } from '@/data/terrenos-geo-lookup'

// === Helpers ===

function formatM2(m2: number) {
  return m2 >= 10000
    ? `${(m2 / 10000).toFixed(1)} ha`
    : `${m2.toLocaleString('en-US', { maximumFractionDigits: 0 })} m²`
}

function formatM2Full(m2: number) {
  const ha = m2 / 10000
  const formatted = m2.toLocaleString('en-US', { maximumFractionDigits: 0 })
  return ha >= 1
    ? `${formatted} m² (${ha.toFixed(1)} ha)`
    : `${formatted} m²`
}

// === Card Component ===

function TerrenoCard({ terreno, onClick }: { terreno: Terreno; onClick: () => void }) {
  const isDentroParque = !!terreno.dentroDeParque
  const tieneEdificio = !!terreno.superficieSqftEdificio

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left bg-card rounded-xs border border-border p-5 hover:border-primary/50 hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            {isDentroParque && (
              <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                Inside park
              </span>
            )}
            {tieneEdificio && (
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                With building
              </span>
            )}
          </div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors truncate">
            {terreno.nombre}
          </h3>
          <p className="text-sm font-light tracking-wide text-gray-500 dark:text-gray-400 mt-0.5">
            {terreno.ubicacionCorta}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xl sm:text-2xl font-extrabold tracking-tighter text-gray-900 dark:text-white tabular-nums">
            {formatM2(terreno.superficieM2)}
          </p>
          {tieneEdificio && (
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
              +{terreno.superficieSqftEdificio!.toLocaleString('en-US', { maximumFractionDigits: 0 })} sqft building
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 dark:text-gray-400">
        <span className="inline-flex items-center gap-1">
          <MapPinIcon className="size-3.5" />
          {terreno.ciudad}
        </span>
        <span className="inline-flex items-center gap-1">
          <BoltIcon className="size-3.5" />
          {terreno.servicios}
        </span>
        {terreno.dentroDeParque && (
          <span className="inline-flex items-center gap-1">
            <BuildingOffice2Icon className="size-3.5" />
            {terreno.dentroDeParque}
          </span>
        )}
      </div>

      {terreno.nota && (
        <p className="mt-2 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded px-2 py-1">
          {terreno.nota}
        </p>
      )}
    </button>
  )
}

// === Drawer ===

function TerrenoDrawer({ terreno, onClose }: { terreno: Terreno; onClose: () => void }) {
  const geoFeature = getGeoFeatureById(terreno.id)

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Available land</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 space-y-5">
          {/* Name and badges */}
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {terreno.dentroDeParque && (
                <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Inside park
                </span>
              )}
              {terreno.superficieSqftEdificio && (
                <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/40 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  With building
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tighter leading-none text-gray-900 dark:text-white">{terreno.nombre}</h3>
            <p className="text-sm font-light tracking-wider text-gray-500 dark:text-gray-400 mt-2">{terreno.ciudad}</p>
          </div>

          {/* Map */}
          {geoFeature && (
            <div className="rounded-xs overflow-hidden border border-gray-200 dark:border-zinc-700">
              <TerrenoMiniMapDynamic feature={geoFeature} nombre={terreno.nombre} />
            </div>
          )}

          {/* Area */}
          <div className="bg-gray-50 dark:bg-zinc-800 rounded-xs p-4">
            <p className="text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Land area</p>
            <p className="text-3xl font-extrabold tracking-tighter text-gray-900 dark:text-white tabular-nums">
              {formatM2Full(terreno.superficieM2)}
            </p>
            {terreno.superficieSqftEdificio && (
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                Existing building: {terreno.superficieSqftEdificio.toLocaleString('en-US', { maximumFractionDigits: 0 })} sqft
              </p>
            )}
          </div>

          {/* Details */}
          <div className="space-y-3">
            <DrawerRow label="Location" value={terreno.ubicacionCorta} />
            <DrawerRow label="Utilities" value={terreno.servicios} />
            {terreno.dentroDeParque && <DrawerRow label="Industrial park" value={terreno.dentroDeParque} />}
            <DrawerRow label="Owner company" value={terreno.empresa} />
            {terreno.claveCatastral && <DrawerRow label="Cadastral key" value={terreno.claveCatastral} />}
          </div>

          {/* Legal location */}
          <div>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Legal location</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{terreno.ubicacionLegal}</p>
          </div>

          {/* Note */}
          {terreno.nota && (
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xs p-3">
              <p className="text-sm text-amber-800 dark:text-amber-300">{terreno.nota}</p>
            </div>
          )}

          {/* CTA */}
          <a
            href="/contact"
            className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-xs transition-colors"
          >
            Request information
          </a>
        </div>
      </div>
    </div>
  )
}

function DrawerRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <p className="text-sm text-gray-500 dark:text-gray-400 shrink-0">{label}</p>
      <p className="text-sm font-medium text-gray-900 dark:text-white text-right">{value}</p>
    </div>
  )
}

// === Main page ===

export default function LandClient({ terrenos }: { terrenos: Terreno[] }) {
  const ciudades = [...new Set(terrenos.map(t => t.ciudad))].sort()
  const [search, setSearch] = useState('')
  const [ciudadFiltro, setCiudadFiltro] = useState<string | null>(null)
  const [soloConServicios, setSoloConServicios] = useState(false)
  const [soloConEdificio, setSoloConEdificio] = useState(false)
  const [soloDentroParque, setSoloDentroParque] = useState(false)
  const [soloConMapa, setSoloConMapa] = useState(false)
  const [selectedTerreno, setSelectedTerreno] = useState<Terreno | null>(null)

  const filtered = useMemo(() => {
    return terrenos.filter(t => {
      if (search) {
        const q = search.toLowerCase()
        const match = t.nombre.toLowerCase().includes(q)
          || t.ciudad.toLowerCase().includes(q)
          || t.ubicacionCorta.toLowerCase().includes(q)
          || t.empresa.toLowerCase().includes(q)
        if (!match) return false
      }
      if (ciudadFiltro && t.ciudad !== ciudadFiltro) return false
      if (soloConServicios && t.servicios.toLowerCase() === 'lote baldío') return false
      if (soloConEdificio && !t.superficieSqftEdificio) return false
      if (soloDentroParque && !t.dentroDeParque) return false
      if (soloConMapa && !getGeoFeatureById(t.id)) return false
      return true
    })
  }, [search, ciudadFiltro, soloConServicios, soloConEdificio, soloDentroParque, soloConMapa])

  // Land inside parks first, then by area descending
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (a.dentroDeParque && !b.dentroDeParque) return -1
      if (!a.dentroDeParque && b.dentroDeParque) return 1
      return b.superficieM2 - a.superficieM2
    })
  }, [filtered])

  const totalM2 = filtered.reduce((acc, t) => acc + t.superficieM2, 0)

  // Count by city
  const conteosCiudad = useMemo(() => {
    const map = new Map<string, number>()
    terrenos.forEach(t => map.set(t.ciudad, (map.get(t.ciudad) ?? 0) + 1))
    return map
  }, [])

  return (
    <div className="overflow-x-clip">
      <Header lang="en" />
    <main className="min-h-screen mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Available land
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-none text-gray-900 dark:text-white">
          Land for<br />Industrial Development
        </h1>
        <p className="mt-5 text-lg sm:text-xl font-light tracking-wide text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          <span className="font-semibold text-primary">{filtered.length} lots</span> available
          with a total of <span className="font-semibold text-gray-900 dark:text-white">{formatM2Full(totalM2)}</span> across {ciudades.length} cities.
        </p>
      </div>

      {/* Layout: Cards + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cards */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 gap-3">
            {sorted.map(terreno => (
              <TerrenoCard
                key={terreno.id}
                terreno={terreno}
                onClick={() => setSelectedTerreno(terreno)}
              />
            ))}
          </div>

          {sorted.length === 0 && (
            <div className="text-center py-16">
              <Square3Stack3DIcon className="mx-auto size-12 text-gray-300 dark:text-gray-600" />
              <p className="mt-3 text-gray-500 dark:text-gray-400">No land found matching those filters.</p>
            </div>
          )}
        </div>

        {/* Sidebar filters */}
        <div className="lg:w-72 shrink-0">
          <div className="sticky top-24 space-y-6">
            {/* Search */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Quick search
              </p>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                  type="text"
                  placeholder="Name, city, company..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full rounded-xs border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 pl-9 pr-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Checkbox filters */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Filters
              </p>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={soloDentroParque}
                    onChange={e => setSoloDentroParque(e.target.checked)}
                    className="rounded border-gray-300 dark:border-zinc-600 text-primary focus:ring-primary"
                  />
                  Inside industrial park
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={soloConServicios}
                    onChange={e => setSoloConServicios(e.target.checked)}
                    className="rounded border-gray-300 dark:border-zinc-600 text-primary focus:ring-primary"
                  />
                  With utilities
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={soloConEdificio}
                    onChange={e => setSoloConEdificio(e.target.checked)}
                    className="rounded border-gray-300 dark:border-zinc-600 text-primary focus:ring-primary"
                  />
                  With existing building
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={soloConMapa}
                    onChange={e => setSoloConMapa(e.target.checked)}
                    className="rounded border-gray-300 dark:border-zinc-600 text-primary focus:ring-primary"
                  />
                  With geographic polygon
                </label>
              </div>
            </div>

            {/* City filter */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                City
              </p>
              <div className="space-y-1">
                {ciudades.map(ciudad => (
                  <button
                    key={ciudad}
                    type="button"
                    onClick={() => setCiudadFiltro(ciudadFiltro === ciudad ? null : ciudad)}
                    className={`flex items-center justify-between w-full px-2 py-1.5 rounded text-sm transition-colors ${
                      ciudadFiltro === ciudad
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <span>{ciudad}</span>
                    <span className="text-xs text-gray-400 tabular-nums">{conteosCiudad.get(ciudad)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 dark:bg-zinc-800 rounded-xs p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {filtered.length} of {terrenos.length} lots
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {selectedTerreno && (
        <TerrenoDrawer terreno={selectedTerreno} onClose={() => setSelectedTerreno(null)} />
      )}
    </main>
    </div>
  )
}

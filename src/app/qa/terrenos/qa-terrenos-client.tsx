'use client'

import { useState } from 'react'
import terrenosGeo from '@/data/terrenos-geo.json'
import type { TerrenoGeoFeature } from '@/data/terrenos-geo-lookup'
import { QaMapDynamic } from '@/components/qa-map-dynamic'

const features = terrenosGeo.features as TerrenoGeoFeature[]

export default function QaTerrenosClient() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-zinc-900 text-white px-6 py-3 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-sm font-bold uppercase tracking-widest">QA — Polígonos de Terrenos</h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            {features.length} terrenos con datos geográficos. Haz clic en uno para hacer zoom.
          </p>
        </div>
        <span className="text-xs text-zinc-500">Página interna — no indexable</span>
      </div>

      {/* Contenido: lista + mapa */}
      <div className="flex-1 flex min-h-0">
        {/* Lista (izquierda) */}
        <div className="w-80 shrink-0 border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto bg-white dark:bg-zinc-950">
          <div className="p-3 space-y-1">
            {features.map(f => {
              const id = f.properties?.id as string
              const nombre = f.properties?.nombre as string
              const clave = f.properties?.claveCatastral as string
              const tipo = f.geometry.type

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedId(id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xs transition-colors ${
                    selectedId === id
                      ? 'bg-orange-50 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-700'
                      : 'hover:bg-gray-50 dark:hover:bg-zinc-900 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {nombre}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 ${
                        tipo === 'Polygon'
                          ? 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300'
                          : 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                      }`}
                    >
                      {tipo === 'Polygon' ? 'Polígono' : 'Pin'}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                    {clave} — {id}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Mapa (derecha) */}
        <div className="flex-1 min-w-0">
          <QaMapDynamic features={features} selectedId={selectedId} />
        </div>
      </div>
    </div>
  )
}

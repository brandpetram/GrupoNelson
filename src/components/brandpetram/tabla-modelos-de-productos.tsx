'use client'

import { Fragment, useState, useEffect, useCallback, useRef } from 'react'
import { NaveIndustrial } from '@/data/naves-industriales'

// ── Colores de badge de estatus ───────────────────────────────────────────────
const estatusBadgeClasses: Record<NaveIndustrial['estatus'], string> = {
  'Disponible':       'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Ocupada':          'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  'En construcción':  'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
}

// ── Orden de parques ───────────────────────────────────────────────────────────
const PARQUES = [
  'Parque Industrial Nelson II',
  'Parque Industrial El Vigía',
  'Parque Industrial El Vigía II',
]

// ── Props ─────────────────────────────────────────────────────────────────────
interface TablaNavesProps {
  naves: NaveIndustrial[]
  onVerMas: (nave: NaveIndustrial) => void
}

// ── Componente ────────────────────────────────────────────────────────────────
export default function TablaModelosDeProductos({ naves, onVerMas }: TablaNavesProps) {
  // Lista plana de naves en el orden en que aparecen en la tabla
  const navesOrdenadas = PARQUES.flatMap(parque => naves.filter(n => n.parque === parque))

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const rowRefs = useRef<Map<string, HTMLTableRowElement>>(new Map())

  const selectedIndex = navesOrdenadas.findIndex(n => n.id === selectedId)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedId(prev => {
        const idx = navesOrdenadas.findIndex(n => n.id === prev)
        if (idx === -1) return navesOrdenadas[0]?.id ?? null
        const next = e.key === 'ArrowDown'
          ? Math.min(idx + 1, navesOrdenadas.length - 1)
          : Math.max(idx - 1, 0)
        return navesOrdenadas[next].id
      })
    } else if (e.key === 'Enter' && selectedId) {
      const nave = navesOrdenadas.find(n => n.id === selectedId)
      if (nave) onVerMas(nave)
    }
  }, [navesOrdenadas, selectedId, onVerMas])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Scroll automático al row seleccionado
  useEffect(() => {
    if (!selectedId) return
    const row = rowRefs.current.get(selectedId)
    row?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId])

  return (
    <div data-component="TablaModelosDeProductos" data-component-file="src/components/brandpetram/tabla-modelos-de-productos.tsx" data-component-props="true" className="px-4 sm:px-6 lg:px-8">

      {/* Contenedor con scroll horizontal */}
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full bg-background">

              {/* Encabezados */}
              <thead className="bg-background">
                <tr>
                  {/* Col sticky izquierda — botón ver más */}
                  <th
                    scope="col"
                    className="sticky left-0 z-10 bg-background py-3.5 pl-4 pr-3 sm:pl-3"
                  >
                    <span className="sr-only">Ver más</span>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-2 text-left text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Nave
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Superficie (m² / ft²)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Ciudad
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Altura libre (m / ft)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Docks
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Estatus
                  </th>
                </tr>
              </thead>

              {/* Cuerpo — agrupado por parque */}
              <tbody>
                {PARQUES.map((parque) => {
                  const navesDelParque = naves.filter(n => n.parque === parque)
                  if (navesDelParque.length === 0) return null

                  return (
                    <Fragment key={parque}>
                      {/* Fila de agrupación */}
                      <tr className="border-t border-gray-200 dark:border-white/10 bg-background">
                        <th
                          scope="colgroup"
                          colSpan={8}
                          className="bg-gray-50 py-2 pr-3 pl-4 text-left text-sm font-bold uppercase tracking-tighter text-gray-900 sm:pl-3 dark:bg-gray-800/50 dark:text-white"
                        >
                          {parque}
                        </th>
                      </tr>

                      {/* Filas de naves */}
                      {navesDelParque.map((nave, idx) => {
                        const isSelected = nave.id === selectedId
                        return (
                          <tr
                            key={nave.id}
                            ref={el => {
                              if (el) rowRefs.current.set(nave.id, el)
                              else rowRefs.current.delete(nave.id)
                            }}
                            onClick={() => setSelectedId(nave.id)}
                            className={[
                              idx === 0
                                ? 'border-t border-gray-300 dark:border-white/15'
                                : 'border-t border-gray-200 dark:border-white/10',
                              'cursor-pointer',
                              isSelected
                                ? 'bg-blue-50 dark:bg-blue-900/20'
                                : 'bg-background',
                            ].join(' ')}
                          >
                            {/* Botón ⊕ — sticky izquierda */}
                            <td className={`sticky left-0 z-10 pl-4 pr-3 py-4 sm:pl-3 ${isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-background'}`}>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); onVerMas(nave) }}
                                aria-label={`Ver especificaciones de ${nave.nave}`}
                                className="flex items-center justify-center size-8 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                              >
                                <span className="text-lg font-light leading-none select-none">+</span>
                              </button>
                            </td>

                            {/* Nave */}
                            <td className="py-4 pr-3 pl-2 text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                              {nave.nave}
                            </td>

                          {/* Superficie (m² / ft²) */}
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-700 dark:text-gray-300 font-medium tabular-nums">
                              {nave.superficieM2 > 0 ? (
                                <>
                                  <span className="text-gray-900 dark:text-white">{nave.superficieM2.toLocaleString('es-MX')} m²</span>
                                  <span className="mx-1 text-gray-400">/</span>
                                  <span className="text-gray-500 dark:text-gray-400 text-xs">{nave.superficieFt2.toLocaleString('es-MX')} ft²</span>
                                </>
                              ) : '—'}
                            </td>

                            {/* Ciudad */}
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-left text-gray-500 dark:text-gray-400 font-medium">
                              Mexicali
                            </td>

                            {/* Clear Height */}
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-700 dark:text-gray-300 font-medium tabular-nums">
                              {nave.clearHeightFt > 0 ? (
                                <>
                                  <span className="text-gray-900 dark:text-white">{(nave.clearHeightFt * 0.3048).toFixed(1)} m</span>
                                  <span className="mx-1 text-gray-400">/</span>
                                  <span className="text-gray-500 dark:text-gray-400 text-xs">{nave.clearHeightFt} ft</span>
                                </>
                              ) : '—'}
                            </td>

                            {/* Docks */}
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-500 dark:text-gray-400 tabular-nums">
                              {nave.docks}
                            </td>

                            {/* Estatus badge */}
                            <td className="px-3 py-4 text-sm whitespace-nowrap">
                              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${estatusBadgeClasses[nave.estatus]}`}>
                                {nave.estatus}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </Fragment>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Hint de teclado */}
      {selectedIndex !== -1 && (
        <p className="mt-3 text-xs text-gray-400 text-right select-none">
          ↑ ↓ navegar · Enter abrir
        </p>
      )}
    </div>
  )
}

'use client'

import { Fragment } from 'react'
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
  return (
    <div className="px-4 sm:px-6 lg:px-8">

      {/* Contenedor con scroll horizontal */}
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">

              {/* Encabezados */}
              <thead className="bg-white dark:bg-gray-900">
                <tr>
                  {/* Col sticky izquierda — botón ver más */}
                  <th
                    scope="col"
                    className="sticky left-0 z-10 bg-white dark:bg-gray-900 py-3.5 pl-4 pr-3 sm:pl-3"
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
                    Superficie m²
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Superficie ft²
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Clear Height ft
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
              <tbody className="bg-white dark:bg-gray-900">
                {PARQUES.map((parque) => {
                  const navesDelParque = naves.filter(n => n.parque === parque)
                  if (navesDelParque.length === 0) return null

                  return (
                    <Fragment key={parque}>
                      {/* Fila de agrupación */}
                      <tr className="border-t border-gray-200 dark:border-white/10">
                        <th
                          scope="colgroup"
                          colSpan={7}
                          className="bg-gray-50 py-2 pr-3 pl-4 text-left text-sm font-bold uppercase tracking-tighter text-gray-900 sm:pl-3 dark:bg-gray-800/50 dark:text-white"
                        >
                          {parque}
                        </th>
                      </tr>

                      {/* Filas de naves */}
                      {navesDelParque.map((nave, idx) => (
                        <tr
                          key={nave.id}
                          className={
                            idx === 0
                              ? 'border-t border-gray-300 dark:border-white/15'
                              : 'border-t border-gray-200 dark:border-white/10'
                          }
                        >
                          {/* Botón ⊕ — sticky izquierda */}
                          <td className="sticky left-0 z-10 bg-white dark:bg-gray-900 pl-4 pr-3 py-4 sm:pl-3">
                            <button
                              type="button"
                              onClick={() => onVerMas(nave)}
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

                          {/* Superficie m² */}
                          <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-700 dark:text-gray-300 font-medium tabular-nums">
                            {nave.superficieM2.toLocaleString('es-MX')}
                          </td>

                          {/* Superficie ft² */}
                          <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-500 dark:text-gray-400 tabular-nums">
                            {nave.superficieFt2.toLocaleString('es-MX')}
                          </td>

                          {/* Clear Height */}
                          <td className="px-3 py-4 text-sm whitespace-nowrap text-right text-gray-700 dark:text-gray-300 font-medium tabular-nums">
                            {nave.clearHeightFt} ft
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
                      ))}
                    </Fragment>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

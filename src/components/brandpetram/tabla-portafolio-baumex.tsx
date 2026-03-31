'use client'

import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { ProyectoBaumex } from '@/data/proyectos-baumex'

interface TablaPortafolioProps {
  proyectos: ProyectoBaumex[]
}

export default function TablaPortafolioBaumex({ proyectos }: TablaPortafolioProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const rowRefs = useRef<Map<string, HTMLTableRowElement>>(new Map())

  // Navegación por teclado
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedId(prev => {
        const idx = proyectos.findIndex(p => p.id === prev)
        if (idx === -1) return proyectos[0]?.id ?? null
        const next = e.key === 'ArrowDown'
          ? Math.min(idx + 1, proyectos.length - 1)
          : Math.max(idx - 1, 0)
        return proyectos[next].id
      })
    }
  }, [proyectos])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (!selectedId) return
    const row = rowRefs.current.get(selectedId)
    row?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [selectedId])

  return (
    <div data-component="TablaPortafolioBaumex" data-component-file="src/components/brandpetram/tabla-portafolio-baumex.tsx" data-component-props="true" className="flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full border-separate border-spacing-0 bg-background">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10">
                <th scope="col" className="sticky left-0 z-10 bg-background py-4 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:pl-3">
                  Año
                </th>
                <th scope="col" className="px-3 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Proyecto / Cliente
                </th>
                <th scope="col" className="px-3 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Servicio
                </th>
                <th scope="col" className="px-3 py-4 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Superficie (m² / ft²)
                </th>
                <th scope="col" className="px-3 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Ubicación
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {proyectos.map((proyecto) => {
                const isSelected = proyecto.id === selectedId
                return (
                  <tr
                    key={proyecto.id}
                    ref={el => {
                      if (el) rowRefs.current.set(proyecto.id, el)
                      else rowRefs.current.delete(proyecto.id)
                    }}
                    onClick={() => setSelectedId(proyecto.id)}
                    className={`group cursor-pointer transition-colors ${
                      isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <td className={`sticky left-0 z-10 py-8 pl-4 pr-3 text-base 1200:text-lg font-medium text-gray-900 dark:text-white sm:pl-3 [background:inherit]`}>
                      {proyecto.anio}
                    </td>
                    <td className="px-3 py-8 text-base 1200:text-lg">
                      <div className="font-semibold text-gray-900 dark:text-white leading-tight">
                        {proyecto.proyecto}
                      </div>
                      <div className="mt-1 text-sm 1200:text-base text-gray-500 dark:text-gray-400 font-medium">
                        {proyecto.cliente !== '—' ? proyecto.cliente : '—'}
                      </div>
                    </td>
                    <td className="px-3 py-8 text-base 1200:text-lg">
                      <span className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-800 px-2.5 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                        {proyecto.servicio}
                      </span>
                    </td>
                    <td className="px-3 py-8 text-base 1200:text-lg text-right tabular-nums">
                      {proyecto.superficieM2 ? (
                        <div className="flex flex-col items-end">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {proyecto.superficieM2.toLocaleString('es-MX')} m²
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                            {proyecto.superficieFt2?.toLocaleString('es-MX')} ft²
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-3 py-8 text-base 1200:text-lg text-gray-500 dark:text-gray-400">
                      {proyecto.ubicacion}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      {selectedId && (
        <p className="mt-4 text-xs text-gray-400 text-right select-none italic">
          ↑ ↓ para navegar por el historial
        </p>
      )}
    </div>
  )
}

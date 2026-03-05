// Catálogo de parques industriales — adaptado del catálogo filtrado de Extrutech
// Sin props. Sin filtros por ahora (solo 4 parques). Datos de parks-data.ts

import Image from "next/image"
import Link from "next/link"
import { industrialParks } from "@/data/parks/parks-data"
import type { IndustrialPark } from "@/data/parks/types"

function ParqueCard({ parque }: { parque: IndustrialPark }) {
  const subtitulo = `Parque Industrial · Desde ${parque.since}`

  return (
    <Link
      href={`/parques-industriales-mexicali/${parque.slug}`}
      className="flex flex-col sm:flex-row bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:border-[var(--primary)] hover:shadow-md transition-all group"
    >
      {/* Imagen */}
      <div className="sm:w-72 shrink-0 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        <div className="w-full aspect-[16/10] sm:aspect-square overflow-hidden relative">
          <Image
            src={parque.heroImage}
            alt={parque.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Cabecera */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              {subtitulo}
            </span>
            {parque.hasSpecs && (
              <span className="text-[10px] font-semibold uppercase tracking-wide bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                Fichas disponibles
              </span>
            )}
          </div>
          <h3 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
            {parque.name}
          </h3>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {parque.description}
          </p>
        </div>

        {/* Specs en pills */}
        <div className="flex flex-wrap gap-3">
          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg px-3 py-2">
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Superficie</p>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono mt-0.5">{parque.landSizeHectares} ha</p>
          </div>
          {(parque.totalBuildings ?? parque.buildings.length) > 0 && (
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Naves</p>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono mt-0.5">{parque.totalBuildings ?? parque.buildings.length}</p>
            </div>
          )}
          {parque.establishedCompanies > 0 && (
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg px-3 py-2">
              <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Empresas</p>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono mt-0.5">{parque.establishedCompanies}</p>
            </div>
          )}
        </div>

        {/* Infraestructura destacada (en lugar de colores) */}
        <div className="flex items-center gap-2 flex-wrap">
          {parque.infrastructure.slice(0, 4).map((item) => (
            <span
              key={item}
              className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
          {parque.infrastructure.length > 4 && (
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
              +{parque.infrastructure.length - 4} más
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {parque.address ?? parque.location}
          </p>
          <span className="flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-[var(--primary)] transition-colors">
            Ver ficha
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>

      </div>
    </Link>
  )
}

export function CatalogoFiltradoParques() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Encabezado */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
            Grupo Nelson
          </p>
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Parques Industriales
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-lg">
            Más de 60 años desarrollando infraestructura industrial de clase mundial en la región fronteriza de Mexicali.
          </p>
        </div>

        {/* Lista de parques */}
        <div className="space-y-3">
          {industrialParks.map((parque) => (
            <ParqueCard key={parque.slug} parque={parque} />
          ))}
        </div>

      </div>
    </div>
  )
}

// Catálogo de parques industriales — agrupado por zona
// Adaptado del catálogo agrupado de Extrutech
// Sin props. Datos de parks-data.ts

import Image from "next/image"
import Link from "next/link"
import { industrialParks } from "@/data/parks/parks-data"
import type { IndustrialPark } from "@/data/parks/types"

type Zona = "Corredor Industrial" | "Carretera a San Luis"

const GRUPOS: Array<{ zona: Zona; descripcion: string }> = [
  {
    zona: "Corredor Industrial",
    descripcion: "Parques en el corredor industrial del Blvd. Venustiano Carranza.",
  },
  {
    zona: "Carretera a San Luis",
    descripcion: "Parques en la Carretera a San Luis R.C. Km 12-14.",
  },
]

function getZona(parque: IndustrialPark): Zona {
  if (parque.slug === "nelson-ii") return "Corredor Industrial"
  return "Carretera a San Luis"
}

function ParqueCard({ parque }: { parque: IndustrialPark }) {
  const navesTotal = parque.totalBuildings ?? parque.buildings.length

  return (
    <Link
      href={`/parques-industriales-mexicali/${parque.slug}`}
      className="flex items-stretch bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-[var(--primary)] hover:shadow-sm transition-all group"
    >
      {/* Imagen */}
      <div className="w-36 shrink-0 bg-zinc-50 dark:bg-zinc-800 relative overflow-hidden">
        <Image
          src={parque.heroImage}
          alt={parque.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 px-5 py-4 justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              {parque.shortName}
            </h3>
            {parque.hasSpecs && (
              <span className="text-[9px] font-semibold uppercase tracking-wide bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">
                Con fichas
              </span>
            )}
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
            {parque.description}
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono mt-1">
            {[`${parque.landSizeHectares} ha`, navesTotal > 0 ? `${navesTotal} naves` : null, `Desde ${parque.since}`].filter(Boolean).join(" · ")}
          </p>
        </div>

        {/* Tags + flecha */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1.5 flex-wrap">
            {parque.infrastructure.slice(0, 3).map((item) => (
              <span
                key={item}
                className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>

          <svg className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-[var(--primary)] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export function CatalogoAgrupadoParques() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Encabezado */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
            Grupo Nelson
          </p>
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Parques Industriales
          </h1>
        </div>

        {/* Grupos por zona */}
        {GRUPOS.map(({ zona, descripcion }) => {
          const items = industrialParks.filter((p) => getZona(p) === zona)
          if (items.length === 0) return null

          return (
            <section key={zona}>
              <div className="flex items-end justify-between mb-4 pb-3 border-b-2 border-zinc-900 dark:border-zinc-100">
                <div>
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {zona}
                  </h2>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                    {descripcion}
                  </p>
                </div>
                <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500 mb-0.5">
                  {items.length} {items.length === 1 ? "parque" : "parques"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((parque) => (
                  <ParqueCard key={parque.slug} parque={parque} />
                ))}
              </div>
            </section>
          )
        })}

      </div>
    </div>
  )
}

import Link from "next/link"

const opciones = [
  {
    href: "/productos/catalogo-filtrado",
    label: "Opcion 1 — Catalogo con cards horizontales",
    descripcion: "Lista de los 4 parques industriales con cards horizontales. Muestra specs (hectareas, naves, empresas) e infraestructura.",
    preview: "filtrado",
  },
  {
    href: "/productos/catalogo-agrupado",
    label: "Opcion 2 — Catalogo agrupado por zona",
    descripcion: "Parques agrupados por zona geografica: Corredor Industrial y Carretera a San Luis.",
    preview: "agrupado",
  },
  {
    href: "/productos/ficha-tecnica",
    label: "Opcion 3 — Ficha tecnica",
    descripcion: "Pagina completa de detalle: breadcrumb, imagen, tabla de specs del parque y naves expandibles.",
    preview: "ficha",
  },
  {
    href: "/productos/vertical",
    label: "Extra A — Card vertical",
    descripcion: "Card individual con imagen arriba, datos generales e infraestructura abajo.",
    preview: "vertical",
  },
  {
    href: "/productos/horizontal",
    label: "Extra B — Card horizontal",
    descripcion: "Card individual con imagen a la izquierda y contenido a la derecha.",
    preview: "horizontal",
  },
]

type PreviewKey = "filtrado" | "agrupado" | "ficha" | "vertical" | "horizontal"

function Preview({ type }: { type: PreviewKey }) {
  if (type === "filtrado") return (
    <div className="flex flex-col gap-2 w-36">
      {[1,2,3].map((n) => (
        <div key={n} className="flex gap-1.5 bg-white dark:bg-zinc-800 rounded p-1.5 border border-zinc-100 dark:border-zinc-700">
          <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-600 rounded shrink-0" />
          <div className="flex flex-col gap-1 flex-1 justify-center">
            <div className="h-1.5 bg-zinc-300 dark:bg-zinc-500 rounded w-3/4" />
            <div className="h-1 bg-zinc-200 dark:bg-zinc-600 rounded w-1/2" />
            <div className="flex gap-0.5 mt-0.5">
              {[...Array(3)].map((_,i) => <div key={i} className="w-2 h-2 rounded bg-zinc-400 dark:bg-zinc-500" />)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  if (type === "agrupado") return (
    <div className="flex flex-col gap-2.5 w-36">
      {[["Corredor",1],["San Luis",2]].map(([cat, count]) => (
        <div key={cat as string}>
          <div className="h-1 bg-zinc-800 dark:bg-zinc-200 rounded-full mb-1.5 w-full" />
          <div className="grid grid-cols-2 gap-1">
            {[...Array(count as number)].map((_,i) => (
              <div key={i} className="flex gap-1 bg-white dark:bg-zinc-800 rounded p-1 border border-zinc-100 dark:border-zinc-700">
                <div className="w-5 h-5 bg-zinc-200 dark:bg-zinc-600 rounded shrink-0" />
                <div className="flex flex-col gap-0.5 flex-1 justify-center">
                  <div className="h-1 bg-zinc-300 dark:bg-zinc-500 rounded" />
                  <div className="h-1 bg-zinc-200 dark:bg-zinc-600 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  if (type === "ficha") return (
    <div className="flex gap-2 w-36 h-20">
      <div className="w-14 bg-zinc-300 dark:bg-zinc-600 rounded flex-shrink-0" />
      <div className="flex flex-col gap-1 flex-1">
        <div className="h-2 bg-[var(--primary)] rounded w-full opacity-70" />
        <div className="h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded w-full" />
        <div className="h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4" />
        <div className="h-2 bg-[var(--primary)] rounded w-full opacity-70 mt-1" />
        <div className="h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded w-full" />
        <div className="h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3" />
      </div>
    </div>
  )

  if (type === "vertical") return (
    <div className="w-20 flex flex-col gap-1.5 items-center">
      <div className="w-full h-10 bg-zinc-300 dark:bg-zinc-600 rounded" />
      <div className="w-3/4 h-2 bg-zinc-200 dark:bg-zinc-700 rounded" />
      <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded" />
      <div className="flex gap-1 mt-1">
        {[...Array(3)].map((_, i) => <div key={i} className="w-3 h-3 rounded bg-zinc-400 dark:bg-zinc-500" />)}
      </div>
    </div>
  )

  // horizontal
  return (
    <div className="flex gap-2 items-stretch w-32 h-16">
      <div className="w-14 bg-zinc-300 dark:bg-zinc-600 rounded" />
      <div className="flex flex-col gap-1.5 flex-1 justify-center">
        <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-full" />
        <div className="h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4" />
        <div className="flex gap-1 mt-1">
          {[...Array(3)].map((_, i) => <div key={i} className="w-2.5 h-2.5 rounded bg-zinc-400 dark:bg-zinc-500" />)}
        </div>
      </div>
    </div>
  )
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8">
      <div className="max-w-3xl mx-auto">

        {/* Cabecera */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
            Grupo Nelson · Explorador de diseño
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Propuestas de productos
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm max-w-md">
            Opciones de layout para el catalogo de parques industriales y fichas tecnicas. Haz clic para ver cada propuesta.
          </p>
        </div>

        {/* Opciones */}
        <div className="space-y-3">
          {opciones.map((op) => (
            <Link
              key={op.href}
              href={op.href}
              className="group flex flex-col sm:flex-row items-center gap-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-5 hover:border-[var(--primary)] hover:shadow-sm transition-all"
            >
              {/* Miniatura */}
              <div className="w-full sm:w-48 shrink-0 aspect-video bg-zinc-50 dark:bg-zinc-800 rounded-xl overflow-hidden flex items-center justify-center">
                <Preview type={op.preview as PreviewKey} />
              </div>

              {/* Texto */}
              <div className="flex flex-col flex-1 justify-between gap-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                    {op.label}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {op.descripcion}
                  </p>
                </div>
                <div className="flex justify-end">
                  <span className="flex items-center gap-1 text-sm font-medium text-zinc-400 dark:text-zinc-500 group-hover:text-[var(--primary)] transition-colors">
                    Ver
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

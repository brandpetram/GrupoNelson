import dynamic from 'next/dynamic'

export const QaMapDynamic = dynamic(
  () => import('./qa-map').then(mod => ({ default: mod.QaMap })),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gray-100 dark:bg-zinc-800 animate-pulse flex items-center justify-center text-gray-400 text-sm">
        Cargando mapa...
      </div>
    ),
  }
)

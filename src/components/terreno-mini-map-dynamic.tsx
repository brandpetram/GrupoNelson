import dynamic from 'next/dynamic'

export const TerrenoMiniMapDynamic = dynamic(
  () =>
    import('./terreno-mini-map').then(mod => ({
      default: mod.TerrenoMiniMap,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[250px] w-full bg-gray-100 dark:bg-zinc-800 rounded-xs animate-pulse" />
    ),
  }
)

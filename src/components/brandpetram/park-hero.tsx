import Image from 'next/image'
import type { IndustrialPark } from '@/data/parks/types'
import { resolveImageUrl } from '@/sanity/lib/image'
import { GridOverlay } from '@/components/ui/grid'

interface GridConfig {
  strokeColor?: string
  gridSize?: number
  showHighlights?: boolean
  /** Clase Tailwind fill para los cuadrados destacados. Incluye color y opacidad: ej. "fill-white/20", "fill-orange-500/30" */
  highlightColor?: string
  /** Radio del gradiente de desvanecimiento (default: "32rem") */
  fadeRadius?: string
  /** Posición del gradiente de desvanecimiento (default: "center") */
  fadePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const parkHeroText = {
  es: {
    since: (year: number) => `Desde ${year}`,
    hectares: (n: number) => `${n} hectáreas`,
    companies: (n: number) => `${n} ${n === 1 ? 'empresa' : 'empresas'} establecidas`,
    buildings: (n: number) => `${n} naves`,
  },
  en: {
    since: (year: number) => `Since ${year}`,
    hectares: (n: number) => `${n} hectares`,
    companies: (n: number) => `${n} established ${n === 1 ? 'company' : 'companies'}`,
    buildings: (n: number) => `${n} buildings`,
  },
}

interface ParkHeroProps {
  park: IndustrialPark
  /** Opacidad del gradiente desde arriba hacia abajo (0-1). Default: 0 */
  gradientTop?: number
  /** Opacidad del gradiente desde abajo hacia arriba (0-1). Default: 0.8 */
  gradientBottom?: number
  /** Opacidad de la capa de oscurecimiento (0-1). Default: 0 */
  darkOverlay?: number
  /** Color de la capa de oscurecimiento. Acepta cualquier valor CSS: hex, rgb, rgba, hsl. Default: negro */
  overlayColor?: string
  /** Cuadrícula decorativa de fondo */
  gridConfig?: GridConfig
  /** Idioma */
  lang?: 'en' | 'es'
}

export function ParkHero({
  park,
  gradientTop = 0,
  gradientBottom = 0.8,
  darkOverlay = 0,
  overlayColor,
  gridConfig,
  lang = 'es',
}: ParkHeroProps) {
  const t = parkHeroText[lang]
  return (
    <section data-component="ParkHero" data-component-file="src/components/brandpetram/park-hero.tsx" data-component-props="true" className="relative">
      <div className="relative aspect-[1/1.4] md:aspect-[1/.7] 1280:aspect-[16/7] overflow-hidden">
        {resolveImageUrl(park.heroImage, 1920) && (
          <Image
            src={resolveImageUrl(park.heroImage, 1920)!}
            alt={park.name}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Capa de color uniforme (contraste/tinte) */}
      {(darkOverlay > 0 || overlayColor) && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor
              ? overlayColor
              : `rgba(0,0,0,${darkOverlay})`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Gradiente desde arriba hacia abajo */}
      {gradientTop > 0 && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,${gradientTop}) 0%, transparent 50%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Gradiente desde abajo hacia arriba */}
      {gradientBottom > 0 && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,${gradientBottom}) 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Cuadrícula decorativa — renderizada encima de los gradientes */}
      {gridConfig && (
        <div className="absolute inset-0">
          <GridOverlay
            strokeColor={gridConfig.strokeColor ?? 'stroke-white/20'}
            gridSize={gridConfig.gridSize ?? 100}
            showHighlights={gridConfig.showHighlights ?? false}
            highlightColor={gridConfig.highlightColor}
            fadeRadius={gridConfig.fadeRadius}
            fadePosition={gridConfig.fadePosition}
          />
        </div>
      )}

      {/* Contenido sobre imagen */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {park.name}
          </h1>
          <p className="text-lg text-white/80 mt-2">{park.location}</p>

          {/* Badges de datos generales */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
              {t.since(park.since)}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
              {t.hectares(park.landSizeHectares)}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
              {t.companies(park.establishedCompanies)}
            </span>
            {(park.totalBuildings ?? (park.buildings?.length ?? 0)) > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
                {t.buildings(park.totalBuildings ?? (park.buildings?.length ?? 0))}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

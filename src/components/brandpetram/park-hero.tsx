import type { IndustrialPark } from '@/data/parks/types'
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
}

export function ParkHero({
  park,
  gradientTop = 0,
  gradientBottom = 0.8,
  darkOverlay = 0,
  overlayColor,
  gridConfig,
}: ParkHeroProps) {
  return (
    <section className="relative">
      <div className="aspect-[1/1.4] md:aspect-[1/.7] 1280:aspect-[16/7] overflow-hidden">
        <img
          src={park.heroImage}
          alt={park.name}
          className="w-full h-full object-cover"
        />
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
              Desde {park.since}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
              {park.landSizeHectares} hectáreas
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
              {park.establishedCompanies} {park.establishedCompanies === 1 ? 'empresa' : 'empresas'} establecidas
            </span>
            {(park.totalBuildings ?? park.buildings.length) > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm text-white">
                {park.totalBuildings ?? park.buildings.length} naves
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

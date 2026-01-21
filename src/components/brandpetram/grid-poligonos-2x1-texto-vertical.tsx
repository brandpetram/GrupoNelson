import { PoligonoImagen1 } from '@/components/ui/brandpetram/poligono-imagen-1'
import { PoligonoIcono1 } from '@/components/ui/brandpetram/poligono-icono-1'
import { SdiEmblema } from '@/components/ui/icons/sdi-emblema'

/**
 * Grid de Polígonos 2x1 - Texto en Polígono Vertical
 *
 * Desktop (md+): 3 columnas (2 + 1)
 * - Columna izquierda (2 cols): 2 polígonos arriba (cuadrados) + 1 abajo (rectangular)
 * - Columna derecha (1 col): 1 polígono vertical con TEXTO (altura completa)
 *
 * Móvil: Apilado vertical
 *
 * Para usar: copia este archivo y edita los valores directamente.
 */
export function GridPoligonos2x1TextoVertical() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 max-w-5xl mx-auto">
        {/* Grid principal - ocupa 2 columnas en desktop */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2.5">
          {/* Primera imagen arriba izquierda - cuadrada */}
          <div className="relative aspect-square">
            <PoligonoImagen1
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-269.jpg"
              alt="Conveyor aéreo industrial"
              overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
              text="Conveyors Aéreos"
              textColor="text-white"
              className="rounded-none"
            />
          </div>

          {/* Segundo polígono arriba derecha - icono */}
          <div className="relative aspect-square">
            <PoligonoIcono1
              icon={<SdiEmblema />}
              backgroundColor="bg-gradient-to-br from-orange-500 to-red-600"
              iconColor="text-white"
              iconSize="w-32 h-32"
              hoverEffect="rotate"
              className="rounded-none"
            />
          </div>

          {/* Tercer polígono abajo - imagen */}
          <div className="relative col-span-2 aspect-[2/1]">
            <PoligonoImagen1
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-270.jpg"
              alt="Soluciones industriales"
              overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
              text="Conveyors Aéreos"
              textColor="text-white"
              className="rounded-none"
            />
          </div>
        </div>

        {/* Imagen lateral derecha - ocupa toda la altura CON TEXTO */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden rounded-none bg-gradient-to-r from-gray-800 to-gray-900  flex items-center justify-center">
            <div className="p-8 text-center">
              <p className="text-white font-light text-lg md:text-2xl leading-loose tracking-wide text-balance">
                Marcando el camino hacia lorem{' '}
                <span className="font-black">sostenible</span> ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

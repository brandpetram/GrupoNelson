import { PoligonoImagen1 } from '@/components/ui/brandpetram/poligono-imagen-1'
import { PoligonoIcono1 } from '@/components/ui/brandpetram/poligono-icono-1'
import { SdiEmblema } from '@/components/ui/icons/sdi-emblema'

/**
 * Grid de Polígonos 2x1
 *
 * Desktop (md+): 3 columnas (2 + 1)
 * - Columna izquierda (2 cols): 2 polígonos arriba (cuadrados) + 1 abajo (rectangular)
 * - Columna derecha (1 col): 1 polígono vertical (altura completa)
 *
 * Móvil: Apilado vertical
 * 1. Grid izquierdo (2 cuadrados + 1 rectángulo)
 * 2. Columna derecha (imagen vertical)
 *
 * Para usar: copia este archivo y edita los valores directamente.
 */
export function GridPoligonos2x1() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 max-w-5xl mx-auto">
        {/* Grid principal - ocupa 2 columnas en desktop */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2.5">
          {/* Primera imagen arriba izquierda - cuadrada */}
          <div className="relative aspect-square">
            <PoligonoImagen1
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg"
              alt="Conveyor aéreo industrial"
              overlayColor="oklch(21.6% 0.006 56.043 / 0.8)"
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

          {/* Tercer polígono abajo - texto */}
          <div className="relative col-span-2 aspect-[2/1]">
            <div className="group relative flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 rounded-none">
              <p className="p-6 md:w-8/12 1728:w-9/12 text-white font-bold tracking-tighter leading-none text-center break-words transition-transform duration-300 group-hover:scale-110 text-xl 393:text-xl 430:text-3xl 768:text-2xl 834:text-2xl 1024:text-3xl 1200:text-4xl 1280:text-3xl 1366:text-3xl 1440:text-4xl 1536:text:4xl 1728:text-5xl 1920:text-5xl">
                Soluciones Industriales de Conveyor
              </p>
            </div>
          </div>
        </div>

        {/* Imagen lateral derecha - ocupa toda la altura */}
        <div className="relative">
          <PoligonoImagen1
            src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg"
            alt="Conveyor vertical helicoidal"
            overlayColor="oklch(64.6% 0.222 41.116 / 0.8)"
            text="Sistemas Verticales"
            textColor="text-white"
            className="rounded-none"
          />
        </div>

      </div>
    </div>
  )
}

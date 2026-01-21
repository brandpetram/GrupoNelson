import { PoligonoImagen1 } from '@/components/ui/brandpetram/poligono-imagen-1'
import { PoligonoIcono1 } from '@/components/ui/brandpetram/poligono-icono-1'
import { SdiEmblema } from '@/components/ui/icons/sdi-emblema'

/**
 * Grid de Polígonos 1x2 - Texto Largo en Polígono Vertical
 *
 * Desktop (md+): 3 columnas (1 + 2)
 * - Columna izquierda (1 col): 1 polígono vertical CON TEXTO LARGO (altura completa)
 * - Columna derecha (2 cols): 2 polígonos arriba (cuadrados) + 1 abajo (rectangular)
 *
 * Móvil: Apilado vertical
 *
 * Para usar: copia este archivo y edita los valores directamente.
 */
export function GridPoligonos1x2TextoLargo() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 max-w-5xl mx-auto">
        {/* Imagen lateral izquierda - ocupa toda la altura CON IMAGEN */}
        <div className="relative">
          <PoligonoImagen1
            src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-271.jpg"
            alt="Lorem ipsum"
            overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
            text="Parque Nelson II"
            textColor="text-white"
            className="rounded-none"
          />
        </div>

        {/* Grid principal - ocupa 2 columnas en desktop */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2.5">
          {/* Primera imagen arriba izquierda - cuadrada */}
          <div className="relative aspect-square">
            <PoligonoIcono1
                icon={<SdiEmblema />}
                backgroundColor="bg-gradient-to-br from-blue-600 to-sky-500"
                iconColor="text-white"
                iconSize="w-32 h-32"
                hoverEffect="rotate"
                className="rounded-none"
            />

          </div>

          {/* Segundo polígono arriba derecha - icono */}
          <div className="relative aspect-square">
            <PoligonoImagen1
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-271.jpg"
                alt="Lorem ipsum"
                overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
                text="Parque Nelson II"
                textColor="text-white"
                className="rounded-none"
            />
          </div>

          {/* Tercer polígono abajo - TEXTO LARGO */}
          <div className="relative col-span-2 aspect-square md:aspect-[2/1]">
            <div className="group relative flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 rounded-none">
              <p className="p-6 w-9/12 md:w-10/12 1728:w-9/12 text-white font-light tracking-wide lg:leading-loose transition-transform duration-300 group-hover:scale-110 text-base 393:text-base 430:text-lg 768:text-sm 834:text-sm 1024:text-sm 1200:text-md 1280:text-md 1366:text-lg 1440:text-lg 1536:text-lg 1728:text-lg 1920:text-lg">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <span className="font-black">hasta un 40%</span> nonummy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

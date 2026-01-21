import { PoligonoImagen1 } from '@/components/ui/brandpetram/poligono-imagen-1'
import { PoligonoIcono1 } from '@/components/ui/brandpetram/poligono-icono-1'
import { SdiEmblema } from '@/components/ui/icons/sdi-emblema'

/**
 * Grid de Polígonos 2
 *
 * Desktop y Móvil: 2 columnas
 * - 2 polígonos arriba (cuadrados)
 * - 1 polígono abajo (rectangular, ocupa las 2 columnas)
 *
 * Para usar: copia este archivo y edita los valores directamente.
 */
export function GridPoligonos2() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-2.5 max-w-2xl mx-auto">
        {/* Primera imagen arriba izquierda - cuadrada */}
        <div className="relative aspect-square">
          <PoligonoImagen1
            src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-295.jpg"
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
            backgroundColor="bg-gradient-to-br from-blue-600 to-blue-700"
            iconColor="text-white"
            iconSize="w-32 h-32"
            hoverEffect="rotate"
            className="rounded-none"
          />
        </div>

        {/* Tercer polígono abajo - texto */}
        <div className="relative col-span-2 aspect-[2/1]">
          <div className="group relative flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 rounded-none">
            <p className="p-6 w-8/12 1728:w-9/12 text-white font-bold tracking-tighter leading-none text-center break-words transition-transform duration-300 group-hover:scale-110 text-2xl 393:text-3xl 430:text-3xl 768:text-5xl 834:text-5xl 1024:text-5xl 1200:text-5xl 1280:text-5xl 1366:text-5xl 1440:text-5xl 1536:text-5xl 1728:text-5xl 1920:text-5xl">
              Soluciones Industriales de Conveyors
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

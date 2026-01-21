import { PoligonoImagen1 } from '@/components/ui/brandpetram/poligono-imagen-1'
import { PoligonoIcono1 } from '@/components/ui/brandpetram/poligono-icono-1'
import { SdiEmblema } from '@/components/ui/icons/sdi-emblema'

/**
 * Grid de Polígonos 2x1x2
 *
 * Desktop (md+): 5 columnas (2 + 1 + 2)
 * - Columna izquierda (2 cols): 2 polígonos arriba + 1 abajo
 * - Columna central (1 col): 1 polígono vertical (altura completa)
 * - Columna derecha (2 cols): 2 polígonos arriba + 1 abajo
 *
 * Móvil: Apilado vertical con orden específico
 * 1. Grid izquierdo (2 cuadrados + 1 rectángulo)
 * 2. Grid derecho (1 rectángulo + 2 cuadrados)
 * 3. Columna central (imagen vertical)
 *
 * Para usar: copia este archivo y edita los valores directamente.
 */
export function GridPoligonos2x1x2() {
  return (
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-2.5 mx-auto w-11/12">

        {/* === GRID IZQUIERDO (2 columnas en desktop, completo en móvil) === */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2.5">
          {/* Imagen arriba izquierda - cuadrada */}
          <div className="relative aspect-square">
            <PoligonoImagen1
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-266.jpg"
              alt="Conveyor aéreo con piezas metalicas colgando"
                overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
                text="Conveyors Aéreos"
              textColor="text-white"
              className="rounded-none"
            />
          </div>

          {/* Icono arriba derecha - cuadrado */}
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

          {/* Texto abajo - rectangular */}
          <div className="relative col-span-2 aspect-[2/1]">
            <div className="group relative flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 rounded-none">
              <p className="p-6 w-8/12 1728:w-9/12 text-white font-bold tracking-tighter leading-none text-center break-words transition-transform duration-300 group-hover:scale-110 text-2xl 393:text-3xl 430:text-3xl 768:text-4xl 834:text-4xl 1024:text-5xl 1200:text-4xl 1280:text-4xl 1366:text-4xl 1440:text-5xl 1536:text-5xl 1728:text-5xl 1920:text-5xl">
                Soluciones Industriales de Conveyor
              </p>
            </div>
          </div>
        </div>

        {/* === COLUMNA CENTRAL (1 columna en desktop, orden 3 en móvil) === */}
        <div className="relative order-3 md:order-2">
          <PoligonoImagen1
            src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-267.jpg"
            alt="Conveyor vertical helicoidal"
            overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
            text="Conveyors en Espiral"
            textColor="text-white"
            className="rounded-none"
          />
        </div>

        {/* === GRID DERECHO (2 columnas en desktop, orden 2 en móvil) === */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2.5 order-2 md:order-3">
          {/* Icono arriba - rectangular */}
          <div className="relative col-span-2 aspect-[2/1.5] md:aspect-[2/1]">
              <PoligonoImagen1
                  src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-268.jpg"
                  alt="Conveyor vertical helicoidal"
                  overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
                  text="Conveyors Modulares"
                  textColor="text-white"
                  className="rounded-none"
              />
          </div>

          {/* Texto abajo izquierda - cuadrado */}
          <div className="relative aspect-square">
            <div className="group relative flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-tr from-orange-500 to-red-600 rounded-none">
                <p className="p-6 w-full 1728:w-full text-white font-bold tracking-tighter leading-none text-center break-words transition-transform duration-300 group-hover:scale-110 text-md 393:text-md 430:text-xl 768:text-xl 834:text-3xl 1024:text-3xl 1200:text-3xl 1280:text-2xl 1366:text-2xl 1440:text-3xl 1536:text-3xl 1728:text-3xl 1920:text-3xl">
                Automatización
              </p>
            </div>
          </div>

          {/* Imagen abajo derecha - cuadrada */}
          <div className="relative aspect-square">
            <PoligonoImagen1
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-268.jpg"
              alt="Sistemas de transporte"
              overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
              text="Conveyors de Rodillos"
              textColor="text-white"
              className="rounded-none"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

import { PoligonoImagen1 } from '@/components/ui/brandpetram/poligono-imagen-1'
import { PoligonoIcono1 } from '@/components/ui/brandpetram/poligono-icono-1'
import { SdiEmblema } from '@/components/ui/icons/sdi-emblema'

/**
 * Grid de Polígonos 2x1x2x1
 *
 * Desktop (md+): 6 columnas (2 + 1 + 2 + 1)
 * - Columna izquierda (2 cols): 2 polígonos arriba + 1 abajo
 * - Columna central izq (1 col): 1 polígono vertical (altura completa)
 * - Columna central der (2 cols): 1 rectángulo arriba + 2 cuadrados abajo
 * - Columna derecha (1 col): 1 polígono vertical (altura completa)
 *
 * Móvil: Apilado vertical con orden específico
 *
 * Para usar: copia este archivo y edita los valores directamente.
 */
export function GridPoligonos2x1x2x1() {
  return (
      <div className="container mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-2.5 max-w-4xl xl:max-w-7xl 1536:max-w-full mx-auto">

        {/* === GRID IZQUIERDO (2 columnas en desktop) === */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2.5">
          {/* Imagen arriba izquierda - cuadrada */}
          <div className="relative aspect-square">
            <PoligonoImagen1
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-298.jpg"
              alt="Conveyor aéreo industrial"
              overlayColor="oklch(21.6% 0.006 56.043 / 0.8)"
              text="Conveyors Aéreos"
              textColor="text-white"
              className="rounded-none"
            />
          </div>

          {/* Icono arriba derecha - cuadrado */}
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

          {/* Texto abajo - rectangular */}
          <div className="relative col-span-2 aspect-[2/1]">
            <div className="group relative flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 rounded-none">
                <p className="p-6 w-8/12 1728:w-9/12 text-white font-bold tracking-tighter leading-none text-center break-words transition-transform duration-300 group-hover:scale-110 text-2xl 393:text-3xl 430:text-3xl 768:text-5xl 834:text-5xl 1024:text-5xl 1200:text-5xl 1280:text-4xl 1366:text-4xl 1440:text-4xl 1536:text-5xl 1728:text-5xl 1920:text-6xl">
                    Soluciones Industriales de Conveyor
                </p>
            </div>
          </div>
        </div>

        {/* === COLUMNA CENTRAL IZQUIERDA (1 columna vertical) === */}
        <div className="relative aspect-[2/1] md:aspect-auto order-3 md:order-2">
          <PoligonoImagen1
            src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-299.jpg"
            alt="Conveyor vertical helicoidal"
            overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
            text="Sistemas Verticales"
            textColor="text-white"
            className="rounded-none"
          />
        </div>

        {/* === GRID CENTRAL DERECHO (2 columnas) === */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2.5 order-2 md:order-3">
          {/* Imagen arriba - rectangular */}
          <div className="relative col-span-2 aspect-[2/1.5] md:aspect-[2/1]">
            <PoligonoImagen1
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-300.jpg"
              alt="Conveyor vertical helicoidal"
              overlayColor="oklch(21.6% 0.006 56.043 / 0.9)"
              text="Sistemas Verticales"
              textColor="text-white"
              className="rounded-none"
            />
          </div>

          {/* Texto abajo izquierda - cuadrado */}
          <div className="relative aspect-square">
            <div className="group relative flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-br from-orange-600 to-orange-500 rounded-none">
                <p className="p-6 w-full 1728:w-full text-white font-bold tracking-tighter leading-none text-center break-words transition-transform duration-300 group-hover:scale-110 text-md 393:text-md 430:text-xl 768:text-xl 834:text-3xl 1024:text-3xl 1200:text-3xl 1280:text-xl 1366:text-xl 1440:text-xl 1536:text-2xl 1728:text-3xl 1920:text-3xl">
                Automatización
              </p>
            </div>
          </div>

          {/* Imagen abajo derecha - cuadrada */}
          <div className="relative aspect-square">
            <PoligonoImagen1
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-301.jpg"
              alt="Sistemas de transporte"
              overlayColor="oklch(64.6% 0.222 41.116 / 0.9)"
              text="Transporte"
              textColor="text-white"
              className="rounded-none"
            />
          </div>
        </div>

        {/* === COLUMNA DERECHA (1 columna vertical) === */}
        <div className="relative order-4 aspect-[2/1] md:aspect-auto">
          <PoligonoImagen1
            src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-302.jpg"
            alt="Integración industrial"
            overlayColor="oklch(14.7% 0.004 49.25 / 0.8)"
            text="Integración"
            textColor="text-white"
            className="rounded-none"
          />
        </div>

      </div>
    </div>
  )
}

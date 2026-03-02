/**
 * Hero Marketing 1
 *
 * Hero con imagen de fondo y caja de texto superpuesta.
 * Modelo: Cero props - el cliente copia y edita directamente.
 *
 * PLACEHOLDERS A EDITAR:
 * - Imagen: src en ImagenRectangulo
 * - Título: "Aumentamos Ventas de Empresas B2B"
 * - Textos: Los <p> dentro del componente
 * - Color línea: clasesLinea en propsContenido
 * - Grid/Overlay: gridConfig, overlayOpacity
 */

import { ContentText1 } from '../ui/brandpetram/content-text-1'
import { ImagenRectangulo } from '../ui/brandpetram/imagen-rectangulo'
import {EmblemaGrupoNelson} from "@/components/ui/brandpetram/emblema-nelson";
import {PoligonoIcono1} from "@/components/ui/brandpetram/poligono-icono-1";
import { cn } from '@/lib/utils'

export function HeroMarketing1() {
  // Configuración del contenido de texto
  const propsContenido = {
    className: 'rounded-2xl bg-background/80 px-[2rem] mx-[1rem] md:px-[3rem] md:mx-[5rem]  1920:px-[6rem] 1920:mx-[15rem]',
    titulo: 'Tu Nave Industrial con Certificación LEED en Mexicali',
    clasesLinea: 'bg-gray-300 w-full h-1',
      mostrarLinea: true,

      emblemaInterior: (
          <PoligonoIcono1
              icon={<EmblemaGrupoNelson className="w-32 h-auto" />}
              backgroundColor="bg-blue-500"
              iconColor="text-white"
              iconSize="size-32"
              hoverEffect="rotate"
              className="rounded-xl p-7"
          />
      ),
      clasesEmblemaInterior: 'bg-gray-300 aspect-square max-h-10 lg:max-h-72 bg-transparent',
    clasesTitulo: 'leading-none font-extrabold text-left 1920:text-[5rem]',
    clasesTexto: 'leading-normal tracking-wide 1200:text-[2rem] font-light',
  }

  return (
    <div>
      {/* Imagen de fondo con overlay y grid */}
      <div className="max-w-screen-3xl mx-auto">
        <ImagenRectangulo
          src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-422.jpg"
          alt="Hero"
          className="aspect-square md:aspect-21/9 rounded-sm"
          overlayOpacity={0.5}
          gridConfig={{
            strokeColor: 'stroke-white/40',
            highlightColor: 'fill-white/10',
            showHighlights: true,
            gridSize: 100,
            fadePosition: 'center',
            fadeRadius: '24rem',
            animate: {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1.2, delay: 1.2, ease: 'easeOut' },
            },
          }}
        />
      </div>

      {/* Caja de texto superpuesta */}
      <div className="relative z-10 -translate-y-30  md:-translate-y-20 xl:-translate-y-80">
        {/* Pantallas < 1536px */}
        <div className="2xl:hidden">
          <ContentText1 {...propsContenido}>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>

          </ContentText1>
        </div>

        {/* Pantallas ≥ 1536px */}
        <div className="hidden 2xl:block z-50">
          <ContentText1 {...propsContenido}>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </ContentText1>
        </div>
      </div>
    </div>
  )
}

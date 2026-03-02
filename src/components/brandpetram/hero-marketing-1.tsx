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

export function HeroMarketing1() {
  // Configuración del contenido de texto
  const propsContenido = {
    className: 'rounded-2xl bg-white/80',
    titulo: 'Tu Nave Industrial con Certificación LEED en Mexicali',
    clasesLinea: 'bg-gray-300',
      mostrarLinea: false,
    emblema: (
        <PoligonoIcono1
            icon={<EmblemaGrupoNelson className="w-32 h-auto" />}
            backgroundColor="bg-blue-500"
            iconColor="text-white"
            iconSize="size-32"
            hoverEffect="rotate"
            className="rounded-xl p-7"
        />
    ),
      clasesEmblema: 'bg-gray-300 aspect-square max-h-10 lg:max-h-72 bg-transparent',
    anchoLinea: 'full' as const,
    altoLinea: 'thin' as const,
    clasesTitulo: 'leading-none font-extrabold lg:text-[4rem] text-left ',
    clasesTexto: 'leading-normal text-balance xl:text-justify font-normal',
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
      <div className="relative z-10 max-w-7xl -translate-y-60 -mb-60 lg:-translate-y-80 lg:-mb-80 xl:-translate-y-80 xl:-mb-80 w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-9/12 mx-auto">
        {/* Pantallas < 1536px */}
        <div className="2xl:hidden">
          <ContentText1  escala="lg" {...propsContenido}>
            <p>
              Brandpetram es una agencia B2B con más de 12 años de experiencia
              transformando empresas industriales mexicanas exitosamente.
              Combinamos comunicación estratégica, SEO avanzado y sistemas
              custom para generar demanda altamente calificada y optimizar
              operaciones, multiplicando ventas de forma medible y sostenida.
            </p>

          </ContentText1>
        </div>

        {/* Pantallas ≥ 1536px */}
        <div className="hidden 2xl:block z-50">
          <ContentText1  escala="2xl" {...propsContenido}>
            <p>
              Brandpetram es una agencia B2B con más de 12 años de experiencia
              transformando empresas industriales mexicanas exitosamente.
              Combinamos comunicación estratégica, SEO avanzado y sistemas
              custom para generar demanda altamente calificada y optimizar
              operaciones, multiplicando ventas de forma medible y sostenida.
            </p>
            <p>
              Nuestros casos exitosos demuestran aumentos del 700% en leads,
              reducciones del 70% en costos operativos, y somos la primera
              agencia mexicana especializada en posicionamiento B2B en Google y
              plataformas AI.
            </p>
          </ContentText1>
        </div>
      </div>
    </div>
  )
}

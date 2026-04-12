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


const text = {
  es: {
    titulo: 'Certifica LEED tu nave industrial en Mexicali — donde el clima es el examen más difícil',
    parrafo: 'Cada vez más corporativos globales exigen o prefieren LEED para aprobar nuevas instalaciones. Certificar a 48°C con un equipo que no conoce el desierto es una apuesta cara. Baumex lleva 28 años construyendo en Mexicali, con datos de desempeño térmico reales — no teóricos. Gulfstream ya está certificando LEED Gold su nave de 52,200 m² aquí.',
  },
  en: {
    titulo: 'LEED-certify your industrial building in Mexicali — where extreme climate is the hardest test',
    parrafo: 'More and more global corporations require or prefer LEED to approve new facilities. Certifying at 48°C with a team unfamiliar with the desert is an expensive gamble. Baumex has 28 years of building experience in Mexicali, with real thermal performance data — not theoretical. Gulfstream is already pursuing LEED Gold certification for its 52,200 m² facility here.',
  },
}

export function HeroMarketing1({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const t = text[lang]
  // Configuración del contenido de texto
  const propsContenido = {
    className: 'rounded-2xl bg-background/80 px-[2rem] mx-[1rem] md:px-[3rem] md:mx-[5rem]  1728:px-[6rem] 1728:mx-[12rem] 1920:px-[6rem] 1920:mx-[15rem]',
    titulo: t.titulo,
    clasesLinea: 'bg-gray-300 w-full h-1',
      mostrarLinea: true,

      emblemaInterior: (
          <PoligonoIcono1
              icon={<EmblemaGrupoNelson className="w-full h-full -translate-x-0.5" />}
              backgroundColor="bg-blue-500 to-blue-600 bg-linear-to-br"
              iconColor="text-white"
              iconSize="size-13 md:size-20 1024:size-26"
              hoverEffect="rotate"
              className="rounded-sm p-4 md:p-6 1024:p-9"
          />
      ),
      clasesEmblemaInterior: 'bg-transparent',
    clasesTitulo: 'leading-none font-extrabold text-left 1728:text-[4rem] 1920:text-[5rem]',
    clasesTexto: 'leading-normal tracking-wide 768:text-[1.25rem] 834:text-[1.375rem] 1024:text-[1.5rem] 1200:text-[1.625rem] font-light',
  }

  return (
    <div data-component="HeroMarketing1" data-component-file="src/components/brandpetram/hero-marketing-1.tsx" data-component-props="false">
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
      <div className="relative z-10 -mt-30  md:-mt-20 xl:-mt-80">

        {/* Pantallas ≥ 1536px */}
        <div className="">
          <ContentText1 {...propsContenido}>
            <p>
                {t.parrafo}
            </p>
          </ContentText1>

        </div>
      </div>
    </div>
  )
}

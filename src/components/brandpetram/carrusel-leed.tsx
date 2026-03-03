'use client'

import { Carrusel1 } from '@/componentes/brandpetram/carrusel-1'
import { Titulo } from '@/components/ui/brandpetram/titulo'
import { GridOverlay } from '@/components/ui/grid'
import type { GridProps } from '@/components/ui/grid'
import { cn } from '@/lib/utils'

type BlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity'

interface CarruselLeedProps {
  /** Opacidad del overlay oscuro sobre cada imagen (0-1) */
  overlayOpacity?: number
  /** Clases de gradiente o color para overlay con efecto blend */
  colorOverlay?: string
  /** Blend mode para el colorOverlay */
  blendMode?: BlendMode
  /** Configuración del grid overlay sobre las imágenes */
  gridConfig?: Omit<GridProps, 'mode' | 'children' | 'height'>
}

// Items del carrusel de Certificación LEED
// Items del carrusel de Certificación LEED
const leedCarruselItems = [
    { id: 'leed1', title: 'Experiencia en<br>Clima Extremo', subtitle: 'Mexicali exige un nivel de diseño distinto. Nuestra experiencia local en zonas con +45°C y alta radiación solar es lo que diferencia una nave LEED en papel de una que funciona en la realidad.', href: '/leed/clima-extremo', etiqueta: 'Experiencia en Clima Extremo' },
    { id: 'leed2', title: 'Proceso &<br>Certificación LEED', subtitle: 'Domina la documentación técnica y los submittals ante el USGBC bajo LEED v4 BD+C, con proceso integrativo desde el diseño conceptual hasta la entrega del certificado.', href: '/leed/proceso-certificacion', etiqueta: 'Proceso & Certificación LEED' },
    { id: 'leed3', title: 'Sistemas Operativos<br>Inteligentes', subtitle: 'Integra BMS y submedición de energía y agua para que el operador de la nave tenga control total y datos en tiempo real de todos sus sistemas.', href: '/leed/sistemas-operativos', etiqueta: 'Sistemas Operativos Inteligentes' },
    { id: 'leed4', title: 'Sitios Sostenibles<br>& Agua', subtitle: 'Reduce la isla de calor con techos reflectivos y pavimentos claros, y optimiza cada litro de agua con fixtures de alta eficiencia en una de las zonas más áridas del país.', href: '/leed/sitios-sostenibles', etiqueta: 'Sitios Sostenibles & Agua' },
    { id: 'leed5', title: 'Calidad Ambiental<br>Interior', subtitle: 'Garantiza aire limpio, confort térmico y niveles óptimos de iluminación para los trabajadores, usando materiales de bajo COV y sistemas de ventilación certificados.', href: '/leed/calidad-ambiental', etiqueta: 'Calidad Ambiental Interior' },
    { id: 'leed6', title: 'Materiales<br>& Recursos', subtitle: 'Selecciona materiales con EPDs verificadas, alto contenido reciclado y origen regional, gestionando el 100% de los residuos de obra con desvío mínimo del 50% a vertedero.', href: '/leed/materiales-recursos', etiqueta: 'Materiales & Recursos' },
    { id: 'leed7', title: 'Energía<br>& Atmósfera', subtitle: 'Diseña cada nave para superar los estándares ASHRAE 90.1 mediante modelado energético, envolvente térmica de alto rendimiento y sistemas fotovoltaicos en cubierta.', href: '/leed/energia-atmosfera', etiqueta: 'Energía & Atmósfera' },
]
export function CarruselLeed({
  overlayOpacity = 0.25,
  colorOverlay = 'bg-gradient-to-br from-emerald-600/90 to-blue-500/90',
  blendMode = 'multiply',
  gridConfig = {
    strokeColor: 'stroke-white/30',
    gridSize: 40,
    showHighlights: false,
    fadePosition: 'center' as const,
    fadeRadius: '8rem',
  },
}: CarruselLeedProps = {}) {
  return (
    <section className="py-16 pl-4 md:pl-[10%]">
      <Titulo
        as="h2"
        fontSize="text-3xl md:text-6xl 1280:text-7xl"
        fontWeight="font-bold"
        className="mb-8 tracking-tighter leading-none w-10/12 1536:w-7/12"
      >
        Proyectos con Certificación LEED
      </Titulo>
      <Carrusel1
        items={leedCarruselItems.map((item) => {
          const imageMap: { [key: string]: string } = {
            leed1: '/leed/leed1-mexicali-nave-industrial-clima-extremo-1.png',
            leed2: '/leed/leed2-mexicali-nave-industrial-certificacion-bdc-1.png',
            leed3: '/leed/leed3-mexicali-nave-industrial-sistemas-bms-1.png',
            leed4: '/leed/leed4-mexicali-nave-industrial-sitios-sostenibles-1.png',
            leed5: '/leed/leed5-mexicali-nave-industrial-calidad-ambiental-1.png',
            leed6: '/leed/leed6-mexicali-nave-industrial-materiales-recursos-1.png',
            leed7: '/leed/leed7-mexicali-nave-industrial-energia-atmosfera-1.png',
          };

          return {
            id: item.id,
            content: (
              <a
                href={item.href}
                className="block w-[380px] rounded-none bg-white p-4 shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-gray-300"
              >
                <div className="aspect-square w-full rounded-xs bg-muted flex items-center justify-center mb-4 overflow-hidden relative transition-transform duration-300 group-hover:scale-[0.97] origin-center">
                  <img
                    src={imageMap[item.id] || '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-294.jpg'}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {overlayOpacity !== undefined && overlayOpacity > 0 && (
                    <div
                      className="absolute inset-0 bg-black pointer-events-none"
                      style={{ opacity: overlayOpacity }}
                      aria-hidden="true"
                    />
                  )}
                  {colorOverlay && (
                    <div
                      className={cn('absolute inset-0 pointer-events-none', colorOverlay)}
                      style={{ mixBlendMode: blendMode }}
                      aria-hidden="true"
                    />
                  )}
                  {gridConfig && <GridOverlay {...gridConfig} />}
                  {item.etiqueta && (
                    <span className="absolute top-3 left-3 text-white font-extrabold tracking-tighter text-[2rem] text-balance max-w-50 leading-none">
                      {item.etiqueta}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <h3
                    className="font-extrabold text-gray-900 text-xl leading-none tracking-tighter transition-colors duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-500 group-hover:bg-clip-text group-hover:text-transparent"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="text-sm text-gray-600 leading-snug line-clamp-3">{item.subtitle}</p>
                </div>
              </a>
            ),
          };
        })}
        gap={16}
        className="py-4"
        paddingEnd="10%"
      />
    </section>
  )
}

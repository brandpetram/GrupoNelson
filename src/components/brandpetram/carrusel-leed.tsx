'use client'

import { Carrusel1 } from '@/componentes/brandpetram/carrusel-1'
import { Titulo } from '@/components/ui/brandpetram/titulo'

// Items del carrusel de Certificación LEED
// Items del carrusel de Certificación LEED
const leedCarruselItems = [
    { id: 'leed1', title: 'Experiencia en<br>Clima Extremo', subtitle: 'Mexicali exige un nivel de diseño distinto. Nuestra experiencia local en zonas con +45°C y alta radiación solar es lo que diferencia una nave LEED en papel de una que funciona en la realidad.', href: '/leed/clima-extremo', etiqueta: 'Experiencia en Clima Extremo' },
    { id: 'leed2', title: 'Proceso &<br>Certificación LEED', subtitle: 'Dominamos la documentación técnica y los submittals ante el USGBC bajo LEED v4 BD+C, con proceso integrativo desde el diseño conceptual hasta la entrega del certificado.', href: '/leed/proceso-certificacion', etiqueta: 'Certificación' },
    { id: 'l3', title: 'Sistemas Operativos<br>Inteligentes', subtitle: 'Integramos BMS y submedición de energía y agua para que el operador de la nave tenga control total y datos en tiempo real de todos sus sistemas.', href: '/leed/sistemas-operativos', etiqueta: 'Sistemas' },
    { id: 'l4', title: 'Sitios Sostenibles<br>& Agua', subtitle: 'Reducimos la isla de calor con techos reflectivos y pavimentos claros, y optimizamos cada litro de agua con fixtures de alta eficiencia en una de las zonas más áridas del país.', href: '/leed/sitios-sostenibles', etiqueta: 'Sitios Sostenibles' },
    { id: 'l5', title: 'Calidad Ambiental<br>Interior', subtitle: 'Garantizamos aire limpio, confort térmico y niveles óptimos de iluminación para los trabajadores, usando materiales de bajo COV y sistemas de ventilación certificados.', href: '/leed/calidad-ambiental', etiqueta: 'Calidad Ambiental' },
    { id: 'l6', title: 'Materiales<br>& Recursos', subtitle: 'Seleccionamos materiales con EPDs verificadas, alto contenido reciclado y origen regional, gestionando el 100% de los residuos de obra con desvío mínimo del 50% a vertedero.', href: '/leed/materiales-recursos', etiqueta: 'Materiales' },
    { id: 'l7', title: 'Energía<br>& Atmósfera', subtitle: 'Diseñamos cada nave para superar los estándares ASHRAE 90.1 mediante modelado energético, envolvente térmica de alto rendimiento y sistemas fotovoltaicos en cubierta.', href: '/leed/energia-atmosfera', etiqueta: 'Energía' },
]

export function CarruselLeed() {
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
            'leed1': '/leed/-imagen-1.png',
            'leed2': '/leed/-proceso-y-certificacion-lead.png',
            'leed3': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-254.jpg',
            'leed4': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg',
            'leed5': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg',
            'leed6': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-257.jpg',
            'leed7': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-258.jpg',
            'leed8': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-259.jpg',
          };

          return {
            id: item.id,
            content: (
              <a
                href={item.href}
                className="block w-[380px] rounded-none bg-white p-4 shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-gray-300"
              >
                <div className="aspect-square w-full rounded-xs bg-muted flex items-center justify-center mb-4 overflow-hidden relative">
                  <img
                    src={imageMap[item.id] || '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-294.jpg'}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.etiqueta && (
                    <span className="absolute top-3 left-3 text-white font-extrabold tracking-tighter text-[2rem] text-balance max-w-25 leading-none">
                      {item.etiqueta}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <h3
                    className="font-extrabold text-gray-900 text-3xl leading-none tracking-tighter transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:bg-clip-text group-hover:text-transparent"
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

'use client'

import { Carrusel1 } from '@/componentes/brandpetram/carrusel-1'
import { Titulo } from '@/components/ui/brandpetram/titulo'

// Items del carrusel basados en el menú de Conveyors
const conveyorsCarruselItems = [
  // Servicios
  { id: 's1', title: 'Mantenimiento a<br>Conveyors', subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna', href: '/conveyors-industriales/mantenimiento' },
  { id: 's2', title: 'Refacciones<br>y kits', subtitle: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis', href: '/conveyors-industriales/refacciones' },
  { id: 's3', title: 'Sistemas de conveyors<br>built to suit', subtitle: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat', href: '/conveyors-industriales/built-to-suit' },
  { id: 's4', title: 'Integración de<br>nuevas líneas', subtitle: 'Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae', href: '/conveyors-industriales/integracion' },
  // Marcas
  { id: 'm1', title: 'Dorner<br>Conveyors', subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliqua ut enim', href: '/conveyors-industriales/dorner' },
  { id: 'm2', title: 'FlexLink<br>Conveyors', subtitle: 'Quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat duis aute irure dolor reprehenderit voluptate velit esse cillum', href: '/conveyors-industriales/flexlink' },
  { id: 'm3', title: 'Rapid<br>Industries', subtitle: 'Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum sed ut', href: '/conveyors-industriales/rapid-industries' },
  { id: 'm4', title: 'Pacline<br>Conveyors', subtitle: 'Perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore', href: '/conveyors-industriales/pacline' },
  { id: 'm5', title: 'TCI<br>Conveyors', subtitle: 'Lorem ipsum dolor consectetur adipiscing elit sed eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim', href: '/conveyors-industriales/tci' },
  { id: 'm6', title: 'Ambaflex<br>Conveyors', subtitle: 'Veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat aute irure dolor reprehenderit voluptate velit esse cillum dolore', href: '/conveyors-industriales/ambaflex' },
  { id: 'm7', title: 'Hytrol<br>Conveyors', subtitle: 'Fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim laborum sed perspiciatis', href: '/conveyors-industriales/hytrol' },
  { id: 'm8', title: 'Intralox<br>Conveyors', subtitle: 'Unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae illo inventore veritatis quasi', href: '/conveyors-industriales/intralox' },
  { id: 'm9', title: 'Omni Metal<br>Craft', subtitle: 'Architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aut odit fugit sed quia', href: '/conveyors-industriales/omni-metal-craft' },
  { id: 'm10', title: 'Octava<br>Soluciones', subtitle: 'Consequuntur magni dolores eos ratione voluptatem sequi nesciunt neque porro quisquam dolorem ipsum quia dolor sit amet consectetur adipiscing', href: '/conveyors-industriales/octava-soluciones' },
  // Industrias
  { id: 'i1', title: 'Para la Industria<br>Alimenticia', subtitle: 'Elit sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris nisi', href: '/conveyors-industriales/industria-alimenticia' },
  { id: 'i2', title: 'Para Industria<br>Manufacturera', subtitle: 'Aliquip commodo consequat duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat', href: '/conveyors-industriales/industria-manufactura' },
  { id: 'i3', title: 'Para la Industria<br>Automotriz', subtitle: 'Cupidatat non proident sunt culpa officia deserunt mollit anim laborum sed perspiciatis unde omnis natus error voluptatem accusantium doloremque', href: '/conveyors-industriales/industria-automotriz' },
]

export function CarruselConveyors() {
  return (
    <section className="py-16 pl-4 md:pl-[10%]">
      <Titulo
        as="h2"
        fontSize="text-3xl md:text-6xl 1280:text-7xl"
        fontWeight="font-bold"
        className="mb-8 tracking-tighter leading-none w-10/12 1536:w-7/12"
      >
        Soluciones en Conveyors Industriales en todo México
      </Titulo>
      <Carrusel1
        items={conveyorsCarruselItems.map((item, index) => {
          const imageMap: { [key: string]: string } = {
            's1': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            's2': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            's3': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            's4': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm1': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm2': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm3': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm4': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm5': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm6': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm7': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm8': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm9': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
            'm10': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
          };

          return {
            id: item.id,
            content: (
              <a
                href={item.href}
                className="block w-[380px] rounded-none bg-card p-4 shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-gray-300"
              >
                <div className="aspect-square w-full rounded-xs bg-muted flex items-center justify-center mb-4 overflow-hidden relative">
                  <img
                    src={imageMap[item.id] || '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg
                    alt={item.title}
                    className="w-full h-full object-cover brightness-75"
                  />
                </div>
                <div className="space-y-2">
                  <h3
                    className="font-extrabold text-card-foreground text-3xl leading-none tracking-tighter transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="text-sm text-muted-foreground leading-snug line-clamp-3">{item.subtitle}</p>
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

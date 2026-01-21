'use client'

import { Carrusel1 } from '@/componentes/brandpetram/carrusel-1'
import { Titulo } from '@/components/ui/brandpetram/titulo'

// Items del carrusel de Grupo Nelson
const conveyorsCarruselItems = [
  // Parques Industriales
  { id: 's1', title: 'Parque<br>Nelson II', subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna', href: '/parques-industriales-mexicali/nelson-ii' },
  { id: 's2', title: 'Parque<br>Nelson I', subtitle: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis', href: '/parques-industriales-mexicali/nelson-i' },
  { id: 's3', title: 'Parque<br>El Vigía I', subtitle: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat', href: '/parques-industriales-mexicali/el-vigia-i' },
  { id: 's4', title: 'Parque<br>El Vigía II', subtitle: 'Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae', href: '/parques-industriales-mexicali/el-vigia-ii' },
  // Inventario y Servicios
  { id: 'm1', title: 'Naves<br>Disponibles', subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliqua ut enim', href: '/inventario/naves-disponibles' },
  { id: 'm2', title: 'Terrenos<br>en Venta', subtitle: 'Quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat duis aute irure dolor reprehenderit voluptate velit esse cillum', href: '/inventario/terrenos' },
  { id: 'm3', title: 'Built<br>to Suit', subtitle: 'Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum sed ut', href: '/servicios/built-to-suit' },
  { id: 'm4', title: 'Llave<br>en Mano', subtitle: 'Perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore', href: '/servicios/llave-en-mano' },
  { id: 'm5', title: 'Arrendamiento<br>Industrial', subtitle: 'Lorem ipsum dolor consectetur adipiscing elit sed eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim', href: '/servicios/arrendamiento' },
  { id: 'm6', title: 'Desarrollo de<br>Terrenos', subtitle: 'Veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat aute irure dolor reprehenderit voluptate velit esse cillum dolore', href: '/servicios/desarrollo-terrenos' },
  { id: 'm7', title: 'Construcción<br>Propia', subtitle: 'Fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim laborum sed perspiciatis', href: '/servicios/construccion-propia' },
  // Industrias
  { id: 'm8', title: 'Industria<br>Manufacturera', subtitle: 'Unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae illo inventore veritatis quasi', href: '/industrias/manufactura' },
  { id: 'm9', title: 'Logística y<br>Distribución', subtitle: 'Architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aut odit fugit sed quia', href: '/industrias/logistica' },
  { id: 'm10', title: 'Tecnología y<br>Electrónica', subtitle: 'Consequuntur magni dolores eos ratione voluptatem sequi nesciunt neque porro quisquam dolorem ipsum quia dolor sit amet consectetur adipiscing', href: '/industrias/tecnologia' },
  { id: 'i1', title: 'Industria<br>Automotriz', subtitle: 'Elit sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris nisi', href: '/industrias/automotriz' },
  { id: 'i2', title: 'Industria<br>Médica', subtitle: 'Aliquip commodo consequat duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat', href: '/industrias/medica' },
  { id: 'i3', title: 'Alimentos y<br>Bebidas', subtitle: 'Cupidatat non proident sunt culpa officia deserunt mollit anim laborum sed perspiciatis unde omnis natus error voluptatem accusantium doloremque', href: '/industrias/alimentos-bebidas' },
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
        Naves Industriales y Parques en Mexicali
      </Titulo>
      <Carrusel1
        items={conveyorsCarruselItems.map((item, index) => {
          const imageMap: { [key: string]: string } = {
            's1': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-252.jpg',
            's2': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-253.jpg',
            's3': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-254.jpg',
            's4': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg',
            'm1': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg',
            'm2': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-257.jpg',
            'm3': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-258.jpg',
            'm4': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-259.jpg',
            'm5': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-260.jpg',
            'm6': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg',
            'm7': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-262.jpg',
            'm8': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-263.jpg',
            'm9': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-264.jpg',
            'm10': '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-265.jpg',
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
                    src={imageMap[item.id] || '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-294.jpg'}
                    alt={item.title}
                    className="w-full h-full object-cover brightness-75"
                  />
                </div>
                <div className="space-y-2">
                  <h3
                    className="font-extrabold text-card-foreground text-3xl leading-none tracking-tighter transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:bg-clip-text group-hover:text-transparent"
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

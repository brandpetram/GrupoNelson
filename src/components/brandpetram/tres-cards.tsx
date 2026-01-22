import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function TresCards() {
  return (
    <div className="w-full px-6 810:px-12 1024:px-16 ">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 max-w-280">

        {/* Card 1 - Video */}
        <div className="flex-1 flex flex-col">
          {/* Área de texto - altura fija para alineación */}
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-8 md:p-10 lg:p-12 flex flex-col justify-end h-[230px] 1280:h-[280px] rounded-t-sm">
            <h3 className="text-3xl md:text-lg 1024:text-lg 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-3xl 1728:text-4xl 1920:text-4xl font-normal text-white leading-none mb-8">
              Proveeduría<br/>de Conveyors
            </h3>

            <button className="flex items-center gap-3 text-white font-bold text-xl md:text-lg 1024:text-lg 1200:text-lg 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-2xl group">
              <span>Cotiza aquí</span>
              <ArrowRight className="w-8 h-8 md:w-7 md:h-7 1200:w-10 1200:h-10 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </button>
          </div>

          {/* Área de video - aspect ratio cuadrado sin rounded */}
          <div className="relative aspect-square bg-black">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              poster="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-276.jpg"
            >
              <source src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-277.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Card 2 - Imagen */}
        <div className="flex-1 flex flex-col">
          {/* Área de texto - altura fija para alineación */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-10 lg:p-12 flex flex-col justify-end h-[230px] 1280:h-[280px] rounded-t-sm">
            <h3 className="text-3xl md:text-lg 1024:text-lg 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-3xl 1728:text-4xl 1920:text-4xl font-normal text-white leading-none mb-8">
              Ingeniería y<br/>Proyectos<br/>con Conveyors
            </h3>

            <button className="flex items-center gap-3 text-white font-bold text-xl md:text-lg 1024:text-lg 1200:text-lg 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-2xl group">
              <span>Cotiza aquí</span>
              <ArrowRight className="w-8 h-8 md:w-7 md:h-7 1200:w-10 1200:h-10 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </button>
          </div>

          {/* Área de imagen - aspect ratio cuadrado sin rounded */}
          <div className="relative aspect-square bg-gray-200">
            <Image
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-278.jpg"
              alt="Lorem ipsum"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Card 3 - Imagen */}
        <div className="flex-1 flex flex-col">
          {/* Área de texto - altura fija para alineación */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 md:p-10 lg:p-12 flex flex-col justify-end h-[230px] 1280:h-[280px] rounded-t-sm">
            <h3 className="text-3xl md:text-lg 1024:text-lg 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-3xl 1728:text-4xl 1920:text-4xl font-normal text-white leading-none mb-8">
              Servicio<br/>y Refacciones<br/>para Conveyors
            </h3>

            <button className="flex items-center gap-3 text-white font-bold text-xl md:text-lg 1024:text-lg 1200:text-lg 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-2xl group">
              <span>Cotiza aquí</span>
              <ArrowRight className="w-8 h-8 md:w-7 md:h-7 1200:w-10 1200:h-10 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </button>
          </div>

          {/* Área de imagen - aspect ratio cuadrado sin rounded */}
          <div className="relative aspect-square bg-gray-200">
            <Image
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
              alt="Lorem ipsum"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

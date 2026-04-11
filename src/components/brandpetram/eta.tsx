/**
 * Componente Eta
 * Layout flex: imagen 45% (aspect 9:16) + contenido 55% (h2, p, botón)
 */

export function Eta() {
  return (
     <div data-component="Eta" data-component-file="src/components/brandpetram/eta.tsx" data-component-props="false" className="w-11/12 mx-auto relative">
      {/* Elemento decorativo - esquina superior derecha */}
      <div className="absolute top-0 right-0 w-1/2 md:w-[25%] h-[50%] border-t border-r border-gray-400 dark:border-gray-600"></div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Imagen izquierda - 45% */}
        <div className="w-[80%] md:w-[45%] mt-10 md:mt-0">
          <div className="aspect-square md:aspect-[1/2] 1200:aspect-[1/1.1]">
            <img
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-1.jpeg"
              alt="Ventana con vista al bosque"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contenido derecha - 55% */}
        <div className="w-[55%] flex items-center justify-center">
          <div className="px-1 768:px-[2.8rem] 834:px-[4rem] 1024:px-[6rem] 1200:px-[6rem] 1280:px-[6.8rem] 1366:px-[7rem] 1440:px-[7.5rem] 1536:px-[8rem] 1728:px-[10rem] 1920:px-[11rem]">
            <div className="flex flex-col gap-5">
              <h2 className="text-[1.5rem] 360:text-[1.8rem] 393:text-[2rem] 430:text2.2rem] 768:text-[2rem] 834:text-[2.45rem] 1024:text-[2.8rem] 1200:text-[2.5rem] 1280:text-[2.6rem] 1366:text-[2.8rem] 1440:text-[3rem] 1536:text-[3.3rem] 1728:text-[3.6rem] 1920:text-[4rem] font-semibold leading-tight text-black dark:text-white">
                Selecciona el parque que se ajusta a tu operación y tu presupuesto.
              </h2>

              <p className="text-[1rem] 360:text-[1rem] 393:text-[1.2rem] 430:text-[1.3rem] 768:text-[1.15rem] 834:text-[1.2rem] 1024:text-[1.3rem] 1200:text-[1.2rem] 1280:text-[1.3rem] 1366:text-[1.4rem] 1440:text-[1.5rem] 1536:text-[1.7rem] 1728:text-[2rem] 1920:text-[2.3rem] leading-relaxed text-gray-600 dark:text-gray-400">
                El Vigía — rentas más económicas del portafolio, Interiores Aéreos creció de 5,000 ft² a 550,000 aquí. Nelson I — desde 1984. Vigía II — Honeywell Aerospace opera aquí desde hace más de 30 años. Nelson II — 27 hectáreas, subestación eléctrica dedicada, contraincendio central de 360,000 galones, Gulfstream, DHL y Vertiv operan aquí.
              </p>

              <a href="/contacto" className="w-fit px-4 1200:px-9 py-5 mt-5 border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-medium hover:border-gray-500 dark:hover:border-gray-400 transition-colors inline-block">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Componente Eta
 * Layout flex: imagen 45% (aspect 9:16) + contenido 55% (h2, p, botón)
 */

export function Eta() {
  return (
     <div className="w-11/12 mx-auto relative">
      {/* Elemento decorativo - esquina superior derecha */}
      <div className="absolute top-0 right-0 w-1/2 md:w-[25%] h-[50%] border-t border-r border-gray-400"></div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Imagen izquierda - 45% */}
        <div className="w-[80%] md:w-[45%] mt-10 md:mt-0">
          <div className="aspect-square md:aspect-[1/2] 1200:aspect-[1/1.1]">
            <img
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Ventana con vista al bosque"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contenido derecha - 55% */}
        <div className="w-[55%] flex items-center justify-center">
          <div className="px-1 768:px-[2.8rem] 834:px-[4rem] 1024:px-[6rem] 1200:px-[6rem] 1280:px-[6.8rem] 1366:px-[7rem] 1440:px-[7.5rem] 1536:px-[8rem] 1728:px-[10rem] 1920:px-[11rem]">
            <div className="flex flex-col gap-5">
              <h2 className="text-[1.5rem] 360:text-[1.8rem] 393:text-[2rem] 430:text2.2rem] 768:text-[2rem] 834:text-[2.45rem] 1024:text-[2.8rem] 1200:text-[2.5rem] 1280:text-[2.6rem] 1366:text-[2.8rem] 1440:text-[3rem] 1536:text-[3.3rem] 1728:text-[3.6rem] 1920:text-[4rem] font-semibold leading-tight text-black">
                Lorem ipsum dolor sit amet consec petram losx.
              </h2>

              <p className="text-[1rem] 360:text-[1rem] 393:text-[1.2rem] 430:text-[1.3rem] 768:text-[1.15rem] 834:text-[1.2rem] 1024:text-[1.3rem] 1200:text-[1.2rem] 1280:text-[1.3rem] 1366:text-[1.4rem] 1440:text-[1.5rem] 1536:text-[1.7rem] 1728:text-[2rem] 1920:text-[2.3rem] leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.
              </p>

              <button className="w-fit px-4 1200:px-9 py-5 mt-5 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

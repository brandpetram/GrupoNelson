// Origen: daasyl2022V2/MosaicOne
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next,
//   postcss Input import (no tenía uso real). Imágenes locales GrupoNelson.
//   Textos lorem ipsum. Daasyl → Grupo Nelson.

export default function Tau() {
  return (
    <div className="px-10 md:px-0  md:my-20 md:w-11/12 mx-auto overflow-hidden">
      {/* Fila 1 */}
      <div className="flex flex-col lg:flex-row">
        {/* Bloque izquierdo: imagen grande + 2 pequeñas */}
        <div className="lg:w-1/2 bg-gray-200 p-3 md:p-16">
          <div className="lg:w-3/5 xl:w-1/2">
            <img
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-7.jpeg"
              alt="Nave industrial"
              className="w-full h-auto object-cover aspect-square"
            />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <img
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg"
                alt="Nave industrial"
                className="w-full h-auto object-cover aspect-square"
              />
              <img
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-9.jpeg"
                alt="Nave industrial"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Bloque derecho: grid 2×2 con texto e imagen */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2">
          {/* Celda 1: texto sobre fondo blanco */}
          <div className="aspect-square relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] text-foreground font-light leading-none">
                Lorem ipsum
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                Lorem ipsum <br className="hidden md:block" /> dolor sit
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                Consectetur <br /> adipiscing elit
              </p>
            </div>
          </div>

          {/* Celda 2: imagen + triángulo azul */}
          <div className="aspect-square bg-linear-to-br from-blue-600 to-blue-700 relative overflow-hidden">
            {/* Franja izquierda con triángulo */}
            <div className="absolute left-0 top-0 w-[15%] h-full flex items-start justify-start pt-[19%] -translate-x-1">
              <svg className="w-10 h-auto text-background" viewBox="0 0 78 163">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon
                    fill="currentColor"
                    transform="translate(39,81.5) scale(-1,1) rotate(-90) translate(-39,-81.5)"
                    points="39 43 120 120 -42 120"
                  />
                </g>
              </svg>
            </div>
            {/* Cuadrado blanco: 85% del tamaño de la celda, centrado verticalmente */}
            <div className="absolute right-0 top-[7.5%] w-[85%] aspect-square bg-background transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-90 overflow-hidden">
              <div className="p-8 md:p-10 xl:p-12">
                <img
                  src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-10.jpeg"
                  alt="Nave industrial"
                  className="w-full aspect-square object-cover"
                />
                <p className="text-right text-sm 768:text-base 1024:text-base 1200:text-[0.85rem] 1440:text-[1rem] 1920:text-[1.25rem] mt-1 leading-none">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>

          {/* Celda 3: texto sobre fondo azul */}
          <div className="aspect-square relative bg-linear-to-br from-blue-600 to-blue-700 text-white">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] font-light leading-none">
                Lorem ipsum
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                Dolor sit <br className="hidden md:block" /> amet
              </h1>
              <p className="hidden md:block text-center mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                Sed do eiusmod <br /> tempor
              </p>
            </div>
          </div>

          {/* Celda 4: imagen */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-11.jpeg"
              alt="Nave industrial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Fila 2 */}
      <div className="flex flex-col lg:flex-row">
        {/* Bloque izquierdo: grid 2×2 */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2">
          {/* Imagen */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/parque-industrial-nelson-1-en-mexicali.jpeg"
              alt="Parque industrial"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="aspect-square relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] text-foreground font-light leading-none">
                Lorem ipsum
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                Consectetur <br className="hidden md:block" /> adipiscing
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                Eiusmod tempor
              </p>
            </div>
          </div>

          {/* Texto */}
          <div className="aspect-square relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] text-foreground font-light leading-none">
                Lorem ipsum
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                Labore et <br className="hidden md:block" /> dolore
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                Magna aliqua
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/parque-industrial-el-vigia-2-en-mexicali.jpeg"
              alt="Parque industrial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bloque derecho: imagen grande */}
        <div className="lg:w-1/2 bg-gray-200 p-3 md:p-16">
          <img
            src="/parque-industrial-nelson-2-en-mexicali.jpeg"
            alt="Parque industrial"
            className="w-full h-auto object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  )
}

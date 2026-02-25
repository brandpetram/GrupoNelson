// Origen: daasyl2022V2/MosaicOne
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next,
//   postcss Input import (no tenía uso real). Imágenes locales GrupoNelson.
//   Textos lorem ipsum. Daasyl → Grupo Nelson.

export default function Tau() {
  return (
    <div className="md:my-20 md:w-11/12 mx-auto overflow-hidden">
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
            <div className="flex mt-6 space-x-3">
              <img
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg"
                alt="Nave industrial"
                className="w-1/2 h-auto object-cover aspect-square"
              />
              <img
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-9.jpeg"
                alt="Nave industrial"
                className="w-1/2 h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Bloque derecho: grid 2×2 con texto e imagen */}
        <div className="lg:w-1/2 grid grid-cols-2">
          {/* Celda 1: texto sobre fondo blanco */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <h2 className="text-center mb-3 uppercase text-xs text-foreground font-bold">
                Grupo Nelson
              </h2>
              <h1 className="text-center uppercase tracking-widest leading-tight font-bold text-xs md:text-lg lg:text-sm 2xl:text-lg">
                Lorem ipsum <br className="hidden md:block" /> dolor sit
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-xs md:text-lg lg:text-sm 2xl:text-lg">
                Consectetur <br /> adipiscing elit
              </p>
            </div>
          </div>

          {/* Celda 2: imagen + triángulo azul */}
          <div className="bg-linear-to-br from-blue-500 to-blue-700">
            <div className="flex">
              <div className="flex-1 bg-linear-to-br from-blue-500 to-blue-700 w-1/3 relative">
                <div className="top-0 left-0 overflow-hidden w-10 h-full bg-transparent">
                  <svg className="-mx-1 w-6 mt-8 md:mt-20" viewBox="0 0 78 163">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <polygon
                        fill="#FFFFFF"
                        transform="translate(39,81.5) scale(-1,1) rotate(-90) translate(-39,-81.5)"
                        points="39 43 120 120 -42 120"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="relative bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90">
                <img
                  src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-10.jpeg"
                  alt="Nave industrial"
                  className="my-3 md:my-0 pt-3 pl-8 pr-8 pb-8 ml-5 md:p-10 xl:p-12 overflow-hidden object-cover aspect-square"
                />
                <h1 className="text-xs lg:text-sm md:text-lg absolute bottom-0 right-0 mb-3 mr-3 leading-none">
                  Lorem <br className="md:hidden" /> ipsum
                </h1>
              </div>
            </div>
          </div>

          {/* Celda 3: texto sobre fondo azul */}
          <div className="relative bg-linear-to-br from-blue-500 to-blue-700 text-white">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <h2 className="text-center mb-3 uppercase text-xs font-bold">
                Grupo Nelson
              </h2>
              <h1 className="text-center uppercase tracking-widest leading-tight font-bold text-xs md:text-lg lg:text-sm 2xl:text-lg">
                Dolor sit <br className="hidden md:block" /> amet
              </h1>
              <p className="hidden md:block text-center mt-5 font-light text-xs md:text-lg lg:text-sm 2xl:text-lg">
                Sed do eiusmod <br /> tempor
              </p>
            </div>
          </div>

          {/* Celda 4: imagen */}
          <div>
            <img
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-11.jpeg"
              alt="Nave industrial"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>

      {/* Fila 2 */}
      <div className="flex flex-col lg:flex-row">
        {/* Bloque izquierdo: grid 2×2 */}
        <div className="lg:w-1/2 grid grid-cols-2">
          {/* Imagen */}
          <div>
            <img
              src="/parque-industrial-nelson-1-en-mexicali.jpeg"
              alt="Parque industrial"
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          {/* Texto */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <h2 className="text-center mb-3 uppercase text-xs text-foreground font-bold">
                Grupo Nelson
              </h2>
              <h1 className="text-center uppercase tracking-widest text-sm leading-tight font-bold 2xl:text-lg">
                Consectetur <br className="hidden md:block" /> adipiscing
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-xs lg:text-sm 2xl:text-lg">
                Eiusmod tempor
              </p>
            </div>
          </div>

          {/* Texto */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <h2 className="text-center mb-3 uppercase text-xs text-foreground font-bold">
                Grupo Nelson
              </h2>
              <h1 className="text-center uppercase tracking-widest text-sm leading-tight font-bold 2xl:text-lg">
                Labore et <br className="hidden md:block" /> dolore
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-xs lg:text-sm 2xl:text-lg">
                Magna aliqua
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div>
            <img
              src="/parque-industrial-el-vigia-2-en-mexicali.jpeg"
              alt="Parque industrial"
              className="w-full h-full object-cover aspect-square"
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

// Origen: daasyl2022V2/CoverDiagonal
// Adaptaciones: eliminado react-headroom, typewriter-effect, react-scroll, next-i18next,
//   heroicons v1, headlessui. Navegación eliminada (es sección, no header).
//   style jsx → inline style. Imagen local GrupoNelson.

export default function Mu() {
  return (
    <div
      id="mu"
      className="relative bg-gray-800 overflow-hidden pb-72 xl:pb-96"
      style={{
        backgroundImage:
          'url("/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-312.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "90% center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay de color/contraste — cambiar clase para ajustar efecto:
          Oscurecer:  bg-gray-900/60
          Multiply:   bg-indigo-900/50 mix-blend-multiply
          Screen:     bg-indigo-400/30 mix-blend-screen
          Sin efecto: quitar este div */}
      <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />

      {/* SVG diagonal inferior */}
      <svg
        style={{ position: "absolute", bottom: 0, width: "100%", height: "0vw" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="white" points="100,0 100,100 0,100" />
      </svg>

      {/* Patrón de puntos */}
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        <svg
          className="absolute bottom-[10rem] right-0 translate-x-1/2  text-blue-100/30  xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="mu-dot-pattern"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect width={364} height={384} fill="url(#mu-dot-pattern)" />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-32 sm:mt-40 1200:mt-48">
          <div className="mx-auto md:max-w-5xl 1024:max-w-3xl 1200:max-w-5xl 1280:max-w-6xl 1536:max-w-7xl 1728:max-w-400 1920:max-w-440 ">
            <div className="1200:grid 1200:grid-cols-12 1200:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto 1200:col-span-6 1200:text-left 1200:flex 1200:items-center ">
                <div>
                  <a
                    href="#"
                    className="hidden md:inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base 1200:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] font-semibold leading-5 uppercase tracking-wide bg-linear-to-br from-blue-500 to-blue-700 rounded-full">
                      Lorem
                    </span>
                    <span className="ml-4 text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem]">
                      Ipsum dolor sit amet
                    </span>
                  </a>
                  <h1 className="mt-4 text-2xl 360:text-[2rem] 393:text-[2.5rem] 430:text-[3rem] 768:text-[3.5rem] 834:text-[3.75rem] 1024:text-[4rem] 1200:text-[2.5rem] 1280:text-[3rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] tracking-tight font-extrabold text-white sm:mt-5 leading-none 1200:mt-6">
                    Lorem ipsum dolor sit amet petram mexico

                  </h1>
                  <p className="mt-3 text-sm 360:text-sm 393:text-[1rem] 430:text-[1.1rem] 768:text-xl 834:text-xl 1024:text-[1.5rem] 1200:text-[1.2rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-gray-300 sm:mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur deleniti deserunt dignissimos ducimus eaque facere incidunt ipsa, iste iure laudantium neque nesciunt odit placeat suscipit? Adipisci animi dolore.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center 1200:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-linear-to-br from-blue-500 to-blue-700 hover:opacity-90 md:py-4 md:text-lg md:px-10"
                      >
                        Conocer más
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                      >
                        Contacto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

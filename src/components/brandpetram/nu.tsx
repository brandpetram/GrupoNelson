// Origen: daasyl2022V2/TresColumnasBelowCover
// Adaptaciones: eliminado next-i18next, style jsx, imágenes externas SVG.
//   col-gap-8 → gap-x-8, row-gap-10 → gap-y-10 (Tailwind v4).
//   Icono flecha → símbolo →. Lista: checkmarks SVG inline.

export default function Nu() {
  return (
    <div id="nu">
      <div className="my-24 bg-white overflow-hidden">
        <div className="relative max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Patrón de puntos */}
          <svg
            className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="nu-dot-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#nu-dot-pattern)" />
          </svg>

          <div className="relative 1280:grid 1280:grid-cols-3 gap-x-40 1728:gap-x-56">
            {/* Columna izquierda: título */}
            <div className="1280:col-span-1 ml-5 md:ml-10 1728:ml-0">
              <h3 className="text-[2rem] 360:text-[2rem] 393:text-[2rem] 430:text-[2rem] 768:text-[3rem] 834:text-[3rem] 1024:text-[3rem] 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] leading-9 font-extrabold tracking-tight text-foreground leading-none">
                Lorem ipsum dolor sit amet{" "}
                <span className="text-blue-600">consectetur adipiscing</span>
              </h3>
            </div>

            {/* Columnas derecha: texto + lista */}
            <div className=" ml-5 md:ml-10 1200:ml-0 mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 1280:col-span-2 1280:mt-0">
              {/* Texto descriptivo */}
              <div className="sm:max-w-xs 1280:max-w-lg 1366:max-w-sm  1366:ml-0 leading-loose text-muted-foreground text-[1rem] 360:text-[1rem] 393:text-[1.3rem] 430:text-[1.3rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.5rem] 1200:text-[1.45rem] 1280:text-[1.2rem] 1366:text-[1.3rem] 1440:text-[1.3rem] 1536:text-[1.3rem] 1728:text-[1.3rem] 1920:text-[1.7rem]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur{" "}
                  <span className="text-blue-700 font-bold">adipiscing elit</span>{" "}
                  sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
                  <span className="text-blue-700 font-bold">aliqua enim.</span>
                </p>
                <div className="mt-12">
                  Ut enim ad minim veniam,{" "}
                  <span className="text-blue-700 font-bold">quis nostrud exercitation{" "}</span>
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  <div className="cursor-pointer mt-4">
                    <a href="#" className="text-blue-700 font-medium hover:text-blue-900">
                      Contáctanos →
                    </a>
                  </div>
                </div>
              </div>

              {/* Caja con lista */}
              <div className="mt-12 sm:mt-0 sm:max-w-xs 1280:max-w-lg mr-5 md:mr-0 md:ml-10 1366:ml-16 1440:ml-24">
                <div className="border py-10 px-10 font-bold">
                  <h5 className="text-foreground text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.3rem] 834:text-[1.3rem] 1024:text-[1.3rem] 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] leading-none w-10/12">
                    Lorem ipsum{" "}
                    <br className="md:hidden" />{" "}
                    dolor sit amet{" "}
                    <span className="font-bold text-blue-500">consectetur</span>
                  </h5>
                  <ul className="text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] font-medium mt-8 text-muted-foreground tracking-wider uppercase">
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 text-blue-500">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-6">Lorem ipsum dolor</p>
                      </div>
                      <div className="flex my-1">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 text-blue-500">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-6">Sit amet consectetur</p>
                      </div>
                      <div className="flex my-1">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 text-blue-500">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-6">Adipiscing elit eiusmod</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

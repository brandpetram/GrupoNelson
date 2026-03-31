// Origen: daasyl2022V2/TresColumnasBelowCover
// Adaptaciones: eliminado next-i18next, style jsx, imágenes externas SVG.
//   col-gap-8 → gap-x-8, row-gap-10 → gap-y-10 (Tailwind v4).
//   Icono flecha → símbolo →. Lista: checkmarks SVG inline.

export default function Nu() {
  return (
    <div data-component="Nu" data-component-file="src/components/brandpetram/nu.tsx" data-component-props="false" id="nu">
      <div className="my-24 bg-background overflow-hidden">
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
                  className="text-foreground/10"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#nu-dot-pattern)" />
          </svg>

          <div className="relative 1200:grid 1200:grid-cols-3 gap-x-40 1728:gap-x-56">
            {/* Columna izquierda: título */}
            <div className="1200:col-span-1 1200:min-w-[20rem] 1536:min-w-[24rem] ml-5 md:ml-10 1728:ml-0">
              <h3 className="text-[2rem] 360:text-[2rem] 393:text-[2rem] 430:text-[2rem] 768:text-[3rem] 834:text-[3rem] 1024:text-[3.5rem] 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] leading-9 font-extrabold tracking-tight text-foreground leading-none">
                Construcción Industrial{" "}
                <span className="text-blue-600">de Clase Mundial</span>
              </h3>
            </div>

            {/* Columnas derecha: texto + lista */}
            <div className=" ml-5 md:ml-10 1200:ml-0 mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 1200:col-span-2 1200:mt-0">
              {/* Texto descriptivo */}
              <div className="sm:max-w-xs 1200:max-w-lg 1366:max-w-sm  1366:ml-0 leading-loose text-muted-foreground text-[1rem] 360:text-[1rem] 393:text-[1.3rem] 430:text-[1.3rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.5rem] 1200:text-[1.45rem] 1280:text-[1.2rem] 1366:text-[1.3rem] 1440:text-[1.3rem] 1536:text-[1.3rem] 1728:text-[1.3rem] 1920:text-[1.7rem]">
                <p>
                  Baumex{" "}
                  <span className="text-blue-700 font-bold">concentra diseño, estimación, construcción y supervisión</span>{" "}
                  bajo un mismo contrato. El arquitecto que traza el layout trabaja en el mismo edificio que el superintendente que supervisa el colado.
                </p>
                <div className="mt-12">
                  <div className="cursor-pointer mt-4">
                    <a href="#" className="text-blue-700 font-medium hover:text-blue-900">
                      Contáctanos →
                    </a>
                  </div>
                </div>
              </div>

              {/* Caja con lista */}
              <div className="mt-12 sm:mt-0 sm:max-w-md 1200:max-w-xl 1536:max-w-2xl 1728:max-w-3xl mr-5 md:mr-0 md:ml-10 1366:ml-16 1440:ml-24">
                <div className="border border-foreground/20 py-10 px-10 font-bold 1200:w-[18rem] 1366:w-[20rem] 1536:w-[22rem] 1728:w-[24rem] 1920:w-[26rem]">
                  <h5 className="text-foreground text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.3rem] 834:text-[1.3rem] 1024:text-[1.3rem] 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] leading-none w-10/12">
                    Disciplinas{" "}
                    <br className="md:hidden" />{" "}
                    de ingeniería{" "}
                    <span className="font-bold text-blue-500">in-house</span>
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
                        <p className="ml-6">Diseño Arquitectónico Industrial</p>
                      </div>
                      <div className="flex my-1">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 text-blue-500">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-6">Ingeniería Estructural y Sísmica</p>
                      </div>
                      <div className="flex my-1">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 text-blue-500">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-6">Sistemas Eléctricos de Alta Capacidad</p>
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

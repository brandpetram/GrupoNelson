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

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            {/* Columna izquierda: título */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-foreground sm:text-4xl sm:leading-10">
                Lorem ipsum dolor sit amet{" "}
                <br className="lg:hidden xl:block" />{" "}
                <span className="text-blue-600">consectetur adipiscing</span>
              </h3>
            </div>

            {/* Columnas derecha: texto + lista */}
            <div className="mt-10 sm:grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:col-span-2 lg:mt-0">
              {/* Texto descriptivo */}
              <div className="sm:max-w-xs lg:max-w-lg xl:max-w-sm lg:ml-40 xl:ml-0 leading-loose text-muted-foreground">
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
              <div className="lg:hidden xl:block mt-12 sm:mt-0 sm:max-w-xs lg:max-w-lg xl:ml-16 2xl:ml-24">
                <div className="border py-10 px-10 text-2xl font-bold">
                  <h5 className="text-foreground">
                    Lorem ipsum{" "}
                    <br className="md:hidden" />{" "}
                    dolor sit amet{" "}
                    <span className="font-bold text-blue-500">consectetur</span>
                  </h5>
                  <ul className="text-lg font-medium mt-8 text-muted-foreground tracking-wider uppercase">
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
                      <div className="flex my-8">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 text-blue-500">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-6">Sit amet consectetur</p>
                      </div>
                      <div className="flex my-8">
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

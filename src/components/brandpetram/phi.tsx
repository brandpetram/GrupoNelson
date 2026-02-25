// Origen: daasyl2022V2/BigWorld
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   7xl → omitido (no existe en GrupoNelson). Imagen local GrupoNelson.
//   Textos lorem ipsum. Botones de contacto hardcodeados.
//   Imagen: absolute right-0 top-0 — sangra por la derecha como el globo original.
//   Para mover la imagen: ajustar translate-x-* o el width.

export default function Phi() {
  return (
    <div className="relative z-10 mt-[20rem]">
      {/* Imagen circular — anclada a la derecha, puede sangrar fuera del viewport.
          Tamaño del círculo: cambiar w-[600px]. Sangrado: cambiar translate-x-[20%]. */}
      <div className="absolute right-0 top-0 z-50  -translate-y-[10rem] translate-x-[30%] w-[58rem] aspect-square rounded-full overflow-hidden">
        <img
          src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-400.jpg"
          alt="Parque industrial"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
      </div>

      {/* Texto — flujo normal, determina la altura del componente */}
      <div className="relative z-10 lg:ml-20 3xl:ml-40 lg:pt-16 lg:max-w-3xl 3xl:max-w-4xl pb-16">
        <h1 className="text-foreground w-10/12 md:w-full mx-5 lg:mx-0 text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] leading-tight font-bold">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
        </h1>

        <div className="py-16 px-0 sm:px-6 lg:py-16 lg:px-0 lg:grid lg:grid-cols-5 lg:gap-x-9">
          {/* Subtítulo */}
          <div className="col-span-2 mx-5 lg:mx-0 text-foreground">
            <h2 className="-mt-10 text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] font-semibold text-muted-foreground uppercase tracking-wide">
              Grupo Nelson <br className="md:hidden" />
              consectetur adipiscing
            </h2>
            <p className="w-10/12 md:w-2/3 lg:w-full mt-5 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] leading-7 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
            </p>
            <p className="w-full md:w-2/3 lg:w-full mt-7 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-7 text-muted-foreground">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <h4 className="mt-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Lorem ipsum:</h4>
            <ul className="mt-5 space-y-3 text-muted-foreground text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem]">
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Adipiscing elit sed do eiusmod tempor</li>
              <li>Incididunt ut labore et dolore magna</li>
            </ul>
          </div>

          {/* Lista de servicios con botones */}
          <div className="mt-12 lg:mt-0 lg:col-span-3 lg:ml-8 mx-10 lg:mx-0">
            <dl className="space-y-0">
              {/* Servicio 1 */}
              <div className="space-y-2 pb-6">
                <dt className="text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-medium text-foreground">
                  Lorem ipsum dolor sit amet
                </dt>
                <dd className="flex">
                  <span className="flex-1 mr-6 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-6 text-muted-foreground">
                    Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </span>
                  <div className="flex-none">
                    <a href="#">
                      <button className="w-28 bg-linear-to-br from-blue-500 to-blue-700 hover:opacity-90 p-2 text-white text-sm rounded-md">
                        Contacto
                      </button>
                    </a>
                  </div>
                </dd>
              </div>

              {/* Servicio 2 */}
              <div className="space-y-2 border-b border-t py-6">
                <dt className="text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-medium text-foreground">
                  Ut enim ad minim veniam quis
                </dt>
                <dd className="flex">
                  <span className="flex-1 mr-6 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-6 text-muted-foreground">
                    Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat duis aute irure dolor.
                  </span>
                  <div className="flex-none">
                    <a href="#">
                      <button className="w-28 bg-linear-to-br from-blue-500 to-blue-700 hover:opacity-90 p-2 text-white text-sm rounded-md">
                        Contacto
                      </button>
                    </a>
                  </div>
                </dd>
              </div>

              {/* Servicio 3 */}
              <div className="space-y-2 pt-6">
                <dt className="text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-medium text-foreground">
                  Duis aute irure dolor reprehenderit
                </dt>
                <dd className="flex">
                  <span className="flex-1 mr-6 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-6 text-muted-foreground">
                    In voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    excepteur sint occaecat cupidatat.
                  </span>
                  <div className="flex-none">
                    <a href="#">
                      <button className="w-28 bg-linear-to-br from-blue-500 to-blue-700 hover:opacity-90 p-2 text-white text-sm rounded-md">
                        Contacto
                      </button>
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

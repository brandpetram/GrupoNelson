// Origen: daasyl2022V2/ContentSplitWithImage
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   prose class reemplazado con estilos explícitos (@tailwindcss/typography no instalado).
//   Imagen local GrupoNelson con h-full para llenar toda la altura del componente.

export default function Xi() {
  return (
    <div id="xi" className="relative bg-white">
      {/* Imagen — posicionada absolutamente para llenar toda la altura */}
      <div className="md:absolute md:inset-0">
        <div className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
          <img
            className="h-56 w-full object-cover md:absolute md:h-full"
            src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg"
            alt="Nave industrial"
          />
        </div>
      </div>

      {/* Contenido — determina la altura total del componente */}
      <div className="relative pt-12 px-4 sm:pt-16 sm:px-6 md:px-8 md:max-w-7xl md:mx-auto md:grid md:grid-cols-2">
        <div className="md:col-start-2 md:pl-8">
          <div className="text-base max-w-prose mx-auto md:max-w-lg md:ml-auto md:mr-0">
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem]">
              Grupo Nelson
            </h2>
            <h3 className="mt-2 text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] leading-none font-extrabold tracking-tight text-foreground">
              Lorem ipsum dolor
            </h3>
            <p className="mt-8 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Bloque de contenido rico — estilos explícitos sin prose */}
            <div className="mt-5 text-muted-foreground space-y-4 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem]">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
              </p>

              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Adipiscing elit sed do eiusmod tempor</li>
                <li>Incididunt ut labore et dolore magna</li>
              </ul>

              <h3 className="text-foreground text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-bold mt-6">
                Nostrud exercitation ullamco laboris nisi ut aliquip
              </h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur sunt in culpa qui officia.
              </p>
              <div className="pb-12">
                <a href="#">
                  <button className="bg-linear-to-br rounded-sm from-blue-500 to-blue-700 hover:opacity-90 py-4 px-6 text-white">
                    Contáctanos
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

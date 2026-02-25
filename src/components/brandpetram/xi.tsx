// Origen: daasyl2022V2/ContentSplitWithImage
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   prose class reemplazado con estilos explícitos (@tailwindcss/typography no instalado).
//   Imagen local GrupoNelson con h-full para llenar toda la altura del componente.

export default function Xi() {
  return (
    <div id="xi" className="relative bg-white">
      {/* Imagen — posicionada absolutamente para llenar toda la altura */}
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg"
            alt="Nave industrial"
          />
        </div>
      </div>

      {/* Contenido — determina la altura total del componente */}
      <div className="relative pt-12 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Grupo Nelson
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </h3>
            <p className="mt-8 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Bloque de contenido rico — estilos explícitos sin prose */}
            <div className="mt-5 text-muted-foreground space-y-4">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur excepteur sint occaecat.
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Adipiscing elit sed do eiusmod tempor</li>
                <li>Incididunt ut labore et dolore magna</li>
                <li>Aliqua enim ad minim veniam quis</li>
              </ul>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum lorem ipsum dolor.
              </p>
              <h3 className="text-foreground text-xl font-bold mt-6">
                Nostrud exercitation ullamco laboris nisi ut aliquip
              </h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur sunt in culpa qui officia.
              </p>
              <div className="pb-12">
                <a href="#">
                  <button className="bg-linear-to-br from-blue-500 to-blue-700 hover:opacity-90 py-2 px-4 text-white">
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

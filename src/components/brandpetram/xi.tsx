// Origen: daasyl2022V2/ContentSplitWithImage
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   prose class reemplazado con estilos explícitos (@tailwindcss/typography no instalado).
//   Imagen local GrupoNelson con h-full para llenar toda la altura del componente.

export default function Xi() {
  return (
    <div id="xi" className="relative bg-background">
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
        <div className="md:col-start-2 md:pl-8 1728:translate-x-20">
          <div className="px-10 768:px-5 834:px-10 1280:px-0 text-base max-w-prose mx-auto md:max-w-lg md:ml-auto md:mr-0">
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem]">
              Track record
            </h2>
            <h3 className="mt-2 text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] leading-none font-extrabold tracking-tight text-foreground">
              33 corporaciones internacionales en 28 años
            </h3>
            <p className="mt-8 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
              Con Baumex obtienes Dos Project Executives, un Director Administrativo, un Project Manager, superintendentes de campo y crews de ejecución directa — con amplia experiencia constructiva con empresas Fortune 500. Toda la cadena de decisión dentro de la misma empresa.
            </p>

            {/* Bloque de contenido rico — estilos explícitos sin prose */}
            <div className="mt-5 text-muted-foreground space-y-4 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem]">
              <p>
                Un equipo integrado bajo un mismo techo acelera la ejecución, elimina los vacíos de comunicación entre firmas y eleva el control de calidad en cada fase — desde el proyecto ejecutivo hasta la entrega de tu nave industrial o comercial.
              </p>

              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Naves desde 5,000 m² hasta 50,000+ m²</li>
                <li>7 sectores: aeroespacial, médico, electrónica, HVAC, logística, manufactura pesada, alimentos</li>
                <li>Mexicali, Hermosillo, Tecate, San Luis Río Colorado, El Salto (Jalisco)</li>
              </ul>

              <h3 className="text-foreground text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-bold mt-6">
                El historial habla por sí solo
              </h3>
              <p>
                Si tu operación necesita una nave industrial con estándares internacionales en el noroeste de México, hablemos.
              </p>
              <div className="pb-12">
                <a href="#">
                  <button className="bg-linear-to-br rounded-xs from-blue-600 to-blue-700 hover:opacity-90 py-4 px-6 text-white">
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

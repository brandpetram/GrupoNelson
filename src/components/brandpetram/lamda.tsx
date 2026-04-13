export function Lamda({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const text = {
    title: lang === 'en'
      ? '5 industrial parks with available buildings in Mexicali'
      : '5 parques industriales con naves disponibles en Mexicali',
    subtitle: lang === 'en'
      ? 'From cost-effective spaces in El Vigía to Fortune 500 infrastructure in Nelson II. 30 international corporations already operate here.'
      : 'Desde espacios económicos en El Vigía hasta infraestructura Fortune 500 en Nelson II. 30 corporaciones internacionales ya operan aquí.',
    cta: lang === 'en' ? 'Contact Us' : 'Contáctanos',
    ctaHref: lang === 'en' ? '/contact' : '/contacto',
    more: lang === 'en' ? 'See More' : 'Ver más',
    moreHref: lang === 'en' ? '/inventory/available-buildings' : '/inventario/naves-disponibles',
    blackTitle: lang === 'en'
      ? 'Browse available inventory in Mexicali'
      : 'Consulta el inventario disponible en Mexicali',
    blackDesc: lang === 'en'
      ? "5 industrial parks. Buildings from 5,000 ft² to Fortune 500 infrastructure. Move in, install your equipment, and start production. No waiting for design, permits, or construction. 80% of our tenants renew their lease."
      : '5 parques industriales. Naves desde 5,000 ft² hasta infraestructura Fortune 500. Entra, instala tu equipo y arranca producción. Sin esperar diseño, permisos ni construcción. 80% de nuestros clientes renuevan contrato.',
  }

  return (
    <>
      <section className="w-11/12 1200:w-10/12 mx-auto">
        <div className="flex gap-[5rem] 1200:gap-[15rem] md:translate-y-[7rem] 1200:translate-y-[10rem]">
          {/* Columna 1 - Izquierda */}
          <div className="flex-1 flex flex-col gap-16">
            <h2 className="360:text-[2rem] 393:text-[2.1rem] 430:text-[2.2rem] 768:text-[2.6rem] 834:text-[2.6rem] 1024:text-[2.6rem] 1200:text-[2.6rem] 1280:text-[2.85rem] 1366:text-[3rem] 1440:text-[3.2rem] 1536:text-[3.4rem] 1728:text-[3.7rem] 1920:text-[4rem] font-semibold leading-none text-black ">
              {text.title}
            </h2>

            <img
              src="/placeholder.svg"
              alt="Imagen columna izquierda"
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Columna 2 - Derecha */}
          <div className="flex-1 flex flex-col gap-6 translate-y-[10rem]">
            <p className="360:text-[0.95rem] 393:text-[1rem] 430:text-[1.1rem] 768:text-[1.25rem] 834:text-[1.25rem] 1024:text-[1.25rem] 1200:text-[1.25rem] 1280:text-[1.4rem] 1366:text-[1.5rem] 1440:text-[1.6rem] 1536:text-[1.7rem] 1728:text-[1.9rem] 1920:text-[2.1rem] leading-relaxed text-gray-600">
              {text.subtitle}
            </p>

            {/* Botones */}
            <div className="flex gap-4 mb-10">
              <a href={text.ctaHref} className="px-8 py-4 bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 inline-block">
                {text.cta}
              </a>
              <a href={text.moreHref} className="px-8 py-4 border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors inline-block">
                {text.more}
              </a>
            </div>

            <img
              src="/placeholder.svg"
              alt="Imagen columna derecha"
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sección de Título y Párrafo - Full Width */}
      <div className="w-full bg-black mt-0 pt-[20rem] 1200:pt-[24rem] 1366:pt-[30rem] pb-[20rem]">
        <div className=" w-10/12 1366:w-8/12 mx-auto flex flex-col gap-6">
          <h2 className="360:text-[2.3rem] 393:text-[2.4rem] 430:text-[2.5rem] 768:text-[3rem] 834:text-[3.7rem] 1024:text-[4rem] 1200:text-[3.7rem] 1280:text-[3.95rem] 1366:text-[4.2rem] 1440:text-[4.5rem] 1536:text-[4.8rem] 1728:text-[5.2rem] 1920:text-[5.6rem] font-semibold leading-tight text-white">
            {text.blackTitle}
          </h2>

          <p className="360:text-[1.1rem] 393:text-[1.15rem] 430:text-[1.2rem] 768:text-[1.4rem] 834:text-[1.4rem] 1024:text-[1.4rem] 1200:text-[1.4rem] 1280:text-[1.5rem] 1366:text-[1.6rem] 1440:text-[1.7rem] 1536:text-[1.8rem] 1728:text-[2rem] 1920:text-[2.2rem] leading-relaxed text-gray-300 font-light tracking-wider">
            {text.blackDesc}
          </p>

          {/* Botones Inferiores */}
          <div className="flex gap-4 mt-4">
            <a href={text.ctaHref} className="px-8 py-4 bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 inline-block">
              {text.cta}
            </a>
            <a href={text.moreHref} className="px-8 py-4 border border-blue-600 text-white font-medium hover:border-blue-700 transition-colors inline-block">
              {text.more}
            </a>
          </div>


        </div>

      </div>
      {/* Imagen con borde decorativo izquierdo */}
      <div className="relative mt-12 w-1/2 translate-y-[-20rem] ml-auto">
        {/* Borde decorativo esquina superior izquierda */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t border-l border-gray-400 pointer-events-none"></div>

        <img
            src="/placeholder.svg"
            alt="Imagen sección negra"
            className="w-full h-full object-cover p-5 md:aspect-[4/4 1200:aspect-[4/3]"
        />
      </div>
    </>
  )
}

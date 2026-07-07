/**
 * Componente Eta
 * Layout flex: imagen 45% (aspect 9:16) + contenido 55% (h2, p, botón)
 */

const etaText = {
  es: {
    heading: 'Selecciona el parque que se ajusta a tu operación y tu presupuesto.',
    paragraph: 'Parque Industrial El Vigía es el parque pionero de nuestro portafolio. Destaca por ofrecer precios de renta más competitivos en el mercado, lo que lo convierte en una plataforma ideal para incubar, arrancar y consolidar proyectos industriales estratégicos.',
    paragraph2: 'En contraparte, Parque Industrial Nelson II es nuestro desarrollo más moderno y avanzado. Está diseñado especialmente para albergar plantas industriales de gran escala, desarrolladas en su mayoría bajo el modelo BTS.',
    cta: 'Contáctanos',
    ctaHref: '/contacto',
  },
  en: {
    heading: 'Choose the park that fits your operation and your budget.',
    paragraph: 'Parque Industrial El Vigía is the pioneering park of our portfolio. It stands out for offering the most competitive rental rates in the market, which makes it an ideal platform for incubating, launching, and consolidating strategic industrial projects.',
    paragraph2: 'In contrast, Parque Industrial Nelson II is our most modern and advanced development. It is designed specifically to house large-scale industrial plants, developed mostly under the BTS model.',
    cta: 'Contact Us',
    ctaHref: '/contact',
  },
}

export function Eta({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const t = etaText[lang]
  return (
     <div data-component="Eta" data-component-file="src/components/brandpetram/eta.tsx" data-component-props="false" className="w-11/12 mx-auto relative">
      {/* Elemento decorativo - esquina superior derecha */}
      <div className="absolute top-0 right-0 w-1/2 md:w-[25%] h-[50%] border-t border-r border-gray-400 dark:border-gray-600"></div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Imagen izquierda - 45% */}
        <div className="w-[80%] md:w-[45%] mt-10 md:mt-0">
          <div className="aspect-square md:aspect-[1/2] 1200:aspect-[1/1.1]">
            <img
              src="/Seleccionadas/nave-gulfstream-en-parque-nelson-2-54.jpg"
              alt="Nave industrial de Gulfstream en Parque Industrial Nelson II, Mexicali"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contenido derecha - 55% */}
        <div className="w-[55%] flex items-center justify-center">
          <div className="px-1 768:px-[2.8rem] 834:px-[4rem] 1024:px-[6rem] 1200:px-[6rem] 1280:px-[6.8rem] 1366:px-[7rem] 1440:px-[7.5rem] 1536:px-[8rem] 1728:px-[10rem] 1920:px-[11rem]">
            <div className="flex flex-col gap-5">
              <h2 className="text-[1.5rem] 360:text-[1.8rem] 393:text-[2rem] 430:text2.2rem] 768:text-[2rem] 834:text-[2.45rem] 1024:text-[2.8rem] 1200:text-[2.5rem] 1280:text-[2.6rem] 1366:text-[2.8rem] 1440:text-[3rem] 1536:text-[3.3rem] 1728:text-[3.6rem] 1920:text-[4rem] font-semibold leading-tight text-black dark:text-white">
                {t.heading}
              </h2>

              <p className="text-[1rem] 360:text-[1rem] 393:text-[1.2rem] 430:text-[1.3rem] 768:text-[1.15rem] 834:text-[1.2rem] 1024:text-[1.3rem] 1200:text-[1.2rem] 1280:text-[1.3rem] 1366:text-[1.4rem] 1440:text-[1.5rem] 1536:text-[1.7rem] 1728:text-[2rem] 1920:text-[2.3rem] leading-relaxed text-gray-600 dark:text-gray-400">
                {t.paragraph}
              </p>

              <p className="text-[1rem] 360:text-[1rem] 393:text-[1.2rem] 430:text-[1.3rem] 768:text-[1.15rem] 834:text-[1.2rem] 1024:text-[1.3rem] 1200:text-[1.2rem] 1280:text-[1.3rem] 1366:text-[1.4rem] 1440:text-[1.5rem] 1536:text-[1.7rem] 1728:text-[2rem] 1920:text-[2.3rem] leading-relaxed text-gray-600 dark:text-gray-400">
                {t.paragraph2}
              </p>

              <a href={t.ctaHref} className="w-fit px-4 1200:px-9 py-5 mt-5 border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-medium hover:border-gray-500 dark:hover:border-gray-400 transition-colors inline-block">
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

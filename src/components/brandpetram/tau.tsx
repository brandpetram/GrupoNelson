// Origen: daasyl2022V2/MosaicOne
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next,
//   postcss Input import (no tenía uso real). Imágenes locales GrupoNelson.
//   Textos lorem ipsum. Daasyl → Grupo Nelson.

const text = {
  es: {
    cell1Label: 'Servicios',
    cell1Title: <>Diseño e <br className="hidden md:block" /> Ingeniería</>,
    cell1Desc: <>6 departamentos <br /> bajo un solo techo</>,
    cell1Href: '/constructora/diseno-e-ingenieria',
    cell3Label: 'Servicios',
    cell3Title: <>Build-to- <br className="hidden md:block" /> Suit</>,
    cell3Desc: <>Naves diseñadas <br /> a tu medida exacta</>,
    cell3Href: '/constructora/build-to-suit',
    cell5Label: 'Servicios',
    cell5Title: <>Llave en <br className="hidden md:block" /> Mano</>,
    cell5Desc: <>Naves de inventario <br /> listas para operar</>,
    cell5Href: '/constructora/llave-en-mano',
    cell6Label: 'Proyectos',
    cell6Title: <>Portafolio <br className="hidden md:block" /> Completo</>,
    cell6Desc: <>75 proyectos <br /> desde 1997</>,
    cell6Href: '/constructora/portafolio',
    imgAlt: 'Nave industrial',
    parkAlt: 'Parque industrial',
  },
  en: {
    cell1Label: 'Services',
    cell1Title: <>Design &amp; <br className="hidden md:block" /> Engineering</>,
    cell1Desc: <>6 departments <br /> under one roof</>,
    cell1Href: '/construction/engineering-design',
    cell3Label: 'Services',
    cell3Title: <>Build-to- <br className="hidden md:block" /> Suit</>,
    cell3Desc: <>Buildings designed <br /> to your exact specs</>,
    cell3Href: '/construction/build-to-suit',
    cell5Label: 'Services',
    cell5Title: <>Turnkey <br className="hidden md:block" /> Solutions</>,
    cell5Desc: <>Inventory buildings <br /> ready to operate</>,
    cell5Href: '/construction/turnkey',
    cell6Label: 'Projects',
    cell6Title: <>Full <br className="hidden md:block" /> Portfolio</>,
    cell6Desc: <>75 projects <br /> since 1997</>,
    cell6Href: '/construction/portfolio',
    imgAlt: 'Industrial building in Mexicali',
    parkAlt: 'Industrial park in Mexicali',
  },
}

export default function Tau({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const t = text[lang]

  return (
    <div data-component="Tau" data-component-file="src/components/brandpetram/tau.tsx" data-component-props="false" className="px-10 md:px-0  md:my-20 md:w-11/12 mx-auto overflow-hidden">
      {/* Fila 1 */}
      <div className="flex flex-col lg:flex-row">
        {/* Bloque izquierdo: imagen grande + 2 pequeñas */}
        <div className="lg:w-1/2 bg-gray-200 p-3 md:p-16">
          <div className="lg:w-3/5 xl:w-1/2">
            <img
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-7.jpeg"
              alt={t.imgAlt}
              className="w-full h-auto object-cover aspect-square"
            />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <img
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg"
                alt={t.imgAlt}
                className="w-full h-auto object-cover aspect-square"
              />
              <img
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-9.jpeg"
                alt={t.imgAlt}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Bloque derecho: grid 2×2 con texto e imagen */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2">
          {/* Celda 1: Diseño e Ingeniería */}
          <a href={t.cell1Href} className="aspect-square relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] text-foreground font-light leading-none">
                {t.cell1Label}
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                {t.cell1Title}
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                {t.cell1Desc}
              </p>
            </div>
          </a>

          {/* Celda 2: imagen + triángulo azul */}
          <div className="aspect-square bg-linear-to-br from-blue-600 to-blue-700 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-[15%] h-full flex items-start justify-start pt-[19%] -translate-x-1">
              <svg className="w-10 h-auto text-background" viewBox="0 0 78 163">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon
                    fill="currentColor"
                    transform="translate(39,81.5) scale(-1,1) rotate(-90) translate(-39,-81.5)"
                    points="39 43 120 120 -42 120"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute right-0 top-[7.5%] w-[85%] aspect-square bg-background transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-90 overflow-hidden">
              <div className="p-8 md:p-10 xl:p-12">
                <img
                  src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-10.jpeg"
                  alt={t.imgAlt}
                  className="w-full aspect-square object-cover"
                />
                <p className="text-right text-sm 768:text-base 1024:text-base 1200:text-[0.85rem] 1440:text-[1rem] 1920:text-[1.25rem] mt-1 leading-none">
                  Baumex
                </p>
              </div>
            </div>
          </div>

          {/* Celda 3: Build-to-Suit */}
          <a href={t.cell3Href} className="aspect-square relative bg-linear-to-br from-blue-600 to-blue-700 text-white group">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-opacity group-hover:opacity-80">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] font-light leading-none">
                {t.cell3Label}
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                {t.cell3Title}
              </h1>
              <p className="hidden md:block text-center mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                {t.cell3Desc}
              </p>
            </div>
          </a>

          {/* Celda 4: imagen */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-11.jpeg"
              alt={t.imgAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Fila 2 */}
      <div className="flex flex-col lg:flex-row">
        {/* Bloque izquierdo: grid 2×2 */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2">
          {/* Imagen */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/parque-industrial-nelson-1-en-mexicali.jpeg"
              alt={t.parkAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Llave en Mano / Turnkey */}
          <a href={t.cell5Href} className="aspect-square relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] text-foreground font-light leading-none">
                {t.cell5Label}
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                {t.cell5Title}
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                {t.cell5Desc}
              </p>
            </div>
          </a>

          {/* Portafolio */}
          <a href={t.cell6Href} className="aspect-square relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] text-foreground font-light leading-none">
                {t.cell6Label}
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                {t.cell6Title}
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                {t.cell6Desc}
              </p>
            </div>
          </a>

          {/* Imagen */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/parque-industrial-el-vigia-2-en-mexicali.jpeg"
              alt={t.parkAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bloque derecho: imagen grande */}
        <div className="lg:w-1/2 bg-gray-200 p-3 md:p-16">
          <img
            src="/parque-industrial-nelson-2-en-mexicali.jpeg"
            alt={t.parkAlt}
            className="w-full h-auto object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  )
}

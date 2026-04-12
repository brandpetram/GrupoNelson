// Origen: daasyl2022V2/BigWorld
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   7xl → omitido (no existe en GrupoNelson). Imagen local GrupoNelson.
//   Textos lorem ipsum. Botones de contacto hardcodeados.
//   Imagen: absolute right-0 top-0 — sangra por la derecha como el globo original.
//   Para mover la imagen: ajustar translate-x-* o el width.

const text = {
  es: {
    imgAlt: 'Parque industrial',
    mainTitle: 'Construcción ordenada. Reportes semanales. Control total.',
    subtitle: <>Weekly <br className="md:hidden" />Reports</>,
    p1: 'Cada semana recibes un reporte con fotografías, porcentaje de avance, proyecciones de entrega y minutas firmadas con acuerdos y responsables.',
    p2: 'Ruta crítica de 18 hitos monitoreados. 11 puntos de control de calidad. Software ERP de construcción para visibilidad en tiempo real. Precio cerrado desde proyecto ejecutivo.',
    docTitle: 'Documentación:',
    doc1: 'Reportes semanales con fotografías',
    doc2: 'Minutas firmadas con responsables',
    doc3: 'Control de submittals y long lead items',
    svc1Title: 'Construcción Build-to-Suit',
    svc1Desc: 'Nave diseñada y construida a la medida exacta de tu operación. Precio cerrado desde proyecto ejecutivo.',
    svc1Href: '/constructora/build-to-suit',
    svc1Btn: 'Ver más',
    svc2Title: 'Expansión de Naves',
    svc2Desc: 'Ampliación de instalaciones existentes sin detener tu operación. Coordinación directa con tu equipo de planta.',
    svc2Href: '/contacto',
    svc2Btn: 'Ver más',
    svc3Title: 'Tenant Improvement',
    svc3Desc: 'Adecuación de nave existente a los requerimientos específicos de tu operación industrial.',
    svc3Href: '/contacto',
    svc3Btn: 'Ver más',
  },
  en: {
    imgAlt: 'Industrial park in Mexicali',
    mainTitle: 'Organized Construction. Weekly Reports. Full Control.',
    subtitle: <>Weekly <br className="md:hidden" />Reports</>,
    p1: 'Every week you receive a report with photographs, progress percentage, delivery projections, and signed meeting minutes with agreements and responsible parties.',
    p2: 'Critical path with 18 monitored milestones. 11 quality checkpoints. Construction ERP software for real-time visibility. Fixed pricing from the executive design phase.',
    docTitle: 'Documentation:',
    doc1: 'Weekly reports with photographs',
    doc2: 'Signed meeting minutes with responsible parties',
    doc3: 'Submittal and long lead item tracking',
    svc1Title: 'Build-to-Suit Construction',
    svc1Desc: 'Building designed and constructed to the exact specifications of your operation. Fixed pricing from the executive design phase.',
    svc1Href: '/construction/build-to-suit',
    svc1Btn: 'Details',
    svc2Title: 'Building Expansions',
    svc2Desc: 'Expansion of existing facilities without halting your operations. Direct coordination with your plant team.',
    svc2Href: '/contact',
    svc2Btn: 'Details',
    svc3Title: 'Tenant Improvement',
    svc3Desc: 'Adaptation of an existing building to the specific requirements of your industrial operation.',
    svc3Href: '/contact',
    svc3Btn: 'Details',
  },
}

export default function Phi({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const t = text[lang]

  return (
    <div data-component="Phi" data-component-file="src/components/brandpetram/phi.tsx" data-component-props="false" className="relative z-10 mt-[10rem]">
      {/* Imagen circular */}
      <div className="mx-10 1200:mx-0 1200:absolute right-0 top-0 z-50  1200:-translate-y-[8rem] 1200:translate-x-[44%] 1280:translate-x-[30%] 1728:translate-x-[40%] 1920:translate-x-[27%] 1200:w-[38rem] 1280:w-[42rem]  1366:w-[47rem] 1440:w-[52rem] 1536:w-[52rem] 1728:w-[60rem] 1920:w-[63rem] aspect-square rounded-full overflow-hidden">
        <img
          src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-400.jpg"
          alt={t.imgAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
      </div>

      {/* Texto */}
      <div className="px-5 md:px-10 1024:px-0 mt-20 1200:mt-0 relative z-10 lg:ml-20 3xl:ml-40 lg:pt-16 1200:max-w-3xl 1536:max-w-4xl pb-16 1728:translate-x-[10%]">
        <h1 className="text-foreground w-10/12 md:w-full mx-5 lg:mx-0 text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-[4rem] 834:text-[4rem] 1024:text-[5rem] 1200:text-[2.5rem] 1280:text-[3rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4.5rem] 1920:text-[5rem] leading-none font-bold tracking-tighter">
          {t.mainTitle}
        </h1>

        <div className="py-16 px-0 lg:py-16 lg:px-0 768:grid 768:grid-cols-2 834:grid-cols-2 1024:grid-cols-[16rem_1fr] 1200:grid-cols-[17rem_1fr] 1366:grid-cols-[20rem_1fr] 1536:grid-cols-[25rem_1fr] 768:gap-x-8">
          {/* Subtítulo */}
          <div className="mx-5 768:mx-0 text-foreground tracking-tight">
            <h2 className="-mt-10 text-[1.2rem] 360:text-[1.2rem] 393:text-[1.4rem] 430:text-[1.2rem] 768:text-[1.05rem] 834:text-[1.05rem] 1024:text-[1.05rem] 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[1rem] 1728:text-[1rem] 1920:text-[1.1rem] font-semibold text-muted-foreground uppercase leading-none">
              {t.subtitle}
            </h2>
            <p className="w-10/12 md:w-2/3 lg:w-full mt-5 text-lg 360:text-lg 393:text-[1.2rem] 430:text-[1.3rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] leading-7 font-semibold">
              {t.p1}
            </p>
            <p className="w-full md:w-2/3 lg:w-full mt-7 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-7 text-muted-foreground">
              {t.p2}
            </p>
            <h4 className="mt-10 font-bold text-lg 360:text-lg 393:text-[1.2rem] 430:text-[1.3rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">{t.docTitle}</h4>
            <ul className="mt-5 space-y-3 text-muted-foreground text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem]">
              <li>{t.doc1}</li>
              <li>{t.doc2}</li>
              <li>{t.doc3}</li>
            </ul>
          </div>

          {/* Lista de servicios con botones */}
          <div className="mt-12 768:mt-0 mx-10 768:mx-0 tracking-tight  1024:w-11/12 1280:w-10/12 1728:w-full">
            <dl className="space-y-0">
              {/* Servicio 1 */}
              <div className="space-y-2 pb-6">
                <dt className="text-[2.25rem] 360:text-[2.25rem] 393:text-[2.4rem] 430:text-[2.6rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[.9rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1.1rem] 1728:text-[1.2rem] 1920:text-[1.5rem] font-medium text-foreground leading-none">
                  {t.svc1Title}
                </dt>
                <dd className="flex flex-col gap-3 768:flex-row 768:gap-0">
                  <span className="flex-1 768:mr-6 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1rem] 1728:text-[1.1rem] 1920:text-[1.3rem] leading-6 text-muted-foreground">
                    {t.svc1Desc}
                  </span>
                  <div className="flex-none">
                    <a href={t.svc1Href}>
                      <button className="w-28  bg-blue-600  hover:opacity-90 p-3 text-white text-lg rounded-xs">
                        {t.svc1Btn}
                      </button>
                    </a>
                  </div>
                </dd>
              </div>

              {/* Servicio 2 */}
              <div className="space-y-2 border-b border-t py-6">
                <dt className="text-[2.25rem] 360:text-[2.25rem] 393:text-[2.4rem] 430:text-[2.6rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[.9rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1.1rem] 1728:text-[1.2rem] 1920:text-[1.5rem] font-medium text-foreground leading-none">
                  {t.svc2Title}
                </dt>
                <dd className="flex flex-col gap-3 768:flex-row 768:gap-0">
                  <span className="flex-1 768:mr-6 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1rem] 1728:text-[1.1rem] 1920:text-[1.3rem] leading-6 text-muted-foreground">
                    {t.svc2Desc}
                  </span>
                  <div className="flex-none">
                    <a href={t.svc2Href}>
                      <button className="w-28  bg-blue-600  hover:opacity-90 p-3 text-white text-lg rounded-xs">
                        {t.svc2Btn}
                      </button>
                    </a>
                  </div>
                </dd>
              </div>

              {/* Servicio 3 */}
              <div className="space-y-2 pt-6">
                <dt className="text-[2.25rem] 360:text-[2.25rem] 393:text-[2.4rem] 430:text-[2.6rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[.9rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1.1rem] 1728:text-[1.2rem] 1920:text-[1.5rem] font-medium text-foreground leading-none">
                  {t.svc3Title}
                </dt>
                <dd className="flex flex-col gap-3 768:flex-row 768:gap-0">
                  <span className="flex-1 768:mr-6 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1rem] 1728:text-[1.1rem] 1920:text-[1.3rem] leading-6 text-muted-foreground">
                    {t.svc3Desc}
                  </span>
                  <div className="flex-none">
                    <a href={t.svc3Href}>
                      <button className="w-28  bg-blue-600  hover:opacity-90 p-3 text-white text-lg rounded-xs">
                        {t.svc3Btn}
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

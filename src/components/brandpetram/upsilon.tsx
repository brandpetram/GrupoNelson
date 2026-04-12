// Origen: daasyl2022V2/FullHeroProblems
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   5xl/7xl → omitidos. text-10xl/text-16xl/text-22xl → escalas estándar.
//   Hardcodeados 11 pills de texto. Imagen local GrupoNelson.

const text = {
  es: {
    pills: [
      "LEED Gold", "FM Global", "BRB antisísmico", "Cuartos limpios",
      "20 MW eléctricos", "NFPA contraincendio", "Zona sísmica 4",
      "Puentes industriales", "Túneles de viento", "Paneles solares",
      "+50,000 m²", "Temperatura controlada", "Auditorías Fortune 500",
    ],
    titleStart: '¿Necesitas una constructora con experiencia en:',
    titleEnd: <>No te preocupes.{" "}<span className="ml-3">Estás en buenas manos.</span></>,
    imgAlt: 'Nave industrial',
    bottomText: <>Con{" "}<span className="font-black tracking-tight text-blue-600">Baumex</span>{" "}ya no tienes que preocuparte por{" "}<span className="line-through"><br className="md:hidden" />coordinar múltiples contratistas</span>{" "}<br className="md:hidden" /><span className="text-foreground font-black">un solo responsable.</span></>,
  },
  en: {
    pills: [
      "LEED Gold", "FM Global", "BRB Anti-Seismic", "Cleanrooms",
      "20 MW Electrical", "NFPA Fire Protection", "Seismic Zone 4",
      "Industrial Bridges", "Wind Tunnels", "Solar Panels",
      "+540,000 ft²", "Temperature Controlled", "Fortune 500 Audits",
    ],
    titleStart: 'Need a construction firm with experience in:',
    titleEnd: <>Don&apos;t worry.{" "}<span className="ml-3">You&apos;re in good hands.</span></>,
    imgAlt: 'Industrial building in Mexicali',
    bottomText: <>With{" "}<span className="font-black tracking-tight text-blue-600">Baumex</span>{" "}you no longer have to worry about{" "}<span className="line-through"><br className="md:hidden" />coordinating multiple contractors</span>{" "}<br className="md:hidden" /><span className="text-foreground font-black">one single point of accountability.</span></>,
  },
}

export default function Upsilon({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const t = text[lang]

  return (
    <div data-component="Upsilon" data-component-file="src/components/brandpetram/upsilon.tsx" data-component-props="false" className="mt-0 w-11/12 mx-auto">
      <div className="mb-10">
        {/* Título con pills */}
        <div className="-mt-1 flex flex-wrap items-center gap-3 my-10">
          <span className="text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] font-extrabold text-foreground tracking-tighter leading-none">
            {t.titleStart}
          </span>
          {t.pills.map((word) => (
            <span
              key={word}
              className="my-auto bg-blue-600 text-white px-4 py-2 flex-none text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-light"
            >
              {word}
            </span>
          ))}
          <span className="w-full text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] font-extrabold text-foreground tracking-tighter leading-none">
            {t.titleEnd}
          </span>
        </div>
      </div>

      {/* Imagen full-width */}
      <img
        src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-290.jpg"
        alt={t.imgAlt}
        className="w-full h-auto object-cover"
        style={{ aspectRatio: "15/9" }}
      />

      {/* Texto inferior con tachado */}
      <h3 className="mt-10 text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] font-light text-foreground">
        {t.bottomText}
      </h3>
    </div>
  )
}

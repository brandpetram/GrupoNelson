// Origen: daasyl2022V2/SixSquares
// Adaptaciones: eliminado next-i18next. style jsx clip-path → inline style.
//   7xl → 2560: breakpoint. h-7xl/h-6xl → h-auto con padding.
//   text-44xl (decorativo) → text-[35vw]. Textos lorem ipsum.

const text = {
  es: {
    quote: <>Cuando necesitamos expandir nuestra operación en Mexicali,{" "}<span className="font-bold">no tuvimos que buscar otra constructora</span>.{" "}Baumex ya conocía nuestros estándares y nuestros tiempos.</>,
    quoteAuthor: 'Director de Planta — Empresa Fortune 500 en Mexicali',
    item1Title: 'Arquitectura Industrial',
    item1Text: 'Layout de planta, oficinas corporativas, fachadas y distribución de espacios optimizada para tus procesos de manufactura y logística.',
    item2Title: 'Ingeniería Civil',
    item2Text: 'Mecánica de suelos, terracerías y cimentaciones profundas hasta 18 metros con pilas de concreto armado en suelo colapsable y zona sísmica 4.',
    item3Title: 'Ingeniería Estructural',
    item3Text: 'Estructura metálica, sistemas antisísmicos BRB, cálculo de cargas y diseño de claros libres para naves de manufactura y almacenamiento.',
    item4Title: 'Ingeniería Eléctrica',
    item4Text: 'Subestaciones, capacidad instalada hasta 20 MW, paneles solares, iluminación industrial y sistemas de distribución de alta y baja tensión.',
    item5Title: 'Ingeniería Mecánica',
    item5Text: 'HVAC, fire protection certificado FM Global, plomería industrial, ductos especializados, cuartos limpios y sistemas de temperatura controlada.',
    item6Title: 'Estimación y Costos',
    item6Text: 'Presupuestos detallados, control de costos durante toda la ejecución de obra y precio cerrado desde el proyecto ejecutivo sin sorpresas.',
  },
  en: {
    quote: <>When we needed to expand our operations in Mexicali,{" "}<span className="font-bold">we didn&apos;t have to look for another contractor</span>.{" "}Baumex already knew our standards and our timelines.</>,
    quoteAuthor: 'Plant Director — Fortune 500 Company in Mexicali',
    item1Title: 'Industrial Architecture',
    item1Text: 'Plant layout, corporate offices, facades, and space distribution optimized for your manufacturing and logistics processes.',
    item2Title: 'Civil Engineering',
    item2Text: 'Soil mechanics, earthworks, and deep foundations up to 18 meters with reinforced concrete piles in collapsible soil and seismic zone 4.',
    item3Title: 'Structural Engineering',
    item3Text: 'Steel structure, BRB anti-seismic systems, load calculations, and clear-span design for manufacturing and warehouse buildings.',
    item4Title: 'Electrical Engineering',
    item4Text: 'Substations, installed capacity up to 20 MW, solar panels, industrial lighting, and high- and low-voltage distribution systems.',
    item5Title: 'Mechanical Engineering',
    item5Text: 'HVAC, FM Global certified fire protection, industrial plumbing, specialized ductwork, cleanrooms, and temperature-controlled systems.',
    item6Title: 'Estimation & Cost Control',
    item6Text: 'Detailed budgets, cost control throughout construction, and fixed pricing from the executive design phase — no surprises.',
  },
}

export default function Rho({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const t = text[lang]

  return (
    <div data-component="Rho" data-component-file="src/components/brandpetram/rho.tsx" data-component-props="false"
      id="rho"
      className="mt-32 overflow-hidden relative z-10 [clip-path:polygon(0_0%,100%_3%,100%_100%,0_100%)] md:[clip-path:polygon(0_0%,100%_10%,100%_100%,0_100%)]"
    >
      <section className="bg-linear-to-br from-blue-600 to-blue-700">
        {/* Testimonio / cita */}
        <div className="container text-gray-100 max-w-2xl mx-auto px-20 md:px-0 pt-156">
          <div className={'-translate-y-80'}><h1
              className=" text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] leading-relaxed tracking-wide font-light">
            {t.quote}
          </h1>
            <h2 className="mt-10 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-bold">
              {t.quoteAuthor}
            </h2></div>
        </div>

        {/* Texto decorativo de fondo */}
        <h1 className="hidden md:block w-full text-[25vw] text-white font-extrabold tracking-tighter opacity-20 md:-mt-48 leading-none">
          BAUMEX
        </h1>

        <h1 className="md:hidden w-full text-[25vw] text-center text-white font-extrabold tracking-tighter opacity-20 -mt-10 leading-none">
          BAUMEX
        </h1>

        {/* Grid de 6 celdas — flat grid: md=2 cols, 1024+=3 cols */}
        <div
          id="porque"
          className="grid grid-cols-1 md:grid-cols-2 1200:grid-cols-3 md:w-full lg:w-10/12 2560:w-1/2 mx-auto pb-96 text-gray-50 text-center leading-relaxed tracking-wide"
        >
          {/* Item 1 */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b md:border-r border-blue-400">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">{t.item1Title}</h1>
            {t.item1Text}
          </div>
          {/* Item 2 */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b border-blue-400 1200:border-r">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">{t.item2Title}</h1>
            {t.item2Text}
          </div>
          {/* Item 3 */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b md:border-r 1200:border-r-0 border-blue-400">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">{t.item3Title}</h1>
            {t.item3Text}
          </div>
          {/* Item 4 */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b 1200:border-b-0 1200:border-r border-blue-400">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">{t.item4Title}</h1>
            {t.item4Text}
          </div>
          {/* Item 5 */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b md:border-b-0 md:border-r border-blue-400">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">{t.item5Title}</h1>
            {t.item5Text}
          </div>
          {/* Item 6 */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">{t.item6Title}</h1>
            {t.item6Text}
          </div>
        </div>
      </section>
    </div>
  )
}

// Origen: daasyl2022V2/SixSquares
// Adaptaciones: eliminado next-i18next. style jsx clip-path → inline style.
//   7xl → 2560: breakpoint. h-7xl/h-6xl → h-auto con padding.
//   text-44xl (decorativo) → text-[35vw]. Textos lorem ipsum.

export default function Rho() {
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
            Cuando necesitamos expandir nuestra operación en Mexicali,{" "}
            <span className="font-bold">no tuvimos que buscar otra constructora</span>.{" "}
            Baumex ya conocía nuestros estándares y nuestros tiempos.
          </h1>
            <h2 className="mt-10 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-bold">
              Director de Planta — Empresa Fortune 500 en Mexicali
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
          {/* Item 1 — md: fila 1 izq | 1024: fila 1 izq */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b md:border-r border-blue-400">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Arquitectura Industrial</h1>
            Layout de planta, oficinas corporativas, fachadas y distribución de espacios optimizada para tus procesos de manufactura y logística.
          </div>
          {/* Item 2 — md: fila 1 der | 1024: fila 1 centro */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b border-blue-400 1200:border-r">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Ingeniería Civil</h1>
            Mecánica de suelos, terracerías y cimentaciones profundas hasta 18 metros con pilas de concreto armado en suelo colapsable y zona sísmica 4.
          </div>
          {/* Item 3 — md: fila 2 izq | 1024: fila 1 der (sin border-r) */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b md:border-r 1200:border-r-0 border-blue-400">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Ingeniería Estructural</h1>
            Estructura metálica, sistemas antisísmicos BRB, cálculo de cargas y diseño de claros libres para naves de manufactura y almacenamiento.
          </div>
          {/* Item 4 — md: fila 2 der | 1024: fila 2 izq (sin border-b) */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b 1200:border-b-0 1200:border-r border-blue-400">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Ingeniería Eléctrica</h1>
            Subestaciones, capacidad instalada hasta 20 MW, paneles solares, iluminación industrial y sistemas de distribución de alta y baja tensión.
          </div>
          {/* Item 5 — md: fila 3 izq (sin border-b) | 1024: fila 2 centro (sin border-b) */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance border-b md:border-b-0 md:border-r border-blue-400">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Ingeniería Mecánica</h1>
            HVAC, fire protection certificado FM Global, plomería industrial, ductos especializados, cuartos limpios y sistemas de temperatura controlada.
          </div>
          {/* Item 6 — md: fila 3 der | 1024: fila 2 der (sin bordes) */}
          <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance">
            <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Estimación y Costos</h1>
            Presupuestos detallados, control de costos durante toda la ejecución de obra y precio cerrado desde el proyecto ejecutivo sin sorpresas.
          </div>
        </div>
      </section>
    </div>
  )
}

// Origen: daasyl2022V2/Advantages
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   5xl/7xl → omitidos (no existen en GrupoNelson). Textos lorem ipsum.
//   Dos versiones: desktop (hidden md:block) y mobile (md:hidden).

export default function Pi() {
  return (
    <div>
      {/* Encabezado */}
      <div className="px-10 1200:px-0 lg:max-w-5xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto">
        <h1 className="text-foreground px-7 font-light text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] mb-20 md:mb-32 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="font-bold text-blue-600 uppercase">adipiscing elit</span>{" "}
          sed do eiusmod temporx Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis doloribus modi molestiae non qui vel! Alias architecto consectetur doloribus fuga illum.
        </h1>
        <div className="my-20 mx-10" />
      </div>

      {/* Desktop: imagen con texto superpuesto */}
      <div className="w-9/12 hidden md:block lg:max-w-4xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto relative">
        <div className="flex flex-col text-foreground bg-white/40 backdrop-blur-sm pt-8 pb-16 px-5 overflow-hidden w-[11rem] md:w-[13rem] lg:w-[13rem] xl:w-[14rem] 1366:w-[15rem] 1440:w-[16rem] 1536:w-[18rem] 1728:w-[22rem] 1920:w-[26rem] aspect-[4/5] z-10 absolute left-0 -translate-x-1/4   md:top-1/2 1200:top-1/3 -translate-y-1/2 rounded-xs">
          {/* Label arriba */}
          <h3 className="text-xs 768:text-sm 1728:text-base uppercase font-semibold tracking-wider text-foreground">
            Lorem ipsum dolor
          </h3>
          {/* Texto grande — empujado hacia abajo pero no pegado al fondo */}
          <h2 className="mt-auto text-foreground text-xl 768:text-[1.2rem] 1024:text-[1.3rem] 1200:text-[1.3rem] 1280:text-[1.4rem] 1366:text-[1.5rem] 1440:text-[1.5rem] 1536:text-[2.3rem] 1728:text-[2.8rem] 1920:text-[3.2rem] font-extrabold leading-tight tracking-tight text-balance">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
        </div>
        <img
          src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-2.jpeg"
          alt="Nave industrial"
          className="w-full h-auto object-cover rounded-xs aspect-[4/4] 1200:aspect-[3/2]"

        />
      </div>

      {/* Mobile: imagen con texto superpuesto */}
      <div className="md:hidden relative pt-10">
        <div className="ml-3 -mt-10 p-0 text-foreground absolute mt-0 bg-white bg-opacity-50 w-40">
          <h3 className="text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] uppercase font-extrabold">Lorem ipsum</h3>
          <h2 className="mt-5 pl-3 pb-5 text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-bold leading-none">
           Lorem  ipsums dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
        <img
          src="/parque-industrial-el-vigia-2-en-mexicali.jpeg"
          alt="Nave industrial"
          className="mx-auto mt-10"
          style={{ aspectRatio: "1/2.7", objectFit: "cover" }}
        />
      </div>

      {/* Patrón de puntos decorativo */}
      <svg
        className="hidden lg:block absolute text-blue-700 right-full transform translate-x-1/2 translate-y-20 z-20 opacity-40"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="pi-dot-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" className="text-gray-300" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#pi-dot-pattern)" />
      </svg>
    </div>
  )
}

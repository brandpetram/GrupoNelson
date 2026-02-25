// Origen: daasyl2022V2/Advantages
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   5xl/7xl → omitidos (no existen en GrupoNelson). Textos lorem ipsum.
//   Dos versiones: desktop (hidden md:block) y mobile (md:hidden).

export default function Pi() {
  return (
    <div>
      {/* Encabezado */}
      <div className="lg:max-w-5xl xl:max-w-6xl 4xl:w-10/12 mx-auto">
        <h1 className="text-foreground px-7 font-light text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] mb-20 md:mb-32 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="font-bold text-blue-600 uppercase">adipiscing elit</span>{" "}
          sed do eiusmod tempor
        </h1>
        <div className="my-20 mx-10" />
      </div>

      {/* Desktop: imagen con texto superpuesto */}
      <div className="hidden md:block lg:max-w-4xl xl:max-w-6xl 4xl:w-10/12 mx-auto relative">
        <div className="text-foreground bg-white py-10 bg-opacity-50 xl:w-3/12 z-10 absolute md:ml-10 lg:ml-0 md:mt-32 lg:mt-32 rounded-md">
          <h3 className="text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] uppercase font-black hidden lg:block">
            Lorem ipsum dolor
          </h3>
          <h2 className="text-foreground mt-5 lg:mt-8 xl:mt-12 text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-medium md:font-extrabold leading-none p-5">
            Sit amet{" "}
            <span className="text-blue-600 uppercase">consectetur</span>{" "}
            adipiscing
          </h2>
        </div>
        <img
          src="/parque-industrial-nelson-2-en-mexicali.jpeg"
          alt="Nave industrial"
          className="w-full h-auto object-cover"
          style={{ aspectRatio: "2/1.5" }}
        />
      </div>

      {/* Mobile: imagen con texto superpuesto */}
      <div className="md:hidden relative pt-10">
        <div className="ml-3 -mt-10 p-0 text-foreground absolute mt-0 bg-white bg-opacity-50 w-40">
          <h3 className="text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] uppercase font-extrabold">Lorem ipsum</h3>
          <h2 className="mt-5 pl-3 pb-5 text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-bold leading-none">
            Dolor sit{" "}
            <span className="text-blue-600 uppercase">amet</span>{" "}
            consectetur
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

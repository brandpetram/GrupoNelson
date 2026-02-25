// Origen: daasyl2022V2/Circles
// Adaptaciones: eliminado next-i18next. /one.svg, /two.svg, /three.svg (círculos con número)
//   reproducidos con divs Tailwind. Textos lorem ipsum.
//   text-10xl → text-8xl (Tailwind estándar).

export default function Omicron() {
  return (
    <div className="pb-32 mt-32 w-10/12 mx-auto text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground overflow-hidden">
      {/* Fila 1 */}
      <div className="grid grid-cols-12 gap-5 lg:gap-20">
        <div className="col-span-3 md:col-span-4">
          <svg viewBox="0 0 100 100" className="w-full">
            <circle cx="50" cy="50" r="50" fill="#1d4ed8" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle"
              fill="white" fontWeight="bold" fontSize="60">1</text>
          </svg>
        </div>
        <div className="col-span-7 lg:col-span-8 my-auto md:leading-relaxed">
          <h1 className="text-foreground mb-5 font-bold text-3xl 360:text-[2rem] 393:text-[2.2rem] 430:text-[2.5rem] 768:text-[2.8rem] 834:text-[2.8rem] 1024:text-[4rem] 1200:text-[2.8rem] 1280:text-[3.2rem] 1366:text-[3.5rem] 1440:text-[3.8rem] 1536:text-[4.2rem] 1728:text-[5rem] 1920:text-[6rem] leading-none">
            Lorem ipsum
          </h1>
          <p className="1200:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="hidden 1200:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at autem corporis delectus error excepturi facere hic inventore iusto,
          </p>
        </div>
      </div>

      {/* Fila 2 — overlap con fila anterior */}
      <div className="grid grid-cols-12 gap-5 lg:gap-20 1024:-my-10">
        <div className="col-span-3 md:col-span-4 opacity-80">
          <svg viewBox="0 0 100 100" className="w-full">
            <circle cx="50" cy="50" r="50" fill="#2563eb" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle"
              fill="white" fontWeight="bold" fontSize="60">2</text>
          </svg>
        </div>
        <div className="col-span-7 lg:col-span-8 my-auto md:leading-relaxed">
          <h1 className="text-foreground mb-5 font-bold text-3xl 360:text-[2rem] 393:text-[2.2rem] 430:text-[2.5rem] 768:text-[2.8rem] 834:text-[2.8rem] 1024:text-[4rem] 1200:text-[2.8rem] 1280:text-[3.2rem] 1366:text-[3.5rem] 1440:text-[3.8rem] 1536:text-[4.2rem] 1728:text-[5rem] 1920:text-[6rem] leading-none">
            Dolor sit amet
          </h1>
          <p className="1200:hidden">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="hidden 1200:block">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at autem corporis delectus error excepturi facere hic inventore iusto,
          </p>
        </div>
      </div>

      {/* Fila 3 — overlap con fila anterior */}
      <div className="grid grid-cols-12 gap-5 lg:gap-20 ">
        <div className="col-span-3 md:col-span-4">
          <svg viewBox="0 0 100 100" className="w-full">
            <circle cx="50" cy="50" r="50" fill="#3b82f6" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle"
              fill="white" fontWeight="bold" fontSize="60">3</text>
          </svg>
        </div>
        <div className="col-span-7 lg:col-span-8 my-auto md:leading-relaxed">
          <h1 className="text-foreground mb-5 font-bold text-3xl 360:text-[2rem] 393:text-[2.2rem] 430:text-[2.5rem] 768:text-[2.8rem] 834:text-[2.8rem] 1024:text-[4rem] 1200:text-[2.8rem] 1280:text-[3.2rem] 1366:text-[3.5rem] 1440:text-[3.8rem] 1536:text-[4.2rem] 1728:text-[5rem] 1920:text-[6rem] leading-none">
            Consectetur
          </h1>
          <p className="1200:hidden">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
          <p className="hidden 1200:block">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at autem corporis delectus error excepturi facere hic inventore iusto,
          </p>
        </div>
      </div>
    </div>
  )
}

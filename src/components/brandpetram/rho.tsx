// Origen: daasyl2022V2/SixSquares
// Adaptaciones: eliminado next-i18next. style jsx clip-path → inline style.
//   7xl → 2560: breakpoint. h-7xl/h-6xl → h-auto con padding.
//   text-44xl (decorativo) → text-[35vw]. Textos lorem ipsum.

export default function Rho() {
  return (
    <div
      id="rho"
      className="overflow-hidden"
      style={{
        position: "relative",
        WebkitClipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0 100%)",
        clipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0 100%)",
        zIndex: 10,
      }}
    >
      <section className="bg-linear-to-br from-blue-500 to-blue-700">
        {/* Testimonio / cita */}
        <div className="container text-gray-100 max-w-2xl mx-auto px-20 md:px-0 pt-156">
          <div className={'-translate-y-80'}><h1
              className=" text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] leading-relaxed tracking-wide font-light">
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-bold">consectetur adipiscing</span>,{" "}
            sed do eiusmod tempor
          </h1>
            <h2 className="mt-10 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-bold">
              Lorem Ipsum — Cargo Lorem Ipsum
            </h2></div>
        </div>

        {/* Texto decorativo de fondo */}
        <h1 className="text-[7rem] 360:text-[7rem] 393:text-[8rem] 430:text-[9rem] 768:text-[15rem] 834:text-[17rem] 1024:text-[20rem] 1200:text-[24rem] 1280:text-[26rem] 1366:text-[27rem] 1440:text-[29rem] 1536:text-[31rem] 1728:text-[35rem] 1920:text-[39rem] text-white font-extrabold tracking-tighter overflow-hidden opacity-20 md:-mt-48 leading-none">
          Nelson
        </h1>

        {/* Grid de 6 celdas */}
        <div
          id="porque"
          className="flex flex-col md:divide-y md:w-full lg:w-10/12 2560:w-1/2 mx-auto pb-96 text-gray-50 text-center leading-relaxed tracking-wide"
        >
          {/* Fila 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-blue-400">
            <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance">
              <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Lorem ipsum dolor</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance">
              <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Sit amet consectetur</h1>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat duis aute irure dolor.
            </div>
            <div className="py-16 px-20 font-extralight 1200:text-[1rem] 1440:text-[1.1rem] 1536:text-[1.5rem] text-balance">
              <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Adipiscing elit eiusmod</h1>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur excepteur sint occaecat.
            </div>
          </div>

          {/* Fila 2 */}
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 md:divide-x divide-blue-400">
            <div className="py-16 px-20 font-extralight1200:text-[1rem] 1440:text-[1.1rem] text-balance">
              <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Tempor incididunt labore</h1>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum lorem ipsum dolor.
            </div>
            <div className="py-16 px-20 font-extralight1200:text-[1rem] 1440:text-[1.1rem] text-balance">
              <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Dolore magna aliqua</h1>
              In culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor
              sit amet consectetur adipiscing elit sed do eiusmod.
            </div>
            <div className="py-16 px-20 font-extralight1200:text-[1rem] 1440:text-[1.1rem] text-balance">
              <h1 className="text-center my-10 font-bold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Quis nostrud exercitation</h1>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam quis.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

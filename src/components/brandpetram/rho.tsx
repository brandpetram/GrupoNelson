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
        <div className="container text-gray-100 max-w-2xl 2560:max-w-4xl mx-auto px-20 md:px-0 pt-96">
          <h1 className="text-4xl md:text-6xl leading-relaxed tracking-wide font-light">
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-bold">consectetur adipiscing</span>,{" "}
            sed do eiusmod tempor
          </h1>
          <h2 className="mt-10 text-4xl md:text-2xl font-bold">
            Lorem Ipsum — Cargo Lorem Ipsum
          </h2>
        </div>

        {/* Texto decorativo de fondo */}
        <h1 className="text-[35vw] text-white font-extrabold tracking-tighter overflow-hidden opacity-20 md:-mt-48 leading-none">
          Lorem
        </h1>

        {/* Grid de 6 celdas */}
        <div
          id="porque"
          className="flex flex-col md:divide-y md:w-full lg:w-10/12 2560:w-1/2 mx-auto pb-96 text-gray-50 text-center leading-relaxed tracking-wide"
        >
          {/* Fila 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-blue-400">
            <div className="py-16 px-20 font-extralight">
              <h1 className="text-center my-10 font-bold">Lorem ipsum dolor</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="py-16 px-20 font-extralight">
              <h1 className="text-center my-10 font-bold">Sit amet consectetur</h1>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat duis aute irure dolor.
            </div>
            <div className="py-16 px-20 font-extralight">
              <h1 className="text-center my-10 font-bold">Adipiscing elit eiusmod</h1>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur excepteur sint occaecat.
            </div>
          </div>

          {/* Fila 2 */}
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 md:divide-x divide-blue-400">
            <div className="py-16 px-20 font-extralight">
              <h1 className="text-center my-10 font-bold">Tempor incididunt labore</h1>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum lorem ipsum dolor.
            </div>
            <div className="py-16 px-20 font-extralight">
              <h1 className="text-center my-10 font-bold">Dolore magna aliqua</h1>
              In culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor
              sit amet consectetur adipiscing elit sed do eiusmod.
            </div>
            <div className="py-16 px-20 font-extralight">
              <h1 className="text-center my-10 font-bold">Quis nostrud exercitation</h1>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam quis.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

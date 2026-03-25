// Origen: daasyl2022V2/FullHeroProblems
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   5xl/7xl → omitidos. text-10xl/text-16xl/text-22xl → escalas estándar.
//   Hardcodeados 11 pills de texto. Imagen local GrupoNelson.

const pills = [
  "Aeroespacial",
  "Automotriz",
  "Electrónica",
  "Dispositivos médicos",
  "Logística",
  "Alimentos",
  "Manufactura",
  "Plásticos",
  "Metalmecánica",
  "Energía",
  "Telecomunicaciones",
  "Textil",
  "Farmacéutica",
  "Agroindustria",
  "Empaque",
  "Defensa",
  "HVAC",
  "Semiconductores",
]

export default function Upsilon() {
  return (
    <div className="mt-0 w-11/12 mx-auto">
      <div className="mb-10">
        {/* Título con pills */}
        <div className="-mt-1 flex flex-wrap gap-3 my-10">
          <span className="text-3xl 360:text-[2rem] 393:text-[2.2rem] 430:text-[2.5rem] 768:text-5xl 834:text-[3.5rem] 1024:text-6xl 1200:text-[2.8rem] 1280:text-[3.2rem] 1366:text-[3.5rem] 1440:text-[3.8rem] 1536:text-[4.2rem] 1728:text-[5rem] 1920:text-[6rem] font-bold w-full text-foreground mb-5 leading-none">
            Industrias que construimos en Mexicali
          </span>
          {pills.map((word) => (
            <span
              key={word}
              className="my-auto bg-blue-600 text-white px-4 py-2 flex-none text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-light"
            >
              {word}
            </span>
          ))}
          <span className="text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] font-bold text-foreground">
            33 corporaciones internacionales
          </span>
        </div>
      </div>

      {/* Imagen full-width */}
      <img
        src="/parque-industrial-el-vigia-1-en-mexicali.jpeg"
        alt="Nave industrial"
        className="w-full h-auto object-cover"
        style={{ aspectRatio: "15/9" }}
      />

      {/* Texto inferior con tachado */}
      <h3 className="mt-10 text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] font-light text-foreground">
        Con{" "}
        <span className="font-black tracking-tight text-blue-600">Baumex</span>{" "}
        ya no tienes que preocuparte por{" "}
        <span className="line-through">
          <br className="md:hidden" />
          coordinar múltiples contratistas
        </span>{" "}
        <br className="md:hidden" />
        <span className="text-foreground font-black">un solo responsable.</span>
      </h3>
    </div>
  )
}

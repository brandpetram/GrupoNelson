// Origen: daasyl2022V2/FullHeroProblems
// Adaptaciones: eliminado react-imgix → <img> simple. Eliminado next-i18next.
//   5xl/7xl → omitidos. text-10xl/text-16xl/text-22xl → escalas estándar.
//   Hardcodeados 11 pills de texto. Imagen local GrupoNelson.

const pills = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "eiusmod",
  "tempor",
  "incididunt",
]

export default function Upsilon() {
  return (
    <div className="mt-0 w-11/12 mx-auto">
      <div className="mb-10">
        {/* Título con pills */}
        <div className="-mt-1 flex flex-wrap gap-3 my-10">
          <span className="text-6xl xl:text-9xl font-bold w-full text-foreground mb-5 leading-none">
            Lorem ipsum dolor sit amet
          </span>
          {pills.map((word) => (
            <span
              key={word}
              className="my-auto bg-linear-to-br from-blue-500 to-blue-700 text-white px-2 py-1 flex-none text-3xl xl:text-6xl font-light"
            >
              {word}
            </span>
          ))}
          <span className="text-3xl xl:text-6xl font-bold text-foreground">
            consectetur adipiscing
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
      <h3 className="mt-10 text-6xl xl:text-8xl font-light text-foreground">
        Con{" "}
        <span className="font-black tracking-tight text-blue-600">Grupo Nelson</span>{" "}
        ya no tienes que preocuparte por{" "}
        <span className="line-through">
          <br className="md:hidden" />
          lorem ipsum dolor sit amet
        </span>{" "}
        <br className="md:hidden" />
        <span className="text-foreground font-black">consectetur adipiscing.</span>
      </h3>
    </div>
  )
}

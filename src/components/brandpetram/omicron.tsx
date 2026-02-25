// Origen: daasyl2022V2/Circles
// Adaptaciones: eliminado next-i18next. /one.svg, /two.svg, /three.svg (círculos con número)
//   reproducidos con divs Tailwind. Textos lorem ipsum.
//   text-10xl → text-8xl (Tailwind estándar).

export default function Omicron() {
  return (
    <div className="pb-10 mt-32 w-10/12 mx-auto text-sm lg:text-lg text-muted-foreground overflow-hidden">
      {/* Fila 1 */}
      <div className="grid grid-cols-12 gap-5 lg:gap-20">
        <div className="col-span-3 lg:col-span-4">
          <svg viewBox="0 0 100 100" className="w-full">
            <circle cx="50" cy="50" r="50" fill="#1d4ed8" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle"
              fill="white" fontWeight="bold" fontSize="60">1</text>
          </svg>
        </div>
        <div className="col-span-7 lg:col-span-8 my-auto md:leading-relaxed">
          <h1 className="text-foreground mb-5 font-bold text-3xl md:text-8xl leading-none">
            Lorem ipsum
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua enim ad minim veniam.
          </p>
        </div>
      </div>

      {/* Fila 2 — overlap con fila anterior */}
      <div className="grid grid-cols-12 gap-5 lg:gap-20 my-20 2xl:-my-10">
        <div className="col-span-3 lg:col-span-4 opacity-80">
          <svg viewBox="0 0 100 100" className="w-full">
            <circle cx="50" cy="50" r="50" fill="#2563eb" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle"
              fill="white" fontWeight="bold" fontSize="60">2</text>
          </svg>
        </div>
        <div className="col-span-7 lg:col-span-8 my-auto md:leading-relaxed">
          <h1 className="text-foreground mb-5 font-bold text-3xl md:text-8xl leading-none">
            Dolor sit amet
          </h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
          </p>
        </div>
      </div>

      {/* Fila 3 — overlap con fila anterior */}
      <div className="grid grid-cols-12 gap-5 lg:gap-20 my-20 2xl:-my-10">
        <div className="col-span-3 lg:col-span-4">
          <svg viewBox="0 0 100 100" className="w-full">
            <circle cx="50" cy="50" r="50" fill="#3b82f6" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle"
              fill="white" fontWeight="bold" fontSize="60">3</text>
          </svg>
        </div>
        <div className="col-span-7 lg:col-span-8 my-auto md:leading-relaxed">
          <h1 className="text-foreground mb-5 font-bold text-3xl md:text-8xl leading-none">
            Consectetur
          </h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
    </div>
  )
}

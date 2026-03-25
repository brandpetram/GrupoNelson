// Origen: daasyl2022V2/Circles
// Adaptaciones: eliminado next-i18next. /one.svg, /two.svg, /three.svg (círculos con número)
//   reproducidos con divs Tailwind. Textos lorem ipsum.
//   text-10xl → text-8xl (Tailwind estándar).

export default function Omicron() {
  return (
    <div className="pb-32 mt-32 w-10/12 mx-auto text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground overflow-hidden">
      {/* Fila 1 */}
      <div className="grid grid-cols-12 gap-5 lg:gap-20 mb-10 md:mb-0">
        <div className="col-span-3 md:col-span-4">
          <svg viewBox="0 0 100 100" className="w-full">
            <defs>
              <linearGradient id="circle-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#circle-grad-1)" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle"
              fill="white" fontWeight="bold" fontSize="60">1</text>
          </svg>
        </div>
        <div className="col-span-9 md:col-span-7 lg:col-span-8 my-auto md:leading-relaxed">
          <h1 className="text-foreground mb-5 font-bold text-3xl 360:text-[2rem] 393:text-[2.2rem] 430:text-[2.5rem] 768:text-[2.8rem] 834:text-[2.8rem] 1024:text-[4rem] 1200:text-[2.8rem] 1280:text-[3.2rem] 1366:text-[3.5rem] 1440:text-[3.8rem] 1536:text-[4.2rem] 1728:text-[5rem] 1920:text-[6rem] leading-none">
            Ruta crítica
          </h1>
          <p className="1200:hidden">
            18 hitos de construcción. Reuniones semanales con 16+ asistentes. Submittals y long lead items controlados.
          </p>
          <p className="hidden 1200:block">
            18 hitos de construcción documentados. Reuniones semanales con 16+ asistentes. Submittals y long lead items controlados desde el día uno. ERP de construcción para visibilidad en tiempo real del avance de obra.
          </p>
        </div>
      </div>

      {/* Fila 2 — overlap con fila anterior */}
      <div className="grid grid-cols-12 gap-5 lg:gap-20 mb-10 md:mb-0 1024:-my-10">
        <div className="col-span-3 md:col-span-4 opacity-80">
          <svg viewBox="0 0 100 100" className="w-full">
            <defs>
              <linearGradient id="circle-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#circle-grad-2)" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle"
              fill="white" fontWeight="bold" fontSize="60">2</text>
          </svg>
        </div>
        <div className="col-span-9 md:col-span-7 lg:col-span-8 my-auto md:leading-relaxed">
          <h1 className="text-foreground mb-5 font-bold text-3xl 360:text-[2rem] 393:text-[2.2rem] 430:text-[2.5rem] 768:text-[2.8rem] 834:text-[2.8rem] 1024:text-[4rem] 1200:text-[2.8rem] 1280:text-[3.2rem] 1366:text-[3.5rem] 1440:text-[3.8rem] 1536:text-[4.2rem] 1728:text-[5rem] 1920:text-[6rem] leading-none">
            Control de calidad
          </h1>
          <p className="1200:hidden">
            11 puntos de control de calidad. Inspecciones documentadas en cada fase crítica de la construcción.
          </p>
          <p className="hidden 1200:block">
            11 puntos de control de calidad integrados en la ruta crítica. Inspecciones documentadas en cada fase crítica: cimentación, estructura, techumbre, fachadas, instalaciones eléctricas y mecánicas. Nada avanza sin aprobación.
          </p>
        </div>
      </div>

      {/* Fila 3 — overlap con fila anterior */}
      <div className="grid grid-cols-12 gap-5 lg:gap-20 ">
        <div className="col-span-3 md:col-span-4">
          <svg viewBox="0 0 100 100" className="w-full">
            <defs>
              <linearGradient id="circle-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#circle-grad-3)" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle"
              fill="white" fontWeight="bold" fontSize="60">3</text>
          </svg>
        </div>
        <div className="col-span-9 md:col-span-7 lg:col-span-8 my-auto md:leading-relaxed">
          <h1 className="text-foreground mb-5 font-bold text-3xl 360:text-[2rem] 393:text-[2.2rem] 430:text-[2.5rem] 768:text-[2.8rem] 834:text-[2.8rem] 1024:text-[4rem] 1200:text-[2.8rem] 1280:text-[3.2rem] 1366:text-[3.5rem] 1440:text-[3.8rem] 1536:text-[4.2rem] 1728:text-[5rem] 1920:text-[6rem] leading-none">
            ERP de construcción
          </h1>
          <p className="1200:hidden">
            Sistema ERP para gestión integral de obra. Presupuestos, órdenes de compra y avance en una sola plataforma.
          </p>
          <p className="hidden 1200:block">
            Sistema ERP para gestión integral de obra. Presupuestos, órdenes de compra, control de inventario y avance de obra en una sola plataforma. Reportes semanales con fotografías, porcentaje de avance y proyecciones de entrega.
          </p>
        </div>
      </div>
    </div>
  )
}

import { CuadritosLluvia } from '@/components/ui/brandpetram/cuadritos-lluvia'

export function StatsGridBPBeta() {
  return (
    <section className="relative py-16 sm:py-24">
      {/* Dot pattern — lado izquierdo */}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 w-32 768:w-40 1200:w-48 1536:w-56 h-48 768:h-64 1200:h-80 1536:h-96 pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="stats-beta-dots-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <pattern
            id="stats-beta-dot-pattern-left"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="url(#stats-beta-dots-left)" />
          </pattern>
        </defs>
        <rect fill="url(#stats-beta-dot-pattern-left)" width="100%" height="100%" />
      </svg>

      {/* Dot pattern — lado derecho */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-32 768:w-40 1200:w-48 1536:w-56 h-48 768:h-64 1200:h-80 1536:h-96 pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="stats-beta-dots-right" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <pattern
            id="stats-beta-dot-pattern-right"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="url(#stats-beta-dots-right)" />
          </pattern>
        </defs>
        <rect fill="url(#stats-beta-dot-pattern-right)" width="100%" height="100%" />
      </svg>

      {/* Cuadro grande — sobre el borde superior del bloque azul, lado derecho */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-12 768:right-24 1200:right-32 w-64 h-64 768:w-88 768:h-88 1200:w-104 1200:h-104 bg-gray-200 pointer-events-none z-0"
      />

      {/* CuadritosLluvia — pegados al bottom, cayendo hacia el siguiente componente */}
      <div className="absolute bottom-0 right-16 768:right-32 1200:right-48 translate-y-1/2 pointer-events-none z-10">
        <CuadritosLluvia />
      </div>

      {/* Bloque principal */}
      <div className="relative z-1 mx-auto w-11/12 rounded-xs bg-blue-700 py-24 sm:py-32 overflow-hidden">
        {/* Dot pattern — esquina top-right, dentro del bloque */}
        <svg
          aria-hidden="true"
          className="absolute top-0 right-0 w-40 768:w-56 1200:w-72 1536:w-88 h-40 768:h-56 1200:h-72 1536:h-88 pointer-events-none"
        >
          <defs>
            <pattern
              id="stats-beta-dot-inner"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="#dbeafe" />
            </pattern>
          </defs>
          <rect fill="url(#stats-beta-dot-inner)" width="100%" height="100%" opacity="0.3" />
        </svg>

        <div className="relative px-8 768:px-12 1200:px-16 1536:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
            {/* Stats — 2 columnas, lado izquierdo */}
            <dl className="grid grid-cols-2 gap-x-8 gap-y-16 lg:w-[45%]">
              <div className="flex flex-col">
                <dt className="text-lg 768:text-xl 1200:text-2xl leading-none text-blue-100">años de trayectoria<br />en la industria</dt>
                <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                  60<span className="text-blue-200">+</span>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-lg 768:text-xl 1200:text-2xl leading-none text-blue-100">pies cuadrados<br />desarrollados</dt>
                <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                  4M ft²
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-lg 768:text-xl 1200:text-2xl leading-none text-blue-100">corporaciones<br />internacionales</dt>
                <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                  30
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-lg 768:text-xl 1200:text-2xl leading-none text-blue-100">parques industriales<br />en Mexicali</dt>
                <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                  5
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-lg 768:text-xl 1200:text-2xl leading-none text-blue-100">generaciones<br />de familia Nelson</dt>
                <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                  3
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-lg 768:text-xl 1200:text-2xl leading-none text-blue-100">clientes que<br />renuevan contrato</dt>
                <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                  80<span className="text-blue-200">%</span>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-lg 768:text-xl 1200:text-2xl leading-none text-blue-100">proyectos construidos<br />por Baumex</dt>
                <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                  75<span className="text-blue-200">+</span>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-lg 768:text-xl 1200:text-2xl leading-none text-blue-100">empresas Fortune 500<br />operando aquí</dt>
                <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                  4
                </dd>
              </div>
            </dl>

            {/* Texto editorial — lado derecho */}
            <div className="flex items-center lg:w-[55%]">
              <p className="text-[1.75rem] 768:text-[2rem] 1024:text-[2.25rem] 1200:text-[2.25rem] 1366:text-[2.5rem] 1536:text-[2.75rem] 1728:text-[3rem] 1920:text-[3.25rem] font-light tracking-wider leading-tight text-white text-balance">
                Tres generaciones construyendo la infraestructura industrial que mueve Mexicali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

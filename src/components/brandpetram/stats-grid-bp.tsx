import { CuadritosLluvia } from '@/components/ui/brandpetram/cuadritos-lluvia'

export function StatsGridBP() {
  return (
    <section data-component="StatsGridBP" data-component-file="src/components/brandpetram/stats-grid-bp.tsx" data-component-props="false" className="relative py-16 sm:py-24">
      {/* Dot pattern — lado izquierdo */}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 w-32 768:w-40 1200:w-48 1536:w-56 h-48 768:h-64 1200:h-80 1536:h-96 pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="stats-dots-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <pattern
            id="stats-dot-pattern-left"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="url(#stats-dots-left)" />
          </pattern>
        </defs>
        <rect fill="url(#stats-dot-pattern-left)" width="100%" height="100%" />
      </svg>

      {/* Dot pattern — lado derecho */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-32 768:w-40 1200:w-48 1536:w-56 h-48 768:h-64 1200:h-80 1536:h-96 pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="stats-dots-right" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <pattern
            id="stats-dot-pattern-right"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="url(#stats-dots-right)" />
          </pattern>
        </defs>
        <rect fill="url(#stats-dot-pattern-right)" width="100%" height="100%" />
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
      <div className="relative z-1 mx-auto w-11/12 rounded-xs bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col">
              <dt className="text-base/7 text-blue-100">años de trayectoria</dt>
              <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                60<span className="text-blue-200">+</span>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="text-base/7 text-blue-100">desarrollados</dt>
              <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                4M ft²
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="text-base/7 text-blue-100">corporaciones internacionales</dt>
              <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                30
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="text-base/7 text-blue-100">parques industriales</dt>
              <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                5
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="text-base/7 text-blue-100">generaciones</dt>
              <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                3
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="text-base/7 text-blue-100">clientes recurrentes</dt>
              <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                80<span className="text-blue-200">%</span>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="text-base/7 text-blue-100">proyectos construidos</dt>
              <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                75<span className="text-blue-200">+</span>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="text-base/7 text-blue-100">Fortune 500</dt>
              <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                4
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

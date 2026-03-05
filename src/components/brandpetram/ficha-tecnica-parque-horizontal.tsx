// Ficha técnica de parque industrial — layout horizontal (card individual)
// Adaptado del layout horizontal de Extrutech
// Sin props — hardcodeado con Nelson II como ejemplo

import Image from "next/image"

export function FichaTecnicaParqueHorizontal() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden">
        <div className="flex flex-col sm:flex-row">

          {/* Imagen izquierda */}
          <div className="sm:w-72 shrink-0 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <div className="w-full aspect-[16/10] sm:aspect-square overflow-hidden relative">
              <Image
                src="/parque-industrial-nelson-2-en-mexicali.jpeg"
                alt="Parque Industrial Nelson II"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Contenido derecho */}
          <div className="flex flex-col flex-1 p-6 gap-4">

            {/* Cabecera */}
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Parque Industrial · Desde 2018
              </span>
              <h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                Parque Industrial Nelson II
              </h2>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Parque industrial de primer nivel con ubicación estratégica en el Corredor Industrial de Mexicali.
              </p>
            </div>

            {/* Specs en pills */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg px-3 py-2">
                <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Superficie</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono mt-0.5">26.6 ha</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg px-3 py-2">
                <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Naves</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono mt-0.5">3</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg px-3 py-2">
                <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Empresas</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono mt-0.5">1</p>
              </div>
            </div>

            {/* Infraestructura */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500 w-20 shrink-0">
                  Servicios
                </span>
                <div className="flex gap-1.5 flex-wrap">
                  {["Seguridad 24/7", "Gas natural", "Agua potable", "Electricidad"].map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Venustiano Carranza #350, Mexicali B.C.
              </p>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-[var(--primary)] transition-colors"
              >
                Contactar
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

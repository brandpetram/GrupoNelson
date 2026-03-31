// Ficha técnica de parque industrial — layout vertical (card individual)
// Adaptado del layout vertical de Extrutech
// Sin props — hardcodeado con Nelson II como ejemplo

import Image from "next/image"

export function FichaTecnicaParqueVertical() {
  return (
    <div data-component="FichaTecnicaParqueVertical" data-component-file="src/components/brandpetram/ficha-tecnica-parque-vertical.tsx" data-component-props="false" className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden border border-zinc-100 dark:border-zinc-800">

        {/* Encabezado con imagen */}
        <div className="relative bg-zinc-100 dark:bg-zinc-800 h-64 overflow-hidden">
          <Image
            src="/parque-industrial-nelson-2-en-mexicali.jpeg"
            alt="Parque Industrial Nelson II"
            fill
            className="object-cover"
          />
          {/* Badge */}
          <span className="absolute top-4 left-4 text-xs font-medium uppercase tracking-widest bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
            Desde 2018
          </span>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-6">

          {/* Nombre y descripción */}
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Parque Industrial Nelson II
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Parque industrial de primer nivel con ubicación estratégica en el Corredor Industrial de Mexicali.
            </p>
          </div>

          {/* Especificaciones */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              Datos generales
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4">
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Superficie</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono">26.6 ha</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4">
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Naves totales</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono">3</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4">
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Empresas</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono">1</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4">
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Ubicación</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Corredor Industrial</p>
              </div>
            </div>
          </div>

          {/* Infraestructura */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              Infraestructura
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Seguridad 24/7",
                "Agua potable",
                "Drenaje",
                "Electricidad",
                "Gas natural",
                "Acceso pavimentado",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2.5 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Divisor */}
          <div className="border-t border-zinc-100 dark:border-zinc-800" />

          {/* Dirección */}
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Venustiano Carranza #350, Mexicali B.C. CP. 21383
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <button className="w-full bg-[var(--primary)] hover:opacity-90 transition-opacity text-white font-medium py-3 rounded-xl text-sm">
              Solicitar información
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

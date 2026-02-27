/**
 * Componente: Epsilon
 * Creado: 6 de febrero de 2026
 * Proyecto: ABC Industrial - Industria Alimenticia
 *
 * Layout: Fondo naranja-rojo con letras ABC gigantes en opacity baja + dos columnas de lista
 * Fase 1: Construir (sin responsive completo todavía)
 */

"use client"

export function Epsilon() {
  return (
    <div className="relative bg-gradient-to-br from-orange-600 to-red-700 py-32 px-16 overflow-hidden">
      {/* Letras ABC gigantes de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[40rem] font-black text-white opacity-5 tracking-tighter leading-none">
          ABC
        </h1>
      </div>

      {/* Dos columnas de listas */}
      <div className="relative z-10 grid grid-cols-2 gap-0 max-w-sm ">
        {/* Columna 1 */}
        <ul className="space-y-5">
          <li className="text-white text-xl">Lorem Ipsum</li>
          <li className="text-white text-xl">Dolor Sit</li>
          <li className="text-white text-xl">Amet Consectetur</li>
          <li className="text-white text-xl">Adipiscing Elit</li>
          <li className="text-white text-xl">Sed Do</li>
          <li className="text-white text-xl">Eiusmod Tempor</li>
          <li className="text-white text-xl">Incididunt Ut</li>
          <li className="text-white text-xl">Labore Et</li>
          <li className="text-white text-xl">Dolore Magna</li>
          <li className="text-white text-xl">Aliqua Ut</li>
        </ul>

        {/* Columna 2 */}
        <ul className="space-y-5">
          <li className="text-white text-xl">Enim Ad</li>
          <li className="text-white text-xl">Minim Veniam</li>
          <li className="text-white text-xl">Quis Nostrud</li>
          <li className="text-white text-xl">Exercitation Ullamco</li>
          <li className="text-white text-xl">Laboris Nisi</li>
          <li className="text-white text-xl">Ut Aliquip</li>
          <li className="text-white text-xl">Ex Ea</li>
          <li className="text-white text-xl">Commodo Consequat</li>
          <li className="text-white text-xl">Duis Aute</li>
          <li className="text-white text-xl">Irure Dolor</li>
        </ul>
      </div>
    </div>
  )
}

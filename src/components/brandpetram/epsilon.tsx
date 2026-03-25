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
          BTS
        </h1>
      </div>

      {/* Dos columnas de listas */}
      <div className="relative z-10 grid grid-cols-2 gap-0 max-w-sm ">
        {/* Columna 1 */}
        <ul className="space-y-5">
          <li className="text-white text-xl">Aeroespacial</li>
          <li className="text-white text-xl">Dispositivos Médicos</li>
          <li className="text-white text-xl">Electrónica</li>
          <li className="text-white text-xl">HVAC</li>
          <li className="text-white text-xl">Logística</li>
          <li className="text-white text-xl">Manufactura Pesada</li>
          <li className="text-white text-xl">Papel</li>
        </ul>

        {/* Columna 2 */}
        <ul className="space-y-5">
          <li className="text-white text-xl">Gulfstream</li>
          <li className="text-white text-xl">Honeywell</li>
          <li className="text-white text-xl">Skyworks</li>
          <li className="text-white text-xl">DHL</li>
          <li className="text-white text-xl">Vertiv</li>
          <li className="text-white text-xl">Rheem</li>
          <li className="text-white text-xl">Deacero</li>
        </ul>
      </div>
    </div>
  )
}

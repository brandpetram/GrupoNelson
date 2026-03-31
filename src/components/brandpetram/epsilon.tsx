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
    <div data-component="Epsilon" data-component-file="src/components/brandpetram/epsilon.tsx" data-component-props="false" className="relative bg-gradient-to-br from-orange-600 to-red-700 py-32 px-16 overflow-hidden">
      {/* Letras ABC gigantes de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[40rem] font-black text-white opacity-5 tracking-tighter leading-none">
          BTS
        </h1>
      </div>

      {/* Beneficios build-to-suit */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-4xl ml-16 1200:ml-32 1920:ml-48">
        <ul className="space-y-12">
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Tu Proceso, Tu Nave</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Tu Terreno, Tu Cimentación</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Eléctrica sin Límite</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Antisísmico BRB</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Cubierta TPO 20 Años</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">FM Global Incluido</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">LEED Gold Integrado</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Paneles Solares</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">HVAC Recuperación 90%</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Fire Protection NFPA</li>
        </ul>
        <ul className="space-y-12">
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Puentes sin Columnas</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Naves de Gran Altura</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Cuartos Limpios</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Subestaciones a Medida</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Ductos Placa Estructural</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Pilas a 18 Metros</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Permisos 3 Gobiernos</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Precisión Milimétrica</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Grúas Industriales</li>
          <li className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap">Precio Cerrado</li>
        </ul>
      </div>
    </div>
  )
}

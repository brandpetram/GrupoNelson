/**
 * Componente: Epsilon
 * Creado: 6 de febrero de 2026
 * Proyecto: ABC Industrial - Industria Alimenticia
 *
 * Layout: Fondo naranja-rojo con letras ABC gigantes en opacity baja + dos columnas de lista
 * Fase 1: Construir (sin responsive completo todavía)
 */

"use client";

export function Epsilon({ lang = "es" }: { lang?: "en" | "es" }) {
  const col1 =
    lang === "en"
      ? [
          "Your Process, Your Facility",
          "Your Land, Your Foundation",
          "Unlimited Electrical Capacity",
          "BRB Seismic Protection",
          "20-Year TPO Roofing",
          "FM Global Included",
          "LEED Gold Integrated",
          "Solar Panels",
          "HVAC 90% Recovery",
          "NFPA Fire Protection",
        ]
      : [
          "Tu Proceso, Tu Nave",
          "Tu Terreno, Tu Cimentación",
          "Eléctrica sin Límite",
          "Antisísmico BRB",
          "Cubierta TPO 20 Años",
          "FM Global Incluido",
          "LEED Gold Integrado",
          "Paneles Solares",
          "HVAC Recuperación 90%",
          "Fire Protection NFPA",
        ];

  const col2 =
    lang === "en"
      ? [
          "Column-Free Spans",
          "High-Clearance Buildings",
          "Cleanrooms",
          "Custom Substations",
          "Structural Plate Ducts",
          "18-Meter Deep Piles",
          "3-Government Permits",
          "Millimetric Precision",
          "Industrial Cranes",
          "Fixed Price",
        ]
      : [
          "Puentes sin Columnas",
          "Naves de Gran Altura",
          "Cuartos Limpios",
          "Subestaciones a Medida",
          "Ductos Placa Estructural",
          "Pilas a 18 Metros",
          "Permisos 3 Gobiernos",
          "Precisión Milimétrica",
          "Grúas Industriales",
          "Precio Cerrado",
        ];

  return (
    <div
      data-component="Epsilon"
      data-component-file="src/components/brandpetram/epsilon.tsx"
      data-component-props="false"
      className="relative bg-gradient-to-br from-orange-600 to-red-700 py-32 px-6 768:px-16 overflow-hidden"
    >
      {/* Letras ABC gigantes de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[40rem] font-black text-white opacity-5 tracking-tighter leading-none">
          BTS
        </h1>
      </div>

      {/* Beneficios build-to-suit */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-4xl ml-5 768:ml-16 1200:ml-32 1920:ml-48">
        <ul className="space-y-12">
          {col1.map((item) => (
            <li
              key={item}
              className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="space-y-12">
          {col2.map((item) => (
            <li
              key={item}
              className="text-white text-2xl 1200:text-3xl 1920:text-4xl font-light leading-none whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

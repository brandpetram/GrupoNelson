'use client'

/**
 * Cuadritos Lluvia 2
 *
 * Segunda variante de elemento decorativo de cuadritos
 * con diferentes tamaños, colores y posiciones.
 *
 * Uso:
 * - Coloca este componente dentro de un contenedor con `relative`
 * - Ajusta las clases `top-X left-X` para posicionar donde quieras
 * - Edita colores, tamaños y rotación directamente en el código
 */

export function CuadritosLluviaDos() {
  return (
    <div className="absolute pointer-events-none">
      {/* Cuadrito 1: Grande, gris claro */}
      <div
        className="absolute w-16 h-16 bg-gray-200"
        style={{ top: '0px', left: '0px' }}
      />

      {/* Cuadrito 2: Pequeño, naranja, tocando esquina inferior derecha del 1 */}
      <div
        className="absolute w-8 h-8 bg-orange-600"
        style={{ top: '64px', left: '64px' }}
      />

      {/* Cuadrito 3: Mediano, slate 900 (azulado), dirección opuesta */}
      <div
        className="absolute w-14 h-14 bg-slate-900"
        style={{ top: '108px', left: '20px' }}
      />

      {/* Cuadrito 4: Pequeño, gris claro, más alejado */}
      <div
        className="absolute w-10 h-10 bg-gray-300"
        style={{ top: '200px', left: '120px' }}
      />

      {/* Cuadrito 5: Mini, gris claro */}
      <div
        className="absolute w-6 h-6 bg-gray-200"
        style={{ top: '240px', left: '50px' }}
      />
    </div>
  )
}

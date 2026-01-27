'use client'

/**
 * Cuadritos Lluvia 3
 *
 * Tercera variante de elemento decorativo de cuadritos
 * con énfasis en colores cálidos (rojo/naranja).
 *
 * Uso:
 * - Coloca este componente dentro de un contenedor con `relative`
 * - Ajusta las clases `top-X left-X` para posicionar donde quieras
 * - Edita colores, tamaños y rotación directamente en el código
 */

export function CuadritosLluviaTres() {
  return (
    <div className="absolute pointer-events-none">
      {/* Cuadrito 1: Mediano, rojo */}


      {/* Cuadrito 2: Grande, gris claro, tocando esquina inferior derecha del 1 */}
      <div
        className="absolute w-16 h-16 bg-gray-200"
        style={{ top: '0px', left: '0px' }}
      />

      {/* Cuadrito 3: Pequeño, naranja, tocando esquina inferior derecha del 2 */}
      <div
        className="absolute w-8 h-8 bg-orange-600"
        style={{ top: '112px', left: '112px' }}
      />

      {/* Cuadrito 4: Mediano-pequeño, rojo, dirección opuesta (tocando inferior izquierda del 3) */}
      <div
        className="absolute w-10 h-10 bg-red-600"
        style={{ top: '152px', left: '70px' }}
      />

      {/* Cuadrito 5: Mini, gris oscuro, más alejado */}
      <div
        className="absolute w-6 h-6 bg-gray-400"
        style={{ top: '220px', left: '140px' }}
      />
    </div>
  )
}

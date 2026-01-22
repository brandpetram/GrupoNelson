'use client'

/**
 * Cuadritos Lluvia
 *
 * Elemento decorativo de cuadritos de diferentes tamaños y colores
 * que parecen estar "lloviendo" en diagonal.
 *
 * Uso:
 * - Coloca este componente dentro de un contenedor con `relative`
 * - Ajusta las clases `top-X left-X` para posicionar donde quieras
 * - Edita colores, tamaños y rotación directamente en el código
 */

export function CuadritosLluvia() {
  return (
    <div className="absolute pointer-events-none">
      {/* Cuadrito 1: Mediano-grande, gris */}
      <div
        className="absolute w-14 h-14 bg-gray-200"
        style={{ top: '0px', left: '0px' }}
      />

      {/* Cuadrito 2: Mediano, azul, tocando esquina inferior derecha del 1 */}
      <div
        className="absolute w-10 h-10 bg-blue-600"
        style={{ top: '56px', left: '56px' }}
      />

      {/* Cuadrito 3: Mediano-grande, azul oscuro, tocando esquina inferior IZQUIERDA del 2 (dirección opuesta) */}
      <div
        className="absolute w-12 h-12 bg-blue-700"
        style={{ top: '96px', left: '8px' }}
      />

      {/* Cuadrito 4: Pequeño, gris oscuro, más separado */}
      <div
        className="absolute w-6 h-6 bg-gray-300"
        style={{ top: '180px', left: '100px' }}
      />
    </div>
  )
}

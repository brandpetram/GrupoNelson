/**
 * Plus Sign
 *
 * Componente SVG del signo más sensible a dark mode.
 * Se usa en el componente ItemImagenConTextoParaListaProductosOServicios
 * para el icono decorativo en la esquina superior izquierda.
 *
 * Variantes:
 * - Light mode: Círculo gris claro con signo en naranja
 * - Dark mode: Círculo gris oscuro con signo en naranja
 *
 * PLACEHOLDERS A EDITAR:
 * - No aplica (componente sin props, editar valores directamente si se necesita)
 */

interface PlusSignProps {
  size?: number
  className?: string
}

export function PlusSign({ size = 53, className = '' }: PlusSignProps = {}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 53 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Círculo de fondo gris - sensible a dark mode */}
      <path
        d="M46.7299 24.8785C46.7299 36.6462 37.1902 46.1858 25.4225 46.1858C13.6548 46.1858 4.11515 36.6462 4.11515 24.8785C4.11515 13.1107 13.6548 3.5711 25.4225 3.5711C37.1902 3.5711 46.7299 13.1107 46.7299 24.8785Z"
        className="fill-zinc-200 dark:fill-zinc-700"
      />

      {/* Círculo exterior en naranja */}
      <path
        d="M26.5439 0C12.1721 0 0.543945 11.6282 0.543945 26C0.543945 40.3718 12.1721 52 26.5439 52C40.9158 52 52.5439 40.3718 52.5439 26C52.5439 11.6282 40.9158 0 26.5439 0Z"
        fill="#F04A00"
      />

      {/* Signo más - blanco en ambos modos */}
      <path
        d="M39.408 27.5078H27.6749V39.243C27.6749 40.0505 27.0294 40.696 26.2219 40.696C25.4145 40.696 24.769 40.0505 24.769 39.243L24.7669 27.5078H13.0865C12.2791 27.5078 11.6335 26.8622 11.6335 26.0548C11.6335 25.2474 12.2791 24.6018 13.0865 24.6018H24.8218V12.8666C24.8218 12.0591 25.4673 11.4136 26.2747 11.4136C27.0822 11.4136 27.7277 12.0591 27.7277 12.8666V24.6018H39.463C40.2704 24.6018 40.9159 25.2474 40.9159 26.0548C40.8634 26.8622 40.2155 27.5078 39.408 27.5078Z"
        fill="white"
      />
    </svg>
  )
}

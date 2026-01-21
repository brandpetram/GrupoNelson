import { SVGProps } from 'react';

interface SdiEmblemaProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Componente del emblema SDI - Un rayo estilizado
 * Por defecto usa currentColor para poder cambiar el color con clases de Tailwind
 */
export function SdiEmblema({ className, fill = 'currentColor', ...props }: SdiEmblemaProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1800 1800"
      className={className}
      {...props}
    >
      <path
        fill={fill}
        d="m853.781 65 102.174 830.911L547 1736l596-838.079L853.781 65Z"
      />
    </svg>
  );
}
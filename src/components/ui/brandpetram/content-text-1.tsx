import { cn } from '../../../lib/utils'

interface ContentText1Props {
  /**
   * Título principal
   */
  titulo: string
  
  /**
   * Color de la línea decorativa
   * @default "emerald"
   */
  colorLinea?: 'emerald' | 'blue' | 'indigo' | 'purple' | 'red' | 'amber' | 'slate'
  
  /**
   * Ancho de la línea decorativa
   * @default "md"
   */
  anchoLinea?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  
  /**
   * Grosor de la línea decorativa
   * @default "normal"
   */
  altoLinea?: 'hairline' | 'thin' | 'light' | 'normal' | 'thick' | 'fat' | 'chonky'
  
  /**
   * Contenido de texto (párrafos)
   */
  children?: React.ReactNode
  
  /**
   * Clases adicionales para el contenedor
   */
  className?: string
  
  /**
   * Clases adicionales para el título (leading, tracking, etc.)
   * @example "leading-loose tracking-tight"
   */
  clasesTitulo?: string
  
  /**
   * Clases adicionales para el texto (leading, tracking, text-justify, etc.)
   * @example "leading-relaxed text-justify"
   */
  clasesTexto?: string
  
  /**
   * Clases adicionales para la línea decorativa (sobreescribe colorLinea si se usa)
   * @example "bg-[#440393]", "bg-primary", "bg-gradient-to-r from-emerald-500 to-blue-500"
   */
  clasesLinea?: string

  /**
   * Indica si se debe mostrar la línea decorativa
   * @default true
   */
  mostrarLinea?: boolean

  /**
   * Emblema o imagen que se muestra a la izquierda del contenido
   */
  emblema?: React.ReactNode

  /**
   * Clases adicionales para el contenedor del emblema
   */
  clasesEmblema?: string

  /**
   * Emblema opcional que se muestra dentro del texto (antes del contenido)
   */
  emblemaInterior?: React.ReactNode

  /**
   * Clases adicionales para el contenedor del emblema interior
   */
  clasesEmblemaInterior?: string
}

const colorLineaClasses: Record<string, string> = {
  emerald: 'bg-emerald-600',
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-600',
  purple: 'bg-purple-600',
  red: 'bg-red-600',
  amber: 'bg-amber-500',
  slate: 'bg-slate-600',
}

const anchoLineaClasses: Record<string, string> = {
  xs: 'w-12 md:w-16',
  sm: 'w-16 md:w-24',
  md: 'w-24 md:w-32 lg:w-40',
  lg: 'w-1/3 md:w-2/5',
  xl: 'w-1/2 md:w-3/5',
  '2xl': 'w-2/3 md:w-3/4',
  full: 'w-full',
}

const altoLineaClasses: Record<string, string> = {
  hairline: 'h-px',
  thin: 'h-0.5',
  light: 'h-[3px]',
  normal: 'h-1',
  thick: 'h-1.5',
  fat: 'h-2',
  chonky: 'h-3',
}

export function ContentText1({
  titulo,
  colorLinea = 'emerald',
  anchoLinea = 'md',
  altoLinea = 'normal',
  children,
  className,
  clasesTitulo,
  clasesTexto,
  clasesLinea,
  mostrarLinea = true,
  emblema,
  clasesEmblema,
  emblemaInterior,
  clasesEmblemaInterior,
}: ContentText1Props) {
  return (
    <div
      className={cn(
        'py-12 md:py-16 lg:py-20 bg-white/95',
        className
      )}
    >
      <div className={cn('')}>
        <div className="w-full">
          {/* Fila del Emblema + Título */}
          <div className={cn(
            'flex  md:flex-row items-center gap-6 md:gap-8',
            !emblema && 'block text-center'
          )}>
            {/* Emblema */}
            {emblema && (
              <div className={cn('flex-shrink-0', clasesEmblema)}>
                {emblema}
              </div>
            )}

            {/* Título */}
            <h2 className={cn(
              'font-bold tracking-tight text-foreground flex-1',
              !emblema && 'mx-auto',
              'text-3xl md:text-4xl lg:text-5xl',
              clasesTitulo
            )}>
              {titulo}
            </h2>
          </div>
          
          {/* Línea decorativa */}
          {mostrarLinea && (
            <div className={cn('flex justify-center mt-6 md:mt-8')}>
              <div className={cn(
                altoLineaClasses[altoLinea], 
                anchoLineaClasses[anchoLinea], 
                clasesLinea || colorLineaClasses[colorLinea]
              )} />
            </div>
          )}
          
          {/* Texto */}
          {children && (
            <div className={cn(
              'space-y-6 text-muted-foreground',
              'text-base md:text-lg',
              'mt-8 md:mt-10',
              clasesTexto
            )}>
              {emblemaInterior && (
                <div className={cn('float-left mr-6 mb-2', clasesEmblemaInterior)}>
                  {emblemaInterior}
                </div>
              )}
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

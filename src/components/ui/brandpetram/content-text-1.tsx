import { cn } from '../../../lib/utils'

interface ContentText1Props {
  /**
   * Título principal
   */
  titulo: string
  
  /**
   * Escala proporcional (ajusta font size, ancho interno, padding y espacios)
   * @default "lg"
   */
  escala?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  
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

// Variantes proporcionales: font size + ancho interno
const escalaVariantes = {
  sm: {
    titulo: 'text-xl md:text-2xl lg:text-3xl',
    texto: 'text-sm md:text-base',
    anchoInterno: 'max-w-2xl',
    padding: 'px-6 md:px-10 lg:px-14',
    espacioTitulo: 'mt-4 md:mt-5',
    espacioTexto: 'mt-5 md:mt-6',
  },
  md: {
    titulo: 'text-2xl md:text-3xl lg:text-4xl',
    texto: 'text-base md:text-lg',
    anchoInterno: 'max-w-3xl',
    padding: 'px-6 md:px-12 lg:px-18',
    espacioTitulo: 'mt-5 md:mt-6',
    espacioTexto: 'mt-6 md:mt-8',
  },
  lg: {
    titulo: 'text-3xl md:text-4xl lg:text-5xl',
    texto: 'text-base md:text-lg',
    anchoInterno: 'max-w-4xl',
    padding: 'px-8 md:px-16 lg:px-24',
    espacioTitulo: 'mt-6 md:mt-8',
    espacioTexto: 'mt-8 md:mt-10',
  },
  xl: {
    titulo: 'text-4xl md:text-5xl lg:text-6xl',
    texto: 'text-lg md:text-xl',
    anchoInterno: 'max-w-5xl',
    padding: 'px-10 md:px-20 lg:px-28',
    espacioTitulo: 'mt-8 md:mt-10',
    espacioTexto: 'mt-10 md:mt-12',
  },
  '2xl': {
    titulo: 'text-5xl md:text-6xl lg:text-7xl',
    texto: 'text-xl md:text-2xl',
    anchoInterno: 'max-w-6xl',
    padding: 'px-12 md:px-24 lg:px-32',
    espacioTitulo: 'mt-10 md:mt-12',
    espacioTexto: 'mt-12 md:mt-14',
  },
  '3xl': {
    titulo: 'text-6xl md:text-7xl lg:text-8xl',
    texto: 'text-xl md:text-2xl lg:text-3xl',
    anchoInterno: 'max-w-7xl',
    padding: 'px-14 md:px-28 lg:px-36',
    espacioTitulo: 'mt-12 md:mt-14',
    espacioTexto: 'mt-14 md:mt-16',
  },
  '4xl': {
    titulo: 'text-7xl md:text-8xl lg:text-9xl',
    texto: 'text-2xl md:text-3xl lg:text-4xl',
    anchoInterno: 'max-w-full',
    padding: 'px-16 md:px-32 lg:px-40',
    espacioTitulo: 'mt-14 md:mt-16',
    espacioTexto: 'mt-16 md:mt-20',
  },
}

export function ContentText1({
  titulo,
  escala = 'lg',
  colorLinea = 'emerald',
  anchoLinea = 'md',
  altoLinea = 'normal',
  children,
  className,
  clasesTitulo,
  clasesTexto,
  clasesLinea,
}: ContentText1Props) {
  const variante = escalaVariantes[escala]

  return (
    <div
      className={cn(
        'py-12 md:py-16 lg:py-20 bg-white/95',
        className
      )}
    >
      <div className={cn('mx-auto', variante.anchoInterno, variante.padding)}>
        {/* Título */}
        <h2 className={cn(
          'font-bold tracking-tight text-center text-foreground',
          variante.titulo,
          clasesTitulo
        )}>
          {titulo}
        </h2>
        
        {/* Línea decorativa */}
        <div className={cn('flex justify-center', variante.espacioTitulo)}>
          <div className={cn(
            altoLineaClasses[altoLinea], 
            anchoLineaClasses[anchoLinea], 
            clasesLinea || colorLineaClasses[colorLinea]
          )} />
        </div>
        
        {/* Texto */}
        {children && (
          <div className={cn(
            'space-y-6 text-muted-foreground leading-relaxed',
            variante.texto,
            variante.espacioTexto,
            clasesTexto
          )}>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

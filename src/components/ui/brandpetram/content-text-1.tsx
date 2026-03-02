import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { ReactNode } from 'react'

interface ContentText1Props {
  /**
   * Título principal
   */
  titulo: string

  /**
   * Clases adicionales para el contenedor principal
   */
  className?: string

  /**
   * Contenido adicional (texto, párrafos, etc.)
   */
  children?: ReactNode
  
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
   * Clases adicionales para la línea decorativa
   * @example "bg-[#440393] w-24 h-1", "bg-primary w-full h-px"
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
  emblema?: ReactNode

  /**
   * Clases adicionales para el contenedor del emblema
   */
  clasesEmblema?: string

  /**
   * Emblema opcional que se muestra dentro del texto (antes del contenido)
   */
  emblemaInterior?: ReactNode

  /**
   * Clases adicionales para el contenedor del emblema interior
   */
  clasesEmblemaInterior?: string

  /**
   * Texto del botón
   */
  botonTexto?: string

  /**
   * URL del botón
   */
  botonUrl?: string

  /**
   * Indica si se debe mostrar el botón
   * @default false
   */
  mostrarBoton?: boolean

  /**
   * Clases adicionales para el contenedor del botón
   */
  clasesBoton?: string
}

export function ContentText1({
  titulo,
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
  botonTexto = 'Cotiza Aquí',
  botonUrl = '/contacto',
  mostrarBoton = true,
  clasesBoton,
}: ContentText1Props) {
  return (
    <div
      className={cn(
        'py-12 md:py-16 lg:py-20 bg-white/95',
        className
      )}
    >
      <div className="w-full">
        <div className="w-full">
          {/* Fila del Emblema + Título */}
          <div className={cn(
            emblema 
              ? 'flex md:flex-row items-center gap-6 md:gap-8' 
              : 'block text-center'
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
              <div className={cn('bg-primary w-24 h-1', clasesLinea)} />
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

          {/* Botón */}
          {mostrarBoton && (
            <div className={cn('flex justify-center mt-10 md:mt-12', clasesBoton)}>
              <Button className="bg-blue-600 hover:bg-blue-700 py-8 md:py-10 font-semibold w-full text-[1.5rem] md:text-[2rem] 1200:text-[2.4rem]">
                <Link href={botonUrl}>
                  {botonTexto}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

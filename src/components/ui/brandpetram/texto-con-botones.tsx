'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface TextoConBotonesProps {
  titulo: string
  descripcion: string
  botones?: Array<{
    texto: string
    href?: string
    variant?: 'default' | 'outline'
  }>
  claseTitulo?: string
  claseDescripcion?: string
  contenedorDelTexto?: string
  claseContenedorBotones?: string
  claseBotonDefault?: string
  claseBotonOutline?: string
  claseTextoBotones?: string
  className?: string
}

export function TextoConBotones({
  titulo,
  descripcion,
  botones,
  claseTitulo,
  claseDescripcion,
  contenedorDelTexto,
  claseContenedorBotones,
  claseBotonDefault,
  claseBotonOutline,
  claseTextoBotones,
  className
}: TextoConBotonesProps) {
  return (
    <div className={cn('space-y-4', contenedorDelTexto, className)}>
      <h3 className={cn('text-2xl font-bold', claseTitulo)}>{titulo}</h3>
      <p className={cn('text-gray-600', claseDescripcion)}>{descripcion}</p>

      {botones && botones.length > 0 && (
        <div className={cn('flex gap-3', claseContenedorBotones)}>
          {botones.map((boton, idx) => (
            <Link
              key={idx}
              href={boton.href || '#'}
              className={cn(
                'px-6 py-2 rounded-lg font-medium transition-colors',
                boton.variant === 'outline'
                  ? cn('border-2 border-gray-900 hover:bg-gray-900 hover:text-white', claseBotonOutline)
                  : cn('bg-gray-900 text-white hover:bg-gray-700', claseBotonDefault),
                claseTextoBotones
              )}
            >
              {boton.texto}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

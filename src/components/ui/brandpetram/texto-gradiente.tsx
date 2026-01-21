import { cn } from '@/lib/utils'

interface TextoGradienteProps {
  texto: string
  gradienteFrom: string
  gradienteVia?: string
  gradienteTo: string
  className?: string
}

export function TextoGradiente({
  texto,
  gradienteFrom,
  gradienteVia,
  gradienteTo,
  className
}: TextoGradienteProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        gradienteFrom,
        gradienteVia,
        gradienteTo,
        className
      )}
    >
      {texto}
    </span>
  )
}

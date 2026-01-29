/**
 * ParrafoBig - Componente único e irrepetible
 *
 * Párrafo grande con diseño específico.
 * Solo el texto es configurable.
 */

interface ParrafoBigConPropsProps {
  /** Texto del párrafo */
  children: React.ReactNode
}

export function ParrafoBigConProps({
  children
}: ParrafoBigConPropsProps) {
  return (
    <p className="text-base text-3xl 768:text-3xl md:text-4xl 1024:text-5xl 1200:text-4xl 1536:text-5xl font-normal tracking-normal leading-relaxed text-muted-foreground">
      {children}
    </p>
  )
}

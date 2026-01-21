interface ImagePlaceholderProps {
  text?: string
  className?: string
}

/**
 * Componente placeholder simple para imágenes dummy
 */
export function ImagePlaceholder({ text, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-muted text-muted-foreground ${className}`}
    >
      {text && (
        <span className="text-sm font-medium px-4 text-center">
          {text}
        </span>
      )}
    </div>
  )
}

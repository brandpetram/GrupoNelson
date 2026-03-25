/**
 * Componente: VirtualTourBP
 * Creado: 24 de marzo de 2026
 * Proyecto: Grupo Nelson — Tours virtuales 360° via CloudPano
 *
 * Usa iframe para embeber tours de CloudPano.
 * Cada tour se identifica por su ID (ej: "hY5fjENu2").
 */

interface VirtualTourBPProps {
  tourId: string
  title?: string
  subtitle?: string
}

export function VirtualTourBP({
  tourId,
  title = 'Tour Virtual 360°',
  subtitle = 'Explora nuestras instalaciones como si estuvieras aquí.',
}: VirtualTourBPProps) {
  return (
    <section className="w-11/12 mx-auto py-16 sm:py-24">
      <div className="mb-8 768:mb-12">
        <h2 className="text-[1.5rem] 768:text-[2rem] 1024:text-[2.5rem] 1200:text-[2.75rem] 1366:text-[3rem] 1536:text-[3.25rem] 1728:text-[3.5rem] 1920:text-[3.75rem] font-extrabold tracking-tighter leading-none text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg 768:text-xl 1200:text-2xl text-muted-foreground tracking-wider">
            {subtitle}
          </p>
        )}
      </div>
      <div className="rounded-xs overflow-hidden">
        <iframe
          src={`https://app.cloudpano.com/tours/${tourId}`}
          width="100%"
          className="aspect-video"
          allow="fullscreen; gyroscope; accelerometer"
          loading="lazy"
          title={title}
        />
      </div>
    </section>
  )
}

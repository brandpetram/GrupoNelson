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
  sceneId?: string
  title?: string
  subtitle?: string
  lang?: 'en' | 'es'
}

export function VirtualTourBP({
  tourId,
  sceneId,
  title,
  subtitle,
  lang = 'es',
}: VirtualTourBPProps) {
  const resolvedTitle = title ?? (lang === 'en' ? '360° Virtual Tour' : 'Tour Virtual 360°')
  const resolvedSubtitle = subtitle ?? (lang === 'en' ? 'Explore our facilities as if you were here.' : 'Explora nuestras instalaciones como si estuvieras aquí.')
  return (
    <section data-component="VirtualTourBP" data-component-file="src/components/brandpetram/virtual-tour-bp.tsx" data-component-props="true" className="py-16 sm:py-24">
      <div className="w-11/12 mx-auto mb-8 768:mb-12">
        <h2 className="text-[1.5rem] 768:text-[2rem] 1024:text-[2.5rem] 1200:text-[2.75rem] 1366:text-[3rem] 1536:text-[3.25rem] 1728:text-[3.5rem] 1920:text-[3.75rem] font-extrabold tracking-tighter leading-none text-foreground">
          {resolvedTitle}
        </h2>
        {resolvedSubtitle && (
          <p className="mt-4 text-lg 768:text-xl 1200:text-2xl text-muted-foreground tracking-wider">
            {resolvedSubtitle}
          </p>
        )}
      </div>
      <div className="w-full px-10 overflow-hidden">
        <iframe
          src={`https://app.cloudpano.com/tours/${tourId}?disable=logo,sound,ribbon,request,leadgen,floorplan,watermark${sceneId ? `&sceneId=${sceneId}` : ''}`}
          width="100%"
          className="aspect-video"
          allow="fullscreen; gyroscope; accelerometer"
          loading="lazy"
          title={resolvedTitle}
        />
      </div>
    </section>
  )
}

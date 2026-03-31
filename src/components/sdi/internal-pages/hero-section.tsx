import Image from 'next/image'
import { Breadcrumbs } from './breadcrumbs'
import { ImagePlaceholder } from './image-placeholder'

interface HeroSectionProps {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  placeholderText?: string
  breadcrumbs?: Array<{ label: string; href?: string }>
}

/**
 * Hero section para páginas internas con imagen destacada
 */
export function HeroSection({
  title,
  description,
  imageSrc,
  imageAlt,
  placeholderText,
  breadcrumbs = []
}: HeroSectionProps) {
  return (
    <section data-component="HeroSection" data-component-file="src/components/sdi/internal-pages/hero-section.tsx" data-component-props="true" className="relative bg-gradient-to-b from-muted/50 to-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          {/* Contenido de texto */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <ImagePlaceholder
                text={placeholderText || 'Imagen destacada'}
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

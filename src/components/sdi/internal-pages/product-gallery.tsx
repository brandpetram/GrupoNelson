import Image from 'next/image'
import Link from 'next/link'
import { ImagePlaceholder } from './image-placeholder'

interface Product {
  id: string
  name: string
  description: string
  imageSrc?: string
  imageAlt?: string
  placeholderText?: string
  href?: string
}

interface ProductGalleryProps {
  title: string
  subtitle?: string
  products: Product[]
  columns?: 2 | 3 | 4
}

/**
 * Galería de productos en grid para páginas internas
 */
export function ProductGallery({
  title,
  subtitle,
  products,
  columns = 3
}: ProductGalleryProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid de productos */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {products.map((product) => {
            const Content = (
              <>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  {product.imageSrc ? (
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt || product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder
                      text={product.placeholderText || product.name}
                      className="w-full h-full"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {product.description}
                </p>
              </>
            )

            if (product.href) {
              return (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group"
                >
                  {Content}
                </Link>
              )
            }

            return (
              <div key={product.id} className="group">
                {Content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

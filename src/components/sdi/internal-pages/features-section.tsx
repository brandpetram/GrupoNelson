import { ReactNode } from 'react'

interface Feature {
  id: string
  title: string
  description: string
  icon?: ReactNode
}

interface FeaturesSectionProps {
  title: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3
}

/**
 * Sección de características/beneficios con iconos opcionales
 */
export function FeaturesSection({
  title,
  subtitle,
  features,
  columns = 3
}: FeaturesSectionProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3'
  }

  return (
    <section className="py-16 md:py-24 bg-muted/50">
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

        {/* Grid de características */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-background rounded-xl border border-border"
            >
              {feature.icon && (
                <div className="mb-4 text-primary">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

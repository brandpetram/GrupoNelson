import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTAButton {
  label: string
  href: string
  variant?: 'default' | 'outline' | 'secondary'
}

interface CTASectionProps {
  title: string
  description: string
  buttons: CTAButton[]
  variant?: 'default' | 'accent'
}

/**
 * Sección de Call-to-Action para páginas internas
 */
export function CTASection({
  title,
  description,
  buttons,
  variant = 'default'
}: CTASectionProps) {
  const bgClass = variant === 'accent'
    ? 'bg-primary text-primary-foreground'
    : 'bg-muted'

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="mx-auto max-w-4xl px-4 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          <p className={`text-lg ${variant === 'accent' ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              asChild
              variant={button.variant || 'default'}
              size="lg"
            >
              <Link href={button.href}>
                {button.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

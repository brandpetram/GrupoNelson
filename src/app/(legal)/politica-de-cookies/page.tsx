import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies del sitio web de Grupo Nelson.',
}

export default function PoliticaDeCookiesPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Aviso Legal</p>
        <h1 className="text-3xl font-light tracking-tight sm:text-4xl">Política de Cookies</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última modificación — 10 de abril de 2026</p>
      </div>

      {/* Body */}
      <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">¿Qué cookies utilizamos?</h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-border/50 p-5">
              <h3 className="text-sm font-medium text-foreground mb-2">Cookies estrictamente necesarias</h3>
              <p className="text-sm">
                Son esenciales para que el sitio web funcione correctamente. Incluyen cookies que permiten la navegación y el uso de funciones básicas. Estas cookies no recopilan información que pueda ser utilizada con fines de marketing.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 p-5">
              <h3 className="text-sm font-medium text-foreground mb-2">Cookies de rendimiento y análisis</h3>
              <p className="text-sm">
                Nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Toda la información que recopilan estas cookies es agregada y anónima.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">¿Cómo controlar las cookies?</h2>
          <p>
            Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envía una cookie. Sin embargo, algunas funciones del sitio web pueden no funcionar correctamente sin cookies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { browser: 'Chrome', path: 'Configuración → Privacidad y seguridad → Cookies' },
              { browser: 'Firefox', path: 'Opciones → Privacidad y seguridad → Cookies' },
              { browser: 'Safari', path: 'Preferencias → Privacidad → Cookies' },
              { browser: 'Edge', path: 'Configuración → Privacidad → Cookies' },
            ].map(({ browser, path }) => (
              <div key={browser} className="rounded-lg border border-border/50 p-4">
                <p className="text-sm font-medium text-foreground">{browser}</p>
                <p className="text-xs text-muted-foreground mt-1">{path}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Más información</h2>
          <p>
            Para más información sobre cómo tratamos sus datos personales, consulte nuestro <Link href="/aviso-de-privacidad" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">Aviso de Privacidad</Link>. Si tiene preguntas sobre nuestra política de cookies, contáctenos en <a href="mailto:contacto@nelson.com.mx" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">contacto@nelson.com.mx</a>.
          </p>
        </section>
      </div>
    </>
  )
}

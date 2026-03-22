import type { Metadata } from 'next'
import Header from '@/components/Header'
import { LogosGridBP2 } from '@/components/brandpetram/logos-grid-bp-2'

export const metadata: Metadata = {
  title: 'Trayectoria | Grupo Nelson',
}

export default function TrayectoriaPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ── Logos Grid — Hero de la página ── */}
        <div className="pt-20">
          <LogosGridBP2 />
        </div>

        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL RESTANTE — pendiente de migrar a componentes
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          {/* ── NÚMEROS IMPRESIONANTES ── */}
          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">60+</p><p className="text-muted-foreground">años de trayectoria</p></div>
            <div><p className="text-4xl font-bold leading-none">4M ft²</p><p className="text-muted-foreground">desarrollados</p></div>
            <div><p className="text-4xl font-bold leading-none">30</p><p className="text-muted-foreground">corporaciones internacionales</p></div>
            <div><p className="text-4xl font-bold leading-none">5</p><p className="text-muted-foreground">parques industriales</p></div>
            <div><p className="text-4xl font-bold leading-none">3</p><p className="text-muted-foreground">generaciones</p></div>
            <div><p className="text-4xl font-bold leading-none">80%</p><p className="text-muted-foreground">clientes recurrentes</p></div>
            <div><p className="text-4xl font-bold leading-none">75+</p><p className="text-muted-foreground">proyectos construidos</p></div>
            <div><p className="text-4xl font-bold leading-none">4</p><p className="text-muted-foreground">Fortune 500</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── TIMELINE ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Evolución de naves industriales en Mexicali: de 1965 a la nave más grande de la ciudad
          </h2>

          <div className="space-y-8 mb-16">
            <div>
              <p className="text-2xl font-bold">1965</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Rodolfo Nelson Sr. funda Grupo Nelson e instala la primera maquiladora de Mexicali.
                Nace la industria manufacturera de la región.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">Pre-1984 — El Vigía</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Primer parque industrial de Mexicali. Edificios de block. Donde Interiores Aéreos
                empezó con 5,000 ft² y hoy ocupa 550,000.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">1984-2000 — Nelson I</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Primer parque moderno de Grupo Nelson. Áreas verdes, estacionamiento, barda perimetral.
                Segunda generación de desarrollo.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">~1998 — Baumex</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Se funda la constructora in-house. 28 años de operación, 75+ proyectos completados,
                1,092,745 horas hombre trabajadas con cero accidentes fatales.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">2000+ — Nelson II</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                El parque más moderno del portafolio. 27 hectáreas. Subestación eléctrica dedicada.
                Sistema contraincendio central con tanque de 360,000 galones.
                Gulfstream, DHL y Vertiv operan aquí.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">2024-2025 — Nelson III</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                26 hectáreas adquiridas para desarrollo futuro. La siguiente generación de naves
                industriales en Mexicali.
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">En progreso — Gulfstream 550K</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                52,200 m² con certificación LEED Gold, sistemas antisísmicos BRB y 10 MW de paneles
                solares. La nave industrial más grande de Mexicali. Diseñada y construida por Baumex.
              </p>
            </div>
          </div>

          <hr className="border-border my-16" />

          {/* ── CTA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Accede a 60 años de trayectoria en naves industriales en Mexicali
          </h2>

          <p className="text-lg leading-relaxed">
            Solicita una consulta para tu proyecto en Mexicali.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  )
}

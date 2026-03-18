import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Trayectoria | Grupo Nelson',
}

export default function TrayectoriaPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Trayectoria
            Fuente: docs/copy/desempaquetado-nelson-desarrolladora.md
            Vocabulario: docs/5-vocabulario-estrategico-...md
            Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
            Status: BORRADOR — pendiente de aprobación

            NOTA: Esta página será principalmente visual — grid de logos
            + números impresionantes. El copy aquí es de soporte.
            Se escribe completo para tenerlo disponible; el diseño
            determinará cuánto se usa.
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            60 años construyendo naves industriales para empresas Fortune 500
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            Grupo Nelson fundó la industria maquiladora de Mexicali en 1965. Tres generaciones,
            5 parques industriales, 30 corporaciones internacionales. Estos son los números
            y los nombres que respaldan 6 décadas de trayectoria.
          </p>

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

          {/* ── LOGOS / CLIENTES ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            30 corporaciones internacionales operan en naves industriales de Grupo Nelson en Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Aeroespacial, dispositivos médicos, electrónica, HVAC, logística, automotriz.
            7 sectores industriales. 4 empresas Fortune 500.
            Cada logo representa una empresa que eligió Grupo Nelson y se quedó.
          </p>

          {/* Grid de logos — placeholder para componente visual */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 mb-16 py-12">
            <p className="col-span-full text-muted-foreground text-center">
              {/* Aquí irá el grid de logos de los 30 clientes:
                  Gulfstream, Honeywell, General Dynamics, DHL, Vertiv, Baxter,
                  Celestica, Garrett, UTC Aerospace, Intuitive, Rheem, Accuride,
                  Air Liquide, Aqua Lung, Belvedere Maletti, Cornell Dubilier,
                  Creation Technologies, Dentsply, Direct Pack, Envista, Fastenal,
                  Gameloft, Goodrich, Hirsh Industries, IVEMSA, Jonathan, Liebert,
                  Mohawk, PSF, SDS */}
            </p>
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

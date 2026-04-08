import type { Metadata } from 'next'
import Header from '@/components/Header'
import HeroMotionPlus from '@/components/brandpetram/hero-motionplus'
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  FireIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Normas, Certificaciones y Estándares | Grupo Nelson',
  description:
    'Baumex opera bajo tres capas de cumplimiento: certificaciones corporativas (ISN Recomendado por Honeywell), estándares de ingeniería (IBC, FM Global, BRB, NFPA, LEED) y normativa documentada (NOM-009, NOM-027, DC-3). Cada estándar demostrado en naves industriales reales en Mexicali.',
}

const engineeringStandards = [
  {
    name: 'International Building Code',
    description:
      'Las naves de Grupo Nelson se diseñan bajo IBC — no bajo el reglamento de construcción de Baja California. Para un comprador americano: tu nave en Mexicali se diseña bajo las mismas normas de construcción que al otro lado de la frontera.',
    icon: GlobeAltIcon,
  },
  {
    name: 'FM Global: envolvente certificada',
    description:
      'La nave Gulfstream de 550,000 ft² tiene certificación FM Global en muros, cubierta TPO, estructura metálica y sistema contraincendio — el estándar de protección de activos más exigente del mundo. Resultado: primas de seguro significativamente menores para el inquilino.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Ingeniería antisísmica BRB',
    description:
      'Baumex implementó Buckling-Restrained Braces por primera vez en naves industriales de Mexicali — tecnología probada en Ciudad de México y Japón, aplicada en zona sísmica 4 en la nave Gulfstream de 550,000 ft². No es una certificación: es ingeniería estructural que protege la continuidad de tu operación.',
    icon: BoltIcon,
  },
  {
    name: 'NFPA: protección contra incendio',
    description:
      'El Parque Industrial Nelson II opera con sistema centralizado bajo estándares NFPA y FM — tanque de 360,000 galones, rociadores, bombas y detección. La protección no depende solo de tu nave: es infraestructura del parque.',
    icon: FireIcon,
  },
]

export default function NormasCertificacionesEstandaresPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Normas, Certificaciones y Estándares
            Ángulo: tres capas de cumplimiento — corporativo, ingeniería,
            regulatorio — cada una demostrada en proyecto real.
            Brief: docs/copy/roles/angle-architect/angle-brief-normas-certificaciones-estandares-v0.md
            ══════════════════════════════════════════════════════════ */}

        {/* ── HERO ── */}
        <div className="pt-30">
        <HeroMotionPlus
          badge="Normas · Certificaciones · Estándares"
          headlineTop="Tres capas de cumplimiento."
          headlineAccent="Cada una demostrada en proyecto real."
          subtitle="Tu proyecto exige cumplimiento corporativo, estándares de ingeniería y normativa regulatoria. Baumex ha demostrado las tres capas — en naves industriales reales en Mexicali."
          primaryButtonText="Solicita una consulta"
          primaryButtonHref="/contacto"
          secondaryButtonText="Conoce los estándares"
          secondaryButtonHref="#certificaciones-corporativas"
          metrics={[
            { value: 'ISN', label: 'Recomendado' },
            { value: 'LEED', label: 'Ambiental' },
            { value: 'FM Global', label: 'Aseguramiento' },
            { value: 'IBC', label: 'Internacional' },
            { value: 'NFPA', label: 'Contra incendio' },
          ]}
        />
        </div>

        {/* ── CAPA 1 ── */}
        <div className="mx-auto px-8 md:px-12 pt-16 pb-16 max-w-4xl">

          {/* ═══════════════════════════════════════════════════════
              CAPA 1 — Certificaciones corporativas
              ═══════════════════════════════════════════════════════ */}
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Capa 1
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              Lo que tu corporativo exige para aprobar al contratista
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Antes de que tu proyecto empiece, tu corporativo necesita validar que
              el constructor cumple sus estándares de seguridad, documentación y
              calidad. Estas certificaciones ya existen.
            </p>

            {/* ISN */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4">
                Honeywell califica a Baumex como &quot;Recomendado&quot; en
                ISNetworld
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                ISNetworld es la plataforma que empresas Fortune 500 usan para
                evaluar y aprobar contratistas. Sin una calificación activa, la
                mayoría de constructoras locales no superan la fase de due
                diligence.
              </p>
              <p className="text-lg leading-relaxed">
                Baumex tiene calificación &quot;Recomendado&quot; — la más alta
                de la plataforma — activa para Honeywell Aero-Mexicali y Honeywell
                Mexico-Corporate. Si tu corporativo exige validación ISN, el
                precedente ya existe y es verificable.
              </p>
            </div>

            {/* LEED */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4">
                Certificación LEED — Gulfstream 550,000 ft²
              </h3>
              <p className="text-lg leading-relaxed">
                La nave Gulfstream de 550,000 ft² está en proceso de certificación
                LEED — cumplimiento ambiental verificable que facilita la
                aprobación ESG de tu corporativo. El proceso completo — energía
                solar, eficiencia de climatización, recuperación de agua — se
                detalla en{' '}
                <a
                  href="/constructora/leed"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  la sección dedicada a LEED
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            CAPA 2 — Estándares de construcción e ingeniería
            Componente: centered-2x2-grid (Tailwind UI)
            ═══════════════════════════════════════════════════════ */}
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-400">
                Capa 2
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                Lo que tu industria y tu aseguradora exigen para el edificio
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Más allá del mínimo legal, los clientes más exigentes demandan
                estándares de construcción, aseguramiento y protección que
                garanticen la integridad del edificio y la continuidad de la
                operación. Ninguno de estos es obligatorio por ley mexicana — son
                estándares superiores que Baumex ya cumple.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {engineeringStandards.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-white">
                      <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                        <feature.icon
                          aria-hidden="true"
                          className="size-6 text-white"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-400">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* ── CAPA 3 + CTA ── */}
        <div className="mx-auto px-8 md:px-12 pt-16 pb-32 max-w-4xl">

          {/* ═══════════════════════════════════════════════════════
              CAPA 3 — Cumplimiento normativo documentado
              ═══════════════════════════════════════════════════════ */}
          <div className="mb-24">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Capa 3
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              Lo que la regulación exige — documentado con rigor verificable
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Toda constructora debería cumplir las normas mexicanas de seguridad.
              La diferencia es cómo se documenta: permisos diarios, matrices de
              riesgo cuantitativas y registros que resisten una auditoría
              corporativa.
            </p>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              {/* NOM-009 */}
              <div>
                <h3 className="text-lg font-bold mb-2">NOM-009-STPS-2011</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Trabajo en alturas
                </p>
                <p className="text-base leading-relaxed">
                  Permisos diarios de trabajo con control de presión arterial
                  antes de subir, checklist de caída, firmas escalonadas por
                  supervisor y coordinador de seguridad. Cada permiso es un
                  registro verificable.
                </p>
              </div>

              {/* NOM-027 */}
              <div>
                <h3 className="text-lg font-bold mb-2">NOM-027-STPS-2008</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Trabajo con fuego
                </p>
                <p className="text-base leading-relaxed">
                  Permisos especializados para soldadura y oxicorte: extintores
                  en posición, retiro de combustibles a 10 metros, vigía
                  vigilante de incendios presente durante toda la operación.
                </p>
              </div>

              {/* DC-3 */}
              <div>
                <h3 className="text-lg font-bold mb-2">DC-3</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Capacitación laboral certificada
                </p>
                <p className="text-base leading-relaxed">
                  Todo el personal de Baumex cuenta con constancia DC-3 de
                  habilidades laborales. No es una política de capacitación: es
                  certificación verificable de cada trabajador en campo.
                </p>
              </div>

              {/* OSHA */}
              <div>
                <h3 className="text-lg font-bold mb-2">Estándares OSHA</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Seguridad comparable a EE.UU.
                </p>
                <p className="text-base leading-relaxed">
                  Los manuales de seguridad de Baumex están basados en estándares
                  OSHA además de las normas mexicanas. Para un comprador
                  americano: la seguridad en obra cumple criterios comparables a
                  los de tu país.
                </p>
              </div>
            </div>

            {/* EPGC */}
            <div>
              <h3 className="text-lg font-bold mb-2">
                Validación independiente: EPGC
              </h3>
              <p className="text-base leading-relaxed">
                El control de calidad no depende solo de Baumex. Laboratorios
                externos como EPGC (Especialistas en Geotecnia y Concretos)
                verifican compactación de terracerías y calidad de cimentaciones
                en cada proyecto. Un tercero lo valida.
              </p>
            </div>
          </div>

          {/* ── CTA ── */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
              Construye bajo los estándares que tu proyecto necesita
            </h2>
            <p className="text-lg leading-relaxed">
              Certificaciones corporativas, estándares de ingeniería, cumplimiento
              normativo documentado — cada uno resuelto en proyectos reales. Si tu
              operación tiene requisitos específicos de cumplimiento, hay
              precedente.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

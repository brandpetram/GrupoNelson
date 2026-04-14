import Header from '@/components/Header'
import { MosaicoLiderazgo } from '@/components/brandpetram/mosaico-liderazgo'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/nelson/liderazgo',
  title: 'Liderazgo',
  description: 'Tres generaciones liderando el desarrollo de parques industriales y naves industriales built-to-suit en Mexicali. La familia fundadora opera directamente cada proyecto.',
})

const team = [
  {
    name: 'Dirección Comercial',
    role: 'Desarrollo de negocios y relación con clientes',
    description:
      'Recibe tu proyecto, negocia las condiciones y da seguimiento comercial. Las decisiones clave se toman en consejo ejecutivo con los demás directores — no por un ejecutivo de cuenta sin autoridad.',
  },
  {
    name: 'Dirección de Constructora',
    role: 'Baumex — construcción build-to-suit',
    description:
      'Baumex, la constructora in-house, ejecuta cada proyecto de principio a fin. Las decisiones de ingeniería y presupuesto se validan en consejo ejecutivo — tu obra no depende de un solo gerente de proyecto.',
  },
  {
    name: 'Dirección Administrativa',
    role: 'Operación financiera y contractual',
    description:
      'Administra la operación financiera y contractual del grupo. Los términos de tu contrato y ajustes operativos se resuelven en consejo ejecutivo — con autoridad de cierre y décadas de continuidad.',
  },
  {
    name: 'Dirección de Servicio al Cliente',
    role: 'Infraestructura, servicios y mantenimiento del parque',
    description:
      'Mantiene la infraestructura del parque funcionando: servicios, mantenimiento, proyectos de mejora. Los temas operativos se escalan al consejo ejecutivo cuando es necesario — no a un departamento de tickets.',
  },
]

const stats = [
  { value: '60+', label: 'años de la familia operando' },
  { value: '4.5M+', label: 'pies² desarrollados' },
  { value: '4', label: 'generaciones activas' },
]

const results = [
  {
    value: '35+',
    label: 'años con Gulfstream',
    detail:
      'Fortune 500 aeroespacial. Asignación directa sin licitación para la quinta expansión. La confianza con los dueños eliminó el proceso formal.',
  },
  {
    value: '3+',
    label: 'décadas con Honeywell',
    detail:
      'Honeywell Aerospace opera con Grupo Nelson desde hace más de 3 décadas. Múltiples expansiones con el mismo equipo directivo del otro lado.',
  },
  {
    value: '35+',
    label: 'años con nuestros clientes más antiguos',
    detail:
      'Relaciones de largo plazo que se miden en décadas, no en contratos. La relación directa con los dueños produce un nivel de servicio que justifica quedarse.',
  },
]

export default function LiderazgoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <div className="lg:w-10/12 lg:mx-auto">
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Liderazgo
            Angle brief: docs/copy/roles/angle-architect/angle-brief-liderazgo-v0.md
            Canon: docs/copy/aclaraciones-canonicas.md
            Status: v0 — implementación desde angle brief
            ══════════════════════════════════════════════════════════ */}

        {/* ── BLOQUE 1: HERO ── */}
        <section className="relative isolate overflow-hidden px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-24 md:pb-32">
          {/* Cuadrícula SVG de fondo */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full stroke-muted-foreground/10"
          >
            <defs>
              <pattern
                id="liderazgo-grid-pattern"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M0.5 0V200M200 0.5L0 0.499983" />
              </pattern>
            </defs>
            <rect fill="url(#liderazgo-grid-pattern)" width="100%" height="100%" strokeWidth={0} />
          </svg>

          {/* Nube de color decorativa */}
          <div
            aria-hidden="true"
            className="absolute -top-40 right-0 -z-10 transform-gpu blur-3xl sm:right-1/4 sm:top-10"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#80b5ff] to-[#8989fc] opacity-10"
            />
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/70 mb-8">
            Liderazgo
          </p>

          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight max-w-5xl mb-12">
            Quien negocia tu contrato es quien decide, quien supervisa y quien va a seguir ahí en 15&nbsp;años
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
            La familia que instaló la primera maquiladora de Mexicali en 1967 sigue operando
            directamente — 60 años después. No hay capas corporativas entre tu proyecto
            y la persona con autoridad para aprobarlo.
          </p>
        </section>

        {/* ── STATS BAR ── */}
        <section className="border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`px-6 md:px-12 lg:px-20 py-10 md:py-14 ${i < 3 ? 'border-r border-border/50 max-md:[&:nth-child(2)]:border-r-0 max-md:[&:nth-child(1)]:border-b max-md:[&:nth-child(2)]:border-b max-md:border-border/50' : ''}`}
              >
                <p className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOQUE 2: EQUIPO DIRECTIVO ── */}
        <section className="border-t border-border/50 px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 mb-16 md:mb-24">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/70 mb-4">
                Equipo directivo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                Con nombre, rol y autoridad
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
                En un contrato de 10 a 15 años, la persona al otro lado de la mesa no es un dato
                menor. Con Grupo Nelson, esa persona es el dueño.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {team.map((member, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-[1fr_2fr] gap-4 md:gap-20 py-10 md:py-12 border-t border-border/30 first:border-t-border/50"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary/80">{member.role}</p>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground/80 max-w-xl">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOQUE 3: CONTINUIDAD ── */}
        <section className="relative border-t border-border/50 bg-muted/20">
          <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/70 mb-12">
              Continuidad
            </p>

            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight max-w-4xl mb-12">
              Nuestra constructora fue fundada en 1997 y lleva casi 30 años bajo la misma dirección. La persona que va a dirigir tu obra conoce cada metro cuadrado que se ha construido aquí.
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
              <p className="text-base leading-relaxed text-muted-foreground/80">
                La continuidad del liderazgo no se limita a la familia. Baumex fue co-fundada
                junto con la segunda generación — no es un contratista rotativo ni un gerente
                recién asignado.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground/80">
                Y la continuidad mira hacia adelante: la cuarta generación ya trabaja para el grupo.
                Cuando firmas un contrato de 15 años, del otro lado hay personas que van a estar ahí
                cuando termine — y cuando se renueve.
              </p>
            </div>
          </div>
        </section>

        {/* ── BLOQUE 4: RESULTADOS ── */}
        <section className="border-t border-border/50 px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/70 mb-8">
              Resultado
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
              Gulfstream lleva más de 35 años con los mismos dueños — y dejó de licitar
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Para su quinta expansión, Gulfstream no abrió proceso de selección. Asignó directamente
              a Grupo Nelson. Después de más de 35 años con las mismas personas, el proceso dejó de ser necesario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {results.map((result, i) => (
              <div
                key={i}
                className={`py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-border/30' : ''}`}
              >
                <p className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-2">
                  {result.value}
                </p>
                <p className="text-sm font-medium text-primary/80 mb-4">{result.label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground/70">
                  {result.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOQUE 5: CTA ── */}
        <section className="border-t border-border/50 bg-muted/20">
          <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
              Conoce al equipo que va a atender tu proyecto
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto mb-10">
              Sin capas corporativas. Sin rotación de gerentes. La persona que negocia tu contrato
              es la misma que lo firma y la misma que va a contestar tu llamada en 10 años.
            </p>

            <a
              href="/contacto"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-primary/90 hover:gap-4"
            >
              Solicita una consulta
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </section>

        </div>

        <MosaicoLiderazgo />
      </main>
    </div>
  )
}

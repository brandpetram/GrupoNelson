import type { Metadata } from 'next'
import Header from '@/components/Header'
import { MosaicoLiderazgo } from '@/components/brandpetram/mosaico-liderazgo'

export const metadata: Metadata = {
  title: 'Liderazgo | Grupo Nelson',
  description:
    'Conoce al equipo directivo de Grupo Nelson. La familia fundadora opera directamente cada proyecto en Mexicali — sin capas corporativas, sin rotación de gerentes.',
}

export default function LiderazgoPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Liderazgo
            Angle brief: docs/copy/roles/angle-architect/angle-brief-liderazgo-v0.md
            Canon: docs/copy/aclaraciones-canonicas.md
            Status: v0 — implementación desde angle brief
            ══════════════════════════════════════════════════════════ */}

        {/* ── BLOQUE 1: HERO + TESIS ── */}
        <div className="px-8 md:px-12 pt-20 pb-16">

          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Liderazgo
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Quien negocia tu contrato es quien decide, quien supervisa y quien va a seguir ahí en 15 años
          </h1>

          <p className="text-xl leading-relaxed mb-12 max-w-3xl">
            La familia que instaló la primera maquiladora de Mexicali en 1965 sigue operando
            directamente — 60 años después. No hay capas corporativas entre tu proyecto
            y la persona con autoridad para aprobarlo. Eso cambia la velocidad, la accountability
            y la continuidad de la relación durante toda la vida de tu contrato.
          </p>

          <div className="flex flex-wrap gap-12 mb-16">
            <div>
              <p className="text-4xl font-bold leading-none">60+</p>
              <p className="text-muted-foreground">años de la familia operando</p>
            </div>
            <div>
              <p className="text-4xl font-bold leading-none">4</p>
              <p className="text-muted-foreground">dueños en roles operativos</p>
            </div>
            <div>
              <p className="text-4xl font-bold leading-none">3</p>
              <p className="text-muted-foreground">generaciones activas</p>
            </div>
            <div>
              <p className="text-4xl font-bold leading-none">80%</p>
              <p className="text-muted-foreground">de clientes regresan</p>
            </div>
          </div>
        </div>

        <hr className="border-border mx-8 md:mx-12" />

        {/* ── BLOQUE 2: QUIÉNES SON ── */}
        <div className="px-8 md:px-12 py-16">

          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Equipo directivo
          </p>

          <h2 className="text-3xl font-bold leading-snug mb-4">
            Las personas que van a atender tu proyecto — con nombre, rol y autoridad
          </h2>

          <p className="text-lg leading-relaxed mb-10 max-w-3xl">
            En un contrato de 10 a 15 años, la persona al otro lado de la mesa no es un dato
            menor. Con Grupo Nelson, esa persona es el dueño.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-6">

            <div className="rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold mb-2">Humberto Juárez Nelson</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">Dirección Comercial</p>
              <p className="text-base leading-relaxed">
                Es quien recibe tu proyecto, negocia las condiciones y da seguimiento comercial
                durante toda la relación. No es un ejecutivo de cuenta — es el dueño del brazo
                comercial del grupo. Cuando necesites renegociar algo, la decisión no sube
                tres niveles: se resuelve con él.
              </p>
            </div>

            <div className="rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold mb-2">Rodolfo Nelson L.</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">Dirección de Constructora</p>
              <p className="text-base leading-relaxed">
                Dirige Baumex, la constructora in-house de Grupo Nelson. Si tu proyecto requiere
                construcción a la medida, Rodolfo supervisa la ejecución personalmente.
                El responsable de tu obra no es un gerente de proyecto asignado — es el dueño
                de la constructora.
              </p>
            </div>

            <div className="rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold mb-2">Juan Carlos Nelson L.</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">Dirección Administrativa</p>
              <p className="text-base leading-relaxed">
                Administra la operación financiera y contractual del grupo. Las cláusulas de tu
                contrato, los términos, los ajustes operativos — pasan por alguien que tiene
                autoridad de cierre y lleva décadas en el mismo puesto.
              </p>
            </div>

            <div className="rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold mb-2">Alfredo Martínez Nelson</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">Servicios y Mantenimiento del Parque</p>
              <p className="text-base leading-relaxed">
                Mantiene la infraestructura del parque funcionando: servicios, mantenimiento,
                proyectos de mejora. Cuando reportes un problema en tu nave, lo atiende
                alguien de la familia — no un departamento de tickets.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-border mx-8 md:mx-12" />

        {/* ── BLOQUE 3: LA CONTINUIDAD QUE NO SE ROTA ── */}
        <div className="px-8 md:px-12 py-16">

          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Continuidad
          </p>

          <h2 className="text-3xl font-bold leading-snug mb-4">
            Armando Wilhelmy: 30 años dirigiendo la construcción del grupo
          </h2>

          <p className="text-lg leading-relaxed mb-6 max-w-3xl">
            La continuidad del liderazgo en Grupo Nelson no se limita a la familia. Armando
            Wilhelmy co-fundó Baumex en 1997 junto con Rodolfo Nelson Sr. y lleva casi
            30 años como director de construcción del grupo. La persona que va a dirigir
            tu obra conoce cada metro cuadrado que se ha construido aquí — no es un
            contratista rotativo ni un gerente recién asignado.
          </p>

          <p className="text-lg leading-relaxed mb-6 max-w-3xl">
            Y la continuidad mira hacia adelante: la tercera generación de la familia
            ya trabaja para el grupo. Cuando firmas un contrato de 15 años, del otro lado
            hay personas que van a estar ahí cuando termine — y cuando se renueve.
          </p>
        </div>

        <hr className="border-border mx-8 md:mx-12" />

        {/* ── BLOQUE 4: LO QUE PRODUCE ESTE MODELO ── */}
        <div className="px-8 md:px-12 py-16">

          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Resultado
          </p>

          <h2 className="text-3xl font-bold leading-snug mb-4">
            Gulfstream lleva más de 35 años con los mismos dueños — y dejó de licitar
          </h2>

          <p className="text-lg leading-relaxed mb-8 max-w-3xl">
            Para su quinta expansión, Gulfstream no abrió proceso de selección. Asignó
            directamente a Grupo Nelson. Después de más de 35 años trabajando con las mismas
            personas, el proceso de selección dejó de ser necesario. Eso no pasa
            con un gerente regional que rota cada dos años.
          </p>

          <div className="grid gap-8 md:grid-cols-3 mb-8">
            <div className="rounded-lg border border-border p-6">
              <p className="text-3xl font-bold leading-none mb-2">35+</p>
              <p className="text-sm font-medium text-muted-foreground mb-3">años con Gulfstream</p>
              <p className="text-base leading-relaxed">
                Fortune 500 aeroespacial. Asignación directa sin licitación para la quinta
                expansión. La confianza con los dueños eliminó el proceso formal.
              </p>
            </div>

            <div className="rounded-lg border border-border p-6">
              <p className="text-3xl font-bold leading-none mb-2">3+</p>
              <p className="text-sm font-medium text-muted-foreground mb-3">décadas con Honeywell</p>
              <p className="text-base leading-relaxed">
                Honeywell Aerospace opera con Grupo Nelson desde hace más de 3 décadas.
                Múltiples expansiones con el mismo equipo directivo del otro lado.
              </p>
            </div>

            <div className="rounded-lg border border-border p-6">
              <p className="text-3xl font-bold leading-none mb-2">80%</p>
              <p className="text-sm font-medium text-muted-foreground mb-3">repeat business</p>
              <p className="text-base leading-relaxed">
                8 de cada 10 clientes regresan. No por inercia — porque la relación directa
                con los dueños produce un nivel de servicio que justifica quedarse.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-border mx-8 md:mx-12" />

        {/* ── BLOQUE 5: CIERRE + CTA ── */}
        <div className="px-8 md:px-12 py-16 pb-32">

          <h2 className="text-3xl font-bold leading-snug mb-4">
            Conoce al equipo que va a atender tu proyecto
          </h2>

          <p className="text-lg leading-relaxed mb-8 max-w-3xl">
            Sin capas corporativas. Sin rotación de gerentes. Sin comités remotos.
            La persona que negocia tu contrato es la misma que lo firma, la misma que
            supervisa tu construcción y la misma que va a contestar tu llamada en 10 años.
          </p>

          <a
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Solicita una consulta
          </a>
        </div>

        <MosaicoLiderazgo />
      </main>
    </div>
  )
}

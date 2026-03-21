import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Liderazgo | Grupo Nelson',
}

export default function LiderazgoPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Liderazgo
            Fuente: docs/copy/desempaquetado-nelson-desarrolladora.md
            Vocabulario: docs/5-vocabulario-estrategico-...md
            Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
            Status: BORRADOR — pendiente de aprobación
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Opera tu nave industrial en Mexicali con el desarrollador que hace nearshoring desde 1965 — 60 años antes del término
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            Gulfstream lleva 35 años con Grupo Nelson. Honeywell lleva 30. Interiores Aéreos empezó
            con 5,000 pies cuadrados y hoy ocupa 550,000 — creció 110 veces sin cambiar de proveedor.
            80% de los clientes de Grupo Nelson regresan. Contratos de 10 a 15 años.
            El liderazgo que importa no se mide en certificados de management — se mide en décadas
            de confianza verificable.
          </p>

          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">80%</p><p className="text-muted-foreground">clientes recurrentes</p></div>
            <div><p className="text-4xl font-bold leading-none">35</p><p className="text-muted-foreground">años con Gulfstream</p></div>
            <div><p className="text-4xl font-bold leading-none">30+</p><p className="text-muted-foreground">años con Honeywell</p></div>
            <div><p className="text-4xl font-bold leading-none">110x</p><p className="text-muted-foreground">crecimiento Interiores Aéreos</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── LIDERAZGO FAMILIAR ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Tres generaciones operando parques industriales en Mexicali — la familia detrás de 4 millones de pies cuadrados
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Rodolfo Nelson Sr. fundó Grupo Nelson en 1965 e instaló la primera maquiladora de Mexicali.
            Hoy, la segunda y tercera generación operan directamente:
          </p>

          <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
            <li><strong>Humberto Juárez Nelson</strong> — Promoción y brazo comercial. Atiende clientes directamente.</li>
            <li><strong>Rodolfo Nelson L.</strong> — Gerente de Baumex, la constructora in-house. Supervisa ejecución de proyectos.</li>
            <li><strong>Juan Carlos Nelson L.</strong> — Director Administrativo.</li>
            <li><strong>Alfredo Martínez Nelson</strong> — Servicios, mantenimiento y proyectos del parque.</li>
          </ul>

          <p className="text-lg leading-relaxed mb-16">
            Accede a este nivel de decisión directamente. No hay capas corporativas entre tu proyecto
            y quien lo aprueba.
          </p>

          <hr className="border-border my-16" />

          {/* ── CASO GULFSTREAM ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Gulfstream: 35 años, 5 naves industriales en Mexicali, asignación directa sin licitación
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gulfstream es cliente de Grupo Nelson desde hace más de 35 años. Fortune 500.
            5 naves construidas en Mexicali. La más reciente: 52,200 m² con certificación LEED Gold,
            sistemas antisísmicos BRB y 10 MW de paneles solares — la nave industrial más grande
            de la ciudad.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Para la quinta expansión, Gulfstream no abrió licitación. Asignó directamente a Grupo Nelson.
            Después de 35 años, la confianza elimina el proceso de selección.
          </p>

          <hr className="border-border my-16" />

          {/* ── CASO HONEYWELL ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Honeywell Aerospace: 30 años de expansiones en parques industriales de Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Honeywell opera en parques de Grupo Nelson desde hace más de 30 años. División aeroespacial.
            Múltiples expansiones: Mission 1, 2 y 3. Calificación &quot;Recomendado&quot; en la plataforma ISN —
            el sistema global que empresas Fortune 500 usan para evaluar a sus proveedores
            y contratistas.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Baumex construyó para Honeywell un túnel de viento aeroespacial con blower de 3,000 HP
            y ductos de placa estructural soldada. Proyecto colaborativo: ingenieros de Honeywell
            e ingenieros de Baumex elaboraron el proyecto ejecutivo conjuntamente.
          </p>

          <hr className="border-border my-16" />

          {/* ── CASO INTERIORES AÉREOS ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Interiores Aéreos: de 5,000 a 550,000 pies cuadrados — crecimiento 110x en naves industriales de Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Interiores Aéreos empezó con 5,000 pies cuadrados en El Vigía, el parque más antiguo
            de Grupo Nelson. Hoy ocupa 550,000 pies cuadrados. Se incubó en el parque más económico
            y escaló 110 veces sin cambiar de proveedor.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Escala tu operación con un desarrollador que crece contigo. Desde una nave pequeña
            de arranque hasta una operación de medio millón de pies cuadrados — el mismo grupo,
            el mismo trato, las mismas personas.
          </p>

          <hr className="border-border my-16" />

          {/* ── 30 CLIENTES ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            30 corporaciones internacionales en 7 sectores industriales operan en naves de Grupo Nelson en Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Aeroespacial: Gulfstream, Honeywell, UTC Aerospace Systems, Goodrich, General Dynamics.
            Dispositivos médicos: Baxter, Dentsply, Envista, Intuitive.
            Electrónica: Celestica, Creation Technologies, Cornell Dubilier.
            HVAC: Rheem, Vertiv, Liebert.
            Logística: DHL, Fastenal.
            Automotriz: Garrett, Accuride.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Cada nombre en esa lista es una empresa que evaluó opciones, hizo due diligence
            y eligió Grupo Nelson. El dato más potente no es que llegaron — es que se quedaron.
          </p>

          <hr className="border-border my-16" />

          {/* ── CTA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Opera tu nave industrial en Mexicali con el desarrollador que 30 corporaciones internacionales ya eligieron
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            80% de repeat business. Contratos de 10 a 15 años. La permanencia de los clientes
            dice más que cualquier brochure.
          </p>

          <p className="text-lg leading-relaxed">
            Solicita una consulta para tu proyecto en Mexicali.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  )
}

import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'La Diferencia Nelson | Grupo Nelson',
}

export default function DiferenciaNelsonPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Diferencia Nelson
            Fuente: docs/copy/desempaquetado-nelson-desarrolladora.md
            Vocabulario: docs/5-vocabulario-estrategico-...md
            Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
            Status: BORRADOR — pendiente de aprobación
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Con Nelson, hablas con los dueños
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            Grupo Nelson no es un fondo de inversión que administra parques industriales desde otra ciudad.
            Es la familia que creó la industria maquiladora de Mexicali en 1965 y sigue operando personalmente
            cada parque, cada contrato y cada proyecto de construcción. Tres hechos verificables
            que ningún competidor en Mexicali puede replicar simultáneamente: 60 años de trayectoria,
            operación directa por la familia fundadora, y constructora in-house con 28 años
            y 75 proyectos completados.
          </p>

          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">60+</p><p className="text-muted-foreground">años de trayectoria</p></div>
            <div><p className="text-4xl font-bold leading-none">30</p><p className="text-muted-foreground">corporaciones internacionales</p></div>
            <div><p className="text-4xl font-bold leading-none">4M ft²</p><p className="text-muted-foreground">desarrollados</p></div>
            <div><p className="text-4xl font-bold leading-none">80%</p><p className="text-muted-foreground">clientes recurrentes</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── DIFERENCIADOR 1: 60+ años ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Accede a 60 años de experiencia en naves industriales en Mexicali — desde la primera maquiladora hasta hoy
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            En 1965, Rodolfo Nelson Sr. instaló la primera maquiladora de Mexicali. No existía
            la palabra &quot;nearshoring&quot;. No existían los parques industriales modernos de la región.
            No existía el ecosistema manufacturero que hoy alberga a 30 corporaciones internacionales.
            Todo eso se construyó sobre lo que Grupo Nelson empezó.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Tres generaciones después, la familia sigue operando. 4 millones de pies cuadrados
            desarrollados. 5 parques industriales. Presencia en Mexicali, Hermosillo y San Luis Potosí.
            No llegaron al nearshoring cuando se puso de moda — lo practicaban 50 años antes de que
            existiera el término.
          </p>

          <hr className="border-border my-16" />

          {/* ── DIFERENCIADOR 2: Owner-operated ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Habla directamente con los dueños — naves industriales en Mexicali sin capas corporativas
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Humberto Juárez Nelson atiende a los clientes directamente. Rodolfo Nelson L. supervisa
            la construcción. Juan Carlos Nelson L. dirige la administración. Alfredo Martínez Nelson
            gestiona los servicios del parque. Cuatro miembros de la familia en roles operativos activos.
            Estructura plana.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            En otros desarrolladores industriales de Mexicali necesitas tres niveles de aprobación
            para cambiar una cláusula del contrato. En Grupo Nelson necesitas una llamada.
            Gulfstream no licitó su quinta expansión — después de 35 años de relación con la familia,
            asignó directamente.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Reduce la complejidad de tu instalación en Mexicali. Contratos de 10 a 15 años negociados
            con quienes toman las decisiones, no con gerentes regionales que rotan cada dos años.
          </p>

          <hr className="border-border my-16" />

          {/* ── DIFERENCIADOR 3: Constructora in-house ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Constructora in-house: Baumex, 28 años y 75 proyectos de construcción de naves industriales en Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Si necesitas una nave que no existe en inventario, Baumex la diseña y construye.
            Es la constructora propia de Grupo Nelson — no un tercero subcontratado. Un solo contrato
            cubre diseño, permisos, construcción y entrega. 10 disciplinas constructivas ejecutadas
            con equipo propio, desde terracerías hasta acabados.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Gulfstream 550K: 52,200 m² con certificación LEED Gold, sistemas antisísmicos BRB
            y 10 MW de paneles solares. La nave industrial más grande de Mexicali, diseñada
            y construida por Baumex. 1,092,745 horas hombre trabajadas con cero accidentes fatales.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Escala tu operación con un solo proveedor. Nave disponible hoy o construida a tu medida —
            el mismo grupo que administra el parque es el que construye la nave.
          </p>

          <hr className="border-border my-16" />

          {/* ── INFRAESTRUCTURA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Infraestructura de parques industriales en Mexicali auditada por Gulfstream, Honeywell, General Dynamics y DHL
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            30 corporaciones internacionales operan en parques de Grupo Nelson. Cada una pasó
            por un proceso de due diligence antes de firmar. Cada una evaluó infraestructura eléctrica,
            sistemas contraincendio, seguridad y compliance ambiental. Y cada una firmó.
          </p>

          <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
            <li>Nelson II: 27 hectáreas, subestación eléctrica dedicada</li>
            <li>Sistema contraincendio central con tanque de 360,000 galones (ahorro de 60% al cliente)</li>
            <li>Certificaciones: LEED Gold, FM Global, NFPA, ISN, sistemas antisísmicos BRB</li>
            <li>Seguridad 24/7 en todos los parques</li>
            <li>Calificación &quot;Recomendado&quot; por Honeywell en plataforma ISN</li>
          </ul>

          <p className="text-lg leading-relaxed mb-16">
            Asegura continuidad operativa con infraestructura que 4 empresas Fortune 500 ya validaron.
          </p>

          <hr className="border-border my-16" />

          {/* ── CTA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Construye o renta tu nave industrial en Mexicali con el desarrollador que Gulfstream eligió por 35 años
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            60 años de trayectoria. Familia fundadora operando directamente. Constructora in-house
            con 75 proyectos completados. 30 corporaciones internacionales ya operando.
            80% de clientes que regresan.
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

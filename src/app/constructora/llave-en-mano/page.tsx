import type { Metadata } from 'next'
import Header from '@/components/Header'
import { Zeta } from '@/components/brandpetram/zeta'
import { Eta } from '@/components/brandpetram/eta'
import { Teta } from '@/components/brandpetram/teta'
import { Iota } from '@/components/brandpetram/iota'
import { Kappa } from '@/components/brandpetram/kappa'
import { Lamda } from '@/components/brandpetram/lamda'

export const metadata: Metadata = {
  title: 'Llave en Mano | Grupo Nelson',
}

export default function LlaveEnManoPage() {
  return (
    <div>
      <Header />

      {/* ══════════════════════════════════════════════════════════
          COPY COMERCIAL — Llave en Mano (Turnkey / Move-in Ready)
          Ángulo: Naves existentes en inventario, listas para operar.
          El cliente entra y arranca — se adapta a lo que hay.
          Fuente: docs/copy/temario-desarrolladora-grupo-nelson.md (Tema F, Camino 1)
          Fuente: docs/turn-key-vs-built-to-suit.md (investigación)
          Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
          Status: BORRADOR — pendiente de aprobación
          ══════════════════════════════════════════════════════════ */}
      <div className="px-8 md:px-12 pt-20 pb-32">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Ocupa tu nave industrial en Mexicali en semanas — inventario disponible listo para operar
        </h1>

        <p className="text-xl leading-relaxed mb-12">
          Llave en mano significa que la nave ya existe. Entras, instalas tu equipo y arrancas
          producción. Sin esperar diseño, permisos ni construcción. Grupo Nelson tiene naves
          disponibles en 4 parques industriales de Mexicali — desde espacios económicos en El Vigía
          hasta infraestructura Fortune 500 en Nelson II con subestación eléctrica dedicada
          y sistema contraincendio central de 360,000 galones. 30 corporaciones internacionales
          ya operan aquí.
        </p>

        <div className="flex flex-wrap gap-12 mb-24">
          <div><p className="text-4xl font-bold leading-none">4</p><p className="text-muted-foreground">parques con inventario</p></div>
          <div><p className="text-4xl font-bold leading-none">4M ft²</p><p className="text-muted-foreground">desarrollados</p></div>
          <div><p className="text-4xl font-bold leading-none">30</p><p className="text-muted-foreground">corporaciones operando</p></div>
          <div><p className="text-4xl font-bold leading-none">80%</p><p className="text-muted-foreground">clientes que regresan</p></div>
        </div>

        <hr className="border-border my-16" />

        {/* ── Portafolio de parques ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          4 generaciones de naves industriales en Mexicali — desde económicas hasta clase mundial
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Grupo Nelson tiene 4 parques activos en Mexicali, cada uno con un perfil diferente.
          Selecciona el que se ajusta a tu operación y tu presupuesto:
        </p>

        <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-4">
          <li><strong>El Vigía</strong> (primera generación) — Rentas más económicas del portafolio.
            Ideal para operaciones que inician o presupuestos ajustados. Interiores Aéreos empezó
            aquí con 5,000 ft² y hoy ocupa 550,000.</li>
          <li><strong>Nelson I</strong> (segunda generación, 1984-2000) — Primer parque moderno de Grupo Nelson.
            Áreas verdes, estacionamiento, barda perimetral.</li>
          <li><strong>Vigía II</strong> — Honeywell Aerospace opera aquí desde hace 30+ años.</li>
          <li><strong>Nelson II</strong> (tercera generación, 2000+) — El parque más moderno.
            27 hectáreas. Subestación eléctrica dedicada. Sistema contraincendio central
            con tanque de 360,000 galones (ahorra 60% al inquilino). Gulfstream, DHL y Vertiv operan aquí.</li>
        </ul>

        <p className="text-lg leading-relaxed mb-16">
          Accede al portafolio completo. Desde naves renovadas a renta económica hasta infraestructura
          que ya pasó auditorías de empresas Fortune 500.
        </p>

        <hr className="border-border my-16" />

        {/* ── Velocidad ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Acelera tu entrada a Mexicali — arranca operaciones sin esperar construcción
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Para empresas que llegan a México por nearshoring y necesitan arrancar rápido,
          una nave llave en mano elimina los 12-24 meses de un proyecto build-to-suit.
          Visitas la nave, verificas que cumple tus requerimientos, firmas el contrato
          y comienzas a operar en semanas.
        </p>

        <p className="text-lg leading-relaxed mb-16">
          Gulfstream, Honeywell, DHL, Baxter y 26 corporaciones más ya eligieron este camino.
          Seguridad 24/7 en todos los parques. Contratos de 10 a 15 años.
          El 80% de los clientes de Grupo Nelson son recurrentes — no solo llegan, se quedan.
        </p>

        <hr className="border-border my-16" />

        {/* ── Infraestructura incluida ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Infraestructura incluida en naves industriales llave en mano de Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Las naves de Grupo Nelson incluyen la infraestructura del parque donde operan.
          En Nelson II, eso significa:
        </p>

        <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
          <li>Subestación eléctrica dedicada para el parque</li>
          <li>Sistema contraincendio central con tanque de 360,000 galones y línea eléctrica dedicada</li>
          <li>Seguridad 24/7 con control de acceso</li>
          <li>Barda perimetral</li>
          <li>Vialidades internas y estacionamiento</li>
        </ul>

        <p className="text-lg leading-relaxed mb-16">
          Reduce tu inversión inicial. La infraestructura del parque ya existe y se comparte
          entre inquilinos — el sistema contraincendio central ahorra al inquilino el 60% del costo
          frente a un sistema individual. No construyes infraestructura: la usas.
        </p>

        <hr className="border-border my-16" />

        {/* ── Si no encuentras lo que necesitas ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Si ninguna nave del inventario cumple tus especificaciones — Baumex la construye a tu medida
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Si tu operación requiere especificaciones que no existen en el inventario disponible
          — alturas específicas, capacidad eléctrica de alta demanda, sistemas especializados —
          Baumex, la constructora in-house de Grupo Nelson, diseña y construye la nave a tu medida
          exacta. Un solo proveedor para ambos caminos: nave existente o nave nueva.
        </p>

        <p className="text-lg leading-relaxed mb-16">
          Gulfstream necesitó 52,200 m² con sistemas antisísmicos y 20 MW de capacidad eléctrica.
          No existía en inventario. Baumex lo construyó. 28 años, 75+ proyectos build-to-suit.
        </p>

        <hr className="border-border my-16" />

        {/* ── CTA ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Consulta el inventario disponible de naves industriales en Mexicali
        </h2>

        <p className="text-lg leading-relaxed">
          4 parques. Naves desde 5,000 ft² hasta infraestructura Fortune 500.
          Solicita disponibilidad y especificaciones actualizadas.
        </p>

      </div>
      {/* FIN COPY COMERCIAL */}

      {/* Componente Zeta */}
      <div className="container mx-auto mb-32 mt-30">
        <Zeta />
      </div>

      {/* Componente Eta */}
      <div className="container mx-auto mt-10 mb-32">
        <Eta />
      </div>

      {/* Componente Teta */}
      <div className="container mx-auto -mt-20 md:mt-60 1200:mt-80 mb-0">
        <Teta />
      </div>

      {/* Componente Iota */}
      <div className="container mx-auto mt-10 ">
        <Iota />
      </div>

      {/* Componente Kappa */}
      <div className="container mx-auto  mb-32 -mt-16">
        <Kappa />
      </div>

      {/* Componente Lamda */}
      <div className="container mx-auto -mt-32 mb-32">
        <Lamda />
      </div>

    </div>
  )
}

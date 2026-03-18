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
          COPY COMERCIAL — Llave en Mano (Turnkey)
          Fuente: docs/fase-2-desempaquetado-comercial-baumex.md (Temas A, C, F)
          Fuente: docs/4-los-10-temas-comerciales-de-grupo-nelson.md (#2 Turnkey Solutions)
          Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
          Status: BORRADOR — pendiente de aprobación
          ══════════════════════════════════════════════════════════ */}
      <div className="px-8 md:px-12 pt-20 pb-32">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Recibe tu nave industrial en Mexicali lista para operar — diseño, permisos, construcción y entrega bajo un solo contrato
        </h1>

        <p className="text-xl leading-relaxed mb-12">
          Llave en mano significa que defines tus requerimientos y recibes la nave terminada.
          Baumex gestiona todo el proceso: diseño con departamentos propios de arquitectura
          e ingeniería, permisos municipales, estatales y federales, construcción con 10 disciplinas
          in-house, y entrega con evidencia documentada de cada fase. Un solo contrato.
          Un solo responsable. Tú arrancas producción.
        </p>

        <div className="flex flex-wrap gap-12 mb-24">
          <div><p className="text-4xl font-bold leading-none">1</p><p className="text-muted-foreground">solo contrato</p></div>
          <div><p className="text-4xl font-bold leading-none">10</p><p className="text-muted-foreground">disciplinas in-house</p></div>
          <div><p className="text-4xl font-bold leading-none">75+</p><p className="text-muted-foreground">proyectos entregados</p></div>
          <div><p className="text-4xl font-bold leading-none">28</p><p className="text-muted-foreground">años de ejecución</p></div>
        </div>

        <hr className="border-border my-16" />

        {/* ── Qué incluye ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Qué incluye la construcción llave en mano de naves industriales en Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Baumex ejecuta cada etapa con personal propio en campo. Desde la motoniveladora
          compactando el terreno hasta la instalación de subestaciones eléctricas:
        </p>

        <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
          <li>Proyecto ejecutivo: arquitectura, ingeniería civil, estructural, eléctrica, mecánica</li>
          <li>Gestión de permisos: municipales, estatales, federales (CFE, CNA, CESPM)</li>
          <li>Terracerías, cimentación, mampostería, estructura metálica</li>
          <li>Techumbre, fachadas metálicas con aislante, interiores (tablaroca), acabados</li>
          <li>Instalación eléctrica: desde subestaciones hasta luminarias</li>
          <li>Instalación mecánica: HVAC, fire protection, plomería</li>
          <li>Control de calidad con laboratorio externo (EPGC)</li>
          <li>Evidencia fotográfica documentada de cada fase</li>
        </ul>

        <p className="text-lg leading-relaxed mb-16">
          Simplifica tu expansión en Mexicali. No coordinas subcontratistas, no gestionas permisos,
          no supervisas obra. Baumex entrega la nave lista para que instales tu equipo y operes.
        </p>

        <hr className="border-border my-16" />

        {/* ── Gestión de proyecto ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Gestión de proyecto con ruta crítica de 18 hitos para tu nave industrial en Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          El modelo llave en mano de Baumex opera con 11 puntos de control de calidad documentados
          y 18 hitos críticos interdependientes. Cada material se envía al cliente para aprobación
          antes de instalarse (submittals). Cada equipo de largo tiempo de entrega — transformadores,
          generadores, chillers, bombas contra incendio — se monitorea preventivamente desde que se
          ordena hasta que llega a obra.
        </p>

        <p className="text-lg leading-relaxed mb-16">
          Reuniones semanales de obra con 16+ asistentes. Minutas con acuerdos, responsables y fechas.
          Gestión centralizada con software ERP de construcción. Gulfstream, Honeywell y DHL
          han operado bajo este modelo con Baumex.
        </p>

        <hr className="border-border my-16" />

        {/* ── Por qué in-house ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Constructora in-house: la ventaja de la construcción llave en mano con Grupo Nelson en Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Baumex es la constructora propia de Grupo Nelson. El mismo grupo que administra el parque
          industrial es el que diseña y construye la nave. Esto significa que quien negocia tu contrato
          de renta conoce las capacidades de la constructora, y quien construye conoce las restricciones
          del parque. Un solo ecosistema.
        </p>

        <p className="text-lg leading-relaxed mb-16">
          Accede a este modelo integrado. Gulfstream lleva 35 años construyendo con Baumex.
          Honeywell, 30. DHL y Vertiv regresaron después del primer proyecto.
          80% de clientes recurrentes.
        </p>

        <hr className="border-border my-16" />

        {/* ── CTA ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Solicita tu nave industrial llave en mano en Mexicali
        </h2>

        <p className="text-lg leading-relaxed">
          Define tus requerimientos. Baumex entrega la nave lista para operar.
          Un solo contrato, un solo responsable.
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

import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Casos de Éxito | Grupo Nelson',
  description:
    'Las empresas más exigentes que operan en Mexicali ya eligieron a Grupo Nelson. Gulfstream 35 años, Honeywell 30+, Interiores Aéreos 110x de crecimiento.',
}

export default function CasosDeExitoPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Casos de Éxito
            Ángulo: la exigencia del cliente valida a Nelson
            Brief: docs/copy/angle-briefs/casos-de-exito-experiencia.md
            Status: implementado desde brief aprobado
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Las empresas más exigentes que operan en Mexicali ya eligieron a
            Grupo Nelson — y la mayoría se quedó.
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            Los casos de éxito no son testimoniales editados — son hechos
            verificables con nombres, números y décadas de historia. Lo que
            los estándares de estos clientes exigen dice más sobre Grupo Nelson
            que cualquier cosa que Nelson pueda decir sobre sí mismo.
          </p>

          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">35</p><p className="text-muted-foreground">años con Gulfstream</p></div>
            <div><p className="text-4xl font-bold leading-none">30+</p><p className="text-muted-foreground">años con Honeywell</p></div>
            <div><p className="text-4xl font-bold leading-none">110x</p><p className="text-muted-foreground">crecimiento Interiores Aéreos</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── Caso 1: Gulfstream ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Gulfstream: cuando la confianza de 35 años elimina la licitación
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gulfstream es Fortune 500. Manufactura aeroespacial. Una de las
            empresas con estándares de producción más exigentes del mundo —
            estándares corporativos de seguridad, calidad y compliance que
            descalifican automáticamente a la mayoría de los proveedores.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Llevan <strong>35 años</strong> trabajando con Grupo Nelson en
            Mexicali. 5 naves construidas por Baumex. Después del terremoto de
            7.2 en 2010 que dañó su planta existente, confiaron en Baumex para
            construir la nave más grande de la ciudad — 52,200 m².
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Para la quinta expansión, Gulfstream no abrió licitación. Asignó
            directamente a Grupo Nelson. 35 años de relación eliminan el
            proceso de selección. Si Gulfstream no necesita buscar alternativas
            después de tres décadas, eso habla del nivel.
          </p>

          <hr className="border-border my-16" />

          {/* ── Caso 2: Honeywell ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Honeywell Aerospace: el filtro más exigente ya calificó a Baumex
            como &quot;Recomendado&quot;
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Honeywell Aerospace es un corporativo global con estándares de
            selección de contratistas que pasan por la plataforma ISN — un
            filtro de seguridad, documentación y calidad que la mayoría de
            constructoras locales no supera. Para siquiera trabajar en sus
            instalaciones, necesitas calificación ISN activa.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Baumex no solo tiene la calificación — tiene la calificación{" "}
            <strong>&quot;Recomendado&quot;</strong> por Honeywell en la
            plataforma ISN. La más alta que el sistema permite. Más de{" "}
            <strong>30 años</strong> de relación. Múltiples expansiones:
            Mission 1, 2 y 3.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Cuando Honeywell necesitó un túnel de viento aeroespacial — un
            proyecto sin precedente en los proyectos de Baumex — el proyecto
            ejecutivo se elaboró conjuntamente entre ingenieros de Honeywell e
            ingenieros de Baumex. No fue una relación de cliente-proveedor.
            Fue colaboración técnica directa. Eso solo pasa cuando el nivel de
            confianza es alto.
          </p>

          <hr className="border-border my-16" />

          {/* ── Caso 3: Interiores Aéreos ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Interiores Aéreos: de 5,000 a 550,000 pies cuadrados sin cambiar
            de proveedor
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Interiores Aéreos empezó con 5,000 pies cuadrados en El Vigía — el
            parque más antiguo de Grupo Nelson. Rentas económicas. Techos bajos.
            El lugar ideal para arrancar una operación pequeña sin arriesgar
            demasiado.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Hoy ocupa <strong>550,000 pies cuadrados</strong>. Crecimiento de{" "}
            <strong>110 veces</strong> sin cambiar de proveedor. Se incubó en
            el parque más económico y escaló a través de las diferentes
            generaciones de parques de Grupo Nelson — de El Vigía a Nelson II.
            Es el cliente más grande del grupo.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            No es que no tengan opciones. Es que no necesitan buscar. La
            relación escala — de una nave pequeña a un complejo 110 veces más
            grande con el mismo proveedor.
          </p>

          <hr className="border-border my-16" />

          {/* ── DHL + Cierre ── */}
          <p className="text-lg leading-relaxed mb-6">
            No es solo aeroespacial. <strong>DHL</strong> eligió Grupo Nelson
            para su operación logística en Mexicali — y regresó después del
            primer proyecto. <strong>30 corporaciones internacionales</strong>{" "}
            operan hoy en parques de Grupo Nelson.{" "}
            <strong>80% repeat business</strong>: la mayoría de los clientes
            regresa, expande o inicia nuevos proyectos.
          </p>

          <h2 className="text-3xl font-bold leading-snug mb-6 mt-16">
            El próximo caso puede ser el tuyo
          </h2>

          <p className="text-lg leading-relaxed">
            35 años con Gulfstream. 30 con Honeywell. 110x con Interiores
            Aéreos. Si las empresas más exigentes se quedaron, tu proyecto
            también tiene donde crecer. Solicita una consulta.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  )
}

import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Casos de Éxito | Grupo Nelson',
}

export default function CasosDeExitoPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Casos de Éxito
            Ángulo: RESULTADOS (historias de clientes reales)
            vs. Constructora que presenta capacidades como SERVICIOS
            Fuente: docs/fase-2-desempaquetado-comercial-baumex.md
            Fuente: docs/copy/temario-desarrolladora-grupo-nelson.md
            Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
            Status: BORRADOR — pendiente de aprobación
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Gulfstream 35 años. Honeywell 30. Interiores Aéreos 110x. Estos son los casos de éxito de Grupo Nelson en Mexicali.
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            Los casos de éxito no son testimoniales editados — son hechos verificables
            con nombres, números y décadas de historia. Cada caso demuestra un resultado
            específico: permanencia, crecimiento, confianza operativa. 30 corporaciones
            internacionales operan en parques de Grupo Nelson. Aquí están las historias
            que definen esa relación.
          </p>

          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">35</p><p className="text-muted-foreground">años con Gulfstream</p></div>
            <div><p className="text-4xl font-bold leading-none">30+</p><p className="text-muted-foreground">años con Honeywell</p></div>
            <div><p className="text-4xl font-bold leading-none">110x</p><p className="text-muted-foreground">crecimiento Interiores Aéreos</p></div>
            <div><p className="text-4xl font-bold leading-none">80%</p><p className="text-muted-foreground">clientes que regresan</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── Caso Gulfstream ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Gulfstream: 35 años, 5 naves industriales en Mexicali, asignación directa sin licitación
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gulfstream es cliente de Grupo Nelson desde hace más de 35 años. Fortune 500.
            Manufactura aeroespacial. 5 naves construidas por Baumex en Mexicali.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            La nave más reciente: Gulfstream 550K. 52,200 m² (5.5 hectáreas bajo techo).
            13,500 m² de oficinas. Sistemas antisísmicos BRB — primera implementación
            en Mexicali, propuesta por Baumex después de que el terremoto de 7.2 en 2010
            dañara la planta existente de 35,000 m². 10 MW de paneles solares.
            20 MW de capacidad eléctrica. Certificación FM Global. Apuntando a LEED Gold.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Para la quinta expansión, Gulfstream no abrió licitación. Asignó directamente
            a Grupo Nelson. 35 años de relación eliminan el proceso de selección.
          </p>

          <hr className="border-border my-16" />

          {/* ── Caso Honeywell ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Honeywell Aerospace: 30 años de expansiones y un túnel de viento con blower de 3,000 HP
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Honeywell opera en parques de Grupo Nelson desde hace más de 30 años.
            División aeroespacial. Múltiples expansiones: Mission 1, 2 y 3.
            Calificación &quot;Recomendado&quot; en la plataforma ISN.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Proyecto especial: túnel de viento aeroespacial. Edificio de 20 metros de altura
            para alojar un blower de 3,000 HP (los compresores típicos industriales son de 200-250 HP).
            Ductos de 2.5 × 2.5 metros fabricados con placa estructural soldada.
            Puertas blindadas antisonido. Proyecto ejecutivo elaborado conjuntamente
            entre ingenieros de Honeywell e ingenieros de Baumex. 8 meses de construcción.
          </p>

          <hr className="border-border my-16" />

          {/* ── Caso Interiores Aéreos ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Interiores Aéreos: de 5,000 a 550,000 pies cuadrados en naves industriales de Grupo Nelson
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Interiores Aéreos empezó con 5,000 pies cuadrados en El Vigía, el parque más antiguo
            de Grupo Nelson. Rentas económicas. Techos bajos. El lugar ideal para arrancar
            una operación pequeña.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Hoy ocupa 550,000 pies cuadrados. Crecimiento de 110 veces sin cambiar de proveedor.
            Se incubó en el parque más económico y escaló a través de las diferentes
            generaciones de parques de Grupo Nelson. Es el cliente más grande del grupo.
            Un caso que demuestra que la relación de largo plazo no es un slogan —
            es un modelo de crecimiento conjunto.
          </p>

          <hr className="border-border my-16" />

          {/* ── Caso Skyworks ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Skyworks: puente vehicular de 95 metros para transporte de semiconductores en Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Skyworks necesitaba conectar dos plantas separadas por un boulevard y un dren
            federal. La función: transportar microchips en carritos de golf con temperatura
            controlada. Baumex diseñó y construyó un puente de 95 metros de claro libre
            sin columnas intermedias.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Cimentación profunda a 18 metros en zona sísmica 4. Colado completo en un solo día.
            Gestión de permisos con tres niveles de gobierno. Solo cerraron la vialidad un domingo.
            Un proyecto que demuestra capacidad de ingeniería más allá de naves estándar.
          </p>

          <hr className="border-border my-16" />

          {/* ── Caso DHL ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            DHL: nave industrial de logística global construida por Baumex en Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-16">
            DHL eligió Grupo Nelson para su operación logística en Mexicali.
            Baumex construyó la nave con planeación de ejecución documentada —
            control de actividades por categoría con responsables, ejecutores, fechas y estatus.
            DHL regresó después del primer proyecto. Logística global operando
            en infraestructura de Grupo Nelson.
          </p>

          <hr className="border-border my-16" />

          {/* ── CTA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Escribe tu caso de éxito en naves industriales de Mexicali con Grupo Nelson
          </h2>

          <p className="text-lg leading-relaxed">
            35 años con Gulfstream. 30 con Honeywell. 110x con Interiores Aéreos.
            El próximo caso puede ser el tuyo. Solicita una consulta.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  )
}

import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Certificaciones | Grupo Nelson',
}

export default function CertificacionesPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Certificaciones Obtenidas
            Ángulo: RESULTADOS (qué hemos certificado y qué significa para el cliente)
            vs. Constructora que presenta certificaciones como CAPACIDAD
            Fuente: docs/fase-2-desempaquetado-comercial-baumex.md (Temas E, G)
            Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
            Status: BORRADOR — pendiente de aprobación
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Certificaciones que abren puertas: ISN, LEED Gold, FM Global y normativas internacionales en naves industriales de Mexicali
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            Las certificaciones no son trofeos — son filtros de acceso. Sin ISN, no entras
            a la cadena de proveedores de Honeywell. Sin FM Global, la prima de seguro
            de tu nave se multiplica. Sin LEED, tu corporativo no puede reportar cumplimiento
            ESG. Grupo Nelson y Baumex han obtenido estas certificaciones en proyectos reales
            para clientes reales. Aquí están los resultados.
          </p>

          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">ISN</p><p className="text-muted-foreground">&quot;Recomendado&quot; por Honeywell</p></div>
            <div><p className="text-4xl font-bold leading-none">LEED Gold</p><p className="text-muted-foreground">Gulfstream 550K</p></div>
            <div><p className="text-4xl font-bold leading-none">FM Global</p><p className="text-muted-foreground">muros, cubierta, estructura</p></div>
            <div><p className="text-4xl font-bold leading-none">NFPA</p><p className="text-muted-foreground">sistemas contraincendio</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── ISN ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            ISN (ISNetworld): calificación &quot;Recomendado&quot; por Honeywell para construcción de naves industriales
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            ISNetworld es la plataforma global que empresas Fortune 500 usan para evaluar
            y calificar a sus contratistas y proveedores. Baumex tiene certificación ISN activa
            con calificación &quot;Recomendado&quot; por Honeywell International para Aero-Mexicali
            y Honeywell Mexico-Corporate.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Esta calificación solo se obtiene después de demostrar cumplimiento sostenido
            en seguridad, documentación y calidad. Para tu operación significa: si Honeywell
            ya validó a Baumex como contratista confiable en ISN, el proceso de due diligence
            de tu corporativo tiene un punto de referencia verificable.
          </p>

          <hr className="border-border my-16" />

          {/* ── LEED ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            LEED Gold: certificación en la nave industrial más grande de Mexicali — Gulfstream 550K
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            La nave Gulfstream 550K (52,200 m²) se está certificando como LEED Gold.
            Actualmente en 53-55 puntos (Silver), apuntando a Gold con los 10 MW
            de paneles solares en cubierta y carports.
          </p>

          <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
            <li>10 MW de paneles solares: 20,000 m² en cubierta + 30,000 m² en carports</li>
            <li>3,200 toneladas de aire acondicionado de mínimo consumo (42 manejadoras)</li>
            <li>Recuperación del 90% del agua de condensación reutilizada en torres de enfriamiento</li>
            <li>50% de la energía será solar limpia</li>
          </ul>

          <p className="text-lg leading-relaxed mb-16">
            Simplifica el reporte ESG de tu corporativo. Una nave con certificación LEED Gold
            en Mexicali demuestra cumplimiento ambiental verificable — no una declaración
            de intenciones.
          </p>

          <hr className="border-border my-16" />

          {/* ── FM Global ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            FM Global (Factory Mutual): certificación en muros, cubierta, estructura y sistema contraincendio
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Factory Mutual es la certificadora internacional de riesgo más reconocida
            del sector industrial. La nave Gulfstream 550K cuenta con certificación FM Global
            en toda la envolvente: muros, cubierta TPO, estructura metálica
            y sistema contraincendio.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Reduce la prima de seguro de tu nave industrial en Mexicali. La certificación
            FM Global demuestra ante aseguradoras que la construcción cumple estándares
            internacionales de resistencia al fuego, integridad estructural y protección
            de activos.
          </p>

          <hr className="border-border my-16" />

          {/* ── BRB ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Sistemas antisísmicos BRB: primera implementación en naves industriales de Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Buckling-Restrained Braces (BRB) son disipadores de energía antisísmica
            instalados en puntos estratégicos de la estructura. Tecnología usada
            en Ciudad de México y Japón, implementada por primera vez en Mexicali
            por Baumex en la nave Gulfstream 550K.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Contexto: el terremoto de magnitud 7.2 en 2010 dañó la planta existente
            de Gulfstream (35,000 m²) y causó dos semanas de paro de producción.
            Baumex propuso los sistemas BRB. Gulfstream aceptó. Asegura continuidad
            operativa en zona sísmica 4 con tecnología probada.
          </p>

          <hr className="border-border my-16" />

          {/* ── Normativas ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Normativas NOM, NFPA e IBC: cumplimiento documentado en construcción de naves industriales en Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Baumex diseña y construye conforme a normativas mexicanas e internacionales:
          </p>

          <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
            <li><strong>NFPA:</strong> Sistemas contraincendio — rociadores, tanques, bombas, detección</li>
            <li><strong>NOM-009-STPS-2011:</strong> Trabajo en alturas — control de presión arterial, checklist de caída</li>
            <li><strong>NOM-027-STPS-2008:</strong> Trabajo con fuego — soldadura, oxicorte, vigía de incendios</li>
            <li><strong>IBC:</strong> International Building Code — códigos de construcción internacionales</li>
            <li><strong>DC-3:</strong> Certificación mexicana de capacitación laboral para todo el personal</li>
          </ul>

          <p className="text-lg leading-relaxed mb-16">
            Validación independiente: laboratorios externos como EPGC (Especialistas en Geotecnia
            y Concretos) verifican compactación y calidad de cimentaciones en cada proyecto.
          </p>

          <hr className="border-border my-16" />

          {/* ── CTA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Construye tu nave industrial en Mexicali con las certificaciones que tu corporativo exige
          </h2>

          <p className="text-lg leading-relaxed">
            ISN, LEED Gold, FM Global, BRB, NFPA, NOM. Cada certificación obtenida
            en proyectos reales para clientes reales. Solicita una consulta.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  )
}

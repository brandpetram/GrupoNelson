import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Certificaciones | Grupo Nelson',
  description:
    'Baumex ha construido bajo ISN, FM Global, BRB antisísmico, NOM y NFPA en proyectos reales, con certificación LEED Gold en proceso. Experiencia documentada en normas, certificaciones y requisitos corporativos para naves industriales en Mexicali.',
}

export default function CertificacionesPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Certificaciones y Estándares
            Ángulo: capacidad demostrada bajo normas, certificaciones y requisitos
            corporativos distintos.
            Brief: docs/copy/angle-briefs/certificaciones.md (v2, aprobado 2026-04-06)
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Normas, certificaciones y estándares cumplidos en naves industriales reales
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            Cada proyecto industrial llega con sus propias exigencias: requisitos corporativos,
            certificaciones ambientales, estándares de aseguramiento, normativa de seguridad.
            Baumex ha construido bajo estándares distintos exigidos por clientes, industrias
            y proyectos diferentes — ISN para cadenas Fortune 500, LEED Gold para cumplimiento
            ambiental, FM Global para aseguradoras, ingeniería antisísmica BRB para continuidad
            operativa, y normativa NOM/NFPA para operación legal. Todo documentado, todo
            en proyectos reales.
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
            ISN: calificación &quot;Recomendado&quot; por Honeywell
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Para que tu corporativo apruebe a Baumex como contratista, necesitas una validación
            que ya exista. Baumex tiene calificación &quot;Recomendado&quot; en ISNetworld
            — la plataforma que empresas Fortune 500 usan para evaluar proveedores — activa
            para Honeywell Aero-Mexicali y Honeywell Mexico-Corporate.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            La calificación se obtiene después de demostrar cumplimiento sostenido en seguridad,
            documentación y calidad. Si Honeywell ya validó a Baumex, el due diligence de tu
            corporativo tiene un precedente verificable.
          </p>

          <hr className="border-border my-16" />

          {/* ── LEED ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            LEED Gold: certificación ambiental — Gulfstream 550K
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            La nave Gulfstream 550K (52,200 m²) está en proceso de certificación LEED Gold
            — cumplimiento ambiental verificable que simplifica el reporte ESG de tu corporativo.
            No es una declaración de intenciones: es un estándar que ya se está ejecutando
            con diseño, construcción y documentación alineados al objetivo.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            El proceso de certificación, incluyendo energía solar, eficiencia de climatización
            y recuperación de agua, se detalla en{' '}
            <a href="/constructora/leed" className="underline underline-offset-4 hover:text-primary">
              la sección dedicada a LEED
            </a>.
          </p>

          <hr className="border-border my-16" />

          {/* ── FM Global ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            FM Global: certificación de aseguramiento — Gulfstream 550K
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Si tu aseguradora exige certificación de envolvente y protección contra incendio,
            Baumex ya ha pasado por ese proceso. La nave Gulfstream 550K tiene certificación
            FM Global en muros, cubierta TPO, estructura metálica y sistema contraincendio.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            FM Global es la certificadora de riesgo industrial más reconocida a nivel
            internacional. Tener esta certificación reduce objeciones de aseguradoras
            y puede disminuir la prima de seguro de tu nave.
          </p>

          <hr className="border-border my-16" />

          {/* ── BRB ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Ingeniería antisísmica BRB: primera implementación en naves industriales de Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Si tu nave está en zona sísmica y necesitas garantizar continuidad operativa,
            este sistema ya se implementó en Mexicali. Los Buckling-Restrained Braces (BRB) son
            disipadores de energía antisísmica — tecnología probada en Ciudad de México y Japón,
            implementada por primera vez en naves industriales de Mexicali por Baumex
            en la nave Gulfstream 550K.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            El terremoto de 2010 (magnitud 7.2) dañó la planta existente de Gulfstream
            y causó dos semanas de paro. Baumex propuso los BRB como solución de ingeniería
            estructural. Gulfstream aceptó. No es una certificación — es un sistema de ingeniería
            validado en proyecto real para proteger continuidad operativa en zona sísmica.
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
            Construye con los estándares que tu proyecto necesita
          </h2>

          <p className="text-lg leading-relaxed">
            ISN, LEED Gold, FM Global, ingeniería antisísmica, NOM, NFPA. Cada estándar
            cumplido en proyectos reales. Si tu operación tiene requisitos normativos
            o corporativos específicos, hay precedente. Solicita una consulta.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  )
}

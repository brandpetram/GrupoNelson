import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Estándares Internacionales de Construcción | Grupo Nelson Mexicali',
  description: 'Naves industriales en Mexicali construidas con estándares FM Global, NFPA, LEED, ISN, IBC y NOM. Baumex: 75+ proyectos, auditorías de Gulfstream y Honeywell.',
}

export default function EstandaresInternacionalesPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Estándares Internacionales
            Ángulo: Qué códigos y normativas aplican en la construcción
            de tu nave y cómo Baumex los cumple verificablemente.
            Fuente: docs/fase-2-desempaquetado-comercial-baumex.md (Temas C, D, E)
            Fuente: docs/4-los-10-temas-comerciales-de-grupo-nelson.md (#10 Global Standards)
            Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
            Status: BORRADOR — pendiente de aprobación
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Construye tu nave industrial en Mexicali con los estándares que Gulfstream y Honeywell ya exigieron
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            FM Global, NFPA, LEED, ISN, IBC, NOM. Cada acrónimo representa un código o normativa
            que define cómo se diseña, construye e inspecciona una nave industrial de clase mundial.
            Baumex ha construido 75+ proyectos cumpliendo estos estándares en 28 años — verificados
            por auditorías corporativas de 30 corporaciones internacionales, incluyendo 4 Fortune 500.
          </p>

          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">FM Global</p><p className="text-muted-foreground">muros, cubierta, estructura, contraincendio</p></div>
            <div><p className="text-4xl font-bold leading-none">NFPA</p><p className="text-muted-foreground">sistemas contraincendio</p></div>
            <div><p className="text-4xl font-bold leading-none">LEED Gold</p><p className="text-muted-foreground">sustentabilidad verificada</p></div>
            <div><p className="text-4xl font-bold leading-none">ISN</p><p className="text-muted-foreground">&quot;Recomendado&quot; por Honeywell</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── FM Global ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Certificación FM Global en naves industriales de Mexicali: muros, cubierta, estructura y contraincendio
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Factory Mutual es la certificadora internacional de riesgo más reconocida del sector
            industrial. Certifica que los materiales y sistemas constructivos cumplen estándares
            de resistencia al fuego, integridad estructural y protección de activos. La nave
            Gulfstream 550K (52,200 m²) cuenta con certificación FM Global en toda la envolvente:
            muros, cubierta TPO, estructura metálica y sistema contraincendio.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Reduce la prima de seguro de tu nave industrial en Mexicali. Las aseguradoras
            reconocen FM Global como estándar de referencia — una nave certificada paga
            significativamente menos que una nave sin certificación.
          </p>

          <hr className="border-border my-16" />

          {/* ── NFPA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Sistemas contraincendio NFPA para naves industriales en Mexicali: rociadores, tanques y bombas
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            La National Fire Protection Association (NFPA) establece los estándares de protección
            contra incendio que las empresas multinacionales exigen en sus instalaciones.
            Baumex diseña y construye sistemas contraincendio conforme a NFPA: rociadores
            automáticos, tanques de almacenamiento, bombas y sistemas de detección.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Nelson II cuenta con sistema contraincendio central con tanque de 360,000 galones
            y línea eléctrica dedicada — infraestructura que ahorra al inquilino el 60% del costo
            frente a sistemas individuales. Gulfstream, DHL y Vertiv operan con esta infraestructura.
          </p>

          <hr className="border-border my-16" />

          {/* ── ISN ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Calificación ISN &quot;Recomendado&quot; por Honeywell: estándar de seguridad para construcción de naves industriales
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            ISNetworld es la plataforma global que empresas Fortune 500 usan para evaluar
            a contratistas y proveedores. Baumex tiene certificación ISN activa con calificación
            &quot;Recomendado&quot; por Honeywell International — para Aero-Mexicali y Honeywell Mexico-Corporate.
            Solo se obtiene después de demostrar cumplimiento sostenido en seguridad, documentación
            y calidad.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Accede a la cadena de proveedores de empresas Fortune 500 con una constructora
            que ya pasó su filtro. 1,092,745 horas hombre trabajadas con cero accidentes fatales.
            Manual HSE de 18 capítulos. Permisos de trabajo diarios con matriz de riesgo cuantitativa.
          </p>

          <hr className="border-border my-16" />

          {/* ── NOM ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Normativas NOM para construcción de naves industriales en Mexicali: alturas, soldadura y capacitación
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Las Normas Oficiales Mexicanas (NOM) son regulaciones técnicas obligatorias
            que aplican en la construcción de naves industriales. Baumex cumple y documenta:
          </p>

          <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
            <li><strong>NOM-009-STPS-2011:</strong> Trabajo en alturas — control de presión arterial antes de subir, checklist de caída, firmas escalonadas</li>
            <li><strong>NOM-027-STPS-2008:</strong> Trabajo con fuego — extintores, retiro de combustibles a 10 m, &quot;Vigía Vigilante de Incendios&quot; asignado</li>
            <li><strong>DC-3:</strong> Certificación de capacitación laboral para todo el personal en campo</li>
            <li><strong>IMSS/SUA:</strong> Seguro social y autodeterminación para cada trabajador registrado</li>
          </ul>

          <p className="text-lg leading-relaxed mb-16">
            Asegura compliance laboral y de seguridad documentado en tu nave industrial de Mexicali.
            Baumex limita la jornada máxima a 12 horas y requiere permisos de trabajo diarios
            con matriz de riesgo (Impacto × Probabilidad) antes de cada turno.
          </p>

          <hr className="border-border my-16" />

          {/* ── IBC y códigos internacionales ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Diseño conforme a IBC y códigos internacionales de construcción para naves industriales en Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Baumex diseña conforme al International Building Code (IBC) y códigos de construcción
            de Estados Unidos cuando el cliente lo requiere. Gulfstream 550K se diseñó con sistemas
            antisísmicos BRB (Buckling-Restrained Braces) — tecnología de Japón y Ciudad de México,
            primera implementación en Mexicali. 20 MW de capacidad eléctrica instalada.
            Cubierta TPO con garantía de 20 años.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Laboratorios externos independientes como EPGC (Especialistas en Geotecnia y Concretos)
            verifican compactación y calidad de cimentaciones en cada proyecto. Validación por terceros,
            no autodeclaración.
          </p>

          <hr className="border-border my-16" />

          {/* ── CTA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Construye tu nave industrial en Mexicali con los estándares que tu corporativo exige
          </h2>

          <p className="text-lg leading-relaxed">
            FM Global, NFPA, LEED Gold, ISN, IBC, NOM. 75+ proyectos construidos con estos
            estándares en 28 años. 30 corporaciones internacionales ya los validaron.
            Solicita una consulta para tu proyecto.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  )
}

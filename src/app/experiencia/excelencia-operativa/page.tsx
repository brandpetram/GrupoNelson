import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Excelencia Operativa | Grupo Nelson',
}

export default function ExcelenciaOperativaPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />

      <main>
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Excelencia Operativa
            Ángulo: RESULTADOS (lo que ya logramos)
            vs. Constructora que presenta lo mismo como SERVICIOS
            Fuente: docs/fase-2-desempaquetado-comercial-baumex.md
            Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
            Status: BORRADOR — pendiente de aprobación
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            4.5 millones de pies cuadrados construidos en Mexicali con cero accidentes fatales
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            La excelencia operativa no es un eslogan — es un resultado medible. 75 proyectos
            completados en 28 años. 1,092,745 horas hombre trabajadas sin una sola muerte.
            404 días consecutivos sin accidentes en el proyecto más grande de Mexicali.
            33 corporaciones internacionales que regresaron después del primer proyecto.
            Estos son los resultados de Baumex, la constructora in-house de Grupo Nelson.
          </p>

          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">4.5M ft²</p><p className="text-muted-foreground">construidos</p></div>
            <div><p className="text-4xl font-bold leading-none">0</p><p className="text-muted-foreground">accidentes fatales</p></div>
            <div><p className="text-4xl font-bold leading-none">404</p><p className="text-muted-foreground">días sin accidentes</p></div>
            <div><p className="text-4xl font-bold leading-none">80%</p><p className="text-muted-foreground">clientes que repiten</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── Seguridad como resultado ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            1,092,745 horas hombre trabajadas en construcción de naves industriales en Mexicali — el scorecard completo
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            En el proyecto Gulfstream 550K (52,200 m²), Baumex gestionó simultáneamente
            45 empresas subcontratistas y 450 trabajadores en campo. El resultado:
          </p>

          <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
            <li>1,092,745 horas hombre trabajadas</li>
            <li>Cero muertes</li>
            <li>404 días consecutivos sin accidentes</li>
            <li>1 caso con días perdidos, 4 con restricción, 5 otros registrables</li>
            <li>Scorecard de seguridad disponible para revisión</li>
          </ul>

          <p className="text-lg leading-relaxed mb-16">
            Evalúa estos números. Baumex no oculta incidentes menores — los registra
            transparentemente. El scorecard completo está disponible porque la seguridad
            se demuestra con datos, no con declaraciones.
          </p>

          <hr className="border-border my-16" />

          {/* ── Track record como resultado ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            75 proyectos de naves industriales completados en 28 años — desde 5,000 m² hasta 52,200 m²
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            El rango de proyectos completados por Baumex refleja versatilidad de ejecución:
            desde naves de 5,000 m² hasta la nave industrial más grande de Mexicali
            (Gulfstream 550K, 52,200 m²). 7 sectores industriales: aeroespacial,
            dispositivos médicos, electrónica, HVAC, logística, manufactura pesada y papel.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Presencia geográfica documentada: Mexicali, Hermosillo, San Luis Potosí,
            Tecate, El Salto (Jalisco) y Los Cabos. Cada proyecto con evidencia fotográfica
            de cada fase de construcción.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Accede a 28 años de resultados verificables proyecto por proyecto.
            Gulfstream lleva 35 años construyendo con Baumex. Honeywell, 30.
            DHL y Vertiv regresaron después del primer proyecto.
          </p>

          <hr className="border-border my-16" />

          {/* ── Gestión de proyecto como resultado ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Gestión de 45 subcontratistas simultáneos y 450 trabajadores en una sola nave industrial en Mexicali
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            La complejidad del proyecto Gulfstream 550K: coordinar 45 empresas subcontratistas,
            450 trabajadores en campo, 18 hitos de ruta crítica interdependientes,
            equipos con meses de tiempo de entrega (transformadores, chillers, bombas),
            y permisos con CFE en contexto de rezago de infraestructura eléctrica en Mexicali.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            El resultado: nave entregada. 55,500 m² bajo techo. 13,500 m² de oficinas.
            20 MW de capacidad eléctrica instalada. Certificación FM Global.
            Apuntando a LEED Gold. Sin retrasos en ruta crítica.
          </p>

          <hr className="border-border my-16" />

          {/* ── CTA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Opera tu nave industrial en Mexicali con la constructora que ya demostró estos resultados
          </h2>

          <p className="text-lg leading-relaxed">
            4.5 millones de pies cuadrados. 75 proyectos. Cero muertes.
            Solicita una consulta para tu proyecto.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  )
}

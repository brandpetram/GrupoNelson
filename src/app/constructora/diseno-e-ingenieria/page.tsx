import type { Metadata } from 'next'
import Header from '@/components/Header'
import Mu from '@/components/brandpetram/mu'
import Nu from '@/components/brandpetram/nu'
import Xi from '@/components/brandpetram/xi'
import Omicron from '@/components/brandpetram/omicron'
import Pi from '@/components/brandpetram/pi'
import Rho from '@/components/brandpetram/rho'
import Sigma from '@/components/brandpetram/sigma'
import Tau from '@/components/brandpetram/tau'
import Upsilon from '@/components/brandpetram/upsilon'
import Phi from '@/components/brandpetram/phi'
import Chi from '@/components/brandpetram/chi'
import Psi from '@/components/brandpetram/psi'

export const metadata: Metadata = {
  title: 'Diseño e Ingeniería | Grupo Nelson',
}

export default function DisenoEIngenieriaPage() {
  return (
    <div className={'overflow-hidden'}>
      <Header variant="dark" />

      {/* ══════════════════════════════════════════════════════════
          COPY COMERCIAL — Diseño e Ingeniería
          Fuente: docs/fase-2-desempaquetado-comercial-baumex.md (Temas A, C, G)
          Fuente: docs/4-los-10-temas-comerciales-de-grupo-nelson.md (#5 Engineering Innovation)
          Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
          Status: BORRADOR — pendiente de aprobación
          ══════════════════════════════════════════════════════════ */}
      <div className="px-8 md:px-12 pt-20 pb-32 bg-background">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Diseña tu nave industrial en Mexicali con 6 departamentos de ingeniería in-house
        </h1>

        <p className="text-xl leading-relaxed mb-12">
          Baumex no subcontrata el diseño. Cuenta con departamentos propios de arquitectura,
          ingeniería civil, estructural, eléctrica, mecánica y plomería. Departamento propio
          de estimación y costos. Esto significa que el equipo que diseña tu nave es el mismo
          que la construye — sin traducciones entre firmas, sin pérdida de información entre
          el plano y la obra.
        </p>

        <div className="flex flex-wrap gap-12 mb-24">
          <div><p className="text-4xl font-bold leading-none">6</p><p className="text-muted-foreground">departamentos de ingeniería</p></div>
          <div><p className="text-4xl font-bold leading-none">75+</p><p className="text-muted-foreground">proyectos diseñados y ejecutados</p></div>
          <div><p className="text-4xl font-bold leading-none">20 MW</p><p className="text-muted-foreground">capacidad eléctrica instalada (Gulfstream)</p></div>
          <div><p className="text-4xl font-bold leading-none">BRB</p><p className="text-muted-foreground">sistemas antisísmicos implementados</p></div>
        </div>

        <hr className="border-border my-16" />

        {/* ── Departamentos ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Departamentos de diseño de naves industriales: arquitectura, estructural, eléctrica, mecánica
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Cada proyecto ejecutivo de Baumex integra las 6 disciplinas de diseño
          bajo un solo techo:
        </p>

        <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
          <li><strong>Arquitectura:</strong> Layout de planta, oficinas, fachadas, distribución de espacios</li>
          <li><strong>Ingeniería civil:</strong> Terracerías, mecánica de suelos, cimentaciones (zapatas, pilas hasta 18 m)</li>
          <li><strong>Ingeniería estructural:</strong> Estructura metálica, sistemas antisísmicos BRB, cálculo de cargas</li>
          <li><strong>Ingeniería eléctrica:</strong> Subestaciones, capacidad instalada, paneles solares, iluminación</li>
          <li><strong>Ingeniería mecánica:</strong> HVAC, fire protection, plomería, ductos especializados</li>
          <li><strong>Estimación y costos:</strong> Presupuestos detallados, control de costos durante ejecución</li>
        </ul>

        <p className="text-lg leading-relaxed mb-16">
          Accede a este nivel de integración para tu proyecto en Mexicali.
          El equipo que calcula la cimentación es el mismo que la construye.
        </p>

        <hr className="border-border my-16" />

        {/* ── Proyectos que demuestran capacidad de ingeniería ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Ingeniería demostrada: de sistemas antisísmicos BRB a túneles de viento aeroespaciales en Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          La capacidad de ingeniería de Baumex se mide en proyectos ejecutados,
          no en presentaciones:
        </p>

        <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
          <li><strong>Gulfstream 550K:</strong> 55,500 m², sistemas antisísmicos BRB (primera implementación en Mexicali), 20 MW de capacidad eléctrica, cubierta TPO, certificación FM Global y LEED Gold</li>
          <li><strong>Túnel de viento Honeywell:</strong> Edificio de 20 m de altura, blower de 3,000 HP, ductos de placa estructural de 2.5 × 2.5 m, proyecto ejecutivo colaborativo con ingenieros de Honeywell</li>
          <li><strong>Puente Skyworks:</strong> 95 m de claro libre sin columnas, cimentación a 18 m en zona sísmica 4, colado en un solo día sin juntas de construcción</li>
          <li><strong>Planta Deacero:</strong> 50,000 m², cimentaciones a 15 m, precisión milimétrica en anclas de montaje para grúas industriales</li>
          <li><strong>10 MW solares Gulfstream:</strong> 20,000 m² en cubierta + 30,000 m² en carports, 3,200 toneladas de A/C con recuperación del 90% de agua</li>
        </ul>

        <p className="text-lg leading-relaxed mb-16">
          Evalúa la ingeniería detrás de estos proyectos. Cada uno fue diseñado y ejecutado
          por el mismo equipo de Baumex.
        </p>

        <hr className="border-border my-16" />

        {/* ── Diseño para cumplimiento ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Diseño de naves industriales en Mexicali con certificaciones FM Global, LEED y normativas internacionales
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Los departamentos de diseño de Baumex proyectan con estándares internacionales desde
          el primer trazo. Certificación Factory Mutual (FM Global) en muros, cubierta, estructura
          y sistema contraincendio — reduce significativamente la prima de seguro del cliente.
          Diseño conforme a NFPA, IBC y Normas Oficiales Mexicanas (NOM).
        </p>

        <p className="text-lg leading-relaxed mb-16">
          Asegura que tu nave en Mexicali cumpla los códigos que tu corporativo exige
          antes de firmar. Baumex es LEED Knowledgeable y calificación &quot;Recomendado&quot;
          por Honeywell en plataforma ISN.
        </p>

        <hr className="border-border my-16" />

        {/* ── CTA ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Solicita una consulta de diseño e ingeniería para tu nave industrial en Mexicali
        </h2>

        <p className="text-lg leading-relaxed">
          6 departamentos de ingeniería. 75 proyectos ejecutados. Un solo equipo
          que diseña y construye.
        </p>

      </div>
      {/* FIN COPY COMERCIAL */}

      <Mu />
      <Nu />
      <Xi />
      <Omicron />
      <Pi />
      <Rho />
      <Sigma />
      <Tau />
      <Upsilon />
      <Phi />
      <Chi />
      <Psi />
    </div>
  )
}

import { cn } from '@/lib/utils'
import {GridPoligonos2x1TextoVertical} from "@/components/brandpetram/grid-poligonos-2x1-texto-vertical";
import {GridPoligonos1x2TextoLargo} from "@/components/brandpetram/grid-poligonos-1x2-texto-largo";

/**
 * NOMBRE: sidebar-sticky-1.tsx
 * DESCRIPCIÓN: Layout de dos columnas con sidebar sticky - Cero Props
 *
 * El sidebar permanece fijo mientras el contenido principal hace scroll.
 * Edita directamente el contenido del sidebar y las secciones.
 *
 * IMPORTANTE: El contenedor padre NO debe tener overflow-hidden.
 * Usa overflow-x-clip si necesitas prevenir scroll horizontal.
 */

const sidebarText = {
  es: {
    pilares: '7 Pilares LEED',
    pilarLinks: [
      { href: '/constructora/leed/clima-extremo', label: 'Clima Extremo' },
      { href: '/constructora/leed/energia-atmosfera', label: 'Energía y Atmósfera' },
      { href: '/constructora/leed/sitios-sostenibles', label: 'Sitios Sostenibles y Agua' },
      { href: '/constructora/leed/calidad-ambiental', label: 'Calidad Ambiental Interior' },
      { href: '/constructora/leed/materiales-recursos', label: 'Materiales y Recursos' },
      { href: '/constructora/leed/sistemas-operativos', label: 'Sistemas Operativos' },
      { href: '/constructora/leed/proceso-certificacion', label: 'Proceso de Certificación' },
    ],
    datosClave: 'Datos Clave',
    datos: [
      '52,200 m² — nave más grande de Mexicali',
      'LEED Gold (en proceso)',
      '28 años en clima extremo',
      '75+ proyectos en Mexicali',
    ],
    constructora: 'Constructora',
    constructoraLinks: [
      { href: '/constructora/baumex', label: 'Baumex Constructora' },
      { href: '/constructora/build-to-suit', label: 'Build-to-Suit' },
      { href: '/constructora/proyectos-especializados', label: 'Proyectos Especializados' },
    ],
    h2_1: 'La decisión de negocio: por qué LEED',
    p1_1: 'Los corporativos globales que evalúan instalaciones en México están elevando sus estándares ambientales. En el contexto de nearshoring, donde empresas reubican operaciones de Asia a la frontera norte, una nave con certificación LEED reduce fricción en la aprobación corporativa y facilita el cumplimiento de reportes ESG.',
    p1_2: 'Gulfstream — Fortune 500, aeroespacial — ya está certificando LEED Gold su nave de 52,200 m² en Mexicali. No es un plan futuro. Es un proyecto en proceso, con Baumex ejecutando. Para el CFO o el VP de Real Estate que necesita justificar la inversión: una nave LEED no solo cumple requisitos corporativos — tiende a reducir costos operativos de energía y agua, y posiciona el activo en un mercado que cada vez valora más la sustentabilidad.',
    h2_2: 'El moat de clima extremo: por qué con Baumex en Mexicali',
    p2_1: 'Cualquier constructora puede leer el manual de LEED. Pero certificar a 48°C no es lo mismo que certificar a 25°C. Un error de cálculo en la envolvente térmica a esta temperatura dispara significativamente el consumo de climatización sobre el diseño original.',
    p2_2: 'Baumex tiene 28 años de datos de desempeño térmico en naves construidas en Mexicali — 75+ proyectos en la misma zona climática. No son modelos teóricos: son datos reales de operación en el desierto sonorense. La nave Gulfstream 550K opera hoy con envolvente calibrada para las condiciones reales del sitio — 48°C de temperatura exterior y 2,400 kWh/m² de radiación solar anual.',
    h2_3: 'Un solo equipo que diseña, construye y gestiona la certificación',
    p3_1: 'Baumex gestiona el proceso integrativo LEED v4 BD+C desde el predesign: registro, Design Review, gestión de evidencias en construcción y Construction Review con trazabilidad completa. No es un consultor externo que solo prepara documentos — es la misma constructora que diseña y ejecuta la obra.',
    p3_2: 'Si tu corporativo exige o está evaluando LEED para tu próxima instalación en Mexicali, habla con un equipo que lleva 28 años construyendo en esta zona climática. Cada pilar LEED tiene su propia página con datos técnicos reales — explora los detalles en las secciones de abajo.',
  },
  en: {
    pilares: '7 LEED Pillars',
    pilarLinks: [
      { href: '/construction/leed/extreme-climate', label: 'Extreme Climate' },
      { href: '/construction/leed/energy-atmosphere', label: 'Energy & Atmosphere' },
      { href: '/construction/leed/sustainable-sites', label: 'Sustainable Sites & Water' },
      { href: '/construction/leed/indoor-quality', label: 'Indoor Environmental Quality' },
      { href: '/construction/leed/materials-resources', label: 'Materials & Resources' },
      { href: '/construction/leed/operating-systems', label: 'Operating Systems' },
      { href: '/construction/leed/certification-process', label: 'Certification Process' },
    ],
    datosClave: 'Key Facts',
    datos: [
      '52,200 m² — largest building in Mexicali',
      'LEED Gold (in progress)',
      '28 years in extreme climate',
      '75+ projects in Mexicali',
    ],
    constructora: 'Construction',
    constructoraLinks: [
      { href: '/construction/baumex', label: 'Baumex Construction' },
      { href: '/construction/build-to-suit', label: 'Build-to-Suit' },
      { href: '/construction/specialized-projects', label: 'Specialized Projects' },
    ],
    h2_1: 'The business case: why LEED',
    p1_1: 'Global corporations evaluating facilities in Mexico are raising their environmental standards. In the nearshoring context, where companies relocate operations from Asia to the northern border, a LEED-certified building reduces friction in corporate approval and facilitates ESG reporting compliance.',
    p1_2: 'Gulfstream — Fortune 500, aerospace — is already pursuing LEED Gold certification for its 52,200 m² facility in Mexicali. It is not a future plan. It is a project in progress, with Baumex executing. For the CFO or VP of Real Estate who needs to justify the investment: a LEED building does not only meet corporate requirements — it tends to reduce energy and water operating costs and positions the asset in a market that increasingly values sustainability.',
    h2_2: 'The extreme climate moat: why Baumex in Mexicali',
    p2_1: 'Any construction firm can read the LEED manual. But certifying at 48°C is not the same as certifying at 25°C. A miscalculation in the thermal envelope at this temperature can significantly increase HVAC consumption over the original design.',
    p2_2: 'Baumex has 28 years of thermal performance data from buildings constructed in Mexicali — 75+ projects in the same climate zone. These are not theoretical models: they are real operating data from the Sonoran Desert. The Gulfstream 550K facility operates today with an envelope calibrated for actual site conditions — 48°C exterior temperature and 2,400 kWh/m² of annual solar radiation.',
    h2_3: 'One team that designs, builds, and manages the certification',
    p3_1: 'Baumex manages the LEED v4 BD+C integrative process from predesign: registration, Design Review, construction evidence management, and Construction Review with full traceability. It is not an external consultant that only prepares documents — it is the same construction firm that designs and executes the project.',
    p3_2: 'If your corporation requires or is evaluating LEED for your next facility in Mexicali, talk to a team with 28 years of building experience in this climate zone. Each LEED pillar has its own page with real technical data — explore the details in the sections below.',
  },
}

export function SidebarSticky1({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const t = sidebarText[lang]
  return (
    <section data-component="SidebarSticky1" data-component-file="src/components/brandpetram/sidebar-sticky-1.tsx" data-component-props="false" className="container mx-auto md:w-9/12 px-4 pb-16 lg:pb-24 ">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Sidebar - sticky */}
        <div
          className="sticky self-start hidden lg:block lg:col-span-3"
          style={{ top: '100px' }}
        >
          <div className="p-6 text-muted-foreground text-sm space-y-6">
            {/* 7 Pilares LEED */}
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                {t.pilares}
              </h3>
              <ul className="space-y-2">
                {t.pilarLinks.map((link) => (
                  <li key={link.href} className="leading-snug">
                    <a href={link.href} className="hover:text-blue-600 transition-colors leading-none">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Datos Clave */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                {t.datosClave}
              </h3>
              <ul className="space-y-2">
                <li className="leading-snug text-foreground font-medium">{t.datos[0]}</li>
                <li className="leading-snug">{t.datos[1]}</li>
                <li className="leading-snug">{t.datos[2]}</li>
                <li className="leading-snug">{t.datos[3]}</li>
              </ul>
            </div>

            {/* Constructora */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                {t.constructora}
              </h3>
              <ul className="space-y-2">
                {t.constructoraLinks.map((link) => (
                  <li key={link.href} className="leading-snug">
                    <a href={link.href} className="hover:text-blue-600 transition-colors leading-none">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="lg:col-span-9">
          <article className="space-y-7">
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                {t.h2_1}
              </h2>
              <p className="text-muted-foreground">
                {t.p1_1}
              </p>
              <p className="text-muted-foreground">
                {t.p1_2}
              </p>
              <GridPoligonos2x1TextoVertical />
            </section>
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                {t.h2_2}
              </h2>
              <p className="mb-4 text-muted-foreground">
                {t.p2_1}
              </p>
              <p className="mb-4 text-muted-foreground">
                {t.p2_2}
              </p>
              <GridPoligonos1x2TextoLargo />
            </section>
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                {t.h2_3}
              </h2>
              <p className="mb-4 text-muted-foreground">
                {t.p3_1}
              </p>
              <p className="mb-4 text-muted-foreground">
                {t.p3_2}
              </p>
            </section>

          </article>
        </div>
      </div>
    </section>
  )
}

export default SidebarSticky1

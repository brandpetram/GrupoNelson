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

export function SidebarSticky1() {
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
                7 Pilares LEED
              </h3>
              <ul className="space-y-2">
                <li className="leading-snug">
                  <a href="/constructora/leed/clima-extremo" className="hover:text-blue-600 transition-colors leading-none">
                    Clima Extremo
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/constructora/leed/energia-atmosfera" className="hover:text-blue-600 transition-colors leading-none">
                    Energía y Atmósfera
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/constructora/leed/sitios-sostenibles" className="hover:text-blue-600 transition-colors leading-none">
                    Sitios Sostenibles y Agua
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/constructora/leed/calidad-ambiental" className="hover:text-blue-600 transition-colors leading-none">
                    Calidad Ambiental Interior
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/constructora/leed/materiales-recursos" className="hover:text-blue-600 transition-colors leading-none">
                    Materiales y Recursos
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/constructora/leed/sistemas-operativos" className="hover:text-blue-600 transition-colors leading-none">
                    Sistemas Operativos
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/constructora/leed/proceso-certificacion" className="hover:text-blue-600 transition-colors leading-none">
                    Proceso de Certificación
                  </a>
                </li>
              </ul>
            </div>

            {/* Datos Clave */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                Datos Clave
              </h3>
              <ul className="space-y-2">
                <li className="leading-snug text-foreground font-medium">52,200 m² — nave más grande de Mexicali</li>
                <li className="leading-snug">LEED Gold (en proceso)</li>
                <li className="leading-snug">28 años en clima extremo</li>
                <li className="leading-snug">75+ proyectos en Mexicali</li>
              </ul>
            </div>

            {/* Constructora */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                Constructora
              </h3>
              <ul className="space-y-2">
                <li className="leading-snug">
                  <a href="/constructora/baumex" className="hover:text-blue-600 transition-colors leading-none">
                    Baumex Constructora
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/constructora/build-to-suit" className="hover:text-blue-600 transition-colors leading-none">
                    Build-to-Suit
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/constructora/proyectos-especializados" className="hover:text-blue-600 transition-colors leading-none">
                    Proyectos Especializados
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="lg:col-span-9">
          <article className="space-y-7">
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                La decisión de negocio: por qué LEED
              </h2>
              <p className="text-muted-foreground">
                Los corporativos globales que evalúan instalaciones en México están elevando sus estándares ambientales. En el contexto de nearshoring, donde empresas reubican operaciones de Asia a la frontera norte, una nave con certificación LEED reduce fricción en la aprobación corporativa y facilita el cumplimiento de reportes ESG.
              </p>
              <p className="text-muted-foreground">
                Gulfstream — Fortune 500, aeroespacial — ya está certificando LEED Gold su nave de 52,200 m² en Mexicali. No es un plan futuro. Es un proyecto en proceso, con Baumex ejecutando. Para el CFO o el VP de Real Estate que necesita justificar la inversión: una nave LEED no solo cumple requisitos corporativos — tiende a reducir costos operativos de energía y agua, y posiciona el activo en un mercado que cada vez valora más la sustentabilidad.
              </p>
              <GridPoligonos2x1TextoVertical />
            </section>
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                El moat de clima extremo: por qué con Baumex en Mexicali
              </h2>
              <p className="mb-4 text-muted-foreground">
                Cualquier constructora puede leer el manual de LEED. Pero certificar a 48°C no es lo mismo que certificar a 25°C. Un error de cálculo en la envolvente térmica a esta temperatura dispara significativamente el consumo de climatización sobre el diseño original.
              </p>
              <p className="mb-4 text-muted-foreground">
                Baumex tiene 28 años de datos de desempeño térmico en naves construidas en Mexicali — 75+ proyectos en la misma zona climática. No son modelos teóricos: son datos reales de operación en el desierto sonorense. La nave Gulfstream 550K opera hoy con envolvente calibrada para las condiciones reales del sitio — 48°C de temperatura exterior y 2,400 kWh/m² de radiación solar anual.
              </p>
              <GridPoligonos1x2TextoLargo />
            </section>
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                Un solo equipo que diseña, construye y gestiona la certificación
              </h2>
              <p className="mb-4 text-muted-foreground">
                Baumex gestiona el proceso integrativo LEED v4 BD+C desde el predesign: registro, Design Review, gestión de evidencias en construcción y Construction Review con trazabilidad completa. No es un consultor externo que solo prepara documentos — es la misma constructora que diseña y ejecuta la obra.
              </p>
              <p className="mb-4 text-muted-foreground">
                Si tu corporativo exige o está evaluando LEED para tu próxima instalación en Mexicali, habla con un equipo que lleva 28 años construyendo en esta zona climática. Cada pilar LEED tiene su propia página con datos técnicos reales — explora los detalles en las secciones de abajo.
              </p>
            </section>

          </article>
        </div>
      </div>
    </section>
  )
}

export default SidebarSticky1

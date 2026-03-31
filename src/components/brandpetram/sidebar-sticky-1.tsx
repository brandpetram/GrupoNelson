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
                <li className="leading-snug">10 MW paneles solares</li>
                <li className="leading-snug">LEED Gold (objetivo)</li>
                <li className="leading-snug">FM Global certificada</li>
                <li className="leading-snug">28 años de experiencia</li>
                <li className="leading-snug">75+ proyectos</li>
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
                Clima Extremo y Energía: construir LEED a +45°C en Mexicali
              </h2>
              <p className="text-muted-foreground">
                Mexicali supera los 48°C en verano con radiación solar de 2,400 kWh/m² anuales. Un diseño LEED genérico colapsa operativamente aquí. Baumex calibra la envolvente térmica específicamente para el desierto sonorense: R-19 en muros, R-30 en cubierta, cubiertas reflectivas SRI mayor a 78 y sellado al 100% en muelles de carga.
              </p>
              <p className="text-muted-foreground">
                Gulfstream 550K opera con 3,200 toneladas de A/C de mínimo consumo distribuidas en 42 manejadoras, con recuperación del 90% del agua de condensación. 10 MW de paneles solares en 50,000 m² (cubierta + carports). 20 MW de capacidad eléctrica instalada, 50% energía solar limpia. Ahorro documentado del 35-50% frente a nave convencional.
              </p>
              <GridPoligonos2x1TextoVertical />
            </section>
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                Agua, Materiales y Calidad Ambiental: los créditos que definen la certificación
              </h2>
              <p className="mb-4 text-muted-foreground">
                Mexicali está en una de las regiones con mayor estrés hídrico de Norteamérica. Nelson II opera con tanque contraincendio de 360,000 galones centralizado que ahorra al inquilino el 60% del costo. Captación pluvial, fixtures de ultra-bajo flujo y recuperación de condensación reducen el consumo total de agua un 40%.
              </p>
              <p className="mb-4 text-muted-foreground">
                Cada material estructural llega con Declaración Ambiental de Producto (EPD) verificada por tercero. Acero con contenido reciclado documentado. Abastecimiento regional dentro de 160 km. Gestión de residuos con desvío mínimo del 50% de vertedero. Pinturas con COV por debajo de 50 g/L, ventilación ASHRAE 62.1 con filtración para polvo del desierto, y confort térmico controlado para operación industrial continua.
              </p>
              <GridPoligonos1x2TextoLargo />
            </section>
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                Sistemas Inteligentes y Proceso de Certificación LEED en Mexicali
              </h2>
              <p className="mb-4 text-muted-foreground">
                Building Management System con submedición independiente por circuito: HVAC, iluminación, bombas, fotovoltaicos y consumo hídrico monitoreados en tiempo real. Detección de ineficiencias en horas, no en meses. Dashboards que alimentan reportes ESG sin esfuerzo manual — lo que empresas Fortune 500 como Gulfstream y Honeywell exigen en sus instalaciones.
              </p>
              <p className="mb-4 text-muted-foreground">
                Baumex gestiona el proceso integrativo LEED v4 BD+C desde el predesign: registro, Design Review, gestión de evidencias en construcción y Construction Review con trazabilidad completa en LEED Online. Gulfstream 550K en 53-55 puntos (Silver), apuntando a Gold con los 10 MW solares. 28 años de experiencia. 75+ proyectos. Un solo equipo que diseña, construye y certifica.
              </p>
            </section>

          </article>
        </div>
      </div>
    </section>
  )
}

export default SidebarSticky1

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
    <section className="container mx-auto md:w-9/12 px-4 pb-16 lg:pb-24 ">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Sidebar - sticky */}
        <div
          className="sticky self-start hidden lg:block lg:col-span-3"
          style={{ top: '100px' }}
        >
          <div className="p-6 text-muted-foreground text-sm space-y-6">
            {/* Servicios */}
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                Servicios
              </h3>
              <ul className="space-y-2">
                <li className="leading-snug">
                  <a href="/conveyors-industriales/mantenimiento" className="hover:text-orange-500 transition-colors leading-none">
                    Mantenimiento a Conveyors
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/refacciones" className="hover:text-orange-500 transition-colors leading-none">
                    Refacciones y kits
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/built-to-suit" className="hover:text-orange-500 transition-colors leading-none">
                    Sistemas built to suit
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/integracion" className="hover:text-orange-500 transition-colors leading-none">
                    Integración de nuevas líneas
                  </a>
                </li>
              </ul>
            </div>

            {/* Marcas */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                Marcas
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="leading-snug">
                  <a href="/conveyors-industriales/dorner" className="hover:text-orange-500 transition-colors leading-none">
                    Dorner
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/flexlink" className="hover:text-orange-500 transition-colors leading-none">
                    FlexLink
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/rapid-industries" className="hover:text-orange-500 transition-colors leading-none">
                    Rapid Industries
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/pacline" className="hover:text-orange-500 transition-colors leading-none">
                    Pacline
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/ambaflex" className="hover:text-orange-500 transition-colors leading-none">
                    Ambaflex
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/hytrol" className="hover:text-orange-500 transition-colors leading-none">
                    Hytrol
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/intralox" className="hover:text-orange-500 transition-colors leading-none">
                    Intralox
                  </a>
                </li>
              </ul>
            </div>

            {/* Soluciones */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                Soluciones
              </h3>
              <ul className="space-y-2">
                <li className="leading-snug">
                  <a href="/conveyors-industriales/industria-alimenticia" className="hover:text-orange-500 transition-colors leading-none">
                    Para Industria Alimenticia
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/industria-manufactura" className="hover:text-orange-500 transition-colors leading-none">
                    Para Industria Manufacturera
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/conveyors-industriales/industria-automotriz" className="hover:text-orange-500 transition-colors leading-none">
                    Para Industria Automotriz
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="lg:col-span-9">
          <article className="space-y-7">
            <section className="bg-muted/30 rounded-lg space-y-7 text-xl leading-relaxed">
              <h2 className=" text-2xl font-bold text-foreground">
                Mantenimiento a Conveyors
              </h2>
              <p className="text-muted-foreground">
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,

              </p>
              <GridPoligonos2x1TextoVertical />
            </section>
            <section className="bg-muted/30 rounded-lg space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
             Integración de Nuevas Líneas de Conveyors
              </h2>
              <p className="mb-4 text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

              </p>
              <p className="mb-4 text-muted-foreground">

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.

                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.


              </p>
              <GridPoligonos1x2TextoLargo />
            </section>
            <section className="bg-muted/30 rounded-lg space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                Refacciones y Kits para Converyors
              </h2>
              <p className="mb-4 text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

              </p>
              <p className="mb-4 text-muted-foreground">

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.

                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.


              </p>

            </section>

          </article>
        </div>
      </div>
    </section>
  )
}

export default SidebarSticky1

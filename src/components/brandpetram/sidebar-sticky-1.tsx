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
            {/* Lorem en Ipsum */}
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                Lorem en Ipsum
              </h3>
              <ul className="space-y-2">
                <li className="leading-snug">
                  <a href="/lorem/ipsum-ii" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem Ipsum II
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/ipsum-i" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem Ipsum I
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/ipsum-iii" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem Ipsum III
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/ipsum-iv" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem Ipsum IV
                  </a>
                </li>
              </ul>
            </div>

            {/* Servicios */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                Servicios
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="leading-snug">
                  <a href="/lorem/to-sit" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem to Sit
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/en-amet" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem en Amet
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/consectetur" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem consectetur
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/adipiscing" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem de Adipiscing
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/disponible" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem Disponible
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/venta" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem en Venta
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/ipsum" className="hover:text-orange-500 transition-colors leading-none">
                    Todos los Lorem
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
                  <a href="/lorem/manufactura" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem Manufacturera
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/logistica" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem y Distribución
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/lorem/tecnologia" className="hover:text-orange-500 transition-colors leading-none">
                    Lorem y Electrónica
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
              <h2 className=" text-2xl font-bold text-foreground">
                Lorem de Ipsum Consectetur
              </h2>
              <p className="text-muted-foreground">
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,

              </p>
              <GridPoligonos2x1TextoVertical />
            </section>
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
             Lorem de Ipsum Consectetur
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
            <section className="space-y-7 text-xl leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground">
                Lorem de Ipsum Adipiscing
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

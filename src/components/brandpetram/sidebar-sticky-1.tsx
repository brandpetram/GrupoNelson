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
            {/* Parques en Mexicali */}
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-3 leading-none">
                Parques en Mexicali
              </h3>
              <ul className="space-y-2">
                <li className="leading-snug">
                  <a href="/parques-industriales-mexicali/nelson-ii" className="hover:text-orange-500 transition-colors leading-none">
                    Parque Nelson II
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/parques-industriales-mexicali/nelson-i" className="hover:text-orange-500 transition-colors leading-none">
                    Parque Nelson I
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/parques-industriales-mexicali/el-vigia-i" className="hover:text-orange-500 transition-colors leading-none">
                    Parque El Vigía I
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/parques-industriales-mexicali/el-vigia-ii" className="hover:text-orange-500 transition-colors leading-none">
                    Parque El Vigía II
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
                  <a href="/servicios/built-to-suit" className="hover:text-orange-500 transition-colors leading-none">
                    Built to Suit
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/servicios/llave-en-mano" className="hover:text-orange-500 transition-colors leading-none">
                    Llave en Mano
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/servicios/arrendamiento" className="hover:text-orange-500 transition-colors leading-none">
                    Arrendamiento
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/servicios/desarrollo-terrenos" className="hover:text-orange-500 transition-colors leading-none">
                    Desarrollo de Terrenos
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/inventario/naves-disponibles" className="hover:text-orange-500 transition-colors leading-none">
                    Naves Disponibles
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/inventario/terrenos" className="hover:text-orange-500 transition-colors leading-none">
                    Terrenos en Venta
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/parques-industriales-mexicali" className="hover:text-orange-500 transition-colors leading-none">
                    Todos los Parques
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
                  <a href="/industrias/manufactura" className="hover:text-orange-500 transition-colors leading-none">
                    Industria Manufacturera
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/industrias/logistica" className="hover:text-orange-500 transition-colors leading-none">
                    Logística y Distribución
                  </a>
                </li>
                <li className="leading-snug">
                  <a href="/industrias/tecnologia" className="hover:text-orange-500 transition-colors leading-none">
                    Tecnología y Electrónica
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
                Desarrollo de Parques Industriales
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
             Construcción de Naves Industriales
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
                Arrendamiento de Naves Industriales
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

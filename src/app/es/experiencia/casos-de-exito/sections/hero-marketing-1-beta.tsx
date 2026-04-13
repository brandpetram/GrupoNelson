/**
 * HeroMarketing1Beta
 *
 * Evolución de HeroMarketing1 para casos-de-exito.
 * Diferencias vs original:
 * - Imagen hero ligeramente menor width
 * - Caja transparente ligeramente mayor width
 * - 2 CTAs arriba del H1
 * - Div inferior: 2 columnas (SVG izq, H2 + P der)
 * - Sin borde debajo del H1
 * - Jerarquía: H1 (en caja) + H2 + P (en div inferior)
 *
 * Spec: docs/estrategia/direccion-visual-casos-de-exito.md
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImagenRectangulo } from "@/components/ui/brandpetram/imagen-rectangulo";
import { EmblemaGrupoNelson } from "@/components/ui/brandpetram/emblema-nelson";
import { PoligonoIcono1 } from "@/components/ui/brandpetram/poligono-icono-1";

export function HeroMarketing1Beta() {
  return (
    <div
      data-component="HeroMarketing1Beta"
      data-component-file="src/app/(site)/experiencia/casos-de-exito/sections/hero-marketing-1-beta.tsx"
    >
      {/* Imagen de fondo con overlay y grid — ligeramente menor width */}
      <div className="mx-auto w-full">
        <ImagenRectangulo
          src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-422.jpg"
          alt="Naves industriales Grupo Nelson en Mexicali"
          className="aspect-square md:aspect-21/9 rounded-sm"
          overlayOpacity={0.5}
          gridConfig={{
            strokeColor: "stroke-white/40",
            highlightColor: "fill-white/10",
            showHighlights: true,
            gridSize: 100,
            fadePosition: "center",
            fadeRadius: "24rem",
            animate: {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1.2, delay: 1.2, ease: "easeOut" },
            },
          }}
        />
      </div>

      {/* Caja de texto superpuesta — ligeramente mayor width + CTAs arriba del H1 */}
      <div className="relative z-10 -mt-32 md:-mt-24 xl:-mt-80">
        <div className="rounded-2xl bg-background/80 px-6 md:px-12 1200:mx-[10rem] 1920:mx-[20rem] py-12 md:py-16 lg:py-20">
          {/* CTAs arriba del título */}
          <div className="">
            <div className="flex flex-wrap items-center gap-8 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-base px-8 py-6 font-semibold"
              >
                <Link href="/contacto">Comienza aquí</Link>
              </Button>
              <Link
                href="/experiencia/excelencia-operativa"
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-blue-600 transition-colors py-6"
              >
                Conocer más
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* H1 — sin borde debajo */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none tracking-tight text-foreground">
              Las empresas más exigentes que operan en Mexicali ya eligieron a
              Grupo Nelson — y la mayoría se quedó.
            </h1>
          </div>
        </div>
      </div>

      {/* Div inferior — 2 columnas: SVG izq + H2 y P der */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-[5rem] ">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start px-4 md:px-12 lg:px-20 xl:px-28">
          {/* Columna izquierda: SVG / Emblema */}
          <div className="flex-shrink-0">
            <PoligonoIcono1
              icon={
                <EmblemaGrupoNelson className="w-full h-full" />
              }
              backgroundColor="bg-blue-500 to-blue-600 bg-linear-to-br"
              iconColor="text-white"
              iconSize="size-16 md:size-24 lg:size-28"
              hoverEffect="rotate"
              className="rounded-sm p-5 md:p-7 lg:p-9"
            />
          </div>

          {/* Columna derecha: H2 + P */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground">
              Lo que los estándares de estos clientes exigen dice más sobre
              Grupo Nelson que cualquier cosa que Nelson pueda decir sobre sí
              mismo.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
              Los casos de éxito no son testimoniales editados — son hechos
              verificables con nombres, números y décadas de historia.
              Gulfstream lleva 35 años. Honeywell lleva 30. Relaciones de
              largo plazo donde los clientes expanden e inician nuevos proyectos.
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-base py-6 font-semibold"
              >
                <Link href="/contacto">Solicita una consulta</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

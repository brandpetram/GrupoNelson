/**
 * SplitStickyCasos
 *
 * Layout de 2 columnas: texto scrolleable (izq) + imagen vertical sticky (der) + 2 CTAs.
 * Contiene 2 casos (Gulfstream dominante + Honeywell soporte) + DHL cierre subordinado.
 *
 * Spec: docs/estrategia/direccion-visual-casos-de-exito.md — Bloque 2
 */

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SplitStickyCasos() {
  return (
    <section
      data-component="SplitStickyCasos"
      data-component-file="src/app/experiencia/casos-de-exito/sections/split-sticky-casos.tsx"
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-20 md:py-28 lg:py-32"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 px-4 md:px-12 lg:px-0 xl:px-8">
        {/* ── Columna izquierda: texto scrolleable ── */}
        <div className="flex-1 lg:max-w-[55%] space-y-20">
          {/* ═══ Caso 1: Gulfstream Aerospace (dominante) ═══ */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Caso de Éxito — Gulfstream Aerospace
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
              Cuando la confianza de 35 años elimina la licitación
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Gulfstream es Fortune 500. Manufactura aeroespacial. Una de las
              empresas con estándares de producción más exigentes del mundo —
              estándares corporativos de seguridad, calidad y compliance que
              descalifican automáticamente a la mayoría de los proveedores.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Después del terremoto de 7.2 en 2010 que dañó su planta
              existente, Gulfstream confió en Baumex para construir la nave
              más grande de la ciudad. No buscaron alternativas. No abrieron
              licitación. Asignaron directamente.
            </p>

            {/* Datos ancla — cada fact aparece UNA sola vez */}
            <div className="space-y-4 border-l-2 border-blue-600/30 pl-6">
              <div>
                <p className="font-semibold text-foreground">
                  5 naves construidas por Baumex
                </p>
                <p className="text-muted-foreground">
                  Incluyendo la nave de 52,200 m² — la más grande de
                  Mexicali — construida después del terremoto de 2010.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  De 5,000 a 550,000 pies cuadrados
                </p>
                <p className="text-muted-foreground">
                  Gulfstream empezó con una operación pequeña en El Vigía y
                  hoy ocupa la nave más grande de la ciudad. Múltiples
                  expansiones a lo largo de diferentes generaciones de parques
                  de Grupo Nelson.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Asignación directa sin licitación
                </p>
                <p className="text-muted-foreground">
                  Para su expansión más reciente, Gulfstream no abrió
                  licitación. Cuando llevas 35 años con el mismo proveedor,
                  el proceso de selección ya no es necesario.
                </p>
              </div>
            </div>
          </div>

          {/* ── Transición Gulfstream → Honeywell ── */}
          <p className="text-lg leading-relaxed text-muted-foreground italic">
            35 años con el mismo cliente es una prueba difícil de ignorar.
            Pero existe otra: los filtros que un constructor debe superar
            antes de siquiera pisar la obra.
          </p>

          {/* ═══ Caso 2: Honeywell Aerospace (soporte fuerte) ═══ */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Caso de Éxito — Honeywell Aerospace
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
              El filtro más exigente ya calificó a Baumex como
              &quot;Recomendado&quot;
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Honeywell Aerospace es un corporativo global cuyos estándares de
              selección de contratistas pasan por la plataforma ISN — un filtro
              de seguridad, documentación y calidad que la mayoría de
              constructoras locales no supera. Para siquiera trabajar en sus
              instalaciones, necesitas calificación ISN activa.
            </p>

            {/* Datos ancla Honeywell */}
            <div className="space-y-4 border-l-2 border-blue-600/30 pl-6">
              <div>
                <p className="font-semibold text-foreground">
                  30+ años de relación
                </p>
                <p className="text-muted-foreground">
                  Múltiples expansiones — Mission 1, 2 y 3 — construidas por
                  Baumex a lo largo de tres décadas de relación continua.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Calificación ISN &quot;Recomendado&quot;
                </p>
                <p className="text-muted-foreground">
                  La calificación más alta que la plataforma permite. No es
                  solo que Baumex cumpla los estándares de Honeywell — tiene
                  la calificación máxima del sistema que los mide.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Colaboración técnica directa
                </p>
                <p className="text-muted-foreground">
                  Cuando Honeywell necesitó un túnel de viento aeroespacial,
                  el proyecto ejecutivo se elaboró conjuntamente entre
                  ingenieros de Honeywell e ingenieros de Baumex. Eso solo
                  pasa cuando el nivel de confianza es alto.
                </p>
              </div>
            </div>
          </div>

          {/* ═══ DHL + Contexto subordinado ═══ */}
          <div className="border-t border-border pt-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              No es solo aeroespacial.{" "}
              <strong className="text-foreground">DHL</strong> eligió Grupo
              Nelson para su operación logística en Mexicali — y regresó
              después del primer proyecto.{" "}
              <strong className="text-foreground">
                30 corporaciones internacionales
              </strong>{" "}
              operan hoy en parques de Grupo Nelson. La mayoría regresa,
              expande o inicia nuevos proyectos.
            </p>
          </div>

          {/* ═══ Cierre argumentativo ═══ */}
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              Si Gulfstream no necesitó buscar alternativas en 35 años, y
              Honeywell le dio a Baumex la calificación más alta posible —
              el nivel ya está demostrado.
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Lo que los estándares de estos clientes exigen dice más sobre
              Grupo Nelson que cualquier cosa que Nelson pueda decir sobre
              sí mismo.
            </p>
          </div>
        </div>

        {/* ── Columna derecha: imagen sticky + CTAs ── */}
        <div className="hidden lg:block lg:w-[40%] xl:w-[38%]">
          <div className="sticky top-8">
            <div className="overflow-hidden rounded-sm">
              <Image
                src="/honeywell/honeywell-en-parque-industrial-de-mexicali-3.jpeg"
                alt="Nave industrial Honeywell en parque de Grupo Nelson, Mexicali"
                width={600}
                height={1200}
                className="w-full object-cover aspect-[3/4] rounded-sm"
              />
            </div>

            {/* 2 CTAs debajo de la imagen */}
            <div className="flex flex-col gap-3 mt-6">
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-base py-6 font-semibold"
              >
                <Link href="/contacto">Solicita una consulta</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full text-base py-6 font-semibold"
              >
                <Link href="/experiencia">Ver experiencia completa</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

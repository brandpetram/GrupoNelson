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
          {/* ═══ Caso 1: Gulfstream (dominante) ═══ */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Caso de Éxito — Gulfstream
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
              Llevan <strong className="text-foreground">35 años</strong>{" "}
              trabajando con Grupo Nelson en Mexicali. 5 naves construidas por
              Baumex. Después del terremoto de 7.2 en 2010, confiaron en Baumex
              para construir la nave más grande de la ciudad — 52,200 m².
            </p>

            {/* Datos ancla como bullets con label bold */}
            <div className="space-y-4 border-l-2 border-blue-600/30 pl-6">
              <div>
                <p className="font-semibold text-foreground">
                  35 años de relación continua
                </p>
                <p className="text-muted-foreground">
                  Desde finales de los 80, Gulfstream ha confiado en Grupo
                  Nelson para cada expansión de su operación en Mexicali.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  5 naves construidas por Baumex
                </p>
                <p className="text-muted-foreground">
                  Incluyendo la nave de 52,200 m² — la más grande de la ciudad —
                  construida después del terremoto de 2010.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Asignación directa sin licitación
                </p>
                <p className="text-muted-foreground">
                  Para la quinta expansión, Gulfstream no abrió licitación. 35
                  años de relación eliminan el proceso de selección.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  De 5,000 a 550,000 pies cuadrados
                </p>
                <p className="text-muted-foreground">
                  Gulfstream empezó con una operación pequeña en El Vigía y hoy
                  ocupa la nave más grande de Mexicali. Múltiples expansiones a
                  lo largo de diferentes generaciones de parques de Grupo Nelson.
                </p>
              </div>
            </div>
          </div>

          {/* ═══ Caso 2: Honeywell (soporte) ═══ */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Caso de Éxito — Honeywell Aerospace
            </p>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              El filtro más exigente ya calificó a Baumex como
              &quot;Recomendado&quot;
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Honeywell Aerospace es un corporativo global con estándares de
              selección de contratistas que pasan por la plataforma ISN — un
              filtro de seguridad, documentación y calidad que la mayoría de
              constructoras locales no supera.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Baumex no solo tiene la calificación — tiene la calificación{" "}
              <strong className="text-foreground">
                &quot;Recomendado&quot;
              </strong>{" "}
              por Honeywell en la plataforma ISN. La más alta que el sistema
              permite. Más de{" "}
              <strong className="text-foreground">30 años</strong> de relación.
              Múltiples expansiones: Mission 1, 2 y 3.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Cuando Honeywell necesitó un túnel de viento aeroespacial, el
              proyecto ejecutivo se elaboró conjuntamente entre ingenieros de
              Honeywell e ingenieros de Baumex. Colaboración técnica directa.
            </p>
          </div>

          {/* ═══ DHL + Cierre (subordinado) ═══ */}
          <div className="space-y-6 border-t border-border pt-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              No es solo aeroespacial.{" "}
              <strong className="text-foreground">DHL</strong> eligió Grupo
              Nelson para su operación logística en Mexicali — y regresó después
              del primer proyecto.{" "}
              <strong className="text-foreground">
                30 corporaciones internacionales
              </strong>{" "}
              operan hoy en parques de Grupo Nelson. La mayoría regresa, expande
              o inicia nuevos proyectos.
            </p>

            {/* CTA de cierre */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                El próximo caso puede ser el tuyo
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Si las empresas más exigentes se quedaron, tu proyecto también
                tiene donde crecer.
              </p>
            </div>
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

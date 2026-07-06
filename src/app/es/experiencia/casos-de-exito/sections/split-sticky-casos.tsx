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
      data-component-file="src/app/(site)/experiencia/casos-de-exito/sections/split-sticky-casos.tsx"
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-20 md:py-28 lg:py-32"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 px-4 md:px-12 lg:px-0 xl:px-8">
        {/* ── Columna izquierda: texto scrolleable ── */}
        <div className="flex-1 lg:max-w-[55%] space-y-20">
          {/* ═══ Caso 1: Gulfstream Aerospace (dominante) ═══ */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Caso de Éxito 1
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
              Gulfstream Aerospace: 40 Años Confiando en Nelson
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Operar con un miembro de Fortune 500 como Gulfstream implica
              cumplir con los estándares corporativos más elevados de la
              industria aeroespacial. Cumplir con sus estrictos niveles de
              seguridad, calidad y cumplimiento no solo nos llena de orgullo,
              sino que nos consolida como un socio estratégico capaz de
              respaldar a líderes globales.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Después del terremoto de 7.2 en 2010 que dañó su planta
              existente, Gulfstream confió en la constructora interna de
              Grupo Nelson para construir su nave más grande de la ciudad.
              No buscaron alternativas. No abrieron licitación. Asignaron
              directamente.
            </p>

            {/* Datos ancla — cada fact aparece UNA sola vez */}
            <div className="space-y-4 border-l-2 border-blue-600/30 pl-6">
              <div>
                <p className="font-semibold text-foreground">
                  5 naves construidas por nuestro equipo
                </p>
                <p className="text-muted-foreground">
                  Incluyendo la nave de 52,200 m² — la más grande de
                  Mexicali — construida después del terremoto de 2010.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  +1M de pies cuadrados
                </p>
                <p className="text-muted-foreground">
                  Lo que comenzó con una operación pequeña en el Parque
                  Industrial El Vigía ha evolucionado de manera extraordinaria
                  a lo largo de los años. Gulfstream ha consolidado más de 1
                  millón de pies cuadrados con nosotros, expandiendo sus
                  instalaciones de manera constante.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Asignación directa sin licitación
                </p>
                <p className="text-muted-foreground">
                  Para su expansión más reciente, Gulfstream no abrió
                  licitación. Cuando llevas 40 años con el mismo proveedor,
                  el proceso de selección ya no es necesario.
                </p>
              </div>
            </div>
          </div>

          {/* ── Transición Gulfstream → Honeywell ── */}
          <p className="text-lg leading-relaxed text-muted-foreground italic">
            40 años con el mismo cliente es una prueba difícil de ignorar.
            Pero existe otra: los filtros que un constructor debe superar
            antes de siquiera pisar la obra.
          </p>

          {/* ═══ Caso 2: Honeywell Aerospace (soporte fuerte) ═══ */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Caso de Éxito 2
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
              Honeywell Aerospace: Corporación Global que Confía en los
              Expertos en Parques Industriales
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Honeywell Aerospace es un corporativo global cuyos estándares de
              selección de contratistas pasan por ISN — la plataforma
              internacional más estricta en seguridad y calidad. Contar con una
              certificación activa en este sistema nos consolida dentro de un
              grupo selecto de proveedores de nivel mundial.
            </p>

            {/* Datos ancla Honeywell */}
            <div className="space-y-4 border-l-2 border-blue-600/30 pl-6">
              <div>
                <p className="font-semibold text-foreground">
                  40+ años de relación
                </p>
                <p className="text-muted-foreground">
                  Nuestra alianza de más de 40 años se respalda con hechos:
                  múltiples expansiones exitosas, incluyendo los proyectos
                  clave —Mission 1, 2 y 3—, construidos de principio a fin por
                  nuestra constructora.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Calificación ISN &quot;Recomendado&quot;
                </p>
                <p className="text-muted-foreground">
                  Nuestra constructora no solo cumple con las normas
                  básicas, sino que ostenta la calificación máxima permitida
                  por la plataforma. Este nivel de «Recomendado» avala nuestro
                  compromiso absoluto con la excelencia operativa.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Colaboración técnica directa
                </p>
                <p className="text-muted-foreground">
                  El reflejo más puro de esta gran confianza fue el desarrollo
                  del túnel de viento aeroespacial: un proyecto de alta
                  ingeniería elaborado hombro a hombro entre los equipos de
                  ingenieros de Honeywell y nuestra constructora,
                  demostrando una sinergia técnica extraordinaria.
                </p>
              </div>
            </div>
          </div>

          {/* ═══ DHL + Contexto subordinado ═══ */}
          <div className="border-t border-border pt-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hoy en día,{" "}
              <strong className="text-foreground">
                más de 30 corporaciones internacionales
              </strong>{" "}
              como DHL, Vertiv, Envista, Aqualung e Intuitive Surgical —por
              nombrar algunas— operan con éxito en los parques industriales de
              Grupo Nelson. Nuestro mayor orgullo es que la gran mayoría elige
              expandirse o iniciar nuevos proyectos con nosotros, reflejando un
              índice de fidelidad único en el mercado.
            </p>
          </div>

          {/* ═══ Cierre argumentativo ═══ */}
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              Si Gulfstream no necesitó buscar alternativas en 40 años, y
              en las instalaciones de Honeywell la plataforma ISN le dio a
              nuestra constructora la calificación más alta posible — el
              nivel ya está demostrado.
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nuestra mejor carta de presentación no es lo que podamos decir de
              nosotros mismos, sino la rigurosidad de los estándares que
              nuestros clientes globales nos exigen. Que corporaciones de este
              nivel confíen en nuestro sistema de calidad, seguridad y
              cumplimiento es el testimonio más fiel de la excelencia de Grupo
              Nelson.
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
                asChild
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-base py-6 font-semibold"
              >
                <Link href="/contacto">Solicita una consulta</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full text-base py-6 font-semibold"
              >
                <Link href="/experiencia/excelencia-operativa">Ver experiencia completa</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

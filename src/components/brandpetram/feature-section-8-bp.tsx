/**
 * Componente original: shadcn/pro-blocks feature-section-8
 * Brandpetramizado: 21 de marzo de 2026
 * Proyecto: Grupo Nelson
 *
 * Este componente fue copiado y adaptado con los 13 breakpoints granulares
 * aplicados a todos los textos y widths, leading-none y tracking-tighter en headings,
 * rounded-xs, y botones bg-blue-600.
 */

"use client";

import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/feature-section-8/tagline";
import Link from "next/link";

export function FeatureSection8BP() {
  return (
    <section data-component="FeatureSection8BP" data-component-file="src/components/brandpetram/feature-section-8-bp.tsx" data-component-props="false" className="bg-background py-[3rem] 360:py-[3rem] 393:py-[3.5rem] 430:py-[3.5rem] 768:py-[4rem] 834:py-[4rem] 1024:py-[4.5rem] 1200:py-[4.5rem] 1280:py-[5rem] 1366:py-[5rem] 1440:py-[5.5rem] 1536:py-[5.5rem] 1728:py-[6rem] 1920:py-[6rem]">
      <div className="px-[1.5rem] 360:px-[1.5rem] 393:px-[1.5rem] 430:px-[1.5rem] 768:px-[2rem] 834:px-[2rem] 1024:px-[2.5rem] 1200:px-[3rem] 1280:px-[3.5rem] 1366:px-[4rem] 1440:px-[4.5rem] 1536:px-[5rem] 1728:px-[6rem] 1920:px-[7rem] container mx-auto w-11/12 flex flex-col items-center gap-[2rem] 768:gap-[2.5rem] 1024:gap-[3rem] 1200:gap-[3.5rem] 1920:gap-[4rem] lg:flex-row">
        <div className="flex flex-1 flex-col gap-[2rem] 768:gap-[2.5rem] 1200:gap-[2rem] 1920:gap-[2.5rem]">
          <div className="flex flex-col gap-[1rem] 768:gap-[1.25rem] 1200:gap-[1.25rem] 1920:gap-[1.5rem]">
            <Tagline>La Diferencia Nelson</Tagline>
            <h2 className="text-[1.5rem] 360:text-[1.5rem] 393:text-[1.5rem] 430:text-[1.75rem] 768:text-[2rem] 834:text-[2.25rem] 1024:text-[2.5rem] 1200:text-[2.75rem] 1280:text-[3rem] 1366:text-[3.25rem] 1440:text-[3.5rem] 1536:text-[3.75rem] 1728:text-[4.25rem] 1920:text-[4.5rem] text-foreground leading-none tracking-tighter font-extrabold">
              Familia fundadora. Trato directo. Desde 1967.
            </h2>
            <p className="text-[0.875rem] 360:text-[0.875rem] 393:text-[0.875rem] 430:text-[1rem] 768:text-[1rem] 834:text-[1.0625rem] 1024:text-[1.125rem] 1200:text-[1.125rem] 1280:text-[1.1875rem] 1366:text-[1.25rem] 1440:text-[1.3125rem] 1536:text-[1.375rem] 1728:text-[1.4375rem] 1920:text-[1.5rem] text-muted-foreground leading-relaxed tracking-wide text-balance">
              Grupo Nelson no es un fondo de inversión que administra <strong>parques industriales</strong> desde otra ciudad.
              Es la familia que creó la industria maquiladora de <strong>Mexicali</strong> en <strong>1967</strong> y sigue operando personalmente
              cada parque, cada contrato y cada proyecto de construcción. Tres hechos verificables
              que ningún competidor en <strong>Mexicali</strong> puede replicar simultáneamente: <strong>60 años de trayectoria</strong>,
              operación directa por la <strong>familia fundadora</strong>, y <strong>constructora in-house</strong> con 28 años
              y 75 proyectos completados.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[1.5rem] 768:gap-[2rem] 1200:gap-[2rem] 1920:gap-[2.5rem]">
            <div className="flex flex-col gap-[0.375rem]">
              <h3 className="text-[1.25rem] 360:text-[1.25rem] 393:text-[1.25rem] 430:text-[1.375rem] 768:text-[1.5rem] 834:text-[1.625rem] 1024:text-[1.75rem] 1200:text-[1.875rem] 1280:text-[1.875rem] 1366:text-[2rem] 1440:text-[2rem] 1536:text-[2.125rem] 1728:text-[2.25rem] 1920:text-[2.25rem] text-foreground font-bold leading-none tracking-tighter">
                60+
              </h3>
              <p className="text-[0.75rem] 360:text-[0.75rem] 393:text-[0.75rem] 430:text-[0.8125rem] 768:text-[0.875rem] 834:text-[0.9375rem] 1024:text-[1rem] 1200:text-[1rem] 1280:text-[1.0625rem] 1366:text-[1.125rem] 1440:text-[1.1875rem] 1536:text-[1.25rem] 1728:text-[1.25rem] 1920:text-[1.25rem] text-muted-foreground tracking-wide">
                años de trayectoria
              </p>
            </div>
            <div className="flex flex-col gap-[0.375rem]">
              <h3 className="text-[1.25rem] 360:text-[1.25rem] 393:text-[1.25rem] 430:text-[1.375rem] 768:text-[1.5rem] 834:text-[1.625rem] 1024:text-[1.75rem] 1200:text-[1.875rem] 1280:text-[1.875rem] 1366:text-[2rem] 1440:text-[2rem] 1536:text-[2.125rem] 1728:text-[2.25rem] 1920:text-[2.25rem] text-foreground font-bold leading-none tracking-tighter">
                30
              </h3>
              <p className="text-[0.75rem] 360:text-[0.75rem] 393:text-[0.75rem] 430:text-[0.8125rem] 768:text-[0.875rem] 834:text-[0.9375rem] 1024:text-[1rem] 1200:text-[1rem] 1280:text-[1.0625rem] 1366:text-[1.125rem] 1440:text-[1.1875rem] 1536:text-[1.25rem] 1728:text-[1.25rem] 1920:text-[1.25rem] text-muted-foreground tracking-wide">
                corporaciones internacionales
              </p>
            </div>
            <div className="flex flex-col gap-[0.375rem]">
              <h3 className="text-[1.25rem] 360:text-[1.25rem] 393:text-[1.25rem] 430:text-[1.375rem] 768:text-[1.5rem] 834:text-[1.625rem] 1024:text-[1.75rem] 1200:text-[1.875rem] 1280:text-[1.875rem] 1366:text-[2rem] 1440:text-[2rem] 1536:text-[2.125rem] 1728:text-[2.25rem] 1920:text-[2.25rem] text-foreground font-bold leading-none tracking-tighter">
                4M ft²
              </h3>
              <p className="text-[0.75rem] 360:text-[0.75rem] 393:text-[0.75rem] 430:text-[0.8125rem] 768:text-[0.875rem] 834:text-[0.9375rem] 1024:text-[1rem] 1200:text-[1rem] 1280:text-[1.0625rem] 1366:text-[1.125rem] 1440:text-[1.1875rem] 1536:text-[1.25rem] 1728:text-[1.25rem] 1920:text-[1.25rem] text-muted-foreground tracking-wide">
                desarrollados
              </p>
            </div>
            <div className="flex flex-col gap-[0.375rem]">
              <h3 className="text-[1.25rem] 360:text-[1.25rem] 393:text-[1.25rem] 430:text-[1.375rem] 768:text-[1.5rem] 834:text-[1.625rem] 1024:text-[1.75rem] 1200:text-[1.875rem] 1280:text-[1.875rem] 1366:text-[2rem] 1440:text-[2rem] 1536:text-[2.125rem] 1728:text-[2.25rem] 1920:text-[2.25rem] text-foreground font-bold leading-none tracking-tighter">
                80%
              </h3>
              <p className="text-[0.75rem] 360:text-[0.75rem] 393:text-[0.75rem] 430:text-[0.8125rem] 768:text-[0.875rem] 834:text-[0.9375rem] 1024:text-[1rem] 1200:text-[1rem] 1280:text-[1.0625rem] 1366:text-[1.125rem] 1440:text-[1.1875rem] 1536:text-[1.25rem] 1728:text-[1.25rem] 1920:text-[1.25rem] text-muted-foreground tracking-wide">
                clientes recurrentes
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xs bg-blue-600 px-6 py-3 text-[0.875rem] 1200:text-[0.9375rem] 1536:text-[1rem] font-semibold text-white shadow hover:bg-blue-700 transition-colors"
            >
              Solicita una consulta
            </Link>
            <Link
              href="/nelson/trayectoria"
              className="inline-flex items-center justify-center gap-2 rounded-xs px-6 py-3 text-[0.875rem] 1200:text-[0.9375rem] 1536:text-[1rem] font-semibold text-foreground hover:bg-accent transition-colors"
            >
              Conoce nuestra trayectoria
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="w-full flex-1">
          <AspectRatio ratio={3/4}>
            <Image
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
              alt="Naves industriales en Mexicali — Grupo Nelson"
              fill
              className="rounded-xs object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

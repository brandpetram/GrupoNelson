"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Tagline } from "./tagline";

export function FeatureSection8() {
  return (
    <section data-component="FeatureSection8" data-component-file="src/components/pro-blocks/feature-section-8/feature-section-8.tsx" data-component-props="false" className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-8">
          <div className="section-title-gap-lg flex flex-col">
            <Tagline>La Diferencia Nelson</Tagline>
            <h2 className="heading-lg text-foreground">
              Instala tu nave industrial en Mexicali con el único desarrollador operado por su familia fundadora desde 1967
            </h2>
            <p className="text-muted-foreground">
              Grupo Nelson no es un fondo de inversión que administra parques industriales desde otra ciudad.
              Es la familia que creó la industria maquiladora de Mexicali en 1967 y sigue operando personalmente
              cada parque, cada contrato y cada proyecto de construcción. Tres hechos verificables
              que ningún competidor en Mexicali puede replicar simultáneamente: 60 años de trayectoria,
              operación directa por la familia fundadora, y constructora in-house con 28 años
              y 75 proyectos completados.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-2xl font-bold md:text-3xl">
                60+
              </h3>
              <p className="text-muted-foreground md:text-sm">
                años de trayectoria
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-2xl font-bold md:text-3xl">
                30
              </h3>
              <p className="text-muted-foreground md:text-sm">
                corporaciones internacionales
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-2xl font-bold md:text-3xl">
                4M ft²
              </h3>
              <p className="text-muted-foreground md:text-sm">
                desarrollados
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-2xl font-bold md:text-3xl">
                80%
              </h3>
              <p className="text-muted-foreground md:text-sm">
                clientes recurrentes
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Solicita una consulta</Button>
            <Button variant="ghost">
              Conoce nuestra trayectoria
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="w-full flex-1">
          <AspectRatio ratio={1}>
            <Image
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
              alt="Naves industriales en Mexicali — Grupo Nelson"
              fill
              className="rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

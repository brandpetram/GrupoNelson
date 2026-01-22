"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "./tagline";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function HeroSectionAmbaflex() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 md:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="order-2 md:order-1 flex flex-1 flex-col gap-6 lg:gap-8 max-w-md 1728:max-w-180">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col 1728:w-10/12 ">
            {/* Tagline */}
            <Tagline>Naves Industriales en Mexicali</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="text-5xl 1024:text-7xl font-extrabold tracking-tighter">
              Infraestructura de Clase Mundial para tu Operación.
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Naves industriales diseñadas para optimizar tu operación. Construye exactamente lo que necesitas con nuestra constructora in-house y 58 años de expertise en el mercado fronterizo.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Contáctanos</Button>
            <Button variant="ghost">
              Conoce más
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="order-1 md:order-2 w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-280.jpg"
              alt="Lorem ipsum"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

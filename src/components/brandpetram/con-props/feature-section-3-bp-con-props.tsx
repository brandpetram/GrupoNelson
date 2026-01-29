/**
 * FeatureSection3BPConProps - Componente único e irrepetible
 *
 * Sección de features con 2 features a la izquierda y imagen a la derecha.
 * Solo contenido es configurable (textos, imagen, iconos).
 */

"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Rocket } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/feature-section-3/tagline";
import { CuadritosLluvia } from "@/components/ui/brandpetram/cuadritos-lluvia";
import { type ReactNode } from "react";

interface FeatureSection3BPConPropsProps {
  // Contenido principal
  tagline?: string;
  titulo?: string;
  descripcion?: string;

  // Imagen
  imagenSrc?: string;
  imagenAlt?: string;

  // Feature 1
  feature1Icon?: ReactNode;
  feature1IconColor?: string;
  feature1Titulo?: string;
  feature1Descripcion?: string;

  // Feature 2
  feature2Icon?: ReactNode;
  feature2IconColor?: string;
  feature2Titulo?: string;
  feature2Descripcion?: string;
}

export function FeatureSection3BPConProps({
  tagline = "Feature section",
  titulo = "Headline that shows solution's impact on user success",
  descripcion = "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.",
  imagenSrc = "https://ui.shadcn.com/placeholder.svg",
  imagenAlt = "Feature section image",
  feature1Icon = <Rocket className="h-5 w-5" />,
  feature1IconColor = "text-primary",
  feature1Titulo = "Feature de Autoridad",
  feature1Descripcion = "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
  feature2Icon = <Rocket className="h-5 w-5" />,
  feature2IconColor = "text-primary",
  feature2Titulo = "Feature de Autoridad",
  feature2Descripcion = "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
}: FeatureSection3BPConPropsProps) {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 md:gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8 md:gap-12">
          <div className="section-title-gap-lg flex flex-col">
            <Tagline>{tagline}</Tagline>
            <h2 className="text-2xl 360:text-2xl 393:text-2xl 430:text-3xl 768:text-3xl 834:text-4xl 1024:text-4xl 1200:text-5xl 1280:text-5xl 1366:text-6xl 1440:text-6xl 1536:text-6xl 1728:text-7xl 1920:text-7xl leading-none tracking-tighter text-foreground font-extrabold">
              {titulo}
            </h2>
            <p className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-lg 1200:text-lg 1280:text-xl 1366:text-xl 1440:text-2xl 1536:text-2xl 1728:text-3xl 1920:text-2xl leading-relaxed text-muted-foreground">
              {descripcion}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <div className={`bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs ${feature1IconColor}`}>
                {feature1Icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  {feature1Titulo}
                </h3>
                <p className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-2xl 1920:text-xl text-muted-foreground">
                  {feature1Descripcion}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <div className={`bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs ${feature2IconColor}`}>
                {feature2Icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  {feature2Titulo}
                </h3>
                <p className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-2xl 1920:text-xl text-muted-foreground">
                  {feature2Descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full 360:w-full 393:w-full 430:w-full 768:w-full 834:w-full 1024:flex-1 1200:flex-1 1280:flex-1 1366:flex-1 1440:flex-1 1536:flex-1 1728:flex-1 1920:flex-1 relative">
          <AspectRatio ratio={1}>
            <Image
              src={imagenSrc}
              alt={imagenAlt}
              fill
              className="rounded-xs object-cover"
            />
          </AspectRatio>

          {/* Cuadritos decorativos pegados debajo de la imagen */}
          <div className="absolute top-full right-20 md:right-40 z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-top-right">
            <CuadritosLluvia />
          </div>
        </div>
      </div>
    </section>
  );
}

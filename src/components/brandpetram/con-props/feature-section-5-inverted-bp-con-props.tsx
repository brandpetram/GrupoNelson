/**
 * FeatureSection5InvertedBPConProps - Componente único e irrepetible
 *
 * Sección de features con imagen a la izquierda y 4 features a la derecha.
 * Solo contenido es configurable (textos, imagen, iconos).
 */

"use client";

import { Rocket } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/feature-section-5/tagline";
import { CuadritosLluviaTres } from "@/components/ui/brandpetram/cuadritos-lluvia-tres";
import { type ReactNode } from "react";

interface FeatureSection5InvertedBPConPropsProps {
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

  // Feature 3
  feature3Icon?: ReactNode;
  feature3IconColor?: string;
  feature3Titulo?: string;
  feature3Descripcion?: string;

  // Feature 4
  feature4Icon?: ReactNode;
  feature4IconColor?: string;
  feature4Titulo?: string;
  feature4Descripcion?: string;
}

export function FeatureSection5InvertedBPConProps({
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
  feature3Icon = <Rocket className="h-5 w-5" />,
  feature3IconColor = "text-primary",
  feature3Titulo = "Feature de Autoridad",
  feature3Descripcion = "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
  feature4Icon = <Rocket className="h-5 w-5" />,
  feature4IconColor = "text-primary",
  feature4Titulo = "Feature de Autoridad",
  feature4Descripcion = "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
}: FeatureSection5InvertedBPConPropsProps) {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Imagen primero - aparece a la izquierda en desktop */}
        <div className="w-full 360:w-full 393:w-full 430:w-full 768:w-full 834:w-full 1024:flex-1 1200:flex-1 1280:flex-1 1366:flex-1 1440:flex-1 1536:flex-1 1728:flex-1 1920:flex-1 relative">
          <AspectRatio ratio={3 / 4}>
            <Image
              src={imagenSrc}
              alt={imagenAlt}
              fill
              className="rounded-xs object-cover"
            />
          </AspectRatio>

          {/* Cuadritos decorativos pegados debajo de la imagen */}
          <div className="absolute top-full right-0 lg:left-20 z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-top-right">
            <CuadritosLluviaTres />
          </div>
        </div>

        {/* Texto después - aparece a la derecha en desktop */}
        <div className="flex flex-1 flex-col gap-8">
          <div className="section-title-gap-lg flex flex-col">
            <Tagline>{tagline}</Tagline>
            <h2 className="text-2xl 360:text-2xl 393:text-2xl 430:text-3xl 768:text-3xl 834:text-4xl 1024:text-4xl 1200:text-5xl 1280:text-5xl 1366:text-6xl 1440:text-6xl 1536:text-6xl 1728:text-7xl 1920:text-7xl leading-none tracking-tighter font-extrabold text-foreground">
              {titulo}
            </h2>
            <p className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-lg 1200:text-lg 1280:text-xl 1366:text-xl 1440:text-2xl 1536:text-2xl 1728:text-2xl 1920:text-2xl text-muted-foreground">
              {descripcion}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col gap-5">
              <div className={`bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs ${feature1IconColor}`}>
                {feature1Icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  {feature1Titulo}
                </h3>
                <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground">
                  {feature1Descripcion}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-5">
              <div className={`bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs ${feature2IconColor}`}>
                {feature2Icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  {feature2Titulo}
                </h3>
                <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground">
                  {feature2Descripcion}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-5">
              <div className={`bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs ${feature3IconColor}`}>
                {feature3Icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  {feature3Titulo}
                </h3>
                <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground">
                  {feature3Descripcion}
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col gap-5">
              <div className={`bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs ${feature4IconColor}`}>
                {feature4Icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  {feature4Titulo}
                </h3>
                <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground">
                  {feature4Descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

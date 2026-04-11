/**
 * Componente original: feature-section-6-bp.tsx
 * Propeado: 27 de enero de 2026
 *
 * Este componente fue "propeado" (convertido a usar props) para permitir
 * reutilización sin duplicar código.
 */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "motion/react";
import { type ReactNode } from "react";

interface FeatureSection6BPConPropsProps {
  badge?: string;
  title?: string;
  description?: string;
  feature1Title?: string;
  feature1Description?: string;
  feature1Icon?: ReactNode;
  feature1IconColor?: string;
  feature2Title?: string;
  feature2Description?: string;
  feature2Icon?: ReactNode;
  feature2IconColor?: string;
  button1Text?: string;
  button1Href?: string;
  button2Text?: string;
  button2Href?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function FeatureSection6BPConProps({
  badge = "Feature section",
  title = "Headline that shows solution's impact on user success",
  description = "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.",
  feature1Title = "Feature de Autoridad",
  feature1Description = "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
  feature1Icon = <Rocket className="h-5 w-5" />,
  feature1IconColor = "text-primary",
  feature2Title = "Feature de Autoridad",
  feature2Description = "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
  feature2Icon = <Rocket className="h-5 w-5" />,
  feature2IconColor = "text-primary",
  button1Text = "Contacto",
  button1Href = "/contacto",
  button2Text = "Conocer más",
  button2Href = "/constructora/build-to-suit",
  imageSrc = "https://ui.shadcn.com/placeholder.svg",
  imageAlt = "Hero image",
}: FeatureSection6BPConPropsProps) {
  return (
    <section data-component="FeatureSection6BPConProps" data-component-file="src/components/brandpetram/con-props/feature-section-6-bp-con-props.tsx" data-component-props="true" className="bg-background py-16 lg:py-24 relative z-0">
      <motion.div
        className="container mx-auto flex flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16"
        initial={{ y: 350, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.15, 1] }}
      >
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground font-semibold">
              {badge}
            </p>
            <h2 className="text-2xl 360:text-2xl 393:text-2xl 430:text-3xl 768:text-3xl 834:text-4xl 1024:text-4xl 1200:text-5xl 1280:text-5xl 1366:text-6xl 1440:text-6xl 1536:text-6xl 1728:text-7xl 1920:text-7xl leading-none tracking-tighter font-extrabold text-foreground">
              {title}
            </h2>
            <p className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-lg 1200:text-lg 1280:text-xl 1366:text-xl 1440:text-2xl 1536:text-2xl 1728:text-2xl 1920:text-2xl text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-5">
              <div className={`bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs ${feature1IconColor}`}>
                {feature1Icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  {feature1Title}
                </h3>
                <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground">
                  {feature1Description}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className={`bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs ${feature2IconColor}`}>
                {feature2Icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  {feature2Title}
                </h3>
                <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground">
                  {feature2Description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild><a href={button1Href}>{button1Text}</a></Button>
            <Button asChild variant="ghost">
              <a href={button2Href}>
                {button2Text}
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>

        <div className="w-full 1024:flex-1 overflow-hidden rounded-xl">
          <div className="relative aspect-square">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

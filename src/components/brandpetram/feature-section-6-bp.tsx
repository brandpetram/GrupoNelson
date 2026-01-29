/**
 * Componente original: pro-blocks/feature-section-6
 * Brandpetramizado: 26 de enero de 2026
 *
 * Este componente fue copiado y adaptado con breakpoints granulares
 * para todos los textos y widths, y con leading-none y tracking-tighter en headings.
 */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "motion/react";

export function FeatureSection6BP() {
  return (
    <section className="bg-background py-16 lg:py-24 relative z-0">
      <motion.div
        className="container mx-auto flex flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16"
        initial={{ y: 600, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.15, 1] }}
      >
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground font-semibold">
              Feature section
            </p>
            <h2 className="text-2xl 360:text-2xl 393:text-2xl 430:text-3xl 768:text-3xl 834:text-4xl 1024:text-4xl 1200:text-5xl 1280:text-5xl 1366:text-6xl 1440:text-6xl 1536:text-6xl 1728:text-7xl 1920:text-7xl leading-none tracking-tighter font-extrabold text-foreground">
              Headline that shows solution's impact on user success
            </h2>
            <p className="text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-lg 1200:text-lg 1280:text-xl 1366:text-xl 1440:text-2xl 1536:text-2xl 1728:text-2xl 1920:text-2xl text-muted-foreground">
              Explain in one or two concise sentences how your solution
              transforms users' challenges into positive outcomes. Focus on the
              end benefits that matter most to your target audience. Keep it
              clear and compelling.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-5">
              <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs">
                <Rocket className="text-primary h-5 w-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  Feature de Autoridad
                </h3>
                <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs">
                <Rocket className="text-primary h-5 w-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter text-foreground font-semibold">
                  Feature de Autoridad
                </h3>
                <p className="text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Get access</Button>
            <Button variant="ghost">
              Learn more
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="w-full 360:w-full 393:w-full 430:w-full 768:w-full 834:w-full 1024:flex-1 1200:flex-1 1280:flex-1 1366:flex-1 1440:flex-1 1536:flex-1 1728:flex-1 1920:flex-1">
          <AspectRatio ratio={1}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Hero image"
              fill
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </motion.div>
    </section>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import { ImagenRectangulo } from "@/components/ui/brandpetram/imagen-rectangulo";
import { CuadritosLluviaDos } from "@/components/ui/brandpetram/cuadritos-lluvia-dos";
import { GunLikeConProps } from "@/components/brandpetram/con-props/gun-like-con-props";
import { FeatureSection5InvertedBPConProps } from "@/components/brandpetram/con-props/feature-section-5-inverted-bp-con-props";
import { SplitWithImageBPConProps } from "@/components/brandpetram/con-props/split-with-image-bp-con-props";
import { Shield, BookOpen, Globe, Search } from "lucide-react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  CheckBadgeIcon,
} from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "International Construction Standards",
  description:
    "Industrial buildings in Mexicali built to FM Global, NFPA, LEED, ISN, IBC, and NOM standards. Baumex: 75+ projects, audits by Gulfstream and Honeywell.",
};

export default function InternationalStandardsPage() {
  return (
    <div className="overflow-hidden">
      <Header lang="en" />

      <main>
        {/* Hero image */}
        <div className="mt-25 md:mt-35 1200:mt-30 max-w-screen-3xl mx-auto lg:px-20">
          <div className="relative">
            <ImagenRectangulo
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-106.jpg"
              alt="International construction standards for industrial buildings in Mexicali"
              className="aspect-[1/1.3] md:aspect-[21/9] lg:aspect-[16/7] rounded-xs"
              objectPosition="center 40%"
              overlayOpacity={0.3}
              colorOverlay="bg-stone-900/10"
              blendMode="multiply"
              gridConfig={{
                strokeColor: "stroke-white/15",
                highlightColor: "fill-white/5",
                showHighlights: true,
                gridSize: 100,
                fadePosition: "center",
                fadeRadius: "24rem",
              }}
            />
            {/* Title over image */}
            <div className="absolute bottom-0 left-0  bg-blue-600/80 p-4 md:p-6 lg:p-8 rounded-xs">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-none tracking-tighter">
                International
                <br />
                Construction
                <br />
                Standards
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-white/70 mt-2 tracking-wide">
                Meet the most demanding certifications and standards in the
                industrial sector
              </p>
            </div>
            {/* Decorative squares */}
            <div className="absolute top-full left-[80%] z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-top-left">
              <CuadritosLluviaDos />
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="mt-10 md:mt-16">
          <GunLikeConProps
            poligonoText="International Standards"
            titulo="Bring your most demanding certification"
            parrafo="28 years learning, implementing, and meeting international standards in industrial buildings across Mexicali."
          />
        </div>

        {/* Open capability */}
        <div className="container mx-auto w-10/12 mt-20">
          <FeatureSection5InvertedBPConProps
            tagline="International Standards"
            titulo="FM Global, NFPA, LEED, ISN, IBC, NOM"
            descripcion="Implemented in dozens of industrial projects in Mexicali. We know what they require, who audits them, and how they are documented."
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-278.jpg"
            imagenAlt="International standards implementation in Mexicali"
            feature1Icon={<Shield className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature1Titulo="From the executive project"
            feature1Descripcion="We don't certify at the end. We design for compliance from the first line — that eliminates rework."
            feature2Icon={<Globe className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            feature2Titulo="Implemented in Mexico"
            feature2Descripcion="Local suppliers, federal permitting, CFE timelines, verification laboratories — we navigate it on every project."
            feature3Icon={<BookOpen className="h-5 w-5" />}
            feature3IconColor="text-green-600"
            feature3Titulo="75+ documented projects"
            feature3Descripcion="Every audit passed, every certification obtained, is documented with testing and third-party validation."
            feature4Icon={<Search className="h-5 w-5" />}
            feature4IconColor="text-purple-600"
            feature4Titulo="Does your corporate require something more?"
            feature4Descripcion="Tell us what standard you need. We'll integrate it into your project."
          />
        </div>

        {/* CTA */}
        <div className="mt-20">
          <SplitWithImageBPConProps
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
            imagenAlt="International standards consultation"
            tagline="Your Project, Your Standards"
            titulo="Tell us what you need to comply with"
            parrafo1="If you already know which certifications your corporate requires, tell us which ones. If you're not sure yet, we can help you define them."
            parrafo2="28 years implementing international standards in industrial buildings across Mexicali. Every certification we master today was learned because a client needed it — and we delivered."
            feature1Icon={
              <CloudArrowUpIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none"
              />
            }
            feature1IconColor="text-orange-600 dark:text-orange-500"
            feature1Titulo="Standards we've already mastered."
            feature1Descripcion="FM Global, NFPA, LEED, ISN, IBC, NOM — integrated from the executive project."
            feature2Icon={
              <LockClosedIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none"
              />
            }
            feature2IconColor="text-blue-600 dark:text-blue-500"
            feature2Titulo="Mexico has its own rules."
            feature2Descripcion="Suppliers, permitting, CFE timelines, verification laboratories — we navigate it on every project."
            feature3Icon={
              <CheckBadgeIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none"
              />
            }
            feature3IconColor="text-green-600 dark:text-green-500"
            feature3Titulo="28 years doing this."
            feature3Descripcion="Every certification we master today was learned because a client needed it."
            parrafo3="Tell us what your operation needs. We'll show you how it's implemented in your project."
            subtitulo="Free consultation"
            parrafo4="for your next industrial project in Mexicali."
          />
        </div>
      </main>
    </div>
  );
}

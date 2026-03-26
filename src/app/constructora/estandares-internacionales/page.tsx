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
  title: "Estándares Internacionales de Construcción | Grupo Nelson Mexicali",
  description:
    "Naves industriales en Mexicali construidas con estándares FM Global, NFPA, LEED, ISN, IBC y NOM. Baumex: 75+ proyectos, auditorías de Gulfstream y Honeywell.",
};

export default function EstandaresInternacionalesPage() {
  return (
    <div className="overflow-hidden">
      <Header />

      <main>
        {/* Hero imagen */}
        <div className="mt-25 md:mt-35 1200:mt-30 max-w-screen-3xl mx-auto lg:px-20">
          <div className="relative">
            <ImagenRectangulo
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-106.jpg"
              alt="Estándares internacionales de construcción industrial en Mexicali"
              className="aspect-[1/1.3] md:aspect-[21/9] lg:aspect-[16/7] rounded-xs"
              objectPosition="center 40%"
              overlayOpacity={0.3}
              colorOverlay="bg-stone-900/10"
              blendMode="multiply" // opciones: normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity
              gridConfig={{
                strokeColor: "stroke-white/15",
                highlightColor: "fill-white/5",
                showHighlights: true,
                gridSize: 100,
                fadePosition: "center",
                fadeRadius: "24rem",
              }}
            />
            {/* Título sobre la imagen */}
            <div className="absolute bottom-0 left-0  bg-blue-600/80 p-4 md:p-6 lg:p-8 rounded-xs">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-none tracking-tighter">
                Estándares
                <br />
                Internacionales
                <br />
                de Construcción
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-white/70 mt-2 tracking-wide">
                Cumple las normas y certificaciones más exigentes del sector
                industrial
              </p>
            </div>
            {/* Cuadritos decorativos */}
            <div className="absolute top-full left-[80%] z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-top-left">
              <CuadritosLluviaDos />
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="mt-10 md:mt-16">
          <GunLikeConProps
            poligonoText="Estándares Internacionales"
            titulo="Trae tu certificación más exigente"
            parrafo="28 años aprendiendo, implementando y cumpliendo estándares internacionales en naves industriales de Mexicali."
          />
        </div>

        {/* Capacidad abierta */}
        <div className="container mx-auto w-10/12 mt-20">
          <FeatureSection5InvertedBPConProps
            tagline="Estándares Internacionales"
            titulo="FM Global, NFPA, LEED, ISN, IBC, NOM"
            descripcion="Implementados en decenas de proyectos industriales en Mexicali. Sabemos qué exigen, quién los audita y cómo se documentan."
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-278.jpg"
            imagenAlt="Implementación de estándares internacionales en Mexicali"
            feature1Icon={<Shield className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature1Titulo="Desde el proyecto ejecutivo"
            feature1Descripcion="No certificamos al final. Diseñamos para cumplir desde el primer trazo — eso elimina retrabajo."
            feature2Icon={<Globe className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            feature2Titulo="Implementados en México"
            feature2Descripcion="Proveedores locales, tramitología federal, tiempos de CFE, laboratorios de verificación — lo navegamos en cada proyecto."
            feature3Icon={<BookOpen className="h-5 w-5" />}
            feature3IconColor="text-green-600"
            feature3Titulo="75+ proyectos documentados"
            feature3Descripcion="Cada auditoría pasada, cada certificación obtenida, queda documentada con ensayos y validación de terceros."
            feature4Icon={<Search className="h-5 w-5" />}
            feature4IconColor="text-purple-600"
            feature4Titulo="¿Tu corporativo exige algo más?"
            feature4Descripcion="Dinos qué estándar necesitas. Lo integramos en tu proyecto."
          />
        </div>

        {/* CTA */}
        <div className="mt-20">
          <SplitWithImageBPConProps
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
            imagenAlt="Consulta de estándares internacionales"
            tagline="Tu Proyecto, Tus Estándares"
            titulo="Dinos qué necesitas cumplir"
            parrafo1="Si ya sabes qué certificaciones exige tu corporativo, dinos cuáles. Si todavía no lo tienes claro, podemos ayudarte a definirlo."
            parrafo2="28 años implementando estándares internacionales en naves industriales de Mexicali. Cada certificación que hoy dominamos la aprendimos porque un cliente la necesitó — y la entregamos."
            feature1Icon={
              <CloudArrowUpIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none"
              />
            }
            feature1IconColor="text-orange-600 dark:text-orange-500"
            feature1Titulo="Estándares que ya dominamos."
            feature1Descripcion="FM Global, NFPA, LEED, ISN, IBC, NOM — integrados desde el proyecto ejecutivo."
            feature2Icon={
              <LockClosedIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none"
              />
            }
            feature2IconColor="text-blue-600 dark:text-blue-500"
            feature2Titulo="México tiene sus propias reglas."
            feature2Descripcion="Proveedores, tramitología, tiempos de CFE, laboratorios de verificación — lo navegamos en cada proyecto."
            feature3Icon={
              <CheckBadgeIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none"
              />
            }
            feature3IconColor="text-green-600 dark:text-green-500"
            feature3Titulo="28 años haciendo esto."
            feature3Descripcion="Cada certificación que hoy dominamos la aprendimos porque un cliente la necesitó."
            parrafo3="Dinos qué necesita tu operación. Te mostramos cómo se implementa en tu proyecto."
            subtitulo="Consulta sin costo"
            parrafo4="para tu próximo proyecto industrial en Mexicali."
          />
        </div>
      </main>
    </div>
  );
}

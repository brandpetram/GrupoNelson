import type { Metadata } from "next";
import Header from "@/components/Header";
import { CuadritosLluviaDos } from "@/components/ui/brandpetram/cuadritos-lluvia-dos";
import { GridOverlay } from "@/components/ui/brandpetram/grid";
import { FeatureSection6BPConProps } from "@/components/brandpetram/con-props/feature-section-6-bp-con-props";
import { FeatureSection3BPConProps } from "@/components/brandpetram/con-props/feature-section-3-bp-con-props";
import { SplitWithImageBPConProps } from "@/components/brandpetram/con-props/split-with-image-bp-con-props";
import { Construction, Plane, Wind, Factory } from "lucide-react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  CheckBadgeIcon,
} from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Proyectos Especializados | Baumex Constructora | Grupo Nelson",
  description:
    "Proyectos industriales especializados en Mexicali: puente de 95 m sin columnas, nave de 52,200 m² con BRB antisísmico, túnel de viento de 3,000 HP, cimentaciones de precisión milimétrica.",
};

export default function ProyectosEspecializadosPage() {
  return (
    <div className="overflow-hidden">
      <Header variant="dark" />

      <main>
        {/* Hero — mismo estilo que /constructora/baumex (Mu) */}
        <div
          className="relative bg-gray-800 overflow-hidden pb-72 xl:pb-96"
          style={{
            backgroundImage:
              'url("/contructora-mexicali/puente-skyworks.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
          <GridOverlay
            strokeColor="stroke-white/15"
            gridSize={100}
            showHighlights={true}
            highlightColor="fill-white/5"
            fadePosition="center"
            fadeRadius="24rem"
          />

          {/* Patrón de puntos */}
          <div
            className="hidden sm:block sm:absolute sm:inset-0"
            aria-hidden="true"
          >
            <svg
              className="absolute bottom-[10rem] right-0 translate-x-1/2 text-foreground/10 xl:translate-x-0"
              width={364}
              height={384}
              viewBox="0 0 364 384"
              fill="none"
            >
              <defs>
                <pattern
                  id="pe-dot-pattern"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={364}
                height={384}
                fill="url(#pe-dot-pattern)"
              />
            </svg>
          </div>

          <div className="relative pt-6 pb-16 sm:pb-24">
            <main className="mt-32 sm:mt-40 1200:mt-48">
              <div className="mx-auto md:max-w-5xl 1024:max-w-3xl 1200:max-w-5xl 1280:max-w-6xl 1536:max-w-7xl 1728:max-w-400 1920:max-w-440">
                <div className="1200:grid 1200:grid-cols-12 1200:gap-8">
                  <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto 1200:col-span-6 1200:text-left 1200:flex 1200:items-center">
                    <div>
                      <span className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2">
                        <span className="px-3 py-0.5 text-white text-xs md:text-sm font-semibold leading-5 uppercase tracking-wide bg-linear-to-br from-blue-600 to-blue-700 rounded-full">
                          Proyectos Especializados
                        </span>
                        <span className="ml-4 text-xs md:text-sm">
                          Ingeniería sin precedente
                        </span>
                      </span>
                      <h1 className="mt-4 text-3xl 360:text-[2.5rem] 393:text-[3rem] 430:text-[3.5rem] 768:text-[4rem] 834:text-[4.5rem] 1024:text-[5rem] 1200:text-[3.5rem] 1280:text-[4rem] 1366:text-[4.5rem] 1440:text-[5rem] 1536:text-[5.5rem] 1728:text-[6rem] 1920:text-[7rem] tracking-tight font-extrabold text-white sm:mt-5 leading-none 1200:mt-6">
                        Construcciones especializadas
                      </h1>
                      <p className="mt-3 text-sm 360:text-sm 393:text-[1rem] 430:text-[1.1rem] 768:text-xl 834:text-xl 1024:text-[1.5rem] 1200:text-[1.2rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-gray-300 sm:mt-5">
                        Puentes sin columnas, túneles de viento, sistemas
                        antisísmicos, cimentaciones de precisión milimétrica —
                        28 años ejecutando lo que no tenía solución estándar.
                        Lo resolvemos.
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center 1200:justify-start">
                        <div className="rounded-xs shadow">
                          <a
                            href="/contacto"
                            className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xs text-white bg-linear-to-br from-blue-600 to-blue-700 hover:opacity-90 md:py-4 md:text-lg md:px-10"
                          >
                            Contactar
                          </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <a
                            href="/constructora/portafolio"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xs text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                          >
                            Ver portafolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6" />
                </div>
              </div>
            </main>
          </div>

          {/* Cuadritos decorativos */}
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-bottom-right">
            <CuadritosLluviaDos />
          </div>
        </div>

        {/* Puente Skyworks + Gulfstream 550K */}
        <div className="w-11/12 mx-auto mt-16 md:mt-24">
          <FeatureSection6BPConProps
            badge="Lo que ya hemos resuelto"
            title="Cuatro proyectos que no existían en ningún directorio"
            description="Cada uno empezó con un problema que no tenía solución estándar. Lo investigamos, lo diseñamos y lo construimos."
            feature1Title="Puente de 95 m sin columnas"
            feature1Description="Conecta dos plantas de semiconductores sobre un boulevard y un dren federal. Colado en un solo día, sin juntas. Permisos con 3 niveles de gobierno."
            feature1Icon={<Construction className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature2Title="Nave de 52,200 m² con BRB antisísmico"
            feature2Description="La nave más grande de Mexicali. Primera implementación de sistemas antisísmicos BRB en la región. 20 MW eléctricos, 10 MW solares."
            feature2Icon={<Plane className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            button1Text="Contactar"
            button2Text="Ver portafolio"
            imageSrc="/contructora-mexicali/puente-skyworks-2.jpg"
            imageAlt="Puente Skyworks 95 metros sin columnas"
          />
        </div>

        {/* Túnel de viento + Deacero */}
        <div className="container mx-auto w-10/12 mt-20">
          <FeatureSection3BPConProps
            tagline="Y eso no es todo"
            titulo="Más proyectos que no existían en ningún directorio"
            descripcion="Cada uno empezó con un requerimiento que no tenía precedente en la región. Lo investigamos, lo diseñamos y lo construimos."
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-276.jpg"
            imagenAlt="Túnel de viento y proyectos de precisión Baumex"
            feature1Icon={<Wind className="h-5 w-5" />}
            feature1IconColor="text-green-600"
            feature1Titulo="Túnel de viento de 3,000 HP"
            feature1Descripcion="Edificio de 20 m de altura para pruebas aeroespaciales. Ductos de placa estructural soldada. Cimentación calculada para vibraciones extremas de operación continua."
            feature2Icon={<Factory className="h-5 w-5" />}
            feature2IconColor="text-purple-600"
            feature2Titulo="50,000 m² de precisión milimétrica"
            feature2Descripcion="Cientos de anclas embebidas con tolerancia milimétrica para grúas industriales de gran escala. Cimentaciones profundas a 15 m con pilas de concreto armado."
          />
        </div>

        {/* CTA */}
        <div className="mt-20">
          <SplitWithImageBPConProps
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
            imagenAlt="Consulta de proyectos especializados"
            tagline="Tu Proyecto Especial"
            titulo="¿Tu operación necesita algo diferente?"
            parrafo1="Estos son cuatro ejemplos. Pero cada proyecto empieza con un problema nuevo — y lo resolvemos."
            parrafo2="28 años diseñando y construyendo lo que no existía. Dinos qué necesita tu operación."
            feature1Icon={
              <CloudArrowUpIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none"
              />
            }
            feature1IconColor="text-orange-600 dark:text-orange-500"
            feature1Titulo="Del problema a la entrega."
            feature1Descripcion="Investigación, diseño, permisos, construcción — un solo equipo."
            feature2Icon={
              <LockClosedIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none"
              />
            }
            feature2IconColor="text-blue-600 dark:text-blue-500"
            feature2Titulo="Sin límite de complejidad."
            feature2Descripcion="Si tiene solución de ingeniería, la encontramos."
            feature3Icon={
              <CheckBadgeIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none"
              />
            }
            feature3IconColor="text-green-600 dark:text-green-500"
            feature3Titulo="Experiencia verificable."
            feature3Descripcion="75+ proyectos completados para 30+ corporaciones internacionales."
            parrafo3="Dinis qué necesita tu operación. Te mostramos cómo se resuelve."
            subtitulo="Consulta sin costo"
            parrafo4="para tu próximo proyecto industrial especializado en Mexicali."
          />
        </div>
      </main>
    </div>
  );
}

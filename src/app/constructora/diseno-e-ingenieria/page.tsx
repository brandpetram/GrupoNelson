'use client'

import Header from '@/components/Header'
import { CuadriculaSectionConProps } from '@/components/brandpetram/con-props/cuadricula-section-con-props'
import { GunLikeConProps } from '@/components/brandpetram/con-props/gun-like-con-props'
import {LineaLConProps} from "@/components/brandpetram/con-props/linea-l-con-props"
import {ParrafoBigConProps} from "@/components/brandpetram/con-props/parrafo-big-con-props"
import {GridOverlay} from "@/components/ui/brandpetram/grid"
import {BigNumberConProps} from "@/components/brandpetram/con-props/big-number-con-props"
import {ImagenConEtiquetaConProps} from "@/components/brandpetram/con-props/imagen-con-etiqueta-con-props"
import {CuadroCirculoConEscuadraConProps} from "@/components/brandpetram/con-props/cuadro-circulo-con-escuadra-con-props"
import {Mosaico2ConProps} from "@/components/brandpetram/con-props/mosaico-2-con-props"
import {CirculosConProps} from "@/components/brandpetram/con-props/circulos-con-props"
import {CuadritosLluviaDos} from "@/components/ui/brandpetram/cuadritos-lluvia-dos"
import {FaqSectionsThreeColumnsBPConProps} from '@/components/brandpetram/con-props/faq-sections-three-columns-bp-con-props'
import {FeatureSection3BPConProps} from '@/components/brandpetram/con-props/feature-section-3-bp-con-props'
import {FeatureSection5InvertedBPConProps} from '@/components/brandpetram/con-props/feature-section-5-inverted-bp-con-props'
import {FeatureSection6BPConProps} from "@/components/brandpetram/con-props/feature-section-6-bp-con-props"
import {SplitWithImageBPConProps} from '@/components/brandpetram/con-props/split-with-image-bp-con-props'
import { Compass, Layers, Ruler, Zap, Shield, Settings } from 'lucide-react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function DisenoEIngenieriaPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden mt-32">
      <Header />

      <main>
        {/* Hero — Cuadrícula de imágenes */}
        <div>
          <CuadriculaSectionConProps
            imagen1="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-251.jpg"
            imagen2="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg"
            imagen3="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg"
            imagen4="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-266.jpg"
            imagen5="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-271.jpg"
            imagen6="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-276.jpg"
            imagen7="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-281.jpg"
            imagen8="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-286.jpg"
            imagen9="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-291.jpg"
            imagen10="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-296.jpg"
            imagen11="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-301.jpg"
            imagen12="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-306.jpg"
            imagen13="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-311.jpg"
            imagen14="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-316.jpg"
            imagen15="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-321.jpg"
            imagen16="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-326.jpg"
            imagen17="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-331.jpg"
            imagen18="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-336.jpg"
            imagen19="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-341.jpg"
            imagen20="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-346.jpg"
            badge="Diseño e Ingeniería"
            titulo={<>6 Departamentos<br/>de Ingeniería</>}
            parrafo="El equipo que diseña tu nave es el mismo que la construye. Arquitectura, civil, estructural, eléctrica, mecánica y estimación de costos — todo in-house."
            boton1Texto="Solicitar consulta"
            boton1Href="/contacto"
            boton2Texto="Ver proyectos →"
            boton2Href="/constructora/proyectos-especializados"
            overlayColor="rgba(30, 64, 175, 0.22)"
            overlayBlendMode="multiply"
            filterBrightness={1.05}
            filterSaturate={1.1}
            filterContrast={1.02}
          />
        </div>

        {/* Gunlike — Intro */}
        <div>
          <GunLikeConProps
            poligonoText="Baumex Constructora"
            titulo="Diseño e Ingeniería In-House"
            parrafo="75 proyectos diseñados y ejecutados por el mismo equipo. Sin subcontratos de diseño, sin terceros entre tu proyecto y quien lo construye."
          />
        </div>

        {/* Imagen con etiqueta */}
        <div className="container mx-auto mt-16 md:mt-32 w-11/12">
          <div className="relative h-60 md:h-[35vh] lg:h-[40vh] 1200:h-[60vh] xl:h-[70vh]">
            <ImagenConEtiquetaConProps
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-271.jpg"
              alt="Diseño e ingeniería industrial Mexicali"
              etiqueta="Ingeniería Industrial"
            />
            <GridOverlay
              fadeRadius="16rem"
              fadePosition="center"
              strokeColor="stroke-white/20"
              gridSize={50}
              showHighlights={true}
              highlightColor="fill-orange-500/8"
            />
          </div>
        </div>

        {/* Línea decorativa */}
        <div className="w-1/2 1728:w-7/12 md:ml-auto relative mt-0 h-20 md:h-20 1200:h-40 1366:h-40 1728:h-64 mt-20 z-30 md:pr-4">
          <LineaLConProps
            orientacion="top-right"
            anchoHorizontal="md:w-7/12"
            altoVertical="h-full"
            color="bg-foreground/20"
          />
        </div>

        {/* Feature Section — Departamentos */}
        <div className="w-11/12 mx-auto 1200:-translate-y-16 1366:-translate-y-16 1728:-translate-y-24">
          <FeatureSection6BPConProps
            badge="Diseño Integrado"
            title="6 departamentos de ingeniería bajo un solo techo"
            description="Cada proyecto ejecutivo integra las 6 disciplinas de diseño sin subcontratos. El equipo que calcula la cimentación es el mismo que la construye."
            feature1Title="Arquitectura y Estructural"
            feature1Description="Layout de planta, fachadas, estructura metálica, sistemas antisísmicos BRB y cálculo de cargas."
            feature1Icon={<Compass className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature2Title="Eléctrica y Mecánica"
            feature2Description="Subestaciones, paneles solares, HVAC, fire protection y ductos especializados."
            feature2Icon={<Zap className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            button1Text="Solicitar diseño"
            button2Text="Ver capacidades"
            imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-272.jpg"
            imageAlt="Diseño industrial"
          />
        </div>

        {/* BigNumber — 6 departamentos */}
        <div>
          <BigNumberConProps
            imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-273.jpg"
            imageAlt="Ingeniería industrial Mexicali"
            number="6"
            title={<>Departamentos<br/>de Ingeniería</>}
            subtitle={<>Arquitectura, civil, estructural,<br className="hidden md:block"/>eléctrica, mecánica y costos</>}
          />
        </div>

        {/* Cuadro Circulo — Proyectos especiales */}
        <div>
          <CuadroCirculoConEscuadraConProps
            titulo={<>Ingeniería<br/>Demostrada<br/>en Mexicali</>}
            parrafo="Desde sistemas antisísmicos BRB hasta túneles de viento aeroespaciales. La capacidad de ingeniería se mide en proyectos ejecutados."
            numeroCirculo="75"
            simboloNumero="+"
            itemsCirculo={["Gulfstream", "Honeywell", "Skyworks", "Deacero", "DHL"]}
          />
        </div>

        {/* Mosaico — Proyectos destacados */}
        <div className="w-11/12 mx-auto -mt-20 md:-mt-64 1024:-mt-40 relative">
          <Mosaico2ConProps
            bloque1Titulo="Gulfstream 550K"
            bloque1Descripcion="55,500 m² con BRB, 20 MW y certificación LEED Gold"
            bloque1LinkTexto="Ver proyecto"
            bloque1LinkHref="/constructora/proyectos-especializados"
            bloque2ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-274.jpg"
            bloque2ImagenAlt="Proyecto Gulfstream"
            bloque3ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-275.jpg"
            bloque3ImagenAlt="Construcción industrial"
            bloque4Titulo="¿Tienes un proyecto?"
            bloque4Descripcion="Consulta de diseño sin costo"
            bloque4LinkTexto="Contactar"
            bloque4LinkHref="/contacto"
            imagenDerechaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-276.jpg"
            imagenDerechaAlt="Ingeniería industrial"
          />

          <div className="absolute top-full right-20 md:right-20 1200:right-40 z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-top-right">
            <CuadritosLluviaDos />
          </div>
        </div>

        {/* Párrafo grande */}
        <div className="flex flex-col gap-4">
          <div className="container ml-10 md:mx-auto 1200:-translate-x-16 w-7/12 md:w-8/12 1200:w-8/12 1366:w-8/12 1536:w-9/12 lg:max-w-6xl my-10 md:mt-20">
            <ParrafoBigConProps>
              Baumex proyecta con estándares internacionales desde el primer trazo. Certificación FM Global en muros, cubierta, estructura y sistema contraincendio. Diseño conforme a NFPA, IBC y Normas Oficiales Mexicanas. LEED Knowledgeable y calificación &quot;Recomendado&quot; por Honeywell en ISN.
            </ParrafoBigConProps>
          </div>
        </div>

        {/* Feature 5 — Disciplinas */}
        <div className="container mx-auto w-10/12">
          <FeatureSection5InvertedBPConProps
            tagline="Diseño Integral"
            titulo="Cada disciplina integrada en un solo proyecto ejecutivo"
            descripcion="Las 6 disciplinas de diseño trabajan bajo un mismo techo. Sin traducciones entre firmas, sin pérdida de información entre el plano y la obra."
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-277.jpg"
            imagenAlt="Ingeniería integrada"
            feature1Icon={<Ruler className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature1Titulo="Civil y Cimentación"
            feature1Descripcion="Mecánica de suelos, cimentaciones profundas hasta 18 m con pilas de concreto armado en zonas sísmicas."
            feature2Icon={<Layers className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            feature2Titulo="Estructural"
            feature2Descripcion="Estructura metálica, sistemas antisísmicos BRB y cubierta TPO con garantía de 20 años."
            feature3Icon={<Zap className="h-5 w-5" />}
            feature3IconColor="text-green-600"
            feature3Titulo="Eléctrica"
            feature3Descripcion="Desde subestaciones y 20 MW de capacidad instalada hasta paneles solares de 10 MW."
            feature4Icon={<Shield className="h-5 w-5" />}
            feature4IconColor="text-purple-600"
            feature4Titulo="Mecánica y Fire Protection"
            feature4Descripcion="HVAC con recuperación de agua al 90%, sistemas contraincendio FM Global y ductos de placa estructural."
          />
        </div>

        {/* Feature 3 — Certificaciones */}
        <div className="container mx-auto w-10/12 lg:mt-20">
          <FeatureSection3BPConProps
            tagline="Estándares Internacionales"
            titulo="Diseño que cumple los códigos que tu corporativo exige"
            descripcion="FM Global, NFPA, IBC, Normas Oficiales Mexicanas y LEED — desde el primer trazo."
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-278.jpg"
            imagenAlt="Certificaciones industriales"
            feature1Icon={<Settings className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature1Titulo="FM Global y LEED"
            feature1Descripcion="Certificación Factory Mutual en muros, cubierta, estructura y contraincendio. LEED Knowledgeable con Gulfstream 550K certificando Gold."
            feature2Icon={<Zap className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            feature2Titulo="ISN Recomendado"
            feature2Descripcion="Calificación 'Recomendado' por Honeywell International en plataforma ISN — cumplimiento sostenido en seguridad y calidad."
          />
        </div>

        {/* Split — CTA */}
        <div>
          <SplitWithImageBPConProps
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
            imagenAlt="Ingeniería Baumex"
            tagline="Baumex Constructora"
            titulo="6 departamentos de ingeniería. 75 proyectos. Un solo equipo."
            parrafo1="El equipo que diseña tu nave es el mismo que la construye. Sin traducciones entre firmas, sin pérdida de información entre el plano y la obra."
            parrafo2="Desde sistemas antisísmicos BRB hasta túneles de viento con ductos de placa estructural — la capacidad de ingeniería se mide en proyectos ejecutados, no en presentaciones."
            feature1Icon={<CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
            feature1IconColor="text-orange-600 dark:text-orange-500"
            feature1Titulo="Diseño Integrado."
            feature1Descripcion="6 disciplinas de diseño bajo un solo techo: arquitectura, civil, estructural, eléctrica, mecánica y costos."
            feature2Icon={<LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
            feature2IconColor="text-blue-600 dark:text-blue-500"
            feature2Titulo="Ingeniería Verificable."
            feature2Descripcion="Gulfstream 550K, túnel de viento Honeywell, puente Skyworks — proyectos que no se licitan en un directorio."
            feature3Icon={<ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
            feature3IconColor="text-green-600 dark:text-green-500"
            feature3Titulo="Estándares Internacionales."
            feature3Descripcion="FM Global, LEED, NFPA, IBC y NOMs — diseño que cumple los códigos que tu corporativo exige."
            parrafo3="Cada proyecto es diseñado y ejecutado por el mismo equipo de Baumex. 75 proyectos completados para 33 corporaciones internacionales."
            subtitulo="¿Necesitas diseño e ingeniería?"
            parrafo4="Solicita una consulta para tu proyecto en Mexicali. El mismo equipo que diseñó la nave más grande de la ciudad puede diseñar la tuya."
          />
        </div>

        {/* Círculos — Capacidades */}
        <div className="px-4 md:ml-10 1200:ml-32 mt-32 md:px-0">
          <CirculosConProps
            circulo1Letra="A"
            circulo1Titulo="Arquitectura"
            circulo1Descripcion="Layout de planta, oficinas, fachadas y distribución de espacios optimizados para tu proceso productivo."
            circulo2Letra="E"
            circulo2Titulo="Estructural"
            circulo2Descripcion="Estructura metálica, sistemas antisísmicos BRB, cimentaciones profundas y cubierta TPO con garantía de 20 años."
            circulo3Letra="M"
            circulo3Titulo="Mecánica"
            circulo3Descripcion="HVAC, fire protection con certificación FM Global, plomería y ductos especializados — desde los de 2.5 × 2.5 m hasta instalaciones estándar."
          />
        </div>

        {/* FAQs */}
        <div>
          <FaqSectionsThreeColumnsBPConProps
            titulo="Preguntas Sobre Diseño e Ingeniería"
            descripcion="¿Tienes alguna pregunta adicional? Contáctanos directamente por"
            linkTexto="correo electrónico"
            linkHref="mailto:contacto@gruponelson.com"
            faqs={[
              {
                id: 1,
                question: "¿Baumex subcontrata el diseño de naves industriales?",
                answer: "No. Contamos con 6 departamentos propios de ingeniería: arquitectura, civil, estructural, eléctrica, mecánica y estimación de costos. El equipo que diseña tu nave es el mismo que la construye.",
              },
              {
                id: 2,
                question: "¿Qué certificaciones de diseño maneja Baumex?",
                answer: "FM Global en muros, cubierta, estructura y sistema contraincendio. LEED Knowledgeable. Diseño conforme a NFPA, IBC y Normas Oficiales Mexicanas. Calificación 'Recomendado' por Honeywell en ISN.",
              },
              {
                id: 3,
                question: "¿Qué son los sistemas antisísmicos BRB?",
                answer: "Los Buckling-Restrained Braces son disipadores de energía sísmica en puntos estratégicos de la estructura. Baumex los implementó por primera vez en Mexicali para el proyecto Gulfstream 550K — tecnología usada en Ciudad de México y Japón.",
              },
              {
                id: 4,
                question: "¿Cuánta capacidad eléctrica pueden diseñar?",
                answer: "Hasta 20 MW de capacidad instalada, como en el proyecto Gulfstream 550K. Incluye diseño de subestaciones, paneles solares y sistemas de distribución completos.",
              },
              {
                id: 5,
                question: "¿Pueden diseñar proyectos especiales fuera de naves estándar?",
                answer: "Sí. Hemos diseñado un puente vehicular de 95 m sin columnas para Skyworks, un túnel de viento con blower de 3,000 HP para Honeywell, y cimentaciones de precisión milimétrica para Deacero.",
              },
              {
                id: 6,
                question: "¿Cuánto tarda el diseño de un proyecto ejecutivo?",
                answer: "Depende de la complejidad, pero un proyecto ejecutivo completo típicamente se desarrolla en 2-4 meses. El cronograma incluye todas las disciplinas trabajando en paralelo bajo un solo techo.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
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
import {CuadritosLluviaDos} from "@/components/ui/brandpetram/cuadritos-lluvia-dos"
import {FaqSectionsThreeColumnsBPConProps} from '@/components/brandpetram/con-props/faq-sections-three-columns-bp-con-props'
import {FeatureSection3BPConProps} from '@/components/brandpetram/con-props/feature-section-3-bp-con-props'
import {FeatureSection5InvertedBPConProps} from '@/components/brandpetram/con-props/feature-section-5-inverted-bp-con-props'
import {FeatureSection6BPConProps} from "@/components/brandpetram/con-props/feature-section-6-bp-con-props"
import {SplitWithImageBPConProps} from '@/components/brandpetram/con-props/split-with-image-bp-con-props'
import { Compass, Zap, Shield, Ruler, ClipboardCheck, FileSearch, Settings } from 'lucide-react'
import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const TYPES = [
  'Seismic',
  'Electrical',
  'Structural',
  'Thermal',
  'Civil',
  'Mechanical',
  'Hydraulic',
  'Sustainable',
  'HVAC',
  'Specialized',
]

function TypewriterType() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = TYPES[index]
    const speed = isDeleting ? 40 : 80
    const pause = !isDeleting && displayed === word ? 2000 : isDeleting && displayed === '' ? 300 : speed

    const timer = setTimeout(() => {
      if (!isDeleting && displayed === word) {
        setIsDeleting(true)
      } else if (isDeleting && displayed === '') {
        setIsDeleting(false)
        setIndex((i) => (i + 1) % TYPES.length)
      } else if (isDeleting) {
        setDisplayed(word.slice(0, displayed.length - 1))
      } else {
        setDisplayed(word.slice(0, displayed.length + 1))
      }
    }, pause)

    return () => clearTimeout(timer)
  }, [displayed, isDeleting, index])

  return <span>{displayed}<span className="animate-pulse">|</span></span>
}

export default function EngineeringDesignPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden mt-32">
      <Header lang="en" />

      <main>
        {/* Hero — Image grid */}
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
            badge="Industrial Engineering in Mexicali"
            titulo={<>Engineering designed<br/>for your operation</>}
            parrafo="Deep foundations in collapsible soil. BRB seismic systems. 20 MW substations. HVAC with 90% water recovery. Six engineering disciplines work in parallel to solve what your operation demands — from the executive project to final delivery."
            boton1Texto="Contact Us"
            boton1Href="/contact"
            boton2Texto="Learn more →"
            boton2Href="/construction/build-to-suit"
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
            poligonoText="World-Class Industrial Engineering"
            titulo="Six engineering disciplines"
            parrafo="Civil, structural, electrical, mechanical, architecture, and cost engineering. From foundations in seismic zone 4 to 20 MW substations and FM Global fire protection."
          />
        </div>

        {/* Image with label */}
        <div className="container mx-auto mt-16 md:mt-32 w-11/12">
          <div className="relative h-60 md:h-[35vh] lg:h-[40vh] 1200:h-[60vh] xl:h-[70vh]">
            <ImagenConEtiquetaConProps
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-271.jpg"
              alt="Industrial engineering and design in Mexicali"
              etiqueta={<>We Solve<br /><span className="block h-[1em]"><TypewriterType /></span> Engineering</>}
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

        {/* Decorative line */}
        <div className="w-1/2 1728:w-7/12 md:ml-auto relative mt-0 h-20 md:h-20 1200:h-40 1366:h-40 1728:h-64 mt-20 z-30 md:pr-4">
          <LineaLConProps
            orientacion="top-right"
            anchoHorizontal="md:w-7/12"
            altoVertical="h-full"
            color="bg-foreground/20"
          />
        </div>

        {/* Feature Section — Departments */}
        <div className="w-11/12 mx-auto 1200:-translate-y-16 1366:-translate-y-16 1728:-translate-y-24">
          <FeatureSection6BPConProps
            badge="Your Executive Project"
            title="What does your industrial building need? That defines our engineering"
            description="Your technical requirements determine which disciplines are activated and to what depth. We don't apply a formula — we solve your specific problem."
            feature1Title="Challenging soil? We solve it from the ground study"
            feature1Description="Soil mechanics, 18 m concrete piles in collapsible sandy soil, BRB seismic systems for seismic zone 4. Your foundation is calculated for your exact terrain."
            feature1Icon={<Compass className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature2Title="High electrical demand? We size it from the project stage"
            feature2Description="From 500 KVA to 20 MW installed capacity. Substations, solar panels, HVAC with 90% water recovery. All integrated in a single executive project."
            feature2Icon={<Zap className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            button1Text="Engineering consultation"
            button2Text="See what we've solved"
            imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-272.jpg"
            imageAlt="Industrial design"
          />
        </div>

        {/* BigNumber — Engineering scale */}
        <div>
          <BigNumberConProps
            imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-273.jpg"
            imageAlt="Largest industrial building in Mexicali"
            number="550K"
            title={<>Square feet<br/>with first-class<br/>engineering</>}
            subtitle={<>The largest industrial building<br className="hidden md:block"/>in Mexicali — for Gulfstream</>}
          />
        </div>

        {/* Cuadro Circulo — Engineering problems solved */}
        <div>
          <CuadroCirculoConEscuadraConProps
            titulo={<>Problems that<br/>no one else has<br/>solved here</>}
            parrafo="Need seismic systems that don't exist in Mexicali? A column-free bridge over a federal drainage channel? A wind tunnel rated for 3,000 HP pressure? We've already designed and built them."
            numeroCirculo="18"
            simboloNumero="m"
            itemsCirculo={["BRB seismic", "95 m bridge", "Wind tunnel", "Deep piles", "20 MW electrical"]}
          />
        </div>

        {/* Mosaic — Featured projects */}
        <div className="w-11/12 mx-auto -mt-20 md:-mt-64 1024:-mt-40 relative">
          <Mosaico2ConProps
            bloque1Titulo="52,200 m² for Gulfstream"
            bloque1Descripcion="BRB seismic, 20 MW, LEED Gold — designed for an operation that didn't fit any catalog"
            bloque1LinkTexto="See how it was done"
            bloque1LinkHref="/construction/build-to-suit"
            bloque2ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-274.jpg"
            bloque2ImagenAlt="Gulfstream project"
            bloque3ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-275.jpg"
            bloque3ImagenAlt="Industrial construction"
            bloque4Titulo="Your facility doesn't exist in any catalog?"
            bloque4Descripcion="We design it from scratch for your operation"
            bloque4LinkTexto="Contact Us"
            bloque4LinkHref="/contact"
            imagenDerechaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-276.jpg"
            imagenDerechaAlt="Industrial engineering"
          />

          <div className="absolute top-full right-20 md:right-20 1200:right-40 z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-top-right">
            <CuadritosLluviaDos />
          </div>
        </div>

        {/* Large paragraph */}
        <div className="flex flex-col gap-4">
          <div className="container ml-10 md:mx-auto 1200:-translate-x-16 w-7/12 md:w-8/12 1200:w-8/12 1366:w-8/12 1536:w-9/12 lg:max-w-6xl my-10 md:mt-20">
            <ParrafoBigConProps>
              Reinforced concrete piles driven 18 meters deep in collapsible sandy soil. BRB seismic systems for seismic zone 4. A 95-meter vehicular bridge with no columns. A wind tunnel rated for 3,000 HP of pressure. That is engineering.
            </ParrafoBigConProps>
          </div>
        </div>

        {/* Feature 5 — Project management */}
        <div className="container mx-auto w-10/12">
          <FeatureSection5InvertedBPConProps
            tagline="Specialized Engineering"
            titulo="Engineering that goes beyond standard facilities"
            descripcion="When your project demands something that doesn't exist in any catalog, these are the capabilities we activate."
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-277.jpg"
            imagenAlt="Specialized engineering in Mexicali"
            feature1Icon={<Shield className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature1Titulo="Seismic engineering"
            feature1Descripcion="BRB (Buckling-Restrained Braces) systems for seismic zone 4. First implementation in Mexicali — technology from Japan and Mexico City."
            feature2Icon={<Zap className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            feature2Titulo="High voltage and solar energy"
            feature2Descripcion="Substations up to 20 MW. 10 MW in solar panels distributed across rooftop and carports. Full permitting with CFE."
            feature3Icon={<Compass className="h-5 w-5" />}
            feature3IconColor="text-green-600"
            feature3Titulo="Deep foundations"
            feature3Descripcion="Reinforced concrete piles at 18 m in collapsible sandy soil. Soil mechanics verified by independent laboratory EPGC."
            feature4Icon={<Ruler className="h-5 w-5" />}
            feature4IconColor="text-purple-600"
            feature4Titulo="Clear-span structures"
            feature4Descripcion="Column-free vehicular bridges up to 95 m. Tall buildings for wind tunnels and large-scale industrial equipment."
          />
        </div>

        {/* Feature 3 — Certifications */}
        <div className="container mx-auto w-10/12 lg:mt-20">
          <FeatureSection3BPConProps
            tagline="Your Standards, From the First Line"
            titulo="Does your corporate require FM Global, LEED, or ISN? We integrate them from the design phase"
            descripcion="We don't certify at the end — we design for compliance from the executive project stage. This eliminates rework and reduces your insurance premium."
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-278.jpg"
            imagenAlt="Industrial certifications"
            feature1Icon={<Settings className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature1Titulo="FM Global and LEED from design stage"
            feature1Descripcion="Your facility is designed to pass FM Global audits on walls, roof, structure, and fire protection. Gulfstream 550K is certifying LEED Gold with 10 MW solar."
            feature2Icon={<Zap className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            feature2Titulo="Active ISN — access to Fortune 500 supply chains"
            feature2Descripcion="'Recommended' rating by Honeywell on ISN. Without it, you can't enter their supply chain. With it, your facility is built by a pre-approved team."
          />
        </div>

        {/* Split — CTA */}
        <div>
          <SplitWithImageBPConProps
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
            imagenAlt="Baumex Engineering"
            tagline="Your Safe Worksite"
            titulo="Your workforce and ours protected by the same system Gulfstream approved"
            parrafo1="If your corporate audits safety before authorizing a builder, here is our scorecard: 1,092,745 man-hours worked with zero fatalities. 404 consecutive days without incidents."
            parrafo2="18-chapter HSE manual. Permits before every shift. Blood pressure checks before working at heights. DC-3 certification for all personnel. Maximum 12-hour shifts."
            feature1Icon={<CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
            feature1IconColor="text-orange-600 dark:text-orange-500"
            feature1Titulo="404 consecutive days without incidents."
            feature1Descripcion="Public scorecard from the Gulfstream project. Transparent record of every incident — including minor ones."
            feature2Icon={<LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
            feature2IconColor="text-blue-600 dark:text-blue-500"
            feature2Titulo="Risk matrix before every shift."
            feature2Descripcion="Impact by probability. Identified hazards, required equipment, emergency plan. Fire Watch assigned in every welding zone."
            parrafo3="Tell us what your operation needs. We'll deliver the complete executive project — design, engineering, fixed budget, and schedule."
            subtitulo="Free engineering consultation"
            parrafo4="for your next industrial project in Mexicali."
          />
        </div>

        {/* FAQs */}
        <div>
          <FaqSectionsThreeColumnsBPConProps
            titulo="Industrial Engineering FAQs"
            descripcion="Need more information? Contact us by"
            linkTexto="email"
            linkHref="mailto:contacto@gruponelson.com"
            faqs={[
              {
                id: 1,
                question: "How can my facility meet FM Global standards from day one?",
                answer: "The engineering for walls, roof, structure, and fire suppression systems is calculated from the executive project to pass FM Global audits. This reduces your insurance premium and eliminates rework.",
              },
              {
                id: 2,
                question: "Can I obtain LEED Gold certification for my industrial building?",
                answer: "Yes. The executive project integrates solar panels, high-efficiency HVAC with 90% water recovery, and certified materials. Gulfstream 550K is in the process of achieving LEED Gold with 10 MW solar.",
              },
              {
                id: 3,
                question: "How do I protect my facility in seismic zone 4?",
                answer: "With BRB (Buckling-Restrained Braces) seismic systems — energy dissipators at strategic points of the structure. Technology used in Japan and Mexico City, implemented for the first time in Mexicali.",
              },
              {
                id: 4,
                question: "What electrical capacity can my facility reach?",
                answer: "Whatever your operation requires. From 500 KVA substations to 20 MW installed capacity. Includes full permitting with CFE, solar panels, and distribution systems.",
              },
              {
                id: 5,
                question: "Can I build on challenging soil?",
                answer: "Yes. The civil engineering includes soil mechanics with an independent laboratory and deep foundations — reinforced concrete piles at 18 meters in collapsible sandy soil, verified with documented testing.",
              },
              {
                id: 6,
                question: "How long does it take to get a complete executive project?",
                answer: "Between 2 and 4 months depending on complexity. The 6 engineering disciplines work in parallel, not in sequence — this compresses the timeline without sacrificing depth.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  )
}

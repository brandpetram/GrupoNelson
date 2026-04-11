/**
 * Página Componentes-3 - Basada en Ambaflex (SDI)
 *
 * Esta página usa componentes con props copiados de SDI.
 * En la siguiente fase se adaptarán los props con contenido de Grupo Nelson.
 */

'use client'

import Header from '@/components/Header'
import { CuadriculaSectionConProps } from '@/components/brandpetram/con-props/cuadricula-section-con-props'
import { GunLikeConProps } from '@/components/brandpetram/con-props/gun-like-con-props'
import {LineaLConProps} from "@/components/brandpetram/con-props/linea-l-con-props";
import {ParrafoBigConProps} from "@/components/brandpetram/con-props/parrafo-big-con-props";
import {GridOverlay} from "@/components/ui/brandpetram/grid";
import {BigNumberConProps} from "@/components/brandpetram/con-props/big-number-con-props";
import {ImagenConEtiquetaConProps} from "@/components/brandpetram/con-props/imagen-con-etiqueta-con-props";
import {CuadroCirculoConEscuadraConProps} from "@/components/brandpetram/con-props/cuadro-circulo-con-escuadra-con-props";
import {Mosaico2ConProps} from "@/components/brandpetram/con-props/mosaico-2-con-props";
import {CirculosConProps} from "@/components/brandpetram/con-props/circulos-con-props";
import {CuadritosLluviaDos} from "@/components/ui/brandpetram/cuadritos-lluvia-dos";
import {TresCardsConProps} from "@/components/brandpetram/con-props/tres-cards-con-props";
import {FaqSectionsThreeColumnsBPConProps} from '@/components/brandpetram/con-props/faq-sections-three-columns-bp-con-props'
import {FeatureSection3BPConProps} from '@/components/brandpetram/con-props/feature-section-3-bp-con-props'
import {FeatureSection5InvertedBPConProps} from '@/components/brandpetram/con-props/feature-section-5-inverted-bp-con-props'
import {FeatureSection6BPConProps} from "@/components/brandpetram/con-props/feature-section-6-bp-con-props";
import {SplitWithImageBPConProps} from '@/components/brandpetram/con-props/split-with-image-bp-con-props';
import { Settings, Zap, Wrench, Truck, Shield, Clock } from 'lucide-react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export default function ComponentesTresPage() {
  return (
      <div className="flex flex-col min-h-screen overflow-hidden mt-32">
      <Header />

      <main>
        {/* Cuadricula Section con props */}
          <div>
              <CuadriculaSectionConProps
              imagen1="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-251.jpg"
              imagen2="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-252.jpg"
              imagen3="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-253.jpg"
              imagen4="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-254.jpg"
              imagen5="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
              imagen6="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg"
              imagen7="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-257.jpg"
              imagen8="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-258.jpg"
              imagen9="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-259.jpg"
              imagen10="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-260.jpg"
              imagen11="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg"
              imagen12="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-262.jpg"
              imagen13="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-263.jpg"
              imagen14="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-264.jpg"
              imagen15="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-265.jpg"
              imagen16="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-266.jpg"
              imagen17="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-267.jpg"
              imagen18="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-268.jpg"
              imagen19="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-269.jpg"
              imagen20="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-270.jpg"
              badge="Desarrollo industrial en Mexicali"
              titulo={<>Parques Industriales <br/> en Mexicali</>}
              parrafo="Renta y construcción de naves industriales en los mejores parques industriales de Mexicali. Ubicación estratégica, infraestructura de clase mundial y servicios completos para tu operación industrial."
              boton1Texto="Contáctanos"
              boton1Href="#"
              boton2Texto="Conoce más →"
              boton2Href="#"
              overlayColor="rgba(100, 150, 250, 0.9)"
              overlayBlendMode="multiply"
              filterBrightness={1.10}
              filterSaturate={1.55}
              filterContrast={1.05}
          /></div>

          {/*Gunlike Section con props */}
          <div>
              <GunLikeConProps
              poligonoText="Grupo Nelson en Mexicali"
              titulo="Desarrollo, Renta y Construcción"
              parrafo="La experiencia, confiabilidad e infraestructura que necesitas en parques industriales de primer nivel en Mexicali"
          />
          </div>

        {/* Imagen con etiqueta con props y Grid overlay decorativo */}
        <div className="container mx-auto mt-16 md:mt-32 w-11/12 ">
            <div className="relative h-60 md:h-[35vh] lg:h-[40vh] 1200:h-[60vh] xl:h-[70vh] ">
                <ImagenConEtiquetaConProps
                    src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-271.jpg"
                    alt="Parques industriales Mexicali"
                    etiqueta="Soluciones Industriales"
                />
                {/* Grid overlay decorativo */}
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

        {/* Línea decorativa con props */}
        <div className="w-1/2 1728:w-7/12 md:ml-auto relative mt-0 h-20 md:h-20 1200:h-40 1366:h-40 1728:h-64 mt-20 z-30 md:pr-4">
            <LineaLConProps
                orientacion="top-right"
                anchoHorizontal="md:w-7/12"
                altoVertical="h-full"
                color="bg-foreground/20"
            />
        </div>

        {/* Feature Section con props */}
        <div className={'w-11/12 mx-auto 1200:-translate-y-16 1366:-translate-y-16 1728:-translate-y-24'}>
            <FeatureSection6BPConProps
              badge="Parques Industriales"
              title="Ubicación estratégica para tu operación industrial"
              description="Naves industriales en renta y construcción ubicadas en los mejores parques industriales de Mexicali, con acceso inmediato a la frontera y servicios de clase mundial."
              feature1Title="Infraestructura Completa"
              feature1Description="Servicios industriales completos: energía trifásica, agua, drenaje industrial, seguridad 24/7 y conectividad de alta velocidad."
              feature1Icon={<Settings className="h-5 w-5" />}
              feature1IconColor="text-orange-600"
              feature2Title="Ubicación Estratégica"
              feature2Description="Acceso inmediato a la frontera con Estados Unidos y principales vías de comunicación para optimizar tu logística."
              feature2Icon={<Zap className="h-5 w-5" />}
              feature2IconColor="text-blue-600"
              button1Text="Solicitar Información"
              button2Text="Ver Parques"
              imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-272.jpg"
              imageAlt="Parque industrial"
            />
        </div>

        {/* BigNumber con props */}
        <div>
              <BigNumberConProps
              imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-273.jpg"
              imageAlt="Nave industrial Mexicali"
              number="4"
              title={<>Parques <br/> Industriales</>}
              subtitle={<>Nelson I, Nelson II, Vigía I y Vigía II <br className={'hidden md:block'}/> en Mexicali</>}
          />
          </div>

        {/* Cuadro Circulo con props */}
        <div>
              <CuadroCirculoConEscuadraConProps
              titulo={<>Naves<br/>Industriales<br/>Personalizadas</>}
              parrafo="Construcción de naves industriales con diseños adaptados a tus necesidades específicas, desde manufactura ligera hasta operaciones de alto rendimiento industrial."
              numeroCirculo="100"
              simboloNumero="%"
              itemsCirculo={["Diseño", "Construcción", "Permisos", "Infraestructura", "Entrega"]}
          />
          </div>

        {/* Mosaico 2 con props */}
          <div className={'w-11/12 mx-auto -mt-20 md:-mt-64 1024:-mt-40 relative'}>
          <Mosaico2ConProps
            bloque1Titulo="Renta de Naves"
            bloque1Descripcion="Espacios industriales listos para operar en ubicaciones estratégicas"
            bloque1LinkTexto="Ver Disponibles"
            bloque1LinkHref="#"
            bloque2ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-274.jpg"
            bloque2ImagenAlt="Parque industrial"
            bloque3ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-275.jpg"
            bloque3ImagenAlt="Nave industrial"
            bloque4Titulo="¿Tienes preguntas?"
            bloque4Descripcion="Contáctanos ahora para resolver tus preguntas"
            bloque4LinkTexto="Contactar Aquí"
            bloque4LinkHref="#"
            imagenDerechaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-276.jpg"
            imagenDerechaAlt="Parque industrial destacado"
          />

          {/* Cuadritos decorativos */}
          <div className="absolute top-full right-20 md:right-20 1200:right-40 z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-top-right">
            <CuadritosLluviaDos />
          </div>
        </div>

        {/* Parrafo con props */}
        <div className="flex flex-col gap-4">
            <div className="container ml-10 md:mx-auto 1200:-translate-x-16 w-7/12 md:w-8/12 1200:w-8/12 1366:w-8/12 1536:w-9/12 lg:max-w-6xl my-10 md:mt-20">
                <ParrafoBigConProps>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.
                </ParrafoBigConProps>
            </div>
        </div>

          {/*Feature section 5 inverted con props */}
        <div className="container mx-auto w-10/12 ">
            <FeatureSection5InvertedBPConProps
              tagline="Parques Industriales Mexicali"
              titulo="Infraestructura completa para tu operación"
              descripcion="Parques industriales con servicios completos, ubicación estratégica y acceso inmediato a la frontera para optimizar tu operación manufacturera."
              imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-277.jpg"
              imagenAlt="Nave industrial en Mexicali"
              feature1Icon={<Wrench className="h-5 w-5" />}
              feature1IconColor="text-orange-600"
              feature1Titulo="Servicios Industriales"
              feature1Descripcion="Energía trifásica, agua, drenaje industrial, gas natural y telecomunicaciones de alta velocidad en todos los parques."
              feature2Icon={<Truck className="h-5 w-5" />}
              feature2IconColor="text-blue-600"
              feature2Titulo="Logística Optimizada"
              feature2Descripcion="Acceso directo a carreteras federales y proximidad inmediata con la frontera para facilitar tu operación binacional."
              feature3Icon={<Shield className="h-5 w-5" />}
              feature3IconColor="text-green-600"
              feature3Titulo="Seguridad 24/7"
              feature3Descripcion="Vigilancia las 24 horas, control de acceso y sistemas de seguridad perimetral en todos nuestros parques industriales."
              feature4Icon={<Clock className="h-5 w-5" />}
              feature4IconColor="text-purple-600"
              feature4Titulo="Rápida Ocupación"
              feature4Descripcion="Naves listas para operar o construcción rápida con permisos y gestión completa incluida."
            />

        </div>
          {/*Feature section 3 con props */}
          <div className="container mx-auto w-10/12 lg:mt-20">
              <FeatureSection3BPConProps
                  tagline="Desarrollo Industrial"
                  titulo="Espacios industriales diseñados para el éxito"
                  descripcion="Naves industriales construidas con especificaciones de clase mundial, adaptadas a las necesidades de la industria manufacturera moderna."
                  imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-278.jpg"
                  imagenAlt="Instalaciones industriales"
                  feature1Icon={<Settings className="h-5 w-5" />}
                  feature1IconColor="text-orange-600"
                  feature1Titulo="Construcción a Medida"
                  feature1Descripcion="Naves industriales diseñadas específicamente para tus procesos de manufactura y requerimientos operacionales."
                  feature2Icon={<Zap className="h-5 w-5" />}
                  feature2IconColor="text-blue-600"
                  feature2Titulo="Infraestructura Eficiente"
                  feature2Descripcion="Instalaciones diseñadas para maximizar eficiencia operativa con servicios industriales de alta capacidad."
              />
          </div>

        {/* Split image con props */}
          <div>
              <SplitWithImageBPConProps
              imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
              imagenAlt="Parque industrial Grupo Nelson"
              tagline="Grupo Nelson"
              titulo="Más que espacios, soluciones industriales completas"
              parrafo1="En Grupo Nelson no solo rentamos naves industriales, desarrollamos soluciones completas de infraestructura industrial que optimizan tu operación y maximizan tu productividad en Mexicali."
              parrafo2="Nuestro equipo cuenta con amplia experiencia en desarrollo de parques industriales en Mexicali. Desde la planeación hasta la entrega de llaves, te acompañamos en cada etapa de tu proyecto industrial."
              feature1Icon={<CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
              feature1IconColor="text-orange-600 dark:text-orange-500"
              feature1Titulo="Ubicación Estratégica."
              feature1Descripcion="Parques industriales ubicados estratégicamente cerca de la frontera con acceso inmediato a principales vías de comunicación."
              feature2Icon={<LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
              feature2IconColor="text-blue-600 dark:text-blue-500"
              feature2Titulo="Servicios Completos."
              feature2Descripcion="Infraestructura industrial completa con todos los servicios: energía, agua, drenaje, gas y telecomunicaciones."
              feature3Icon={<ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
              feature3IconColor="text-green-600 dark:text-green-500"
              feature3Titulo="Soporte Continuo."
              feature3Descripcion="Administración profesional de parques y mantenimiento de áreas comunes para garantizar operaciones sin interrupciones."
              parrafo3="Trabajamos con empresas multinacionales y manufactureras de primer nivel, ofreciendo espacios industriales que se adaptan perfectamente a tus necesidades de producción y logística."
              subtitulo="¿Necesitas expandir tu operación?"
              parrafo4="Los parques industriales Grupo Nelson son la solución ideal cuando necesitas infraestructura confiable y ubicación estratégica. Naves listas para operar, construcción rápida y servicios completos respaldados por años de experiencia en desarrollo industrial."
          />
          </div>

        {/* Circulo con props */}
        <div className={'px-4 md:ml-10 1200:ml-32 mt-32 md:px-0'}>
          <CirculosConProps
            circulo1Letra="N"
            circulo1Titulo="Nelson I"
            circulo1Descripcion="Parque industrial con infraestructura completa y naves disponibles para renta. Ubicación estratégica con acceso inmediato a la frontera. Servicios industriales de primer nivel."
            circulo2Letra="N"
            circulo2Titulo="Nelson II"
            circulo2Descripcion="Desarrollo industrial de nueva generación con tecnología de punta. Construcción de naves a la medida y espacios listos para operar. Infraestructura moderna y eficiente."
            circulo3Letra="V"
            circulo3Titulo="Vigía"
            circulo3Descripcion="Parques industriales Vigía I y Vigía II con ubicación privilegiada en Mexicali. Naves industriales con especificaciones internacionales. Seguridad y servicios completos."
          />
        </div>

        {/* Faqs Section Three Columns con props */}
          <div>
              <FaqSectionsThreeColumnsBPConProps
              titulo="Preguntas Frecuentes Sobre Parques Industriales"
              descripcion="¿Tienes alguna pregunta adicional que no encontraste aquí? Contáctanos directamente por"
              linkTexto="correo electrónico"
              linkHref="mailto:contacto@gruponelson.com"
              faqs={[
                  {
                      id: 1,
                      question: "¿Qué ventajas tienen los parques industriales Grupo Nelson?",
                      answer: "Los parques industriales Grupo Nelson ofrecen ubicación estratégica cerca de la frontera, infraestructura completa con todos los servicios industriales, seguridad 24/7 y gestión profesional. Son ideales para operaciones manufactureras que requieren conectividad binacional.",
                  },
                  {
                      id: 2,
                      question: "¿Qué tipo de naves industriales tienen disponibles?",
                      answer: "Contamos con naves industriales desde 5,000 hasta 100,000 pies cuadrados, tanto para renta como construcción a la medida. Se adaptan a diferentes industrias: manufactura, logística, distribución, ensamble y más.",
                  },
                  {
                      id: 3,
                      question: "¿Cuánto tiempo toma construir una nave industrial?",
                      answer: "El tiempo de construcción varía según el tamaño y especificaciones, pero típicamente se completa en 6-9 meses. Incluimos gestión completa de permisos y supervisión de obra para garantizar entrega a tiempo.",
                  },
                  {
                      id: 4,
                      question: "¿Qué servicios incluyen los parques?",
                      answer: "Todos nuestros parques incluyen: energía trifásica, agua, drenaje industrial, gas natural, seguridad 24/7, control de acceso, mantenimiento de áreas comunes, telecomunicaciones y gestión administrativa profesional.",
                  },
                  {
                      id: 5,
                      question: "¿Puedo personalizar el diseño de mi nave?",
                      answer: "Absolutamente. Ofrecemos construcción a la medida donde tu equipo de ingeniería puede especificar todos los detalles: altura de nave, sistemas eléctricos, pisos industriales, muelles de carga y más.",
                  },
                  {
                      id: 6,
                      question: "¿Qué contratos de renta ofrecen?",
                      answer: "Ofrecemos contratos de renta flexibles desde 3 años. Incluyen mantenimiento de la nave, seguridad del parque y todos los servicios industriales. Además, manejamos toda la gestión administrativa.",
                  },
              ]}
          />
          </div>

        {/* Tres Cards con props */}
        <div className={'mt-32 1366:ml-16'}>
          <TresCardsConProps
            card1Titulo={<>Renta de<br/>Naves<br/>Industriales</>}
            card1BotonTexto="Ver Disponibles"
            card1BotonHref="#rentar"
            card1VideoSrc="/conveyors-industriales/videos/conveyors-industriales-de-banda-en-todo-mexico.mp4"
            card1VideoPoster="/conveyors-industriales/videos/conveyors-industriales-de-banda-en-todo-mexico-poster.jpg"
            card2Titulo={<>Construcción<br/>de Naves<br/>a Medida</>}
            card2BotonTexto="Iniciar Proyecto"
            card2BotonHref="#construir"
            card2ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-280.jpg"
            card2ImagenAlt="Renta de naves industriales"
            card3Titulo={<>Nuestros<br/>Parques<br/>Industriales</>}
            card3BotonTexto="Conocer Parques"
            card3BotonHref="#parques"
            card3ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-281.jpg"
            card3ImagenAlt="Construcción de naves industriales"
          />
        </div>
      </main>
    </div>
  )
}

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
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main>
        {/* Cuadricula Section con props */}
          <div>
              <CuadriculaSectionConProps
              imagen1="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-8.jpg"
              imagen2="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-2.jpg"
              imagen3="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-4.jpg"
              imagen4="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-5.jpg"
              imagen5="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-12.webp"
              imagen6="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-11.webp"
              imagen7="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-1.jpg"
              imagen8="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-6.jpg"
              imagen9="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-7.jpg"
              imagen10="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-9.jpg"
              imagen11="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-32.jpg"
              imagen12="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-10.jpg"
              imagen13="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-13.jpg"
              imagen14="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-14.jpg"
              imagen15="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-3.jpg"
              imagen16="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-17.jpg"
              imagen17="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-28.jpg"
              imagen18="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-15.jpg"
              imagen19="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-16.jpg"
              imagen20="/conveyors-industriales/img/ambaflex/conveyors-ambaflex-mexico-18.jpg"
              badge="Expertos en soluciones y sistemas de"
              titulo={<>Conveyors Ambaflex <br/> en todo México</>}
              parrafo="Soluciones llave en mano con sistemas de conveyors espirales Ambaflex. Ahorra espacio hasta 66%, operación con un solo motor y mantenimiento preventivo con equipo técnico especializado en conveyors industriales para la industria Mexicana."
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
              poligonoText="Sistemas Ambaflex en México"
              titulo="Ingenieria, Suministro y Soluciones"
              parrafo="La experiencia, confiabilidad e infraestructura que necesitas en un equipo especializado en conveyors industriales ambaflex"
          />
          </div>

        {/* Imagen con etiqueta con props y Grid overlay decorativo */}
        <div className="container mx-auto mt-16 md:mt-32 w-11/12 ">
            <div className="relative h-60 md:h-[35vh] lg:h-[40vh] 1200:h-[60vh] xl:h-[70vh] ">
                <ImagenConEtiquetaConProps
                    src="/conveyors-industriales/img/conveyors-de-gravedad-mexico.jpg"
                    alt="Conveyors de gravedad"
                    etiqueta="Soluciones Ambaflex"
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
              badge="Feature section"
              title="Headline that shows solution's impact on user success"
              description="Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling."
              feature1Title="Feature de Autoridad"
              feature1Description="Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details."
              feature1Icon={<Settings className="h-5 w-5" />}
              feature1IconColor="text-orange-600"
              feature2Title="Feature de Autoridad"
              feature2Description="Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details."
              feature2Icon={<Zap className="h-5 w-5" />}
              feature2IconColor="text-blue-600"
              button1Text="Cotiza Ahora"
              button2Text="Conoce más"
              imageSrc="https://ui.shadcn.com/placeholder.svg"
              imageAlt="Hero image"
            />
        </div>

        {/* BigNumber con props */}
        <div>
              <BigNumberConProps
              imageSrc="/conveyors-industriales/img/conveyors-industriales-de-banda-en-mexico-5.jpg"
              imageAlt="Conveyors de banda industrial"
              number="+60%"
              title={<>De Espacio <br/> Ahorrado</>}
              subtitle={<>Gracias a los Conveyors Verticales <br className={'hidden md:block'}/> Ambaflex implementados
                  por SDI industrial</>}
          />
          </div>

        {/* Cuadro Circulo con props */}
        <div>
              <CuadroCirculoConEscuadraConProps
              titulo={<>Conveyors<br/>de Grado<br/>Alimenticio</>}
              parrafo="Nuestros sistemas de conveyors industriales para la industria alimenticia combinan ingeniería de precisión y estrictos estándares de higiene, garantizando soluciones eficientes y seguras."
              numeroCirculo="360"
              simboloNumero="°"
              itemsCirculo={["Equipo", "Ingeniería", "Instalación", "Mantenimiento", "Refacciones"]}
          />
          </div>

        {/* Mosaico 2 con props */}
          <div className={'w-11/12 mx-auto -mt-20 md:-mt-64 1024:-mt-40 relative'}>
          <Mosaico2ConProps
            bloque1Titulo="Conveyor Industrial"
            bloque1Descripcion="Diseño e Instalación de Sistemas Conveyor Lorem"
            bloque1LinkTexto="Ver Más"
            bloque1LinkHref="#"
            bloque2ImagenSrc="/brandpetram/imagen-de-template-2.jpg"
            bloque2ImagenAlt="Instalación industrial"
            bloque3ImagenSrc="/brandpetram/imagen-de-template-3.jpg"
            bloque3ImagenAlt="Aire acondicionado industrial"
            bloque4Titulo="¿Tienes preguntas?"
            bloque4Descripcion="Contáctanos ahora para resolver tus preguntas"
            bloque4LinkTexto="Contactar Aquí"
            bloque4LinkHref="#"
            imagenDerechaSrc="/brandpetram/imagen-de-template-1.jpg"
            imagenDerechaAlt="Imagen destacada"
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
              tagline="Soluciones Ambaflex"
              titulo="Sistemas completos de transporte vertical"
              descripcion="Conveyors espirales Ambaflex que maximizan el espacio disponible, reducen costos operativos y mejoran la eficiencia en tu planta de producción."
              imagenSrc="https://ui.shadcn.com/placeholder.svg"
              imagenAlt="Conveyor Ambaflex en operación"
              feature1Icon={<Wrench className="h-5 w-5" />}
              feature1IconColor="text-orange-600"
              feature1Titulo="Instalación Profesional"
              feature1Descripcion="Equipo técnico especializado con experiencia en implementación de sistemas Ambaflex en toda la industria mexicana."
              feature2Icon={<Truck className="h-5 w-5" />}
              feature2IconColor="text-blue-600"
              feature2Titulo="Entregas Certificadas"
              feature2Descripcion="Distribución garantizada y tiempos de entrega confiables para mantener tu operación funcionando sin interrupciones."
              feature3Icon={<Shield className="h-5 w-5" />}
              feature3IconColor="text-green-600"
              feature3Titulo="Soporte Técnico"
              feature3Descripcion="Mantenimiento preventivo y correctivo con refacciones originales para maximizar la vida útil de tu equipo."
              feature4Icon={<Clock className="h-5 w-5" />}
              feature4IconColor="text-purple-600"
              feature4Titulo="Ahorro de Tiempo"
              feature4Descripcion="Reducción significativa en tiempos de transporte vertical y optimización de flujos de producción."
            />

        </div>
          {/*Feature section 3 con props */}
          <div className="container mx-auto w-10/12 lg:mt-20">
              <FeatureSection3BPConProps
                  tagline="Innovación Industrial"
                  titulo="Tecnología Ambaflex para la industria moderna"
                  descripcion="Soluciones de transporte que se adaptan a tus necesidades específicas con diseño modular y configuración flexible."
                  imagenSrc="https://ui.shadcn.com/placeholder.svg"
                  imagenAlt="Tecnología Ambaflex"
                  feature1Icon={<Settings className="h-5 w-5" />}
                  feature1IconColor="text-orange-600"
                  feature1Titulo="Diseño Personalizado"
                  feature1Descripcion="Sistemas configurables que se adaptan perfectamente a tu espacio disponible y requerimientos de producción."
                  feature2Icon={<Zap className="h-5 w-5" />}
                  feature2IconColor="text-blue-600"
                  feature2Titulo="Eficiencia Energética"
                  feature2Descripcion="Operación con un solo motor que reduce consumo eléctrico hasta 60% comparado con sistemas tradicionales."
              />
          </div>

        {/* Split image con props */}
          <div>
              <SplitWithImageBPConProps
              imagenSrc="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
              imagenAlt="Sistemas Ambaflex en operación"
              tagline="Soluciones Integrales"
              titulo="Más que conveyors, soluciones completas"
              parrafo1="En SDI Industrial no solo suministramos conveyors Ambaflex, desarrollamos soluciones completas de transporte vertical que optimizan tu operación y maximizan el espacio disponible en tu planta de producción."
              parrafo2="Nuestro equipo técnico especializado cuenta con experiencia probada en implementación de sistemas Ambaflex en toda la industria mexicana. Desde el diseño hasta la puesta en marcha, te acompañamos en cada etapa del proyecto."
              feature1Icon={<CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
              feature1IconColor="text-orange-600 dark:text-orange-500"
              feature1Titulo="Ahorro de Espacio."
              feature1Descripcion="Reduce hasta 66% del espacio necesario para transporte vertical comparado con sistemas tradicionales de conveyors."
              feature2Icon={<LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
              feature2IconColor="text-blue-600 dark:text-blue-500"
              feature2Titulo="Operación Eficiente."
              feature2Descripcion="Sistema con un solo motor que reduce consumo energético y costos de mantenimiento significativamente."
              feature3Icon={<ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
              feature3IconColor="text-green-600 dark:text-green-500"
              feature3Titulo="Soporte Especializado."
              feature3Descripcion="Mantenimiento preventivo y correctivo con refacciones originales y técnicos certificados Ambaflex."
              parrafo3="Trabajamos con las principales empresas industriales de México, ofreciendo soluciones personalizadas que se adaptan perfectamente a tus necesidades específicas de producción y espacio disponible."
              subtitulo="¿Necesitas optimizar tu espacio?"
              parrafo4="Los conveyors espirales Ambaflex son la solución ideal cuando el espacio es limitado pero la eficiencia no puede comprometerse. Diseño modular, instalación rápida y operación confiable respaldada por más de 30 años de experiencia en la industria."
          />
          </div>

        {/* Circulo con props */}
        <div className={'px-4 md:ml-10 1200:ml-32 mt-32 md:px-0'}>
          <CirculosConProps
            circulo1Letra="S"
            circulo1Titulo="Soporte"
            circulo1Descripcion="Diseñamos y fabricamos sistemas de conveyors completos para tu planta. Te acompañamos desde el concepto hasta la puesta en marcha exitosa. Somos tu socio en proyectos llave en mano."
            circulo2Letra="D"
            circulo2Titulo="Dinámico"
            circulo2Descripcion="Desarrollamos ingeniería de aplicación específica para tus necesidades únicas. Te apoyamos en instalación, troubleshooting y optimización continua de sistemas. Transformamos ideas en sistemas productivos reales y confiables."
            circulo3Letra="I"
            circulo3Titulo="Industrial"
            circulo3Descripcion="Integramos conveyors, automatización y cómputo industrial en tu operación diaria. Te brindamos mantenimiento preventivo y correctivo especializado de calidad. Nuestra experiencia con Fortune 500 respalda cada proyecto."
          />
        </div>

        {/* Faqs Section Three Columns con props */}
          <div>
              <FaqSectionsThreeColumnsBPConProps
              titulo="Preguntas Frecuentes Sobre Conveyors Ambaflex"
              descripcion="¿Tienes alguna pregunta adicional que no encontraste aquí? Contáctanos directamente por"
              linkTexto="correo electrónico"
              linkHref="mailto:contacto@sdi.com"
              faqs={[
                  {
                      id: 1,
                      question: "¿Qué ventajas tienen los conveyors espirales Ambaflex?",
                      answer: "Los conveyors espirales Ambaflex ahorran hasta 66% del espacio comparado con sistemas tradicionales, operan con un solo motor reduciendo consumo energético, y requieren menos mantenimiento. Son ideales para transporte vertical eficiente en espacios reducidos.",
                  },
                  {
                      id: 2,
                      question: "¿Qué tipo de productos pueden transportar?",
                      answer: "Los sistemas Ambaflex pueden transportar una amplia variedad de productos: cajas, paquetes, botellas, contenedores, y más. Son versátiles y se adaptan a diferentes industrias como alimenticia, farmacéutica, manufactura y logística.",
                  },
                  {
                      id: 3,
                      question: "¿Cuánto tiempo toma la instalación?",
                      answer: "El tiempo de instalación varía según el tamaño y complejidad del sistema, pero típicamente se completa en 2-4 semanas. Nuestro equipo técnico especializado garantiza una puesta en marcha rápida y eficiente minimizando interrupciones en tu operación.",
                  },
                  {
                      id: 4,
                      question: "¿Ofrecen servicio de mantenimiento?",
                      answer: "Sí, ofrecemos planes completos de mantenimiento preventivo y correctivo. Contamos con técnicos certificados y refacciones originales Ambaflex para garantizar la máxima disponibilidad y vida útil de tu equipo.",
                  },
                  {
                      id: 5,
                      question: "¿Puedo integrar el sistema con mi línea existente?",
                      answer: "Absolutamente. Los sistemas Ambaflex tienen diseño modular y se integran fácilmente con líneas de producción existentes. Nuestro equipo de ingeniería desarrolla soluciones personalizadas para cada aplicación específica.",
                  },
                  {
                      id: 6,
                      question: "¿Qué garantía tienen los equipos?",
                      answer: "Todos los equipos Ambaflex cuentan con garantía del fabricante y respaldo de SDI Industrial. Además, ofrecemos contratos de servicio extendido para proteger tu inversión a largo plazo.",
                  },
              ]}
          />
          </div>

        {/* Tres Cards con props */}
        <div className={'mt-32 1366:ml-16'}>
          <TresCardsConProps
            card1Titulo={<>Proveeduría<br/>de Conveyors<br/>Ambaflex</>}
            card1BotonTexto="Solicitar Cotización"
            card1BotonHref="#cotizar"
            card1VideoSrc="/conveyors-industriales/videos/conveyors-industriales-de-banda-en-todo-mexico.mp4"
            card1VideoPoster="/conveyors-industriales/videos/conveyors-industriales-de-banda-en-todo-mexico-poster.jpg"
            card2Titulo={<>Ingeniería<br/>de Aplicación<br/>Ambaflex</>}
            card2BotonTexto="Consultar Proyecto"
            card2BotonHref="#proyectos"
            card2ImagenSrc="/conveyors-industriales/img/conveyors-industriales-de-banda-en-mexico-12.jpg"
            card2ImagenAlt="Ingeniería y Proyectos Ambaflex"
            card3Titulo={<>Servicio<br/>y Refacciones<br/>Ambaflex</>}
            card3BotonTexto="Solicitar Servicio"
            card3BotonHref="#servicio"
            card3ImagenSrc="/conveyors-industriales/img/conveyors-industriales-de-banda-en-mexico-14.jpg"
            card3ImagenAlt="Servicio y Refacciones Ambaflex"
          />
        </div>
      </main>
    </div>
  )
}

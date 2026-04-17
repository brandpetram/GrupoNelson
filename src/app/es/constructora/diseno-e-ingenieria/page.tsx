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
import {TypewriterTipo} from '@/components/brandpetram/typewriter-tipo'
import { Compass, Zap, Shield, Ruler, Settings } from 'lucide-react'
import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const TIPOS = [
  'Sísmica',
  'Eléctrica',
  'Estructural',
  'Térmica',
  'Civil',
  'Mecánica',
  'Hidráulica',
  'Sustentable',
  'HVAC',
  'Especializada',
]

export default function DisenoEIngenieriaPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden mt-32">
      <Header />

      <main>
        {/* Hero — Cuadrícula de imágenes */}
        <div>
          <CuadriculaSectionConProps
            imagen1="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-1.jpg"
            imagen2="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg"
            imagen3="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-21.jpg"
            imagen4="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-31.jpg"
            imagen5="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-41.jpg"
            imagen6="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-51.jpg"
            imagen7="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-61.jpg"
            imagen8="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-71.jpg"
            imagen9="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-81.jpg"
            imagen10="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-91.jpg"
            imagen11="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-101.jpg"
            imagen12="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-111.jpg"
            imagen13="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-121.jpg"
            imagen14="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-131.jpg"
            imagen15="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-141.jpg"
            imagen16="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-151.jpg"
            imagen17="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-161.jpg"
            badge="Ingeniería Industrial en Mexicali"
            titulo={<>Ingeniería diseñada<br/>para tu operación</>}
            parrafo="Cimentaciones profundas en suelo colapsable. Sistemas antisísmicos BRB. Subestaciones de 20 MW. HVAC con recuperación de agua al 90%. Seis disciplinas de ingeniería trabajan en paralelo para resolver lo que tu operación exige — desde el proyecto ejecutivo hasta la entrega."
            boton1Texto="Contacto"
            boton1Href="/contacto"
            boton2Texto="Ver más →"
            boton2Href="/constructora/build-to-suit"
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
            poligonoText="Ingeniería Industrial de Clase Mundial"
            titulo="Seis disciplinas de ingeniería"
            parrafo="Civil, estructural, eléctrica, mecánica, arquitectura y costos. Desde cimentaciones en zona sísmica 4 hasta subestaciones de 20 MW y fire protection FM Global."
          />
        </div>

        {/* Imagen con etiqueta */}
        <div className="container mx-auto mt-16 md:mt-32 w-11/12">
          <div className="relative h-60 md:h-[35vh] lg:h-[40vh] 1200:h-[60vh] xl:h-[70vh]">
            <ImagenConEtiquetaConProps
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-207.jpg"
              alt="Diseño e ingeniería industrial Mexicali"
              etiqueta={<>Resolvemos Ingeniería<br /><span className="block h-[1em]"><TypewriterTipo words={TIPOS} /></span></>}
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
            badge="Tu Proyecto Ejecutivo"
            title="¿Qué necesita tu nave industrial? Eso define nuestra ingeniería"
            description="Tus requerimientos técnicos determinan qué disciplinas se activan y con qué profundidad. No aplicamos una fórmula — resolvemos tu problema específico."
            feature1Title="¿Suelo difícil? Lo resolvemos desde el estudio"
            feature1Description="Mecánica de suelos, pilas de concreto a 18 m en suelo arenoso colapsable, sistemas antisísmicos BRB para zona sísmica 4. Tu cimentación se calcula para tu terreno exacto."
            feature1Icon={<Compass className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature2Title="¿Alta demanda eléctrica? La dimensionamos desde proyecto"
            feature2Description="Desde 500 KVA hasta 20 MW de capacidad instalada. Subestaciones, paneles solares, HVAC con recuperación de agua al 90%. Todo integrado en un solo proyecto ejecutivo."
            feature2Icon={<Zap className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            button1Text="Consulta de ingeniería"
            button2Text="Ver lo que hemos resuelto"
            imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-272.jpg"
            imageAlt="Diseño industrial"
          />
        </div>

        {/* BigNumber — Escala de ingeniería */}
        <div>
          <BigNumberConProps
            imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-6.jpg"
            imageAlt="Nave industrial más grande de Mexicali"
            number="550K"
            title={<>Pies cuadrados<br/>con ingeniería<br/>de primera</>}
            subtitle={<>La nave industrial más grande<br className="hidden md:block"/>de Mexicali — para Gulfstream</>}
          />
        </div>

        {/* Cuadro Circulo — Problemas de ingeniería resueltos */}
        <div>
          <CuadroCirculoConEscuadraConProps
            titulo={<>Problemas que<br/>otros no han<br/>resuelto aquí</>}
            parrafo="¿Necesitas sistemas antisísmicos que no existen en Mexicali? ¿Un puente sin columnas sobre un dren federal? ¿Un túnel de viento con presión de 3,000 HP? Ya lo diseñamos y construimos."
            numeroCirculo="18"
            simboloNumero="m"
            itemsCirculo={["BRB antisísmico", "Puente 95 m", "Túnel de viento", "Pilas profundas", "20 MW eléctricos"]}
          />
        </div>

        {/* Mosaico — Proyectos destacados */}
        <div className="w-11/12 mx-auto -mt-20 md:-mt-64 1024:-mt-40 relative">
          <Mosaico2ConProps
            bloque1Titulo="52,200 m² para Gulfstream"
            bloque1Descripcion="BRB antisísmico, 20 MW, LEED Gold — diseñado para una operación que no cabía en ningún catálogo"
            bloque1LinkTexto="Ver cómo se hizo"
            bloque1LinkHref="/constructora/build-to-suit"
            bloque2ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-194.jpg"
            bloque2ImagenAlt="Proyecto Gulfstream"
            bloque3ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-275.jpg"
            bloque3ImagenAlt="Construcción industrial"
            bloque4Titulo="¿Tu nave no existe en ningún catálogo?"
            bloque4Descripcion="La diseñamos desde cero para tu operación"
            bloque4LinkTexto="Contactar"
            bloque4LinkHref="/contacto"
            imagenDerechaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-153.jpg"
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
              Pilas de concreto armado a 18 metros de profundidad en suelo arenoso colapsable. Sistemas antisísmicos BRB para zona sísmica 4. Un puente vehicular de 95 metros sin una sola columna. Un túnel de viento que soporta 3,000 HP de presión. Eso es ingeniería.
            </ParrafoBigConProps>
          </div>
        </div>

        {/* Feature 5 — Gestión de proyecto */}
        <div className="container mx-auto w-10/12">
          <FeatureSection5InvertedBPConProps
            tagline="Ingeniería Especializada"
            titulo="Ingeniería que va más allá de la nave estándar"
            descripcion="Cuando tu proyecto exige algo que no existe en ningún catálogo, estas son las capacidades que se activan."
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-277.jpg"
            imagenAlt="Ingeniería especializada Mexicali"
            feature1Icon={<Shield className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature1Titulo="Ingeniería antisísmica"
            feature1Descripcion="Sistemas BRB (Buckling-Restrained Braces) para zona sísmica 4. Primera implementación en Mexicali — tecnología de Japón y Ciudad de México."
            feature2Icon={<Zap className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            feature2Titulo="Alta tensión y energía solar"
            feature2Descripcion="Subestaciones de hasta 20 MW. 10 MW en paneles solares distribuidos en cubierta y carports. Tramitología completa con CFE."
            feature3Icon={<Compass className="h-5 w-5" />}
            feature3IconColor="text-green-600"
            feature3Titulo="Cimentaciones profundas"
            feature3Descripcion="Pilas de concreto armado a 18 m en suelo arenoso colapsable. Mecánica de suelos verificada con laboratorio independiente EPGC."
            feature4Icon={<Ruler className="h-5 w-5" />}
            feature4IconColor="text-purple-600"
            feature4Titulo="Estructuras de claro libre"
            feature4Descripcion="Puentes vehiculares sin columnas de hasta 95 m. Naves de gran altura para túneles de viento y equipos industriales de gran escala."
          />
        </div>

        {/* Feature 3 — Certificaciones */}
        <div className="container mx-auto w-10/12 lg:mt-20">
          <FeatureSection3BPConProps
            tagline="Tus Estándares, Desde el Primer Trazo"
            titulo="¿Tu corporativo exige FM Global, LEED o ISN? Lo integramos desde el diseño"
            descripcion="No certificamos al final — diseñamos para cumplir desde el proyecto ejecutivo. Eso elimina retrabajo y reduce tu prima de seguro."
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-278.jpg"
            imagenAlt="Certificaciones industriales"
            feature1Icon={<Settings className="h-5 w-5" />}
            feature1IconColor="text-orange-600"
            feature1Titulo="FM Global y LEED desde proyecto"
            feature1Descripcion="Tu nave se diseña para pasar auditoría FM Global en muros, cubierta, estructura y contraincendio. Gulfstream 550K está certificando LEED Gold con 10 MW solares."
            feature2Icon={<Zap className="h-5 w-5" />}
            feature2IconColor="text-blue-600"
            feature2Titulo="ISN activo — acceso a cadenas Fortune 500"
            feature2Descripcion="Calificación 'Recomendado' por Honeywell en ISN. Sin eso, no entras a su cadena de proveedores. Con eso, tu nave la construye un equipo pre-aprobado."
          />
        </div>

        {/* Split — CTA */}
        <div>
          <SplitWithImageBPConProps
            imagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
            imagenAlt="Ingeniería Baumex"
            tagline="Tu Obra Segura"
            titulo="Tu personal y el nuestro protegidos por el mismo sistema que aprobó Gulfstream"
            parrafo1="Si tu corporativo audita seguridad antes de autorizar un constructor, este es el scorecard: 1,092,745 horas hombre trabajadas con cero muertes. 404 días consecutivos sin accidentes."
            parrafo2="Manual HSE de 18 capítulos. Permisos antes de cada turno. Control de presión arterial antes de subir a alturas. Certificación DC-3 para todo el personal. Jornada máxima de 12 horas."
            feature1Icon={<CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
            feature1IconColor="text-orange-600 dark:text-orange-500"
            feature1Titulo="404 días consecutivos sin accidentes."
            feature1Descripcion="Scorecard público del proyecto Gulfstream. Registro transparente de cada incidente — incluyendo los menores."
            feature2Icon={<LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none"/>}
            feature2IconColor="text-blue-600 dark:text-blue-500"
            feature2Titulo="Matriz de riesgo antes de cada turno."
            feature2Descripcion="Impacto por probabilidad. Peligros identificados, equipo requerido, plan de emergencia. Vigía Vigilante de Incendios asignado en cada zona de soldadura."
            parrafo3="Dinos qué necesita tu operación. Te entregamos el proyecto ejecutivo completo — diseño, ingeniería, presupuesto cerrado y cronograma."
            subtitulo="Consulta de ingeniería sin costo"
            parrafo4="para tu próximo proyecto industrial en Mexicali."
          />
        </div>

        {/* FAQs */}
        <div>
          <FaqSectionsThreeColumnsBPConProps
            titulo="Preguntas Sobre Ingeniería Industrial"
            descripcion="¿Necesitas más información? Contáctanos por"
            linkTexto="correo electrónico"
            linkHref="mailto:contacto@gruponelson.com"
            faqs={[
              {
                id: 1,
                question: "¿Cómo logro que mi nave cumpla FM Global desde el primer día?",
                answer: "La ingeniería de muros, cubierta, estructura y sistema contraincendio se calcula desde el proyecto ejecutivo para pasar auditoría FM Global. Eso reduce tu prima de seguro y elimina retrabajo.",
              },
              {
                id: 2,
                question: "¿Puedo obtener certificación LEED Gold para mi nave industrial?",
                answer: "Sí. El proyecto ejecutivo integra paneles solares, HVAC de alta eficiencia con recuperación de agua al 90%, y materiales certificados. Gulfstream 550K está en proceso de LEED Gold con 10 MW solares.",
              },
              {
                id: 3,
                question: "¿Cómo protejo mi nave en zona sísmica 4?",
                answer: "Con sistemas antisísmicos BRB (Buckling-Restrained Braces) — disipadores de energía sísmica en puntos estratégicos de la estructura. Tecnología usada en Japón y Ciudad de México, implementada por primera vez en Mexicali.",
              },
              {
                id: 4,
                question: "¿Qué capacidad eléctrica puedo alcanzar en mi nave?",
                answer: "La que tu operación necesite. Desde subestaciones de 500 KVA hasta 20 MW de capacidad instalada. Incluye tramitología completa con CFE, paneles solares y sistemas de distribución.",
              },
              {
                id: 5,
                question: "¿Puedo construir en terreno con suelo difícil?",
                answer: "Sí. La ingeniería civil incluye mecánica de suelos con laboratorio independiente y cimentaciones profundas — pilas de concreto armado a 18 metros en suelo arenoso colapsable, verificadas con ensayos documentados.",
              },
              {
                id: 6,
                question: "¿En cuánto tiempo obtengo mi proyecto ejecutivo completo?",
                answer: "Entre 2 y 4 meses dependiendo de la complejidad. Las 6 disciplinas de ingeniería trabajan en paralelo, no en secuencia — eso comprime el cronograma sin sacrificar profundidad.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  )
}

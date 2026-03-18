'use client'

import Header from '@/components/Header'
import { CuadriculaSection1 } from '@/components/brandpetram/cuadricula-section-1'
import {LineaL} from "@/components/ui/brandpetram/linea-l";
import {PoligonoTexto1} from "@/components/ui/brandpetram/poligono-texto-1";
import {Titulo} from "@/components/ui/brandpetram/titulo";
import {Parrafo} from "@/components/ui/brandpetram/parrafo";
import {GridOverlay} from "@/components/ui/brandpetram/grid";
import {BigNumber} from "@/components/brandpetram/big-number";
import {ImagenConEtiqueta1} from "@/components/brandpetram/imagen-con-etiqueta-1";
import {HeroSection1} from "@/components/pro-blocks/hero-section-1/hero-section-1";
import {CuadroCirculoConEscuadra} from "@/components/brandpetram/cuadro-circulo-con-escuadra";
import {Mosaico2} from "@/components/brandpetram/mosaico-2";
import {Circulos} from "@/components/brandpetram/circulos";
import {CuadritosLluviaDos} from "@/components/ui/brandpetram/cuadritos-lluvia-dos";
import {TresCards} from "@/components/brandpetram/tres-cards";
import {FeatureSection5InvertedBP} from "@/components/brandpetram/feature-section-5-inverted-bp";
import {FeatureSection3BP} from "@/components/brandpetram/feature-section-3-bp";
import FaqSectionsThreeColumnsBP from "@/components/brandpetram/faq-sections-three-columns-bp";

export default function ComponentesDosPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden mt-32">
      <Header />

      <main className="">

        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Proyectos Especializados (Tema G)
            Fuente: docs/fase-2-desempaquetado-comercial-baumex.md
            Vocabulario: docs/5-vocabulario-estrategico-...md
            Reglas: docs/research-copywriting-b2b-industrial.md
            Status: BORRADOR — pendiente de aprobación
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Construye tu nave industrial en Mexicali con ingeniería especializada — 28 años de proyectos únicos demostrados
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            Muchas operaciones industriales requieren algo más que una nave rectangular con piso de concreto.
            Un túnel de viento para pruebas aeroespaciales dentro de la planta. Un puente vehicular que conecte
            dos edificios sobre una vialidad pública. Sistemas antisísmicos que no existían en la región.
            Cimentaciones de precisión milimétrica para equipos de proceso pesado.
            Cuando tu nave industrial incluye un proyecto especial, Baumex tiene 28 años
            de experiencia resolviendo exactamente eso.
          </p>

          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">95 m</p><p className="text-muted-foreground">claro libre sin columnas</p></div>
            <div><p className="text-4xl font-bold leading-none">55,500 m²</p><p className="text-muted-foreground">nave más grande de Mexicali</p></div>
            <div><p className="text-4xl font-bold leading-none">3,000 HP</p><p className="text-muted-foreground">blower aeroespacial</p></div>
            <div><p className="text-4xl font-bold leading-none">15 m</p><p className="text-muted-foreground">cimentación profunda</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── PROYECTO 1: Puente vehicular Skyworks ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Construcción de puente vehicular de 95 metros sin columnas para nave industrial de semiconductores
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Evalúa lo que implica este proyecto. Skyworks necesitaba conectar dos plantas separadas por un boulevard y un dren federal de CNA.
            La función: transportar microchips en carritos de golf con temperatura controlada entre la planta
            de producción y la planta de pruebas. La solución: un puente de 95 metros de claro libre
            sin columnas intermedias, estructura metálica con diseño europeo de arco, elevadores especiales
            en ambos extremos.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Cimentación profunda con pilas de concreto armado a 18 metros — suelo arenoso colapsable
            en zona sísmica 4. Colado del puente completo en un solo día con dos bombas de concreto,
            sin juntas de construcción. Una sola pieza. Diseño calculado para minimizar vibraciones,
            verificado con un automóvil compacto cruzando a velocidad.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Gestión de permisos con tres niveles de gobierno: CNA (federal), gobierno del estado (vialidades)
            y municipio. Dos meses de coordinación logística. Solo cerraron la vialidad un domingo.
            Montaje de la estructura metálica en dos etapas — dos domingos consecutivos.
          </p>

          <hr className="border-border my-16" />

          {/* ── PROYECTO 2: Gulfstream 550K ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Nave industrial de 55,500 m² en Mexicali: Gulfstream 550K con sistemas antisísmicos BRB y 10 MW solares
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            La nave industrial más grande construida en Mexicali. 5.5 hectáreas bajo techo.
            13,500 m² de oficinas — 1.3 hectáreas, sin precedente en la localidad para una nave industrial.
            Altura libre de 28 pies (8.53 m). Todo diseñado y ejecutado por Baumex.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Contexto: el terremoto de magnitud 7.2 en 2010 dañó la planta existente de Gulfstream (35,000 m²)
            y causó dos semanas de paro de producción. Baumex propuso sistemas antisísmicos BRB
            (Buckling-Restrained Braces) — disipadores de energía en puntos estratégicos de la estructura.
            Primera implementación de esta tecnología en Mexicali. Gulfstream aceptó.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Cubierta TPO con garantía de impermeabilización de 20 años. 10 MW de paneles solares distribuidos
            en 50,000 m²: 20,000 m² en cubierta y 30,000 m² en carports del estacionamiento.
            3,200 toneladas de aire acondicionado de mínimo consumo (42 manejadoras) con recuperación
            del 90% del agua de condensación reutilizada en torres de enfriamiento.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            20 MW de capacidad eléctrica instalada — 50% será energía solar limpia.
            Certificación Factory Mutual (FM Global) en muros, cubierta TPO, estructura metálica
            y sistema contraincendio. Reduce significativamente la prima de seguro.
            Apuntando a certificación LEED Gold.
          </p>

          <ul className="list-disc pl-6 text-lg leading-relaxed mb-16 space-y-2">
            <li>55,500 m² bajo techo (5.5 hectáreas)</li>
            <li>13,500 m² de oficinas</li>
            <li>Sistemas antisísmicos BRB — primera vez en Mexicali</li>
            <li>10 MW de paneles solares en cubierta y carports</li>
            <li>3,200 toneladas de A/C con recuperación del 90% de agua</li>
            <li>20 MW de capacidad eléctrica instalada</li>
            <li>Certificación FM Global en toda la envolvente</li>
            <li>Cubierta TPO con garantía de 20 años</li>
          </ul>

          <p className="text-lg leading-relaxed mb-16">
            Accede a este nivel de ingeniería para tu próxima nave industrial en Mexicali.
            Cada sistema — antisísmico, solar, HVAC, contraincendio — fue diseñado y ejecutado por Baumex.
          </p>

          <hr className="border-border my-16" />

          {/* ── PROYECTO 3: Túnel de viento Honeywell ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Construcción de túnel de viento aeroespacial en Mexicali: blower de 3,000 HP con ductos de placa estructural
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Considera lo que este proyecto exige de una constructora. Honeywell necesitaba simular condiciones
            de vuelo — velocidad y volumen de aire reales — para pruebas de componentes aeroespaciales.
            Baumex diseñó y construyó el edificio de 20 metros de altura que aloja el sistema completo.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            El blower opera a 3,000 HP (los compresores típicos industriales son de 200-250 HP),
            alimentado con alta tensión de 4.16 KV. Los ductos de 2.5 × 2.5 metros están fabricados
            con placa estructural soldada — no lámina — porque la fuerza del aire exige ese nivel
            de resistencia. Puertas blindadas antisonido. Cimentación y estructura calculadas
            para soportar vibraciones extremas de operación continua.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Proyecto colaborativo: ingenieros de Honeywell e ingenieros de Baumex elaboraron
            el proyecto ejecutivo conjuntamente. 8 meses de construcción, seguidos de meses adicionales
            de pruebas por parte de Honeywell.
          </p>

          <hr className="border-border my-16" />

          {/* ── PROYECTO 4: Planta recicladora Deacero ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Construcción de planta industrial de acero en Mexicali: 50,000 m² con cimentaciones a 15 metros y precisión milimétrica
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Deacero requería 5 hectáreas de patios industriales — terracerías, pisos y cimentaciones —
            para instalar dos grúas industriales de gran escala, bandas transportadoras y líneas de proceso.
            El reto principal: cientos de bases y anclas embebidas en el concreto con precisión topográfica
            milimétrica.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Cimentaciones profundas a 15 metros con pilas de concreto armado para soportar las grúas.
            Baumex entregó la obra terminada y Deacero instaló equipos que debían calzar milimétricamente
            en cada ancla. Almacenes y estructuras de soporte para equipos de proceso completaron el proyecto.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Si tu operación depende de que cada ancla esté exactamente donde el plano indica — sin tolerancia
            para ajustes en campo — necesitas una constructora con la topografía y la ejecución de cimentaciones
            que este nivel de precisión exige.
          </p>

          <hr className="border-border my-16" />

          {/* ── CTA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Construye tu nave industrial en Mexicali con la ingeniería que Gulfstream y Honeywell ya validaron
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Puentes sin columnas, túneles de viento, sistemas antisísmicos BRB, cimentaciones de precisión
            milimétrica. Si tu operación necesita una nave industrial con ingeniería que va más allá
            de lo estándar, hablemos.
          </p>

          <p className="text-lg leading-relaxed">
            Baumex lleva 28 años ejecutando proyectos especializados para corporaciones internacionales.
            Solicita una consulta para tu proyecto.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}

        <CuadriculaSection1 />

        <div className="container mx-auto grid grid-cols-1 lg:mt-32 px-4 md:px-0">
            <div className="flex flex-col items-center md:ml-20 lg:ml-34 gap-0 lg:gap-12 xl:gap-6 md:items-end md:grid  768:grid-cols-[5rem_15rem_1fr] 834:grid-cols-[8rem_15rem_1fr] 1024:grid-cols-[4rem_20rem_1fr] 1200:grid-cols-[14rem_20rem_1fr] 1280:grid-cols-[10rem_20rem_1fr] 1366:grid-cols-[16rem_20rem_1fr] 1728:grid-cols-[1.4fr_20rem_4fr]  xl:gap-x-16 md:gap-y-8">
                {/* LineaL solo en desktop */}
                <LineaL
                    orientacion="center-left"
                    anchoHorizontal="md:w-8/12 lg:w-full "
                    altoVertical="768:h-[18rem] 834:h-[20rem] lg:h-[23rem] 1024:h-[22rem] 1200:h-[20rem] 1366:h-[24rem]"
                    className="hidden md:block translate-y-[15%] z-50 "
                />
                <div className="relative aspect-[1/1] size-[13rem] lg:size-[20rem] xl:size-auto  ">
                    <PoligonoTexto1
                        text="Parques Industriales en Mexicali"
                        backgroundColor="bg-gradient-to-r from-blue-600 to-blue-700"
                        textColor="text-white"
                        fontSize="text-2xl md:text-xl lg:text-4xl"
                        fontWeight="font-bold"
                        padding="p-6"
                        textWidth="w-full"
                        className="rounded-none 1200:max-w-[18rem] 1280:max-w-full"
                    />
                </div>
                {/* Columna 3: Título + Párrafo */}
                <div className="mt-20 md:mt-0 flex flex-col gap-6 text-center md:text-left  w-full 1728:w-auto 1728:max-w-160 1728:justify-self-start">
                    <Titulo
                        as="h2"
                        fontSize="text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
                        lineHeight="leading-none"
                        width="md:max-w-xs lg:max-w-sm xl:max-w-md"
                    >
                        Construcción de Naves Industriales en Mexicali
                    </Titulo>
                    <Parrafo
                        fontSize="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                        lineHeight="leading-relaxed lg:leading-loose"
                        fontWeight="font-light"
                        maxWidth="md:max-w-[16rem] lg:max-w-[22rem] 1200:max-w-[22rem] 1280:max-w-[27rem]"
                    >
                        Accede a infraestructura de clase mundial con 58 años de trayectoria en el desarrollo de parques industriales
                    </Parrafo>
                </div>
            </div>
        </div>
        {/* Ejemplo ImagenConEtiqueta */}
        <div className="container mx-auto mt-16 md:mt-32 w-11/12 ">


            <div className="relative h-60 md:h-[35vh] lg:h-[40vh] 1200:h-[60vh] xl:h-[70vh] ">
                <ImagenConEtiqueta1
                    src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-271.jpg"
                    alt="Lorem ipsum"
                    etiqueta="Naves Industriales Mexicali"
                    posicion="bottom-left"
                    offsetYClasses="translate-y-5 md:translate-y-[120px]"
                    offsetXClasses="translate-x-0"
                    etiquetaRounded="rounded-none"
                    etiquetaRoundedTL="rounded-tr-none"
                    etiquetaRoundedTR="rounded-tr-3xl"
                    etiquetaFontSize="text-4xl 393:text-[2.5rem] md:text-[5rem] 1024:text-[7rem] 1200:text-[8rem] 1440:text-[8.5rem]"
                    etiquetaFontWeight="font-black"
                    etiquetaLineHeight="leading-[2rem] 393:leading-[2.4rem] md:leading-[4.5rem] 1024:leading-[6rem] 1200:leading-[7rem]"
                    etiquetaLetterSpacing="tracking-tight"
                    etiquetaBg="bg-background"
                    etiquetaColor="text-foreground"  // ← Agregá esto
                    etiquetaOpacity="opacity-100"
                    etiquetaWidth="w-[14rem] 393:w-[16rem] md:w-[30rem] 1024:w-[39rem] 1200:w-[46rem] 1280:w-[44rem] 1366:w-7/12 1536:w-[47rem] 1728:w-[49rem]"
                    className="rounded-none overflow-visible"
                    poligono={true}
                    poligonoWidth="md:w-25 834:w-32 1024:w-35"
                    poligonoAspect="aspect-[1/1]"
                    poligonoBg=" bg-background"
                    poligonoOpacity="opacity-100"
                    poligonoClassName="rounded-none"
                />
                {/* Grid principal */}
                <GridOverlay
                    fadeRadius="16rem"
                    fadePosition="center"
                    strokeColor="stroke-white/20"
                    gridSize={50}
                    showHighlights={true}
                    highlightColor="fill-blue-600/40"
                />
            </div>
        </div>

        {/* Línea decorativa top-right */}
        <div className="w-1/2 1728:w-7/12 md:ml-auto relative mt-0 h-20 md:h-20 1200:h-40 1366:h-40 1728:h-64 mt-20 z-30 md:pr-4">
            <LineaL
                orientacion="top-right"
                anchoHorizontal="md:w-7/12"
                altoVertical="h-full"
                color="bg-foreground/20"
            />
        </div>

        <div className={'w-11/12 mx-auto 1200:-translate-y-16 1366:-translate-y-16 1728:-translate-y-24'}><HeroSection1/></div>
        {/* Sección Text + Image */}

        <BigNumber
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-272.jpg"
          imageAlt="Lorem ipsum"
          number="+4.5"
          title={<>Millones de <br /> Pies² Desarrollados</>}
          subtitle={<>Construidos en naves <br className={'hidden md:block'}/> industriales en Mexicali desde 1965</>}
        />

        <CuadroCirculoConEscuadra />

          <div className={'w-11/12 mx-auto -mt-20 md:-mt-64 1024:-mt-40 relative'}>
            <Mosaico2/>

            {/* Cuadritos decorativos pegados debajo del mosaico */}
            <div className="absolute top-full right-20 md:right-40 z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-top-right">
              <CuadritosLluviaDos />
            </div>
          </div>

        <div className="flex flex-col gap-4">
            <div className="container mx-auto w-10/12 1200:w-8/12 1366:w-8/12 1536:w-9/12  lg:max-w-6xl my-10 md:mt-20">
            <Parrafo
                fontSize="text-base text-3xl 768:text-3xl md:text-4xl 1024:text-5xl 1200:text-4xl 1536:text-5xl "
                textColor="text-muted-foreground"
            >
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.

            </Parrafo>

            </div>
        </div>

        <div className="container mx-auto w-11/12">
            <FeatureSection5InvertedBP/>
            <FeatureSection3BP/>
        </div>
      </main>

        <div className={'px-4 md:ml-10 1200:ml-32 mt-32 md:px-0'}><Circulos/></div>

        <FaqSectionsThreeColumnsBP />

        <div className={'mt-20 1366:ml-16' }><TresCards/></div>
    </div>
  )
}

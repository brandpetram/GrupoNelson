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
        {/* ══════════════════════════════════════════════════════════
            COPY COMERCIAL — Baumex Constructora
            Basado en: fase-2-desempaquetado-comercial-baumex.md
            Reglas: docs/research-copywriting-b2b-industrial.md
            Status: BORRADOR — pendiente de aprobación
            ══════════════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 pt-20 pb-32">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Construye tu nave industrial en Mexicali con la constructora que Gulfstream eligió para 52,200 m²
          </h1>

          <p className="text-xl leading-relaxed mb-12">
            Somos la constructora in-house de Grupo Nelson. 28 años de experiencia. 75 proyectos completados.
            4.5 millones de pies cuadrados construidos para 33 corporaciones internacionales, incluyendo Gulfstream,
            Honeywell, DHL y Vertiv. Desde terracerías hasta acabados — un solo equipo, un solo contrato,
            un solo responsable.
          </p>

          <div className="flex flex-wrap gap-12 mb-24">
            <div><p className="text-4xl font-bold leading-none">4.5M ft²</p><p className="text-muted-foreground">construidos</p></div>
            <div><p className="text-4xl font-bold leading-none">75+</p><p className="text-muted-foreground">proyectos</p></div>
            <div><p className="text-4xl font-bold leading-none">28</p><p className="text-muted-foreground">años</p></div>
            <div><p className="text-4xl font-bold leading-none">33</p><p className="text-muted-foreground">corporaciones internacionales</p></div>
          </div>

          <hr className="border-border my-16" />

          {/* ── TEMA 1: Constructora propia, no subcontratada ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Elimina intermediarios: construcción de naves industriales con equipo propio
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Ejecuta tu proyecto build-to-suit con un solo punto de responsabilidad. Baumex diseña
            y construye con equipo propio — sin intermediarios, sin subcontratos de diseño,
            sin terceros entre tu proyecto y quien lo ejecuta. Un solo contrato que concentra
            la responsabilidad desde el primer plano hasta la última inspección.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Contamos con departamentos propios de arquitectura, ingeniería civil, estructural,
            eléctrica, mecánica y plomería. No subcontratamos el diseño. Tenemos nuestro propio departamento
            de estimación y costos. Y una estructura operativa clara: dos Project Executives,
            Director Administrativo, Project Manager, superintendentes y equipos de ejecución directa
            en campo.
          </p>

          <hr className="border-border my-16" />

          {/* ── TEMA 2: Track record ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            4.5 millones de pies cuadrados construidos en Mexicali para 33 corporaciones internacionales
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gulfstream, Honeywell, DHL, Vertiv, Skyworks,
            Intuitive Surgical, Rheem, Hirsh, Direct Pack, Barcel. Desde naves de 5,000 m² hasta
            el proyecto industrial más grande de Mexicali: Gulfstream 550K con 52,200 m².
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Hemos operado en Mexicali, Hermosillo, San Luis Potosí, Tecate, El Salto (Jalisco)
            y Los Cabos. 75 proyectos documentados desde 1997. Diversidad de industrias: aeroespacial,
            manufactura de precisión, logística, procesamiento de alimentos, papel, dispositivos
            médicos, semiconductores y reciclado de acero.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            En el proyecto Gulfstream 550K, gestionamos simultáneamente 45 empresas
            subcontratistas, 450 trabajadores en campo, y acumulamos más de 1,092,745 horas hombre
            trabajadas.
          </p>

          <hr className="border-border my-16" />

          {/* ── TEMA 3: Gestión de proyecto con rigor institucional ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Gestiona tu proyecto build-to-suit con ruta crítica de 18 hitos
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Baumex gestiona simultáneamente
            permisos municipales, cadenas de suministro con tiempos de entrega de meses, 18 hitos
            críticos interdependientes y decenas de subcontratistas — todo bajo la presión de que
            un día de retraso en la ruta crítica es un día perdido sin recuperación.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Operamos con 11 puntos de control de calidad documentados: desde Design Build
            Planning y selección de subcontratistas hasta Submittals, Long Lead Items y Quality
            Testing con laboratorio externo. Cada material se envía al cliente para aprobación
            antes de instalarse. Cada equipo crítico — transformadores, generadores, chillers,
            bombas contra incendio — se monitorea preventivamente desde que se ordena hasta que
            llega a obra.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Las reuniones semanales de obra incluyen 16 o más asistentes con firmas autógrafas:
            contratista general, subcontratistas eléctricos, de estructura, albañilería, HVAC,
            laminación y plomería. Cada minuta documenta acuerdos, responsables y fechas. Gestión
            centralizada con software ERP de construcción.
          </p>

          <hr className="border-border my-16" />

          {/* ── TEMA 4: Seguridad industrial ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Asegura tu operación: 1,092,745 horas hombre con cero muertes en construcción industrial
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gulfstream y Honeywell exigen que sus contratistas demuestren seguridad con datos, no con palabras.
            Baumex documenta cada turno, cada incidente, cada métrica.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            La seguridad en Baumex es un sistema documentado que opera
            diariamente, no una declaración: manual HSE de 18 capítulos, permisos de trabajo antes de cada turno con
            matriz de riesgo cuantitativa (Impacto × Probabilidad), permisos especializados atados
            a Normas Oficiales Mexicanas para trabajo en alturas (NOM-009-STPS-2011) y soldadura
            (NOM-027-STPS-2008), y un scorecard donde registra transparentemente cada incidente —
            incluyendo los menores.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Cada día, antes de trabajar, el personal llena una matriz de riesgos identificando
            peligros, equipo necesario y plan de emergencia. Los trabajadores en alturas se les
            mide la presión arterial antes de subir. Las zonas de soldadura tienen un "Vigía
            Vigilante de Incendios" asignado. Los trabajadores cuentan con certificación DC-3
            y la jornada máxima está limitada a 12 horas.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            404 días consecutivos sin accidentes en el proyecto Gulfstream 550K. 1,092,745 horas hombre
            trabajadas con cero muertes. El scorecard de seguridad está disponible para revisión.
          </p>

          <hr className="border-border my-16" />

          {/* ── TEMA 5: Certificaciones ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Accede a certificaciones que abren puertas: ISN "Recomendado" por Honeywell, LEED Gold, FM Global
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Las certificaciones no son trofeos — son filtros de acceso. Sin ISN, no entras a la
            cadena de proveedores de Honeywell. Sin cumplir los ensayos de EPGC, no apruebas la
            cimentación.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Contamos con certificación ISN (ISNetworld) activa con calificación "Recomendado" por
            Honeywell International para Aero-Mexicali y Honeywell Mexico-Corporate — algo que solo
            se obtiene después de demostrar cumplimiento sostenido en seguridad, documentación y
            calidad. Validamos nuestro trabajo con auditorías de laboratorios externos independientes
            como EPGC (Especialistas en Geotecnia y Concretos), cuyos ensayos de compactación
            confirman que cada cimentación cumple las especificaciones del proyecto.
          </p>

          <p className="text-lg leading-relaxed mb-16">
            Somos LEED Knowledgeable. La nave Gulfstream 550K se está certificando como LEED
            Gold — nuestra primera certificación de este nivel en una nave industrial.
          </p>

          <hr className="border-border my-16" />

          {/* ── TEMA 6: Ejecución completa ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Construye de terracerías a acabados con un solo equipo: 10 disciplinas in-house
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Cuando decimos "in-house", no es una media verdad. Ejecutamos
            directamente desde el primer movimiento de tierras hasta el último acabado interior:
          </p>

          <ul className="text-lg leading-loose mb-6 pl-6 list-disc">
            <li>Terracerías y nivelación</li>
            <li>Cimentación (zapatas, colado)</li>
            <li>Mampostería (muros de block)</li>
            <li>Estructura metálica</li>
            <li>Techumbre (lámina)</li>
            <li>Fachadas metálicas con aislante térmico</li>
            <li>Interiores (tablaroca)</li>
            <li>Acabados (pisos, pintura, sanitarios)</li>
            <li>Instalación eléctrica (desde subestaciones hasta luminarias)</li>
            <li>Instalación mecánica (HVAC, fire protection)</li>
          </ul>

          <p className="text-lg leading-relaxed mb-16">
            Baumex ejecuta cada etapa con personal propio en campo — desde la motoniveladora
            compactando el terreno hasta la instalación de subestaciones eléctricas.
            Evidencia fotográfica documentada de cada fase.
          </p>

          <hr className="border-border my-16" />

          {/* ── CTA ── */}
          <h2 className="text-3xl font-bold leading-snug mb-6">
            Solicita una consulta para tu proyecto
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gulfstream lleva 35 años construyendo con Baumex. Honeywell, 30. DHL y Vertiv regresaron
            después del primer proyecto. El 80% de nuestros clientes repiten.
          </p>

          <p className="text-lg leading-relaxed">
            Si tu operación necesita una nave industrial diseñada y construida con estándares
            internacionales en Mexicali o el noroeste de México, hablemos.
          </p>

        </div>
        {/* FIN COPY COMERCIAL */}

        {/* Cuadricula Section con props */}
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
              badge="Desarrollo industrial en Mexicali"
              titulo={<>Parques Industriales <br/> en Mexicali</>}
              parrafo="Renta y construcción de naves industriales en los mejores parques industriales de Mexicali. Ubicación estratégica, infraestructura de clase mundial y servicios completos para tu operación industrial."
              boton1Texto="Contáctanos"
              boton1Href="#"
              boton2Texto="Conoce más →"
              boton2Href="#"
              overlayColor="rgba(30, 64, 175, 0.22)"
              overlayBlendMode="multiply"
              filterBrightness={1.05}
              filterSaturate={1.1}
              filterContrast={1.02}
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

import type { Metadata } from "next";
import Header from "@/components/Header";
import { CuadritosLluviaDos } from "@/components/ui/brandpetram/cuadritos-lluvia-dos";
import { GridOverlay } from "@/components/ui/brandpetram/grid";
import {
  SplitSimpleBP,
  splitParagraphClass,
} from "@/components/brandpetram/split-simple-bp";

export const metadata: Metadata = {
  title: "Proyectos Especializados",
  description:
    "Proyectos industriales especializados en Mexicali: puente de 95 m sin columnas, nave de 52,200 m² con BRB antisísmico, túnel de viento de 3,000 HP, cimentaciones de precisión milimétrica.",
};

export default function ProyectosEspecializadosPage() {
  return (
    <div className="overflow-hidden">
      <Header variant="dark" />

      <main>
        {/* ── Hero ── */}
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
            <div className="mt-32 sm:mt-40 1200:mt-48">
              <div className="mx-auto md:max-w-5xl 1024:max-w-3xl 1200:max-w-5xl 1280:max-w-6xl 1536:max-w-7xl 1728:max-w-400 1920:max-w-440">
                <div className="1200:grid 1200:grid-cols-12 1200:gap-8">
                  <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto 1200:col-span-6 1200:text-left 1200:flex 1200:items-center">
                    <div>
                      <span className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2">
                        <span className="px-3 py-0.5 text-white text-xs md:text-sm font-semibold leading-5 uppercase tracking-wide bg-linear-to-br from-blue-600 to-blue-700 rounded-full">
                          Proyectos Especializados
                        </span>
                        <span className="ml-4 text-xs md:text-sm">
                          Problemas resueltos
                        </span>
                      </span>
                      <h1 className="mt-4 text-3xl 360:text-[2.5rem] 393:text-[3rem] 430:text-[3.5rem] 768:text-[4rem] 834:text-[4.5rem] 1024:text-[5rem] 1200:text-[3.5rem] 1280:text-[4rem] 1366:text-[4.5rem] 1440:text-[5rem] 1536:text-[4.5rem] 1728:text-[5rem] 1920:text-[5.5rem] tracking-tight font-extrabold text-white sm:mt-5 leading-none 1200:mt-6">
                        Cuatro problemas que no tenían solución estándar
                      </h1>
                      <p className="mt-3 text-sm 360:text-sm 393:text-[1rem] 430:text-[1.1rem] 768:text-xl 834:text-xl 1024:text-[1.5rem] 1200:text-[1.2rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-gray-300 sm:mt-5">
                        Cada uno empezó con un requerimiento que no existía en
                        ningún catálogo. Se investigó, se diseñó y se construyó.
                        Hoy los cuatro operan.
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
            </div>
          </div>

          {/* Cuadritos decorativos */}
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-10 pointer-events-none transform scale-50 md:scale-75 lg:scale-100 origin-bottom-right">
            <CuadritosLluviaDos />
          </div>
        </div>

        {/* ── Caso 1: Puente Skyworks ── */}
        <div className="pt-16 md:pt-24" />
        <SplitSimpleBP
          tagline="Semiconductores"
          title="Un puente de 95 m sin columnas para transportar microchips"
          imagePosition="left"
          imageSrc="/contructora-mexicali/puente-skyworks-2.jpg"
          imageAlt="Puente Skyworks — 95 metros sin columnas intermedias"
          showCuadritos
          cuadritosPosition="right"
        >
          <p className={splitParagraphClass}>
            <strong>Skyworks</strong> necesitaba mover microchips entre dos
            plantas de semiconductores separadas por un boulevard y un dren
            federal de la CNA. Los chips viajan en carritos de golf con{" "}
            <strong>temperatura controlada</strong> — la conexión tenía que ser
            un puente cerrado, sin columnas intermedias, sobre una vialidad
            activa.
          </p>
          <p className={splitParagraphClass}>
            El puente se coló <strong>en un solo día</strong>, con dos bombas de
            concreto, sin juntas de construcción — una sola pieza de 95 metros.
            La cimentación baja a <strong>18 metros</strong> de profundidad en
            suelo arenoso colapsable, zona sísmica 4. Los permisos involucraron{" "}
            <strong>tres niveles de gobierno</strong>: CNA (federal), gobierno
            del estado y municipio. La vialidad solo se cerró un domingo. El
            montaje de la estructura tomó dos domingos consecutivos, con dos
            meses de coordinación logística previos.
          </p>
          <p className={splitParagraphClass}>
            Hoy los microchips cruzan el boulevard en carritos de golf con
            temperatura controlada. El puente opera.
          </p>
        </SplitSimpleBP>

        <div className="h-20 768:h-24 1200:h-32" />

        {/* ── Caso 2: Gulfstream ── */}
        <SplitSimpleBP
          tagline="Aeroespacial"
          title="Un terremoto de 7.2 definió cómo se construyó la nave más grande de Mexicali"
          imagePosition="right"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-276.jpg"
          imageAlt="Nave Gulfstream — 52,200 m², la más grande de Mexicali"
          showCuadritos
          cuadritosPosition="right"
          cuadritosInvert
        >
          <p className={splitParagraphClass}>
            En <strong>2010</strong>, un terremoto de{" "}
            <strong>magnitud 7.2</strong> dañó la planta existente de{" "}
            <strong>Gulfstream</strong> en Mexicali y causó dos semanas de paro
            de producción. Cuando Gulfstream decidió construir su nueva nave de{" "}
            <strong>52,200 m²</strong>, el requerimiento era claro: que un
            sismo no volviera a parar la operación.
          </p>
          <p className={splitParagraphClass}>
            Baumex propuso sistemas antisísmicos{" "}
            <strong>BRB (Buckling-Restrained Braces)</strong> — disipadores de
            energía en puntos estratégicos de la estructura. Era la primera vez
            que Baumex los implementaba. Tecnología usada en Ciudad de México y
            Japón, aplicada por primera vez a esta escala en un proyecto de
            Baumex. La propuesta vino de Baumex, no del cliente.
          </p>
          <p className={splitParagraphClass}>
            Hoy es <strong>la nave industrial más grande de Mexicali</strong>,
            con <strong>13,500 m² de oficinas</strong> — sin precedente para una
            nave industrial en la localidad. Opera.
          </p>
        </SplitSimpleBP>

        <div className="h-20 768:h-24 1200:h-32" />

        {/* ── Caso 3: Túnel de viento Honeywell ── */}
        <SplitSimpleBP
          tagline="Aeroespacial"
          title="Un túnel de viento con puertas antisonido de $30,000 USD"
          imagePosition="left"
          imageSrc="/fotos-dron/CONSTRUCTORA BAUMEX/HONEYWELL/nave-industrial-honeywell-1.JPG"
          imageAlt="Nave Honeywell — túnel de viento aeroespacial"
          showCuadritos
          cuadritosPosition="right"
        >
          <p className={splitParagraphClass}>
            <strong>Honeywell</strong> necesitaba simular condiciones de vuelo —
            velocidad y volumen de aire — para pruebas de componentes
            aeroespaciales. El requerimiento no tenía precedente en los
            proyectos de Baumex.
          </p>
          <p className={splitParagraphClass}>
            El edificio mide <strong>20 metros de altura</strong> y aloja un
            blower de <strong>3,000 HP</strong> alimentado con alta tensión de
            4.16 KV. Los ductos de{" "}
            <strong>2.5 × 2.5 metros</strong> están fabricados con placa
            estructural soldada — no lámina, porque la fuerza del aire la
            destruiría. Las puertas blindadas antisonido cuestan{" "}
            <strong>~$30,000 USD el par</strong>. La cimentación y la estructura
            se calcularon para soportar vibraciones extremas de operación
            continua.
          </p>
          <p className={splitParagraphClass}>
            El proyecto ejecutivo se elaboró en conjunto entre ingenieros de{" "}
            <strong>Honeywell</strong> e ingenieros de{" "}
            <strong>Baumex</strong>. Tomó 8 meses de construcción más meses
            adicionales de pruebas por parte de Honeywell. Hoy el túnel opera y
            los componentes aeroespaciales se prueban en condiciones simuladas
            de vuelo.
          </p>
        </SplitSimpleBP>

        <div className="h-20 768:h-24 1200:h-32" />

        {/* ── Caso 4: Deacero ── */}
        <SplitSimpleBP
          tagline="Acero"
          title="50,000 m² donde un centímetro de error arruina millones en equipos"
          imagePosition="right"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
          imageAlt="Planta Deacero — cimentaciones de precisión milimétrica"
          showCuadritos
          cuadritosPosition="right"
          cuadritosInvert
        >
          <p className={splitParagraphClass}>
            <strong>Deacero</strong> necesitaba una planta recicladora de acero
            con grúas industriales de gran escala. El reto: cientos de bases y
            anclas embebidas con{" "}
            <strong>tolerancia milimétrica</strong> para el montaje de equipos
            importados. Si las anclas no calzan exactamente, el proyecto falla.
          </p>
          <p className={splitParagraphClass}>
            <strong>5 hectáreas de patios</strong> (50,000 m²) con
            cimentaciones profundas a <strong>15 metros</strong> usando pilas de
            concreto armado. Control topográfico de precisión en cada punto de
            anclaje. La entrega de obra terminada debía calzar milimétricamente
            con los equipos que Deacero instaló después — grúas, bandas
            transportadoras, líneas de proceso.
          </p>
          <p className={splitParagraphClass}>
            Equipos instalados. Planta operando.
          </p>
        </SplitSimpleBP>

        {/* ── Cierre + CTA ── */}
        <div className="px-10 1200:px-0 lg:max-w-5xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto py-20 md:py-28 text-center">
          <p className="text-balance text-muted-foreground text-[1rem] 768:text-[1.125rem] 1024:text-[1.25rem] 1200:text-[1.25rem] 1366:text-[1.375rem] 1536:text-[1.5rem] 1728:text-[1.625rem] 1920:text-[1.75rem] leading-relaxed tracking-wide max-w-4xl mx-auto">
            Cada uno de estos proyectos empezó con un problema nuevo. Se
            investigó, se diseñó y se construyó. ¿Cuál es el tuyo?
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xs bg-blue-600 px-8 py-3.5 text-[0.9375rem] 1200:text-[1rem] 1536:text-[1.0625rem] font-semibold text-white shadow hover:bg-blue-700 transition-colors"
            >
              Dinos qué necesita tu operación
            </a>
            <a
              href="/constructora/portafolio"
              className="inline-flex items-center justify-center gap-2 rounded-xs px-8 py-3.5 text-[0.9375rem] 1200:text-[1rem] 1536:text-[1.0625rem] font-semibold text-foreground hover:bg-accent transition-colors"
            >
              Ver portafolio completo
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

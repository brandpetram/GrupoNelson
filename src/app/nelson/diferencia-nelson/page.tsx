import type { Metadata } from "next";
import Header from "@/components/Header";
import { OffsetWithFeatureListBP } from "@/components/brandpetram/offset-with-feature-list-bp";
import {
  SplitSimpleBP,
  splitParagraphClass,
} from "@/components/brandpetram/split-simple-bp";
import { EditorialCascadaBeta } from "@/components/brandpetram/editorial-cascada-beta";

export const metadata: Metadata = {
  title: "La Diferencia Nelson | Grupo Nelson",
};

export default function DiferenciaNelsonPage() {
  return (
    <div className="min-h-[200vh] overflow-x-clip">
      <Header />

      <main>
        {/* ── Línea divisoria con espacio ── */}
        <div className="pt-32 md:pt-40 pb-6 md:pb-8">
          <hr className="border-border w-11/12 mx-auto" />
        </div>

        {/* ── Editorial Cascada (de trayectoria) ── */}
        <div>
          <EditorialCascadaBeta />
        </div>

        {/* ── Banner divisor ── */}
        <div className="px-10 1200:px-0 lg:max-w-5xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto pb-20 md:pb-32">
          <h1 className="text-balance text-foreground px-7 font-light text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] leading-relaxed">
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-bold text-blue-600 uppercase">
              consectetur adipiscing
            </span>{" "}
            elit sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua ut enim ad minim veniam.
          </h1>
        </div>

        {/* ── Diferenciador 1: 60 años ── */}
        <SplitSimpleBP
          tagline="60+ años"
          title="Desde la primera maquiladora de Mexicali hasta hoy"
          imagePosition="left"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
          imageAlt="Parque industrial Nelson en Mexicali — 60 años de historia"
          showCuadritos
          cuadritosPosition="right"
        >
          <p className={splitParagraphClass}>
            En <strong>1965</strong>, Rodolfo Nelson Sr. instaló la primera
            maquiladora de <strong>Mexicali</strong>. No existía la palabra
            &quot;nearshoring&quot;. No existían los parques industriales
            modernos de la región. No existía el ecosistema manufacturero que
            hoy alberga a <strong>30 corporaciones internacionales</strong>.
            Todo eso se construyó sobre lo que Grupo Nelson empezó.
          </p>
          <p className={splitParagraphClass}>
            Tres generaciones después, la familia sigue operando.{" "}
            <strong>4 millones de pies cuadrados</strong> desarrollados. 5
            parques industriales. Presencia en{" "}
            <strong>Mexicali, Hermosillo y San Luis Potosí</strong>. No llegaron
            al nearshoring cuando se puso de moda — lo practicaban 50 años antes
            de que existiera el término.
          </p>
        </SplitSimpleBP>

        <div className="h-20 768:h-24 1200:h-32" />

        {/* ── Diferenciador 2: Owner-operated ── */}
        <SplitSimpleBP
          tagline="Trato directo"
          title="Habla con los dueños, no con gerentes regionales"
          imagePosition="right"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg"
          imageAlt="Familia Nelson — operación directa en Mexicali"
          showCuadritos
          cuadritosPosition="right"
          cuadritosInvert
        >
          <p className={splitParagraphClass}>
            <strong>Humberto Juárez Nelson</strong> atiende a los clientes
            directamente. <strong>Rodolfo Nelson L.</strong> supervisa la
            construcción. <strong>Juan Carlos Nelson L.</strong> dirige la
            administración. <strong>Alfredo Martínez Nelson</strong> gestiona
            los servicios del parque. Cuatro miembros de la familia en roles
            operativos activos. Estructura plana.
          </p>
          <p className={splitParagraphClass}>
            En otros desarrolladores industriales de Mexicali necesitas tres
            niveles de aprobación para cambiar una cláusula del contrato. En
            Grupo Nelson necesitas una llamada. <strong>Gulfstream</strong> no
            licitó su quinta expansión — después de <strong>35 años</strong> de
            relación con la familia, asignó directamente.
          </p>
          <p className={splitParagraphClass}>
            Reduce la complejidad de tu instalación en Mexicali. Contratos de{" "}
            <strong>10 a 15 años</strong> negociados con quienes toman las
            decisiones, no con gerentes regionales que rotan cada dos años.
          </p>
        </SplitSimpleBP>

        <div className="h-16 768:h-20 1200:h-24" />

        {/* ── Diferenciador 3: Baumex ── */}
        <SplitSimpleBP
          tagline="Constructora in-house"
          title="Baumex: 28 años y 75 proyectos"
          imagePosition="left"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
          imageAlt="Baumex constructora — naves industriales en Mexicali"
        >
          <p className={splitParagraphClass}>
            Si necesitas una nave que no existe en inventario,{" "}
            <strong>Baumex</strong> la diseña y construye. Es la constructora
            propia de Grupo Nelson — no un tercero subcontratado. Un solo
            contrato cubre diseño, permisos, construcción y entrega.{" "}
            <strong>10 disciplinas constructivas</strong> ejecutadas con equipo
            propio, desde terracerías hasta acabados.
          </p>
          <p className={splitParagraphClass}>
            <strong>Gulfstream 550K: 52,200 m²</strong> con certificación LEED
            Gold, sistemas antisísmicos BRB y 10 MW de paneles solares. La nave
            industrial más grande de Mexicali, diseñada y construida por Baumex.{" "}
            <strong>1,092,745 horas hombre</strong> trabajadas con cero
            accidentes fatales.
          </p>
          <p className={splitParagraphClass}>
            Escala tu operación con un solo proveedor. Nave disponible hoy o
            construida a tu medida — el mismo grupo que administra el parque es
            el que construye la nave.
          </p>
        </SplitSimpleBP>

        {/* ── Infraestructura ── */}
        <OffsetWithFeatureListBP />

        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  );
}

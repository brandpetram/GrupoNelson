import Header from "@/components/Header";
import { OffsetWithFeatureListBP } from "@/components/brandpetram/offset-with-feature-list-bp";
import {
  SplitSimpleBP,
  splitParagraphClass,
} from "@/components/brandpetram/split-simple-bp";
import { EditorialCascadaBeta } from "@/components/brandpetram/editorial-cascada-beta";
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/nelson/diferencia-nelson',
  title: 'La Diferencia Nelson',
  description: 'Lo que distingue a Grupo Nelson: operación directa por la familia fundadora, construcción built-to-suit de naves industriales y parques industriales de primer nivel en Mexicali.',
})

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
            Permanencia real, acceso directo a los dueños y{" "}
            <span className="font-bold text-blue-600 uppercase">
              constructora propia
            </span>{" "}
            — tres cosas que tu proyecto necesita y que muy pocos en Mexicali
            pueden ofrecer juntas.
          </h1>
        </div>

        {/* ── Diferenciador 1: Permanencia ── */}
        <SplitSimpleBP
          tagline="60+ años"
          title="Instalaron la primera maquiladora de Mexicali — y siguen aquí"
          imagePosition="left"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
          imageAlt="Parque industrial Nelson en Mexicali — 60 años de historia"
          showCuadritos
          cuadritosPosition="right"
        >
          <p className={splitParagraphClass}>
            En <strong>1965</strong>, Rodolfo Nelson Sr. instaló la primera
            maquiladora de <strong>Mexicali</strong>. No existían los parques
            industriales modernos de la región. No existía el ecosistema
            manufacturero que hoy alberga a{" "}
            <strong>30 corporaciones internacionales</strong>. Grupo Nelson
            estaba antes de que todo eso existiera — y sigue aquí.
          </p>
          <p className={splitParagraphClass}>
            <strong>Gulfstream</strong> lleva{" "}
            <strong>35 años</strong> trabajando con la familia.{" "}
            <strong>Honeywell</strong>, 30. No van a desaparecer a la mitad de
            tu contrato de 15 años.
          </p>
        </SplitSimpleBP>

        <div className="h-20 768:h-24 1200:h-32" />

        {/* ── Diferenciador 2: Ownership directo ── */}
        <SplitSimpleBP
          tagline="Ownership directo"
          title="Habla con los dueños, no con gerentes regionales"
          imagePosition="right"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg"
          imageAlt="Familia Nelson — operación directa en Mexicali"
          showCuadritos
          cuadritosPosition="right"
          cuadritosInvert
        >
          <p className={splitParagraphClass}>
            La familia fundadora de Grupo Nelson no está en un consejo
            honorario — está en roles operativos activos. Cuando necesitas
            cambiar una cláusula del contrato, hablas con quien puede decidir
            en ese momento. No con un gerente regional que rota cada dos años.
          </p>
          <p className={splitParagraphClass}>
            Eso se traduce en <strong>velocidad de decisión</strong>,{" "}
            <strong>accountability personal</strong> y{" "}
            <strong>continuidad</strong>. Contratos de{" "}
            <strong>10 a 15 años</strong> negociados directamente con quienes
            toman las decisiones.
          </p>
        </SplitSimpleBP>

        <div className="h-16 768:h-20 1200:h-24" />

        {/* ── Diferenciador 3: Constructora in-house ── */}
        <SplitSimpleBP
          tagline="Constructora in-house"
          title="Baumex: un contrato, un responsable, de terreno a llave en mano"
          imagePosition="left"
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
          imageAlt="Baumex constructora — naves industriales en Mexicali"
        >
          <p className={splitParagraphClass}>
            Si necesitas una nave que no existe en inventario,{" "}
            <strong>Baumex</strong> la diseña y construye. Es la constructora
            propia de Grupo Nelson — no un tercero subcontratado. Un solo
            contrato cubre diseño, permisos, construcción y entrega.
          </p>
          <p className={splitParagraphClass}>
            <strong>28 años</strong> de operación.{" "}
            <strong>75 proyectos</strong> completados. El mismo grupo que
            administra el parque donde vas a operar es el que construye tu nave.
          </p>
        </SplitSimpleBP>

        {/* ── Bloque de validación ── */}
        <OffsetWithFeatureListBP />

        {/* ── Cierre + CTA ── */}
        <div className="px-10 1200:px-0 lg:max-w-5xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto py-20 md:py-28 text-center">
          <p className="text-balance text-muted-foreground text-[1rem] 768:text-[1.125rem] 1024:text-[1.25rem] 1200:text-[1.25rem] 1366:text-[1.375rem] 1536:text-[1.5rem] 1728:text-[1.625rem] 1920:text-[1.75rem] leading-relaxed tracking-wide max-w-4xl mx-auto">
            Menos riesgo. Menos fricción. Más velocidad. Eso es lo que
            significan 60 años de permanencia, dueños operando y constructora
            propia — trabajando juntos para tu proyecto.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xs bg-blue-600 px-8 py-3.5 text-[0.9375rem] 1200:text-[1rem] 1536:text-[1.0625rem] font-semibold text-white shadow hover:bg-blue-700 transition-colors"
            >
              Solicita una consulta
            </a>
            <a
              href="/nelson/trayectoria"
              className="inline-flex items-center justify-center gap-2 rounded-xs px-8 py-3.5 text-[0.9375rem] 1200:text-[1rem] 1536:text-[1.0625rem] font-semibold text-foreground hover:bg-accent transition-colors"
            >
              Conoce nuestra trayectoria
            </a>
          </div>
        </div>

        {/* FIN COPY COMERCIAL */}
      </main>
    </div>
  );
}

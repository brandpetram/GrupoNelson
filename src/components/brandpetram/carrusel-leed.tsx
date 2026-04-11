"use client";

import { Carrusel1 } from "@/componentes/brandpetram/carrusel-1";
import { Titulo } from "@/components/ui/brandpetram/titulo";
import { GridOverlay } from "@/components/ui/grid";
import type { GridProps } from "@/components/ui/grid";
import { cn } from "@/lib/utils";

type BlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

interface CarruselLeedProps {
  /** Opacidad del overlay oscuro sobre cada imagen (0-1) */
  overlayOpacity?: number;
  /** Clases de gradiente o color para overlay con efecto blend */
  colorOverlay?: string;
  /** Blend mode para el colorOverlay */
  blendMode?: BlendMode;
  /** Configuración del grid overlay sobre las imágenes */
  gridConfig?: Omit<GridProps, "mode" | "children" | "height">;
  /** Idioma (default: "es") */
  lang?: "en" | "es";
}

// === Datos bilingües del carrusel LEED ===

interface LeedSlide {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  etiqueta: string;
}

const leedCarruselData: Record<"es" | "en", { heading: string; items: LeedSlide[] }> = {
  es: {
    heading: "Certifica tu Nave Industrial con LEED",
    items: [
      {
        id: "leed1",
        title: "Experiencia en<br>Clima Extremo",
        subtitle:
          "Mexicali exige un nivel de diseño distinto. Nuestra experiencia local en zonas con +45°C y alta radiación solar es lo que diferencia una nave LEED en papel de una que funciona en la realidad.",
        href: "/constructora/leed/clima-extremo",
        etiqueta: "Experiencia en Clima Extremo",
      },
      {
        id: "leed2",
        title: "Proceso &<br>Certificación LEED",
        subtitle:
          "Domina la documentación técnica y los submittals ante el USGBC bajo LEED v4 BD+C, con proceso integrativo desde el diseño conceptual hasta la entrega del certificado.",
        href: "/constructora/leed/proceso-certificacion",
        etiqueta: "Proceso & Certificación LEED",
      },
      {
        id: "leed3",
        title: "Sistemas Operativos<br>Inteligentes",
        subtitle:
          "Integra BMS y submedición de energía y agua para que el operador de la nave tenga control total y datos en tiempo real de todos sus sistemas.",
        href: "/constructora/leed/sistemas-operativos",
        etiqueta: "Sistemas Operativos Inteligentes",
      },
      {
        id: "leed4",
        title: "Sitios Sostenibles<br>& Agua",
        subtitle:
          "Reduce la isla de calor con techos reflectivos y pavimentos claros, y optimiza cada litro de agua con fixtures de alta eficiencia en una de las zonas más áridas del país.",
        href: "/constructora/leed/sitios-sostenibles",
        etiqueta: "Sitios Sostenibles & Agua",
      },
      {
        id: "leed5",
        title: "Calidad Ambiental<br>Interior",
        subtitle:
          "Garantiza aire limpio, confort térmico y niveles óptimos de iluminación para los trabajadores, usando materiales de bajo COV y sistemas de ventilación certificados.",
        href: "/constructora/leed/calidad-ambiental",
        etiqueta: "Calidad Ambiental Interior",
      },
      {
        id: "leed6",
        title: "Materiales<br>& Recursos",
        subtitle:
          "Selecciona materiales con EPDs verificadas, alto contenido reciclado y origen regional, gestionando el 100% de los residuos de obra con desvío mínimo del 50% a vertedero.",
        href: "/constructora/leed/materiales-recursos",
        etiqueta: "Materiales & Recursos",
      },
      {
        id: "leed7",
        title: "Energía<br>& Atmósfera",
        subtitle:
          "Diseña cada nave para superar los estándares ASHRAE 90.1 mediante modelado energético, envolvente térmica de alto rendimiento y sistemas fotovoltaicos en cubierta.",
        href: "/constructora/leed/energia-atmosfera",
        etiqueta: "Energía & Atmósfera",
      },
    ],
  },
  en: {
    heading: "Certify Your Industrial Building with LEED",
    items: [
      {
        id: "leed1",
        title: "Extreme Climate<br>Experience",
        subtitle:
          "Mexicali demands a different level of design. Our local experience in zones with +45°C and high solar radiation is what sets apart a LEED building on paper from one that works in reality.",
        href: "/construction/leed/extreme-climate",
        etiqueta: "Extreme Climate Experience",
      },
      {
        id: "leed2",
        title: "LEED Certification<br>Process",
        subtitle:
          "Masters technical documentation and submittals to the USGBC under LEED v4 BD+C, with an integrative process from conceptual design to certificate delivery.",
        href: "/construction/leed/certification-process",
        etiqueta: "LEED Certification Process",
      },
      {
        id: "leed3",
        title: "Intelligent<br>Operating Systems",
        subtitle:
          "Integrates BMS and energy and water sub-metering so the building operator has full control and real-time data across all systems.",
        href: "/construction/leed/operating-systems",
        etiqueta: "Intelligent Operating Systems",
      },
      {
        id: "leed4",
        title: "Sustainable Sites<br>& Water",
        subtitle:
          "Reduces heat island effect with reflective roofs and light pavements, and optimizes every liter of water with high-efficiency fixtures in one of the country's most arid zones.",
        href: "/construction/leed/sustainable-sites",
        etiqueta: "Sustainable Sites & Water",
      },
      {
        id: "leed5",
        title: "Indoor<br>Environmental Quality",
        subtitle:
          "Ensures clean air, thermal comfort, and optimal lighting levels for workers, using low-VOC materials and certified ventilation systems.",
        href: "/construction/leed/indoor-environmental-quality",
        etiqueta: "Indoor Environmental Quality",
      },
      {
        id: "leed6",
        title: "Materials<br>& Resources",
        subtitle:
          "Selects materials with verified EPDs, high recycled content, and regional origin, managing 100% of construction waste with a minimum 50% landfill diversion.",
        href: "/construction/leed/materials-resources",
        etiqueta: "Materials & Resources",
      },
      {
        id: "leed7",
        title: "Energy<br>& Atmosphere",
        subtitle:
          "Designs every building to exceed ASHRAE 90.1 standards through energy modeling, high-performance thermal envelope, and rooftop photovoltaic systems.",
        href: "/construction/leed/energy-atmosphere",
        etiqueta: "Energy & Atmosphere",
      },
    ],
  },
};
export function CarruselLeed({
  overlayOpacity = 0.25,
  colorOverlay = "bg-gradient-to-br from-blue-600/90 to-blue-500/90",
  blendMode = "multiply",
  gridConfig = {
    strokeColor: "stroke-white/30",
    gridSize: 40,
    showHighlights: false,
    fadePosition: "center" as const,
    fadeRadius: "8rem",
  },
  lang = "es",
}: CarruselLeedProps = {}) {
  const data = leedCarruselData[lang ?? "es"];
  const leedCarruselItems = data.items;

  return (
    <section data-component="CarruselLeed" data-component-file="src/components/brandpetram/carrusel-leed.tsx" data-component-props="true"



      className="py-16 pl-4 md:pl-[10%]"
    >
      <Titulo
        as="h2"
        fontSize="text-3xl md:text-6xl 1280:text-7xl"
        fontWeight="font-bold"
        className="mb-8 tracking-tighter leading-none w-10/12 1536:w-9/12 text-balance"
      >
        {data.heading}
      </Titulo>
      <Carrusel1
        items={leedCarruselItems.map((item) => {
          const imageMap: { [key: string]: string } = {
            leed1: "/leed/leed1-mexicali-nave-industrial-clima-extremo-1.jpeg",
            leed2:
              "/leed/leed2-mexicali-nave-industrial-certificacion-bdc-1.jpeg",
            leed3: "/leed/leed3-mexicali-nave-industrial-sistemas-bms-1.jpeg",
            leed4:
              "/leed/leed4-mexicali-nave-industrial-sitios-sostenibles-1.jpeg",
            leed5:
              "/leed/leed5-mexicali-nave-industrial-calidad-ambiental-1.jpeg",
            leed6:
              "/leed/leed6-mexicali-nave-industrial-materiales-recursos-1.jpeg",
            leed7:
              "/leed/leed7-mexicali-nave-industrial-energia-atmosfera-1.jpeg",
          };

          return {
            id: item.id,
            content: (
              <a
                href={item.href}
                className="block w-[380px] rounded-none bg-background p-4 shadow-sm dark:shadow-white/5 hover:shadow-md transition-shadow group border border-border/60 dark:border-border/70 hover:border-border"
              >
                <div className="aspect-square w-full rounded-xs bg-muted flex items-center justify-center mb-4 overflow-hidden relative transition-transform duration-300 group-hover:scale-[0.97] origin-center">
                  <img
                    src={
                      imageMap[item.id] ||
                      "/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-294.jpg"
                    }
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {overlayOpacity !== undefined && overlayOpacity > 0 && (
                    <div
                      className="absolute inset-0 bg-black pointer-events-none"
                      style={{ opacity: overlayOpacity }}
                      aria-hidden="true"
                    />
                  )}
                  {colorOverlay && (
                    <div
                      className={cn(
                        "absolute inset-0 pointer-events-none",
                        colorOverlay,
                      )}
                      style={{ mixBlendMode: blendMode }}
                      aria-hidden="true"
                    />
                  )}
                  {gridConfig && <GridOverlay {...gridConfig} />}
                  {item.etiqueta && (
                    <span className="absolute top-3 left-3 text-white font-extrabold tracking-tighter text-[2rem] text-balance max-w-50 leading-none">
                      {item.etiqueta}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <h3
                    className="font-extrabold text-foreground text-xl leading-none tracking-tighter transition-colors duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-500 group-hover:bg-clip-text group-hover:text-transparent"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="text-sm text-muted-foreground leading-snug line-clamp-3">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            ),
          };
        })}
        gap={16}
        className="py-4"
        paddingEnd="10%"
      />
    </section>
  );
}

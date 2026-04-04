import Link from "next/link";
import Image from "next/image";

type MosaicoItem =
  | {
      type: "image";
      src: string;
      alt: string;
      aspect: "square" | "tall" | "wide";
      objectPosition?: string;
    }
  | {
      type: "card";
      title: string;
      description: string;
      href: string;
      bg: string;
    };

const items: MosaicoItem[] = [
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-1.jpeg",
    alt: "Nave industrial Grupo Nelson en Mexicali",
    aspect: "square",
  },
  {
    type: "card",
    title: "60 años desarrollando naves industriales en Mexicali",
    description:
      "Desde 1965, Grupo Nelson opera parques industriales donde 30 corporaciones internacionales fabrican.",
    href: "/contacto",
    bg: "bg-blue-700",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-3.jpeg",
    alt: "Honeywell en parque industrial de Mexicali",
    aspect: "tall",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-5.jpeg",
    alt: "Parque industrial Nelson Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-2.jpeg",
    alt: "Naves industriales en Mexicali",
    aspect: "tall",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-6.jpeg",
    alt: "Honeywell Mexicali",
    aspect: "square",
  },
  {
    type: "card",
    title: "80% de clientes regresan",
    description:
      "Gulfstream lleva 35 años. Honeywell lleva 30. La permanencia dice más que cualquier brochure.",
    href: "/contacto",
    bg: "bg-indigo-600",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg",
    alt: "Nave industrial Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg",
    alt: "Construcción nave industrial Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-9.jpeg",
    alt: "Parque industrial Mexicali",
    aspect: "square",
  },
  {
    type: "card",
    title: "Tres generaciones, un mismo compromiso",
    description:
      "La familia Nelson opera directamente. Sin capas corporativas entre tu proyecto y quien lo aprueba.",
    href: "/contacto",
    bg: "bg-sky-700",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-10.jpeg",
    alt: "Nave industrial en Mexicali",
    aspect: "tall",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-4.jpeg",
    alt: "Parque industrial en Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-12.jpeg",
    alt: "Honeywell nave industrial Mexicali",
    aspect: "tall",
  },
  {
    type: "card",
    title: "De 5,000 a 550,000 ft²",
    description:
      "Interiores Aéreos creció 110x sin cambiar de proveedor. Escala tu operación con quien crece contigo.",
    href: "/contacto",
    bg: "bg-blue-900",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-7.jpeg",
    alt: "Nave industrial Grupo Nelson",
    aspect: "square",
  },
];

const aspectClasses = {
  square: "aspect-square",
  tall: "aspect-[1/2]",
  wide: "aspect-[2/1]",
};

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37 28"
      className="h-5 w-auto"
    >
      <g fill="#FFFFFF">
        <path d="M0 11.9h32v4.2H0z" />
        <path d="m23.2 28-2.9-2.9L31.2 14 20.3 2.9 23.2 0 37 14z" />
      </g>
    </svg>
  );
}

interface MosaicoLiderazgoProps {
  rounding?: string;
}

export function MosaicoLiderazgo({
  rounding = "rounded-xs",
}: MosaicoLiderazgoProps) {
  return (
    <section data-component="MosaicoLiderazgo" data-component-file="src/components/brandpetram/mosaico-liderazgo.tsx" data-component-props="true"
     
     
     
      className="mx-auto max-w-7xl px-4 py-16"
    >
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {items.map((item, idx) => {
          if (item.type === "card") {
            return (
              <Link
                key={idx}
                href={item.href}
                className="mb-4 block break-inside-avoid transition-transform duration-300 hover:scale-[0.97]"
              >
                <div
                  className={`flex flex-col items-start justify-center gap-4 ${rounding} p-6 lg:p-10 ${item.bg}`}
                >
                  <h2 className="text-xl font-bold leading-none tracking-tighter text-white lg:text-3xl">
                    {item.title}
                  </h2>
                  <p className="text-sm font-normal tracking-tight text-white/90 lg:text-base">
                    {item.description}
                  </p>
                  <ArrowIcon />
                </div>
              </Link>
            );
          }

          return (
            <div
              key={idx}
              className={`mb-4 break-inside-avoid overflow-hidden ${rounding} transition-transform duration-300 hover:scale-[0.97]`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={
                  item.aspect === "tall"
                    ? 1200
                    : item.aspect === "wide"
                      ? 300
                      : 600
                }
                className={`w-full ${rounding} object-cover ${aspectClasses[item.aspect]} ${item.objectPosition ? `object-[${item.objectPosition}]` : ""}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

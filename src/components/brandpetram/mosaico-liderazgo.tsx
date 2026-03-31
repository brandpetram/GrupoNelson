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

const columns: MosaicoItem[][] = [
  // ── Columna 1 ──
  [
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
  ],
  // ── Columna 2 ──
  [
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
  ],
  // ── Columna 3 ──
  [
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
  ],
  // ── Columna 4 ──
  [
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
  ],
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

export function MosaicoLiderazgo() {
  return (
    <section
      data-component="MosaicoLiderazgo"
      data-component-file="src/components/brandpetram/mosaico-liderazgo.tsx"
      data-component-props="false"
      className="mx-auto max-w-7xl px-4 py-16"
    >
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-4">
            {column.map((item, itemIdx) => {
              if (item.type === "card") {
                return (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className="group transition-transform duration-300 hover:scale-[0.97]"
                  >
                    <div
                      className={`flex flex-col items-start justify-center gap-4 rounded-xl p-6 md:min-h-64 lg:min-h-0 lg:p-10 ${item.bg}`}
                    >
                      <h2 className="text-xl font-bold leading-none tracking-tighter text-white lg:text-3xl">
                        {item.title}
                      </h2>
                      <p className="text-sm font-normal text-white/90 tracking-tight lg:text-base">
                        {item.description}
                      </p>
                      <ArrowIcon aria-hidden className="text-white" />
                    </div>
                  </Link>
                );
              }

              return (
                <div
                  key={itemIdx}
                  className="group overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[0.97]"
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
                    className={`w-full rounded-xl object-cover ${aspectClasses[item.aspect]} ${item.objectPosition ? `object-[${item.objectPosition}]` : ""}`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

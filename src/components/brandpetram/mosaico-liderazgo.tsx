import Link from "next/link";
import Image from "next/image";

export type MosaicoItem =
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
    title: "La familia fundadora sigue operando",
    description:
      "Desde 1967, los dueños de Grupo Nelson atienden cada proyecto personalmente. Sin capas corporativas.",
    href: "/nelson/liderazgo",
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
    title: "Relaciones de largo plazo",
    description:
      "Gulfstream lleva más de 35 años. Honeywell más de 3 décadas. La relación directa con los dueños produce lealtad que se mide en décadas.",
    href: "/nelson/liderazgo",
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
    title: "Tres generaciones, una familia operando",
    description:
      "La persona que negocia tu contrato es la misma que lo firma. Sin capas corporativas, sin rotación de ejecutivos.",
    href: "/nelson/liderazgo",
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
    title: "30 años dirigiendo la construcción",
    description:
      "Baumex fue fundada en 1997 y lleva casi 30 años bajo la misma dirección. La continuidad no se limita a la familia.",
    href: "/nelson/liderazgo",
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

const itemsEn: MosaicoItem[] = items.map((item) => {
  if (item.type !== 'card') return item
  const translations: Record<string, { title: string; description: string; href: string }> = {
    'La familia fundadora sigue operando': {
      title: 'The founding family still operates',
      description: 'Since 1967, the owners of Grupo Nelson handle every project personally. No corporate layers.',
      href: '/about/leadership',
    },
    'Relaciones de largo plazo': {
      title: 'Long-term relationships',
      description: 'Gulfstream has been here over 35 years. Honeywell over 3 decades. The direct relationship with the owners produces loyalty measured in decades.',
      href: '/about/leadership',
    },
    'Tres generaciones, una familia operando': {
      title: 'Three generations, one family operating',
      description: 'The person who negotiates your contract is the same person who signs it. No corporate layers, no executive turnover.',
      href: '/about/leadership',
    },
    '30 años dirigiendo la construcción': {
      title: '30 years leading construction',
      description: 'Baumex was founded in 1997 and has been under the same leadership for nearly 30 years. Continuity is not limited to the family.',
      href: '/about/leadership',
    },
  }
  const t = translations[item.title]
  return t ? { ...item, ...t } : item
})

interface MosaicoLiderazgoProps {
  rounding?: string;
  content?: MosaicoItem[];
  lang?: 'en' | 'es';
}

export function MosaicoLiderazgo({
  rounding = "rounded-xs",
  content,
  lang = 'es',
}: MosaicoLiderazgoProps) {
  const _content = content ?? (lang === 'en' ? itemsEn : items)
  return (
    <section data-component="MosaicoLiderazgo" data-component-file="src/components/brandpetram/mosaico-liderazgo.tsx" data-component-props="true"
     
     
     
      className="mx-auto max-w-7xl px-4 py-16"
    >
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {_content.map((item, idx) => {
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

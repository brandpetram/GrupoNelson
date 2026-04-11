/**
 * MosaicCases (English)
 *
 * English version of the mosaic for success-stories.
 * Visual structure copied from MosaicoLiderazgo (brandpetram).
 * Cards rewritten for success-stories territory: client demands validate Nelson.
 */

import Link from "next/link";
import Image from "next/image";

type MosaicItem =
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

const items: MosaicItem[] = [
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-1.jpeg",
    alt: "Grupo Nelson industrial facility in Mexicali",
    aspect: "square",
  },
  {
    type: "card",
    title: "35 years with Gulfstream Aerospace",
    description:
      "Fortune 500, aerospace manufacturing. 5 facilities built by Baumex. Direct assignment without bidding.",
    href: "/contact",
    bg: "bg-blue-700",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-3.jpeg",
    alt: "Honeywell at Mexicali industrial park",
    aspect: "tall",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-5.jpeg",
    alt: "Nelson Industrial Park Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-2.jpeg",
    alt: "Industrial facilities in Mexicali",
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
    title: "ISN \"Recommended\" by Honeywell",
    description:
      "The highest rating the ISN platform allows. The client's filter validates the contractor.",
    href: "/contact",
    bg: "bg-indigo-600",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg",
    alt: "Industrial facility Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg",
    alt: "Industrial facility construction Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-9.jpeg",
    alt: "Industrial park Mexicali",
    aspect: "square",
  },
  {
    type: "card",
    title: "80% repeat business",
    description:
      "Most clients return, expand, or start new projects. Retention says more than any brochure.",
    href: "/contact",
    bg: "bg-sky-700",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-10.jpeg",
    alt: "Industrial facility in Mexicali",
    aspect: "tall",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-4.jpeg",
    alt: "Industrial park in Mexicali",
    aspect: "square",
  },
  {
    type: "image",
    src: "/honeywell/honeywell-en-parque-industrial-de-mexicali-12.jpeg",
    alt: "Honeywell industrial facility Mexicali",
    aspect: "tall",
  },
  {
    type: "card",
    title: "30 international corporations",
    description:
      "Operate today in Grupo Nelson parks. Aerospace, logistics, manufacturing — trust is not limited to one sector.",
    href: "/contact",
    bg: "bg-blue-900",
  },
  {
    type: "image",
    src: "/grupo-nelson-naves-en-parques-industriales-en-mexicali-7.jpeg",
    alt: "Grupo Nelson industrial facility",
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

interface MosaicCasesProps {
  rounding?: string;
}

export function MosaicCases({
  rounding = "rounded-xs",
}: MosaicCasesProps) {
  return (
    <section
      data-component="MosaicCases"
      data-component-file="src/app/(en)/experience/success-stories/sections/mosaic-cases.tsx"
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

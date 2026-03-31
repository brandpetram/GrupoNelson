/**
 * Componente original: tailwind-ui/feature-sections/offset-with-feature-list
 * Brandpetramizado: 21 de marzo de 2026
 * Proyecto: Grupo Nelson — Sección Infraestructura (diferencia-nelson)
 *
 * Este componente fue copiado y adaptado con los 13 breakpoints granulares
 * aplicados a todos los textos y widths, leading-none y tracking-tighter en headings,
 * rounded-xs, y colores Grupo Nelson.
 */

import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Nelson II: 27 hectáreas",
    description: "Subestación eléctrica dedicada para el parque.",
  },
  {
    name: "Sistema contraincendio central",
    description:
      "Tanque de 360,000 galones — ahorro de 60% al cliente frente a un sistema individual.",
  },
  {
    name: "Certificaciones internacionales",
    description: "LEED Gold, FM Global, NFPA, ISN, sistemas antisísmicos BRB.",
  },
  {
    name: "Seguridad 24/7",
    description:
      "Control de acceso y vigilancia permanente en todos los parques.",
  },
  {
    name: 'Calificación "Recomendado"',
    description: "Por Honeywell en plataforma ISN.",
  },
  {
    name: "4 empresas Fortune 500",
    description:
      "Ya validaron esta infraestructura con su propio due diligence.",
  },
];

export function OffsetWithFeatureListBP() {
  return (
    <div
      data-component="OffsetWithFeatureListBP"
      data-component-file="src/components/brandpetram/offset-with-feature-list-bp.tsx"
      data-component-props="false"
      className="bg-gray-900 py-[3rem] 360:py-[3rem] 393:py-[3.5rem] 430:py-[3.5rem] 768:py-[4rem] 834:py-[4rem] 1024:py-[5rem] 1200:py-[5.5rem] 1280:py-[6rem] 1366:py-[6rem] 1440:py-[6.5rem] 1536:py-[7rem] 1728:py-[7.5rem] 1920:py-[8rem] rounded-xs"
    >
      <div className="mx-auto w-11/12 px-[1.5rem] 768:px-[2rem] 1024:px-[2.5rem] 1200:px-[3rem] 1280:px-[3.5rem] 1366:px-[4rem] 1440:px-[4.5rem] 1536:px-[5rem] 1728:px-[6rem] 1920:px-[7rem]">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-[0.875rem] 360:text-[0.875rem] 393:text-[0.875rem] 430:text-[0.875rem] 768:text-[0.875rem] 834:text-[0.875rem] 1024:text-[0.9375rem] 1200:text-[0.9375rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1.0625rem] 1728:text-[1.0625rem] 1920:text-[1.0625rem] font-semibold text-blue-400">
              Infraestructura auditada
            </h2>
            <p className="mt-2 text-[1.5rem] 360:text-[1.5rem] 393:text-[1.5rem] 430:text-[1.75rem] 768:text-[2rem] 834:text-[2.25rem] 1024:text-[2.5rem] 1200:text-[2.75rem] 1280:text-[3rem] 1366:text-[3.25rem] 1440:text-[3.5rem] 1536:text-[3.75rem] 1728:text-[4.25rem] 1920:text-[4.5rem] font-extrabold tracking-tighter leading-none text-pretty text-white">
              Experiencia Trabajando con Empresas Fortune 500
            </p>
            <p className="mt-6 text-[0.875rem] 360:text-[0.875rem] 393:text-[0.875rem] 430:text-[1rem] 768:text-[1rem] 834:text-[1.0625rem] 1024:text-[1.125rem] 1200:text-[1.125rem] 1280:text-[1.1875rem] 1366:text-[1.25rem] 1440:text-[1.3125rem] 1536:text-[1.375rem] 1728:text-[1.4375rem] 1920:text-[1.5rem] text-gray-300 leading-relaxed tracking-wide text-balance">
              <strong>30 corporaciones internacionales</strong> operan en
              parques de Grupo Nelson. Cada una pasó por un proceso de{" "}
              <strong>due diligence</strong> antes de firmar. Cada una evaluó
              infraestructura eléctrica, sistemas contraincendio, seguridad y
              compliance ambiental. Y cada una firmó.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-[1.5rem] 768:gap-y-[2rem] 1024:gap-y-[2.5rem] 1200:gap-y-[2.5rem] 1920:gap-y-[3rem] sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="text-[0.875rem] 360:text-[0.875rem] 393:text-[0.875rem] 430:text-[1rem] 768:text-[1rem] 834:text-[1.0625rem] 1024:text-[1.125rem] 1200:text-[1.125rem] 1280:text-[1.1875rem] 1366:text-[1.25rem] 1440:text-[1.25rem] 1536:text-[1.3125rem] 1728:text-[1.375rem] 1920:text-[1.375rem] font-bold text-white leading-none tracking-tighter">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute top-1 left-0 size-5 text-blue-400"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2 text-[0.75rem] 360:text-[0.75rem] 393:text-[0.75rem] 430:text-[0.8125rem] 768:text-[0.875rem] 834:text-[0.9375rem] 1024:text-[1rem] 1200:text-[1rem] 1280:text-[1.0625rem] 1366:text-[1.125rem] 1440:text-[1.1875rem] 1536:text-[1.25rem] 1728:text-[1.25rem] 1920:text-[1.25rem] text-gray-400 leading-relaxed tracking-wide">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

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

const featuresText = {
  es: {
    tagline: 'Resultados que lo confirman',
    heading: 'Los más exigentes ya evaluaron y firmaron',
    intro: 'Corporativos globales y empresas Fortune 500 ya evaluaron a Grupo Nelson — infraestructura, seguridad, compliance, capacidad constructiva — y cada una firmó.',
    features: [
      { name: "Empresas Fortune 500 operando aquí", description: "Pasaron por due diligence exhaustivo antes de firmar. Si ellas aprobaron, tu evaluación puede pasar también." },
      { name: "La nave industrial más grande de Mexicali", description: "52,200 m² para Gulfstream — construida por el mismo grupo que va a atender tu proyecto." },
      { name: "80% repeat business", description: "La mayoría de los clientes regresa, expande o inicia nuevos proyectos." },
      { name: "Interiores Aéreos: de 5,000 a 550,000 ft²", description: "El mismo proveedor desde una nave pequeña hasta un complejo 110 veces más grande." },
      { name: "Nelson II: infraestructura validada", description: "Subestación eléctrica dedicada y sistema contraincendio central — 60% de ahorro frente a un sistema individual." },
      { name: "30 corporaciones internacionales", description: "Operando hoy en parques de Grupo Nelson." },
    ],
  },
  en: {
    tagline: 'Results that prove it',
    heading: 'The most demanding have already evaluated and signed',
    intro: 'Global corporations and Fortune 500 companies have already evaluated Grupo Nelson — infrastructure, security, compliance, construction capacity — and each one signed.',
    features: [
      { name: "Fortune 500 companies operating here", description: "They went through exhaustive due diligence before signing. If they approved, your evaluation can pass too." },
      { name: "The largest industrial building in Mexicali", description: "52,200 m² for Gulfstream — built by the same group that will handle your project." },
      { name: "80% repeat business", description: "The majority of clients come back, expand, or start new projects." },
      { name: "Interiores Aereos: from 5,000 to 550,000 ft²", description: "The same provider from a small building to a complex 110 times larger." },
      { name: "Nelson II: validated infrastructure", description: "Dedicated electrical substation and centralized fire suppression system — 60% savings versus an individual system." },
      { name: "30 international corporations", description: "Operating today in Grupo Nelson parks." },
    ],
  },
}

export function OffsetWithFeatureListBP({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const t = featuresText[lang]
  return (
    <div data-component="OffsetWithFeatureListBP" data-component-file="src/components/brandpetram/offset-with-feature-list-bp.tsx" data-component-props="false"
     
     
     
      className="bg-gray-900 py-[3rem] 360:py-[3rem] 393:py-[3.5rem] 430:py-[3.5rem] 768:py-[4rem] 834:py-[4rem] 1024:py-[5rem] 1200:py-[5.5rem] 1280:py-[6rem] 1366:py-[6rem] 1440:py-[6.5rem] 1536:py-[7rem] 1728:py-[7.5rem] 1920:py-[8rem] rounded-xs"
    >
      <div className="mx-auto w-11/12 px-[1.5rem] 768:px-[2rem] 1024:px-[2.5rem] 1200:px-[3rem] 1280:px-[3.5rem] 1366:px-[4rem] 1440:px-[4.5rem] 1536:px-[5rem] 1728:px-[6rem] 1920:px-[7rem]">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-[0.875rem] 360:text-[0.875rem] 393:text-[0.875rem] 430:text-[0.875rem] 768:text-[0.875rem] 834:text-[0.875rem] 1024:text-[0.9375rem] 1200:text-[0.9375rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1.0625rem] 1728:text-[1.0625rem] 1920:text-[1.0625rem] font-semibold text-blue-400">
              {t.tagline}
            </h2>
            <p className="mt-2 text-[1.5rem] 360:text-[1.5rem] 393:text-[1.5rem] 430:text-[1.75rem] 768:text-[2rem] 834:text-[2.25rem] 1024:text-[2.5rem] 1200:text-[2.75rem] 1280:text-[3rem] 1366:text-[3.25rem] 1440:text-[3.5rem] 1536:text-[3.75rem] 1728:text-[4.25rem] 1920:text-[4.5rem] font-extrabold tracking-tighter leading-none text-pretty text-white">
              {t.heading}
            </p>
            <p className="mt-6 text-[0.875rem] 360:text-[0.875rem] 393:text-[0.875rem] 430:text-[1rem] 768:text-[1rem] 834:text-[1.0625rem] 1024:text-[1.125rem] 1200:text-[1.125rem] 1280:text-[1.1875rem] 1366:text-[1.25rem] 1440:text-[1.3125rem] 1536:text-[1.375rem] 1728:text-[1.4375rem] 1920:text-[1.5rem] text-gray-300 leading-relaxed tracking-wide text-balance">
              {t.intro}
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-[1.5rem] 768:gap-y-[2rem] 1024:gap-y-[2.5rem] 1200:gap-y-[2.5rem] 1920:gap-y-[3rem] sm:grid-cols-2">
            {t.features.map((feature) => (
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

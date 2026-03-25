// Origen: daasyl2022V2/Faqs
// Adaptaciones: eliminado next-i18next. Textos lorem ipsum.

const faqs = [
  {
    id: 1,
    question: "¿Qué diferencia a Baumex de otras constructoras en Mexicali?",
    answer:
      "Baumex es la constructora in-house de Grupo Nelson. Concentra diseño, estimación, construcción y supervisión bajo un mismo contrato. El arquitecto que traza el layout trabaja en el mismo edificio que el superintendente que supervisa el colado. No subcontratamos diseño — contamos con 6 departamentos propios de ingeniería.",
  },
  {
    id: 2,
    question: "¿Qué tamaño de nave industrial pueden construir?",
    answer:
      "Desde naves de 5,000 m² hasta complejos aeroespaciales de más de 50,000 m². El proyecto más grande activo es Gulfstream 550K con 52,200 m² bajo techo más 13,500 m² de oficinas. En 28 años hemos completado 75 proyectos que suman 4.5 millones de pies cuadrados para 33 corporaciones internacionales.",
  },
  {
    id: 3,
    question: "¿Qué certificaciones tiene Baumex?",
    answer:
      "Certificación ISN (ISNetworld) con calificación 'Recomendado' por Honeywell International. Certificación FM Global en muros, cubierta, estructura y sistema contraincendio. LEED Gold en proceso para el proyecto Gulfstream 550K. Diseño conforme a NFPA, IBC y Normas Oficiales Mexicanas. Todo el personal con certificación DC-3.",
  },
  {
    id: 4,
    question: "¿Cómo gestionan la seguridad en obra?",
    answer:
      "Manual HSE de 18 capítulos. Permisos de trabajo diarios con matriz de riesgo cuantitativa antes de cada turno. Control de presión arterial para trabajo en alturas conforme a NOM-009-STPS-2011. Vigía Vigilante de Incendios en zonas de soldadura conforme a NOM-027-STPS-2008. El scorecard del proyecto Gulfstream registra 404 días consecutivos sin accidentes y 1,092,745 horas hombre con cero fatalidades.",
  },
  {
    id: 5,
    question: "¿Para qué empresas han construido?",
    answer:
      "Gulfstream (20+ años de relación), Honeywell (30 años), DHL, Vertiv, Skyworks, Intuitive Surgical, Rheem, Baxter, Deacero, Direct Pack, entre otras. La lista completa incluye 33 corporaciones internacionales, varias Fortune 500. El 80% de nuestros clientes regresan proyecto tras proyecto.",
  },
  {
    id: 6,
    question: "¿Qué tipo de construcción realizan?",
    answer:
      "Build-to-suit (nave nueva diseñada a la medida de tu operación), expansión de naves existentes sin detener producción, y tenant improvement (adecuación de nave existente a tus requerimientos). Las 10 disciplinas constructivas se ejecutan con equipo propio: terracerías, cimentación, mampostería, estructura, techumbre, fachadas, interiores, acabados, eléctrica y mecánica.",
  },
  {
    id: 7,
    question: "¿En qué ciudades construyen?",
    answer:
      "Nuestra base principal está en Mexicali, Baja California, donde se concentra la mayoría de nuestros proyectos. También hemos construido en Hermosillo (Sonora), Tecate (Baja California), San Luis Río Colorado (Sonora) y El Salto (Jalisco). Operamos en todo el noroeste de México.",
  },
  {
    id: 8,
    question: "¿Cuánto tiempo tarda la construcción de una nave industrial?",
    answer:
      "Depende de la escala y complejidad del proyecto. Una nave estándar puede entregarse en 6 a 9 meses. Proyectos complejos como Gulfstream 550K (52,200 m² con sistemas antisísmicos BRB, 20 MW de capacidad eléctrica y certificación LEED Gold) tienen cronogramas más extensos. Cada proyecto tiene una ruta crítica con 18 hitos monitoreados y reuniones semanales documentadas.",
  },
  {
    id: 9,
    question: "¿Pueden construir proyectos especiales fuera de naves estándar?",
    answer:
      "Sí. Hemos diseñado y construido un puente vehicular de 95 metros sin columnas para Skyworks (semiconductores), un túnel de viento con blower de 3,000 HP para Honeywell (aeroespacial), y cimentaciones de precisión milimétrica a 15 metros de profundidad para Deacero (manufactura pesada). Proyectos que no se licitan en un directorio — se asignan por track record.",
  },
]

export default function Psi() {
  return (
    <section id="faqs" aria-labelledby="faq-heading" className="bg-background">
      <div className="max-w-[1600px] mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2
            id="faq-heading"
            className="text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-extrabold tracking-tight text-foreground"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
            Si no encuentras tu pregunta aquí,{" "}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Contáctanos
            </a>{" "}
            para más información.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-[1.3rem] 360:text-[1.3rem] 393:text-[1.35rem] 430:text-[1.45rem] 768:text-[1.45rem] 834:text-[1.45rem] 1024:text-[1.6rem] 1200:text-[1.45rem] 1280:text-[1.5rem] 1366:text-[1.55rem] 1440:text-[1.6rem] 1536:text-[1.75rem] 1728:text-[1.95rem] 1920:text-[2.3rem] font-bold leading-none text-foreground">{faq.question}</dt>
              <dd className="mt-3 text-[1.15rem] 360:text-[1.15rem] 393:text-[1.15rem] 430:text-[1.25rem] 768:text-[1.3rem] 834:text-[1.3rem] 1024:text-[1.45rem] 1200:text-[1.25rem] 1280:text-[1.3rem] 1366:text-[1.35rem] 1440:text-[1.45rem] 1536:text-[1.5rem] 1728:text-[1.7rem] 1920:text-[1.95rem] text-muted-foreground">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

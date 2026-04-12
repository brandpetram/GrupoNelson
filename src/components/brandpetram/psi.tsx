// Origen: daasyl2022V2/Faqs
// Adaptaciones: eliminado next-i18next. Textos lorem ipsum.

const text = {
  es: {
    heading: 'Preguntas frecuentes',
    description: <>Si no encuentras tu pregunta aquí,{" "}<a href="mailto:contacto@nelson.com.mx" className="font-medium text-blue-600 hover:text-blue-500">contáctanos</a>{" "}para más información.</>,
    faqs: [
      { id: 1, question: '¿Qué diferencia a Baumex de otras constructoras en Mexicali?', answer: 'Baumex es la constructora in-house de Grupo Nelson. Concentra diseño, estimación, construcción y supervisión bajo un mismo contrato. El arquitecto que traza el layout trabaja en el mismo edificio que el superintendente que supervisa el colado. No subcontratamos diseño — contamos con 6 departamentos propios de ingeniería.' },
      { id: 2, question: '¿Qué tamaño de nave industrial pueden construir?', answer: 'Desde naves de 5,000 m² hasta complejos aeroespaciales de más de 50,000 m². El proyecto más grande activo es Gulfstream 550K con 52,200 m² bajo techo más 13,500 m² de oficinas. En 28 años hemos completado 75 proyectos que suman 4.5 millones de pies cuadrados para 33 corporaciones internacionales.' },
      { id: 3, question: '¿Qué certificaciones tiene Baumex?', answer: "Certificación ISN (ISNetworld) con calificación 'Recomendado' por Honeywell International. Certificación FM Global en muros, cubierta, estructura y sistema contraincendio. LEED Gold en proceso para el proyecto Gulfstream 550K. Diseño conforme a NFPA, IBC y Normas Oficiales Mexicanas. Todo el personal con certificación DC-3." },
      { id: 4, question: '¿Cómo gestionan la seguridad en obra?', answer: 'Manual HSE de 18 capítulos. Permisos de trabajo diarios con matriz de riesgo cuantitativa antes de cada turno. Control de presión arterial para trabajo en alturas conforme a NOM-009-STPS-2011. Vigía Vigilante de Incendios en zonas de soldadura conforme a NOM-027-STPS-2008. El scorecard del proyecto Gulfstream registra 404 días consecutivos sin accidentes y 1,092,745 horas hombre con cero fatalidades.' },
      { id: 5, question: '¿Para qué empresas han construido?', answer: 'Gulfstream (20+ años de relación), Honeywell (30 años), DHL, Vertiv, Skyworks, Intuitive Surgical, Rheem, Baxter, Deacero, Direct Pack, entre otras. La lista completa incluye 33 corporaciones internacionales, varias Fortune 500. El 80% de nuestros clientes regresan proyecto tras proyecto.' },
      { id: 6, question: '¿Qué tipo de construcción realizan?', answer: 'Build-to-suit (nave nueva diseñada a la medida de tu operación), expansión de naves existentes sin detener producción, y tenant improvement (adecuación de nave existente a tus requerimientos). Las 10 disciplinas constructivas se ejecutan con equipo propio: terracerías, cimentación, mampostería, estructura, techumbre, fachadas, interiores, acabados, eléctrica y mecánica.' },
      { id: 7, question: '¿En qué ciudades construyen?', answer: 'Nuestra base principal está en Mexicali, Baja California, donde se concentra la mayoría de nuestros proyectos. También hemos construido en Hermosillo (Sonora), Tecate (Baja California), San Luis Río Colorado (Sonora) y El Salto (Jalisco). Operamos en todo el noroeste de México.' },
      { id: 8, question: '¿Cuánto tiempo tarda la construcción de una nave industrial?', answer: 'Depende de la escala y complejidad del proyecto. Una nave estándar puede entregarse en 6 a 9 meses. Proyectos complejos como Gulfstream 550K (52,200 m² con sistemas antisísmicos BRB, 20 MW de capacidad eléctrica y certificación LEED Gold) tienen cronogramas más extensos. Cada proyecto tiene una ruta crítica con 18 hitos monitoreados y reuniones semanales documentadas.' },
      { id: 9, question: '¿Pueden construir proyectos especiales fuera de naves estándar?', answer: 'Sí. Hemos diseñado y construido un puente vehicular de 95 metros sin columnas para Skyworks (semiconductores), un túnel de viento con blower de 3,000 HP para Honeywell (aeroespacial), y cimentaciones de precisión milimétrica a 15 metros de profundidad para Deacero (manufactura pesada). Proyectos que no se licitan en un directorio — se asignan por track record.' },
    ],
  },
  en: {
    heading: 'Frequently Asked Questions',
    description: <>If you don&apos;t find your question here,{" "}<a href="mailto:contacto@nelson.com.mx" className="font-medium text-blue-600 hover:text-blue-500">contact us</a>{" "}for more information.</>,
    faqs: [
      { id: 1, question: 'What sets Baumex apart from other construction firms in Mexicali?', answer: "Baumex is Grupo Nelson's in-house construction firm. It integrates design, estimation, construction, and supervision under a single contract. The architect who draws the layout works in the same building as the superintendent who oversees the concrete pour. We do not outsource design \u2014 we have 6 in-house engineering departments." },
      { id: 2, question: 'What size industrial buildings can you construct?', answer: 'From buildings of 54,000 ft\u00B2 to aerospace complexes exceeding 540,000 ft\u00B2. The largest active project is Gulfstream 550K with 562,000 ft\u00B2 under roof plus 145,000 ft\u00B2 of offices. Over 28 years we have completed 75 projects totaling 4.5 million square feet for 33 international corporations.' },
      { id: 3, question: 'What certifications does Baumex hold?', answer: "ISN (ISNetworld) certification with a 'Recommended' rating by Honeywell International. FM Global certification for walls, roofing, structure, and fire protection systems. LEED Gold in progress for the Gulfstream 550K project. Design compliant with NFPA, IBC, and Mexican Official Standards. All personnel hold DC-3 certification." },
      { id: 4, question: 'How do you manage safety on the job site?', answer: '18-chapter HSE manual. Daily work permits with a quantitative risk matrix before each shift. Blood pressure monitoring for work at heights per NOM-009-STPS-2011. Fire Watch in welding zones per NOM-027-STPS-2008. The Gulfstream project scorecard shows 404 consecutive days without accidents and 1,092,745 man-hours with zero fatalities.' },
      { id: 5, question: 'Which companies have you built for?', answer: 'Gulfstream (20+ year relationship), Honeywell (30 years), DHL, Vertiv, Skyworks, Intuitive Surgical, Rheem, Baxter, Deacero, Direct Pack, among others. The full list includes 33 international corporations, several Fortune 500. 80% of our clients return project after project.' },
      { id: 6, question: 'What types of construction do you perform?', answer: 'Build-to-suit (new building designed to the exact specifications of your operation), expansion of existing buildings without halting production, and tenant improvement (adaptation of an existing building to your requirements). All 10 construction disciplines are executed with our own teams: earthworks, foundations, masonry, structure, roofing, facades, interiors, finishes, electrical, and mechanical.' },
      { id: 7, question: 'In which cities do you build?', answer: 'Our main base is in Mexicali, Baja California, where the majority of our projects are concentrated. We have also built in Hermosillo (Sonora), Tecate (Baja California), San Luis Rio Colorado (Sonora), and El Salto (Jalisco). We operate throughout northwestern Mexico.' },
      { id: 8, question: 'How long does it take to build an industrial building?', answer: 'It depends on the scale and complexity of the project. A standard building can be delivered in 6 to 9 months. Complex projects like Gulfstream 550K (562,000 ft\u00B2 with BRB anti-seismic systems, 20 MW electrical capacity, and LEED Gold certification) have longer timelines. Every project has a critical path with 18 monitored milestones and documented weekly meetings.' },
      { id: 9, question: 'Can you build specialized projects beyond standard industrial buildings?', answer: 'Yes. We have designed and built a 312-foot column-free vehicular bridge for Skyworks (semiconductors), a wind tunnel with a 3,000 HP blower for Honeywell (aerospace), and precision foundations at 50 feet depth for Deacero (heavy manufacturing). Projects that are not bid through a directory \u2014 they are assigned by track record.' },
    ],
  },
}

export default function Psi({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const t = text[lang]

  return (
    <section data-component="Psi" data-component-file="src/components/brandpetram/psi.tsx" data-component-props="false" id="faqs" aria-labelledby="faq-heading" className="bg-background">
      <div className="max-w-[1600px] mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2
            id="faq-heading"
            className="text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-extrabold tracking-tight text-foreground"
          >
            {t.heading}
          </h2>
          <p className="mt-4 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
            {t.description}
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          {t.faqs.map((faq) => (
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

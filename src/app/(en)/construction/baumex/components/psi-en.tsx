// English version of Psi component for Baumex construction page
// Origen: src/components/brandpetram/psi.tsx

const faqs = [
  {
    id: 1,
    question: "What sets Baumex apart from other construction firms in Mexicali?",
    answer:
      "Baumex is Grupo Nelson's in-house construction firm. It integrates design, estimation, construction, and supervision under a single contract. The architect who draws the layout works in the same building as the superintendent who oversees the concrete pour. We do not outsource design — we have 6 in-house engineering departments.",
  },
  {
    id: 2,
    question: "What size industrial buildings can you construct?",
    answer:
      "From buildings of 54,000 ft² to aerospace complexes exceeding 540,000 ft². The largest active project is Gulfstream 550K with 562,000 ft² under roof plus 145,000 ft² of offices. Over 28 years we have completed 75 projects totaling 4.5 million square feet for 33 international corporations.",
  },
  {
    id: 3,
    question: "What certifications does Baumex hold?",
    answer:
      "ISN (ISNetworld) certification with a 'Recommended' rating by Honeywell International. FM Global certification for walls, roofing, structure, and fire protection systems. LEED Gold in progress for the Gulfstream 550K project. Design compliant with NFPA, IBC, and Mexican Official Standards. All personnel hold DC-3 certification.",
  },
  {
    id: 4,
    question: "How do you manage safety on the job site?",
    answer:
      "18-chapter HSE manual. Daily work permits with a quantitative risk matrix before each shift. Blood pressure monitoring for work at heights per NOM-009-STPS-2011. Fire Watch in welding zones per NOM-027-STPS-2008. The Gulfstream project scorecard shows 404 consecutive days without accidents and 1,092,745 man-hours with zero fatalities.",
  },
  {
    id: 5,
    question: "Which companies have you built for?",
    answer:
      "Gulfstream (20+ year relationship), Honeywell (30 years), DHL, Vertiv, Skyworks, Intuitive Surgical, Rheem, Baxter, Deacero, Direct Pack, among others. The full list includes 33 international corporations, several Fortune 500. 80% of our clients return project after project.",
  },
  {
    id: 6,
    question: "What types of construction do you perform?",
    answer:
      "Build-to-suit (new building designed to the exact specifications of your operation), expansion of existing buildings without halting production, and tenant improvement (adaptation of an existing building to your requirements). All 10 construction disciplines are executed with our own teams: earthworks, foundations, masonry, structure, roofing, facades, interiors, finishes, electrical, and mechanical.",
  },
  {
    id: 7,
    question: "In which cities do you build?",
    answer:
      "Our main base is in Mexicali, Baja California, where the majority of our projects are concentrated. We have also built in Hermosillo (Sonora), Tecate (Baja California), San Luis Rio Colorado (Sonora), and El Salto (Jalisco). We operate throughout northwestern Mexico.",
  },
  {
    id: 8,
    question: "How long does it take to build an industrial building?",
    answer:
      "It depends on the scale and complexity of the project. A standard building can be delivered in 6 to 9 months. Complex projects like Gulfstream 550K (562,000 ft² with BRB anti-seismic systems, 20 MW electrical capacity, and LEED Gold certification) have longer timelines. Every project has a critical path with 18 monitored milestones and documented weekly meetings.",
  },
  {
    id: 9,
    question: "Can you build specialized projects beyond standard industrial buildings?",
    answer:
      "Yes. We have designed and built a 312-foot column-free vehicular bridge for Skyworks (semiconductors), a wind tunnel with a 3,000 HP blower for Honeywell (aerospace), and precision foundations at 50 feet depth for Deacero (heavy manufacturing). Projects that are not bid through a directory — they are assigned by track record.",
  },
]

export default function PsiEn() {
  return (
    <section data-component="PsiEn" data-component-file="src/app/(en)/construction/baumex/components/psi-en.tsx" data-component-props="false" id="faqs" aria-labelledby="faq-heading" className="bg-background">
      <div className="max-w-[1600px] mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2
            id="faq-heading"
            className="text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-extrabold tracking-tight text-foreground"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
            If you don&apos;t find your question here,{" "}
            <a href="mailto:contacto@nelson.com.mx" className="font-medium text-blue-600 hover:text-blue-500">
              contact us
            </a>{" "}
            for more information.
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

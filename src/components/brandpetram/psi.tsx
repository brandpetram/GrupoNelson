// Origen: daasyl2022V2/Faqs
// Adaptaciones: eliminado next-i18next. Textos lorem ipsum.

const faqs = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question: "Sed do eiusmod tempor incididunt ut labore et dolore magna?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    question: "Quis nostrud exercitation ullamco laboris nisi ut aliquip?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    question: "Excepteur sint occaecat cupidatat non proident sunt culpa?",
    answer:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    question: "In culpa qui officia deserunt mollit anim id est laborum?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 6,
    question: "Consectetur adipiscing elit sed do eiusmod tempor incididunt?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
]

export default function Psi() {
  return (
    <section id="faqs" aria-labelledby="faq-heading" className="bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2
            id="faq-heading"
            className="text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-extrabold tracking-tight text-foreground"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur.{" "}
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

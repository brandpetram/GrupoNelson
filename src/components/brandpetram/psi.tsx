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
    <section id="faqs" aria-labelledby="faq-heading" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2
            id="faq-heading"
            className="text-2xl font-extrabold tracking-tight text-foreground"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
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
              <dt className="text-base font-medium text-foreground">{faq.question}</dt>
              <dd className="mt-3 text-sm text-muted-foreground">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

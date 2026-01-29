/**
 * FaqSectionsThreeColumnsBPConProps - Componente único e irrepetible
 *
 * Sección de FAQs en tres columnas con introducción centrada.
 * Solo contenido es configurable (título, descripción, FAQs).
 */

import { CuadritosLluvia } from "@/components/ui/brandpetram/cuadritos-lluvia";

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqSectionsThreeColumnsBPConPropsProps {
  titulo?: string;
  descripcion?: string;
  linkTexto?: string;
  linkHref?: string;
  faqs?: Faq[];
}

export function FaqSectionsThreeColumnsBPConProps({
  titulo = "Preguntas Frecuentes Sobre Conveyors Ambaflex",
  descripcion = "Have a different question and can't find the answer you're looking for? Reach out to our support team by",
  linkTexto = "sending us an email",
  linkHref = "#",
  faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: 'How do you make holy water?',
      answer: 'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      id: 3,
      question: 'Why do you never see elephants hiding in trees?',
      answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ],
}: FaqSectionsThreeColumnsBPConPropsProps) {
  return (
    <div className="bg-gray-900 relative overflow-hidden">
      <div className="mx-auto w-full 360:w-full 393:w-11/12 430:w-11/12 768:w-10/12 834:w-10/12 1024:w-9/12 1200:w-8/12 1280:max-w-7xl 1366:max-w-7xl 1440:max-w-7xl 1536:max-w-7xl 1728:max-w-7xl 1920:max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto w-full 360:w-full 393:w-full 430:w-full 768:max-w-2xl 834:max-w-2xl 1024:max-w-2xl 1200:max-w-2xl 1280:max-w-2xl 1366:max-w-2xl 1440:max-w-2xl 1536:max-w-2xl 1728:max-w-2xl 1920:max-w-2xl text-center">
          <h2 className="text-2xl 360:text-2xl 393:text-2xl 430:text-3xl 768:text-3xl 834:text-4xl 1024:text-4xl 1200:text-5xl 1280:text-5xl 1366:text-6xl 1440:text-6xl 1536:text-6xl 1728:text-7xl 1920:text-7xl leading-none tracking-tighter font-extrabold text-white">
            {titulo}
          </h2>
          <p className="mt-6 text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-lg 1200:text-lg 1280:text-xl 1366:text-xl 1440:text-2xl 1536:text-2xl 1728:text-2xl 1920:text-2xl text-gray-400">
            {descripcion}{' '}
            <a href={linkHref} className="font-semibold text-indigo-400 hover:text-indigo-300">
              {linkTexto}
            </a>{' '}
            and we'll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base 360:text-base 393:text-base 430:text-lg 768:text-lg 834:text-xl 1024:text-xl 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-4xl 1728:text-4xl 1920:text-4xl leading-none tracking-tighter font-semibold text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-xs 360:text-xs 393:text-xs 430:text-sm 768:text-sm 834:text-base 1024:text-base 1200:text-base 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl text-gray-400">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Cuadritos decorativos pegados debajo del componente */}
      <div className="absolute top-full right-20 md:right-100 z-10 pointer-events-none">
        <CuadritosLluvia />
      </div>
    </div>
  )
}

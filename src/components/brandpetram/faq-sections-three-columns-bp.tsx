/**
 * Componente original: tailwind-ui/faq-sections/three-columns-with-centered-introduction
 * Brandpetramizado: 26 de enero de 2026
 *
 * Este componente fue copiado y adaptado con breakpoints granulares
 * para todos los textos y widths, y con leading-none y tracking-tighter en headings.
 */

import { CuadritosLluvia } from "../ui/brandpetram/cuadritos-lluvia";

const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    },
    {
        id: 2,
        question: 'How do you make holy water?',
        answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus nulla gravida orci a odio nullam volutpat.',
    },
    {
        id: 3,
        question: 'Why do you never see elephants hiding in trees?',
        answer:
            "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Morbi leo risus porta ac consectetur ac vestibulum at eros praesent commodo cursus.",
    },
    {
        id: 4,
        question: 'What do you call someone with no body and no nose?',
        answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Sed posuere consectetur est at lobortis donec id elit non mi porta gravida at eget metus. Fusce dapibus tellus ac cursus commodo tortor mauris condimentum nibh ut fermentum massa justo.',
    },
    {
        id: 5,
        question: "Why can't you hear a pterodactyl go to the bathroom?",
        answer:
            'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper nullam quis risus eget urna mollis ornare vel eu leo cras.',
    },
    {
        id: 6,
        question: 'Why did the invisible man turn down the job offer?',
        answer:
            "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Aenean lacinia bibendum nulla sed consectetur cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet donec sed odio dui etiam porta.",
    },
    {
        id: 7,
        question: 'What did the ocean say to the beach?',
        answer:
            "Nothing, it just waved. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla vestibulum id ligula porta felis euismod semper praesent commodo cursus magna vel scelerisque nisl.",
    },
    {
        id: 8,
        question: 'Why did the scarecrow win an award?',
        answer:
            'Because he was outstanding in his field. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Nullam id dolor id nibh ultricies vehicula ut id elit cras justo odio dapibus ac facilisis in egestas eget quam. Morbi leo risus porta ac consectetur ac vestibulum at eros.',
    },
    {
        id: 9,
        question: 'What do you call a fake noodle?',
        answer:
            'An impasta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod aenean eu leo quam pellentesque ornare sem lacinia quam venenatis vestibulum.',
    },
]

export default function FaqSectionsThreeColumnsBP() {
    return (
        <div className="bg-gradient-to-tl from-gray-900 via-slate-800 to-neutral-900 relative">
            <div className="mx-auto w-full 360:w-full 393:w-11/12 430:w-11/12 768:w-10/12 834:w-10/12 1024:w-9/12 1200:w-8/12 1280:max-w-7xl 1366:max-w-7xl 1440:max-w-7xl 1536:max-w-7xl 1728:max-w-7xl 1920:max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto w-full 360:w-full 393:w-full 430:w-full 768:max-w-2xl 834:max-w-2xl 1024:max-w-2xl 1200:max-w-2xl 1280:max-w-2xl 1366:max-w-2xl 1440:max-w-2xl 1536:max-w-2xl 1728:max-w-2xl 1920:max-w-2xl text-center">
                    <h2 className="text-2xl 360:text-2xl 393:text-2xl 430:text-3xl 768:text-3xl 834:text-4xl 1024:text-4xl 1200:text-5xl 1280:text-5xl 1366:text-6xl 1440:text-6xl 1536:text-6xl 1728:text-7xl 1920:text-7xl leading-none tracking-tighter font-extrabold text-white">
                        Frequently asked questions
                    </h2>
                    <p className="mt-6 text-xs 360:text-xs 393:text-sm 430:text-sm 768:text-base 834:text-base 1024:text-lg 1200:text-lg 1280:text-xl 1366:text-xl 1440:text-2xl 1536:text-2xl 1728:text-2xl 1920:text-2xl text-gray-400">
                        Have a different question and can't find the answer you're looking for? Reach out to our support team by{' '}
                        <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                            sending us an email
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

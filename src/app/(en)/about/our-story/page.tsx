import Header from '@/components/Header'
import StandardsPoster from '@/components/brandpetram/standards-poster'
import CursorTrailGrupoNelson from '@/components/brandpetram/cursor-trail-grupo-nelson'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/about/our-story',
  title: 'Our Story',
  description: 'The story of Grupo Nelson: from a family business in 1962 to operating 4 industrial parks with over 4.5 million sq ft in Mexicali. Built-to-suit industrial buildings for global companies.',
})

export default function OurStoryPage() {
  return (
    <>
    <div className="flex flex-col min-h-[200vh] my-32 1200:px-10 ">
      <Header lang="en" />

      {/* 3-column layout — mobile: 1 col, tablet/desktop: 3 equal cols */}
      {/* Borders only appear between columns (border-x on col 2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 flex-1">
        {/* Column 1 — Origin and thesis */}
        <div className="px-8 space-y-10">
            <div className={'px-6 1200:px-10'}>
                <figure className="w-3/3 mx-auto mt-8">
                    <div className="aspect-video">
                        <img
                            src="/fundador-grupo-nelson-mexicali.jpg"
                            alt="Rodolfo Nelson Barbara, founder of Grupo Nelson"
                            className="w-full h-auto object-cover aspect-4/3"
                        />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted-foreground">
                        Rodolfo Nelson Barbara | Founder
                    </figcaption>
                </figure>
            </div>
            <div className={'px-6 1200:px-10'}>
                <h1 className="text-3xl 1200:text-5xl font-bold tracking-wide text-foreground">
                In 1965 we established the first maquiladora in Mexicali. 60 years later, the founding family is still building.
            </h1>
                <p className="mt-8 text:xl 1200:text-2xl leading-loose tracking-wide text-foreground">
                    Rodolfo Nelson Barbara arrived in Mexicali and built the city&apos;s first
                    industrial building. There were no industrial parks, no proven business
                    model, no border manufacturing market. What existed was a piece of land
                    and a decision. From that decision came everything that Grupo Nelson is
                    today: 4 industrial parks, over 4 million square feet developed, and 33
                    international corporations operating in our facilities.
                </p>
            </div>
            <div className={'px-6 1200:px-20'}>
                <p className="uppercase mt-8 text:xl 1200:text-2xl leading-loose tracking-widest text-foreground font-light">
                    We didn&apos;t grow fast. We grew without stopping. Every decade, a decision
                    that made us more relevant. Never a bet that put us at risk.
                </p>
            </div>
      </div>

        {/* Column 2 — The pattern: the decisions */}
        <div className="border-x border-border dark:border-white/20">
            <div className={'px-6 1200:px-10'}>
                <figure className="w-3/3 mx-auto mt-8">
                    <div className="aspect-video">
                        <img
                            src="/parques-industriales-mexicali/nelson2/nave-industrial-en-parque-industrial-nelson2-8.jpeg"
                            alt="Evolution of Grupo Nelson industrial parks in Mexicali"
                            className="w-full h-auto object-cover aspect-4/3"
                        />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted-foreground">
                        Nelson II Industrial Park | Mexicali, B.C.
                    </figcaption>
                </figure>
            </div>
            <div className={'px-6 1200:px-24'}>
                <p className="mt-8 text:xl 1200:text-[2rem] leading-loose tracking-wide text-foreground font-semibold">
                    Our first park was built with cinder blocks and low ceilings. The second
                    already had green areas, parking, and a perimeter wall. The third features
                    a dedicated electrical substation, a 360,000-gallon fire suppression tank,
                    and LEED-certified buildings. The fourth already has land. Each park was an
                    investment decision we made before the market demanded it.
                </p>
            </div>
            {/* Industrial park card */}
            <div className="mt-8 flex flex-col overflow-hidden px-10">
                {/* Orange header */}
                <div className="bg-orange-500 py-10 px-10 flex flex-col gap-3">
                    <h3 className="text-white text-3xl 1200:text-5xl font-bold leading-none">
                        Nelson II Industrial Park
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                        27 hectares. Dedicated electrical substation. Centralized fire
                        suppression system. The park that shows where the evolution led.
                    </p>
                    <a href="/industrial-parks/nelson-ii" className="text-white text-sm flex items-center gap-1 hover:underline">
                        View specifications →
                    </a>
                </div>
                {/* Image */}
                <div className=" overflow-hidden">
                    <img
                        src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg"
                        alt="Nelson II Industrial Park"
                        className="w-full h-auto object-cover aspect-square"
                    />
                </div>
            </div>
        </div>

        {/* Column 3 — Philosophy and results */}
        <div className="">
            <div className={'px-6 1200:px-10'}>
                <div className="1280:p-10 shadow-xl bg-gradient-to-bl from-blue-600 to-sky-700 rounded-xs ">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl md:text-2xl lg:text-4xl 1200:text-3xl 1280:text-4xl 1536:text-5xl font-bold leading-none text-white px-10 pt-10">
                            In 1997 we founded our own construction company
                        </h2>
                        <p className="1200:text-md 1728:text-xl 2560:text-2xl leading-normal text-balance text-white px-12 pb-10">
                            We depended on external contractors to build the facilities our
                            clients needed. We decided that was a bottleneck. We founded
                            Baumex — our in-house construction firm — and since then we
                            control the entire chain: from land to turnkey. 75+ projects
                            built in 30 years.
                        </p>
                    </div>
                </div>
            </div>

            <div className={'px-6 1200:px-10 mt-10'}>
                <div className="space-y-8">
                    <div>
                        <p className="text-4xl 1200:text-5xl font-bold text-foreground">35+</p>
                        <p className="mt-2 text-lg text-muted-foreground">
                            years with our longest-standing clients. The companies that
                            arrived decades ago are still here.
                        </p>
                    </div>
                    <div>
                        <p className="text-4xl 1200:text-5xl font-bold text-foreground">4 generations</p>
                        <p className="mt-2 text-lg text-muted-foreground">
                            of the founding family. The fourth generation is already
                            working within the group.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed text-foreground">
                            We never built inventory waiting for clients. Only when there is
                            real demand. We have only sold 1-2% of all the buildings we have
                            constructed — the rest we lease. That conservative discipline is
                            why, 60 years later, we are still here. And why you can sign a
                            15-year lease with the certainty that we will be on the other
                            side when it renews.
                        </p>
                    </div>
                </div>
            </div>

            <div className={'px-6 1200:px-10 mt-10'}>
                <StandardsPoster />
            </div>
      </div>

      </div>
    </div>

    <CursorTrailGrupoNelson />
    </>
  )
}

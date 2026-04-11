// English version of Xi component for Baumex construction page
// Origen: src/components/brandpetram/xi.tsx

export default function XiEn() {
  return (
    <div data-component="XiEn" data-component-file="src/app/(en)/construction/baumex/components/xi-en.tsx" data-component-props="false" id="xi" className="relative bg-background">
      {/* Image — absolutely positioned to fill full height */}
      <div className="md:absolute md:inset-0">
        <div className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
          <img
            className="h-56 w-full object-cover md:absolute md:h-full"
            src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg"
            alt="Industrial building in Mexicali"
          />
        </div>
      </div>

      {/* Content — determines overall component height */}
      <div className="relative pt-12 px-4 sm:pt-16 sm:px-6 md:px-8 md:max-w-7xl md:mx-auto md:grid md:grid-cols-2">
        <div className="md:col-start-2 md:pl-8 1728:translate-x-20">
          <div className="px-10 768:px-5 834:px-10 1280:px-0 text-base max-w-prose mx-auto md:max-w-lg md:ml-auto md:mr-0">
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem]">
              Track Record
            </h2>
            <h3 className="mt-2 text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] leading-none font-extrabold tracking-tight text-foreground">
              33 International Corporations in 28 Years
            </h3>
            <p className="mt-8 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
              With Baumex you get two Project Executives, an Administrative Director, a Project Manager, field superintendents, and direct-execution crews — with extensive construction experience serving Fortune 500 companies. The entire decision chain under one roof.
            </p>

            {/* Rich content block */}
            <div className="mt-5 text-muted-foreground space-y-4 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem]">
              <p>
                An integrated team under one roof accelerates execution, eliminates communication gaps between firms, and raises quality control at every phase — from executive design to final delivery of your industrial or commercial building.
              </p>

              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Buildings from 54,000 ft² to 540,000+ ft²</li>
                <li>7 sectors: aerospace, medical, electronics, HVAC, logistics, heavy manufacturing, food</li>
                <li>Mexicali, Hermosillo, Tecate, San Luis Rio Colorado, El Salto (Jalisco)</li>
              </ul>

              <h3 className="text-foreground text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-bold mt-6">
                The track record speaks for itself
              </h3>
              <p>
                If your operation needs an industrial building with international standards in northwestern Mexico, let&apos;s talk.
              </p>
              <div className="pb-12">
                <a href="/contact">
                  <button className="bg-linear-to-br rounded-xs from-blue-600 to-blue-700 hover:opacity-90 py-4 px-6 text-white">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

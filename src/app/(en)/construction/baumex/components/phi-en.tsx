// English version of Phi component for Baumex construction page
// Origen: src/components/brandpetram/phi.tsx

export default function PhiEn() {
  return (
    <div data-component="PhiEn" data-component-file="src/app/(en)/construction/baumex/components/phi-en.tsx" data-component-props="false" className="relative z-10 mt-[10rem]">
      {/* Circular image — anchored to the right, may bleed outside viewport */}
      <div className="mx-10 1200:mx-0 1200:absolute right-0 top-0 z-50  1200:-translate-y-[8rem] 1200:translate-x-[44%] 1280:translate-x-[30%] 1728:translate-x-[40%] 1920:translate-x-[27%] 1200:w-[38rem] 1280:w-[42rem]  1366:w-[47rem] 1440:w-[52rem] 1536:w-[52rem] 1728:w-[60rem] 1920:w-[63rem] aspect-square rounded-full overflow-hidden">
        <img
          src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-400.jpg"
          alt="Industrial park in Mexicali"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
      </div>

      {/* Text — normal flow, determines component height */}
      <div className="px-5 md:px-10 1024:px-0 mt-20 1200:mt-0 relative z-10 lg:ml-20 3xl:ml-40 lg:pt-16 1200:max-w-3xl 1536:max-w-4xl pb-16 1728:translate-x-[10%]">
        <h1 className="text-foreground w-10/12 md:w-full mx-5 lg:mx-0 text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-[4rem] 834:text-[4rem] 1024:text-[5rem] 1200:text-[2.5rem] 1280:text-[3rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4.5rem] 1920:text-[5rem] leading-none font-bold tracking-tighter">
          Organized Construction. Weekly Reports. Full Control.
        </h1>

        <div className="py-16 px-0 lg:py-16 lg:px-0 768:grid 768:grid-cols-2 834:grid-cols-2 1024:grid-cols-[16rem_1fr] 1200:grid-cols-[17rem_1fr] 1366:grid-cols-[20rem_1fr] 1536:grid-cols-[25rem_1fr] 768:gap-x-8">
          {/* Subtitle */}
          <div className="mx-5 768:mx-0 text-foreground tracking-tight">
            <h2 className="-mt-10 text-[1.2rem] 360:text-[1.2rem] 393:text-[1.4rem] 430:text-[1.2rem] 768:text-[1.05rem] 834:text-[1.05rem] 1024:text-[1.05rem] 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[1rem] 1728:text-[1rem] 1920:text-[1.1rem] font-semibold text-muted-foreground uppercase leading-none">
              Weekly <br className="md:hidden" />
              Reports
            </h2>
            <p className="w-10/12 md:w-2/3 lg:w-full mt-5 text-lg 360:text-lg 393:text-[1.2rem] 430:text-[1.3rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] leading-7 font-semibold">
              Every week you receive a report with photographs, progress percentage, delivery projections, and signed meeting minutes with agreements and responsible parties.
            </p>
            <p className="w-full md:w-2/3 lg:w-full mt-7 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-7 text-muted-foreground">
              Critical path with 18 monitored milestones. 11 quality checkpoints. Construction ERP software for real-time visibility. Fixed pricing from the executive design phase.
            </p>
            <h4 className="mt-10 font-bold text-lg 360:text-lg 393:text-[1.2rem] 430:text-[1.3rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">Documentation:</h4>
            <ul className="mt-5 space-y-3 text-muted-foreground text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem]">
              <li>Weekly reports with photographs</li>
              <li>Signed meeting minutes with responsible parties</li>
              <li>Submittal and long lead item tracking</li>
            </ul>
          </div>

          {/* Service list with buttons */}
          <div className="mt-12 768:mt-0 mx-10 768:mx-0 tracking-tight  1024:w-11/12 1280:w-10/12 1728:w-full">
            <dl className="space-y-0">
              {/* Service 1 */}
              <div className="space-y-2 pb-6">
                <dt className="text-[2.25rem] 360:text-[2.25rem] 393:text-[2.4rem] 430:text-[2.6rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[.9rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1.1rem] 1728:text-[1.2rem] 1920:text-[1.5rem] font-medium text-foreground leading-none">
                  Build-to-Suit Construction
                </dt>
                <dd className="flex flex-col gap-3 768:flex-row 768:gap-0">
                  <span className="flex-1 768:mr-6 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1rem] 1728:text-[1.1rem] 1920:text-[1.3rem] leading-6 text-muted-foreground">
                    Building designed and constructed to the exact specifications of your operation. Fixed pricing from the executive design phase.
                  </span>
                  <div className="flex-none">
                    <a href="/construction/build-to-suit">
                      <button className="w-28  bg-blue-600  hover:opacity-90 p-3 text-white text-lg rounded-xs">
                        Details
                      </button>
                    </a>
                  </div>
                </dd>
              </div>

              {/* Service 2 */}
              <div className="space-y-2 border-b border-t py-6">
                <dt className="text-[2.25rem] 360:text-[2.25rem] 393:text-[2.4rem] 430:text-[2.6rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[.9rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1.1rem] 1728:text-[1.2rem] 1920:text-[1.5rem] font-medium text-foreground leading-none">
                  Building Expansions
                </dt>
                <dd className="flex flex-col gap-3 768:flex-row 768:gap-0">
                  <span className="flex-1 768:mr-6 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1rem] 1728:text-[1.1rem] 1920:text-[1.3rem] leading-6 text-muted-foreground">
                    Expansion of existing facilities without halting your operations. Direct coordination with your plant team.
                  </span>
                  <div className="flex-none">
                    <a href="/contact">
                      <button className="w-28  bg-blue-600  hover:opacity-90 p-3 text-white text-lg rounded-xs">
                        Details
                      </button>
                    </a>
                  </div>
                </dd>
              </div>

              {/* Service 3 */}
              <div className="space-y-2 pt-6">
                <dt className="text-[2.25rem] 360:text-[2.25rem] 393:text-[2.4rem] 430:text-[2.6rem] 768:text-[1.35rem] 834:text-[1.35rem] 1024:text-[1.5rem] 1200:text-[.9rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1.1rem] 1728:text-[1.2rem] 1920:text-[1.5rem] font-medium text-foreground leading-none">
                  Tenant Improvement
                </dt>
                <dd className="flex flex-col gap-3 768:flex-row 768:gap-0">
                  <span className="flex-1 768:mr-6 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-[1.2rem] 834:text-[1.2rem] 1024:text-[1.35rem] 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1rem] 1440:text-[1rem] 1536:text-[1rem] 1728:text-[1.1rem] 1920:text-[1.3rem] leading-6 text-muted-foreground">
                    Adaptation of an existing building to the specific requirements of your industrial operation.
                  </span>
                  <div className="flex-none">
                    <a href="/contact">
                      <button className="w-28  bg-blue-600  hover:opacity-90 p-3 text-white text-lg rounded-xs">
                        Details
                      </button>
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

// English version of Tau component for Baumex construction page
// Origen: src/components/brandpetram/tau.tsx

export default function TauEn() {
  return (
    <div data-component="TauEn" data-component-file="src/app/(en)/construction/baumex/components/tau-en.tsx" data-component-props="false" className="px-10 md:px-0  md:my-20 md:w-11/12 mx-auto overflow-hidden">
      {/* Row 1 */}
      <div className="flex flex-col lg:flex-row">
        {/* Left block: large image + 2 small images */}
        <div className="lg:w-1/2 bg-gray-200 p-3 md:p-16">
          <div className="lg:w-3/5 xl:w-1/2">
            <img
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-7.jpeg"
              alt="Industrial building in Mexicali"
              className="w-full h-auto object-cover aspect-square"
            />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <img
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg"
                alt="Industrial building in Mexicali"
                className="w-full h-auto object-cover aspect-square"
              />
              <img
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-9.jpeg"
                alt="Industrial building in Mexicali"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Right block: 2x2 grid with text and image */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2">
          {/* Cell 1: Design & Engineering */}
          <a href="/construction/engineering-design" className="aspect-square relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] text-foreground font-light leading-none">
                Services
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                Design &amp; <br className="hidden md:block" /> Engineering
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                6 departments <br /> under one roof
              </p>
            </div>
          </a>

          {/* Cell 2: image + blue triangle */}
          <div className="aspect-square bg-linear-to-br from-blue-600 to-blue-700 relative overflow-hidden">
            {/* Left strip with triangle */}
            <div className="absolute left-0 top-0 w-[15%] h-full flex items-start justify-start pt-[19%] -translate-x-1">
              <svg className="w-10 h-auto text-background" viewBox="0 0 78 163">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon
                    fill="currentColor"
                    transform="translate(39,81.5) scale(-1,1) rotate(-90) translate(-39,-81.5)"
                    points="39 43 120 120 -42 120"
                  />
                </g>
              </svg>
            </div>
            {/* White square: 85% of cell size, vertically centered */}
            <div className="absolute right-0 top-[7.5%] w-[85%] aspect-square bg-background transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-90 overflow-hidden">
              <div className="p-8 md:p-10 xl:p-12">
                <img
                  src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-10.jpeg"
                  alt="Industrial building in Mexicali"
                  className="w-full aspect-square object-cover"
                />
                <p className="text-right text-sm 768:text-base 1024:text-base 1200:text-[0.85rem] 1440:text-[1rem] 1920:text-[1.25rem] mt-1 leading-none">
                  Baumex
                </p>
              </div>
            </div>
          </div>

          {/* Cell 3: Build-to-Suit */}
          <a href="/construction/build-to-suit" className="aspect-square relative bg-linear-to-br from-blue-600 to-blue-700 text-white group">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-opacity group-hover:opacity-80">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] font-light leading-none">
                Services
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                Build-to- <br className="hidden md:block" /> Suit
              </h1>
              <p className="hidden md:block text-center mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                Buildings designed <br /> to your exact specs
              </p>
            </div>
          </a>

          {/* Cell 4: image */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-11.jpeg"
              alt="Industrial building in Mexicali"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col lg:flex-row">
        {/* Left block: 2x2 grid */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/parque-industrial-nelson-1-en-mexicali.jpeg"
              alt="Industrial park in Mexicali"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Turnkey */}
          <a href="/construction/turnkey" className="aspect-square relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] text-foreground font-light leading-none">
                Services
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                Turnkey <br className="hidden md:block" /> Solutions
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                Inventory buildings <br /> ready to operate
              </p>
            </div>
          </a>

          {/* Portfolio */}
          <a href="/construction/portfolio" className="aspect-square relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20">
              <h2 className="text-center mb-3 uppercase text-xs 360:text-xs 393:text-xs 430:text-[0.8rem] 768:text-sm 834:text-sm 1024:text-sm 1200:text-[0.75rem] 1280:text-[0.8rem] 1366:text-[0.85rem] 1440:text-[0.875rem] 1536:text-[0.9rem] 1728:text-[1rem] 1920:text-[1.1rem] text-foreground font-light leading-none">
                Projects
              </h2>
              <h1 className="text-center uppercase tracking-tight leading-none font-extrabold text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem]">
                Full <br className="hidden md:block" /> Portfolio
              </h1>
              <p className="hidden md:block text-center text-muted-foreground mt-5 font-light text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] leading-none">
                75 projects <br /> since 1997
              </p>
            </div>
          </a>

          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/parque-industrial-el-vigia-2-en-mexicali.jpeg"
              alt="Industrial park in Mexicali"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right block: large image */}
        <div className="lg:w-1/2 bg-gray-200 p-3 md:p-16">
          <img
            src="/parque-industrial-nelson-2-en-mexicali.jpeg"
            alt="Industrial park in Mexicali"
            className="w-full h-auto object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  )
}

// English version of Pi component for Baumex construction page
// Origen: src/components/brandpetram/pi.tsx

export default function PiEn() {
  return (
    <div data-component="PiEn" data-component-file="src/app/(en)/construction/baumex/components/pi-en.tsx" data-component-props="false">
      {/* Header */}
      <div className="px-10 1200:px-0 lg:max-w-5xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto">
        <h1 className="text-balance text-foreground px-7 font-light text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] mb-20 md:mb-32 leading-relaxed">
          We have professionalized with{" "}
          <span className="font-bold text-blue-600 uppercase">LEED standards</span>{" "}
          to build facilities that reduce energy consumption, recover 90% of condensation water in cooling towers, and generate up to 10 MW of clean solar energy from rooftops and parking carports.
        </h1>
        <div className="my-20 mx-10" />
      </div>

      {/* Desktop: image with overlaid text */}
      <div className="w-9/12 hidden md:block lg:max-w-4xl xl:max-w-6xl 1728:max-w-[1400px] 1920:max-w-[1600px] mx-auto relative">
        <div className="flex flex-col text-foreground bg-white/40 backdrop-blur-sm pt-8 pb-16 px-5 overflow-hidden w-[11rem] md:w-[13rem] lg:w-[13rem] xl:w-[14rem] 1366:w-[15rem] 1440:w-[16rem] 1536:w-[18rem] 1728:w-[22rem] 1920:w-[26rem] aspect-[4/5] z-10 absolute left-0 -translate-x-1/4   md:top-1/2 1200:top-1/3 -translate-y-1/2 rounded-xs">
          {/* Label */}
          <h3 className="text-xs 768:text-sm 1728:text-base uppercase font-semibold tracking-wider text-foreground">
            Industrial Architecture
          </h3>
          {/* Large text */}
          <h2 className="mt-auto text-foreground text-xl 768:text-[1.2rem] 1024:text-[1.3rem] 1200:text-[1.3rem] 1280:text-[1.4rem] 1366:text-[1.5rem] 1440:text-[1.5rem] 1536:text-[2.3rem] 1728:text-[2.8rem] 1920:text-[3.2rem] font-extrabold leading-none tracking-tight">
            It Works and Looks Good.
          </h2>
        </div>
        <img
          src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-2.jpeg"
          alt="Industrial building in Mexicali"
          className="w-full h-auto object-cover rounded-xs aspect-[4/4] 1200:aspect-[3/2]"

        />
      </div>

      {/* Mobile: image with overlaid text */}
      <div className="md:hidden relative pt-10">
          <div className="flex flex-col text-foreground bg-white/40 backdrop-blur-sm pt-8 pb-16 px-5 overflow-hidden w-[11rem] md:w-[13rem] lg:w-[13rem] xl:w-[14rem] 1366:w-[15rem] 1440:w-[16rem] 1536:w-[18rem] 1728:w-[22rem] 1920:w-[26rem] aspect-[4/5] z-10 absolute left-0  rounded-xs">
          <h3 className="text-xs uppercase font-extrabold">Industrial Architecture</h3>
          <h2 className="mt-5 pl-3 pb-5 text-xl 360:text-[1.2rem] 393:text-[1.2rem] 430:text-[1.2rem]  font-bold leading-none">
           Facades, offices, and production areas designed to perform and to impress.
          </h2>
        </div>
        <img
          src="/parque-industrial-el-vigia-2-en-mexicali.jpeg"
          alt="Industrial building in Mexicali"
          className="mx-auto mt-10"
          style={{ aspectRatio: "1/1", objectFit: "cover" }}
        />
      </div>

      {/* Decorative dot pattern */}
      <svg
        className="hidden lg:block absolute text-blue-700 right-full transform translate-x-1/2 translate-y-20 z-20 opacity-40"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="pi-en-dot-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" className="text-gray-300" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#pi-en-dot-pattern)" />
      </svg>
    </div>
  )
}

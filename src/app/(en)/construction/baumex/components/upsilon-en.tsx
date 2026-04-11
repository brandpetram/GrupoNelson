// English version of Upsilon component for Baumex construction page
// Origen: src/components/brandpetram/upsilon.tsx

const pills = [
  "LEED Gold",
  "FM Global",
  "BRB Anti-Seismic",
  "Cleanrooms",
  "20 MW Electrical",
  "NFPA Fire Protection",
  "Seismic Zone 4",
  "Industrial Bridges",
  "Wind Tunnels",
  "Solar Panels",
  "+540,000 ft²",
  "Temperature Controlled",
  "Fortune 500 Audits",
]

export default function UpsilonEn() {
  return (
    <div data-component="UpsilonEn" data-component-file="src/app/(en)/construction/baumex/components/upsilon-en.tsx" data-component-props="false" className="mt-0 w-11/12 mx-auto">
      <div className="mb-10">
        {/* Title with pills */}
        <div className="-mt-1 flex flex-wrap items-center gap-3 my-10">
          <span className="text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] font-extrabold text-foreground tracking-tighter leading-none">
            Need a construction firm with experience in:
          </span>
          {pills.map((word) => (
            <span
              key={word}
              className="my-auto bg-blue-600 text-white px-4 py-2 flex-none text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] font-light"
            >
              {word}
            </span>
          ))}
          <span className="w-full text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] font-extrabold text-foreground tracking-tighter leading-none">
            Don&apos;t worry.{" "}<span className="ml-3">You&apos;re in good hands.</span>
          </span>
        </div>
      </div>

      {/* Full-width image */}
      <img
        src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-290.jpg"
        alt="Industrial building in Mexicali"
        className="w-full h-auto object-cover"
        style={{ aspectRatio: "15/9" }}
      />

      {/* Bottom text with strikethrough */}
      <h3 className="mt-10 text-2xl 360:text-[1.75rem] 393:text-[1.9rem] 430:text-[2rem] 768:text-4xl 834:text-[2.75rem] 1024:text-5xl 1200:text-[2.5rem] 1280:text-[2.75rem] 1366:text-[3rem] 1440:text-[3.25rem] 1536:text-[3.5rem] 1728:text-[4rem] 1920:text-[4.5rem] font-light text-foreground">
        With{" "}
        <span className="font-black tracking-tight text-blue-600">Baumex</span>{" "}
        you no longer have to worry about{" "}
        <span className="line-through">
          <br className="md:hidden" />
          coordinating multiple contractors
        </span>{" "}
        <br className="md:hidden" />
        <span className="text-foreground font-black">one single point of accountability.</span>
      </h3>
    </div>
  )
}

// English version of Sigma component for Baumex construction page
// Origen: src/components/brandpetram/sigma.tsx

import { ClipboardCheck, HardHat, Handshake, Users, RotateCcw } from "lucide-react"

const transferFeatures = [
  {
    id: 1,
    name: "Brief and executive design",
    description:
      "You define your requirements. 6 engineering departments develop the executive design in parallel.",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    name: "Permits and procurement",
    description:
      "Municipal, state, and federal permits. Long lead items ordered from day one.",
    icon: HardHat,
  },
  {
    id: 3,
    name: "Construction and delivery",
    description:
      "450 workers, 45 subcontractors, weekly meetings with 16+ attendees. Turnkey delivery.",
    icon: Handshake,
  },
]

const communicationFeatures = [
  {
    id: 1,
    name: "Clients who return decade after decade",
    description:
      "Gulfstream has been with Baumex for 20+ years. Honeywell, 30. We already know their standards and their timelines.",
    icon: RotateCcw,
  },
  {
    id: 2,
    name: "The human machinery behind every project",
    description:
      "1,092,745 man-hours. Critical path of 18 milestones. 11 quality checkpoints. Real-time ERP.",
    icon: Users,
  },
]

export default function SigmaEn() {
  return (
    <div data-component="SigmaEn" data-component-file="src/app/(en)/construction/baumex/components/sigma-en.tsx" data-component-props="false" id="sigma" className="py-16 bg-background overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        {/* Left dot pattern */}
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="sigma-en-dots-1"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-foreground/10" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#sigma-en-dots-1)" />
        </svg>

        {/* Main title */}
        <div className="relative">
          <h2 className="text-center text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] leading-none font-extrabold tracking-tight text-foreground">
            From Brief to Delivery — How We Build
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
            One contract, one point of accountability. This is what a project with Baumex looks like from start to finish.
          </p>
        </div>

        {/* Section 1: text left, image right */}
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-extrabold text-foreground tracking-tight">
              The construction process in 3 phases
            </h3>
            <p className="mt-3 text-lg text-muted-foreground">
              Every project follows a sequence proven across 75+ deliveries. No improvisation, no surprises.
            </p>
            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-xs bg-linear-to-br from-blue-600 to-blue-700 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] leading-6 font-medium text-foreground">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="sigma-en-dots-2"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-foreground/10" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#sigma-en-dots-2)" />
            </svg>
            <img
              className="relative mx-auto aspect-square object-cover"
              width={490}
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-4.jpeg"
              alt="Industrial building construction"
            />
          </div>
        </div>

        {/* Right dot pattern */}
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="sigma-en-dots-3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-foreground/10" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#sigma-en-dots-3)" />
        </svg>

        {/* Section 2: image left, text right */}
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-extrabold text-foreground tracking-tight">
                Why Fortune 500 companies keep coming back
              </h3>
              <p className="mt-3 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
                80% of Baumex clients are repeat customers. The reason is not price — it is certainty of delivery.
              </p>
              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-xs bg-linear-to-br from-blue-600 to-blue-700 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] leading-6 font-medium text-foreground">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="sigma-en-dots-4"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-foreground/10" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#sigma-en-dots-4)" />
              </svg>
              <img
                className="relative mx-auto aspect-square object-cover"
                width={490}
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-6.jpeg"
                alt="Industrial building construction"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Origen: daasyl2022V2/SideBySide
// Adaptaciones: eliminado heroicons v1 (GlobeAltIcon, ScaleIcon, LightningBoltIcon,
//   AnnotationIcon, MailIcon) → lucide-react (ya instalado en GrupoNelson).
//   Eliminado next-i18next. Imágenes locales GrupoNelson. Textos lorem ipsum.

import { Globe, Scale, Zap, MessageSquare, Mail } from "lucide-react"

const transferFeatures = [
  {
    id: 1,
    name: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Globe,
  },
  {
    id: 2,
    name: "Consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: Scale,
  },
  {
    id: 3,
    name: "Sed do eiusmod tempor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: Zap,
  },
]

const communicationFeatures = [
  {
    id: 1,
    name: "Excepteur sint occaecat",
    description:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur.",
    icon: MessageSquare,
  },
  {
    id: 2,
    name: "Cupidatat non proident",
    description:
      "In culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur adipiscing.",
    icon: Mail,
  },
]

export default function Sigma() {
  return (
    <div id="sigma" className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        {/* Patrón de puntos izquierdo */}
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
              id="sigma-dots-1"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#sigma-dots-1)" />
        </svg>

        {/* Título principal */}
        <div className="relative">
          <h2 className="text-center text-xl 360:text-xl 393:text-[1.35rem] 430:text-[1.5rem] 768:text-3xl 834:text-[2rem] 1024:text-4xl 1200:text-[2rem] 1280:text-[2.2rem] 1366:text-[2.4rem] 1440:text-[2.6rem] 1536:text-[2.8rem] 1728:text-[3rem] 1920:text-[3.5rem] leading-8 font-extrabold tracking-tight text-foreground">
            Lorem ipsum dolor sit amet consectetur adipiscing
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam quis nostrud exercitation.
          </p>
        </div>

        {/* Sección 1: texto izquierda, imagen derecha */}
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-extrabold text-foreground tracking-tight">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="mt-3 text-lg text-muted-foreground">
              Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua enim ad minim veniam quis nostrud.
            </p>
            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-linear-to-br from-blue-500 to-blue-700 text-white">
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
                  id="sigma-dots-2"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#sigma-dots-2)" />
            </svg>
            <img
              className="relative mx-auto aspect-square object-cover"
              width={490}
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-4.jpeg"
              alt="Nave industrial"
            />
          </div>
        </div>

        {/* Patrón de puntos derecho */}
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
              id="sigma-dots-3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#sigma-dots-3)" />
        </svg>

        {/* Sección 2: imagen izquierda, texto derecha */}
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-base 360:text-base 393:text-[1.05rem] 430:text-[1.1rem] 768:text-lg 834:text-lg 1024:text-xl 1200:text-[1.1rem] 1280:text-[1.15rem] 1366:text-[1.2rem] 1440:text-[1.25rem] 1536:text-[1.35rem] 1728:text-[1.5rem] 1920:text-[1.75rem] font-extrabold text-foreground tracking-tight">
                Nostrud exercitation ullamco laboris nisi
              </h3>
              <p className="mt-3 text-sm 360:text-sm 393:text-[0.9rem] 430:text-[0.95rem] 768:text-base 834:text-base 1024:text-lg 1200:text-[0.95rem] 1280:text-[1rem] 1366:text-[1.05rem] 1440:text-[1.1rem] 1536:text-[1.15rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground">
                Ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat.
              </p>
              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-linear-to-br from-blue-500 to-blue-700 text-white">
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
                    id="sigma-dots-4"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#sigma-dots-4)" />
              </svg>
              <img
                className="relative mx-auto aspect-square object-cover"
                width={490}
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-6.jpeg"
                alt="Nave industrial"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

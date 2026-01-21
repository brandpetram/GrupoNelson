import { AnimatedNumber } from './animated-number'
import { Container } from './container'
import { Heading, Lead, Subheading } from './text'

export function Header() {
  return (
    <Container className="mt-16 lg:mt-16">
      <h1 className={' w-full text-balance text-[3rem] 1366:text-[5rem] 1920:text-[7rem] tracking-tight leading-none font-extrabold'} >Desarrollamos parques industriales de clase mundial en Mexicali desde 1965.

      </h1>
      <Lead className="mt-6 max-w-3xl">
        Somos pioneros en el desarrollo de espacios industriales en la región fronteriza, ofreciendo soluciones Built to Suit para empresas globales.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Nuestra misión</h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
            Crear espacios industriales modernos y sustentables que impulsen el crecimiento de las empresas
            en la región de Mexicali, proporcionando infraestructura de primer nivel con ubicación estratégica
            y servicios integrales llave en mano.
          </p>
          <p className="mt-8 text-lg/8 text-gray-600 dark:text-gray-400">
            Con seis décadas de experiencia, nos especializamos en diseñar y construir parques industriales
            a medida, adaptándonos a las necesidades específicas de manufactura avanzada y operaciones logísticas
            de empresas nacionales e internacionales.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Parque Industrial Mexicali - Nave industrial moderna"
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Parque Industrial Mexicali - Instalaciones de clase mundial"
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-249.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Parque Industrial Mexicali - Infraestructura industrial"
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-253.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Parque Industrial Mexicali - Espacios industriales modernos"
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Nuestros Números</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Empresas Alojadas</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                +<AnimatedNumber start={80} end={100} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Años de Experiencia</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={50} end={60} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Hectáreas Desarrolladas</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                +<AnimatedNumber start={120} end={150} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm leading-none text-gray-600">Metros Cuadrados<br/>Construidos</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={400} end={500} />K
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

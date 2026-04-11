import { AnimatedNumber } from './animated-number'
import { Container } from './container'
import { Heading, Lead, Subheading } from './text'

interface RadiantHeaderStat {
  label: string
  start: number
  end: number
  prefix?: string
  suffix?: string
}

interface RadiantHeaderProps {
  headline?: string
  lead?: string
  sectionTitle?: string
  paragraphs?: [string, string]
  statsHeading?: string
  stats?: RadiantHeaderStat[]
}

const defaultStats: RadiantHeaderStat[] = [
  { label: 'Corporaciones Internacionales', start: 20, end: 33 },
  { label: 'Años de Experiencia', start: 50, end: 60, prefix: '+' },
  { label: 'Parques Industriales', start: 2, end: 4 },
  { label: 'Pies Cuadrados\nDesarrollados', start: 2, end: 4, suffix: 'M' },
]

export function Header({
  headline = 'Los pioneros de la industria maquiladora de Mexicali desde 1965.',
  lead = 'Gulfstream lleva más de 35 años con nosotros. Honeywell más de 3 décadas. 33 corporaciones internacionales ya eligieron operar en nuestros parques — relaciones de largo plazo que se miden en décadas.',
  sectionTitle = 'Dos caminos, un solo proveedor',
  paragraphs = [
    'Si necesitas una nave lista para operar, tenemos 4 parques industriales en Mexicali con naves disponibles — desde El Vigía hasta Nelson II, el parque más moderno con subestación eléctrica dedicada y sistema contraincendio centralizado.',
    'Si necesitas algo a medida, Baumex — nuestra constructora in-house con 30 años y más de 75 proyectos completados — lo diseña y construye bajo un solo contrato. La nave más grande que hemos construido: 550,000 ft² para Gulfstream, con certificación LEED, FM Global y sistemas antisísmicos BRB.',
  ],
  statsHeading = 'Nuestros Números',
  stats = defaultStats,
}: RadiantHeaderProps = {}) {
  return (
    <Container className="mx-10 mt-16 lg:mt-16">
      <h1 className={' w-full text-balance text-[2rem] 430:text-[3rem] 1366:text-[5rem] 1920:text-[7rem] tracking-tight leading-none font-extrabold'} >
        {headline}
      </h1>
      <Lead className="mt-6 max-w-3xl">
        {lead}
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">{sectionTitle}</h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
            {paragraphs[0]}
          </p>
          <p className="mt-8 text-lg/8 text-gray-600 dark:text-gray-400">
            {paragraphs[1]}
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="px-5 1280:px-0 -mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-sm shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Parque Industrial Mexicali - Nave industrial moderna"
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-sm shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Parque Industrial Mexicali - Instalaciones de clase mundial"
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-382.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Parque Industrial Mexicali - Infraestructura industrial"
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-407.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-sm shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Parque Industrial Mexicali - Espacios industriales modernos"
                src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>{statsHeading}</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <div key={i} className={`flex flex-col gap-y-2 ${i < stats.length - 2 ? 'border-b border-dotted border-gray-200 pb-4' : i < stats.length - 1 ? 'max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4' : ''}`}>
                <dt className="text-sm leading-none text-gray-600">{stat.label.includes('\n') ? stat.label.split('\n').map((line, j) => <span key={j}>{j > 0 && <br />}{line}</span>) : stat.label}</dt>
                <dd className="order-first text-6xl font-medium tracking-tight">
                  {stat.prefix}<AnimatedNumber start={stat.start} end={stat.end} />{stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </Container>
  )
}

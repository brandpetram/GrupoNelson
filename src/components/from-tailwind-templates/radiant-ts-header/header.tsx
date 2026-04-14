import Image from 'next/image'
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
  paragraphTitles?: [string?, string?]
  statsHeading?: string
  stats?: RadiantHeaderStat[]
  lang?: 'en' | 'es'
}

const defaultStatsEs: RadiantHeaderStat[] = [
  { label: 'Corporaciones Internacionales', start: 20, end: 33 },
  { label: 'Años de Experiencia', start: 50, end: 60, prefix: '+' },
  { label: 'Parques Industriales', start: 2, end: 5 },
  { label: 'Pies Cuadrados\nDesarrollados', start: 2, end: 4, suffix: 'M' },
]

const defaultStatsEn: RadiantHeaderStat[] = [
  { label: 'International Corporations', start: 20, end: 33 },
  { label: 'Years of Experience', start: 50, end: 60, prefix: '+' },
  { label: 'Industrial Parks', start: 2, end: 5 },
  { label: 'Square Feet\nDeveloped', start: 2, end: 4, suffix: 'M' },
]

export function Header({
  headline,
  lead,
  sectionTitle,
  paragraphs,
  paragraphTitles,
  statsHeading,
  stats,
  lang = 'es',
}: RadiantHeaderProps = {}) {
  const _headline = headline ?? (lang === 'en'
    ? 'Pioneers of the maquiladora industry in Mexicali since 1967.'
    : 'Los pioneros de la industria maquiladora de Mexicali desde 1967.')
  const _lead = lead ?? (lang === 'en'
    ? 'Gulfstream has been with us for over 35 years. Honeywell for over 3 decades. 33 international corporations have already chosen to operate in our parks — long-term relationships measured in decades.'
    : 'Gulfstream lleva más de 35 años con nosotros. Honeywell más de 3 décadas. 33 corporaciones internacionales ya eligieron operar en nuestros parques — relaciones de largo plazo que se miden en décadas.')
  const _sectionTitle = sectionTitle ?? (lang === 'en' ? 'Two paths, one provider' : 'Dos caminos, un solo proveedor')
  const _paragraphs = paragraphs ?? (lang === 'en'
    ? [
        'If you need a building ready to operate, we have 5 industrial parks in Mexicali with available buildings — from El Vigia to Nelson II. Three parks (Nelson I, Nelson II and El Vigía I) have a centralized fire suppression system. Nelson II also has a dedicated power line for KVAS energy access.',
        'Our in-house construction team, with 30 years of experience and over 75 completed projects, designs and delivers under a single contract. Our largest project: a 550,000 ft² facility built to LEED standards and incorporating FM Global with reinforced seismic systems.',
      ] as [string, string]
    : [
        'Si necesitas una nave lista para operar, tenemos 5 parques industriales en Mexicali con naves disponibles — desde El Vigía hasta Nelson II. Tres parques (Nelson I, Nelson II y El Vigía I) cuentan con sistema contraincendio centralizado. Nelson II además tiene línea dedicada para acceso a energía KVAS.',
        'Nuestro equipo de construcción in-house, con 30 años de experiencia y más de 75 proyectos completados, diseña y entrega bajo un solo contrato. Nuestro proyecto más grande: una nave de 550,000 ft² construida bajo estándares LEED e incorporando FM Global con sistemas sísmicos reforzados.',
      ] as [string, string])
  const _paragraphTitles = paragraphTitles ?? (lang === 'en'
    ? ['Existing Buildings for Lease', 'Custom Build-to-Suit']
    : ['Naves Existentes en Renta', 'Construcción a la Medida'])
  const _statsHeading = statsHeading ?? (lang === 'en' ? 'Our Numbers' : 'Nuestros Números')
  const _stats = stats ?? (lang === 'en' ? defaultStatsEn : defaultStatsEs)
  return (
    <Container className="mx-10 mt-16 lg:mt-16">
      <h1 className={' w-full text-balance text-[2rem] 430:text-[3rem] 1366:text-[5rem] 1920:text-[7rem] tracking-tight leading-none font-extrabold'} >
        {_headline}
      </h1>
      {_lead && (
        <Lead className="mt-6 max-w-3xl">
          {_lead}
        </Lead>
      )}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">{_sectionTitle}</h2>
          {_paragraphTitles?.[0] && (
            <h3 className="mt-6 text-lg font-semibold text-foreground">{_paragraphTitles[0]}</h3>
          )}
          <p className={`${_paragraphTitles?.[0] ? 'mt-2' : 'mt-6'} text-lg/8 text-gray-600 dark:text-gray-400`}>
            {_paragraphs[0]}
          </p>
          {_paragraphTitles?.[1] && (
            <h3 className="mt-8 text-lg font-semibold text-foreground">{_paragraphTitles[1]}</h3>
          )}
          <p className={`${_paragraphTitles?.[1] ? 'mt-2' : 'mt-8'} text-lg/8 text-gray-600 dark:text-gray-400`}>
            {_paragraphs[1]}
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="px-5 1280:px-0 -mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-sm shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt="Parque Industrial Mexicali - Nave industrial moderna"
                src="/Seleccionadas/nave-gulfstream-en-parque-nelson-2-64.jpg"
                width={800}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 25vw, 50vw"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-sm shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt="Parque Industrial Mexicali - Instalaciones de clase mundial"
                src="/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-2.jpeg"
                width={800}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 25vw, 50vw"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt="Parque Industrial Mexicali - Infraestructura industrial"
                src="/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg"
                width={800}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 25vw, 50vw"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-sm shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt="Parque Industrial Mexicali - Espacios industriales modernos"
                src="/Seleccionadas/puente-skyworks-2.jpg"
                width={800}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 25vw, 50vw"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>{_statsHeading}</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {_stats.map((stat, i) => (
              <div key={i} className={`flex flex-col gap-y-2 ${i < _stats.length - 2 ? 'border-b border-dotted border-gray-200 pb-4' : i < _stats.length - 1 ? 'max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4' : ''}`}>
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

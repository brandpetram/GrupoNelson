import Header from '@/components/Header'
import StandardsPoster from '@/components/brandpetram/standards-poster'
import CursorTrailGrupoNelson from '@/components/brandpetram/cursor-trail-grupo-nelson'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/nelson/nuestra-historia',
  title: 'Nuestra Historia',
  description: 'La historia de Grupo Nelson: de una empresa familiar en 1962 a operar 4 parques industriales con más de 4.5 millones de pies² en Mexicali. Naves industriales built-to-suit para empresas globales.',
})

export default function NuestraHistoriaPage() {
  return (
    <>
    <div className="flex flex-col min-h-[200vh] my-32 1200:px-10 ">
      <Header />

      {/* Layout de 3 columnas — mobile: 1 col, tablet/desktop: 3 cols iguales */}
      {/* Los bordes solo aparecen entre columnas (border-x en col 2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 flex-1">
        {/* Columna 1 — Origen y tesis */}
        <div className="px-8 space-y-10">
            <div className={'px-6 1200:px-10'}>
                <figure className="w-3/3 mx-auto mt-8">
                    <div className="aspect-video">
                        <img
                            src="/fundador-grupo-nelson-mexicali.jpg"
                            alt="Rodolfo Nelson Bárbara, fundador de Grupo Nelson"
                            className="w-full h-auto object-cover aspect-4/3"
                        />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted-foreground">
                        Rodolfo Nelson Bárbara | Fundador
                    </figcaption>
                </figure>
            </div>
            <div className={'px-6 1200:px-10'}>
                <h1 className="text-3xl 1200:text-5xl font-bold tracking-wide text-foreground">
                En 1965 instalamos la primera maquiladora de Mexicali. 60 años después, la familia fundadora sigue construyendo.
            </h1>
                <p className="mt-8 text:xl 1200:text-2xl leading-loose tracking-wide text-foreground">
                    Rodolfo Nelson Bárbara llegó a Mexicali y construyó el primer edificio industrial
                    de la ciudad. No había parques industriales, no había modelo de negocio probado,
                    no había mercado de manufactura fronteriza. Lo que había era un terreno y una
                    decisión. De esa decisión salió todo lo que hoy es Grupo Nelson: 4 parques
                    industriales, más de 4 millones de pies cuadrados desarrollados, y 33
                    corporaciones internacionales que operan en nuestras instalaciones.
                </p>
            </div>
            <div className={'px-6 1200:px-20'}>
                <p className="uppercase mt-8 text:xl 1200:text-2xl leading-loose tracking-widest text-foreground font-light">
                    No crecimos rápido. Crecimos sin detenernos. Cada década, una decisión que nos
                    hizo más relevantes. Nunca una apuesta que nos pusiera en riesgo.
                </p>
            </div>
      </div>

        {/* Columna 2 — El patrón: las decisiones */}
        <div className="border-x border-border dark:border-white/20">
            <div className={'px-6 1200:px-10'}>
                <figure className="w-3/3 mx-auto mt-8">
                    <div className="aspect-video">
                        <img
                            src="/parques-industriales-mexicali/nelson2/nave-industrial-en-parque-industrial-nelson2-8.jpeg"
                            alt="Evolución de los parques industriales de Grupo Nelson en Mexicali"
                            className="w-full h-auto object-cover aspect-4/3"
                        />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted-foreground">
                        Parque Industrial Nelson II | Mexicali, B.C.
                    </figcaption>
                </figure>
            </div>
            <div className={'px-6 1200:px-24'}>
                <p className="mt-8 text:xl 1200:text-[2rem] leading-loose tracking-wide text-foreground font-semibold">
                    Nuestro primer parque fue de block y techos bajos. El segundo ya tenía áreas
                    verdes, estacionamiento y barda perimetral. El tercero tiene tanque
                    contraincendio de 360,000 galones y naves con
                    certificación LEED. El cuarto ya tiene terreno. Cada parque fue una decisión de
                    inversión que hicimos antes de que el mercado nos lo pidiera.
                </p>
            </div>
            {/* Card estilo parque industrial */}
            <div className="mt-8 flex flex-col overflow-hidden px-10">
                {/* Header naranja */}
                <div className="bg-orange-500 py-10 px-10 flex flex-col gap-3">
                    <h3 className="text-white text-3xl 1200:text-5xl font-bold leading-none">
                        Parque Industrial Nelson II
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                        27 hectáreas. Subestación eléctrica dedicada. Sistema contraincendio
                        centralizado. El parque que demuestra a dónde llegó la evolución.
                    </p>
                    <a href="/parques-industriales-mexicali/nelson-ii" className="text-white text-sm flex items-center gap-1 hover:underline">
                        Ver especificaciones →
                    </a>
                </div>
                {/* Imagen */}
                <div className=" overflow-hidden">
                    <img
                        src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg"
                        alt="Parque Industrial Nelson II"
                        className="w-full h-auto object-cover aspect-square"
                    />
                </div>
            </div>
        </div>

        {/* Columna 3 — Filosofía y resultados */}
        <div className="">
            <div className={'px-6 1200:px-10'}>
                <div className="1280:p-10 shadow-xl bg-gradient-to-bl from-blue-600 to-sky-700 rounded-xs ">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl md:text-2xl lg:text-4xl 1200:text-3xl 1280:text-4xl 1536:text-5xl font-bold leading-none text-white px-10 pt-10">
                            En 1997 creamos nuestra propia constructora
                        </h2>
                        <p className="1200:text-md 1728:text-xl 2560:text-2xl leading-normal text-balance text-white px-12 pb-10">
                            Dependíamos de constructoras externas para edificar las naves que
                            nuestros clientes necesitaban. Decidimos que eso era un cuello de
                            botella. Fundamos Baumex — nuestra constructora in-house — y desde
                            entonces controlamos toda la cadena: del terreno a la llave. 75+
                            proyectos construidos en 30 años.
                        </p>
                    </div>
                </div>
            </div>

            <div className={'px-6 1200:px-10 mt-10'}>
                <div className="space-y-8">
                    <div>
                        <p className="text-4xl 1200:text-5xl font-bold text-foreground">35+</p>
                        <p className="mt-2 text-lg text-muted-foreground">
                            años con nuestros clientes más antiguos. Las empresas que llegaron hace
                            décadas siguen aquí.
                        </p>
                    </div>
                    <div>
                        <p className="text-4xl 1200:text-5xl font-bold text-foreground">3 generaciones</p>
                        <p className="mt-2 text-lg text-muted-foreground">
                            de la familia fundadora. La cuarta generación ya trabaja en el grupo.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed text-foreground">
                            Nunca construimos inventario para esperar clientes. Solo cuando hay
                            demanda real. Solo hemos vendido el 1-2% de todas las naves que
                            construimos — el resto lo rentamos. Esa disciplina conservadora es la
                            razón por la que 60 años después seguimos aquí. Y la razón por la que
                            puedes firmar un contrato de 15 años con la certeza de que estaremos
                            del otro lado cuando se renueve.
                        </p>
                    </div>
                </div>
            </div>

            <div className={'px-6 1200:px-10 mt-10'}>
                <StandardsPoster />
            </div>
      </div>

      </div>
    </div>

    <CursorTrailGrupoNelson />
    </>
  )
}

import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Nuestra Historia | Grupo Nelson',
}

export default function NuestraHistoriaPage() {
  return (
    <div className="flex flex-col min-h-[200vh] my-32 1200:px-10 ">
      <Header />

      {/* Layout de 3 columnas — mobile: 1 col, tablet/desktop: 3 cols iguales */}
      {/* Los bordes solo aparecen entre columnas (border-x en col 2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 flex-1">
        {/* Columna 1 */}
        <div className="px-8 space-y-10">
            <div className={'px-6 1200:px-10'}>
                <figure className="w-3/3 mx-auto mt-8">
                    <div className="aspect-video">
                        <img
                            src="/fundador-grupo-nelson-mexicali.jpg"
                            alt="Placeholder"
                            className="w-full h-auto object-cover aspect-4/3"
                        />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted-foreground">
                        Lorem Ipsum | Cargo Lorem Ipsum
                    </figcaption>
                </figure>
            </div>
            <div className={'px-6 1200:px-10'}>
                <h1 className="text-3xl 1200:text-5xl font-bold tracking-wide text-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </h1>
                <p className="mt-8 text:xl 1200:text-2xl leading-loose tracking-wide text-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div className={'px-6 1200:px-20'}>
                <p className="uppercase mt-8 text:xl 1200:text-2xl leading-loose tracking-widest text-foreground font-light">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.
                </p>
            </div>
      </div>

        {/* Columna 2 — borde izquierdo y derecho para separar las 3 columnas */}
        <div className="border-x border-border">
            <div className={'px-6 1200:px-10'}>
                <figure className="w-3/3 mx-auto mt-8">
                    <div className="aspect-video">
                        <img
                            src="/placeholder.svg"
                            alt="Placeholder"
                            className="w-full h-auto object-cover aspect-4/3"
                        />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted-foreground">
                        Lorem Ipsum | Cargo Lorem Ipsum
                    </figcaption>
                </figure>
            </div>
            <div className={'px-6 1200:px-24'}>
                <p className="mt-8 text:xl 1200:text-[2rem] leading-loose tracking-wide text-foreground font-semibold">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.
                </p>
            </div>
            {/* Card estilo parque industrial */}
            <div className="mt-8 flex flex-col overflow-hidden px-10">
                {/* Header naranja */}
                <div className="bg-orange-500 py-10 px-10 flex flex-col gap-3">
                    <h3 className="text-white text-3xl 1200:text-5xl font-bold leading-none">
                        Parque Industrial Nelson II
                    </h3>
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

        {/* Columna 3 */}
        <div className="">
            <div className={'px-6 1200:px-10'}>
                <div className="1280:p-10 shadow-xl bg-gradient-to-bl from-blue-600 to-sky-700 rounded-xs ">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl md:text-2xl lg:text-4xl 1200:text-3xl 1280:text-4xl 1536:text-5xl font-bold leading-none text-white px-10 pt-10">
                            Naves Industriales Built-to-Suit
                        </h2>
                        <p className="1200:text-md 1728:text-xl 2560:text-2xl leading-normal text-balance text-white px-12 pb-10">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit
                            voluptate velit.
                        </p>
                    </div>
                </div>



        </div>
      </div>

      </div>
    </div>
  )
}

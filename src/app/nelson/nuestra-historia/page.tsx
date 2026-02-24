import type { Metadata } from 'next'
import Header from '@/components/Header'
import {Titulo} from "@/components/ui/brandpetram/titulo";
import {Parrafo} from "@/components/ui/brandpetram/parrafo";

export const metadata: Metadata = {
  title: 'Nuestra Historia | Grupo Nelson',
}

export default function NuestraHistoriaPage() {
  return (
    <div className="flex flex-col min-h-[200vh] my-32 1200:px-10 ">
      <Header />

      {/* Layout de 3 columnas — mobile: 1 col, tablet/desktop: 3 cols iguales */}
      {/* Los bordes solo aparecen entre columnas (border-x en col 2) */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Columna 1 */}
        <div className="flex-1 p-8">
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
        <div className="flex-1 border-x border-border">
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
        </div>

        {/* Columna 3 */}
        <div className="flex-1">
            <div className={'px-6 1200:px-10'}>
                <div className="1280:p-10 shadow-xl bg-gradient-to-bl from-blue-600 to-sky-700 rounded-xs ">
                    <div className="flex flex-col gap-6">
                        <Titulo
                            as="h2"
                            fontSize="text-4xl md:text-2xl lg:text-4xl 1200:text-3xl 1280:text-4xl 1536:text-5xl"
                            fontWeight="font-bold"
                            className="text-white dark:text-gray-50 leading-none px-10 pt-10"  // Blanco en light, gris oscuro en dark
                        >
                            Naves Industriales Built-to-Suit
                        </Titulo>
                        <Parrafo
                            fontSize="1200:text-md 1728:text-xl 2560:text-2xl "
                            maxWidth="max-w-4xl"
                            lineHeight={'leading-normal'}
                            className="text-balance text-white dark:text-gray-50 px-10 pb-10"  // Blanco con opacidad en light, gris en dark
                        >
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit
                            voluptate velit.
                        </Parrafo>
                    </div>
                </div>
        </div>
      </div>

      </div>
    </div>
  )
}

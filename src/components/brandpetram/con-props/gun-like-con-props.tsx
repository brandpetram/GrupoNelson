/**
 * Componente original: gun-like-ambaflex.tsx
 * Propeado: 27 de enero de 2026
 *
 * Este componente fue "propeado" con JSX hard-coded (sin importar subcomponentes).
 * Los subcomponentes (LineaL, PoligonoTexto1, Titulo, Parrafo) fueron expandidos
 * a JSX directo para evitar props anidados.
 */

'use client'

interface GunLikeConPropsProps {
  poligonoText?: string;
  titulo?: string;
  parrafo?: string;
}

export function GunLikeConProps({
  poligonoText = "Sistemas Ambaflex en México",
  titulo = "Ingenieria, Suministro y Soluciones",
  parrafo = "La experiencia, confiabilidad e infraestructura que necesitas en un equipo especializado en conveyors industriales ambaflex",
}: GunLikeConPropsProps) {
  return (
    <div className="container mx-auto lg:mt-32 px-4 md:px-0">
      <div className="flex flex-col items-center md:ml-20 lg:ml-34 gap-0 lg:gap-12 xl:gap-6 md:items-end md:grid  768:grid-cols-[5rem_15rem_1fr] 834:grid-cols-[8rem_15rem_1fr] 1024:grid-cols-[4rem_20rem_1fr] 1200:grid-cols-[14rem_20rem_1fr] 1280:grid-cols-[10rem_20rem_1fr] 1366:grid-cols-[16rem_20rem_1fr] 1728:grid-cols-[1.4fr_20rem_4fr]  xl:gap-x-16 md:gap-y-8">

        {/* LineaL expandido - Línea decorativa en forma de L (center-left) */}
        <div className="relative h-full md:w-8/12 lg:w-full hidden md:block translate-y-[15%] z-50">
          {/* Línea horizontal - centrada verticalmente */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-0 w-full bg-muted-foreground/30"
            style={{ height: '1px' }}
          />
          {/* Línea vertical - desde el centro hacia abajo */}
          <div
            className="absolute top-1/2 left-0 768:h-[18rem] 834:h-[20rem] lg:h-[23rem] 1024:h-[22rem] 1200:h-[20rem] 1366:h-[24rem] bg-muted-foreground/30"
            style={{ width: '1px' }}
          />
        </div>

        {/* PoligonoTexto1 expandido - Rectángulo con gradiente (SIN clip-path) */}
        <div className="relative aspect-[1/1] size-[13rem] lg:size-[20rem] xl:size-auto">
          <div className="group relative flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 rounded-none 1200:max-w-[18rem] 1280:max-w-full">
            <p className="p-6 text-2xl md:text-xl lg:text-4xl font-bold tracking-tighter leading-none w-full text-white text-center break-words">
              {poligonoText}
            </p>
          </div>
        </div>

        {/* Columna 3: Título + Párrafo expandidos */}
        <div className="mt-20 md:mt-0 flex flex-col gap-6 text-center md:text-left w-full 1728:w-auto 1728:max-w-160 1728:justify-self-start">
          {/* Titulo expandido */}
          <h1 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none text-foreground md:max-w-xs lg:max-w-sm xl:max-w-md">
            {titulo}
          </h1>

          {/* Parrafo expandido */}
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light tracking-normal leading-relaxed lg:leading-loose text-foreground md:max-w-[16rem] lg:max-w-[22rem] 1200:max-w-[22rem] 1280:max-w-[27rem]">
            {parrafo}
          </p>
        </div>
      </div>
    </div>
  )
}

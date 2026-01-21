'use client'

import { TickerBase } from '../ui/brandpetram/ticker-base'
import { TickerItemHighlight } from '../ui/brandpetram/ticker-item-highlight'

const tickerItems = [
  'Soluciones Galleteras',
  'Producción Láctea',
  'Conveyors Cárnicos',
  'Tecnología Dulcera',
  'Líneas de Bebidas',
  'Sistemas de Panadería',
  'Conveyors Congelados',
  'Equipos Confiteros',
]

export function TickerMarketing2() {
  const colorTexto = 'color-mix(in oklab, var(--color-white) 20%, transparent)'
  const colorDestacado = 'var(--color-orange-500)'

  // Convertimos los strings en elementos JSX con highlight
  const tickerElements = tickerItems.map((item, index) => (
    <TickerItemHighlight
      key={`item-${index}`}
      colorTexto={colorTexto}
      colorDestacado={colorDestacado}
    >
      {item}
    </TickerItemHighlight>
  ))

  return (
    <div
      className="relative overflow-hidden bg-black flex items-center lg:rounded-xl w-full md:w-11/12 1200:w-10/12 mx-auto"

    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg)'
        }}
      />

      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/0" />

      {/* Contenido */}
      <div className="relative container mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Lado izquierdo - Contenido */}
          <div className="flex flex-col justify-start p-10">
            <h2 className="text-white text-xl mb-2 max-w-sm">
             Soporte Dinámico Industrial
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-md mt-5 ">
             ¿Necesitas Conveyors de Grado Alimenticio?
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
          </p>
            <button className="bg-orange-500  text-white px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors w-fit">
              Cotiza Ahora
            </button>
          </div>

          {/* Lado derecho - Ticker */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="p-6 lg:p-12 w-full max-w-[700px] h-[400px] md:h-[600px] 1728:h-[700px]"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-8 h-full w-full border border-white/10 shadow-2xl">
                <TickerBase
                  velocidadBase={22}
                  multiplicadorScroll={4}
                  altura="100%"
                  gap={18}
                  items={tickerElements}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

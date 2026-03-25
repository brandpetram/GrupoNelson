import Image from 'next/image'

export function EditorialCascadaBP() {
  return (
    <section className="w-10/12 mx-auto pt-10 sm:pt-14 pb-16 sm:pb-24">
      {/* Título — ancho completo */}
      <h2 className="text-[1.5rem] 768:text-[2rem] 1024:text-[2.5rem] 1200:text-[3rem] 1366:text-[3.5rem] 1536:text-[4rem] 1728:text-[4.5rem] 1920:text-[5rem] font-extrabold tracking-tighter leading-none text-foreground text-balance">
        De la primera maquiladora de Mexicali a la nave más grande de la ciudad.
      </h2>

      {/* Párrafo + imagen grande lado a lado */}
      <div className="mt-8 768:mt-12 1200:mt-16 flex flex-col 1200:flex-row gap-10 1200:gap-16">
        <p className="1200:w-[55%] text-[1rem] 768:text-[1.125rem] 1024:text-[1.25rem] 1200:text-[1.375rem] 1366:text-[1.5rem] 1536:text-[1.625rem] 1728:text-[1.75rem] 1920:text-[1.875rem] font-normal tracking-wider leading-relaxed text-muted-foreground">
          En 1965, Rodolfo Nelson Sr. instaló la primera maquiladora de Mexicali. No existían parques industriales — existía una visión. Tres generaciones después, esa visión se convirtió en cinco parques, cuatro millones de pies cuadrados desarrollados y la confianza de treinta corporaciones internacionales que eligieron Mexicali porque Grupo Nelson ya había construido la infraestructura que necesitaban.
        </p>

        {/* Cubo 1 — imagen grande a la derecha del párrafo */}
        <div className="hidden 1200:block 1200:w-[45%] aspect-square rounded-xs overflow-hidden relative">
          <Image
            src="/fotos-dron/NELSON II/nave-dhl-en-parque-nelson-2-1.JPG"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 0px, 40vw"
          />
        </div>
      </div>

      {/* Escalera de cubos — cada fila se desplaza a la izquierda */}
      <div className="hidden 1200:block mt-6">
        {/* Fila 1 — alineada a la derecha (debajo de la imagen grande) */}
        <div className="flex justify-end">
          <div className="w-28 1366:w-32 1536:w-36 h-28 1366:h-32 1536:h-36 rounded-xs bg-blue-600" />
        </div>

        {/* Fila 2 — un paso a la izquierda */}
        <div className="flex justify-end mt-4 mr-[8rem] 1366:mr-[10rem] 1536:mr-[12rem]">
          <div className="w-40 1366:w-48 1536:w-52 h-40 1366:h-48 1536:h-52 rounded-xs overflow-hidden relative">
            <Image
              src="/fotos-dron/CONSTRUCTORA BAUMEX/HONEYWELL/nave-industrial-honeywell-1.JPG"
              alt=""
              fill
              className="object-cover"
              sizes="15vw"
            />
          </div>
        </div>

        {/* Fila 3 — otro paso a la izquierda */}
        <div className="flex justify-end mt-4 mr-[20rem] 1366:mr-[24rem] 1536:mr-[28rem]">
          <div className="w-20 1366:w-24 1536:w-28 h-20 1366:h-24 1536:h-28 rounded-xs bg-gray-200" />
        </div>

        {/* Fila 4 — sigue a la izquierda, imagen */}
        <div className="flex justify-end mt-4 mr-[28rem] 1366:mr-[32rem] 1536:mr-[36rem]">
          <div className="w-36 1366:w-40 1536:w-44 h-36 1366:h-40 1536:h-44 rounded-xs overflow-hidden relative">
            <Image
              src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="12vw"
            />
          </div>
        </div>

        {/* Fila 5 — azul oscuro, casi al centro */}
        <div className="flex justify-end mt-4 mr-[38rem] 1366:mr-[44rem] 1536:mr-[50rem]">
          <div className="w-24 1366:w-28 1536:w-32 h-24 1366:h-28 1536:h-32 rounded-xs bg-blue-700" />
        </div>

        {/* Fila 6 — gris, debajo del texto, final de la C */}
        <div className="flex justify-end mt-4 mr-[46rem] 1366:mr-[52rem] 1536:mr-[58rem]">
          <div className="w-16 1366:w-20 1536:w-24 h-16 1366:h-20 1536:h-24 rounded-xs bg-gray-300" />
        </div>
      </div>
    </section>
  )
}

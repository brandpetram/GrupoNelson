export function Iota() {
  return (
    <div data-component="Iota" data-component-file="src/components/brandpetram/iota.tsx" data-component-props="false" className="flex flex-row ">
      {/* Columna izquierda: 50% */}
      <div className="w-1/2 p-6 md:p-20 1200:p-40">
        {/* Bloque de texto con padding-left generoso */}
          <div className="flex flex-col gap-10">
              <h2 className="text-[1.5rem] 360:text-[1.8rem] 393:text-[2rem] 430:text2.2rem] 768:text-[2rem] 834:text-[2.45rem] 1024:text-[2.8rem] 1200:text-[2.2rem] 1280:text-[2.3rem] 1366:text-[2.4rem] 1440:text-[2.5rem] 1536:text-[2.7rem] 1728:text-[3rem] 1920:text-[3.3rem] font-semibold leading-none text-black dark:text-white">
                  Reduce tu inversión inicial — la infraestructura del parque ya existe.
              </h2>

              <p className="text-[1rem] 360:text-[1rem] 393:text-[1.2rem] 430:text-[1.3rem] 768:text-[1.15rem] 834:text-[1.2rem] 1024:text-[1.3rem] 1200:text-[1.2rem] 1280:text-[1.3rem] 1366:text-[1.4rem] 1440:text-[1.5rem] 1536:text-[1.7rem] 1728:text-[2rem] 1920:text-[2.3rem] leading-relaxed text-gray-600 dark:text-gray-400">
                  Subestación eléctrica dedicada, sistema contraincendio central de 360,000 galones con línea eléctrica dedicada, seguridad 24/7, barda perimetral y vialidades pavimentadas. El contraincendio central ahorra 60% vs. sistemas individuales.
              </p>

              <button className="w-fit px-4 1200:px-9 py-5 mt-5 border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-medium hover:border-gray-500 dark:hover:border-gray-400 transition-colors">
                  Contáctanos
              </button>
          </div>
      </div>

      {/* Línea divisoria vertical */}
      <div className="border-l border-gray-300 dark:border-gray-700"></div>

      {/* Columna derecha: 50% */}
        <div className="w-1/2 p-6 md:p-10 1280:p-30">
            <div className="h-full md:aspect-1/2 1200:aspect-square overflow-hidden">
                <img src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-2.jpeg" alt="Imagen decorativa" className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
  )
}

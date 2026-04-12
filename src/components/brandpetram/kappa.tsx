export function Kappa({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const text = {
    title: lang === 'en'
      ? "Can't find what you need?"
      : '¿No encuentras lo que necesitas?',
    desc: lang === 'en'
      ? "If your operation requires specific heights, high-demand electrical capacity, cleanrooms, or specialized systems that don't exist in inventory, Baumex — Grupo Nelson's in-house construction firm — designs and builds the facility to your exact specifications. One provider for both paths."
      : 'Si tu operación requiere alturas específicas, capacidad eléctrica de alta demanda, cuartos limpios o sistemas especializados que no existen en el inventario, Baumex — la constructora in-house de Grupo Nelson — diseña y construye la nave según tus especificaciones exactas. Un solo proveedor para ambos caminos.',
    sidebar: lang === 'en'
      ? 'Gulfstream started in an existing building and now operates in 52,200 m² of custom-built space'
      : 'Gulfstream empezó en una nave existente y hoy opera en 52,200 m² construidos a medida',
  }

  return (
    <section data-component="Kappa" data-component-file="src/components/brandpetram/kappa.tsx" data-component-props="false" className="mx-auto items-center py-16">
      {/* Texto superior centrado */}
        <div className={'bg-background max-h-[70rem]'}>
            <div className={'translate-y-[10rem]'}>


                {/* Contenedor de imagen square con texto absoluto a la izquierda */}
                <div className="relative w-full 360:w-[100%] 393:w-[95%] 430:w-[90%] 768:w-[80%] 834:w-[75%] 1024:w-[70%] 1200:w-[60%] 1536:w-[60%] mx-auto">
                    <div className="mb-12 ">
                        <h2 className="text-[1.5rem] 360:text-[1.5rem] 393:text-[1.6rem] 430:text-[1.7rem] 768:text-[1.9rem] 834:text-[2rem] 1024:text-[2.2rem] 1200:text-[2.5rem] 1280:text-[2.7rem] 1366:text-[2.9rem] 1440:text-[3.1rem] 1536:text-[3.4rem] 1728:text-[3.8rem] 1920:text-[4.2rem] font-semibold text-white leading-tight">
                            {text.title}
                        </h2>
                        <p className="w-9/12 text-[0.7rem] 360:text-[0.7rem] 393:text-[0.75rem] 430:text-[0.8rem] 768:text-[0.85rem] 834:text-[0.9rem] 1024:text-[0.95rem] 1200:text-[1rem] 1280:text-[1.1rem] 1366:text-[1.2rem] 1440:text-[1.3rem] 1536:text-[1.4rem] 1728:text-[1.5rem] 1920:text-[1.6rem] text-gray-600 dark:text-gray-400 mt-4">
                          {text.desc}
                        </p>
                    </div>

                    <div className="w-full aspect-[3/2] overflow-hidden">
                        <img
                            src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-7.jpeg"
                            alt="Imagen principal"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Texto posicionado absolute a la izquierda de la imagen */}
                    <div
                        className="hidden 768:absolute 768:left-[-7rem] 834:left-[-8rem] 1024:left-[0rem] 1200:left-[-13rem] 1280:left-[-13rem] 1366:left-[-14rem] 1440:left-[-15rem] 1536:left-[-14rem] 1728:left-[-14rem] 1920:left-[-14rem] top-1/2  w-[10rem] text-right border-r border-gray-400 dark:border-gray-600 pr-5 768:py-5 834:py-6 1024:py-8 1200:py-10 1728:py-16">
                        <p className="text-[0.55rem] 360:text-[0.55rem] 393:text-[0.58rem] 430:text-[0.6rem] 768:text-[0.65rem] 834:text-[0.7rem] 1024:text-[0.75rem] 1200:text-[0.8rem] 1280:text-[0.85rem] 1366:text-[0.9rem] 1440:text-[0.95rem] 1536:text-[1rem] 1728:text-[1.1rem] 1920:text-[1.2rem] text-gray-300 dark:text-gray-500 leading-snug text-balance">
                            {text.sidebar}
                        </p>
                    </div>
                </div>
            </div>
        </div>

      {/* Línea vertical desde el centro-bottom de la imagen */}
      <div className="w-[2px] h-[20rem] bg-gray-300 dark:bg-gray-700 mx-auto"></div>

      {/* Segunda imagen 16/9 */}
      <div className="w-full 360:w-[100%] 393:w-[95%] 430:w-[90%] 768:w-[85%] 834:w-[80%] 1024:w-[78%] 1200:w-[75%] mx-auto">
        <div className="w-full aspect-video overflow-hidden">
          <img src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg" alt="Imagen secundaria" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

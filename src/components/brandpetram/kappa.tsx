export function Kappa() {
  return (
    <section className="mx-auto items-center py-16">
      {/* Texto superior centrado */}
        <div className={'bg-black py-10 md:py-0'}>
            <div className={'md:translate-y-[8rem] md:pb-48'}>


                {/* Contenedor de imagen square con texto absoluto a la izquierda */}
                <div className="relative w-[70%] 360:w-[70%] 393:w-[75%] 430:w-[90%] 768:w-[80%] 834:w-[75%] 1024:w-[70%] 1200:w-[60%] 1536:w-[60%] mx-auto">
                    <div className="mb-12 ">
                        <h2 className="text-[3rem] 360:text-[3.3rem] 393:text-[4rem] 430:text-[4rem] 768:text-[3rem] 834:text-[3.5rem] 1024:text-[4rem] 1200:text-[2.5rem] 1280:text-[2.7rem] 1366:text-[2.9rem] 1440:text-[3.1rem] 1536:text-[3.4rem] 1728:text-[3.8rem] 1920:text-[4.2rem] font-semibold text-white leading-none lg:leading-tight">
                            Lorem Ipusm Dolr Sit
                        </h2>
                        <p className="w-9/12 text-[1rem] 360:text-[1rem] 393:text-[1rem] 430:text-[1rem] 768:text-[1.5rem] 834:text-[1.5rem] 1024:text-[1.7rem] 1200:text-[1rem] 1280:text-[1.1rem] 1366:text-[1.2rem] 1440:text-[1.3rem] 1536:text-[1.4rem] 1728:text-[1.5rem] 1920:text-[1.6rem] text-gray-600 mt-4">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                        </p>
                    </div>

                    <img
                        src="/placeholder.svg"
                        alt="Imagen principal"
                        className="w-full h-full object-cover aspect-2/3 md:aspect-3/2"
                    />

                    {/* Texto posicionado absolute a la izquierda de la imagen */}

                    <div
                        className="my-20   1200:absolute 1200:left-[-12rem] 1280:left-[-13rem] 1366:left-[-14rem] 1440:left-[-15rem] 1536:left-[-14rem] 1728:left-[-14rem] 1920:left-[-14rem] top-1/2  w-[12rem] md:w-[20rem] 1200:w-[10rem] text-right border-r border-gray-400 pr-5 md:pr-14 1200:pr-5 1200:py-10 1728:py-16">
                        <p className="text-[1.4rem] 360:text-[1.4rem] 393:text-[1.4rem] 430:text-[1.4rem] 768:text-[2rem] 834:text-[2rem] 1024:text-[2rem] 1200:text-[0.8rem] 1280:text-[0.85rem] 1366:text-[0.9rem] 1440:text-[0.95rem] 1536:text-[1rem] 1728:text-[1.1rem] 1920:text-[1.2rem] text-gray-300 leading-snug text-balance">
                            lorem ipsum dolor sit amet, consectetur sicut erat pernoc autem
                        </p>
                    </div>
                </div>
            </div>
        </div>

      {/* Línea vertical desde el centro-bottom de la imagen */}
      <div className="w-[2px] h-[10rem] md:h-[20rem] bg-gray-300 mx-auto"></div>

      {/* Segunda imagen 16/9 */}
      <div className="w-full 360:w-[100%] 393:w-[95%] 430:w-[90%] 768:w-[85%] 834:w-[80%] 1024:w-[78%] 1200:w-[75%] mx-auto">
        <img
          src="/placeholder.svg"
          alt="Imagen secundaria"
          className="w-full h-full object-cover 1200:aspect-video"
        />
      </div>
    </section>
  )
}

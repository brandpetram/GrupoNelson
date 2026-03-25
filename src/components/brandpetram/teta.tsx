export function Teta() {
  return (
      <div className={'overflow-hidden -mt-50 pt-50'}>
        <div
            className="w-10/12 md:w-full mx-auto md:translate-x-16 1200:translate-x-20 flex flex-col md:flex-row items-start gap-8">
          {/* Columna izquierda: 65% */}
          <div
              className="360:w-full 393:w-full 430:w-full 768:w-[48%] 834:w-[50%] 1024:w-[52%] 1200:w-[55%] 1280:w-[52%] 1366:w-[53%] 1440:w-[54.5%] 1536:w-[56%] 1728:w-[58%] 1920:w-[60%]">
            <div className="relative translate-y-[4rem] 360:translate-y-[4rem]  393:translate-y-[4rem] z-30 md:z-0">
              {/* Div decorativo: cuadrado con gradiente naranja a rojo, asomando por arriba */}
              <div
                  className="absolute left-[6rem] 360:left-[7rem] 430:left-[9rem] md:left-1/2 -translate-x-1/2 top-8 md:-top-20 w-[10rem] 1200:w-[20rem] h-[7rem] md:h-[20rem] bg-gradient-to-r from-orange-500 to-red-500 z-0"></div>

              {/* Imagen principal: aspect 3:2 */}
              <img
                  src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg"
                  alt="Imagen principal"
                  className="w-[13rem] md:w-full ml-10 360:ml-18 393:ml-22 430:ml-28 md:ml-0 360:aspect-square 393:aspect-square 430:aspect-square 768:aspect-[2/3] 834:aspect-[2/3] 1024:aspect-[2/3] 1200:aspect-square 1280:aspect-[3/2] object-cover relative z-10 "
              />
            </div>
          </div>

          {/* Columna derecha: 35% */}
          <div
              className="360:w-full 393:w-full 430:w-full 768:w-[35%] 834:w-[35%] 1024:w-[35%] 1200:w-[30%] 1280:w-[27%] 1366:w-[27.5%] 1440:w-[28%] 1536:w-[28%] 1728:w-[30%] 1920:w-[32%] flex flex-col 768:-translate-y-[3rem] 834:-translate-y-[3rem] 1024:-translate-y-[3rem] 1280:-translate-y-[6rem] 1366:-translate-y-[10rem] z-10">
            {/* Imagen cuadrada */}
            <img
                src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-5.jpeg"
                alt="Imagen derecha"
                className="w-full aspect-square object-cover 360:translate-y-0 393:-translate-[0rem] 430:-translate-[0rem] 768:-translate-[4rem] 834:-translate-[6rem] 1024:-translate-[8rem] 1200:-translate-[9rem] 1280:-translate-[10rem] "
            />

            {/* Bloque de texto con padding horizontal exhaustivo */}
            <div
                className="360:translate-x-0 393:translate-x-0 430:translate-x-0 768:translate-x-3 834:translate-x-3 1024:translate-x-[1.5rem] 1200:translate-x-[1rem] 1280:translate-x-[3rem] 1366:translate-x-[3rem] 1440:translate-x-[3.5rem] 1536:translate-x-12 1728:translate-x-12 1920:translate-x-17 mt-10 md:mt-0 834:-translate-y-[1rem] 1024:-translate-y-[3rem] 1200:-translate-y-[5rem] 1280:-translate-y-[7rem] 1366:-translate-y-[5rem]">
              <h2 className="360:w-full 393:w-full 430:w-full 768:w-[13rem] 834:w-[15rem] 1024:w-[19rem] 1200:w-[19rem] 1280:w-[20rem] 1366:w-[20rem] 1440:w-[20rem] 1536:w-[23rem] 1728:w-[24rem] 1920:w-[26rem] text-[2.6rem] 360:text-[2.6rem] 393:text-[2.7rem] 430:text-[2.8rem] 768:text-[2rem] 834:text-[2.1rem] 1024:text-[2.3rem] 1200:text-[2.5rem] 1280:text-[2.6rem] 1366:text-[2.6rem] 1440:text-[2.9rem] 1536:text-[3.3rem] 1728:text-[3.1rem] 1920:text-[3.2rem] font-semibold text-black dark:text-white leading-none">
                Arranca producción sin esperar 12-24 meses de construcción
              </h2>

              <p className="text-pretty 360:w-full 393:w-full 430:w-full 768:w-[15rem] 834:w-[15rem] 1024:w-[16rem] 1200:w-[22rem] 1280:w-[23rem] 1366:w-[23rem] 1440:w-[25rem] 1536:w-[26rem] 1728:w-[28rem] 1920:w-[31rem] text-[1.3rem] 360:text-[1.5rem] 393:text-[1.85rem] 430:text-[1.9rem] 768:text-[1.15rem] 834:text-[1.20rem] 1024:text-[1.4rem] 1200:text-[1.5rem] 1280:text-[1.3rem] 1366:text-[1.3rem] 1440:text-[1.4rem] 1536:text-[1.5rem] 1728:text-[1.6rem] 1920:text-[1.8rem] text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Para empresas que llegan a México por nearshoring y necesitan operar rápido, una nave llave en mano elimina el ciclo completo de un build-to-suit. Visitas la nave, verificas que cumple tus requerimientos técnicos, firmas contrato y comienzas a operar en semanas. Contratos de 10-15 años. El 80% de los clientes de Grupo Nelson son recurrentes.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

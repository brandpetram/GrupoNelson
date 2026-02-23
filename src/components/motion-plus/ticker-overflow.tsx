"use client"

import { Ticker } from "motion-plus/react"
import { motion } from "motion/react"

function LogoCliente({ src }: { src: string }) {
    return (
        <motion.img
            className="logo-cliente"
            src={`/logos-clientes/${src}`}
            alt={"Logo cliente"}
        />
    )
}

export default function TickerOverflow() {
    // Todos los logos disponibles
    const todosLosLogos = [
        { src: "logo-gulfstream.svg", key: "13" },
        { src: "logo-accuride.svg", key: "1" },
        { src: "logo-baxter.svg", key: "3" },
        { src: "logo-belvedere-maletti.svg", key: "4" },
        { src: "logo-cornell-dubilier.svg", key: "5" },
        { src: "logo-creation-technologies.svg", key: "6" },
        { src: "logo-dentsply.svg", key: "7" },
        { src: "logo-dhl.svg", key: "8" },
        { src: "logo-direct-pack.svg", key: "9" },
        { src: "logo-gameloft.svg", key: "10" },
        { src: "logo-general-dynamics.svg", key: "11" },
        { src: "logo-goodrich.svg", key: "12" },
        { src: "logo-hirsh-industries.svg", key: "14" },
        { src: "logo-honeywell.svg", key: "15" },
        { src: "logo-intuitive.svg", key: "16" },
        { src: "logo-ivemsa.svg", key: "17" },
        { src: "logo-jonathan.svg", key: "18" },
        { src: "logo-liebert.svg", key: "19" },
        { src: "logo-mohawk.svg", key: "20" },
        { src: "logo-psf.svg", key: "21" },
        { src: "logo-rheem.svg", key: "22" },
        { src: "logo-sds-sybron-dental-specialities.svg", key: "23" },
        { src: "logo-utc-aerospace-systems.svg", key: "24" },
        { src: "logo-air-liquide.svg", key: "2" },
        { src: "logo-vertiv.svg", key: "25" },
        { src: "logo-aqua-lung.svg", key: "26" },
        { src: "logo-celestica.svg", key: "27" },
        { src: "logo-garret.svg", key: "28" },
        { src: "logo-fastenal.svg", key: "29" },
    ]

    // Fila superior (RTL): Gulfstream aparece dos veces, separadas por ~7 logos entre sí
    const logosFirstHalf = [
        todosLosLogos[0],                                    // Gulfstream (1ª vez)
        ...todosLosLogos.slice(1, 8),                        // logos 1–7
        { src: "logo-gulfstream.svg", key: "13-b" },         // Gulfstream (2ª vez)
        ...todosLosLogos.slice(8, 15),                       // logos 8–14
    ]

    // Fila inferior (LTR): logos 15–28
    const logosSecondHalf = todosLosLogos.slice(15)

    return (
        <article>

            <div className={'ml-40 1920:ml-60 mb-28'}><h2
                className="768:mt-5 834:mt-5 1024:mt-6 1200:mt-5 1280:mt-5 1366:mt-5 1440:mt-6 1536:mt-6 1728:mt-6 1920:mt-6 text-4xl 360:text-5xl 393:text-5xl 430:text-[3.5rem] 768:text-7xl 834:text-7xl 1024:text-8xl 1200:text-[3rem] 1280:text-[3.3rem] 1366:text-[3.5rem] 1440:text-[3.5rem] 1536:text-[5.3rem] 1728:text-[6rem] 1920:text-[5rem] font-medium text-foreground leading-none tracking-tighter text-balance w-10/12">
                Clientes de Clase Mundial confían en <span
                className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-black up">Grupo Nelson:</span>
            </h2></div>

            {/* Primer ticker - RTL (izquierda) */}
            <div className="ticker-container">
                <Ticker
                    items={logosFirstHalf.map((logo) => (
                        <LogoCliente src={logo.src} key={logo.key} />
                    ))}
                    className="ticker ticker-rtl"
                />
            </div>

            {/* Segundo ticker - LTR (derecha) */}
            <div className="ticker-container">
                <Ticker
                    items={logosSecondHalf.map((logo) => (
                        <LogoCliente src={logo.src} key={logo.key} />
                    ))}
                    className="ticker ticker-ltr"
                />
            </div>

            <Stylesheet />
        </article>
    )
}

/**
 * ==============   Styles   ================
 */
function Stylesheet() {
    return (
        <style>
            {`
        article {
           box-sizing: border-box;
           width: 100%;
           padding: 20px;
           display: flex;
           flex-direction: column;
           gap: 50px;
           align-items: center;
        }

        p.small {
           text-align: center;
           margin-bottom: 20px;
        }

        .ticker-container {
           width: 100%;
           overflow: hidden;
        }

        .logo-cliente {
           height: 100px;
           object-fit: contain;
           margin: 0 20px;
           background-color: transparent;
        }

        .ticker {
          width: 100%;
          max-width: none;
        }

        .ticker-rtl {
          direction: rtl;
        }

        .ticker-ltr {
          direction: ltr;
        }
      `}
        </style>
    )
}

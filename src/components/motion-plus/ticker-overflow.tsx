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

    // Primera mitad: ~15 logos
    const logosFirstHalf = todosLosLogos.slice(0, 15)

    // Segunda mitad: ~15 logos
    const logosSecondHalf = todosLosLogos.slice(15)

    return (
        <article>
            <h2 className="360:text-[1.1rem] 393:text-[1.15rem] 430:text-[1.2rem] 768:text-[1.35rem] 834:text-[1.45rem] 1024:text-[1.6rem] 1200:text-[1.75rem] 1280:text-[1.85rem] 1366:text-[1.95rem] 1440:text-[2.1rem] 1536:text-[2.3rem] 1728:text-[2.55rem] 1920:text-[3rem] font-semibold tracking-tighter leading-tight text-center mb-12 px-4 text-balance">
                Clientes y Proveedores que confían en <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-black up">Grupo Nelson</span> para el
                Desarrollo de Naves y Parques Industriales en Mexicali.
            </h2>

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

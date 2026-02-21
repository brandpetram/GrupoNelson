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
        { src: "logo-gulfstream.svg", key: "13" },
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
    ]

    // Primera mitad: 12 logos
    const logosFirstHalf = todosLosLogos.slice(0, 12)

    // Segunda mitad: 12 logos
    const logosSecondHalf = todosLosLogos.slice(12, 24)

    return (
        <article>
            <p className="small">
                Nuestros clientes confían en nosotros para sus proyectos industriales.
            </p>

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

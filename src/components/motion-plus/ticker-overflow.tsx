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
    return (
        <article>
            <p className="small">
                Nuestros clientes confían en nosotros para sus proyectos industriales.
            </p>
            <Ticker
                items={[
                    <LogoCliente src="logo-accuride.svg" key="1" />,
                    <LogoCliente src="logo-air-liquide.svg" key="2" />,
                    <LogoCliente src="logo-gulfstream.svg" key="3" />,
                    <LogoCliente src="logo-honeywell.svg" key="4" />,
                    <LogoCliente src="logo-ivemsa.svg" key="5" />,
                    <LogoCliente src="logo-mohawk.svg" key="6" />,
                ]}
                className="ticker"
            />
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
        /* body {
          overflow: hidden;
        } */

        #sandbox {
          align-items: center;
        }

        p code {
          color: var(--text);
        }

        .ticker {
          width: 100%;
          max-width: none;
        }

        article {
           box-sizing: border-box;
           width: 100%;
           padding: 20px;
           display: flex;
           flex-direction: column;
           gap: 50px;
           align-items: center;
        }

        .logo-cliente {
           height: 100px;
           object-fit: contain;
        }
      `}
        </style>
    )
}

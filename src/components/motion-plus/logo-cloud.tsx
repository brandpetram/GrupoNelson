"use client"

import { motion } from "motion/react"

function LogoCliente({ src }: { src: string }) {
    return (
        <motion.img
            className="h-20 object-contain w-full max-w-[250px]"
            src={`/logos-clientes/${src}`}
            alt={"Logo cliente"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        />
    )
}

export default function LogoCloud() {
    // Todos los logos disponibles
    const todosLosLogos = [
        "logo-accuride.svg",
        "logo-baxter.svg",
        "logo-belvedere-maletti.svg",
        "logo-cornell-dubilier.svg",
        "logo-creation-technologies.svg",
        "logo-dentsply.svg",
        "logo-dhl.svg",
        "logo-direct-pack.svg",
        "logo-gameloft.svg",
        "logo-general-dynamics.svg",
        "logo-goodrich.svg",
        "logo-gulfstream.svg",
        "logo-hirsh-industries.svg",
        "logo-honeywell.svg",
        "logo-intuitive.svg",
        "logo-ivemsa.svg",
        "logo-jonathan.svg",
        "logo-liebert.svg",
        "logo-mohawk.svg",
        "logo-psf.svg",
        "logo-rheem.svg",
        "logo-sds-sybron-dental-specialities.svg",
        "logo-utc-aerospace-systems.svg",
        "logo-air-liquide.svg",
    ]

    return (
        <section className="w-full py-20 px-4 xl:hidden">
            <div className="mx-auto">
                <p className="text-center mb-12 text-lg font-semibold">
                    Nuestros clientes confían en nosotros para sus proyectos industriales.
                </p>

                {/* Grid responsive: 1 col en mobile, 2 cols en tablet, hidden en desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 place-items-center divide-y md:divide-y md:divide-x divide-gray-100">
                    {todosLosLogos.map((logo, index) => (
                        <div key={index} className="w-full py-8 px-4 flex justify-center">
                            <LogoCliente src={logo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

import { motion } from "motion/react"

function LogoCliente({ src, isBig = false }: { src: string; isBig?: boolean }) {
    const sizeClass = isBig ? "h-32 w-32" : "h-20 object-contain w-full max-w-[250px]"

    return (
        <motion.img
            className={`${sizeClass} object-contain bg-transparent`}
            src={`/logos-clientes/${src}`}
            alt={"Logo cliente"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: "transparent" }}
        />
    )
}

export default function LogoCloud() {
    // Todos los logos disponibles
    const todosLosLogos = [
        "logo-honeywell-2.svg",
        "logo-dhl-2.svg",
        "logo-gulfstream-2.svg",
        "logo-general-dynamics-2.svg",
        "logo-baxter-2.svg",
        "logo-air-liquide-2.svg",
        "logo-utc-aerospace-systems-3.svg",
        "logo-goodrich-2.svg",
        "logo-dentsply-2.svg",
        "logo-rheem-2.svg",
        "logo-intuitive-2.svg",
        "logo-liebert-3.svg",
        "logo-sds-sybron-dental-specialities-2.svg",
        "logo-gameloft-2.svg",
        "logo-cornell-dubilier-2.svg",
        "logo-accuride-2.svg",
        "logo-mohawk-2.svg",
        "logo-creation-technologies-2.svg",
        "logo-direct-pack-2.svg",
        "logo-hirsh-industries-2.svg",
        "logo-ivemsa-2.svg",
        "logo-jonathan-2.svg",
        "logo-psf-2.svg",
        "logo-vertiv-2.svg",
        "logo-aqua-lung-2.svg",
        "logo-celestica-3.svg",
        "logo-garret-2.svg",
        "logo-fastenal-2.svg",
    ]

    return (
        <section className="w-full mt-48 py-20 px-4">
            <div className="mx-auto">
                <h2 className="360:text-[2rem] 393:text-[2rem] 430:text-[2rem] 768:text-[1.35rem] 834:text-[1.45rem] 1024:text-[1.6rem]  font-medium tracking-tighter leading-tight text-center mb-12 px-4 text-balance">
                    Clientes y Proveedores que confían en <span className="font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-black up">Grupo Nelson</span> para el
                    Desarrollo de Naves y Parques Industriales en Mexicali.
                </h2>

                {/* Grid responsive: 1 col en mobile, 2 cols en tablet, hidden en desktop */}
                <div className="grid grid-cols-2 gap-0 place-items-center divide-y divide-x divide-gray-200">
                    {todosLosLogos.map((logo, index) => {
                        const isBig = ["logo-rheem.svg", "logo-psf.svg", "logo-sds-sybron-dental-specialities.svg"].includes(logo)
                        return (
                            <div key={index} className="w-full py-8 px-4 flex justify-center">
                                <LogoCliente src={logo} isBig={isBig} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

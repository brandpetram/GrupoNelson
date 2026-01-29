'use client'

import { motion } from 'motion/react'
import React from 'react'

interface BigNumberConProps {
  imageSrc: string
  imageAlt: string
  number: React.ReactNode
  title: React.ReactNode
  subtitle: React.ReactNode
}

export function BigNumberConProps({
  imageSrc,
  imageAlt,
  number,
  title,
  subtitle
}: BigNumberConProps) {
  return (
    <div className="w-full mt-0 overflow-hidden relative z-0">
      <div className="relative">
        {/* Imagen full width */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover aspect-1/2 md:aspect-2/1"
        />

        {/* Texto overlay derecha */}
        <div className="absolute inset-0 flex place-items-end md:items-center justify-end">
          <motion.div
            className="flex flex-col bg-white/70 md:bg-white/90 px-8 py-12 md:rounded-lg max-w-3xl"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.15, 1] }}
          >
            {/* +200 */}
            <h2
              className="text-right text-7xl md:text-[6rem] 1200:text-[10rem] 1366:text-[12rem] font-black leading-none tracking-tighter bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            >
              {number}
            </h2>

            {/* Millones de productos al Año */}
            <h3
              className="-mt-2 1200:-mt-3 text-right text-4xl md:text-[2.5rem] 1200:text-[4rem] 1728:text-7xl font-bold leading-none md:leading-10 1200:leading-13 tracking-tighter text-gray-900"
            >
              {title}
            </h3>

            {/* Subtítulo */}
            <p
              className="text-right mt-1 md:mt-5 1200:mt-5 text-lg md:text-xl lg:text-2xl 1728:text-3xl text-gray-600 leading-none"
            >
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function BigNumberLeft({
  imageSrc,
  imageAlt,
  number,
  title,
  subtitle
}: BigNumberConProps) {
  return (
    <div className="w-full mt-0 overflow-hidden relative z-0">
      <div className="relative">
        {/* Imagen full width invertida */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover aspect-1/2 md:aspect-2/1 scale-x-[-1]"
        />

        {/* Texto overlay izquierda */}
        <div className="absolute inset-0 flex place-items-end md:items-center justify-start">
          <motion.div
            className="flex flex-col bg-white/70 md:bg-white/90 px-8 py-12 md:rounded-lg max-w-3xl"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.15, 1] }}
          >
            {/* +200 */}
            <h2
              className="text-left text-7xl md:text-[10rem] 1200:text-[15rem] 1366:text-[17rem] font-black leading-none tracking-tighter bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            >
              {number}
            </h2>

            {/* Millones de productos al Año */}
            <h3
              className="-mt-2 1200:-mt-3 text-left text-4xl md:text-[3rem] 1200:text-[5rem] 1728:text-7xl  font-bold leading-none md:leading-10 1200:leading-16 tracking-tighter text-gray-900"
            >
              {title}
            </h3>

            {/* Subtítulo */}
            <p
              className="text-left mt-1 md:mt-5 1200:mt-5 text-lg md:text-xl lg:text-2xl 1728:text-3xl text-gray-600 leading-none"
            >
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

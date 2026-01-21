'use client'

import { motion } from 'motion/react'
import React from 'react'

interface BigNumberProps {
  imageSrc: string
  imageAlt: string
  number: React.ReactNode
  title: React.ReactNode
  subtitle: React.ReactNode
}

export function BigNumber({
  imageSrc,
  imageAlt,
  number,
  title,
  subtitle
}: BigNumberProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: {
      x: 100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <div className="w-full mt-0 overflow-hidden">
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* +200 */}
            <motion.h2
              className="text-right text-7xl md:text-[6rem] 1200:text-[10rem] 1366:text-[12rem] font-black leading-none tracking-tighter bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              {number}
            </motion.h2>

            {/* Millones de productos al Año */}
            <motion.h3
              className="-mt-2 1200:-mt-3 text-right text-4xl md:text-[2.5rem] 1200:text-[4rem] 1728:text-7xl font-bold leading-none md:leading-10 1200:leading-13 tracking-tighter text-gray-900"
              variants={itemVariants}
            >
              {title}
            </motion.h3>

            {/* Subtítulo */}
            <motion.p
              className="text-right mt-1 md:mt-5 1200:mt-5 text-lg md:text-xl lg:text-2xl 1728:text-3xl text-gray-600 leading-none"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
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
}: BigNumberProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <div className="w-full mt-0 overflow-hidden">
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* +200 */}
            <motion.h2
              className="text-left text-7xl md:text-[10rem] 1200:text-[15rem] 1366:text-[17rem] font-black leading-none tracking-tighter bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              {number}
            </motion.h2>

            {/* Millones de productos al Año */}
            <motion.h3
              className="-mt-2 1200:-mt-3 text-left text-4xl md:text-[3rem] 1200:text-[5rem] 1728:text-7xl  font-bold leading-none md:leading-10 1200:leading-16 tracking-tighter text-gray-900"
              variants={itemVariants}
            >
              {title}
            </motion.h3>

            {/* Subtítulo */}
            <motion.p
              className="text-left mt-1 md:mt-5 1200:mt-5 text-lg md:text-xl lg:text-2xl 1728:text-3xl text-gray-600 leading-none"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

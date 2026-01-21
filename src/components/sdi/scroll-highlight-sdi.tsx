'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

interface SDIWord {
  text: string
}

const sdiWords: SDIWord[] = [
  { text: 'Desarrollo' },
  { text: 'Construcción' },
  { text: 'Infraestructura' },
  { text: 'Ubicación Estratégica' },
  { text: 'Innovación' },
  { text: 'Experiencia' },
  { text: 'Sostenibilidad' },
  { text: 'Calidad' },
  { text: 'Confiabilidad' },
  { text: 'Excelencia' },
  { text: 'Built to Suit' },
  { text: 'Llave en Mano' },
  { text: 'Arrendamiento' },
  { text: 'Terrenos' },
  { text: 'Parques Industriales' },
]

function ScrollHighlightItem({
  word,
  index,
  isHighlighted,
  onHighlight,
}: {
  word: SDIWord
  index: number
  isHighlighted: boolean
  onHighlight: (index: number) => void
}) {
  return (
    <motion.li
      className="sdi-scroll-item"
      initial={false}
      animate={{
        opacity: isHighlighted ? 1 : 0.3,
        scale: isHighlighted ? 1.02 : 1,
      }}
      transition={{
        duration: 0.1,
        ease: 'linear',
      }}
      onViewportEnter={() => onHighlight(index)}
      viewport={{
        /**
         * Crear un área de intersección un poco más abajo en la pantalla
         * -50% 0px -49% 0px funcionaría para el centro de la pantalla
         */
        margin: '-28% 0px -68% 0px',
        amount: 'some',
      }}
    >
      <div className="sdi-scroll-word-container">
        <span className="sdi-scroll-prefix">ES</span>
        <span className="sdi-scroll-word">{word.text}</span>
      </div>
    </motion.li>
  )
}

export function ScrollHighlightSDI() {
  const [activeWord, setActiveWord] = useState<number | null>(null)

  return (
    <div className="sdi-scroll-container">
      <h1 className="sdi-scroll-title">GRUPO NELSON</h1>
      <ul className="sdi-scroll-list">
        {sdiWords.map((word, index) => (
          <ScrollHighlightItem
            key={word.text}
            word={word}
            index={index}
            isHighlighted={activeWord === index}
            onHighlight={() => setActiveWord(index)}
          />
        ))}
      </ul>

      <Stylesheet />
    </div>
  )
}

/**
 * ==============   Estilos   ================
 */

function Stylesheet() {
  return (
    <style>
      {`
        .sdi-scroll-container {
          padding: 300px 20px 20vh;
          display: flex;
          gap: 80px;
        }

        .sdi-scroll-title {
          font-size: 96px;
          line-height: 1;
          font-weight: 900;
          margin: 0;
          padding: 0;
          text-align: center;
          position: sticky;
          top: 140px;
          text-transform: uppercase;
          flex: 0 0 200px;
          transform: rotate(-90deg);
          height: fit-content;
          background: linear-gradient(to bottom, rgb(37, 99, 235), rgb(14, 165, 233));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.05em;
        }

        .sdi-scroll-list {
          padding: 50vh 0;
          list-style: none;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }

        .sdi-scroll-item {
          padding: 4rem 0;
          will-change: opacity;
          margin: 0;
        }

        .sdi-scroll-word-container {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .sdi-scroll-prefix {
          font-size: clamp(0.875rem, 2.5vw, 1.5rem);
          font-weight: 900;
          opacity: 0.6;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .sdi-scroll-word {
          font-size: clamp(1.75rem, 6.5vw, 5rem);
          font-weight: 700;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: -0.05em;
        }

        @media (max-width: 768px) {
          .sdi-scroll-container {
            padding: 150px 10px 20vh;
            gap: 10px;
          }

          .sdi-scroll-title {
            font-size: 28px;
            flex: 0 0 60px;
            top: 80px;
          }

          .sdi-scroll-list {
            padding: 50vh 10px;
          }

          .sdi-scroll-item {
            padding: 2rem 0;
          }

          .sdi-scroll-word {
            font-size: clamp(1.5rem, 9vw, 3rem);
          }

          .sdi-scroll-prefix {
            font-size: clamp(0.75rem, 2vw, 1rem);
          }
        }
      `}
    </style>
  )
}

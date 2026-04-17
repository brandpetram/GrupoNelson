'use client'

import { useState, useEffect } from 'react'

interface TypewriterTipoProps {
  words: string[]
}

export function TypewriterTipo({ words }: TypewriterTipoProps) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const speed = isDeleting ? 40 : 80
    const pause = !isDeleting && displayed === word ? 2000 : isDeleting && displayed === '' ? 300 : speed

    const timer = setTimeout(() => {
      if (!isDeleting && displayed === word) {
        setIsDeleting(true)
      } else if (isDeleting && displayed === '') {
        setIsDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else if (isDeleting) {
        setDisplayed(word.slice(0, displayed.length - 1))
      } else {
        setDisplayed(word.slice(0, displayed.length + 1))
      }
    }, pause)

    return () => clearTimeout(timer)
  }, [displayed, isDeleting, index, words])

  return <span>{displayed}<span className="animate-pulse">|</span></span>
}

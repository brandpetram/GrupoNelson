'use client'

import { useState, useEffect } from 'react'
import { CuadritosLluvia } from '@/components/ui/brandpetram/cuadritos-lluvia'

export interface StatsGridStat {
  value: string
  label: string
}

interface StatsGridBPGammaProps {
  stats?: StatsGridStat[]
  editorial?: string
  youtubeLabel?: string
  lang?: 'en' | 'es'
}

const defaultStatsEs: StatsGridStat[] = [
  { value: '60+', label: 'años de trayectoria\nen la industria' },
  { value: '4M+', label: 'pies cuadrados\ndesarrollados' },
  { value: '30+', label: 'corporaciones\ninternacionales' },
  { value: '5', label: 'parques industriales\nen Mexicali' },
  { value: '3', label: 'generaciones\nde familia Nelson' },
  { value: '80%', label: 'retención\nde clientes' },
  { value: '75+', label: 'proyectos\nconstruidos' },
  { value: '4', label: 'empresas\nFortune 500' },
]

const defaultStatsEn: StatsGridStat[] = [
  { value: '60+', label: 'years of experience\nin the industry' },
  { value: '4M+', label: 'square feet\ndeveloped' },
  { value: '30+', label: 'international\ncorporations' },
  { value: '5', label: 'industrial parks\nin Mexicali' },
  { value: '3', label: 'generations\nof the Nelson family' },
  { value: '80%', label: 'client retention\nrate' },
  { value: '75+', label: 'projects\nbuilt' },
  { value: '4', label: 'Fortune 500\ncompanies' },
]

export function StatsGridBPGamma({
  stats,
  editorial,
  youtubeLabel,
  lang = 'es',
}: StatsGridBPGammaProps = {}) {
  const _stats = stats ?? (lang === 'en' ? defaultStatsEn : defaultStatsEs)
  const _editorial = editorial ?? (lang === 'en'
    ? 'Three generations serving world-class international companies in Mexicali.'
    : 'Tres generaciones al servicio de empresas internacionales de clase mundial en Mexicali.')
  const _youtubeLabel = youtubeLabel ?? (lang === 'en' ? 'Watch on YouTube' : 'Ver en YouTube')
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setShowVideo(true)
    } else {
      const handleLoad = () => setShowVideo(true)
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <section data-component="StatsGridBPGamma" data-component-file="src/components/brandpetram/stats-grid-bp-gamma.tsx" data-component-props="false" className="relative py-16 sm:py-24">
      {/* Dot pattern — lado izquierdo */}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 w-32 768:w-40 1200:w-48 1536:w-56 h-48 768:h-64 1200:h-80 1536:h-96 pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="stats-gamma-dots-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <pattern
            id="stats-gamma-dot-pattern-left"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="url(#stats-gamma-dots-left)" />
          </pattern>
        </defs>
        <rect fill="url(#stats-gamma-dot-pattern-left)" width="100%" height="100%" />
      </svg>

      {/* Dot pattern — lado derecho */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-32 768:w-40 1200:w-48 1536:w-56 h-48 768:h-64 1200:h-80 1536:h-96 pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="stats-gamma-dots-right" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <pattern
            id="stats-gamma-dot-pattern-right"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="url(#stats-gamma-dots-right)" />
          </pattern>
        </defs>
        <rect fill="url(#stats-gamma-dot-pattern-right)" width="100%" height="100%" />
      </svg>

      {/* Cuadro grande — sobre el borde superior del bloque azul, lado derecho */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-12 768:right-24 1200:right-32 w-64 h-64 768:w-88 768:h-88 1200:w-104 1200:h-104 bg-gray-200 pointer-events-none z-0"
      />

      {/* CuadritosLluvia — pegados al bottom, cayendo hacia el siguiente componente */}
      <div className="absolute bottom-0 right-16 768:right-32 1200:right-48 translate-y-1/2 pointer-events-none z-10">
        <CuadritosLluvia />
      </div>

      {/* Bloque principal */}
      <div className="relative z-1 mx-auto w-11/12 rounded-xs bg-blue-700 py-24 sm:py-32 overflow-hidden">
        {/* Dot pattern — esquina top-right, dentro del bloque */}
        <svg
          aria-hidden="true"
          className="absolute top-0 right-0 w-40 768:w-56 1200:w-72 1536:w-88 h-40 768:h-56 1200:h-72 1536:h-88 pointer-events-none"
        >
          <defs>
            <pattern
              id="stats-gamma-dot-inner"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="#dbeafe" />
            </pattern>
          </defs>
          <rect fill="url(#stats-gamma-dot-inner)" width="100%" height="100%" opacity="0.3" />
        </svg>

        <div className="relative px-8 768:px-12 1200:px-16 1536:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
            {/* Stats — 2 columnas, lado izquierdo */}
            <dl className="grid grid-cols-2 gap-x-8 gap-y-16 lg:w-[45%]">
              {_stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <dt className="text-lg 768:text-xl 1200:text-2xl leading-none text-blue-100">{stat.label.split('\n').map((line, j) => <span key={j}>{j > 0 && <br />}{line}</span>)}</dt>
                  <dd className="order-first text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Columna derecha — texto editorial + video */}
            <div className="flex flex-col gap-10 lg:w-[55%]">
              <p className="text-[1.75rem] 768:text-[2rem] 1024:text-[2.25rem] 1200:text-[2.25rem] 1366:text-[2.5rem] 1536:text-[2.75rem] 1728:text-[3rem] 1920:text-[3.25rem] font-light tracking-wider leading-tight text-white text-balance">
                {_editorial}
              </p>

              {/* Video — se carga después que la página */}
              <div className="relative w-full aspect-video rounded-xs overflow-hidden bg-blue-800">
                {showVideo && (
                  <video
                    src="/video/trayectoria-grupo-nelson-mexicali-15s.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <a
                href="https://youtu.be/2DqIzeauFZk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-lg font-medium group"
              >
                {_youtubeLabel}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

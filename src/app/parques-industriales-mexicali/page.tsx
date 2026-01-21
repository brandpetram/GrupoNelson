'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { Building2 } from 'lucide-react'

export default function ParquesIndustrialesMexicaliPage() {
  const parques = [
    {
      slug: 'nelson-ii',
      nombre: 'Parque Industrial Nelson II',
      descripcion: 'Parque industrial de primer nivel con ubicación estratégica',
      ubicacion: 'Venustiano Carranza #350, Mexicali B.C.',
      naves: 3,
      imagen: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-11.jpg'
    },
    {
      slug: 'nelson-i',
      nombre: 'Parque Industrial Nelson I',
      descripcion: 'Centro industrial establecido con más de 50 años de historia',
      ubicacion: 'Mexicali B.C.',
      naves: null,
      imagen: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-249.jpg'
    },
    {
      slug: 'vigia-i',
      nombre: 'Parque Industrial El Vigía I',
      descripcion: 'Ubicación estratégica con infraestructura completa',
      ubicacion: 'Mexicali B.C.',
      naves: 16,
      imagen: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-253.jpg'
    },
    {
      slug: 'vigia-ii',
      nombre: 'Parque Industrial El Vigía II',
      descripcion: 'Instalaciones modernas con tecnología de punta',
      ubicacion: 'Carretera a San Luis R.C. KM 12, Mexicali B.C.',
      naves: 2,
      imagen: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Parques Industriales en Mexicali
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Más de 60 años desarrollando infraestructura industrial de clase mundial en la región fronteriza.
            </p>
          </div>
        </div>
      </section>

      {/* Parques Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parques.map((parque) => (
              <Link
                key={parque.slug}
                href={`/parques-industriales-mexicali/${parque.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Imagen */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={parque.imagen}
                    alt={parque.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {parque.nombre}
                      </h2>
                      {parque.naves && (
                        <p className="text-sm text-muted-foreground">
                          {parque.naves} {parque.naves === 1 ? 'nave' : 'naves'} disponibles
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {parque.descripcion}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    📍 {parque.ubicacion}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

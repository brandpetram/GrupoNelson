'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { FileText, Image, Book } from 'lucide-react'

export default function ProyectoPage() {
  const sections = [
    {
      title: 'Bitácora de Avances',
      description: 'Registro detallado de todo el trabajo realizado en el proyecto',
      icon: FileText,
      href: '/proyecto/bitacora',
      color: 'bg-blue-500',
    },
    {
      title: 'Fotografías',
      description: 'Galería completa de fotografías reales, profesionales y de parques industriales',
      icon: Image,
      href: '/proyecto/fotografias',
      color: 'bg-green-500',
    },
    {
      title: 'Documentación',
      description: 'PDFs y documentos técnicos de los parques industriales',
      icon: Book,
      href: '/proyecto/documentacion',
      color: 'bg-purple-500',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Portal del Proyecto
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acceso a toda la información, avances y recursos del proyecto web de Grupo Nelson
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`${section.color} absolute top-0 left-0 w-full h-1`} />

                  <div className="mb-4">
                    <div className={`${section.color} w-16 h-16 rounded-xl flex items-center justify-center bg-opacity-10 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-medium text-primary">
                    Ver más
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

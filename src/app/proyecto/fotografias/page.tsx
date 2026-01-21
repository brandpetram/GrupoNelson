'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function FotografiasPage() {
  const [activeTab, setActiveTab] = useState<'reales' | 'profesionales' | 'parques'>('reales')

  // Generar lista de fotos 1-461
  const fotosGenerales = Array.from({ length: 461 }, (_, i) => {
    const num = i + 1
    return {
      num,
      path: `/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-${num}.jpg`,
      isReal: num <= 250,
    }
  })

  const fotosReales = fotosGenerales.filter((f) => f.isReal)
  const fotosProfesionales = fotosGenerales.filter((f) => !f.isReal)

  // Fotos de parques industriales
  const fotosParques = {
    'Nelson II': [
      'Specs-Nave-Industrial-1-Nelson-II-002.jpg',
      'Specs-Nave-Industrial-2-Nelson-II-002.jpg',
      'Specs-Nave-Industrial-3-Nelson-II-002.jpg',
    ],
    'El Vigía': [
      'Specs-Nave-Industrial-17B-Vigia-002.jpg',
      'Specs-Nave-Industrial-18-19-Vigia-002.jpg',
      'Specs-Nave-Industrial-2-4-Vigia-002.jpg',
      'Specs-Nave-Industrial-24-Vigia-002.jpg',
      'Specs-Nave-Industrial-26-27-Vigia-002.jpg',
      'Specs-Nave-Industrial-26-Vigia-002.jpg',
      'Specs-Nave-Industrial-29-33-Vigia-002.jpg',
      'Specs-Nave-Industrial-4-Vigia-002.jpg',
      'Specs-Nave-Industrial-5-6-Vigia-002.jpg',
      'Specs-Nave-Industrial-55-56-Vigia-002.jpg',
      'Specs-Nave-Industrial-55-57-Vigia-002.jpg',
    ],
    'El Vigía II': [
      'Specs-Nave-Industrial-1-Vigia-II-002.jpg',
      'Specs-Nave-Industrial-Nave-Industrial-Inv-Vigia-II-Feb-2024-000.jpg',
    ],
  }

  const tabs = [
    { id: 'reales' as const, label: 'Fotos Reales', count: 250 },
    { id: 'profesionales' as const, label: 'Fotos Profesionales', count: 211 },
    { id: 'parques' as const, label: 'Parques Industriales', count: 16 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/proyecto"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Portal del Proyecto
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fotografías del Proyecto</h1>
            <p className="text-xl text-muted-foreground">
              Catálogo completo de fotografías organizadas por categoría
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b mb-8">
            <div className="flex gap-2 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors',
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  )}
                >
                  {tab.label}
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-muted">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenido por tab */}
          {activeTab === 'reales' && (
            <div>
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border">
                <h2 className="font-bold mb-2">Fotografías Reales de Grupo Nelson (1-250)</h2>
                <p className="text-sm text-muted-foreground">
                  Extraídas de 86 videos proporcionados por el cliente. Se generó 1 captura por
                  segundo, resultando en ~1,600 imágenes. Estas 250 fotografías fueron
                  cuidadosamente seleccionadas tras revisión manual una por una.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fotosReales.reverse().map((foto) => (
                  <div key={foto.num} className="group relative border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={foto.path}
                        alt={`Foto ${foto.num}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/90 text-white px-4 py-2 rounded-full text-lg font-bold">
                        #{foto.num}
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-base text-muted-foreground">
                        parque-industrial-mexicali-{foto.num}.jpg
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profesionales' && (
            <div>
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border">
                <h2 className="font-bold mb-2">Fotografías Profesionales (251-461)</h2>
                <p className="text-sm text-muted-foreground">
                  211 fotografías de stock profesional, cuidadosamente seleccionadas y adquiridas
                  para elevar la comunicación comercial de Grupo Nelson. Estas imágenes mantienen
                  similitud con las operaciones reales pero con calidad fotográfica superior.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fotosProfesionales.reverse().map((foto) => (
                  <div key={foto.num} className="group relative border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={foto.path}
                        alt={`Foto ${foto.num}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/90 text-white px-4 py-2 rounded-full text-lg font-bold">
                        #{foto.num}
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-base text-muted-foreground">
                        parque-industrial-mexicali-{foto.num}.jpg
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'parques' && (
            <div>
              <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border">
                <h2 className="font-bold mb-2">Fotografías de Parques Industriales</h2>
                <p className="text-sm text-muted-foreground">
                  Imágenes extraídas de los PDFs técnicos de cada parque industrial. Algunas fueron
                  procesadas con Upscayl para mejorar su resolución. El nombre de cada archivo
                  indica la nave industrial correspondiente.
                </p>
              </div>

              <div className="space-y-16">
                {Object.entries(fotosParques).map(([parque, fotos]) => {
                  const folder =
                    parque === 'Nelson II'
                      ? 'parque-industrial-nelson-2-mexicali'
                      : parque === 'El Vigía'
                        ? 'parque-industrial-el-vigia-mexicali'
                        : 'parque-industrial-el-vigia-2-mexicali'

                  return (
                    <div key={parque}>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
                        {parque}
                        <span className="text-base font-normal text-muted-foreground px-4 py-2 bg-muted rounded-full">
                          {fotos.length} fotos
                        </span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {fotos.map((foto, idx) => (
                          <div key={idx} className="border rounded-lg overflow-hidden bg-card hover:shadow-xl transition-shadow">
                            <div className="aspect-video bg-muted relative">
                              <img
                                src={`/${folder}/${foto}`}
                                alt={foto}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-5">
                              <p className="text-lg font-medium break-all mb-2">{foto}</p>
                              <p className="text-base text-muted-foreground">{folder}/</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}

                <div className="p-6 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border">
                  <p className="text-base">
                    <strong>Nota:</strong> El Parque Industrial Nelson I no cuenta con
                    documentación PDF ni fotografías disponibles por el momento.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

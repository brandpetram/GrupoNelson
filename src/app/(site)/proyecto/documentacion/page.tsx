'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { ArrowLeft, FileText, Download, AlertCircle } from 'lucide-react'

export default function DocumentacionPage() {
  const parques = [
    {
      nombre: 'Parque Industrial Nelson II',
      folder: 'nelson-ii',
      pdfs: [
        { nombre: 'Specs Nave 1 Nelson II.pdf', archivo: 'Specs Nave 1 Nelson II.pdf' },
        { nombre: 'Specs Nave 2 Nelson II.pdf', archivo: 'Specs Nave 2 Nelson II.pdf' },
        { nombre: 'Specs Nave 3 Nelson II.pdf', archivo: 'Specs Nave 3 Nelson II.pdf' },
      ],
      disponible: true,
    },
    {
      nombre: 'Parque Industrial El Vigía',
      folder: 'vigia',
      pdfs: [
        { nombre: 'Specs Nave 17B Vigia.pdf', archivo: 'Specs Nave 17B Vigia.pdf' },
        { nombre: 'Specs Nave 18-19 Vigia.pdf', archivo: 'Specs Nave 18-19 Vigia.pdf' },
        { nombre: 'Specs Nave 2-4 Vigia.pdf', archivo: 'Specs Nave 2-4 Vigia.pdf' },
        { nombre: 'Specs Nave 24 Vigia.pdf', archivo: 'Specs Nave 24 Vigia.pdf' },
        { nombre: 'Specs Nave 26 Vigia.pdf', archivo: 'Specs Nave 26 Vigia.pdf' },
        { nombre: 'Specs Nave 26-27 Vigia.pdf', archivo: 'Specs Nave 26-27 Vigia.pdf' },
        { nombre: 'Specs Nave 29-33 Vigia.pdf', archivo: 'Specs Nave 29-33 Vigia.pdf' },
        { nombre: 'Specs Nave 4 Vigia.pdf', archivo: 'Specs Nave 4 Vigia.pdf' },
        { nombre: 'Specs Nave 5-6 Vigia.pdf', archivo: 'Specs Nave 5-6 Vigia.pdf' },
        { nombre: 'Specs Nave 55-56 Vigia.pdf', archivo: 'Specs Nave 55-56 Vigia.pdf' },
        { nombre: 'Specs Nave 55-57 Vigia.pdf', archivo: 'Specs Nave 55-57 Vigia.pdf' },
      ],
      disponible: true,
    },
    {
      nombre: 'Parque Industrial El Vigía II',
      folder: 'vigia-ii',
      pdfs: [
        { nombre: 'Specs Nave 1 Vigia II.pdf', archivo: 'Specs Nave 1 Vigia II.pdf' },
        {
          nombre: 'Specs Nave Nave Inv Vigia II-Feb 2024.pdf',
          archivo: 'Specs Nave Nave Inv Vigia II-Feb 2024.pdf',
        },
      ],
      disponible: true,
    },
    {
      nombre: 'Parque Industrial Nelson I',
      folder: null,
      pdfs: [],
      disponible: false,
    },
  ]

  const totalPDFs = parques.reduce((acc, p) => acc + p.pdfs.length, 0)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/proyecto"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Portal del Proyecto
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentación Técnica</h1>
            <p className="text-xl text-muted-foreground">
              PDFs de especificaciones de naves industriales por parque
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Total: {totalPDFs} documentos PDF</span>
            </div>
          </div>

          <div className="space-y-8">
            {parques.map((parque, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-8 bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{parque.nombre}</h2>
                    <p className="text-muted-foreground">
                      {parque.disponible ? (
                        <>
                          <span className="inline-flex items-center gap-2 text-green-600 dark:text-green-400">
                            <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></span>
                            {parque.pdfs.length} documento{parque.pdfs.length !== 1 ? 's' : ''}{' '}
                            disponible{parque.pdfs.length !== 1 ? 's' : ''}
                          </span>
                        </>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400">
                          <AlertCircle className="w-4 h-4" />
                          Sin documentación disponible
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {parque.disponible ? (
                  <div className="space-y-3">
                    {parque.pdfs.map((pdf, pdfIdx) => (
                      <div
                        key={pdfIdx}
                        className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-sm font-medium truncate">{pdf.nombre}</span>
                        </div>
                        <Link
                          href={`/docs/${parque.folder}/${encodeURIComponent(pdf.archivo)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0"
                        >
                          <Download className="w-4 h-4" />
                          Ver PDF
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-sm text-amber-900 dark:text-amber-100">
                      <strong>Nota:</strong> Este parque industrial no cuenta con documentación PDF
                      disponible por el momento. Se recomienda contactar al cliente para solicitar
                      los documentos técnicos correspondientes.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border rounded-2xl bg-blue-50 dark:bg-blue-950/20">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Resumen de Documentación
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                • <strong>Nelson II:</strong> 3 PDFs (Naves 1, 2 y 3)
              </p>
              <p>
                • <strong>El Vigía:</strong> 11 PDFs (Múltiples naves)
              </p>
              <p>
                • <strong>El Vigía II:</strong> 2 PDFs
              </p>
              <p className="text-amber-700 dark:text-amber-400">
                • <strong>Nelson I:</strong> Sin documentación disponible
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

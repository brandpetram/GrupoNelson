import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Gracias | Grupo Nelson',
  robots: { index: false },
}

export default function GraciasPage() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <main className="min-h-screen flex items-center justify-center px-6 mt-20">
        <div className="text-center max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Mensaje enviado
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-none text-gray-900 dark:text-white mb-4">
            Gracias por contactarnos
          </h1>
          <p className="text-lg font-light tracking-wide text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            Recibimos tu mensaje. Nuestro equipo se pondrá en contacto contigo a la brevedad.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xs bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  )
}

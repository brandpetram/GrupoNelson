import Link from 'next/link'
import Header from '@/components/Header'
import Footer1 from '@/components/brandpetram/footer-1'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Página no encontrada</h1>
        <p className="mt-4 text-base text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <Link
          href="/es"
          className="mt-8 rounded-xs bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Volver al inicio
        </Link>
      </main>
      <Footer1 />
    </>
  )
}

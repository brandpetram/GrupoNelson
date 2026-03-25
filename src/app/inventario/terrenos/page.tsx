import type { Metadata } from 'next'
import TerrenosClient from './page-client'

export const metadata: Metadata = {
  title: 'Terrenos Disponibles | Grupo Nelson',
  description: 'Terrenos disponibles para desarrollo industrial en Mexicali, San Luis Río Colorado, Ensenada y San Luis Potosí.',
  alternates: { canonical: 'https://gruponelson.mx/inventario/terrenos' },
}

export default function TerrenosPage() {
  return <TerrenosClient />
}

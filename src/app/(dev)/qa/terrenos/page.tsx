import type { Metadata } from 'next'
import QaTerrenosClient from './qa-terrenos-client'

export const metadata: Metadata = {
  title: 'QA Terrenos — Validación de polígonos',
  robots: 'noindex, nofollow',
}

export default function QaTerrenosPage() {
  return <QaTerrenosClient />
}

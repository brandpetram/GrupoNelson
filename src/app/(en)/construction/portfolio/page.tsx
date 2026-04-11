import type { Metadata } from 'next'
import PortfolioClient from './page-client'

export const metadata: Metadata = {
  title: 'Project Portfolio',
  description: 'Complete track record of 75+ industrial and commercial projects delivered by Baumex Constructora since 1997.',
  alternates: { canonical: 'https://nelson.com.mx/construction/portfolio' },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}

import PortfolioClient from './page-client'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/portfolio',
  title: 'Project Portfolio',
  description: 'Complete track record of 75+ industrial and commercial projects delivered by In-House Construction since 1997.',
})

export default function PortfolioPage() {
  return <PortfolioClient />
}

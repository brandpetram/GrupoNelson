import { notFound } from "next/navigation"
import { getParkBySlug, parkSlugs } from "@/data/parks/parks-data"
import { FichaTecnicaParqueDinamica } from "@/components/brandpetram/ficha-tecnica-parque-dinamica"

export function generateStaticParams() {
  return parkSlugs.map((slug) => ({ slug }))
}

export default async function FichaTecnicaSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const park = getParkBySlug(slug)

  if (!park) notFound()

  return <FichaTecnicaParqueDinamica park={park} />
}

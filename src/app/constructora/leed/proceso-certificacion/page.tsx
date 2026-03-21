import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Proceso de Certificación LEED | Grupo Nelson Mexicali',
  description: 'Certificación LEED v4 BD+C para naves industriales en Mexicali. Del predesign al certificado GBCI con trazabilidad completa. Gulfstream 550K apuntando a LEED Gold. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/proceso-certificacion' },
}

export default function ProcesoCertificacionPage() {
  return (
    <LeedPageLayout
      titulo="Certifica tu nave industrial LEED en Mexicali — del predesign al certificado GBCI sin detener la obra"
      intro="Gulfstream 550K (52,200 m²) está en proceso de certificación LEED Gold — actualmente en 53-55 puntos (Silver), apuntando a Gold con 10 MW de paneles solares. Baumex gestiona el proceso completo: registro, Design Review, gestión de evidencias en construcción y Construction Review con trazabilidad en LEED Online."
      imageSrc="/leed/leed2-mexicali-nave-industrial-certificacion-bdc-3.jpeg"
      imageAlt="Proceso de certificación LEED v4 BD+C — Nave industrial Mexicali"
      parrafos={[
        'Asegura que cada decisión técnica de tu nave en Mexicali quede documentada en formato certificable desde el primer día. La certificación LEED no se obtiene al final de la obra — se gana o se pierde en las primeras semanas de diseño. Baumex alinea arquitectura, ingeniería MEP, sustentabilidad y construcción desde el predesign para que el proceso integrativo de LEED v4 BD+C se ejecute sin improvisar documentación.',
        'Cada crédito LEED requiere evidencia específica: memorias de cálculo, reportes de comisionamiento, certificados de materiales, registros de manejo de residuos, resultados de modelado energético. Cada evidencia tiene un formato y un momento preciso para generarse. En una nave de Mexicali donde el cronograma compite con la velocidad del nearshoring, un proceso LEED mal gestionado retrasa la entrega. Baumex certifica sin detener la obra.',
        'Obtén un certificado LEED que se sostiene ante inversionistas, inquilinos multinacionales y el propio GBCI. La calidad de la certificación depende de la calidad documental — y esa calidad se construye en cada fase del proyecto, no al final. Baumex ha ejecutado proyectos para Gulfstream, Honeywell y otras corporaciones Fortune 500 que exigen trazabilidad documental completa en cada fase constructiva.',
      ]}
      features={[
        {
          title: 'Proceso integrativo desde predesign',
          description: 'Arquitectura, MEP, sustentabilidad y construcción alineados desde el primer día. Cada decisión documentada en formato LEED Online.',
        },
        {
          title: 'Gulfstream 550K apuntando a LEED Gold',
          description: '52,200 m², 53-55 puntos actuales. 10 MW de paneles solares, FM Global, cubierta TPO, BRB antisísmicos.',
        },
        {
          title: 'Certificación que resiste auditoría',
          description: 'Trazabilidad completa: Design Review, gestión de evidencias en construcción y Construction Review ante GBCI.',
        },
      ]}
      subtituloSeccion="Certifica tu nave LEED en Mexicali con la constructora que ya está certificando la más grande de la ciudad"
      parrafoCierre="Acelera tu certificación LEED en Mexicali. Baumex gestiona el proceso completo — del registro al certificado GBCI — con la experiencia de estar certificando la nave industrial más grande de la ciudad. Solicita una consulta para tu proyecto."
      fuentes="USGBC LEED v4.1 BD+C (Building Design and Construction) · GBCI Certification Process · Datos de proyecto: Gulfstream 550K, Baumex (2024-2026)"
    />
  )
}

import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Proceso & Certificación LEED',
  description: 'Certificación LEED v4 BD+C sin improvisar documentación. Del predesign al certificado GBCI con trazabilidad completa en LEED Online. Grupo Nelson, Mexicali.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/proceso-certificacion' },
}

export default function ProcesoCertificacionPage() {
  return (
    <LeedPageLayout
      titulo="Proceso & Certificación LEED"
      intro="La certificación LEED no se obtiene al final de la obra; se gana o se pierde en las primeras semanas de diseño. El proceso integrativo que exige LEED v4 BD+C requiere que arquitectura, ingeniería MEP, consultoría de sustentabilidad y construcción estén alineados desde el predesign."
      imageSrc="/leed/leed2-mexicali-nave-industrial-certificacion-bdc-1.png"
      imageAlt="Proceso de certificación LEED v4 BD+C — Nave industrial Mexicali"
      parrafos={[
        'La Comisión Europea reconoció en 2025 la alineación entre LEED y el marco europeo Level(s), confirmando que el sistema de certificación cumple estándares de rigor documental comparables a los de la taxonomía verde de la Unión Europea. Ese nivel de exigencia no se improvisa: se domina con proceso.',
        'Cada crédito LEED requiere evidencia específica — memorias de cálculo, reportes de comisionamiento, certificados de materiales, registros de manejo de residuos, resultados de modelado energético — y cada evidencia tiene un formato y un momento preciso para generarse. Grupo Nelson ejecuta este proceso con la rigurosidad que exige el GBCI: registro del proyecto, revisión de diseño (Design Review), gestión de evidencias durante construcción, y revisión de construcción (Construction Review), con trazabilidad completa en LEED Online.',
        'El reporte del IFC de 2023 documenta que la transición a construcción verde en mercados emergentes puede reducir las emisiones de carbono de la cadena de construcción hasta en un 23%. En las naves industriales de Mexicali, donde el cronograma de construcción compite con la velocidad del nearshoring, un proceso LEED mal gestionado retrasa la entrega. Un proceso bien gestionado certifica sin detener la obra.',
      ]}
      features={[
        {
          title: 'Proceso integrativo desde predesign',
          description: 'Arquitectura, MEP, sustentabilidad y construcción alineados desde el primer día para que cada decisión técnica quede documentada en formato submittable ante el USGBC.',
        },
        {
          title: 'Trazabilidad completa en LEED Online',
          description: 'Registro del proyecto, Design Review, gestión de evidencias en construcción y Construction Review con documentación verificable en cada fase.',
        },
        {
          title: 'Certificación que resiste auditoría',
          description: 'Un certificado LEED que se sostiene ante inversionistas, inquilinos multinacionales y el propio GBCI — construido con calidad documental desde el primer submittal.',
        },
      ]}
      subtituloSeccion="Certifica sin detener la obra"
      parrafoCierre="Obtén un certificado LEED que se sostiene ante cualquier revisión. La diferencia entre una certificación sólida y una vulnerable está en la calidad de la documentación que la respalda, y esa calidad se construye en cada fase del proyecto, no al final."
      fuentes="European Commission / Green Forum, 'LEED Certification to Deepen Alignment with Level(s) and EU Taxonomy' (2025) · IFC/World Bank, 'Building Green: Sustainable Construction in Emerging Markets' (2023)"
    />
  )
}

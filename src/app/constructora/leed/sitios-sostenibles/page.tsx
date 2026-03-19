import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Sitios Sostenibles y Eficiencia Hídrica LEED | Grupo Nelson Mexicali',
  description: 'Naves industriales LEED en Mexicali con cubiertas SRI >78, captación pluvial y reducción del 40% en consumo de agua. Nelson II: tanque contraincendio de 360,000 galones. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/sitios-sostenibles' },
}

export default function SitiosSosteniblesPage() {
  return (
    <LeedPageLayout
      titulo="Reduce el consumo de agua un 40% en tu nave industrial LEED en Mexicali — región con estrés hídrico crítico"
      intro="Mexicali está en una de las regiones con mayor estrés hídrico de Norteamérica. Nelson II opera con tanque contraincendio de 360,000 galones y sistema centralizado que ahorra 60% del costo al cliente. Gulfstream 550K recupera el 90% del agua de condensación de sus 42 manejadoras. Cada litro cuenta — y cada litro recuperable se recupera."
      imageSrc="/leed/leed4-mexicali-nave-industrial-sitios-sostenibles-1.jpeg"
      imageAlt="Sitios sostenibles y eficiencia hídrica — Nave industrial LEED Mexicali"
      parrafos={[
        'Reduce la isla de calor en tu parque industrial de Mexicali con cubiertas reflectivas de SRI superior a 78 y pavimentos de alto albedo en estacionamientos y patios de maniobras. Las cubiertas reducen la temperatura superficial hasta 30°C, bajando la carga térmica del edificio y el efecto térmico sobre todo el parque. Gulfstream 550K opera con cubierta TPO con garantía de impermeabilización de 20 años.',
        'Aprovecha los más de 5,000 m² de cubierta de tu nave para captación pluvial. Aunque Mexicali recibe precipitación limitada, los eventos pluviales concentrados generan volúmenes recuperables. Combinados con fixtures sanitarios de ultra-bajo flujo, el consumo total de agua se reduce un 40% frente a una nave convencional. Nelson II cuenta con sistema contraincendio central con tanque de 360,000 galones — infraestructura que ya existe en el parque.',
        'Asegura eficiencia hídrica en tu nave industrial de Mexicali con la infraestructura que Grupo Nelson ya tiene instalada. El sistema contraincendio centralizado de Nelson II ahorra al inquilino el 60% del costo frente a sistemas individuales. La recuperación de agua de condensación de las manejadoras de HVAC reutiliza el recurso dentro del mismo edificio. Cada galón documentado suma créditos en la categoría de eficiencia hídrica de LEED.',
      ]}
      features={[
        {
          title: 'Cubiertas reflectivas SRI >78',
          description: 'Cubierta TPO que reduce temperatura superficial hasta 30°C. Gulfstream 550K: garantía de 20 años de impermeabilización.',
        },
        {
          title: 'Sistema contraincendio central — ahorro 60%',
          description: 'Nelson II: tanque de 360,000 galones centralizado. El inquilino ahorra 60% del costo frente a sistemas individuales.',
        },
        {
          title: 'Reducción del 40% en consumo de agua',
          description: 'Captación pluvial + fixtures ultra-bajo flujo + recuperación del 90% de agua de condensación de HVAC.',
        },
      ]}
      subtituloSeccion="Certifica LEED Water Efficiency en tu nave industrial de Mexicali con infraestructura ya instalada"
      parrafoCierre="Opera tu nave industrial en Mexicali con eficiencia hídrica que cumple créditos LEED y resuelve un riesgo operativo real: la dependencia del agua en una región donde el suministro no está garantizado. Nelson II ya tiene la infraestructura. Solicita una consulta para tu proyecto."
      fuentes="LEED v4.1 Water Efficiency Credits · Datos de infraestructura: Nelson II (tanque 360K gal, sistema centralizado) · Datos de proyecto: Gulfstream 550K (recuperación condensación 90%)"
    />
  )
}

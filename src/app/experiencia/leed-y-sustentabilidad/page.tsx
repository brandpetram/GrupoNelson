import type { Metadata } from 'next'
import Header from '@/components/Header'
import { HeroMarketing1 } from '@/components/brandpetram/hero-marketing-1'
import { SidebarSticky1 } from '@/components/brandpetram/sidebar-sticky-1'
import { CarruselLeed } from '@/components/brandpetram/carrusel-leed'
import { BigNumber } from '@/components/brandpetram/big-number'

export const metadata: Metadata = {
  title: 'LEED y Sustentabilidad | Experiencia | Grupo Nelson',
  description: 'Experiencia de Grupo Nelson en construcción de naves industriales con certificación LEED en Mexicali, Baja California. Más de 60 años construyendo en clima extremo.',
  alternates: { canonical: 'https://gruponelson.mx/experiencia/leed-y-sustentabilidad' },
}

export default function LeedYSustentabilidadPage() {
  return (
    <div className="">
      <Header variant={'light'} mobileVariant={'dark'} />

      {/* ══════════════════════════════════════════════════════════
          COPY COMERCIAL — LEED y Sustentabilidad (Puerta de Entrada)
          Ángulo: Resumen ejecutivo de los 7 pilares LEED. Cada pilar
          con datos clave y link implícito a la sub-página para profundizar.
          Fuente: Las 7 sub-páginas de /constructora/leed/ ya reescritas
          Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
          Status: BORRADOR — pendiente de aprobación
          ══════════════════════════════════════════════════════════ */}
      <div className="px-8 md:px-12 pt-20 pb-32">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Construye tu nave industrial LEED en Mexicali — Gulfstream 550K en proceso de certificación Gold
        </h1>

        <p className="text-xl leading-relaxed mb-12">
          52,200 m² con 10 MW de paneles solares, sistemas antisísmicos BRB, cubierta TPO
          con garantía de 20 años y certificación FM Global. La nave industrial más grande de Mexicali
          está en proceso de certificación LEED Gold (53-55 puntos actuales). Baumex, la constructora
          in-house de Grupo Nelson, gestiona los 7 pilares del proceso. Aquí están los resultados
          de cada uno.
        </p>

        <div className="flex flex-wrap gap-12 mb-24">
          <div><p className="text-4xl font-bold leading-none">52,200 m²</p><p className="text-muted-foreground">nave más grande de Mexicali</p></div>
          <div><p className="text-4xl font-bold leading-none">10 MW</p><p className="text-muted-foreground">paneles solares</p></div>
          <div><p className="text-4xl font-bold leading-none">Gold</p><p className="text-muted-foreground">certificación LEED objetivo</p></div>
          <div><p className="text-4xl font-bold leading-none">7</p><p className="text-muted-foreground">pilares LEED</p></div>
        </div>

        <hr className="border-border my-16" />

        {/* ── Pilar 1: Clima Extremo ── */}
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Clima Extremo: naves industriales LEED a +45°C en Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Envolvente térmica calibrada para el desierto sonorense: R-19 en muros, R-30 en cubierta,
          cubiertas reflectivas SRI mayor a 78 y sellado al 100% en muelles de carga. Gulfstream 550K opera
          con 3,200 toneladas de A/C de mínimo consumo y recuperación del 90% del agua de condensación.
          28 años construyendo en estas condiciones.
        </p>

        <hr className="border-border my-16" />

        {/* ── Pilar 2: Energía y Atmósfera ── */}
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Energía y Atmósfera: ahorro del 35-50% con 10 MW de paneles solares en naves industriales de Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          10 MW de paneles solares en 50,000 m² (cubierta + carports). 20 MW de capacidad eléctrica
          instalada, 50% energía solar limpia. Modelado energético desde fase conceptual con simulación
          específica para condiciones climáticas de Mexicali. Resultado documentado: ahorro del 35-50%
          frente a nave convencional.
        </p>

        <hr className="border-border my-16" />

        {/* ── Pilar 3: Sitios Sostenibles y Agua ── */}
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Sitios Sostenibles y Agua: reducción del 40% en consumo hídrico en naves industriales de Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Mexicali está en una de las regiones con mayor estrés hídrico de Norteamérica.
          Nelson II opera con tanque contraincendio de 360,000 galones centralizado (ahorra 60% al inquilino).
          Captación pluvial, fixtures de ultra-bajo flujo y recuperación de condensación de 42 manejadoras.
          Reducción total del 40% en consumo de agua frente a nave convencional.
        </p>

        <hr className="border-border my-16" />

        {/* ── Pilar 4: Calidad Ambiental Interior ── */}
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Calidad Ambiental Interior: materiales de bajo COV y ventilación ASHRAE 62.1 en Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Pinturas con compuestos orgánicos volátiles por debajo de 50 g/L, selladores por debajo de 250 g/L,
          pisos con certificación FloorScore. Ventilación diseñada conforme a ASHRAE 62.1 con filtración
          específica para polvo y partículas del desierto. Confort térmico controlado para operación
          industrial continua.
        </p>

        <hr className="border-border my-16" />

        {/* ── Pilar 5: Materiales y Recursos ── */}
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Materiales y Recursos: acero con EPD verificada y abastecimiento regional en Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Cada material estructural con Declaración Ambiental de Producto (EPD) verificada por tercero.
          Acero con contenido reciclado documentado. Abastecimiento regional dentro de 160 km del sitio.
          Gestión de residuos de obra con separación del 100% de materiales recuperables
          y desvío mínimo del 50% de vertedero.
        </p>

        <hr className="border-border my-16" />

        {/* ── Pilar 6: Sistemas Operativos ── */}
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Sistemas Operativos: BMS con submedición por circuito en naves industriales LEED de Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Building Management System con monitoreo en tiempo real de HVAC, iluminación, bombas,
          sistema fotovoltaico y consumo hídrico desde una sola plataforma. Detección de ineficiencias
          en horas, no en meses. Dashboards de consumo por sistema que alimentan reportes ESG
          sin esfuerzo manual.
        </p>

        <hr className="border-border my-16" />

        {/* ── Pilar 7: Proceso de Certificación ── */}
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Proceso de Certificación: del predesign al certificado GBCI en naves industriales de Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Proceso integrativo LEED v4 BD+C gestionado por Baumex desde el primer día: registro,
          Design Review, gestión de evidencias en construcción y Construction Review con trazabilidad
          completa en LEED Online. Gulfstream 550K en 53-55 puntos (Silver), apuntando a Gold
          con los 10 MW de paneles solares. Certificación que resiste auditoría del GBCI.
        </p>

        <hr className="border-border my-16" />

        {/* ── CTA ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Certifica tu nave industrial LEED en Mexicali con la constructora que ya está certificando la más grande de la ciudad
        </h2>

        <p className="text-lg leading-relaxed">
          7 pilares. Un solo equipo que diseña, construye y certifica.
          Solicita una consulta para tu proyecto.
        </p>

      </div>
      {/* FIN COPY COMERCIAL */}

      <div className={'lg:pt-30 lg:px-20'}>
        <HeroMarketing1 />
        <div className={'mt-20'}><SidebarSticky1 /></div>
        {/* Carrusel de temas LEED */}
        <CarruselLeed />
        <BigNumber
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
          imageAlt="Naves industriales LEED en Mexicali — Grupo Nelson"
          number="+4.5"
          title={<>Millones de <br /> Pies² Desarrollados</>}
          subtitle={<>Construidos en naves <br /> industriales en Mexicali desde 1965</>}
        />
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import Header from '@/components/Header'
import { HeroVideoCover } from '@/components/hero-video-cover'
import { TarjetaHeroOriginal } from '@/components/tarjeta-hero-original'
import { AlphaBP } from '@/components/brandpetram/alpha-bp'
import { Beta } from '@/components/brandpetram/beta'
import { Gamma } from '@/components/brandpetram/gamma'
import { Delta } from '@/components/brandpetram/delta'
import { Epsilon } from '@/components/brandpetram/epsilon'

export const metadata: Metadata = {
  title: 'Built to Suit | Grupo Nelson',
}

export default function BuiltToSuitPage() {
  return (
    <div className="[&_header:not([data-scrolled])_path[fill='currentColor']]:!fill-white">
      <Header />

      {/* ══════════════════════════════════════════════════════════
          COPY COMERCIAL — Build-to-Suit
          Fuente: docs/fase-2-desempaquetado-comercial-baumex.md (Temas A, F)
          Fuente: docs/4-los-10-temas-comerciales-de-grupo-nelson.md (#3 Build-to-Suit)
          Reglas: /Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md
          Status: BORRADOR — pendiente de aprobación
          ══════════════════════════════════════════════════════════ */}
      <div className="px-8 md:px-12 pt-20 pb-32">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Construye exactamente la nave industrial que tu operación necesita en Mexicali
        </h1>

        <p className="text-xl leading-relaxed mb-12">
          Build-to-suit es construir a la medida exacta de tus especificaciones operativas — no adaptar
          una nave genérica. Desde clear heights específicos para manufactura aeroespacial hasta sistemas
          eléctricos dimensionados para operaciones de alta demanda. Baumex, la constructora in-house
          de Grupo Nelson, diseña y ejecuta bajo un solo contrato: tu especificación, un solo responsable.
        </p>

        <div className="flex flex-wrap gap-12 mb-24">
          <div><p className="text-4xl font-bold leading-none">75+</p><p className="text-muted-foreground">proyectos build-to-suit</p></div>
          <div><p className="text-4xl font-bold leading-none">28</p><p className="text-muted-foreground">años de ejecución</p></div>
          <div><p className="text-4xl font-bold leading-none">52,200 m²</p><p className="text-muted-foreground">nave más grande construida</p></div>
          <div><p className="text-4xl font-bold leading-none">10</p><p className="text-muted-foreground">disciplinas in-house</p></div>
        </div>

        <hr className="border-border my-16" />

        {/* ── Qué es build-to-suit ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Nave industrial a la medida vs. nave especulativa: por qué build-to-suit en Mexicali
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Una nave especulativa (spec building) se construye sin cliente específico — dimensiones estándar,
          sistemas genéricos, alturas comunes. Si tu operación encaja, funciona. Si no, adaptas.
          Build-to-suit elimina ese compromiso: la nave se diseña desde cero para tus procesos exactos.
        </p>

        <p className="text-lg leading-relaxed mb-16">
          Gulfstream necesitó 52,200 m² con sistemas antisísmicos BRB, 10 MW de paneles solares
          y 20 MW de capacidad eléctrica. Skyworks necesitó un puente vehicular de 95 metros
          para transportar microchips entre dos plantas. Honeywell necesitó un túnel de viento
          con blower de 3,000 HP. Ninguno de esos proyectos existía en un catálogo.
          Baumex los diseñó y construyó a la medida.
        </p>

        <hr className="border-border my-16" />

        {/* ── Proceso ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Acelera tu proyecto build-to-suit en Mexicali: de brief a entrega bajo un solo contrato
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Baumex ejecuta las 10 disciplinas constructivas con equipo propio — desde terracerías
          hasta acabados. Un solo contrato cubre diseño, permisos municipales/estatales/federales,
          construcción y entrega. Sin subcontratos de diseño. Sin terceros entre tu proyecto
          y quien lo ejecuta.
        </p>

        <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
          <li>Departamentos propios de arquitectura, ingeniería civil, estructural, eléctrica, mecánica y plomería</li>
          <li>Departamento de estimación y costos propio</li>
          <li>Ruta crítica con 18 hitos monitoreados</li>
          <li>Control de submittals y long lead items (transformadores, chillers, bombas)</li>
          <li>Reuniones semanales con 16+ asistentes documentados</li>
        </ul>

        <p className="text-lg leading-relaxed mb-16">
          Reduce la incertidumbre de tu expansión en Mexicali. Precio cerrado desde proyecto ejecutivo.
          Un solo interlocutor para todo el proceso.
        </p>

        <hr className="border-border my-16" />

        {/* ── Especialización por industria ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Construcción build-to-suit en Mexicali para aeroespacial, médico, electrónica y manufactura pesada
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Cada industria tiene requerimientos específicos que definen el diseño de la nave.
          Baumex ha construido para 7 sectores industriales en 28 años:
        </p>

        <ul className="list-disc pl-6 text-lg leading-relaxed mb-6 space-y-2">
          <li><strong>Aeroespacial:</strong> Gulfstream (52,200 m², LEED Gold, BRB), Honeywell (túnel de viento), Skyworks (puente 95 m)</li>
          <li><strong>Dispositivos médicos:</strong> Baxter, Intuitive Surgical</li>
          <li><strong>Electrónica:</strong> Celestica, Creation Technologies</li>
          <li><strong>HVAC:</strong> Rheem (20,500 m²), Vertiv</li>
          <li><strong>Logística:</strong> DHL</li>
          <li><strong>Manufactura pesada:</strong> Deacero (50,000 m², cimentaciones a 15 m)</li>
          <li><strong>Papel:</strong> Fábrica de Papel San Francisco (300,000 ft², El Salto, Jalisco)</li>
        </ul>

        <p className="text-lg leading-relaxed mb-16">
          Escala tu operación con una constructora que ya ejecutó proyectos en tu sector.
          33 corporaciones internacionales. 4.5 millones de pies cuadrados construidos.
        </p>

        <hr className="border-border my-16" />

        {/* ── CTA ── */}
        <h2 className="text-3xl font-bold leading-snug mb-6">
          Solicita una consulta build-to-suit para tu nave industrial en Mexicali
        </h2>

        <p className="text-lg leading-relaxed">
          Define tus requerimientos. Baumex entrega la nave. 28 años, 75 proyectos,
          un solo contrato.
        </p>

      </div>
      {/* FIN COPY COMERCIAL */}

      <div className="mt-0">
        <HeroVideoCover
          videoSrc="/video-2-720p.mp4"
          posterSrc="/hero-poster-0.jpg"
          alt="Built to Suit | Grupo Nelson"
          overlayOpacity={0.30}
          videoBrightness={0.8}
          videoContrast={1.3}
          videoFilterDesktop="brightness(.7) saturate(1) contrast(1)"
          videoFilterMobile="brightness(1.05) saturate(1.10) contrast(1.02)"
          videoOverlayDesktop="rgba(100, 150, 250, 0.25)"
          videoOverlayMobile="rgba(30, 80, 255, 0.20)"
          videoOverlayBlendMode="multiply"
          darkOverlay={0.4}
          darkOverlayMobile={0.3}
          enableAnimations={true}
          gridConfig={{
            strokeColor: 'stroke-white/20',
            gridSize: 150,
            showHighlights: true,
            highlightColor: 'fill-blue-500/30',
          }}
          gridConfigMobile={{
            strokeColor: 'stroke-white/20',
            gridSize: 80,
            showHighlights: true,
            highlightColor: 'fill-blue-500/30',
            fadeRadius: '20rem',
          }}
        >
          <TarjetaHeroOriginal />
        </HeroVideoCover>
      </div>

      {/* Componente AlphaBP */}
      <div className="container mx-auto 1200:px-4 py-16">
        <AlphaBP />
      </div>

      {/* Componente Beta */}
      <div className="container mx-auto px-4 py-0 mt-56 mb-56">
        <Beta />
      </div>

      {/* Componente Gamma */}
      <div className="container mx-auto px-4 py-16 mb-56">
        <Gamma />
      </div>

      {/* Componente Delta */}
      <div className="container mx-auto">
        <Delta />
      </div>

      {/* Componente Epsilon */}
      <div className="container mx-auto ">
        <Epsilon />
      </div>

    </div>
  )
}

"use client"

// Ficha técnica de parque — versión embebible
// Se usa dentro de las pages de /parques-industriales-mexicali/[slug]
// debajo del ParkHero. Con galería de fotos + specs.

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import type { IndustrialPark, Building, GalleryGroup } from "@/data/parks/types"
import { LogosParque } from "@/components/brandpetram/logos-parque"

// === Helpers ===

function formatArea(m2: number, sqft?: number) {
  const m2Str = m2.toLocaleString("es-MX", { maximumFractionDigits: 2 })
  if (sqft) return `${m2Str} m² (${sqft.toLocaleString("en-US")} sq ft)`
  return `${m2Str} m²`
}

function formatHeight(m: number, ft?: number) {
  if (ft) return `${m} m (${ft} ft)`
  return `${m} m`
}

// === Datos bilingües ===

const labels = {
  es: {
    consultar: "Consultar",
    especificacionesDelParque: "Especificaciones del parque",
    datosGenerales: "Datos generales",
    parque: "Parque",
    añoDeOperacion: "Año de operación",
    superficieTotal: "Superficie total",
    hectareas: "hectáreas",
    navesDisponibles: "Naves disponibles",
    m2DisponiblesEnNave: "M² disponibles en nave",
    terrenoDisponible: "Terreno disponible",
    disponibilidadInmediata: "Disponibilidad inmediata",
    si: "Sí",
    no: "No",
    ubicacion: "Ubicación",
    direccion: "Dirección",
    navesIndustriales: "Naves industriales",
    disponible: "Disponible",
    ocupada: "Ocupada",
    disponibilidadParcial: "Disponibilidad parcial",
    estado: "Estado",
    ocupadaPor: "Ocupada por",
    m2Disponibles: "M² disponibles",
    disponibleDesde: "Disponible desde",
    areaTotal: "Área total",
    almacen: "Almacén",
    oficinas: "Oficinas",
    mezzanine: "Mezzanine",
    alturaMaxima: "Altura máxima",
    alturaLibre: "Altura libre",
    andenes: "Andenes",
    patioDeManiobras: "Patio de maniobras",
    estacionamiento: "Estacionamiento",
    espacios: "espacios",
    estructura: "Estructura",
    piso: "Piso",
    techo: "Techo",
    muros: "Muros",
    iluminacion: "Iluminación",
    baños: "Baños",
    hvac: "HVAC",
    proteccionContraIncendio: "Protección contra incendio",
    incluida: "Incluida",
    galeria: "Galería",
    infraestructura: "Infraestructura",
    sinNavesDisponibles: "Este parque no tiene naves disponibles actualmente. Contáctenos para explorar opciones build-to-suit.",
    fichasNoDisponibles: "Las fichas técnicas de naves para este parque aún no están disponibles.",
  },
  en: {
    consultar: "Contact us",
    especificacionesDelParque: "Park specifications",
    datosGenerales: "General data",
    parque: "Park",
    añoDeOperacion: "Year of operation",
    superficieTotal: "Total area",
    hectareas: "hectares",
    navesDisponibles: "Available buildings",
    m2DisponiblesEnNave: "Available m² in building",
    terrenoDisponible: "Available land",
    disponibilidadInmediata: "Immediate availability",
    si: "Yes",
    no: "No",
    ubicacion: "Location",
    direccion: "Address",
    navesIndustriales: "Industrial buildings",
    disponible: "Available",
    ocupada: "Occupied",
    disponibilidadParcial: "Partial availability",
    estado: "Status",
    ocupadaPor: "Occupied by",
    m2Disponibles: "Available m²",
    disponibleDesde: "Available from",
    areaTotal: "Total area",
    almacen: "Warehouse",
    oficinas: "Offices",
    mezzanine: "Mezzanine",
    alturaMaxima: "Maximum height",
    alturaLibre: "Clear height",
    andenes: "Docks",
    patioDeManiobras: "Maneuvering yard",
    estacionamiento: "Parking",
    espacios: "spaces",
    estructura: "Structure",
    piso: "Floor",
    techo: "Roof",
    muros: "Walls",
    iluminacion: "Lighting",
    baños: "Bathrooms",
    hvac: "HVAC",
    proteccionContraIncendio: "Fire protection",
    incluida: "Included",
    galeria: "Gallery",
    infraestructura: "Infrastructure",
    sinNavesDisponibles: "This park has no buildings available at this time. Contact us to explore build-to-suit options.",
    fichasNoDisponibles: "Building spec sheets for this park are not yet available.",
  },
} as const

type Lang = 'en' | 'es'
type Labels = (typeof labels)[Lang]

function buildEspecificaciones(park: IndustrialPark, t: Labels) {
  return [
    {
      grupo: t.datosGenerales,
      filas: [
        { label: t.parque, valor: park.name },
        { label: t.añoDeOperacion, valor: String(park.since) },
        { label: t.superficieTotal, valor: `${park.landSizeHectares} ${t.hectareas}` },
        {
          label: t.navesDisponibles,
          valor: park.availableBuildings != null ? String(park.availableBuildings) : t.consultar,
          highlight: park.availableBuildings != null && park.availableBuildings > 0,
        },
        {
          label: t.m2DisponiblesEnNave,
          valor: park.availableAreaM2 != null
            ? `${park.availableAreaM2.toLocaleString("es-MX")} m²`
            : t.consultar,
        },
        {
          label: t.terrenoDisponible,
          valor: park.availableLandM2 != null
            ? `${park.availableLandM2.toLocaleString("es-MX")} m²`
            : t.consultar,
        },
        {
          label: t.disponibilidadInmediata,
          valor: park.immediateAvailability != null
            ? (park.immediateAvailability ? t.si : t.no)
            : t.consultar,
        },
        { label: t.ubicacion, valor: park.location },
        ...(park.address ? [{ label: t.direccion, valor: park.address }] : []),
      ],
    },
  ]
}

function buildNaveSummary(building: Building) {
  const area = formatArea(
    building.generalData?.totalConstructionArea?.m2 ?? 0,
    building.generalData?.totalConstructionArea?.sqft
  )
  const maxH = building.structure?.maxHeight
    ? formatHeight(building.structure.maxHeight.m, building.structure.maxHeight.ft)
    : null
  const clearH = building.structure?.clearHeight
    ? formatHeight(building.structure.clearHeight.m, building.structure.clearHeight.ft)
    : null
  const docks = building.loadingArea?.description ?? (
    building.loadingArea?.totalDocks
      ? `${building.loadingArea.totalDocks} andenes`
      : "N/A"
  )
  return { area, maxH, clearH, docks, structure: building.structure?.type ?? null }
}

// === Galería ===

function ParkGallery({ park, t }: { park: IndustrialPark; t: Labels }) {
  const gallery: GalleryGroup[] = park.gallery ?? [
    { label: "Parque", images: [park.heroImage] },
  ]

  const [activeGroupIdx, setActiveGroupIdx] = useState(0)
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const activeGroup = gallery[activeGroupIdx]
  const allImages = activeGroup?.images ?? []
  const currentImage = allImages[activeImageIdx] ?? park.heroImage

  const goNext = useCallback(() => {
    setActiveImageIdx((i) => (i + 1) % allImages.length)
  }, [allImages.length])

  const goPrev = useCallback(() => {
    setActiveImageIdx((i) => (i - 1 + allImages.length) % allImages.length)
  }, [allImages.length])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "Escape") setLightboxOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen, goPrev, goNext])

  return (
    <>
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={currentImage} alt={`${park.shortName} — ${activeGroup.label}`} fill className="object-contain" />
          </div>

          {/* Info */}
          <div className="absolute top-4 left-4 text-white/80 text-sm">
            <span className="font-semibold">{park.shortName}</span>
            <span className="mx-2">·</span>
            <span>{activeGroup.label}</span>
            <span className="mx-2">·</span>
            <span>{activeImageIdx + 1}/{allImages.length}</span>
          </div>

          {/* Cerrar */}
          <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flechas */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
              >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
              >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveImageIdx(i) }}
                  className={`w-2 h-2 rounded-full transition-colors ${i === activeImageIdx ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="space-y-3">
        {/* Imagen principal */}
        <div
          className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl overflow-hidden aspect-[4/3] cursor-zoom-in group"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            key={currentImage}
            src={currentImage}
            alt={`${park.shortName} — ${activeGroup.label}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-black/40 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0v0M11 8v6M8 11h6" />
            </svg>
          </div>
          <span className="absolute bottom-3 right-3 text-xs bg-zinc-900/70 text-white px-2 py-1 rounded-md">
            {activeGroup.label} {allImages.length > 1 && `(${activeImageIdx + 1}/${allImages.length})`}
          </span>
        </div>

        {/* Miniaturas del grupo activo */}
        {allImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIdx(i)}
                className={`relative w-14 h-14 rounded-lg border-2 overflow-hidden bg-zinc-50 dark:bg-zinc-900 shrink-0 transition-colors ${
                  i === activeImageIdx
                    ? "border-[var(--primary)]"
                    : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-400"
                }`}
              >
                <Image src={img} alt={`${activeGroup.label} ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Pills de grupos (hashtags) */}
        {gallery.length > 1 && (
          <div className="pt-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{t.galeria}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {gallery.map((group, gi) => {
                const isActive = gi === activeGroupIdx
                return (
                  <button
                    key={group.label}
                    onClick={() => { setActiveGroupIdx(gi); setActiveImageIdx(0) }}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                      isActive
                        ? "bg-[var(--primary)] text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {group.label}
                    <span className={`ml-1.5 text-[10px] ${isActive ? "text-white/70" : "text-zinc-400 dark:text-zinc-500"}`}>
                      {group.images.length}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Infraestructura */}
        <div className="pt-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{t.infraestructura}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {(park.infrastructure ?? []).map((item) => (
              <span
                key={item}
                className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

// === Nave expandida ===

function NavCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{label}</p>
      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{value}</p>
    </div>
  )
}

function NaveDetalle({ building, t }: { building: Building; t: Labels }) {
  const summary = buildNaveSummary(building)
  const sub = building.generalData?.subAreas
  const ext = building.exteriorArea
  const luz = building.constructionSpecs?.lighting
  const iluminacion = luz ? [luz.substation, luz.warehouseLighting].filter(Boolean).join(" · ") : null
  const avail = building.availability
  const specs = building.constructionSpecs

  return (
    <div className="px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border-b border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {/* Disponibilidad */}
        {avail && (
          <>
            <NavCell
              label={t.estado}
              value={avail.status === 'available' ? t.disponible : avail.status === 'occupied' ? t.ocupada : avail.status === 'partial' ? t.disponibilidadParcial : t.consultar}
            />
            {building.tenant && (
              <NavCell label={t.ocupadaPor} value={building.tenant} />
            )}
            {avail.status !== 'occupied' && avail.availableM2 != null && (
              <NavCell
                label={t.m2Disponibles}
                value={`${avail.availableM2.toLocaleString("es-MX")} m²`}
              />
            )}
            {avail.availableFrom && (
              <NavCell
                label={t.disponibleDesde}
                value={avail.availableFrom}
              />
            )}
          </>
        )}

        {/* Áreas */}
        <NavCell label={t.areaTotal} value={summary.area} />
        {sub?.warehouse && (
          <NavCell label={t.almacen} value={formatArea(sub.warehouse.m2, sub.warehouse.sqft)} />
        )}
        {sub?.offices && (
          <NavCell label={t.oficinas} value={formatArea(sub.offices.m2, sub.offices.sqft)} />
        )}
        {sub?.mezzanine && (
          <NavCell label={t.mezzanine} value={formatArea(sub.mezzanine.m2, sub.mezzanine.sqft)} />
        )}

        {/* Alturas */}
        {summary.maxH && <NavCell label={t.alturaMaxima} value={summary.maxH} />}
        {summary.clearH && <NavCell label={t.alturaLibre} value={summary.clearH} />}

        {/* Carga y maniobras */}
        <NavCell label={t.andenes} value={summary.docks} />
        {ext?.maneuveringYard && (
          <NavCell label={t.patioDeManiobras} value={ext.maneuveringYard} />
        )}
        {ext?.parkingSpaces && (
          <NavCell label={t.estacionamiento} value={`${ext.parkingSpaces} ${t.espacios}`} />
        )}

        {/* Construcción */}
        {summary.structure && <NavCell label={t.estructura} value={summary.structure} />}
        {specs?.floor && <NavCell label={t.piso} value={specs.floor.description} />}
        {specs?.roof && <NavCell label={t.techo} value={specs.roof.material} />}
        {specs?.walls && <NavCell label={t.muros} value={specs.walls.material} />}

        {/* Instalaciones */}
        {iluminacion && <NavCell label={t.iluminacion} value={iluminacion} />}
        {specs?.bathrooms && <NavCell label={t.baños} value={specs.bathrooms.description} />}
        {building.hvac && <NavCell label={t.hvac} value={building.hvac.description} />}

        {/* Seguridad */}
        {building.fireProtection && (
          <NavCell label={t.proteccionContraIncendio} value={building.fireProtection.description ?? t.incluida} />
        )}
      </div>
    </div>
  )
}

// === Componente principal ===

export function FichaTecnicaParque({ park, lang = 'es' }: { park: IndustrialPark; lang?: Lang }) {
  const [naveExpandida, setNaveExpandida] = useState<string | null>(null)
  const t = labels[lang]

  const especificaciones = buildEspecificaciones(park, t)

  return (
    <section data-component="FichaTecnicaParque" data-component-file="src/components/brandpetram/ficha-tecnica-parque.tsx" data-component-props="true" className="py-12">

      {/* Encabezado */}
      <h2 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "var(--primary)" }}>
        {t.especificacionesDelParque}
      </h2>

      {/* Layout 2 columnas: galería + specs */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* Columna izquierda — galería */}
        <div className="w-full lg:w-80 shrink-0">
          <ParkGallery park={park} t={t} />
        </div>

        {/* Columna derecha — especificaciones */}
        <div className="flex-1 space-y-0 min-w-0">

          {/* Logos de empresas establecidas */}
          <LogosParque park={park} />

          {/* Tabla de specs generales */}
          {especificaciones.map((seccion, si) => (
            <div key={si}>
              <div className="px-4 py-2.5 rounded-sm" style={{ backgroundColor: "var(--primary)" }}>
                <span className="text-sm font-semibold text-white">{seccion.grupo}</span>
              </div>
              {seccion.filas.map((fila, fi) => (
                <div
                  key={fi}
                  className={`flex justify-between items-start px-4 py-3 text-sm border-b border-border ${
                    fi % 2 === 0 ? "bg-background" : "bg-muted/50"
                  }`}
                >
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 mr-4 shrink-0">{fila.label}</span>
                  <span className={`text-right ${'highlight' in fila && fila.highlight ? "font-bold text-green-600 dark:text-green-400" : "text-zinc-600 dark:text-zinc-400"}`}>
                    {fila.valor}
                  </span>
                </div>
              ))}
              <div className="mb-4" />
            </div>
          ))}

          {/* Naves expandibles */}
          {(park.buildings?.length ?? 0) > 0 && (
            <div>
              <div className="px-4 py-2.5 rounded-sm" style={{ backgroundColor: "var(--primary)" }}>
                <span className="text-sm font-semibold text-white">
                  {t.navesIndustriales} ({(park.buildings?.length ?? 0)})
                </span>
              </div>
              {(park.buildings ?? []).map((building, ni) => {
                const summary = buildNaveSummary(building)
                const avail = building.availability
                const status = avail?.status
                const badgeClass =
                  status === 'available' ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" :
                  status === 'occupied'  ? "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400" :
                  status === 'partial'   ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400" :
                  "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                const badgeLabel =
                  status === 'available' ? t.disponible :
                  status === 'occupied'  ? t.ocupada :
                  status === 'partial'   ? t.disponibilidadParcial :
                  t.consultar
                return (
                  <div key={building.id}>
                    <button
                      onClick={() => setNaveExpandida(naveExpandida === building.id ? null : building.id)}
                      className={`w-full flex justify-between items-center px-4 py-3 text-sm border-b border-border hover:bg-muted/70 transition-colors ${
                        ni % 2 === 0 ? "bg-background" : "bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200">{building.name}</span>
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${badgeClass}`}>
                          {badgeLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-zinc-500 dark:text-zinc-400 text-right hidden sm:inline">{summary.area}</span>
                        <svg
                          className={`w-4 h-4 text-zinc-400 transition-transform ${naveExpandida === building.id ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {naveExpandida === building.id && (
                      <NaveDetalle building={building} t={t} />
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {/* Sin naves disponibles */}
          {park.availableBuildings === 0 && (
            <div className="mt-4 px-4 py-5 text-sm text-zinc-600 dark:text-zinc-400 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg">
              {t.sinNavesDisponibles}
            </div>
          )}

          {/* Parque sin fichas */}
          {(park.buildings?.length ?? 0) === 0 && !park.hasSpecs && (
            <div className="px-4 py-8 text-center text-sm text-zinc-400 dark:text-zinc-500 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
              {t.fichasNoDisponibles}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

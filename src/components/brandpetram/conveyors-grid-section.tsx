/**
 * Conveyors Grid Section
 *
 * Sección que muestra la grilla de todos los tipos de transportadores
 * con imagen, textos y signo de más
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { ItemConveyor } from './item-conveyor'
import Drawer from '@/components/tailwind/drawer'
import type { ConveyorDrawerData } from '@/components/tailwind/drawer'

const conveyorItems = [
  {
    id: 'gravedad',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-284.jpg',
    textTop: 'Flujo por gravedad',
    textBottom: 'CONVEYORS\nDE GRAVEDAD',
    alt: 'Lorem ipsum',
    name: 'Transportadores de Gravedad',
    shortDescription: 'Sistemas de transporte por gravedad de alta eficiencia',
    description: 'Los transportadores de gravedad utilizan la fuerza gravitacional para mover productos de forma eficiente.',
    features: ['Bajo mantenimiento', 'Operación silenciosa', 'Costo efectivo'],
    applications: ['Distribución de cajas', 'Líneas de embalaje', 'Almacenes']
  },
  {
    id: 'banda',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-285.jpg',
    textTop: 'Transporte continuo',
    textBottom: 'CONVEYORS\nDE BANDA',
    alt: 'Lorem ipsum',
    name: 'Transportadores de Banda',
    shortDescription: 'Transporte continuo de carga variable',
    description: 'Sistema versátil de banda transportadora para diversos tipos de carga.',
    features: ['Capacidad variable', 'Banda modular', 'Control de velocidad'],
    applications: ['Producción industrial', 'Minería', 'Agricultura']
  },
  {
    id: 'verticales',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-286.jpg',
    textTop: 'Transporte en altura',
    textBottom: 'CONVEYORS\nVERTICALES',
    alt: 'Lorem ipsum',
    name: 'Conveyors Verticales',
    shortDescription: 'Transporte de productos en altura',
    description: 'Soluciones especializadas para transporte vertical de materiales.',
    features: ['Bajo riesgo de derrames', 'Ahorro de espacio', 'Confiabilidad'],
    applications: ['Edificios altos', 'Pisos múltiples', 'Plantas de procesamiento']
  },
  {
    id: 'banda-plastica',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-287.jpg',
    textTop: 'Modulares y flexibles',
    textBottom: 'BANDA MODULAR\nPLÁSTICA',
    alt: 'Lorem ipsum',
    name: 'Banda Plástica',
    shortDescription: 'Transporte modular con banda de plástico',
    description: 'Banda plástica de modular permite configuraciones personalizadas.',
    features: ['Modular', 'Fácil limpieza', 'Flexible'],
    applications: ['Industria alimentaria', 'Farmacéutica', 'Empaque']
  },
  {
    id: 'rodillos',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-288.jpg',
    textTop: 'Carga pesada',
    textBottom: 'CONVEYORS\nDE RODILLOS',
    alt: 'Lorem ipsum',
    name: 'Transportadores de Rodillos',
    shortDescription: 'Sistema de transporte para carga pesada',
    description: 'Transportadores robustos con rodillos para cargas pesadas.',
    features: ['Alta capacidad', 'Durabilidad', 'Bajo mantenimiento'],
    applications: ['Industria pesada', 'Construcción', 'Acería']
  },
  {
    id: 'precision',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-289.jpg',
    textTop: 'Control exacto',
    textBottom: 'CONVEYORS\nDE PRECISIÓN',
    alt: 'Lorem ipsum',
    name: 'Transportadores de Precisión',
    shortDescription: 'Control preciso del posicionamiento de productos',
    description: 'Sistema de transporte con control de precisión milimétrica.',
    features: ['Control preciso', 'Posicionamiento exacto', 'Sincronización'],
    applications: ['Manufactura electrónica', 'Óptica', 'Automatización']
  },
  {
    id: 'aereos',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-290.jpg',
    textTop: 'Suspensión en línea',
    textBottom: 'CONVEYORS\nAÉREOS',
    alt: 'Lorem ipsum',
    name: 'Transportadores Aéreos',
    shortDescription: 'Sistema de transporte suspendido en línea',
    description: 'Transportadores aéreos para movimiento suspendido de productos.',
    features: ['Ahorro de piso', 'Flexibilidad', 'Eficiencia'],
    applications: ['Plantas de manufactura', 'Ensamble', 'Logística']
  },
  {
    id: 'magneticos',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-291.jpg',
    textTop: 'Automatización avanzada',
    textBottom: 'CONVEYORS\nMAGNÉTICOS',
    alt: 'Lorem ipsum',
    name: 'Conveyors Magnéticos',
    shortDescription: 'Sistema de transporte con tecnología magnética',
    description: 'Transportadores magnéticos para automatización avanzada.',
    features: ['Automatización', 'Sin contacto', 'Flexible'],
    applications: ['Industria 4.0', 'Robótica', 'Laboratorios']
  },
  {
    id: 'cadena',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-292.jpg',
    textTop: 'Potencia industrial',
    textBottom: 'CONVEYORS\nDE CADENA',
    alt: 'Lorem ipsum',
    name: 'Transportadores de Cadena',
    shortDescription: 'Transporte de potencia con cadena industrial',
    description: 'Sistema robusto de transporte con cadena para aplicaciones pesadas.',
    features: ['Alta resistencia', 'Potencia', 'Durabilidad'],
    applications: ['Minería', 'Construcción', 'Siderurgia']
  },
  {
    id: 'espiral',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-293.jpg',
    textTop: 'Movimiento helicoidal',
    textBottom: 'CONVEYORS\nEN ESPIRAL',
    alt: 'Lorem ipsum',
    name: 'Conveyors en Espiral',
    shortDescription: 'Transporte helicoidal de productos',
    description: 'Sistema de transporte en espiral para movimiento tridimensional.',
    features: ['Movimiento vertical', 'Compacto', 'Continuo'],
    applications: ['Tratamiento térmico', 'Enfriamiento', 'Cocción']
  }
]

export function ConveyorsGridSection() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedConveyor, setSelectedConveyor] = useState<ConveyorDrawerData | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleConveyorClick = (item: typeof conveyorItems[0]) => {
    const drawerData: ConveyorDrawerData = {
      id: item.id,
      name: item.name,
      shortDescription: item.shortDescription,
      image: item.image,
      alt: item.alt,
      description: item.description,
      features: item.features,
      applications: item.applications
    }
    setSelectedConveyor(drawerData)
    setDrawerOpen(true)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (drawerOpen) return

      const COLS = 4
      let newIndex = selectedIndex

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault()
          newIndex = (selectedIndex + 1) % conveyorItems.length
          break
        case 'ArrowLeft':
          e.preventDefault()
          newIndex = (selectedIndex - 1 + conveyorItems.length) % conveyorItems.length
          break
        case 'ArrowDown':
          e.preventDefault()
          newIndex = Math.min(selectedIndex + COLS, conveyorItems.length - 1)
          break
        case 'ArrowUp':
          e.preventDefault()
          newIndex = Math.max(selectedIndex - COLS, 0)
          break
        case 'Enter':
          e.preventDefault()
          handleConveyorClick(conveyorItems[selectedIndex])
          return
        default:
          return
      }

      setSelectedIndex(newIndex)
      itemRefs.current[newIndex]?.focus({ preventScroll: true })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, drawerOpen])

  useEffect(() => {
    itemRefs.current[selectedIndex]?.focus({ preventScroll: true })
  }, [])

  return (
    <>
      <section className=" w-8/12 md:w-10/12  mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 1536:grid-cols-4 gap-8">
          {conveyorItems.map((item, index) => (
            <div
              key={item.id}
              ref={el => {
                itemRefs.current[index] = el
              }}
              onClick={() => handleConveyorClick(item)}
              tabIndex={0}
              className="outline-none"
            >
              <ItemConveyor
                image={item.image}
                textTop={item.textTop}
                textBottom={item.textBottom}
                alt={item.alt}
                isSelected={selectedIndex === index}
              />
            </div>
          ))}
        </div>
      </section>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} conveyor={selectedConveyor} />
    </>
  )
}

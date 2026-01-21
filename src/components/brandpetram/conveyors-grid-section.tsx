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
import type { ServiceDrawerData } from '@/components/tailwind/drawer'

const conveyorItems = [
  {
    id: 'gravedad',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-284.jpg',
    textTop: 'Flujo por gravedad',
    textBottom: 'PARQUE\nNELSON II',
    alt: 'Lorem ipsum',
    name: 'Parque Industrial Nelson II',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.',
    features: ['Bajo mantenimiento', 'Operación silenciosa', 'Costo efectivo'],
    applications: ['Distribución de cajas', 'Líneas de embalaje', 'Almacenes']
  },
  {
    id: 'banda',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-285.jpg',
    textTop: 'Transporte continuo',
    textBottom: 'PARQUE\nNELSON I',
    alt: 'Lorem ipsum',
    name: 'Parque Industrial Nelson I',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    features: ['Capacidad variable', 'Banda modular', 'Control de velocidad'],
    applications: ['Producción industrial', 'Minería', 'Agricultura']
  },
  {
    id: 'verticales',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-286.jpg',
    textTop: 'Transporte en altura',
    textBottom: 'PARQUE\nEL VIGÍA I',
    alt: 'Lorem ipsum',
    name: 'Parque El Vigía I',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
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
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    features: ['Modular', 'Fácil limpieza', 'Flexible'],
    applications: ['Industria alimentaria', 'Farmacéutica', 'Empaque']
  },
  {
    id: 'rodillos',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-288.jpg',
    textTop: 'Carga pesada',
    textBottom: 'PARQUE\nEL VIGÍA II',
    alt: 'Lorem ipsum',
    name: 'Parque El Vigía II',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    features: ['Alta capacidad', 'Durabilidad', 'Bajo mantenimiento'],
    applications: ['Industria pesada', 'Construcción', 'Acería']
  },
  {
    id: 'precision',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-289.jpg',
    textTop: 'Control exacto',
    textBottom: 'NAVES\nDISPONIBLES',
    alt: 'Lorem ipsum',
    name: 'Naves Disponibles',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    features: ['Control preciso', 'Posicionamiento exacto', 'Sincronización'],
    applications: ['Manufactura electrónica', 'Óptica', 'Automatización']
  },
  {
    id: 'aereos',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-290.jpg',
    textTop: 'Suspensión en línea',
    textBottom: 'TERRENOS\nEN VENTA',
    alt: 'Lorem ipsum',
    name: 'Terrenos en Venta',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    features: ['Ahorro de piso', 'Flexibilidad', 'Eficiencia'],
    applications: ['Plantas de manufactura', 'Ensamble', 'Logística']
  },
  {
    id: 'magneticos',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-291.jpg',
    textTop: 'Automatización avanzada',
    textBottom: 'BUILT\nTO SUIT',
    alt: 'Lorem ipsum',
    name: 'Built to Suit',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    features: ['Automatización', 'Sin contacto', 'Flexible'],
    applications: ['Industria 4.0', 'Robótica', 'Laboratorios']
  },
  {
    id: 'cadena',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-292.jpg',
    textTop: 'Potencia industrial',
    textBottom: 'LLAVE\nEN MANO',
    alt: 'Lorem ipsum',
    name: 'Llave en Mano',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    features: ['Alta resistencia', 'Potencia', 'Durabilidad'],
    applications: ['Minería', 'Construcción', 'Siderurgia']
  },
  {
    id: 'espiral',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-293.jpg',
    textTop: 'Movimiento helicoidal',
    textBottom: 'ARRENDAMIENTO\nINDUSTRIAL',
    alt: 'Lorem ipsum',
    name: 'Arrendamiento Industrial',
    shortDescription: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    features: ['Movimiento vertical', 'Compacto', 'Continuo'],
    applications: ['Tratamiento térmico', 'Enfriamiento', 'Cocción']
  }
]

export function ConveyorsGridSection() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedConveyor, setSelectedConveyor] = useState<ServiceDrawerData | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleConveyorClick = (item: typeof conveyorItems[0]) => {
    const drawerData: ServiceDrawerData = {
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

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} service={selectedConveyor} />
    </>
  )
}

"use client"

import { delay, wrap } from "motion"
import { usePointerPosition } from "motion-plus/react"
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useTransform,
} from "motion/react"
import { useEffect, useRef, useState } from "react"

interface TrailImage {
    id: number
    x: number
    y: number
    imageIndex: number
}

const defaultImages = [
    "/Seleccionadas/estacionamiento-tecolote-mexicali-14.jpeg",
    "/Seleccionadas/estacionamiento-tecolote-mexicali-3.jpeg",
    "/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-1.jpeg",
    "/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-2.jpeg",
    "/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-4.jpeg",
    "/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-5.jpeg",
    "/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-7.jpeg",
    "/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg",
    "/Seleccionadas/nave-gulfstream-en-parque-nelson-2-18.jpg",
    "/Seleccionadas/nave-gulfstream-en-parque-nelson-2-5.jpg",
    "/Seleccionadas/nave-gulfstream-en-parque-nelson-2-54.jpg",
    "/Seleccionadas/nave-gulfstream-en-parque-nelson-2-64.jpg",
    "/Seleccionadas/nave-industrial-en-parque-industrial-nelson2-11.jpeg",
    "/Seleccionadas/nave-industrial-en-parque-industrial-nelson2-3.jpeg",
    "/Seleccionadas/nave-industrial-envista-en-parque-industrial-nelson-1-4.JPG",
    "/Seleccionadas/nave-industrial-qualitel-en-parque-industrial-nelson-1-5.JPG",
    "/Seleccionadas/parque-industrial-mexicali-renta-y-construccion-nave-industrial-491.jpg",
    "/Seleccionadas/parque-industrial-nelson-1-en-mexicali.jpeg",
    "/Seleccionadas/parque-industrial-nelson-2-en-mexicali.jpeg",
    "/Seleccionadas/puente-skyworks-2.jpg",
    "/Seleccionadas/puente-skyworks.jpg",
    "/Seleccionadas/Specs-Nave-Industrial-1-Nelson-II-002.jpg",
    "/Seleccionadas/Specs-Nave-Industrial-2-Nelson-II-002.jpg",
    "/Seleccionadas/Specs-Nave-Industrial-3-Nelson-II-002.jpg",
]

export default function CursorTrailGrupoNelson({
    fadeOutDuration = 1.2,
    images = defaultImages,
    imageWidth = 320,
    imageHeight = 180,
    spawnDistance = 120,
}: {
    fadeOutDuration?: number
    images?: string[]
    imageWidth?: number
    imageHeight?: number
    spawnDistance?: number
}) {
    const [hasPointer, setHasPointer] = useState(false)

    useEffect(() => {
        setHasPointer(window.matchMedia("(pointer: fine)").matches)
    }, [])

    if (!hasPointer) return null

    return <CursorTrailInner fadeOutDuration={fadeOutDuration} images={images} imageWidth={imageWidth} imageHeight={imageHeight} spawnDistance={spawnDistance} />
}

function CursorTrailInner({
    fadeOutDuration,
    images,
    imageWidth,
    imageHeight,
    spawnDistance,
}: {
    fadeOutDuration: number
    images: string[]
    imageWidth: number
    imageHeight: number
    spawnDistance: number
}) {
    const imageIndex = useRef(0)
    const idCounter = useRef(0)
    const distance = useRef(0)

    const [trailImages, setTrailImages] = useState<TrailImage[]>([])
    const pointer = usePointerPosition()
    const pointerDistance = useTransform(() => {
        const x = pointer.x.get()
        const y = pointer.y.get()
        const deltaX = x - (pointer.x.getPrevious() ?? x)
        const deltaY = y - (pointer.y.getPrevious() ?? y)
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    })

    useMotionValueEvent(pointerDistance, "change", (latest) => {
        distance.current += latest

        if (distance.current >= spawnDistance) {
            spawnImage(pointer.x.get(), pointer.y.get())
            distance.current = 0
        }
    })

    const spawnImage = (x: number, y: number) => {
        const newImage: TrailImage = {
            id: idCounter.current++,
            x: x - imageWidth / 2,
            y: y - imageHeight / 2,
            imageIndex: imageIndex.current,
        }

        setTrailImages((prev) => [...prev, newImage])

        imageIndex.current = wrap(0, images.length, imageIndex.current + 1)

        delay(() => {
            setTrailImages((prev) =>
                prev.filter((img) => img.id !== newImage.id)
            )
        }, fadeOutDuration)
    }

    return (
        <section data-component="CursorTrailGrupoNelson" data-component-file="src/components/brandpetram/cursor-trail-grupo-nelson.tsx" data-component-props="true" className="relative w-full h-screen overflow-hidden cursor-crosshair bg-[#0a1628] dark:bg-white">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                <div className="text-center">
                    <p className="text-sm md:text-base font-normal tracking-widest uppercase text-white/60 dark:text-[#0a1628]/60 mb-4 select-none">
                        Grupo Nelson
                    </p>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white dark:text-[#0a1628] uppercase select-none leading-none">
                        60 años<br />en Mexicali
                    </h2>
                </div>
            </div>

            <AnimatePresence>
                {trailImages.map((image) => (
                    <motion.img
                        key={image.id}
                        src={images[image.imageIndex]}
                        className="absolute object-cover pointer-events-none z-10"
                        style={{
                            left: image.x,
                            top: image.y,
                            width: imageWidth,
                            height: imageHeight,
                            willChange: "opacity, transform",
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.1 }}
                        exit={{
                            opacity: 0,
                            scale: 0.5,
                            transition: { duration: 0.3 },
                        }}
                    />
                ))}
            </AnimatePresence>
        </section>
    )
}

'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Header from '@/components/Header'

const benefits = [
    'Más de 60 años de experiencia en desarrollo industrial',
    '4 parques industriales en Mexicali',
    'Construcción build-to-suit a la medida',
    'Atención personalizada y respuesta rápida',
]

export default function Contact() {
    return (
        <>
            <Header />
            <section className="bg-background py-24 mt-20">
                <div className="@container mx-auto max-w-5xl px-6">
                    <div className="@2xl:grid-cols-2 grid">
                        <div className="flex max-w-sm flex-col">
                            <div className="text-muted-foreground mb-6 w-fit text-xs font-medium">Contacto</div>
                            <h1 className="text-balance text-3xl font-semibold">Hablemos de su próximo proyecto industrial</h1>
                            <p className="text-muted-foreground mt-4 text-balance">Naves industriales, terrenos y construcción a la medida en Mexicali. Nuestro equipo está listo para atenderle.</p>

                            <ul className="mt-8 space-y-3">
                                {benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-center gap-3">
                                        <CheckCircle2 className="size-4 shrink-0 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                                        <span className="text-sm">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="text-muted-foreground mt-8 text-sm">
                                ¿Busca naves disponibles?{' '}
                                <Link
                                    href="/inventario/naves-disponibles"
                                    className="text-primary font-medium hover:underline">
                                    Ver inventario
                                </Link>
                            </div>

                            <div className="mt-12 space-y-6 *:space-y-2">
                                <div>
                                    <h3 className="text-muted-foreground text-sm">Email</h3>
                                    <Link
                                        href="mailto:contacto@nelson.com.mx"
                                        className="text-foreground hover:decoration-primary text-sm font-medium hover:underline">
                                        contacto@nelson.com.mx
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-muted-foreground text-sm">Teléfono</h3>
                                    <Link
                                        href="tel:+526865663000"
                                        className="text-foreground hover:decoration-primary text-sm font-medium hover:underline">
                                        +52 (686) 566 3000
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-muted-foreground text-sm">Oficinas</h3>
                                    <p className="text-foreground text-sm font-medium">
                                        Mexicali, Baja California
                                        <br />
                                        México
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Card className="mx-auto mt-6 flex max-w-xl flex-col p-6 shadow-xl md:p-12">
                            <h2 className="text-foreground font-medium">Platique con nuestro equipo</h2>
                            <p className="text-muted-foreground mt-2 text-sm">Complete el formulario y le contactaremos en menos de 24 horas.</p>

                            <form className="**:data-[slot=label]:block relative mt-8 space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2.5">
                                        <Label htmlFor="first-name">Nombre</Label>
                                        <Input
                                            id="first-name"
                                            placeholder="Juan"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="last-name">Apellido</Label>
                                        <Input
                                            id="last-name"
                                            placeholder="Pérez"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="email">Email corporativo</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="nombre@empresa.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="company">Empresa</Label>
                                    <Input
                                        id="company"
                                        type="text"
                                        placeholder="Nombre de su empresa"
                                        required
                                    />
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="message">Mensaje</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Cuéntenos sobre su proyecto industrial..."
                                        rows={7}
                                        required
                                        className="min-h-32"
                                    />
                                </div>

                                <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto]">
                                    <p className="text-muted-foreground text-sm">
                                        Al enviar este formulario, acepta nuestra{' '}
                                        <Link
                                            href="/privacidad"
                                            className="text-primary underline">
                                            Política de Privacidad
                                        </Link>
                                    </p>
                                    <Button className="max-sm:row-start-1">Enviar mensaje</Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

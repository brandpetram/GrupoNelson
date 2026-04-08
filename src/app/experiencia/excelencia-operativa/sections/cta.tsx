import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Container, Separator } from '@/components/container'
import Image from 'next/image'

export function CallToAction() {
    return (
        <section className="relative">
            <Separator className="h-16" />

            <Container className="**:data-[slot=content]:py-0 **:data-[slot=content]:bg-linear-to-b **:data-[slot=content]:from-blue-500 **:data-[slot=content]:to-blue-700 relative">
                <div
                    aria-hidden
                    className="dither-xs mask-x-from-65% mask-x-to-95% mask-y-from-75% pointer-events-none absolute inset-0 opacity-50 2xl:mx-auto 2xl:max-w-7xl">
                    <Image
                        src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1759211132/grid-2-bg_bqde4m.webp"
                        alt="background"
                        className="contrast-35 size-full -scale-x-100 object-cover brightness-75"
                        width={2224}
                        height={1589}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1520px"
                    />
                </div>

                <div className="@3xl:p-20 @lg:p-8 relative overflow-hidden p-6">
                    <div className="mx-auto max-w-xl text-center">
                        <div className="relative">
                            <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">Tu siguiente nave industrial en Mexicali</h2>
                            <p className="text-foreground mb-6 mt-4 text-balance text-lg">Planeación documentada, reportes semanales, minutas firmadas y scorecard de seguridad. 75 proyectos gestionados con este método en 28 años.</p>

                            <Button
                                asChild
                                size="lg"
                                className="border-transparent px-4 text-sm shadow-xl shadow-blue-900/40">
                                <Link href="/contacto">Solicita una consulta</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>

            <Separator className="h-16" />
        </section>
    )
}

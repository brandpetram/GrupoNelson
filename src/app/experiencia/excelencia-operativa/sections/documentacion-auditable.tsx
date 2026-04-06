import { Check, FileCheck2, Clock, FileSignature, FlaskConical } from 'lucide-react'
import { Container } from '@/components/container'
import { FeatureCard, FeatureCardContent } from '@/components/ui/feature-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Notes3Illustration from "@/components/illustrations/notes-3-illustration"

const subFeatures = [
    {
        icon: FileCheck2,
        title: 'Submittals y aprobaciones',
        description: 'Cada material y equipo se aprueba por el cliente antes de instalarse. Nada entra a obra sin documentación firmada.',
    },
    {
        icon: Clock,
        title: 'Monitoreo de equipos críticos',
        description: 'Transformadores, chillers, bombas contra incendio — se monitorean desde el pedido para que no se conviertan en retraso.',
    },
    {
        icon: FileSignature,
        title: 'Minutas firmadas',
        description: 'Cada reunión semanal produce minuta con acuerdos, responsables y fechas. 16 asistentes con firma autógrafa.',
    },
    {
        icon: FlaskConical,
        title: 'Ensayos de laboratorio externo',
        description: 'Verificación independiente por EPGC. El control de calidad no depende solo de Baumex — un tercero lo valida.',
    },
]

export function DocumentacionAuditable() {
    return (
        <section>
            <Container className="py-16 lg:py-24">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">Documentación auditable en cada proyecto</h2>
                    <p className="text-muted-foreground text-balance text-lg">Cada proyecto genera documentación que el cliente puede revisar en cualquier momento. No es burocracia — es visibilidad sobre tu inversión.</p>
                </div>
            </Container>
            <Container asGrid>
                <div className="@2xl:grid-cols-2 @4xl:grid-cols-10 grid gap-px">
                    <div
                        aria-hidden
                        className="@max-4xl:hidden">
                        <div data-grid-content />
                    </div>
                    <div className="@4xl:col-span-4">
                        <FeatureCard className="@4xl:col-span-2 col-span-full grid-rows-1">
                            <FeatureCardContent className="@4xl:pb-12 flex h-full flex-col space-y-6">
                                <div className="bg-card ring-foreground/3 flex size-12 rounded-full shadow-xl shadow-black/5 ring-1">
                                    <FileCheck2 className="text-muted-foreground m-auto size-4" />
                                </div>
                                <h3 className="text-3xl font-semibold">Sistema de documentación</h3>
                                <p className="text-muted-foreground text-balance">Cada fase de construcción produce evidencia verificable. Submittals aprobados, fotografías por etapa y trazabilidad completa desde diseño hasta entrega.</p>
                                <ul className="w-full space-y-2">
                                    {['Submittals aprobados por el cliente', 'Evidencia fotográfica por fase', 'Trazabilidad diseño → entrega'].map((feature, index) => (
                                        <li
                                            key={index}
                                            className="text-muted-foreground flex items-center gap-2">
                                            <Check className="size-4 text-emerald-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="mt-auto w-fit">
                                    <Link href="/contacto">Solicitar documentación de ejemplo</Link>
                                </Button>
                            </FeatureCardContent>
                        </FeatureCard>
                    </div>
                    <div
                        data-grid-content
                        className="@4xl:col-span-4 @max-4xl:py-12 group flex items-center justify-center [--color-primary:var(--color-indigo-500)]">
                        <Notes3Illustration />
                    </div>
                    <div
                        aria-hidden
                        className="@max-4xl:hidden">
                        <div data-grid-content />
                    </div>
                </div>
            </Container>
            <Container
                asGrid
                className="@4xl:**:data-grid-content:p-8 **:data-grid-content:p-6 @5xl:**:data-grid-content:p-12 @4xl:grid-cols-10 grid-cols-2">
                <div
                    aria-hidden
                    className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
                <div className="@4xl:grid-cols-3 @sm:grid-cols-2 col-span-8 grid gap-px">
                    {subFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="@4xl:last:hidden">
                            <div
                                data-grid-content
                                className="space-y-3">
                                <feature.icon className="size-4" />
                                <h3 className="mt-3 font-medium">{feature.title}</h3>
                                <p className="text-muted-foreground line-clamp-2 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    aria-hidden
                    className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
            </Container>
        </section>
    )
}

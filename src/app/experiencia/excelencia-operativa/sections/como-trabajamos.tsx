import { Container } from '@/components/container'
import { FeatureCard, FeatureCardDescription, FeatureCardContent, FeatureCardTitle } from '@/components/ui/feature-card'

export default function ComoTrabajamosSection() {
    return (
        <section className="[--color-primary:var(--color-blue-500)]">
            <Container
                asGrid
                className="@2xl:grid-cols-5 @5xl:grid-cols-10 @5xl:grid">
                <div className="@max-2xl:hidden @max-5xl:row-start-2">
                    <div data-grid-content />
                </div>

                <div className="@5xl:col-span-4 col-span-full">
                    <div
                        data-grid-content
                        className="@2xl:p-12 p-6">
                        <div className="@5xl:sticky @5xl:top-32 @max-5xl:text-center @max-5xl:mx-auto @5xl:h-fit @5xl:max-w-xs max-w-xl text-balance">
                            <h2 className="text-foreground mb-6 text-4xl font-semibold">Asi gestionamos cada proyecto</h2>
                            <p className="text-muted-foreground text-lg">Desde la primera junta hasta la entrega de llaves. Control semanal documentado en cada fase.</p>
                        </div>
                    </div>
                </div>

                <div className="@2xl:col-span-3 @5xl:col-span-4 grid gap-px">
                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">01.</span> Planeacion
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Ruta critica con 18 hitos interdependientes.</span> Identificacion de equipos con largo tiempo de entrega: transformadores, chillers, bombas contra incendio. Presupuesto detallado con Cost Engineer in-house.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                    </FeatureCard>

                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">02.</span> Ejecucion
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Coordinacion de hasta 45 subcontratistas simultaneos.</span> 11 puntos de control de calidad, juntas semanales de avance con el cliente, minutas firmadas con responsables asignados.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                    </FeatureCard>

                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">03.</span> Entrega
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Documentacion completa: submittals, evidencia fotografica por fase.</span> Certificaciones FM Global, LEED. Nave lista para operar sin pendientes.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                    </FeatureCard>
                </div>
                <div className="@max-2xl:hidden">
                    <div data-grid-content />
                </div>
            </Container>
        </section>
    )
}

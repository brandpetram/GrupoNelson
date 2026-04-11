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
                            <h2 className="text-foreground mb-6 text-4xl font-semibold">Así gestionamos cada proyecto</h2>
                            <p className="text-muted-foreground text-lg">Desde la primera junta hasta la entrega de llaves. Control semanal documentado en cada fase.</p>
                        </div>
                    </div>
                </div>

                <div className="@2xl:col-span-3 @5xl:col-span-4 grid gap-px">
                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">01.</span> Planeación
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Ruta crítica con 18 hitos interdependientes.</span> Identificamos equipos con largo tiempo de entrega — transformadores, chillers, bombas contra incendio — antes de que se conviertan en retraso. Presupuesto detallado con Cost Engineer in-house.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                    </FeatureCard>

                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">02.</span> Ejecución
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Coordinación de hasta 45 subcontratistas simultáneos.</span> 11 puntos de control de calidad, minutas firmadas con responsables asignados. El reporte semanal llega sin que lo pidas.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                    </FeatureCard>

                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">03.</span> Entrega
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Documentación completa: submittals, evidencia fotográfica por fase.</span> Verificación independiente FM Global y LEED antes de entregar llaves. Nave lista para operar sin pendientes.
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

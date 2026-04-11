import { Container } from '@/components/container'
import { FeatureCard, FeatureCardDescription, FeatureCardCIllustration, FeatureCardContent, FeatureCardTitle } from '@/components/ui/feature-card'
import { ShieldCheck, Building2 } from 'lucide-react'

export function FeatureCardsResultados() {
    return (
        <Container
            asGrid
            className="relative">
            <h2 className="sr-only">Resultados clave</h2>
            <div className="@2xl:grid-cols-2 @4xl:grid-cols-10 grid gap-px [--color-primary:var(--color-blue-500)]">
                <div className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
                <div className="@4xl:col-span-4">
                    <FeatureCard>
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <ShieldCheck className="size-4" />
                                Scorecard de Seguridad
                            </FeatureCardTitle>
                            <FeatureCardDescription>
                                <span className="text-foreground">1,092,745 horas hombre trabajadas.</span> Cero accidentes graves. 404 días consecutivos de operación segura en el proyecto más grande de Mexicali.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                        <FeatureCardCIllustration>
                            <div className="flex flex-col items-center gap-2 py-6">
                                <span className="text-foreground text-6xl font-bold">0</span>
                                <span className="text-muted-foreground text-lg font-medium">accidentes graves</span>
                                <span className="text-muted-foreground text-sm">1,092,745 HHT</span>
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>
                <div className="@4xl:col-span-4">
                    <FeatureCard>
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <Building2 className="size-4" />
                                75 Proyectos Completados
                            </FeatureCardTitle>
                            <FeatureCardDescription>
                                <span className="text-foreground">28 años de ejecución documentada.</span> Desde 5,000 m² hasta 52,200 m². 7 sectores industriales. Presencia en 4 estados.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                        <FeatureCardCIllustration>
                            <div className="flex flex-col items-center gap-2 py-6">
                                <span className="text-foreground text-6xl font-bold">75</span>
                                <span className="text-muted-foreground text-lg font-medium">proyectos</span>
                                <span className="text-muted-foreground text-sm">1997–2025</span>
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>
                <div className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
            </div>
        </Container>
    )
}

import { Container, Separator } from '@/components/container'
import { FeatureCard, FeatureCardCIllustration, FeatureCardContent, FeatureCardDescription } from '@/components/ui/feature-card'
import Image from 'next/image'

export function DimensionesControl() {
    return (
        <section>
            <Container className="py-16 lg:py-24">
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="mx-auto max-w-2xl space-y-6 text-center">
                        <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">Tres dimensiones de control en cada proyecto</h2>
                        <p className="text-muted-foreground text-balance text-lg">El sistema de control de Baumex opera simultáneamente en tiempo, calidad y seguridad. No es una sola práctica — es un sistema que cubre las tres áreas donde una obra puede fallar.</p>
                    </div>
                </div>
            </Container>
            <Container
                asGrid
                className="@4xl:grid-cols-23">
                <div className="@max-4xl:hidden col-span-2">
                    <div data-grid-content />
                </div>

                <div className="@4xl:col-span-19 relative">
                    <FeatureCard>
                        <FeatureCardContent className="bg-card! relative">
                            <div className="z-1 relative">
                                <div className="max-w-md">
                                    <p className="text-primary mb-2 text-sm font-semibold uppercase tracking-widest">Control de tiempo</p>
                                    <FeatureCardDescription className="text-2xl font-normal">
                                        Ruta crítica con 18 hitos interdependientes — <span className="text-foreground font-medium">si uno se atrasa, la cascada es visible. No se puede esconder un retraso.</span>
                                    </FeatureCardDescription>
                                </div>

                                <p className="mt-12 max-w-lg text-xl">
                                    Gantt con fases detalladas (225 días documentados en Honeywell Mission). Monitoreo de long lead items para que un equipo con 4 meses de entrega no se convierta en retraso de obra. Reuniones semanales con 16 asistentes y minutas firmadas.
                                </p>
                            </div>

                            <div className="mask-radial-from-35% mask-radial-at-bottom-right mask-radial-[100%_90%] absolute inset-y-1 left-1/3 right-1 overflow-hidden rounded-xl opacity-75">
                                <Image
                                    src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-336.jpg"
                                    alt="Nave industrial en construcción — Mexicali"
                                    className="size-full object-cover"
                                    width={1974}
                                    height={1481}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1520px"
                                />
                            </div>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="@4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="bg-card @4xl:px-12 grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-primary/10 flex size-10 items-center justify-center rounded-lg">
                                        <span className="text-primary text-sm font-bold">18</span>
                                    </div>

                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Hitos interdependientes</span>
                                        <span className="text-muted-foreground text-sm">Ruta crítica monitoreada semanalmente</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>

                <div className="@max-4xl:hidden col-span-2">
                    <div data-grid-content />
                </div>
            </Container>

            <Separator className="h-12" />

            <Container
                asGrid
                className="@2xl:grid-cols-2 @4xl:grid-cols-23">
                <div className="@max-4xl:hidden col-span-2">
                    <div data-grid-content />
                </div>

                <div className="@4xl:col-span-9 relative">
                    <FeatureCard>
                        <FeatureCardContent className="bg-card!">
                            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">Control de calidad</p>
                            <p className="text-lg lg:text-xl">
                                11 puntos de control documentados por proyecto. Submittals aprobados por el cliente antes de instalarse. Ensayos de laboratorio externo por EPGC — verificación independiente que no depende solo de Baumex. Evidencia fotográfica por fase de construcción.
                            </p>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="@4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="bg-card @4xl:px-12 grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-primary/10 flex size-10 items-center justify-center rounded-lg">
                                        <span className="text-primary text-sm font-bold">11</span>
                                    </div>
                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Puntos de control</span>
                                        <span className="text-muted-foreground text-sm">Documentados por proyecto</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>

                <div className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>

                <div className="@4xl:col-span-9">
                    <FeatureCard className="grid-rows-[1fr_auto]">
                        <FeatureCardContent className="bg-background!">
                            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">Control de seguridad</p>
                            <p className="text-lg lg:text-xl">
                                Permisos diarios de trabajo con matriz de riesgo cuantitativa antes de cada turno. Permisos especializados para alturas (NOM-009) y soldadura (NOM-027). Scorecard transparente que registra cada incidente, incluyendo los menores. 1,092,745 HHT con cero incidentes graves como resultado del sistema.
                            </p>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="bg-background! @4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="border-foreground/10 @3xl:px-12 relative grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="relative grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-primary/10 flex size-10 items-center justify-center rounded-lg">
                                        <span className="text-primary text-sm font-bold">0</span>
                                    </div>
                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Fatalidades</span>
                                        <span className="text-foreground/65 text-sm">1,092,745 horas hombre trabajadas</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>

                <div className="@max-4xl:hidden col-span-2">
                    <div data-grid-content />
                </div>
            </Container>
            <Separator className="h-12" />
        </section>
    )
}

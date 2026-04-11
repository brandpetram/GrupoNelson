import { Container, Separator } from '@/components/container'
import { FeatureCard, FeatureCardCIllustration, FeatureCardContent, FeatureCardDescription } from '@/components/ui/feature-card'
import Image from 'next/image'

export function ControlDimensions() {
    return (
        <section>
            <Container className="py-16 lg:py-24">
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="mx-auto max-w-2xl space-y-6 text-center">
                        <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">Three dimensions of control on every project</h2>
                        <p className="text-muted-foreground text-balance text-lg">Baumex&apos;s control system operates simultaneously across schedule, quality, and safety. It is not a single practice — it is a system that covers the three areas where a project can fail.</p>
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
                                    <p className="text-primary mb-2 text-sm font-semibold uppercase tracking-widest">Schedule control</p>
                                    <FeatureCardDescription className="text-2xl font-normal">
                                        Critical path with 18 interdependent milestones — <span className="text-foreground font-medium">if one slips, the cascade is visible. A delay cannot be hidden.</span>
                                    </FeatureCardDescription>
                                </div>

                                <p className="mt-12 max-w-lg text-xl">
                                    Gantt chart with detailed phases (225 days documented on Honeywell Mission). Long-lead item monitoring so that equipment with a 4-month lead time does not become a construction delay. Weekly meetings with 16 attendees and signed minutes.
                                </p>
                            </div>

                            <div className="mask-radial-from-35% mask-radial-at-bottom-right mask-radial-[100%_90%] absolute inset-y-1 left-1/3 right-1 overflow-hidden rounded-xl opacity-75">
                                <Image
                                    src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-336.jpg"
                                    alt="Industrial facility under construction — Mexicali"
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
                                        <span className="text-foreground font-medium">Interdependent milestones</span>
                                        <span className="text-muted-foreground text-sm">Critical path monitored weekly</span>
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
                            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">Quality control</p>
                            <p className="text-lg lg:text-xl">
                                11 documented control points per project. Submittals approved by the client before installation. Third-party lab testing by EPGC — independent verification that does not depend solely on Baumex. Photographic evidence by construction phase.
                            </p>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="@4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="bg-card @4xl:px-12 grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-primary/10 flex size-10 items-center justify-center rounded-lg">
                                        <span className="text-primary text-sm font-bold">11</span>
                                    </div>
                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Control points</span>
                                        <span className="text-muted-foreground text-sm">Documented per project</span>
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
                            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">Safety control</p>
                            <p className="text-lg lg:text-xl">
                                Daily work permits with quantitative risk matrix before every shift. Specialized permits for heights (NOM-009) and welding (NOM-027). Transparent scorecard that records every incident, including minor ones. 1,092,745 MHW with zero serious incidents as a result of the system.
                            </p>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="bg-background! @4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="border-foreground/10 @3xl:px-12 relative grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="relative grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-primary/10 flex size-10 items-center justify-center rounded-lg">
                                        <span className="text-primary text-sm font-bold">0</span>
                                    </div>
                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Fatalities</span>
                                        <span className="text-foreground/65 text-sm">1,092,745 man-hours worked</span>
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

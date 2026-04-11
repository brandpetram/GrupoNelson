import { Container } from '@/components/container'
import { FeatureCard, FeatureCardDescription, FeatureCardContent, FeatureCardTitle } from '@/components/ui/feature-card'

export default function HowWeWorkSection() {
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
                            <h2 className="text-foreground mb-6 text-4xl font-semibold">How we manage every project</h2>
                            <p className="text-muted-foreground text-lg">From the first meeting to key handover. Weekly documented control at every phase.</p>
                        </div>
                    </div>
                </div>

                <div className="@2xl:col-span-3 @5xl:col-span-4 grid gap-px">
                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">01.</span> Planning
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Critical path with 18 interdependent milestones.</span> We identify long-lead equipment — transformers, chillers, fire pumps — before they become delays. Detailed budgeting with an in-house Cost Engineer.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                    </FeatureCard>

                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">02.</span> Execution
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Coordination of up to 45 simultaneous subcontractors.</span> 11 quality control checkpoints, signed meeting minutes with assigned owners. The weekly report arrives without you having to ask.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                    </FeatureCard>

                    <FeatureCard className="@max-5xl:h-auto">
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <span className="font-mono">03.</span> Delivery
                            </FeatureCardTitle>
                            <FeatureCardDescription className="text-balance">
                                <span className="text-foreground">Complete documentation: submittals, photographic evidence by phase.</span> Independent FM Global and LEED verification before key handover. Facility ready to operate with no pending items.
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

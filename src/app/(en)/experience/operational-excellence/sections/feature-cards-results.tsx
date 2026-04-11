import { Container } from '@/components/container'
import { FeatureCard, FeatureCardDescription, FeatureCardCIllustration, FeatureCardContent, FeatureCardTitle } from '@/components/ui/feature-card'
import { ShieldCheck, Building2 } from 'lucide-react'

export function FeatureCardsResults() {
    return (
        <Container
            asGrid
            className="relative">
            <h2 className="sr-only">Key Results</h2>
            <div className="@2xl:grid-cols-2 @4xl:grid-cols-10 grid gap-px [--color-primary:var(--color-blue-500)]">
                <div className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
                <div className="@4xl:col-span-4">
                    <FeatureCard>
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <ShieldCheck className="size-4" />
                                Safety Scorecard
                            </FeatureCardTitle>
                            <FeatureCardDescription>
                                <span className="text-foreground">1,092,745 man-hours worked.</span> Zero serious accidents. 404 consecutive days of safe operations on Mexicali&apos;s largest project.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                        <FeatureCardCIllustration>
                            <div className="flex flex-col items-center gap-2 py-6">
                                <span className="text-foreground text-6xl font-bold">0</span>
                                <span className="text-muted-foreground text-lg font-medium">serious accidents</span>
                                <span className="text-muted-foreground text-sm">1,092,745 MHW</span>
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>
                <div className="@4xl:col-span-4">
                    <FeatureCard>
                        <FeatureCardContent>
                            <FeatureCardTitle>
                                <Building2 className="size-4" />
                                75 Completed Projects
                            </FeatureCardTitle>
                            <FeatureCardDescription>
                                <span className="text-foreground">28 years of documented execution.</span> From 54,000 ft² to 562,000 ft². 7 industrial sectors. Presence in 4 states.
                            </FeatureCardDescription>
                        </FeatureCardContent>
                        <FeatureCardCIllustration>
                            <div className="flex flex-col items-center gap-2 py-6">
                                <span className="text-foreground text-6xl font-bold">75</span>
                                <span className="text-muted-foreground text-lg font-medium">projects</span>
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

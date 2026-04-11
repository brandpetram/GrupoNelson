import { Check, FileCheck2, Clock, FileSignature, FlaskConical } from 'lucide-react'
import { Container } from '@/components/container'
import { FeatureCard, FeatureCardContent } from '@/components/ui/feature-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Notes3Illustration from "@/components/illustrations/notes-3-illustration"

const subFeatures = [
    {
        icon: FileCheck2,
        title: 'Submittals and approvals',
        description: 'Every material and piece of equipment is approved by the client before installation. Nothing enters the site without signed documentation.',
    },
    {
        icon: Clock,
        title: 'Critical equipment monitoring',
        description: 'Transformers, chillers, fire pumps — tracked from the purchase order so they do not become project delays.',
    },
    {
        icon: FileSignature,
        title: 'Signed meeting minutes',
        description: 'Every weekly meeting produces minutes with agreements, assigned owners, and deadlines. 16 attendees with handwritten signatures.',
    },
    {
        icon: FlaskConical,
        title: 'Third-party lab testing',
        description: 'Independent verification by EPGC. Quality control does not depend solely on Baumex — a third party validates it.',
    },
]

export function AuditableDocumentation() {
    return (
        <section>
            <Container className="py-16 lg:py-24">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">Auditable documentation on every project</h2>
                    <p className="text-muted-foreground text-balance text-lg">Every project generates documentation the client can review at any time. It is not bureaucracy — it is visibility over your investment.</p>
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
                                <h3 className="text-3xl font-semibold">Documentation system</h3>
                                <p className="text-muted-foreground text-balance">Every construction phase produces verifiable evidence. Approved submittals, stage-by-stage photographs, and complete traceability from design to delivery.</p>
                                <ul className="w-full space-y-2">
                                    {['Client-approved submittals', 'Photographic evidence by phase', 'Design-to-delivery traceability'].map((feature, index) => (
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
                                    <Link href="/contact">Request sample documentation</Link>
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

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const benefits = ['24/7 support availability', 'Dedicated account manager', 'Custom integrations', 'Priority response time']

export default function Contact() {
    return (
        <section data-component="Contact" data-component-file="src/components/contact.tsx" data-component-props="false" className="bg-background py-24">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="@2xl:grid-cols-2 grid">
                    <div className="flex max-w-sm flex-col">
                        <div className="text-muted-foreground mb-6 w-fit text-xs font-medium">Sales</div>
                        <h1 className="text-balance text-3xl font-semibold">Ready to scale your business?</h1>
                        <p className="text-muted-foreground mt-4 text-balance">Get in touch with our sales team to discuss custom solutions for your organization.</p>

                        <ul className="mt-8 space-y-3">
                            {benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-center gap-3">
                                    <CheckCircle2 className="size-4 shrink-0 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                                    <span className="text-sm">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="text-muted-foreground mt-8 text-sm">
                            Looking for general support?{' '}
                            <Link
                                href="#support"
                                className="text-primary font-medium hover:underline">
                                Visit our help center
                            </Link>
                        </div>

                        <div className="mt-12 space-y-6 *:space-y-2">
                            <div>
                                <h3 className="text-muted-foreground text-sm">Email</h3>
                                <Link
                                    href="mailto:hello@tailark.com"
                                    className="text-foreground hover:decoration-primary text-sm font-medium hover:underline">
                                    hello@tailark.com
                                </Link>
                            </div>

                            <div>
                                <h3 className="text-muted-foreground text-sm">Phone</h3>
                                <Link
                                    href="tel:+1234567890"
                                    className="text-foreground hover:decoration-primary text-sm font-medium hover:underline">
                                    +1 (234) 567-890
                                </Link>
                            </div>

                            <div>
                                <h3 className="text-muted-foreground text-sm">Office</h3>
                                <p className="text-foreground text-sm font-medium">
                                    123 Innovation Drive
                                    <br />
                                    San Francisco, CA 94107
                                </p>
                            </div>
                        </div>
                    </div>

                    <Card className="mx-auto mt-6 flex max-w-xl flex-col p-6 shadow-xl md:p-12">
                        <h2 className="text-foreground font-medium">Talk to our team</h2>
                        <p className="text-muted-foreground mt-2 text-sm">Fill out the form and we'll be in touch within 24 hours.</p>

                        <form className="**:data-[slot=label]:block relative mt-8 space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2.5">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input
                                        id="first-name"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="space-y-2.5">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input
                                        id="last-name"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                <Label htmlFor="email">Professional Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2.5">
                                <Label htmlFor="company">Company</Label>
                                <Input
                                    id="company"
                                    type="text"
                                    placeholder="Company Name"
                                    required
                                />
                            </div>

                            <div className="space-y-2.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    rows={7}
                                    required
                                    className="min-h-32"
                                />
                            </div>

                            <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto]">
                                <p className="text-muted-foreground text-sm">
                                    By submitting this form, you agree to our{' '}
                                    <Link
                                        href="#link"
                                        className="text-primary underline">
                                        Privacy Policy
                                    </Link>
                                </p>
                                <Button className="max-sm:row-start-1">Get in touch</Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    )
}
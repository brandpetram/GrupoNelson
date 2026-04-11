'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Header from '@/components/Header'

const countries = [
    // USA and Mexico first (primary markets)
    { flag: '\u{1F1FA}\u{1F1F8}', name: 'United States' },
    { flag: '\u{1F1F2}\u{1F1FD}', name: 'Mexico' },
    // Rest alphabetically
    { flag: '\u{1F1E6}\u{1F1F7}', name: 'Argentina' },
    { flag: '\u{1F1E6}\u{1F1FA}', name: 'Australia' },
    { flag: '\u{1F1E6}\u{1F1F9}', name: 'Austria' },
    { flag: '\u{1F1E7}\u{1F1EA}', name: 'Belgium' },
    { flag: '\u{1F1E7}\u{1F1F7}', name: 'Brazil' },
    { flag: '\u{1F1E8}\u{1F1E6}', name: 'Canada' },
    { flag: '\u{1F1E8}\u{1F1F1}', name: 'Chile' },
    { flag: '\u{1F1E8}\u{1F1F3}', name: 'China' },
    { flag: '\u{1F1E8}\u{1F1F4}', name: 'Colombia' },
    { flag: '\u{1F1E9}\u{1F1F0}', name: 'Denmark' },
    { flag: '\u{1F1EB}\u{1F1EE}', name: 'Finland' },
    { flag: '\u{1F1EB}\u{1F1F7}', name: 'France' },
    { flag: '\u{1F1E9}\u{1F1EA}', name: 'Germany' },
    { flag: '\u{1F1ED}\u{1F1F0}', name: 'Hong Kong' },
    { flag: '\u{1F1EE}\u{1F1F3}', name: 'India' },
    { flag: '\u{1F1EE}\u{1F1E9}', name: 'Indonesia' },
    { flag: '\u{1F1EE}\u{1F1EA}', name: 'Ireland' },
    { flag: '\u{1F1EE}\u{1F1F1}', name: 'Israel' },
    { flag: '\u{1F1EE}\u{1F1F9}', name: 'Italy' },
    { flag: '\u{1F1EF}\u{1F1F5}', name: 'Japan' },
    { flag: '\u{1F1F2}\u{1F1FE}', name: 'Malaysia' },
    { flag: '\u{1F1F3}\u{1F1F1}', name: 'Netherlands' },
    { flag: '\u{1F1F3}\u{1F1FF}', name: 'New Zealand' },
    { flag: '\u{1F1F3}\u{1F1F4}', name: 'Norway' },
    { flag: '\u{1F1F5}\u{1F1EA}', name: 'Peru' },
    { flag: '\u{1F1F5}\u{1F1F1}', name: 'Poland' },
    { flag: '\u{1F1F8}\u{1F1EC}', name: 'Singapore' },
    { flag: '\u{1F1F0}\u{1F1F7}', name: 'South Korea' },
    { flag: '\u{1F1EA}\u{1F1F8}', name: 'Spain' },
    { flag: '\u{1F1F8}\u{1F1EA}', name: 'Sweden' },
    { flag: '\u{1F1E8}\u{1F1ED}', name: 'Switzerland' },
    { flag: '\u{1F1F9}\u{1F1FC}', name: 'Taiwan' },
    { flag: '\u{1F1F9}\u{1F1ED}', name: 'Thailand' },
    { flag: '\u{1F1F9}\u{1F1F7}', name: 'Turkey' },
    { flag: '\u{1F1EC}\u{1F1E7}', name: 'United Kingdom' },
    { flag: '\u{1F1FB}\u{1F1F3}', name: 'Vietnam' },
]

const benefits = [
    'Pioneers in Industrial Parks in Mexicali',
    'World-Class Certifications',
    'Custom build-to-suit construction',
    'Personalized service and fast response',
]

export default function Contact() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        const form = e.currentTarget
        const data = new FormData(form)

        try {
            const res = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    full_name: `${data.get('first-name')} ${data.get('last-name')}`,
                    email: data.get('email'),
                    company: data.get('company'),
                    country: data.get('country'),
                    message: data.get('message'),
                }),
            })

            if (!res.ok) throw new Error('Error submitting form')
            router.push('/thank-you')
        } catch {
            setError('There was an error submitting the form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Header lang="en" />
            <section className="relative isolate overflow-hidden bg-background py-24 mt-20">
                {/* Background SVG grid */}
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full stroke-muted-foreground/10"
                >
                    <defs>
                        <pattern
                            id="contact-grid-pattern"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M0.5 0V200M200 0.5L0 0.499983" />
                        </pattern>
                    </defs>
                    <rect fill="url(#contact-grid-pattern)" width="100%" height="100%" strokeWidth={0} />
                </svg>

                {/* Decorative color cloud */}
                <div
                    aria-hidden="true"
                    className="absolute -top-40 right-0 -z-10 transform-gpu blur-3xl sm:right-1/4 sm:top-10"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
                        }}
                        className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#80b5ff] to-[#8989fc] opacity-10"
                    />
                </div>

                <div className="@container mx-auto max-w-6xl px-6">
                    <div className="@2xl:grid-cols-2 grid">
                        <div className="flex max-w-md flex-col">
                            <div className="text-muted-foreground mb-6 w-fit text-sm font-medium">Contact</div>
                            <h1 className="text-balance text-4xl font-semibold">Let&apos;s talk about your next industrial presence in Mexicali</h1>
                            <p className="text-muted-foreground mt-4 text-balance text-base">Industrial warehouses, land, and custom build-to-suit construction in Mexicali. Our team is ready to assist you.</p>

                            <ul className="mt-8 space-y-3">
                                {benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-center gap-3">
                                        <CheckCircle2 className="size-4 shrink-0 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                                        <span className="text-base">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="text-muted-foreground mt-8 text-base">
                                Looking for available warehouses?{' '}
                                <Link
                                    href="/es/inventario/naves-disponibles"
                                    className="text-primary font-medium hover:underline">
                                    View inventory
                                </Link>
                            </div>

                            <div className="mt-12 space-y-6 *:space-y-2">
                                <div>
                                    <h3 className="text-muted-foreground text-base">Email</h3>
                                    <Link
                                        href="mailto:contacto@nelson.com.mx"
                                        className="text-foreground hover:decoration-primary text-base font-medium hover:underline">
                                        contacto@nelson.com.mx
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-muted-foreground text-base">Phone</h3>
                                    <Link
                                        href="tel:+526865534088"
                                        className="text-foreground hover:decoration-primary text-base font-medium hover:underline">
                                        (686) 553-4088
                                    </Link>
                                    <br />
                                    <span className="text-muted-foreground text-sm">Toll Free: </span>
                                    <Link
                                        href="tel:+17603570309"
                                        className="text-foreground hover:decoration-primary text-base font-medium hover:underline">
                                        (760) 357-0309
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-muted-foreground text-base">Offices</h3>
                                    <p className="text-foreground text-base font-medium">
                                        Ave. Reforma #1699, Col. Nueva
                                        <br />
                                        Mexicali, BC, Mexico 21100
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Card className="mx-auto mt-6 flex max-w-xl flex-col p-6 shadow-xl md:p-12">
                            <h2 className="text-foreground text-lg font-medium">Talk to our team</h2>
                            <p className="text-muted-foreground mt-2 text-base">Fill out the form and we will get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit} className="**:data-[slot=label]:block relative mt-8 space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2.5">
                                        <Label htmlFor="first-name">First name</Label>
                                        <Input
                                            id="first-name"
                                            name="first-name"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="last-name">Last name</Label>
                                        <Input
                                            id="last-name"
                                            name="last-name"
                                            placeholder="Smith"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="country">Country / Region</Label>
                                    <div className="relative">
                                        <select
                                            id="country"
                                            name="country"
                                            defaultValue="United States"
                                            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full appearance-none rounded-md border px-3 py-2 pr-10 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                        >
                                            <option value="" disabled>Select your country</option>
                                            {countries.map((c) => (
                                                <option key={c.name} value={c.name}>
                                                    {c.flag} {c.name}
                                                </option>
                                            ))}
                                            <option value="Other">Other</option>
                                        </select>
                                        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="Your company name"
                                        required
                                    />
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="email">Corporate email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your industrial project..."
                                        rows={7}
                                        required
                                        className="min-h-32"
                                    />
                                </div>

                                {error && (
                                    <div className="rounded-md bg-red-50 border border-red-200 p-3 dark:bg-red-900/30 dark:border-red-500/30">
                                        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                                    </div>
                                )}

                                <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto]">
                                    <p className="text-muted-foreground text-base">
                                        By submitting this form, you agree to our{' '}
                                        <Link
                                            href="/privacy-policy"
                                            className="text-primary underline">
                                            Privacy Policy
                                        </Link>
                                    </p>
                                    <Button className="max-sm:row-start-1" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send message'}
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

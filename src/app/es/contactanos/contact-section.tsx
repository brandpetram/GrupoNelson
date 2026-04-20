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
import { Turnstile } from '@marsidev/react-turnstile'
import { useTurnstileSubmit } from '@/hooks/use-turnstile-submit'
import Header from '@/components/Header'

const countries = [
    { flag: '🇲🇽', name: 'México' },
    { flag: '🇺🇸', name: 'Estados Unidos' },
    { flag: '🇨🇦', name: 'Canadá' },
    { flag: '🇩🇪', name: 'Alemania' },
    { flag: '🇦🇺', name: 'Australia' },
    { flag: '🇦🇹', name: 'Austria' },
    { flag: '🇧🇪', name: 'Bélgica' },
    { flag: '🇨🇳', name: 'China' },
    { flag: '🇰🇷', name: 'Corea del Sur' },
    { flag: '🇩🇰', name: 'Dinamarca' },
    { flag: '🇪🇸', name: 'España' },
    { flag: '🇫🇮', name: 'Finlandia' },
    { flag: '🇫🇷', name: 'Francia' },
    { flag: '🇮🇪', name: 'Irlanda' },
    { flag: '🇮🇱', name: 'Israel' },
    { flag: '🇮🇹', name: 'Italia' },
    { flag: '🇯🇵', name: 'Japón' },
    { flag: '🇳🇴', name: 'Noruega' },
    { flag: '🇳🇱', name: 'Países Bajos' },
    { flag: '🇬🇧', name: 'Reino Unido' },
    { flag: '🇸🇬', name: 'Singapur' },
    { flag: '🇸🇪', name: 'Suecia' },
    { flag: '🇨🇭', name: 'Suiza' },
    { flag: '🇹🇼', name: 'Taiwán' },
]

const benefits = [
    'Pioneros en Parques Industriales en Mexicali',
    'Certificaciones de Clase Mundial',
    'Construcción build-to-suit a la medida',
    'Atención personalizada y respuesta rápida',
]

export default function Contact() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const turnstile = useTurnstileSubmit()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError(null)

        if (!turnstile.canSubmit) {
            setError('Estamos verificando que no eres un bot. Espera un momento.')
            return
        }

        setIsSubmitting(true)
        const form = e.currentTarget
        const data = new FormData(form)

        const getString = (name: string): string | undefined => {
            const v = data.get(name)
            return typeof v === 'string' ? v : undefined
        }

        const first = (getString('first-name') ?? '').trim()
        const last = (getString('last-name') ?? '').trim()
        const full_name = [first, last].filter(Boolean).join(' ')

        try {
            const res = await turnstile.submit(token => ({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    full_name,
                    email: getString('email'),
                    company: getString('company'),
                    country: getString('country'),
                    message: getString('message'),
                    contact_url: getString('contact_url') ?? '',
                    turnstileToken: token,
                }),
            }))

            if (res.ok) {
                router.push('/gracias')
                return
            }

            if (res.status === 400) {
                setError('Revisa los campos, hay datos inválidos.')
            } else if (res.status === 429) {
                setError('Has enviado varios formularios recientemente. Espera unos minutos e intenta de nuevo.')
            } else if (res.status === 403) {
                setError('No pudimos verificar que eres humano. Recarga la página e intenta de nuevo.')
            } else {
                setError('Hubo un error al enviar. Inténtalo de nuevo.')
            }
        } catch {
            setError('Hubo un error al enviar. Inténtalo de nuevo.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Header />
            <section className="bg-background py-24 mt-20">
                <div className="@container mx-auto max-w-6xl px-6">
                    <div className="@2xl:grid-cols-2 grid">
                        <div className="flex max-w-md flex-col">
                            <div className="text-muted-foreground mb-6 w-fit text-sm font-medium">Contacto</div>
                            <h1 className="text-balance text-4xl font-semibold">Hablemos sobre tu próxima presencia en un parque industrial en Mexicali</h1>
                            <p className="text-muted-foreground mt-4 text-balance text-base">Naves industriales, terrenos y construcción a la medida en Mexicali. Nuestro equipo está listo para atenderte.</p>

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
                                ¿Buscas naves disponibles?{' '}
                                <Link
                                    href="/inventario/naves-disponibles"
                                    className="text-primary font-medium hover:underline">
                                    Ver inventario
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
                                    <h3 className="text-muted-foreground text-base">Teléfono</h3>
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
                                    <h3 className="text-muted-foreground text-base">Oficinas</h3>
                                    <p className="text-foreground text-base font-medium">
                                        Ave. Reforma #1699, Col. Nueva
                                        <br />
                                        Mexicali, BC, Mexico 21100
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Card className="mx-auto mt-6 flex max-w-xl flex-col p-6 shadow-xl md:p-12">
                            <h2 className="text-foreground text-lg font-medium">Platica con nuestro equipo</h2>
                            <p className="text-muted-foreground mt-2 text-base">Completa el formulario y te contactaremos en menos de 24 horas.</p>

                            <form onSubmit={handleSubmit} className="**:data-[slot=label]:block relative mt-8 space-y-6">
                                <input
                                    type="text"
                                    name="contact_url"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    defaultValue=""
                                    style={{ display: 'none' }}
                                />
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2.5">
                                        <Label htmlFor="first-name">Nombre</Label>
                                        <Input
                                            id="first-name"
                                            name="first-name"
                                            placeholder="Juan"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="last-name">Apellido</Label>
                                        <Input
                                            id="last-name"
                                            name="last-name"
                                            placeholder="Pérez"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="country">País / Región</Label>
                                    <div className="relative">
                                        <select
                                            id="country"
                                            name="country"
                                            defaultValue=""
                                            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full appearance-none rounded-md border px-3 py-2 pr-10 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                        >
                                            <option value="" disabled>Selecciona tu país</option>
                                            {countries.map((c) => (
                                                <option key={c.name} value={c.name}>
                                                    {c.flag} {c.name}
                                                </option>
                                            ))}
                                            <option value="Otro">🌍 Otro</option>
                                        </select>
                                        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="company">Empresa</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="Nombre de tu empresa"
                                        required
                                    />
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="email">Email corporativo</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="nombre@empresa.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="message">Mensaje</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Cuéntanos sobre tu proyecto industrial..."
                                        rows={7}
                                        required
                                        className="min-h-32"
                                    />
                                </div>

                                {turnstile.siteKey && (
                                    <Turnstile
                                        ref={turnstile.ref}
                                        siteKey={turnstile.siteKey}
                                        options={{ language: 'es', theme: 'auto' }}
                                        onSuccess={turnstile.onSuccess}
                                        onExpire={turnstile.onExpire}
                                        onError={turnstile.onError}
                                    />
                                )}

                                {(!turnstile.siteKey || turnstile.widgetFailed) && (
                                    <div className="rounded-md bg-yellow-50 border border-yellow-300 p-3 dark:bg-yellow-900/20 dark:border-yellow-500/40">
                                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                            No pudimos cargar la verificación de seguridad. Recarga la página o desactiva tu bloqueador de anuncios para poder enviar el formulario.
                                        </p>
                                    </div>
                                )}

                                {error && (
                                    <div className="rounded-md bg-red-50 border border-red-200 p-3 dark:bg-red-900/30 dark:border-red-500/30">
                                        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                                    </div>
                                )}

                                <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto]">
                                    <p className="text-muted-foreground text-base">
                                        Al enviar este formulario, aceptas nuestra{' '}
                                        <Link
                                            href="/aviso-de-privacidad"
                                            className="text-primary underline">
                                            Política de Privacidad
                                        </Link>
                                    </p>
                                    <Button className="max-sm:row-start-1" disabled={isSubmitting || !turnstile.canSubmit}>
                                        {isSubmitting ? 'Enviando...' : !turnstile.canSubmit ? 'Verificando…' : 'Enviar mensaje'}
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

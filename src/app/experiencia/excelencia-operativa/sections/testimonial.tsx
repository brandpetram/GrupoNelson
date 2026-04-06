import { Container } from '@/components/container'
import Image from 'next/image'

export const TestimonialExcelencia = () => {
    return (
        <Container className="bg-background border-dashed">
            <div className="@4xl:grid-cols-10 grid">
                <div className="@4xl:pl-12 @4xl:col-span-8 @4xl:col-start-2 max-w-2xl p-6 md:py-12 lg:py-20">
                    <Image
                        src="/gulfstream/gulfstream-logo.svg"
                        alt="Gulfstream Aerospace"
                        width={160}
                        height={40}
                        className="h-7 w-auto dark:invert"
                    />

                    <div className="mt-6 lg:mt-12">
                        <p className="text-xl *:leading-relaxed md:text-2xl">
                            Gulfstream no licitó su quinta nave en Mexicali. Después de 35 años, 5 proyectos y 1,092,745 horas hombre trabajadas con historial de seguridad intacto, la confianza ya estaba demostrada. Asignación directa — sin concurso.
                        </p>

                        <div className="mt-12 flex items-center gap-3">
                            <div className="bg-primary/10 flex size-10 items-center justify-center rounded-lg">
                                <span className="text-primary text-sm font-bold">35</span>
                            </div>

                            <div className="space-y-px">
                                <p className="text-sm font-medium">Años de relación continua</p>
                                <p className="text-muted-foreground text-xs">Gulfstream Aerospace · Mexicali, B.C.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

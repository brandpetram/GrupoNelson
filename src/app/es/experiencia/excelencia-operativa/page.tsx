import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import { Container, Separator } from "@/components/container";
import { ProductIllustration } from "@/app/(dev)/product/sections/product-illustration";
import LogoCloudClientes from "./sections/logo-cloud-clientes";
import { FeatureCardsResultados } from "./sections/feature-cards-resultados";
import ComoTrabajamos from "./sections/como-trabajamos";
import { CapacidadesInhouse } from "./sections/capacidades-inhouse";
import { CallToAction as CtaExcelencia } from "./sections/cta";
import { TestimonialExcelencia } from "./sections/testimonial";
import { DocumentacionAuditable } from "./sections/documentacion-auditable";
import { DimensionesControl } from "./sections/dimensiones-control";
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/experiencia/excelencia-operativa',
  title: 'Excelencia Operativa',
  description: '75 proyectos completados en 28 años. 1,092,745 horas hombre con historial de seguridad documentado. Control de obra semanal con reportes documentados. Baumex, la constructora in-house de Grupo Nelson.',
})

export default function ExcelenciaOperativaPage() {
  return (
    <div className="overflow-x-clip ">
      <div className="pb-32 bg-zinc-300/10 dark:bg-zinc-950/10">
        <Header />
      </div>

      <main className="bg-blue-950/10 dark:bg-blue-500/20">
        {/* Hero + Tabla de Control de Obra */}
        <section id="home" className="overflow-hidden  ">
          <div className="relative">
            <Container className="@4xl:px-12 px-6 py-3 text-center">
              <span className="text-muted-foreground font-mono text-sm uppercase">
                Excelencia Operativa
              </span>
            </Container>
            <Container asGrid>
              <div className="grid grid-cols-10 gap-px">
                <div aria-hidden className="max-sm:hidden">
                  <div data-grid-content />
                </div>

                <div className="col-span-full sm:col-span-8">
                  <div data-grid-content className="pb-16 pt-12 text-center">
                    <div className="relative mx-auto max-w-3xl text-center">
                      <h1 className="text-foreground text-balance text-5xl font-semibold tracking-tight lg:text-6xl">
                        Control de obra. Avance medible. Reportes semanales.
                      </h1>
                      <p className="text-muted-foreground mx-auto mb-8 mt-6 text-balance text-lg">
                        75 proyectos completados en 28 años. 1,092,745 horas
                        hombre trabajadas sin un solo accidente grave. La diferencia
                        entre prometer disciplina y mostrar los documentos que
                        la demuestran.
                      </p>

                      <Button
                        asChild
                        size="lg"
                        className="border-transparent px-4 text-sm shadow-xl shadow-blue-900/40"
                      >
                        <Link href="/contacto">Solicita una consulta</Link>
                      </Button>
                      <span className="text-muted-foreground mt-3 block text-center text-sm">
                        Constructora Baumex · Grupo Nelson
                      </span>
                    </div>
                  </div>
                </div>

                <div aria-hidden className="max-sm:hidden">
                  <div data-grid-content />
                </div>
              </div>
            </Container>
            <div className="relative">
              <div className="absolute inset-0 grid grid-rows-[auto_1fr]">
                <Container asGrid >
                  <div
                    aria-hidden
                    className="col-span-full grid grid-cols-10 gap-px"
                  >
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="odd:aspect-2/1 last:aspect-2/1 aspect-square last:col-span-2 odd:col-span-2"
                      >
                        <div data-grid-content />
                      </div>
                    ))}
                  </div>
                  <div
                    aria-hidden
                    className="col-span-full grid grid-cols-10 gap-px"
                  >
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="even:aspect-2/1 aspect-square odd:rounded odd:bg-blue-200 even:col-span-2"
                      >
                        <div data-grid-content />
                      </div>
                    ))}
                  </div>
                  <div
                    aria-hidden
                    className="col-span-full grid grid-cols-10 gap-px"
                  >
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="odd:aspect-2/1 last:aspect-2/1 aspect-square last:col-span-2 odd:col-span-2"
                      >
                        <div data-grid-content />
                      </div>
                    ))}
                  </div>
                </Container>

                <Container aria-hidden >
                  <></>
                </Container>
              </div>
              <div className="-translate-y-6">
                <ProductIllustration />
              </div>
            </div>
          </div>
          <LogoCloudClientes />
        </section>
        <Separator className="h-24" />

        {/* Cards de resultados: Seguridad + Track Record */}
        <FeatureCardsResultados />
        <Separator className="h-24" />

        {/* Cómo trabajamos: 3 pasos */}
        <ComoTrabajamos />
        <Separator className="h-24" />

        {/* Testimonial — Gulfstream como prueba del método */}
        <TestimonialExcelencia />
        <Separator className="h-24" />

        {/* Capacidades in-house + Certificaciones */}
        <CapacidadesInhouse />

        {/* Documentación auditable — submittals, minutas, EPGC */}
        <DocumentacionAuditable />

        {/* 3 dimensiones del control — tiempo, calidad, seguridad */}
        <DimensionesControl />

        {/* CTA */}
        <CtaExcelencia />
      </main>
    </div>
  );
}

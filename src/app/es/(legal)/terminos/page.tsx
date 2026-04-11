import Link from 'next/link'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/terminos',
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sitio web de Grupo Nelson.',
})

export default function TerminosPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Aviso Legal</p>
        <h1 className="text-3xl font-light tracking-tight sm:text-4xl">Términos y Condiciones de Uso</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última modificación — 10 de abril de 2026</p>
      </div>

      {/* Body */}
      <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Los términos de uso que a continuación se presentan constituyen el acuerdo entre Parque Industrial Nelson S.A. de C.V. (en lo sucesivo &quot;Grupo Nelson&quot;) y cualquier usuario del sitio cuya dirección electrónica es <Link href="/" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">nelson.com.mx</Link> (en lo sucesivo el &quot;Sitio&quot;).
        </p>
        <p>
          La utilización del Sitio por parte de cualquier persona le atribuye la calidad de usuario (en lo sucesivo el &quot;Usuario&quot;) y ello implica su adhesión plena e incondicional a estos Términos de Uso. Si en cualquier momento el Usuario no estuviera de acuerdo, deberá abstenerse inmediatamente de usar el Sitio.
        </p>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Acceso y utilización del Sitio</h2>
          <p>
            El acceso y utilización del Sitio tiene carácter gratuito para los Usuarios. A través del Sitio, Grupo Nelson facilita a los Usuarios el acceso a información sobre parques industriales, naves industriales, terrenos disponibles y servicios de construcción en Mexicali.
          </p>
          <p>
            El Usuario reconoce que el uso del Sitio no le implica ningún derecho de propiedad sobre el mismo, cualquiera de sus elementos o contenidos.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Contenidos</h2>
          <p>
            El Usuario se compromete a utilizar el Sitio y los contenidos conforme a las leyes aplicables y con respeto al orden público. El Usuario se obliga a no copiar, difundir, modificar, reproducir, distribuir o utilizar de cualquier forma los contenidos sin autorización expresa de Grupo Nelson.
          </p>
          <p>
            Grupo Nelson declara que todos los contenidos y elementos utilizados en el Sitio se encuentran debidamente protegidos bajo las leyes correspondientes en México.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Exclusión de garantías y responsabilidad</h2>
          <p>
            Por el solo hecho de acceder al Sitio, el Usuario reconoce y acepta que el uso del mismo es bajo su exclusiva responsabilidad. Grupo Nelson no garantiza la ausencia de virus u otros elementos que puedan producir alteraciones en el sistema informático del Usuario.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Propiedad intelectual</h2>
          <p>
            Grupo Nelson autoriza al Usuario a utilizar el Sitio exclusivamente en los términos aquí expresados, sin que ello implique que concede licencia o autorización alguna respecto a la propiedad intelectual de Grupo Nelson, incluyendo marcas registradas, diseños industriales, nombres comerciales y derechos de autor.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Ley aplicable y jurisdicción</h2>
          <p>
            En todo lo relacionado con la interpretación y cumplimiento de lo aquí dispuesto, los Usuarios aceptan someterse a las leyes aplicables y a la jurisdicción de los tribunales competentes en Mexicali, Baja California, México.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Modificaciones</h2>
          <p>
            Grupo Nelson se reserva el derecho de modificar en cualquier momento estos Términos de Uso. Las modificaciones se publicarán en este Sitio.
          </p>
        </section>
      </div>
    </>
  )
}

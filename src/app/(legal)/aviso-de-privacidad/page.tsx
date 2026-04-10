import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad',
  description: 'Aviso de privacidad de Grupo Nelson. Protección de datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
}

export default function AvisoDePrivacidadPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Aviso Legal</p>
        <h1 className="text-3xl font-light tracking-tight sm:text-4xl">Aviso de Privacidad</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última modificación — 10 de abril de 2026</p>
      </div>

      {/* Body */}
      <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Nuestras políticas de confidencialidad y privacidad de protección de datos personales y el presente aviso de privacidad (en adelante, el &quot;Aviso&quot;) se encuentran en estricto cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y los Lineamientos del Aviso de Privacidad con el objeto de que usted pueda conocer nuestro compromiso y responsabilidad de proteger los datos que nos proporcione.
        </p>

        <p>
          Este aviso de privacidad aplica a la página específica de nelson.com.mx (en adelante &quot;este sitio web&quot;). Usted tiene a su disposición, en todo momento, este Aviso en nuestra página de internet <Link href="/" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">nelson.com.mx</Link>.
        </p>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Identidad y domicilio del responsable</h2>
          <p>
            Parque Industrial Nelson S.A. de C.V. (en adelante, &quot;Grupo Nelson&quot;), con domicilio en Blvd. Lázaro Cárdenas 9850, Mexicali, Baja California, México, y correo electrónico <a href="mailto:contacto@nelson.com.mx" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">contacto@nelson.com.mx</a> es el responsable de recabar sus datos personales, el uso que se le dé a los mismos y de su protección.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Recopilación de la información</h2>
          <p>
            Como visitante de este sitio web, usted no está obligado a proporcionar información personal. Este sitio web únicamente recopila información personal que es específica y voluntariamente proporcionada por cada visitante. Esa información puede consistir en, pero sin limitarse a, su nombre, cargo actual, la dirección de su empresa, su dirección de correo electrónico así como su número telefónico.
          </p>
          <p>
            Nuestro sitio web recopila la información que cada usuario desee proporcionar voluntariamente a través del formulario de contacto publicado en <Link href="/contacto" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">nelson.com.mx/contacto</Link>. En este sitio no solicitamos información sensible de los visitantes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Información de registro, cookies y web beacons</h2>
          <p>
            Este sitio recaba información estandarizada de registro, incluyendo su dirección IP, tipo de navegador, el idioma, tiempos de acceso y direcciones de sitios web. Para asegurar que este sitio web está siendo bien administrado y facilitar una mejor navegación, nosotros o nuestros proveedores de servicios podemos utilizar cookies o web beacons para recabar datos agregados.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Finalidades del tratamiento</h2>
          <p>
            Los datos personales recabados en este sitio web podrán ser utilizados con la finalidad de: (i) identificación del solicitante; (ii) proporcionar información sobre naves industriales, terrenos y servicios de construcción; (iii) enviar notificaciones relacionadas con el servicio solicitado; (iv) atención de consultas, dudas, aclaraciones o reclamaciones; y (v) dar cumplimiento a disposiciones legales.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Transferencias de datos</h2>
          <p>
            Grupo Nelson podrá transferir sus datos personales a terceros mexicanos o extranjeros cuando la transferencia (i) esté prevista en una ley o tratado; (ii) sea efectuada a sociedades controladoras, subsidiarias o afiliadas; (iii) sea necesaria por virtud de un contrato; (iv) sea necesaria para la salvaguarda de un interés público; o (v) sea precisa para el mantenimiento de una relación jurídica entre Grupo Nelson y el titular.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Derechos ARCO</h2>
          <p>
            Si desea ejercer los derechos de acceso, rectificación, cancelación u oposición de sus datos personales podrá solicitarlo en cualquier momento mediante el envío de un correo electrónico a <a href="mailto:contacto@nelson.com.mx" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">contacto@nelson.com.mx</a>.
          </p>
          <p>
            Una vez recibida la solicitud, Grupo Nelson le comunicará en un plazo máximo de 20 días la determinación adoptada, a efecto de que, si resulta procedente, se haga efectiva dentro de los 15 días siguientes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-foreground tracking-tight">Modificaciones al Aviso</h2>
          <p>
            Grupo Nelson se reserva el derecho de realizar cualquier modificación al presente Aviso. Estas modificaciones se darán a conocer a través de este sitio web.
          </p>
        </section>
      </div>
    </>
  )
}

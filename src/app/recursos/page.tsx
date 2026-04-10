import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Recursos',
  description:
    'Documentación oficial de normas, certificaciones y estándares que Grupo Nelson y Baumex implementan en sus desarrollos industriales.',
  alternates: { canonical: 'https://gruponelson.mx/recursos' },
}

const categories = [
  {
    title: 'Certificaciones ambientales y energéticas',
    resources: [
      {
        name: 'LEED',
        fullName: 'Leadership in Energy and Environmental Design',
        description:
          'Sistema de certificación de edificios sustentables del U.S. Green Building Council. Evalúa eficiencia energética, uso de agua, materiales y calidad ambiental interior.',
        url: 'https://www.usgbc.org/leed',
        org: 'USGBC',
      },
    ],
  },
  {
    title: 'Seguridad industrial y protección contra incendio',
    resources: [
      {
        name: 'FM Approved',
        fullName: 'FM Approvals',
        description:
          'Certificación de FM Global que valida productos, materiales y servicios para protección contra incendios y otros riesgos industriales. Las instalaciones que cumplen requerimientos FM operan bajo estándares internacionales de mitigación de riesgo.',
        url: 'https://www.fmapprovals.com/en',
        org: 'FM Global',
      },
      {
        name: 'NFPA',
        fullName: 'National Fire Protection Association',
        description:
          'Organización que desarrolla códigos y estándares de protección contra incendios. Los estándares NFPA definen los requerimientos para sistemas de rociadores, detección, alarmas y supresión de incendios en instalaciones industriales.',
        url: 'https://www.nfpa.org/codes-and-standards',
        org: 'NFPA',
      },
      {
        name: 'ISNetworld',
        fullName: 'ISN — ISNetworld',
        description:
          'Plataforma global de gestión de contratistas que verifica cumplimiento en seguridad, salud, medioambiente y calidad. Permite a las empresas documentar y validar sus prácticas de seguridad ante clientes internacionales.',
        url: 'https://www.isnetworld.com/en/',
        org: 'ISN',
      },
    ],
  },
  {
    title: 'Códigos de construcción y sistemas estructurales',
    resources: [
      {
        name: 'IBC',
        fullName: 'International Building Code',
        description:
          'Código de construcción internacional publicado por el International Code Council. Define requerimientos de diseño estructural, protección contra incendios, accesibilidad y sistemas mecánicos para edificaciones.',
        url: 'https://www.iccsafe.org/products-and-services/i-codes/ibc/',
        org: 'ICC',
      },
      {
        name: 'BRB',
        fullName: 'Buckling-Restrained Braces (AISC 341)',
        description:
          'Sistema estructural antisísmico que absorbe energía durante un sismo sin pandeo. Codificado en AISC 341 (Seismic Provisions for Structural Steel Buildings) como marco arriostrado de pandeo restringido (BRBF).',
        url: 'https://www.aisc.org/publications/steel-standards/aisc-341/',
        org: 'AISC',
      },
    ],
  },
  {
    title: 'Normas mexicanas de seguridad laboral',
    resources: [
      {
        name: 'NOM-009-STPS-2011',
        fullName: 'Condiciones de seguridad para realizar trabajos en altura',
        description:
          'Norma oficial mexicana de la Secretaría del Trabajo que establece los requerimientos de seguridad para trabajo en alturas: control de presión arterial, checklists de caída, permisos diarios y firmas escalonadas.',
        url: 'https://dof.gob.mx/normasOficiales/4377/stps/stps.htm',
        org: 'STPS / DOF',
      },
      {
        name: 'NOM-027-STPS-2008',
        fullName:
          'Actividades de soldadura y corte — condiciones de seguridad e higiene',
        description:
          'Norma oficial mexicana que regula el trabajo con fuego: soldadura, oxicorte y operaciones con flama abierta. Requiere vigía vigilante de incendios, permisos de trabajo en caliente y protocolos de seguridad documentados.',
        url: 'https://www.dof.gob.mx/normasOficiales/3536/stps1/stps1.htm',
        org: 'STPS / DOF',
      },
      {
        name: 'DC-3',
        fullName: 'Constancia de Competencias o de Habilidades Laborales',
        description:
          'Certificación mexicana emitida por la STPS que acredita que un trabajador ha sido capacitado en las competencias requeridas para su puesto. Todo el personal de obra debe contar con esta constancia vigente.',
        url: 'https://www.stps.gob.mx/gobmx/masinfo/STPS_04_002.html',
        org: 'STPS',
      },
    ],
  },
]

export default function RecursosPage() {
  return (
    <div className="overflow-x-clip">
      <Header />

      <main className="min-h-screen px-6 pt-32 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Documentación de referencia
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter leading-none text-gray-900 dark:text-white mb-4">
            Recursos
          </h1>
          <p className="text-lg font-light tracking-wide text-gray-500 dark:text-gray-400 mb-16 max-w-2xl leading-relaxed">
            Normas, certificaciones y estándares que Grupo Nelson y Baumex
            implementan en el desarrollo y operación de parques industriales.
          </p>

          <div className="space-y-16">
            {categories.map((category) => (
              <section key={category.title}>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6 border-b border-gray-200 dark:border-gray-800 pb-3">
                  {category.title}
                </h2>

                <div className="space-y-8">
                  {category.resources.map((resource) => (
                    <article key={resource.name} className="group">
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {resource.name}
                        </h3>
                        <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                          {resource.org}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 italic">
                        {resource.fullName}
                      </p>
                      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                        {resource.description}
                      </p>
                      <Link
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Ver documentación oficial
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

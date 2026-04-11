import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Official documentation on standards, certifications and codes that Grupo Nelson and Baumex implement in their industrial developments.',
  alternates: { canonical: 'https://nelson.com.mx/resources' },
}

const categories = [
  {
    title: 'Environmental and energy certifications',
    resources: [
      {
        name: 'LEED',
        fullName: 'Leadership in Energy and Environmental Design',
        description:
          'Sustainable building certification system from the U.S. Green Building Council. Evaluates energy efficiency, water usage, materials and indoor environmental quality.',
        url: 'https://www.usgbc.org/leed',
        org: 'USGBC',
      },
    ],
  },
  {
    title: 'Industrial safety and fire protection',
    resources: [
      {
        name: 'FM Approved',
        fullName: 'FM Approvals',
        description:
          'FM Global certification that validates products, materials and services for fire protection and other industrial risks. Facilities meeting FM requirements operate under international risk mitigation standards.',
        url: 'https://www.fmapprovals.com/en',
        org: 'FM Global',
      },
      {
        name: 'NFPA',
        fullName: 'National Fire Protection Association',
        description:
          'Organization that develops fire protection codes and standards. NFPA standards define requirements for sprinkler systems, detection, alarms and fire suppression in industrial facilities.',
        url: 'https://www.nfpa.org/codes-and-standards',
        org: 'NFPA',
      },
      {
        name: 'ISNetworld',
        fullName: 'ISN — ISNetworld',
        description:
          'Global contractor management platform that verifies compliance in safety, health, environment and quality. Enables companies to document and validate their safety practices for international clients.',
        url: 'https://www.isnetworld.com/en/',
        org: 'ISN',
      },
    ],
  },
  {
    title: 'Building codes and structural systems',
    resources: [
      {
        name: 'IBC',
        fullName: 'International Building Code',
        description:
          'International building code published by the International Code Council. Defines requirements for structural design, fire protection, accessibility and mechanical systems for buildings.',
        url: 'https://www.iccsafe.org/products-and-services/i-codes/ibc/',
        org: 'ICC',
      },
      {
        name: 'BRB',
        fullName: 'Buckling-Restrained Braces (AISC 341)',
        description:
          'Seismic structural system that absorbs energy during an earthquake without buckling. Codified in AISC 341 (Seismic Provisions for Structural Steel Buildings) as a buckling-restrained braced frame (BRBF).',
        url: 'https://www.aisc.org/publications/steel-standards/aisc-341/',
        org: 'AISC',
      },
    ],
  },
  {
    title: 'Mexican occupational safety standards',
    resources: [
      {
        name: 'NOM-009-STPS-2011',
        fullName: 'Safety conditions for working at heights',
        description:
          'Official Mexican standard from the Ministry of Labor establishing safety requirements for work at heights: blood pressure monitoring, fall checklists, daily permits and cascading signatures.',
        url: 'https://dof.gob.mx/normasOficiales/4377/stps/stps.htm',
        org: 'STPS / DOF',
      },
      {
        name: 'NOM-027-STPS-2008',
        fullName:
          'Welding and cutting activities — safety and hygiene conditions',
        description:
          'Official Mexican standard regulating hot work: welding, oxy-fuel cutting and open flame operations. Requires a fire watch, hot work permits and documented safety protocols.',
        url: 'https://www.dof.gob.mx/normasOficiales/3536/stps1/stps1.htm',
        org: 'STPS / DOF',
      },
      {
        name: 'DC-3',
        fullName: 'Certificate of Competencies or Work Skills',
        description:
          'Mexican certification issued by the Ministry of Labor (STPS) that certifies a worker has been trained in the competencies required for their position. All on-site personnel must hold a valid certificate.',
        url: 'https://www.stps.gob.mx/gobmx/masinfo/STPS_04_002.html',
        org: 'STPS',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="overflow-x-clip">
      <Header lang="en" />

      <main className="min-h-screen px-6 pt-32 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Reference documentation
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter leading-none text-gray-900 dark:text-white mb-4">
            Resources
          </h1>
          <p className="text-lg font-light tracking-wide text-gray-500 dark:text-gray-400 mb-16 max-w-2xl leading-relaxed">
            Standards, certifications and codes that Grupo Nelson and Baumex
            implement in the development and operation of industrial parks.
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
                        View official documentation
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

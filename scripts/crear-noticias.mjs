import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// IDs de categorías (ya publicadas en Sanity)
const CATEGORIAS = {
  'grupo-nelson':             'ede6431e-b11a-4700-a85e-6b936d3a33f0',
  'industria-maquiladora':   '619622ef-df26-4b1f-a9ea-59e7360298bc',
  'negocios':                'd8dbec60-d79e-4c49-83a3-6b810c0d7979',
  'construccion':            'cae0bca7-6cd3-4509-b0ff-3ca015529f20',
  'internacional':           'c35cc4ab-4a8a-4e63-99ad-560653b7f9a1',
  'tecnologia-sostenibilidad': 'a39a907d-5bee-45ca-ab6a-52ac8cc8ff2a',
}

// ID del autor Luis M.
const AUTOR_ID = '4lXD1QprlKmqniOHakgCyU'

// Lorem ipsum por párrafo (4 párrafos, ~800 palabras en total)
const LOREM = {
  p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper.',
  p2: 'Sed commodo posuere pede. Mauris ut est. Ut quis purus. Sed ac odio. Sed vehicula hendrerit sem. Duis non odio. Morbi ut dui. Sed accumsan risus eget odio. In hac habitasse platea dictumst. Pellentesque non elit. Fusce sed justo eu urna porta tincidunt. Mauris felis odio, sollicitudin sed, volutpat a, ornare ac, arcu. Morbi ut dui. Sed accumsan risus eget odio. In hac habitasse platea dictumst. Pellentesque non elit. Fusce sed justo eu urna porta tincidunt. Mauris felis odio, sollicitudin sed, volutpat a, ornare ac, arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  p3: 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Nullam in enim. Pellentesque felis orci, sagittis ac, malesuada et, facilisis in, ligula. Nunc non enim ac nunc interdum laoreet. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Suspendisse porta. Nunc id augue. Sed rhoncus, est sed blandit pretium, nunc libero ornare metus, vel fringilla justo odio ut est. Fusce fringilla, mi at scelerisque dignissim, justo eros cursus dolor, sit amet condimentum libero nibh eget nisl. Integer vitae neque in lorem porttitor tincidunt.',
  p4: 'Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus.',
  descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation.',
}

// Construye un bloque de Portable Text a partir de texto plano
function bloque(texto, key) {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text: texto, marks: [] }],
  }
}

// Body en formato internacionalizado con 4 párrafos
function buildBody() {
  return [
    {
      _key: 'es',
      _type: 'internationalizedArrayBlockContentValue',
      value: [
        bloque(LOREM.p1, 'p1'),
        bloque(LOREM.p2, 'p2'),
        bloque(LOREM.p3, 'p3'),
        bloque(LOREM.p4, 'p4'),
      ],
    },
  ]
}

// Las 12 noticias
const NOTICIAS = [
  {
    titulo: 'Gulfstream Invierte USD 350 Millones en Nave Industrial en el Parque Nelson II de Mexicali',
    slug: 'gulfstream-invierte-usd-350-millones-nave-industrial-parque-nelson-ii-mexicali',
    categoria: 'grupo-nelson',
    fecha: '2026-01-15T12:00:00Z',
  },
  {
    titulo: 'Grupo Nelson Lanza su Nuevo Sitio Web Corporativo con Enfoque en el Mercado Internacional',
    slug: 'grupo-nelson-lanza-nuevo-sitio-web-corporativo-mercado-internacional',
    categoria: 'grupo-nelson',
    fecha: '2026-02-03T12:00:00Z',
  },
  {
    titulo: 'Grupo Nelson Celebra 60 Años como Pioneros de la Industria Maquiladora en México',
    slug: 'grupo-nelson-celebra-60-anos-pioneros-industria-maquiladora-mexico',
    categoria: 'grupo-nelson',
    fecha: '2026-03-10T12:00:00Z',
  },
  {
    titulo: 'Mexicali Mantiene Tasas de Vacancia Históricamente Bajas en Parques Industriales: Panorama 2025–2026',
    slug: 'mexicali-tasas-vacancia-bajas-parques-industriales-panorama-2025-2026',
    categoria: 'industria-maquiladora',
    fecha: '2026-02-10T12:00:00Z',
  },
  {
    titulo: 'El Nearshoring Impulsa la Creación de Empleos Industriales en Baja California: Cifras y Perspectivas',
    slug: 'nearshoring-empleos-industriales-baja-california-cifras-perspectivas',
    categoria: 'industria-maquiladora',
    fecha: '2026-02-18T12:00:00Z',
  },
  {
    titulo: 'Automotriz, Aeroespacial y Medtech: Los Sectores que Más Demandan Naves Industriales en Baja California',
    slug: 'automotriz-aeroespacial-medtech-sectores-naves-industriales-baja-california',
    categoria: 'industria-maquiladora',
    fecha: '2026-03-05T12:00:00Z',
  },
  {
    titulo: 'México Rompe Récord de Inversión Extranjera Directa en 2025: Lo que Significa para el Sector Industrial',
    slug: 'mexico-record-inversion-extranjera-directa-2025-sector-industrial',
    categoria: 'negocios',
    fecha: '2026-02-12T12:00:00Z',
  },
  {
    titulo: 'Otra Empresa de la Lista Fortune 500 Elige Baja California para su Expansión en México',
    slug: 'fortune-500-elige-baja-california-expansion-mexico',
    categoria: 'negocios',
    fecha: '2026-03-18T12:00:00Z',
  },
  {
    titulo: 'Tarifas Arancelarias de EE.UU.: Impacto Real en la Manufactura y la Inversión en México',
    slug: 'tarifas-arancelarias-eeuu-impacto-manufactura-inversion-mexico',
    categoria: 'internacional',
    fecha: '2026-02-20T12:00:00Z',
  },
  {
    titulo: 'Por Qué Empresas de Corea, Taiwán y Japón Están Eligiendo México sobre Otros Destinos',
    slug: 'empresas-corea-taiwan-japon-eligen-mexico-sobre-otros-destinos',
    categoria: 'internacional',
    fecha: '2026-03-25T12:00:00Z',
  },
  {
    titulo: 'La Demanda de Naves Clase A Transforma el Desarrollo Industrial en Mexicali y Baja California',
    slug: 'demanda-naves-clase-a-desarrollo-industrial-mexicali-baja-california',
    categoria: 'construccion',
    fecha: '2026-03-12T12:00:00Z',
  },
  {
    titulo: 'Certificación LEED en Parques Industriales: El Estándar que las Multinacionales Ya Exigen en México',
    slug: 'certificacion-leed-parques-industriales-estandar-multinacionales-mexico',
    categoria: 'tecnologia-sostenibilidad',
    fecha: '2026-04-07T12:00:00Z',
  },
]

async function main() {
  console.log(`\nCreando ${NOTICIAS.length} noticias en Sanity...\n`)

  for (let i = 0; i < NOTICIAS.length; i++) {
    const n = NOTICIAS[i]
    const num = String(i + 1).padStart(2, '0')
    process.stdout.write(`[${num}/${NOTICIAS.length}] ${n.titulo.slice(0, 60)}... `)

    try {
      const doc = await client.create({
        _type: 'noticia',
        title: [{ _key: 'es', _type: 'internationalizedArrayStringValue', value: n.titulo }],
        slug: { _type: 'slug', current: n.slug },
        description: [{ _key: 'es', _type: 'internationalizedArrayTextValue', value: LOREM.descripcion }],
        body: buildBody(),
        publishedAt: n.fecha,
        category: { _type: 'reference', _ref: CATEGORIAS[n.categoria] },
        authors: [{ _key: 'author-0', _type: 'reference', _ref: AUTOR_ID }],
      })
      console.log(`✓ (${doc._id})`)
    } catch (err) {
      console.log(`✗ ERROR: ${err.message}`)
    }
  }

  console.log('\n¡Listo! Revisa /noticias para ver las noticias.')
}

main()

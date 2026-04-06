'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  ChevronDown,
  ChevronRight,
  Circle,
  CheckCircle2,
  AlertCircle,
  MinusCircle,
  ExternalLink,
} from 'lucide-react'

// ─── Tipos ───────────────────────────────────────────────────────────
type PageStatus =
  | 'con-contenido'
  | 'con-componentes'
  | 'stub'
  | 'no-existe'
  | 'fuera-del-proceso'

interface PageTopic {
  title: string
  description: string
  estimatedWords?: number
  estimatedPhotos?: number
  notes?: string
}

interface PageDefinition {
  id: string
  name: string
  url: string
  status: PageStatus
  topics?: PageTopic[]
  summary?: string
  notes?: string
}

interface SectionDefinition {
  name: string
  pages: PageDefinition[]
}

// ─── Datos ───────────────────────────────────────────────────────────
const sections: SectionDefinition[] = [
  {
    name: 'Nosotros',
    pages: [
      {
        id: 'nuestra-historia',
        name: 'Nuestra Historia',
        url: '/nelson/nuestra-historia',
        status: 'con-contenido',
        summary:
          'Ya tiene contenido con 3 columnas, biografía del fundador, tarjeta BTS. Es la página más alta del flyout → más clickeada → más contenido.',
        topics: [
          {
            title: 'Orígenes: La primera maquiladora de Mexicali',
            description:
              'Cómo la familia Nelson instaló la primera maquiladora en Mexicali en los años 60, creando la industria que hoy define a la ciudad.',
            estimatedWords: 400,
            estimatedPhotos: 2,
            notes: 'Ya existe contenido. Revisar y expandir si es necesario.',
          },
          {
            title: 'Evolución: De un parque a un ecosistema industrial',
            description:
              'El Vigía → Nelson I → Nelson II. Tres generaciones de parques que reflejan la evolución de la industria.',
            estimatedWords: 300,
            estimatedPhotos: 3,
          },
          {
            title: 'Visión a futuro: 65 años y contando',
            description:
              'La empresa familiar que sigue creciendo con la misma filosofía conservadora y relaciones de largo plazo.',
            estimatedWords: 200,
            estimatedPhotos: 1,
          },
        ],
      },
      {
        id: 'diferencia-nelson',
        name: 'La Diferencia Nelson',
        url: '/nelson/diferencia-nelson',
        status: 'con-contenido',
        summary:
          'Copy comercial escrito. H1: "Con Nelson, hablas con los dueños". 3 diferenciadores: 60+ años, owner-operated, constructora in-house. Infraestructura Fortune 500. Pendiente: QA y migración a componentes.',
        topics: [
          {
            title: 'Owner Involvement: Hablas directo con los dueños',
            description:
              'A diferencia de competidores donde tratas con ejecutivos rotativos, en Grupo Nelson los dueños están involucrados directamente. Empresa familiar con estructura plana = decisiones rápidas.',
            estimatedWords: 250,
            estimatedPhotos: 1,
            notes:
              'Los propios dueños lo mencionaron como diferenciador clave en las reuniones.',
          },
          {
            title: 'Pioneros desde 1965: La empresa más antigua del sector en Mexicali',
            description:
              'Grupo Nelson fundó la industria maquiladora en Mexicali. 60 años de experiencia no se improvisan. Mientras otros llevan 15-20 años, Nelson lleva 60.',
            estimatedWords: 250,
            estimatedPhotos: 1,
          },
          {
            title: 'Constructora in-house: Build-to-suit con experiencia técnica real',
            description:
              'Baumex, la constructora propia, permite construir naves a la medida con control total del proceso. No subcontratan la construcción. Esto se traduce en plazos más cortos y calidad asegurada.',
            estimatedWords: 250,
            estimatedPhotos: 1,
          },
        ],
      },
      {
        id: 'liderazgo',
        name: 'Liderazgo',
        url: '/nelson/liderazgo',
        status: 'con-contenido',
        summary:
          'Copy comercial escrito. H1: "Hacemos nearshoring en Mexicali desde antes de que existiera la palabra". 80% repeat, casos Gulfstream/Honeywell/Interiores Aéreos, directiva familiar. Pendiente: QA y migración a componentes.',
        topics: [
          {
            title: 'Tres generaciones al frente',
            description:
              'Desde el fundador hasta la generación actual: Humberto (comercial), Rodolfo (constructora), Juan Carlos (administración), Alfredo (operaciones). Cada uno aporta una especialidad.',
            estimatedWords: 300,
            estimatedPhotos: 4,
            notes:
              'Necesitamos fotos profesionales del equipo directivo. Humberto Jr. podría tomarlas.',
          },
        ],
      },
      {
        id: 'trayectoria',
        name: 'Trayectoria Comprobada',
        url: '/nelson/trayectoria',
        status: 'con-contenido',
        summary:
          'Copy comercial escrito. H1: "60 años construyendo naves industriales para empresas Fortune 500". Timeline 1965→hoy, 8 números, placeholder grid 30 logos. Pendiente: QA, componente visual de logos y migración.',
        topics: [
          {
            title: 'Clientes Fortune 500 que confían en nosotros',
            description:
              'Gulfstream (35 años, 5 naves), Honeywell (30+ años), y otros clientes Triple A que eligieron Grupo Nelson.',
            estimatedWords: 300,
            estimatedPhotos: 3,
          },
          {
            title: '80% repeat business',
            description:
              'La métrica que define la calidad del servicio: 8 de cada 10 clientes regresan. Interiores Aéreos creció de 5,000 a 550,000 ft² con Nelson.',
            estimatedWords: 200,
            estimatedPhotos: 1,
          },
          {
            title: 'Casi 4 millones de pies cuadrados construidos',
            description:
              'Portafolio que los coloca entre los top 3-4 desarrolladores de Mexicali por volumen total.',
            estimatedWords: 150,
            estimatedPhotos: 1,
          },
        ],
      },
    ],
  },
  {
    name: 'Constructora',
    pages: [
      {
        id: 'baumex',
        name: 'Baumex Constructora',
        url: '/constructora/baumex',
        status: 'con-contenido',
        summary:
          'Copy comercial aprobado 17/17 QA (rev03). 6 temas: constructora propia, track record, project management, safety, certificaciones, ejecución completa. Debajo: 20+ componentes con props placeholder pendientes de migración.',
        topics: [
          {
            title: 'Constructora propia, no subcontratada',
            description:
              'Baumex es el brazo de ejecución integrado de Grupo Nelson — un solo punto de responsabilidad desde diseño hasta entrega. Mientras otros desarrolladores subcontratan, Nelson diseña y construye con equipo propio: arquitectura, ingeniería civil, estructural, eléctrica y mecánica.',
            estimatedWords: 300,
            estimatedPhotos: 2,
            notes:
              'Tema A del desempaquetado. Alimenta temas comerciales #2 Turnkey, #3 BTS, #4 Excellence, #6 Trusted Partner.',
          },
          {
            title: '4M+ ft² construidos para 33 corporaciones internacionales',
            description:
              'Track record verificable proyecto por proyecto. Fortune 500: Gulfstream, Honeywell, DHL, Emerson. Proyecto activo: Gulfstream 550K (52,200 m²). Diversidad geográfica: Mexicali, Hermosillo, Tecate, Jalisco. Diversidad de industrias: aeroespacial, manufactura, logística, papel, dispositivos médicos.',
            estimatedWords: 350,
            estimatedPhotos: 3,
            notes:
              'Tema B del desempaquetado. Datos duros: 1,092,745 HHT, 450 trabajadores simultáneos, 45+ subcontratistas.',
          },
          {
            title: 'Gestión de proyecto con rigor institucional',
            description:
              'Ruta crítica con 18 hitos monitoreados, control de submittals, long lead items, reuniones semanales con 16+ asistentes, Gantt charts de 225 días, ERP de gestión. No es un contratista improvisado — opera con el rigor de una firma de project management.',
            estimatedWords: 300,
            estimatedPhotos: 1,
            notes:
              'Tema C del desempaquetado. Alimenta #2 Turnkey, #4 Excellence, #10 Global Standards.',
          },
          {
            title: '1M+ horas hombre con cero muertes',
            description:
              'Cultura de seguridad documentada diariamente: manual HSE de 18 capítulos, permisos de trabajo diarios con matriz de riesgo, permisos especializados NOM-009 y NOM-027, scorecard transparente de incidentes. Récord de 404 días sin accidentes.',
            estimatedWords: 300,
            estimatedPhotos: 2,
            notes:
              'Tema D del desempaquetado. Alimenta #1 World-Class, #8 Operational Reliability, #10 Global Standards.',
          },
          {
            title: '"Recomendado" por Honeywell en ISN',
            description:
              'Certificaciones que son filtros de acceso: ISN (ISNetworld) con calificación "Recomendado" por Honeywell, LEED Knowledgeable, quality testing por laboratorio externo EPGC. Sin ISN no entras a la cadena de proveedores de Honeywell.',
            estimatedWords: 200,
            estimatedPhotos: 1,
            notes:
              'Tema E del desempaquetado. Alimenta #1 World-Class, #7 Sustainable Design, #10 Global Standards.',
          },
          {
            title: '10 disciplinas constructivas ejecutadas directamente',
            description:
              'De terracerías a acabados, todo in-house: terracerías, cimentación, mampostería, estructura metálica, techumbre, fachadas, tablaroca, acabados, instalación eléctrica e instalación mecánica. Evidencia fotográfica de cada etapa.',
            estimatedWords: 250,
            estimatedPhotos: 4,
            notes:
              'Tema F del desempaquetado. Alimenta #2 Turnkey, #3 BTS, #4 Excellence.',
          },
        ],
        notes:
          'Los 6 temas vienen del desempaquetado comercial (docs/fase-2-desempaquetado-comercial-baumex.md). Aplicar las 12 reglas de copywriting del research.',
      },
      {
        id: 'diseno-ingenieria',
        name: 'Diseño e Ingeniería',
        url: '/constructora/diseno-e-ingenieria',
        status: 'con-componentes',
        summary:
          'Tiene 12 componentes Greek letter (Mu-Psi). Tema comercial #5: Engineering Innovation.',
        topics: [
          {
            title: 'Equipo multidisciplinario de diseño in-house',
            description:
              'Departamentos especializados propios: arquitectura (Martín Pereira), civil (Rogelio Blanco), estructural (Benjamín Terán), eléctrico/controles (Salvador Fonseca / Carlos Chávez), mecánico/plomería (Glen Otis). No subcontratan el diseño — lo ejecutan internamente.',
            estimatedWords: 250,
            estimatedPhotos: 1,
            notes: 'Datos del organigrama de Baumex (id-info-5 del temario).',
          },
          {
            title: 'Diseño bajo códigos internacionales, no locales',
            description:
              'Baumex no usa el reglamento de Baja California para diseño estructural — usa International Building Code (IBC). Aprovecha el historial sísmico de California (falla de Imperial, falla de San Andrés) para diseños más exigentes que lo que exige la normativa mexicana.',
            estimatedWords: 300,
            estimatedPhotos: 1,
            notes: 'Dato de entrevista con Armando Wilhelmy. Diferenciador técnico importante.',
          },
          {
            title: 'Innovación en sistemas antisísmicos: BRB',
            description:
              'Primera constructora en Mexicali en usar disipadores de energía BRB (Buckling-Restrained Braces) en la nave Gulfstream 550K. Solo 2-3 naves en toda la ciudad tienen esta tecnología. Diseño que permite seguir operando después de un sismo — motivado por la experiencia del terremoto 7.2 de 2010.',
            estimatedWords: 300,
            estimatedPhotos: 2,
            notes: 'Dato de Armando Wilhelmy. Tecnología nueva para Grupo Nelson — vale la pena destacar.',
          },
          {
            title: 'Capacidad eléctrica y sistemas especializados',
            description:
              'Diseño de sistemas eléctricos de gran capacidad: 20 MW (20,000 KVA) instalados para Gulfstream 550K — totalmente inusual para una nave industrial. 3,200 toneladas de aire acondicionado con equipos de mínimo consumo. Diseño de sistemas contra incendio bajo estándares Factory Mutual.',
            estimatedWords: 250,
            estimatedPhotos: 1,
            notes: 'Datos de Armando Wilhelmy sobre Gulfstream 550K.',
          },
        ],
        notes: 'Alimenta tema comercial #5 Engineering Innovation. Material de Armando Wilhelmy + organigrama Baumex.',
      },
      {
        id: 'build-to-suit',
        name: 'Build-to-Suit',
        url: '/constructora/build-to-suit',
        status: 'con-componentes',
        summary:
          'Hero video + 5 componentes Greek letter (Alpha-Epsilon). Tema comercial #3: Build-to-Suit. Core del negocio.',
        topics: [
          {
            title: 'Qué es Build-to-Suit y por qué importa',
            description:
              'Diferencia entre shell buildings (inventario estándar), spec buildings (construidas sin cliente) y build-to-suit (diseñadas para tu operación exacta). Grupo Nelson no construye inventario especulativo — solo construye cuando un cliente específico lo solicita.',
            estimatedWords: 300,
            estimatedPhotos: 1,
            notes: 'Tema comercial #3. Explicar la diferencia es clave porque muchos prospects no la conocen.',
          },
          {
            title: 'El proceso: de tu especificación a la entrega de llaves',
            description:
              'Proceso colaborativo: brief → diseño ejecutivo → permisos → construcción → entrega. El equipo de ingeniería de Baumex trabaja directamente con el equipo técnico del cliente. Timelines típicos: 90-180 días según escala.',
            estimatedWords: 300,
            estimatedPhotos: 2,
            notes: 'Enfatizar que el proceso es colaborativo, no impuesto.',
          },
          {
            title: 'Especialización por industria',
            description:
              'Requerimientos específicos que Baumex domina: aeroespacial (Gulfstream — clear heights, certificaciones, áreas limpias), manufactura de precisión (Honeywell — túneles de viento, celdas de prueba), logística (DHL — expansión sin interrupción operativa), infraestructura crítica (Vertiv — condiciones controladas).',
            estimatedWords: 350,
            estimatedPhotos: 2,
            notes: 'Cada industria tiene requerimientos únicos. Mostrar que Baumex los conoce.',
          },
          {
            title: 'Build-to-suit vs. adaptar nave existente',
            description:
              'Análisis de valor: cuándo conviene construir a la medida vs. adaptar una nave de inventario. Para operaciones con requerimientos específicos (clear heights, capacidad eléctrica, certificaciones), el BTS es más eficiente que forzar una nave estándar.',
            estimatedWords: 250,
            estimatedPhotos: 1,
          },
        ],
        notes: 'Tema comercial #3. Es el core business de la constructora.',
      },
      {
        id: 'llave-en-mano',
        name: 'Llave en Mano',
        url: '/constructora/llave-en-mano',
        status: 'con-componentes',
        summary:
          'Tiene 6 componentes Greek letter (Zeta-Lambda). Tema comercial #2: Turnkey Solutions.',
        topics: [
          {
            title: 'Un solo contrato, un solo responsable',
            description:
              'Baumex maneja diseño, permisos municipales/estatales/federales, construcción y equipamiento bajo un solo contrato. Elimina la fricción de coordinar múltiples contratistas. Un solo punto de contacto desde el primer plano hasta la última inspección.',
            estimatedWords: 250,
            estimatedPhotos: 1,
            notes: 'Tema comercial #2. Enfatizar la desintermediación.',
          },
          {
            title: 'Gestión regulatoria completa',
            description:
              'Baumex gestiona todos los permisos: municipales (licencia de construcción, bomberos, ecología, tránsito), estatales (IMSS, sindicato) y federales (CONAGUA cuando aplica, como en el puente Skyworks). El cliente no tiene que navegar la burocracia mexicana.',
            estimatedWords: 250,
            estimatedPhotos: 1,
            notes: 'Dato de las minutas de campo y del proyecto Skyworks (Armando Wilhelmy).',
          },
          {
            title: 'La nave lista para operar: qué incluye',
            description:
              'Entrega completa: terracerías, cimentación, estructura, muros, techo, fachadas, interiores, instalación eléctrica (desde subestaciones hasta luminarias), instalación mecánica (HVAC, fire protection), acabados, pisos, sanitarios. El cliente "entra y solo echa a andar las máquinas".',
            estimatedWords: 300,
            estimatedPhotos: 3,
            notes: 'Las 10 disciplinas constructivas del Tema F del desempaquetado.',
          },
        ],
        notes: 'Tema comercial #2 Turnkey Solutions. Complementa Build-to-Suit (#3).',
      },
      {
        id: 'leed',
        name: 'Certificación LEED',
        url: '/constructora/leed',
        status: 'con-contenido',
        summary:
          'Tiene Hero + Sidebar + Carrusel LEED + BigNumber. Copy reescrito con angle brief: argumento de negocio + moat de clima extremo. Conecta con 7 sub-páginas LEED.',
        topics: [],
        notes: 'Ruta legacy /constructora/certificacion-leed eliminada. Las 7 sub-páginas LEED tienen contenido completo.',
      },
      {
        id: 'estandares-internacionales',
        name: 'Estándares Internacionales',
        url: '/constructora/estandares-internacionales',
        status: 'stub',
        summary:
          'Página vacía. Tema comercial #10: Global Standards. Códigos y normativas que aplican en sus construcciones.',
        topics: [
          {
            title: 'International Building Code (IBC) — No usamos reglamento local',
            description:
              'Baumex diseña bajo International Building Code, no bajo el reglamento de Baja California. Aprovecha el historial sísmico de California (falla de Imperial, falla de San Andrés) para diseños estructurales más exigentes que lo que exige la normativa mexicana.',
            estimatedWords: 250,
            estimatedPhotos: 1,
            notes: 'Dato de Armando Wilhelmy. Diferenciador técnico fuerte.',
          },
          {
            title: 'Factory Mutual (FM Global) — El estándar más alto en protección',
            description:
              'La nave Gulfstream 550K está certificada FM Global: muros, paneles, cubierta TPO, estructura metálica, y sistema contra incendio completo diseñados bajo estándares FM. Resultado: primas de seguro significativamente más bajas para el inquilino.',
            estimatedWords: 250,
            estimatedPhotos: 1,
            notes: 'Dato de Armando. FM Global visita la obra constantemente durante construcción.',
          },
          {
            title: 'NFPA — Sistemas contra incendio certificados',
            description:
              'Sistemas centralizados contra incendio en Nelson II: tanque de 360,000 galones, bombas, rociadores, gabinetes y mangueras bajo estándares NFPA. El parque provee la infraestructura de fire protection — el inquilino no tiene que invertir por separado.',
            estimatedWords: 200,
            estimatedPhotos: 1,
          },
          {
            title: 'OSHA + Normas Oficiales Mexicanas — Seguridad dual',
            description:
              'Los manuales de seguridad de Baumex están basados en OSHA (norma americana) además de las Normas Oficiales Mexicanas (NOM-009-STPS alturas, NOM-027-STPS soldadura). Cumplimiento dual que satisface auditorías tanto mexicanas como corporativas internacionales.',
            estimatedWords: 200,
            estimatedPhotos: 1,
            notes: 'Dato de Armando Wilhelmy. Cumplimiento dual es poco común en constructoras mexicanas.',
          },
          {
            title: 'Certificación ISN (ISNetworld) — Filtro de acceso corporativo',
            description:
              'Baumex tiene certificación ISN activa con calificación "Recomendado" por Honeywell International para Aero-Mexicali y Honeywell Mexico-Corporate. ISN es requisito para entrar a la cadena de proveedores de multinacionales.',
            estimatedWords: 150,
            estimatedPhotos: 1,
            notes: 'Del temario Baumex (id-info-8).',
          },
        ],
        notes: 'Tema comercial #10 Global Standards. Material de Armando Wilhelmy + temario Baumex.',
      },
      {
        id: 'portafolio',
        name: 'Portafolio de Proyectos',
        url: '/constructora/portafolio',
        status: 'con-contenido',
        summary: 'Galería de 75+ proyectos de construcción de Baumex. Funcional.',
        topics: [],
        notes: 'Completa. Fuera de este proceso de definición de contenido.',
      },
      {
        id: 'proyectos-especializados',
        name: 'Proyectos Especializados',
        url: '/constructora/proyectos-especializados',
        status: 'con-contenido',
        summary:
          'Copy comercial aprobado 18/18 QA (rev02). 4 proyectos: puente Skyworks 95m, Gulfstream 550K 55,500m², túnel de viento Honeywell 3,000HP, planta Deacero 50,000m². Debajo: componentes con props placeholder.',
        topics: [
          {
            title: 'Puente Vehicular Industrial — Skyworks Semiconductores',
            description:
              '95 metros de claro libre sin columnas intermedias, diseño europeo tipo arco. Conecta dos plantas de semiconductores cruzando un boulevard y un dren federal CONAGUA. Pilas de concreto a 18m de profundidad (terreno colapsable, zona sísmica 4). Colado monolítico en un solo día con 2 bombas. Permisos federales, estatales y municipales. Solo un día se cerró la vialidad.',
            estimatedWords: 400,
            estimatedPhotos: 3,
            notes:
              'Entrevista Armando Wilhelmy. Proyecto que demuestra gestión de permisos multi-nivel y ingeniería extrema.',
          },
          {
            title: 'Gulfstream 550K — La nave más grande de Mexicali',
            description:
              '55,500 m² (5.5 hectáreas bajo techo). 13,500 m² de oficinas — la mayor superficie de oficinas en nave industrial de Mexicali. Sistemas antisísmicos BRB (primera vez en Mexicali). Cubierta TPO (garantía 20 años). Certificación LEED Gold con 10 MW de paneles solares en 50,000 m². Certificación Factory Mutual. 20 MW de capacidad eléctrica. 3,200 toneladas de A/C. Recuperación del 90% de agua de condensación.',
            estimatedWords: 500,
            estimatedPhotos: 4,
            notes:
              'Entrevista Armando Wilhelmy. El proyecto insignia actual — concentra múltiples primeras veces.',
          },
          {
            title: 'Túnel de Viento — Honeywell Aerospace',
            description:
              'Edificio de 20 metros de altura para simular condiciones de vuelo. Blower de 3,000 HP (vs 200-250 HP estándar) con alimentación de alta tensión 4.16 KV. Ductos de 2.5m × 2.5m en placa estructural soldada (no lámina). Puertas blindadas antisonido ($30,000 USD el par). Cimentación diseñada para minimizar vibraciones extremas. 8 meses de construcción.',
            estimatedWords: 350,
            estimatedPhotos: 2,
            notes:
              'Entrevista Armando Wilhelmy. Demuestra capacidad de construir infraestructura altamente especializada.',
          },
          {
            title: 'Deacero — Planta Recicladora de Acero',
            description:
              '50,000 m² de patios (5 hectáreas). Cimentaciones profundas con pilas a 15m para grúas industriales enormes. Cientos de bases para equipos con anclas colocadas al milímetro — reto topográfico extremo para que los equipos importados ensamblaran perfectamente.',
            estimatedWords: 250,
            estimatedPhotos: 2,
            notes: 'Entrevista Armando Wilhelmy.',
          },
          {
            title: 'FAPSA — Construcción simultánea con instalación de equipos',
            description:
              'El proyecto más difícil según Armando: construir la nave mientras el cliente montaba equipos importados de Italia con 8 meses de lead time. Montaje de estructura de noche (7pm-7am), sábados y domingos. Coordinación milimétrica para no dañar equipos carísimos. Demuestra capacidad de operar bajo presión extrema de timeline.',
            estimatedWords: 300,
            estimatedPhotos: 2,
            notes:
              'Entrevista Armando Wilhelmy. Armando lo identifica como lo más difícil que han hecho.',
          },
        ],
        notes:
          'Material 100% de entrevista con Armando Wilhelmy (12 mar 2026). Diferenciado de Baumex: aquí se cuentan las historias completas de los proyectos, no los temas generales.',
      },
    ],
  },
  {
    name: 'Experiencia (redefinida)',
    pages: [
      {
        id: 'excelencia-operativa',
        name: 'Excelencia Operativa',
        url: '/experiencia/excelencia-operativa',
        status: 'no-existe',
        summary:
          'No existe. Tema comercial #8: Operational Reliability. Operación de parques — no de la constructora.',
        topics: [
          {
            title: 'Infraestructura eléctrica con redundancia',
            description:
              'Nelson II cuenta con subestación eléctrica dedicada y línea exclusiva. En una zona con problemas de suministro eléctrico (rezago de infraestructura CFE en Mexicali), esta redundancia es ventaja competitiva real.',
            estimatedWords: 200,
            estimatedPhotos: 1,
          },
          {
            title: 'Sistema centralizado contra incendios',
            description:
              'Tanque de 360,000 galones, bombas y red de rociadores bajo estándares NFPA y FM Global. El parque provee la infraestructura — el inquilino ahorra hasta 60% del costo de instalar su propio sistema.',
            estimatedWords: 200,
            estimatedPhotos: 1,
          },
          {
            title: 'Seguridad 24/7 y administración de parque',
            description:
              'Control de accesos, vigilancia perimetral, protocolos de emergencia. Administración directa por Grupo Nelson — sin intermediarios de property management externo.',
            estimatedWords: 150,
            estimatedPhotos: 1,
          },
        ],
        notes: 'Tema #8 Operational Reliability. Sobre los PARQUES, no sobre la constructora.',
      },
      {
        id: 'casos-de-exito',
        name: 'Casos de Éxito',
        url: '/experiencia/casos-de-exito',
        status: 'no-existe',
        summary:
          'No existe. Historias concretas de clientes que demuestran experiencia. Movida desde Recursos.',
        topics: [
          {
            title: 'Gulfstream — 20+ años, 7 proyectos, Fortune 500',
            description:
              'De Interiores Aéreos (2002, 18,600 m²) a Gulfstream 550K (2025, 52,200 m² LEED Gold). No licitaron — asignaron directamente. La relación más larga y profunda de Grupo Nelson.',
            estimatedWords: 400,
            estimatedPhotos: 2,
            notes: 'El caso más poderoso. Usar narrativa de hechos, no opiniones.',
          },
          {
            title: 'Honeywell — 5 expansiones, una sola constructora',
            description:
              'Desde Av. Lázaro Cárdenas (2002, 23,300 m²) hasta Modelo Sur (2022, 16,800 m²). Cinco proyectos en dos décadas. Cero cambios de constructora. Incluye proyectos especiales: túnel de viento y celdas de prueba.',
            estimatedWords: 350,
            estimatedPhotos: 2,
          },
          {
            title: 'Interiores Aéreos — De 5,000 a 550,000 ft²',
            description:
              'El caso de crecimiento más dramático: empezó en El Vigía (parque más viejo) con 5,000 ft² y hoy ocupa 550,000 ft² con expansión en construcción. Demuestra que Nelson escala junto con el cliente.',
            estimatedWords: 250,
            estimatedPhotos: 1,
            notes: 'Caso sugerido por Susana Osuna en reunión de septiembre 2025.',
          },
        ],
        notes: 'Narrativa de hechos verificables. Aplicar Regla 4 del research: hechos, no opiniones.',
      },
      {
        id: 'certificaciones',
        name: 'Certificaciones Obtenidas',
        url: '/experiencia/certificaciones',
        status: 'no-existe',
        summary:
          'No existe. Lista de logros verificables — no "qué estándares seguimos" (eso está en Constructora/Estándares) sino "qué hemos ganado".',
        topics: [
          {
            title: 'Lista de certificaciones y logros verificables',
            description:
              'LEED Gold (Gulfstream 550K), Factory Mutual (Gulfstream 550K), ISN "Recomendado" por Honeywell, quality testing EPGC, cumplimiento IBC, OSHA + NOM. Armando Wilhelmy se comprometió a enviar listado completo.',
            estimatedWords: 300,
            estimatedPhotos: 2,
            notes: 'Pendiente: recibir listado de Armando Wilhelmy (awilhelmy@nelson.com.mx).',
          },
        ],
        notes: 'Diferente de /constructora/estandares-internacionales: aquí es la LISTA de logros, allá es la EXPLICACIÓN de cada estándar.',
      },
    ],
  },
  {
    name: 'Recursos',
    pages: [
      {
        id: 'recursos',
        name: 'Recursos',
        url: '/recursos',
        status: 'no-existe',
        summary: 'No existe. PDFs descargables: fichas técnicas de parques, especificaciones de naves, guías para prospectos.',
        topics: [],
      },
    ],
  },
  {
    name: 'Páginas eliminadas',
    pages: [
      {
        id: 'construccion-propia-eliminada',
        name: 'Construcción Propia',
        url: '/experiencia/construccion-propia',
        status: 'fuera-del-proceso',
        summary: 'ELIMINADA → Redirige a /constructora/baumex. Era espejo de Baumex Constructora.',
      },
      {
        id: 'ingenieria-eliminada',
        name: 'Ingeniería Innovadora',
        url: '/experiencia/ingenieria',
        status: 'fuera-del-proceso',
        summary: 'ELIMINADA → Redirige a /constructora/diseno-e-ingenieria. Era espejo de Diseño e Ingeniería.',
      },
      {
        id: 'leed-sustentabilidad-eliminada',
        name: 'LEED y Sustentabilidad',
        url: '/experiencia/leed-y-sustentabilidad',
        status: 'fuera-del-proceso',
        summary: 'ELIMINADA → Redirige a /constructora/leed. Era espejo de Certificación LEED (que tiene 7 sub-páginas completas).',
      },
      {
        id: 'cumplimiento-global-eliminado',
        name: 'Cumplimiento Global',
        url: '/experiencia/cumplimiento-global',
        status: 'fuera-del-proceso',
        summary: 'ELIMINADA → Se absorbe en /constructora/estandares-internacionales. Era espejo de Estándares Internacionales.',
      },
    ],
  },
  {
    name: 'Extras',
    pages: [
      {
        id: 'home',
        name: 'Home',
        url: '/',
        status: 'con-contenido',
        summary:
          'Página principal completa: hero video, badge 60 años, mosaicos, scroll storytelling, números animados, FAQs, 5 cards de parques.',
        topics: [],
        notes: 'Completa.',
      },
      {
        id: 'contacto',
        name: 'Contacto',
        url: '/contact',
        status: 'no-existe',
        summary:
          'No existe. El botón "Contacto" del header apunta aquí. Necesita formulario, datos de contacto, mapa.',
        topics: [],
      },
    ],
  },
  {
    name: 'Fuera del Proceso',
    pages: [
      {
        id: 'blog',
        name: 'Blog',
        url: '/blog',
        status: 'fuera-del-proceso',
        summary: 'Sistema de blog funcional. Fuera de este proceso.',
      },
      {
        id: 'noticias',
        name: 'Noticias',
        url: '/noticias',
        status: 'fuera-del-proceso',
        summary: 'Sistema de noticias funcional. Fuera de este proceso.',
      },
      {
        id: 'naves-disponibles',
        name: 'Naves Disponibles',
        url: '/inventario/naves-disponibles',
        status: 'fuera-del-proceso',
        summary: 'Inventario dinámico. Fuera de este proceso.',
      },
      {
        id: 'nelson-i',
        name: 'Parque Nelson I',
        url: '/parques-industriales-mexicali/nelson-i',
        status: 'fuera-del-proceso',
        summary: 'Ficha de parque. Fuera de este proceso.',
      },
      {
        id: 'nelson-ii',
        name: 'Parque Nelson II',
        url: '/parques-industriales-mexicali/nelson-ii',
        status: 'fuera-del-proceso',
        summary: 'Ficha de parque. Fuera de este proceso.',
      },
      {
        id: 'vigia-i',
        name: 'Parque El Vigía I',
        url: '/parques-industriales-mexicali/vigia-i',
        status: 'fuera-del-proceso',
        summary: 'Ficha de parque. Fuera de este proceso.',
      },
      {
        id: 'vigia-ii',
        name: 'Parque El Vigía II',
        url: '/parques-industriales-mexicali/vigia-ii',
        status: 'fuera-del-proceso',
        summary: 'Ficha de parque. Fuera de este proceso.',
      },
    ],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────
const statusConfig: Record<
  PageStatus,
  { label: string; color: string; icon: typeof CheckCircle2 }
> = {
  'con-contenido': {
    label: 'Con contenido',
    color: 'text-emerald-600 dark:text-emerald-400',
    icon: CheckCircle2,
  },
  'con-componentes': {
    label: 'Con componentes',
    color: 'text-amber-600 dark:text-amber-400',
    icon: AlertCircle,
  },
  stub: {
    label: 'Stub (vacía)',
    color: 'text-red-500 dark:text-red-400',
    icon: MinusCircle,
  },
  'no-existe': {
    label: 'No existe',
    color: 'text-red-700 dark:text-red-300',
    icon: Circle,
  },
  'fuera-del-proceso': {
    label: 'Fuera del proceso',
    color: 'text-zinc-400 dark:text-zinc-500',
    icon: Circle,
  },
}

function StatusBadge({ status }: { status: PageStatus }) {
  const config = statusConfig[status]
  const Icon = config.icon
  return (
    <span className={cn('inline-flex items-center gap-1.5 text-xs font-medium', config.color)}>
      <Icon className="size-3.5" />
      {config.label}
    </span>
  )
}

// ─── Componente principal ────────────────────────────────────────────
export default function ContenidosPage() {
  const [selectedPageId, setSelectedPageId] = useState<string>('diferencia-nelson')
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    'Fuera del Proceso': true,
  })

  const toggleSection = (sectionName: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }))
  }

  // Encontrar la página seleccionada
  let selectedPage: PageDefinition | null = null
  let selectedSection: string = ''
  for (const section of sections) {
    const found = section.pages.find((p) => p.id === selectedPageId)
    if (found) {
      selectedPage = found
      selectedSection = section.name
      break
    }
  }

  // Contar totales
  const allPages = sections.flatMap((s) => s.pages)
  const inProcess = allPages.filter((p) => p.status !== 'fuera-del-proceso')
  const withTopics = inProcess.filter((p) => p.topics && p.topics.length > 0)
  const totalTopics = allPages.reduce((acc, p) => acc + (p.topics?.length || 0), 0)
  const totalWords = allPages.reduce(
    (acc, p) =>
      acc + (p.topics?.reduce((a, t) => a + (t.estimatedWords || 0), 0) || 0),
    0
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header fijo */}
      <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold">Planificación de Contenidos</h1>
            <p className="text-sm text-muted-foreground">
              Grupo Nelson — Definición de temas y extensión por página
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold">{inProcess.length}</div>
              <div className="text-muted-foreground">Páginas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {withTopics.length}/{inProcess.length}
              </div>
              <div className="text-muted-foreground">Con temas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{totalTopics}</div>
              <div className="text-muted-foreground">Temas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {totalWords > 1000 ? `${(totalWords / 1000).toFixed(1)}k` : totalWords}
              </div>
              <div className="text-muted-foreground">Palabras est.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex" style={{ height: 'calc(100vh - 73px)' }}>
        {/* ─── Sidebar izquierdo ─── */}
        <aside className="w-80 shrink-0 overflow-y-auto border-r bg-muted/30">
          <nav className="p-3">
            {sections.map((section) => {
              const isCollapsed = collapsedSections[section.name]
              const isFuera = section.name === 'Fuera del Proceso'

              return (
                <div key={section.name} className="mb-1">
                  <button
                    onClick={() => toggleSection(section.name)}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-muted transition-colors"
                  >
                    {isCollapsed ? (
                      <ChevronRight className="size-3.5" />
                    ) : (
                      <ChevronDown className="size-3.5" />
                    )}
                    {section.name}
                    <span className="ml-auto text-[10px] font-normal">
                      {section.pages.length}
                    </span>
                  </button>

                  {!isCollapsed && (
                    <ul className="mt-0.5 space-y-0.5 pb-2">
                      {section.pages.map((page) => {
                        const isSelected = page.id === selectedPageId
                        const config = statusConfig[page.status]
                        const Icon = config.icon
                        const hasTopics = page.topics && page.topics.length > 0

                        return (
                          <li key={page.id}>
                            <button
                              onClick={() => setSelectedPageId(page.id)}
                              className={cn(
                                'flex w-full items-start gap-2.5 rounded-md px-3 py-2 text-sm transition-colors text-left',
                                isSelected
                                  ? 'bg-primary text-primary-foreground'
                                  : 'hover:bg-muted',
                                isFuera && 'opacity-50'
                              )}
                            >
                              <Icon
                                className={cn(
                                  'size-3.5 shrink-0 mt-0.5',
                                  isSelected ? 'text-primary-foreground' : config.color
                                )}
                              />
                              <div className="flex-1 min-w-0">
                                <span className="truncate block">{page.name}</span>
                                <span className={cn(
                                  'text-[10px] block',
                                  isSelected ? 'text-primary-foreground/70' : config.color
                                )}>
                                  {config.label}
                                </span>
                              </div>
                              {hasTopics && !isSelected && (
                                <span className="text-[10px] text-muted-foreground bg-muted rounded-full px-1.5 py-0.5 mt-0.5">
                                  {page.topics!.length}
                                </span>
                              )}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Leyenda */}
          <div className="border-t p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Leyenda
            </p>
            <div className="space-y-1.5">
              {Object.entries(statusConfig).map(([key, config]) => {
                const Icon = config.icon
                return (
                  <div key={key} className="flex items-center gap-2 text-xs">
                    <Icon className={cn('size-3.5', config.color)} />
                    <span className="text-muted-foreground">{config.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </aside>

        {/* ─── Panel derecho: Contenido ─── */}
        <main className="flex-1 overflow-y-auto">
          {selectedPage ? (
            <div className="max-w-3xl mx-auto px-8 py-8">
              {/* Encabezado de página */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>{selectedSection}</span>
                  <ChevronRight className="size-3" />
                  <span>{selectedPage.name}</span>
                </div>

                <h2 className="text-3xl font-bold mb-2">{selectedPage.name}</h2>

                <div className="flex items-center gap-4 mb-4">
                  <StatusBadge status={selectedPage.status} />
                  <a
                    href={selectedPage.url}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <code className="bg-muted px-1.5 py-0.5 rounded text-[11px]">
                      {selectedPage.url}
                    </code>
                    <ExternalLink className="size-3" />
                  </a>
                </div>

                {selectedPage.summary && (
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedPage.summary}
                  </p>
                )}

                {selectedPage.notes && (
                  <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30 px-4 py-3">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>Nota:</strong> {selectedPage.notes}
                    </p>
                  </div>
                )}
              </div>

              {/* Temas definidos */}
              {selectedPage.topics && selectedPage.topics.length > 0 ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">
                      Temas definidos ({selectedPage.topics.length})
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      ~
                      {selectedPage.topics.reduce(
                        (a, t) => a + (t.estimatedWords || 0),
                        0
                      )}{' '}
                      palabras ·{' '}
                      {selectedPage.topics.reduce(
                        (a, t) => a + (t.estimatedPhotos || 0),
                        0
                      )}{' '}
                      fotos
                    </div>
                  </div>

                  <div className="space-y-6">
                    {selectedPage.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="rounded-xl border bg-card p-6 shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex items-center gap-3">
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                              {i + 1}
                            </span>
                            <h4 className="font-semibold text-base">
                              {topic.title}
                            </h4>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 pl-11">
                          {topic.description}
                        </p>

                        <div className="flex items-center gap-4 pl-11">
                          {topic.estimatedWords && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                              ~{topic.estimatedWords} palabras
                            </span>
                          )}
                          {topic.estimatedPhotos && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                              {topic.estimatedPhotos}{' '}
                              {topic.estimatedPhotos === 1 ? 'foto' : 'fotos'}
                            </span>
                          )}
                        </div>

                        {topic.notes && (
                          <p className="mt-3 pl-11 text-xs text-amber-700 dark:text-amber-300 italic">
                            {topic.notes}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border-2 border-dashed border-muted-foreground/20 p-12 text-center">
                  <div className="text-muted-foreground">
                    <Circle className="size-12 mx-auto mb-4 opacity-20" />
                    <p className="text-lg font-medium mb-1">Sin temas definidos</p>
                    <p className="text-sm">
                      Esta página aún no tiene temas de contenido asignados.
                    </p>
                  </div>
                </div>
              )}

              {/* Navegación entre páginas */}
              <div className="mt-12 pt-6 border-t flex justify-between">
                <PrevNextButton
                  direction="prev"
                  currentId={selectedPageId}
                  onNavigate={setSelectedPageId}
                />
                <PrevNextButton
                  direction="next"
                  currentId={selectedPageId}
                  onNavigate={setSelectedPageId}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Selecciona una página del menú lateral
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

// ─── Navegación prev/next ────────────────────────────────────────────
function PrevNextButton({
  direction,
  currentId,
  onNavigate,
}: {
  direction: 'prev' | 'next'
  currentId: string
  onNavigate: (id: string) => void
}) {
  const allPages = sections
    .filter((s) => s.name !== 'Fuera del Proceso')
    .flatMap((s) => s.pages)

  const currentIndex = allPages.findIndex((p) => p.id === currentId)
  const targetIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
  const target = allPages[targetIndex]

  if (!target) return <div />

  return (
    <button
      onClick={() => onNavigate(target.id)}
      className={cn(
        'group flex items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-muted transition-colors',
        direction === 'next' && 'flex-row-reverse'
      )}
    >
      {direction === 'prev' ? (
        <ChevronRight className="size-4 rotate-180 text-muted-foreground group-hover:text-foreground transition-colors" />
      ) : (
        <ChevronRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      )}
      <div className={cn(direction === 'next' && 'text-right')}>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {direction === 'prev' ? 'Anterior' : 'Siguiente'}
        </div>
        <div className="font-medium">{target.name}</div>
      </div>
    </button>
  )
}

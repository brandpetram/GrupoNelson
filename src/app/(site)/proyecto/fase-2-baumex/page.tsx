'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Fase2BaumexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link
            href="/proyecto"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portal
          </Link>
        </div>
      </div>

      {/* Contenido */}
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
          Fase 2: Desempaquetado Comercial
        </h1>
        <p className="mt-2 text-xl text-gray-500">Baumex Constructora</p>

        <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-4 text-lg text-amber-800">
          Este documento toma los 31 bloques de material crudo recolectados en la Fase 1 y los
          transforma en agrupaciones temáticas con ángulo comercial, listos para alimentar el
          contenido de la página <code className="font-mono text-amber-900">/constructora/baumex</code>.
        </div>

        <div className="mt-4 text-lg text-gray-600 leading-relaxed space-y-1">
          <p><strong>Documentos de alineación consultados:</strong></p>
          <ul className="list-disc pl-6">
            <li>Los 10 temas comerciales de Grupo Nelson</li>
            <li>Vocabulario estratégico</li>
          </ul>
          <p className="mt-2"><strong>Keyword de posicionamiento:</strong> Naves Industriales Mexicali</p>
        </div>

        <hr className="my-12 border-gray-200" />

        {/* PASO 1 */}
        <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          Paso 1: Agrupación Temática
        </h2>
        <p className="mt-4 text-xl text-gray-600 leading-relaxed">
          Los 31 bloques crudos se clasifican en 6 grandes temas. Cada bloque puede alimentar más de un tema.
        </p>

        {/* TEMA A */}
        <section className="mt-12">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">A</span>
            <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">Capacidad In-House y Ventaja Estructural</h3>
          </div>
          <p className="mt-2 text-base text-gray-400">Bloques fuente: id-info-1, id-info-5</p>

          <div className="mt-6 space-y-4 text-xl leading-relaxed text-gray-700">
            <p><strong className="text-gray-900">Material crudo relevante:</strong></p>
            <ul className="list-disc space-y-2 pl-6">
              <li>In-house construction company con 25+ años</li>
              <li>Costos competitivos sin sacrificar seguridad ni calidad</li>
              <li>LEED Knowledgeable</li>
              <li>Financieramente sólidos</li>
              <li>Experiencia con empresas internacionales altamente demandantes</li>
              <li>Diseño que cumple códigos internacionales y de EE.UU.</li>
              <li>Organigrama completo: desde Project Executive (Rodolfo Nelson C. y Rodolfo Nelson L.) hasta crews de auto-ejecución y subcontratistas locales</li>
              <li>Departamentos especializados de diseño: Arquitectura, Civil, Estructural, Eléctrico/Controles, Mecánico/Plomería</li>
              <li>Departamentos de campo: Estimaciones, Construcción, Quality Control, Seguridad</li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg bg-blue-50 border border-blue-200 p-6">
            <p className="text-lg font-semibold text-blue-900">Ángulo comercial:</p>
            <p className="mt-2 text-xl leading-relaxed text-blue-800">
              Baumex no es un contratista más. Es la constructora propia de Grupo Nelson — un brazo de
              ejecución integrado que elimina intermediarios. Mientras que otros desarrolladores industriales
              subcontratan la construcción a terceros, Grupo Nelson diseña y construye con su propio equipo.
              Esto significa un solo punto de responsabilidad, desde el primer plano hasta la última inspección.
            </p>
          </div>

          <p className="mt-4 text-base text-gray-500">
            <strong>Temas comerciales que alimenta:</strong> #2 Turnkey Solutions, #3 Build-to-Suit, #4 Industrial Excellence, #6 Trusted Partner
          </p>

          <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-6">
            <p className="text-lg font-semibold text-gray-900">Datos duros para el copy:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-lg text-gray-700">
              <li>25+ años de experiencia en proyectos design/build</li>
              <li>Equipo multidisciplinario propio: arquitectura, ingeniería civil, estructural, eléctrica, mecánica</li>
              <li>Estructura jerárquica clara: 2 Project Executives → Director Administrativo → Project Manager → Superintendentes → Crews</li>
              <li>Departamento de estimación y costos in-house (Cost Engineer: Leonel Quiñonez)</li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* TEMA B */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-lg font-bold text-white">B</span>
            <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">Track Record — Portafolio y Escala de Operación</h3>
          </div>
          <p className="mt-2 text-base text-gray-400">Bloques fuente: id-info-2, id-info-3, id-info-4, id-info-27, id-info-28, id-info-29, id-info-31</p>

          <div className="mt-6 space-y-4 text-xl leading-relaxed text-gray-700">
            <p><strong className="text-gray-900">Material crudo relevante:</strong></p>
            <ul className="list-disc space-y-2 pl-6">
              <li>4+ millones de pies cuadrados bajo techo</li>
              <li>6,000+ trabajadores gestionados</li>
              <li>33 corporaciones internacionales, incluyendo Fortune 500 y empresas AAA</li>
              <li>Clientes emblemáticos: Honeywell, Gulfstream, Intuitive Surgical, Accuride, Emerson</li>
              <li>~35 proyectos documentados desde 2007 hasta proyectos en progreso (2025)</li>
              <li>Proyecto más grande actual: Gulfstream 550K (561,900 sq.ft. / 52,200 m²)</li>
              <li>Diversidad geográfica: Mexicali, Hermosillo, Tecate, El Salto (Jalisco)</li>
              <li>Diversidad de industrias: Aeroespacial, manufactura, procesamiento de alimentos, logística, retail, papel, dispositivos médicos</li>
              <li>1,092,745 horas hombre trabajadas en un solo proyecto (Gulfstream)</li>
              <li>Pico de 453 trabajadores simultáneos en campo</li>
              <li>Gestión simultánea de 45+ subcontratistas con desglose de horas por empresa</li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg bg-green-50 border border-green-200 p-6">
            <p className="text-lg font-semibold text-green-900">Ángulo comercial:</p>
            <p className="mt-2 text-xl leading-relaxed text-green-800">
              Los números hablan. No es una promesa — es un historial verificable proyecto por proyecto,
              metro cuadrado por metro cuadrado. Cuando una empresa puede mostrar que ha construido más de
              4 millones de pies cuadrados para 33 corporaciones internacionales — incluyendo proyectos
              activos de más de medio millón de pies cuadrados — la conversación deja de ser
              &ldquo;¿pueden hacerlo?&rdquo; y pasa a &ldquo;¿cuándo empezamos?&rdquo;.
            </p>
          </div>

          <p className="mt-4 text-base text-gray-500">
            <strong>Temas comerciales que alimenta:</strong> #1 World-Class, #4 Industrial Excellence, #9 Proven Experience
          </p>

          <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-6">
            <p className="text-lg font-semibold text-gray-900">Datos duros para el copy:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-lg text-gray-700">
              <li>4,000,000+ sq.ft. construidos</li>
              <li>33 corporaciones internacionales atendidas</li>
              <li>Fortune 500: Honeywell, Gulfstream, DHL, Emerson</li>
              <li>Proyecto activo: Gulfstream 550K — 52,200 m² (en progreso)</li>
              <li>1,092,745 HHT acumuladas en proyecto Gulfstream</li>
              <li>400-450 trabajadores simultáneos gestionados</li>
              <li>45+ empresas subcontratistas coordinadas en un solo sitio</li>
              <li>Proyectos desde 5,000 m² hasta 52,200 m²</li>
              <li>Presencia en Mexicali, Hermosillo, Tecate, Jalisco</li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* TEMA C */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 text-lg font-bold text-white">C</span>
            <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">Gestión de Proyecto — Control Administrativo y Ruta Crítica</h3>
          </div>
          <p className="mt-2 text-base text-gray-400">Bloques fuente: id-info-7, id-info-9, id-info-10, id-info-11, id-info-12, id-info-13, id-info-14, id-info-15</p>

          <div className="mt-6 space-y-4 text-xl leading-relaxed text-gray-700">
            <p><strong className="text-gray-900">Material crudo relevante:</strong></p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Quality Control</strong> con 11 puntos de control: Design Build Planning, Construction Management Team, Subcontractor Selection, Submittals, Long Lead Items Procurement, Pre-Construction Meetings, Periodical Meetings, Quality Testing Lab, COVID Protocol, Utility Company Relations (CFE, CESPM), ERP Software</li>
              <li><strong>Gantt Chart</strong> del proyecto Honeywell Mission: 225 días con fases detalladas de permisos, procura de items críticos, sistemas especializados (eléctrico, HVAC, contra incendios), construcción</li>
              <li><strong>Planeación DHL:</strong> Control de actividades por categoría con responsables, ejecutores, fechas y estatus — desde modificaciones arquitectónicas hasta licencias y trámites</li>
              <li><strong>Critical Task Report:</strong> &ldquo;Una tarea es crítica si no hay espacio para que se retrase&rdquo; — 18 hitos monitoreados desde Steel Fabrication hasta Final Completion</li>
              <li><strong>Submittals:</strong> Control de envío y autorización de materiales y equipamiento (pisos cerámicos, puertas, particiones, materiales de techo, sistema contra incendios)</li>
              <li><strong>Long Lead Items:</strong> Monitoreo preventivo de equipos críticos con tiempos largos de entrega — transformadores, generadores, unidades HVAC, tanques y bombas contra incendios</li>
              <li><strong>Minutas de campo (Pre-Construction):</strong> 11 asistentes, acuerdos sobre logística de concreto con CEMEX, protocolos de seguridad, derecho de Baumex a rechazar concreto y retirar personal que incumpla</li>
              <li><strong>Weekly Meetings:</strong> 16 asistentes con firmas autógrafas, enfoque en seguridad (auditorías roja/amarilla con multas), disposición de materiales contaminados, MSDS, requisitos documentales IMSS/SUA</li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg bg-purple-50 border border-purple-200 p-6">
            <p className="text-lg font-semibold text-purple-900">Ángulo comercial:</p>
            <p className="mt-2 text-xl leading-relaxed text-purple-800">
              Construir una nave no es solo levantar muros y techo. Es gestionar simultáneamente permisos
              municipales, cadenas de suministro con tiempos de entrega de meses, 18 hitos críticos
              interdependientes, y decenas de subcontratistas — todo bajo la presión de que un día de retraso
              en la ruta crítica es un día perdido sin recuperación. Baumex demuestra con documentación real
              que opera con el rigor administrativo de una firma de project management, no de un contratista
              improvisado.
            </p>
          </div>

          <p className="mt-4 text-base text-gray-500">
            <strong>Temas comerciales que alimenta:</strong> #2 Turnkey Solutions, #4 Industrial Excellence, #10 Global Standards
          </p>

          <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-6">
            <p className="text-lg font-semibold text-gray-900">Datos duros para el copy:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-lg text-gray-700">
              <li>11 puntos de control de calidad documentados</li>
              <li>Cronogramas de 225 días con desglose fase por fase</li>
              <li>Monitoreo de Critical Path con 18 hitos secuenciales</li>
              <li>Control de Submittals: cada material aprobado por el cliente antes de instalarse</li>
              <li>Long Lead Items: seguimiento preventivo de transformadores, generadores, chillers, bombas contra incendio</li>
              <li>Minutas de reunión con acuerdos firmados y responsables asignados</li>
              <li>Reuniones semanales con 16+ asistentes incluyendo todos los subcontratistas</li>
              <li>ERP Construction Management Software para gestión centralizada</li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* TEMA D */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-lg font-bold text-white">D</span>
            <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">Seguridad Industrial — Cultura de Cero Accidentes</h3>
          </div>
          <p className="mt-2 text-base text-gray-400">Bloques fuente: id-info-6, id-info-17, id-info-18, id-info-26, id-info-30</p>

          <div className="mt-6 space-y-4 text-xl leading-relaxed text-gray-700">
            <p><strong className="text-gray-900">Material crudo relevante:</strong></p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Manual HSE</strong> de 18 capítulos: desde política de seguridad hasta indoctrinación y reuniones de seguridad</li>
              <li><strong>Daily Work Permit:</strong> Cada día, antes de trabajar, el personal llena una matriz de riesgos (Impacto vs Probabilidad) identificando peligros, riesgos y equipo necesario. Plan de emergencia incluido.</li>
              <li><strong>Permisos especializados de alto riesgo:</strong>
                <ul className="mt-1 list-disc space-y-1 pl-6">
                  <li>Work Permit for Heights (NOM-009-STPS-2011): control de presión arterial antes de subir, checklist de caída, firmas escalonadas</li>
                  <li>Hot and Weld Permit (NOM-027-STPS-2008): extintores, retiro de combustibles a 10m, revisión de equipos de soldadura, &ldquo;Vigía Vigilante de Incendios&rdquo;</li>
                </ul>
              </li>
              <li><strong>Weekly Report (13 filminas de seguridad operativa):</strong>
                <ul className="mt-1 list-disc space-y-1 pl-6">
                  <li>Administrative: IMSS, jornada máxima 12 horas, permisos diarios de riesgo, trabajadores certificados DC-3</li>
                  <li>Operational: Revisión diaria de PPE, herramientas, maquinaria, supervisión de campo, extintores, delimitación de áreas</li>
                  <li>Filminas por tipo de riesgo: escaleras, andamios, equipos de elevación, maquinaria pesada, excavaciones, estructura, herramientas, sustancias químicas</li>
                  <li>Housekeeping, PPE, áreas de hidratación, reuniones de seguridad</li>
                </ul>
              </li>
              <li><strong>Scorecard de seguridad (Gulfstream):</strong>
                <ul className="mt-1 list-disc space-y-1 pl-6">
                  <li>124 días sin accidentes (al momento del reporte)</li>
                  <li>Récord: 404 días sin accidentes</li>
                  <li>Total de muertes: 0</li>
                  <li>Registro transparente de incidentes: 1 caso con días perdidos, 4 con restricción, 5 otros registrables</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-6">
            <p className="text-lg font-semibold text-red-900">Ángulo comercial:</p>
            <p className="mt-2 text-xl leading-relaxed text-red-800">
              Para un director de planta de Gulfstream o Honeywell, la seguridad no es un punto más en la
              presentación — es condición necesaria para que exista la conversación. Baumex no dice &ldquo;nos
              importa la seguridad&rdquo;; muestra un sistema documentado que opera diariamente: permisos de
              trabajo antes de cada turno, matrices de riesgo cuantitativas, permisos especializados atados a
              Normas Oficiales Mexicanas para trabajo en alturas y soldadura, y un scorecard donde registra
              transparentemente cada incidente — incluyendo los menores. Más de un millón de horas hombre
              trabajadas con cero muertes no es un eslogan; es un dato verificable que tranquiliza a cualquier
              auditoría corporativa.
            </p>
          </div>

          <p className="mt-4 text-base text-gray-500">
            <strong>Temas comerciales que alimenta:</strong> #1 World-Class, #8 Operational Reliability, #10 Global Standards
          </p>

          <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-6">
            <p className="text-lg font-semibold text-gray-900">Datos duros para el copy:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-lg text-gray-700">
              <li>Manual HSE de 18 capítulos</li>
              <li>Permisos de trabajo diarios con matriz de riesgo cuantitativa (Impacto × Probabilidad)</li>
              <li>Permisos especializados: NOM-009-STPS-2011 (alturas) y NOM-027-STPS-2008 (soldadura/fuego)</li>
              <li>Control de presión arterial obligatorio antes de trabajo en alturas</li>
              <li>&ldquo;Vigía Vigilante de Incendios&rdquo; en trabajos de soldadura</li>
              <li>Revisión diaria de PPE, herramientas y maquinaria</li>
              <li>Trabajadores con certificación DC-3</li>
              <li>Jornada máxima limitada a 12 horas</li>
              <li>Récord de 404 días consecutivos sin accidentes</li>
              <li>1,092,745 HHT con 0 muertes</li>
              <li>Scorecard de seguridad transparente con categorización de incidentes</li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* TEMA E */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-lg font-bold text-white">E</span>
            <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">Certificaciones y Validación por Terceros</h3>
          </div>
          <p className="mt-2 text-base text-gray-400">Bloques fuente: id-info-1, id-info-8, id-info-16</p>

          <div className="mt-6 space-y-4 text-xl leading-relaxed text-gray-700">
            <p><strong className="text-gray-900">Material crudo relevante:</strong></p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>LEED Knowledgeable</strong> (Leadership in Energy and Environmental Design)</li>
              <li><strong>Certificación ISN (ISNetworld):</strong> Plataforma global de gestión de contratistas
                <ul className="mt-1 list-disc space-y-1 pl-6">
                  <li>Tareas completadas: Información de la Compañía, Información de Empleados, Centro de Documentos, Cuestionario</li>
                  <li>Cliente: Honeywell International Inc.</li>
                  <li>Calificación: <strong>&ldquo;Recomendado&rdquo;</strong> para Aero-Mexicali y Honeywell Mexico-Corporate</li>
                </ul>
              </li>
              <li><strong>Quality Testing externo (EPGC):</strong> Laboratorio especialista en geotecnia y concretos
                <ul className="mt-1 list-disc space-y-1 pl-6">
                  <li>Ensayos de compactación de terracerías para obra Honeywell Modelo</li>
                  <li>Resultados que cumplen especificaciones del proyecto (&ldquo;Cumplió? SI&rdquo;)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-6">
            <p className="text-lg font-semibold text-amber-900">Ángulo comercial:</p>
            <p className="mt-2 text-xl leading-relaxed text-amber-800">
              Las certificaciones no son trofeos — son filtros de acceso. Sin ISN, no entras a la cadena de
              proveedores de Honeywell. Sin cumplir los ensayos de EPGC, no apruebas la cimentación. Baumex
              no solo tiene las certificaciones; tiene la calificación de &ldquo;Recomendado&rdquo; por Honeywell
              en la plataforma ISN — algo que solo se obtiene después de demostrar cumplimiento sostenido en
              seguridad, documentación y calidad. Y valida su propio trabajo con auditorías de laboratorios
              externos independientes.
            </p>
          </div>

          <p className="mt-4 text-base text-gray-500">
            <strong>Temas comerciales que alimenta:</strong> #1 World-Class, #7 Sustainable Design, #10 Global Standards
          </p>

          <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-6">
            <p className="text-lg font-semibold text-gray-900">Datos duros para el copy:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-lg text-gray-700">
              <li>Certificación ISN (ISNetworld) activa</li>
              <li>Calificación &ldquo;Recomendado&rdquo; por Honeywell International en plataforma ISN</li>
              <li>LEED Knowledgeable</li>
              <li>Ensayos de calidad por laboratorio externo (EPGC - Especialistas en Geotecnia y Concretos)</li>
              <li>Cumplimiento verificado por terceros independientes</li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* TEMA F */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600 text-lg font-bold text-white">F</span>
            <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">Ejecución Completa — De Terracerías a Acabados</h3>
          </div>
          <p className="mt-2 text-base text-gray-400">Bloques fuente: id-info-19 a id-info-25</p>

          <div className="mt-6 space-y-4 text-xl leading-relaxed text-gray-700">
            <p><strong className="text-gray-900">Material crudo relevante:</strong></p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Terracerías (Earthworks):</strong> Nivelación y compactación con motoniveladora y rodillo</li>
              <li><strong>Cimentación (Foundation):</strong> Excavación, armado de acero de refuerzo, colado con revolvedora</li>
              <li><strong>Muros de mampostería (Masonry Walls):</strong> Levantamiento con block de concreto, andamios</li>
              <li><strong>Estructura metálica (Structure):</strong> Montaje con grúas, soldadura de vigas, trabajo en alturas con arnés</li>
              <li><strong>Techo (Roof):</strong> Instalación de láminas metálicas</li>
              <li><strong>Muros de lámina (Sheet Metal Walls):</strong> Paneles metálicos exteriores con aislante térmico, uso de manlifts</li>
              <li><strong>Tablaroca (Sheet Rock Wall):</strong> Marcos metálicos, aislamiento, paneles de yeso</li>
              <li><strong>Acabados (Finishes):</strong> Pintura, azulejos, sanitarios completos, barras/cafeterías institucionales</li>
              <li><strong>Instalación eléctrica:</strong> Tableros principales, cableado en charolas, conduit, luminarias, zanjeo subterráneo, subestaciones exteriores</li>
              <li><strong>Instalación mecánica (HVAC):</strong> Tanques de almacenamiento (contra incendios), ductería de A/C, tubería roja (fire protection), ductos de gran escala</li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg bg-teal-50 border border-teal-200 p-6">
            <p className="text-lg font-semibold text-teal-900">Ángulo comercial:</p>
            <p className="mt-2 text-xl leading-relaxed text-teal-800">
              Cuando Baumex dice &ldquo;in-house&rdquo;, no es una media verdad. La constructora ejecuta directamente
              desde el primer movimiento de tierras hasta el último acabado interior — terracerías, cimentación,
              estructura metálica, mampostería, techumbre, fachadas, tablaroca, acabados, instalaciones
              eléctricas, mecánicas y sistemas contra incendio. No hay &ldquo;subcontratamos la parte
              difícil&rdquo;. Hay evidencia fotográfica de cada etapa con personal propio en campo.
            </p>
          </div>

          <p className="mt-4 text-base text-gray-500">
            <strong>Temas comerciales que alimenta:</strong> #2 Turnkey Solutions, #3 Build-to-Suit, #4 Industrial Excellence
          </p>

          <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-6">
            <p className="text-lg font-semibold text-gray-900">Datos duros para el copy:</p>
            <p className="mt-2 text-lg text-gray-700">10 disciplinas constructivas ejecutadas directamente:</p>
            <ol className="mt-2 list-decimal space-y-1 pl-6 text-lg text-gray-700">
              <li>Terracerías y nivelación</li>
              <li>Cimentación (zapatas, colado)</li>
              <li>Mampostería (muros de block)</li>
              <li>Estructura metálica</li>
              <li>Techumbre (lámina)</li>
              <li>Fachadas metálicas con aislante térmico</li>
              <li>Interiores (tablaroca)</li>
              <li>Acabados (pisos, pintura, sanitarios)</li>
              <li>Instalación eléctrica (desde subestaciones hasta luminarias)</li>
              <li>Instalación mecánica (HVAC, fire protection)</li>
            </ol>
            <p className="mt-2 text-lg text-gray-700">Evidencia fotográfica documentada de cada etapa.</p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* PASO 2 */}
        <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          Paso 2: Resumen Ejecutivo
        </h2>
        <p className="mt-2 text-xl text-gray-500">Mensajes comerciales principales para <code className="font-mono">/constructora/baumex</code></p>

        <div className="mt-8 space-y-4">
          {[
            { num: 1, color: 'bg-blue-600', msg: 'Constructora propia, no subcontratada', desc: 'Un solo punto de responsabilidad desde diseño hasta entrega', src: 'Temas A + F' },
            { num: 2, color: 'bg-green-600', msg: '4M+ sq.ft. construidos para 33 corporaciones internacionales', desc: 'Track record verificable, no promesas', src: 'Tema B' },
            { num: 3, color: 'bg-purple-600', msg: 'Gestión de proyecto con rigor institucional', desc: 'Ruta crítica, submittals, long lead items, reuniones semanales con todos los stakeholders', src: 'Tema C' },
            { num: 4, color: 'bg-red-600', msg: '1M+ horas hombre trabajadas con cero muertes', desc: 'Cultura de seguridad documentada diariamente, no decorativa', src: 'Tema D' },
            { num: 5, color: 'bg-amber-600', msg: '"Recomendado" por Honeywell en ISN', desc: 'Certificaciones que son filtros de acceso, no trofeos', src: 'Tema E' },
            { num: 6, color: 'bg-teal-600', msg: '10 disciplinas constructivas ejecutadas directamente', desc: 'De terracerías a acabados, todo in-house', src: 'Tema F' },
          ].map((item) => (
            <div key={item.num} className="flex gap-4 rounded-lg border border-gray-200 p-6">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.color} text-lg font-bold text-white`}>
                {item.num}
              </span>
              <div>
                <p className="text-xl font-bold text-gray-900">{item.msg}</p>
                <p className="mt-1 text-lg text-gray-600">{item.desc}</p>
                <p className="mt-2 text-sm text-gray-400">Soporte: {item.src}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-12 border-gray-200" />

        {/* PASO 3 */}
        <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          Paso 3: Alineación
        </h2>
        <p className="mt-2 text-xl text-gray-500">Material crudo → Temas comerciales del sitio</p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-lg">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-left font-semibold text-gray-900">Tema Comercial</th>
                <th className="py-3 pr-4 text-left font-semibold text-gray-900">Se alimenta de</th>
                <th className="py-3 text-left font-semibold text-gray-900">Intensidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { tema: '#1 World-Class', fuente: 'B, D, E', stars: 5 },
                { tema: '#2 Turnkey Solutions', fuente: 'A, C, F', stars: 5 },
                { tema: '#3 Build-to-Suit', fuente: 'A, F', stars: 4 },
                { tema: '#4 Industrial Excellence', fuente: 'A, B, C, F', stars: 5 },
                { tema: '#6 Trusted Partner', fuente: 'A', stars: 2 },
                { tema: '#7 Sustainable Design', fuente: 'E (LEED)', stars: 1 },
                { tema: '#8 Operational Reliability', fuente: 'D', stars: 4 },
                { tema: '#9 Proven Experience', fuente: 'B', stars: 3 },
                { tema: '#10 Global Standards', fuente: 'C, D, E', stars: 5 },
              ].map((row) => (
                <tr key={row.tema}>
                  <td className="py-3 pr-4 font-medium text-gray-900">{row.tema}</td>
                  <td className="py-3 pr-4 text-gray-600">{row.fuente}</td>
                  <td className="py-3 text-amber-500">{'★'.repeat(row.stars)}{'☆'.repeat(5 - row.stars)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-lg bg-gray-50 border border-gray-200 p-6">
          <p className="text-lg font-semibold text-gray-900">Vocabulario estratégico a utilizar en el copy de Baumex:</p>
          <div className="mt-4 space-y-3 text-lg text-gray-700">
            <p><strong>Verbos de capacidad:</strong> Ejecutamos, entregamos, gestionamos, coordinamos, integramos</p>
            <p><strong>Sustantivos de autoridad:</strong> Track record, expertise, especialización, estándares internacionales, certificaciones</p>
            <p><strong>Términos técnicos:</strong> Especificaciones, ruta crítica, submittals, long lead items, horas hombre trabajadas (HHT)</p>
            <p><strong>Confianza:</strong> Solidez, certeza, confiabilidad, respaldo</p>
            <p className="text-red-600"><strong>Prohibido:</strong> &ldquo;Solución integral&rdquo;, &ldquo;comprometidos con&rdquo;, &ldquo;líderes en&rdquo;, &ldquo;calidad total&rdquo;, &ldquo;innovador&rdquo;</p>
          </div>
        </div>

        <hr className="my-12 border-gray-200" />

        {/* SIGUIENTE PASO */}
        <div className="rounded-lg bg-gray-900 p-8">
          <h2 className="text-2xl font-bold text-white lg:text-3xl">Siguiente paso</h2>
          <p className="mt-4 text-xl leading-relaxed text-gray-300">
            Con este desempaquetado listo, el paso siguiente es <strong className="text-white">definir los topics
            concretos</strong> en <code className="font-mono text-amber-400">/proyecto/contenidos</code> para la
            página <code className="font-mono text-amber-400">/constructora/baumex</code> y luego{' '}
            <strong className="text-white">redactar el contenido comercial final</strong> que irá en los componentes
            de la página.
          </p>
          <p className="mt-4 text-xl text-gray-400">
            Los 6 mensajes comerciales del Resumen Ejecutivo (Paso 2) son los candidatos directos para
            convertirse en los topics de la página.
          </p>
        </div>

        <div className="mt-12 pb-12 text-center text-sm text-gray-400">
          Documento interno — Grupo Nelson / Baumex Constructora
        </div>
      </article>
    </div>
  )
}

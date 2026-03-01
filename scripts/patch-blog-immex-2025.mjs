/**
 * Parcha el post de blog: Guía Completa del Programa IMMEX 2025
 * Documento ID: 4lXD1QprlKmqniOHakmL5u
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmL5u'

function makeBlock(key, text) {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

function makeH2(key, text) {
  return {
    _type: 'block',
    _key: key,
    style: 'h2',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

const description = 'IMMEX no es un incentivo fiscal: es un régimen aduanero con mecánica propia, obligaciones precisas y consecuencias concretas si se incumple. Esta guía explica el mecanismo real —diferimiento arancelario, certificación IVA, PROSEC, Anexo 24 y cambios regulatorios de 2024-2025— para que un director de operaciones tome decisiones con información completa.'

const blocks = [
  makeBlock('b01', 'El Programa IMMEX —Industria Manufacturera, Maquiladora y de Servicios de Exportación— se presenta frecuentemente como un "incentivo fiscal" para atraer manufactura exportadora. Esa descripción es funcional para el discurso comercial, pero no es operativamente útil para quien tiene que tomar la decisión de registrarse, administrarlo y mantenerlo activo. IMMEX es un régimen aduanero con mecánica jurídica específica, plazos precisos, obligaciones continuas y consecuencias reales ante el incumplimiento.'),
  makeBlock('b02', 'En septiembre de 2025, la Secretaría de Economía canceló definitivamente 170 programas IMMEX a partir del 1 de septiembre de ese año. La causa: falta de presentación del Reporte Anual de Operaciones de Comercio Exterior. En 2024, se cancelaron 155 empresas —un incremento del 32.47% respecto a las 117 cancelaciones de 2023. La cancelación no es un inconveniente administrativo: implica una prohibición de cinco años para reregistrarse y la obligación de retornar o cambiar de régimen las mercancías importadas temporalmente en 60 días calendario.'),
  makeBlock('b03', 'Este artículo describe el mecanismo real del programa, el stack fiscal completo que lo potencia, los cambios regulatorios de 2024-2025 que hay que incorporar al análisis, y los riesgos concretos que determinan si una operación IMMEX es sostenible o no.'),

  makeH2('h01', 'Qué hace exactamente IMMEX: la mecánica antes de los beneficios'),
  makeBlock('b04', 'IMMEX autoriza a una empresa con actividad exportadora a importar temporalmente insumos, materias primas, maquinaria y equipo para producir bienes destinados a la exportación, difiriendo el pago del Impuesto General de Importación (IGI), el IVA y las cuotas compensatorias mientras esas mercancías permanezcan bajo el régimen temporal.'),
  makeBlock('b05', 'La palabra clave es "diferir", no "eliminar". El IGI no se condona: se suspende durante el período de permanencia autorizado. Para insumos y materias primas, ese plazo es de 18 meses. Para maquinaria y equipo, el plazo es la vigencia total del programa. Vencido el plazo sin que la mercancía haya sido exportada, transformada o cambiada de régimen, la empresa incurre en una importación definitiva de facto, con las consecuencias fiscales y aduaneras correspondientes.'),
  makeBlock('b06', 'El catálogo de lo que puede importarse bajo régimen temporal es amplio: materias primas, componentes, combustibles, lubricantes, envases y empaques, maquinaria, herramientas y equipos de laboratorio. Lo que no puede importarse son las fracciones arancelarias incluidas en el Anexo 1 del Decreto IMMEX, una lista que se actualiza periódicamente y que desde diciembre de 2024 incorpora aproximadamente 300 fracciones de textil y confección.'),
  makeBlock('b07', 'Dos herramientas operativas dentro del programa merecen atención especial porque resuelven fricciones logísticas que de otro modo serían costosas. El retorno virtual —identificado con la clave V5 en el pedimento aduanero— permite simular documentalmente el retorno al extranjero para que otro actor en México importe definitivamente la mercancía, sin que esta se mueva físicamente a la aduana. Esto facilita las ventas al mercado nacional desde una operación IMMEX sin violar el régimen. Las transferencias virtuales entre empresas IMMEX —clave V1— permiten mover mercancía entre dos titulares de programa mediante documentos, sin traslado físico hasta la frontera, lo que facilita cadenas de suministro dentro de un mismo cluster industrial.'),

  makeH2('h02', 'El stack fiscal completo: IMMEX + Certificación IVA + PROSEC + Zona Libre'),
  makeBlock('b08', 'IMMEX por sí solo difiere el IGI. La estructura fiscal óptima para una operación exportadora en Mexicali requiere tres capas adicionales que interactúan con el programa base.'),
  makeBlock('b09', 'La primera es la Certificación IVA e IEPS del SAT. Sin esta certificación, una empresa IMMEX paga el 16% de IVA sobre sus importaciones temporales y luego lo recupera vía acreditamiento —lo que es financieramente correcto pero impacta el flujo de caja durante el período de recuperación. Con la Certificación IVA e IEPS activa, el SAT otorga un crédito fiscal del 100% del IVA causado por la importación temporal, resultando en un pago efectivo de 0%. Para una empresa con volumen de importaciones significativo, la diferencia en capital de trabajo puede ser material.'),
  makeBlock('b10', 'La segunda capa son los Programas de Promoción Sectorial (PROSEC). Estos programas permiten pagar aranceles reducidos o 0% en insumos y maquinaria específicos, independientemente del país de origen del bien. Esa última cláusula es crítica: PROSEC aplica a insumos provenientes de China, Taiwán o cualquier país fuera del bloque USMCA. Sin PROSEC, si una empresa IMMEX usa insumos no originarios del bloque USMCA, queda sujeta a la cláusula de drawback del tratado, que exige pagar aranceles sobre esos insumos como si se hubieran importado definitivamente. PROSEC resuelve ese problema para los sectores que lo tienen disponible: electrónico, automotriz, aeroespacial y medtech, entre otros.'),
  makeBlock('b11', 'La tercera capa es geográfica: la Zona Libre de la Frontera Norte. Los 44 municipios fronterizos que la integran —incluyendo Mexicali— tienen una tasa de ISR del 20% frente al 30% nacional, y una tasa de IVA en ventas locales del 8% frente al 16% nacional. La vigencia de este régimen fue prorrogada hasta el 31 de diciembre de 2025, y cualquier análisis que asuma su continuación más allá de esa fecha debe verificar la resolución regulatoria correspondiente al momento de la decisión de inversión.'),
  makeBlock('b12', 'La combinación completa —IMMEX + Certificación IVA e IEPS + PROSEC + Zona Libre Frontera Norte— elimina prácticamente todos los costos arancelarios sobre importaciones temporales, reduce el ISR corporativo en 10 puntos porcentuales respecto al régimen general, y recorta a la mitad el IVA operativo en ventas locales. Ese stack no se obtiene automáticamente con el registro IMMEX: cada elemento requiere tramitación propia, cumplimiento de requisitos específicos y mantenimiento activo.'),

  makeH2('h03', 'IMMEX y USMCA: la pregunta que nadie hace hasta que es tarde'),
  makeBlock('b13', 'Una de las fricciones más frecuentes en la planificación de operaciones IMMEX —especialmente para empresas con cadenas de suministro que incluyen proveedores asiáticos— es la interacción entre el programa y las reglas de origen del USMCA.'),
  makeBlock('b14', 'El tratado establece que los bienes manufacturados en México que incorporan insumos no originarios del bloque USMCA no califican automáticamente para acceso preferencial al mercado estadounidense. La regla de drawback del USMCA —el Artículo 32.10— limita la capacidad de diferir o eximir aranceles sobre esos insumos no originarios cuando el producto final se exporta a Estados Unidos o Canadá bajo el tratado.'),
  makeBlock('b15', 'Aquí es donde PROSEC tiene valor estratégico más allá del diferimiento arancelario: al aplicar aranceles sectoriales reducidos o de 0% sobre insumos no originarios, permite que la operación sea viable aun cuando la cadena de suministro incluye componentes de China o Taiwán sin los cuales ciertas manufactura no es posible en la región. Para sectores como electrónica avanzada o aeroespacial, donde determinados componentes simplemente no tienen proveedores dentro del bloque USMCA en los volúmenes y especificaciones requeridas, PROSEC no es un beneficio adicional: es un requisito operativo.'),
  makeBlock('b16', 'La evaluación correcta al diseñar una operación IMMEX es mapear cada fracción arancelaria de insumos críticos contra tres preguntas: ¿tiene origen USMCA?, ¿está cubierta por PROSEC?, ¿está incluida en el Anexo 1 de prohibiciones IMMEX? Esa matriz determina la estructura fiscal real de la operación antes de comprometer capital en instalaciones.'),

  makeH2('h04', 'Los cambios de 2024-2025 que hay que incorporar al análisis'),
  makeBlock('b17', 'Dos modificaciones regulatorias publicadas en el segundo semestre de 2024 alteran el entorno operativo del programa de forma suficientemente significativa como para que cualquier análisis anterior a noviembre de 2024 requiera actualización.'),
  makeBlock('b18', 'El primero es el Decreto del 19 de diciembre de 2024. Este decreto eleva los aranceles sobre 138 fracciones arancelarias de confección (capítulos 61, 62, 63 y 94) al 35%, y sobre 17 fracciones textiles al 15%, con vigencia del 20 de diciembre de 2024 al 23 de abril de 2026. Más relevante para una empresa que evalúa el programa: incorpora aproximadamente 300 fracciones de textil y confección al Anexo 1 del Decreto IMMEX, lo que significa que esas fracciones quedan prohibidas para importación temporal bajo el régimen. Para los sectores aeroespacial, medtech, electrónico y automotriz, ninguna de las fracciones afectadas por este decreto está en sus cadenas de suministro habituales. El impacto es sectorial y específico.'),
  makeBlock('b19', 'El segundo cambio es más transversal: las modificaciones al Anexo 24, con versión final publicada el 6 de enero de 2025. El Anexo 24 regula el sistema de control de inventarios que toda empresa IMMEX debe mantener. Las modificaciones vigentes desde noviembre de 2024 establecen tres cambios operativos concretos. Primero, el SAT ahora recibe usuario y contraseña para acceso remoto en tiempo real al sistema de inventarios, sin requerir aviso previo a la empresa. Segundo, el registro de pedimentos en el sistema debe hacerse en un máximo de 48 horas después de su liquidación —antes no había un plazo explícito tan corto. Tercero, el umbral de retorno se elevó: las empresas deben haber retornado al menos el 80% del valor de sus importaciones temporales de insumos en los últimos 12 meses. El umbral anterior era 60%.'),
  makeBlock('b20', 'El acceso remoto en tiempo real es el cambio de mayor implicación operativa. Una auditoría SAT ya no requiere que un auditor llegue físicamente a las instalaciones para revisar el sistema de inventarios: puede auditarse de forma remota, en cualquier momento, sin previo aviso. Esto convierte el Anexo 24 de una obligación de cumplimiento periódico a una obligación de cumplimiento continuo. Las empresas que gestionaban su sistema de inventarios con actualizaciones semanales o quincenales tienen que revisar ese proceso.'),

  makeH2('h05', 'El lado del riesgo: qué cancela un programa y qué significa'),
  makeBlock('b21', 'Las cancelaciones de programas IMMEX siguen un patrón identificable. Comprender las causas concretas es más útil que el número agregado de cancelaciones, porque permite evaluar si los controles internos de una operación nueva tienen las coberturas correctas.'),
  makeBlock('b22', 'La causa más frecuente de cancelación es no presentar el Reporte Anual de Operaciones de Comercio Exterior (RAOCE) antes del último día hábil de mayo de cada año. Es el único reporte anual obligatorio del programa y su incumplimiento puede ser suficiente para la cancelación definitiva, independientemente del desempeño operativo de la empresa. La segunda causa más frecuente es el domicilio fiscal inactivo o no actualizado ante el SAT. Una empresa que se muda de instalaciones y no actualiza su domicilio fiscal en tiempo puede perder el programa aunque todas sus operaciones sean correctas.'),
  makeBlock('b23', 'Las otras causas documentadas incluyen incumplimiento del umbral de exportación mínima —USD 500,000 anuales o el equivalente al 10% de la facturación total, lo que sea menor—, control de inventarios Anexo 24 deficiente o no conectado al SAT, opinión de cumplimiento fiscal negativa, y uso de mercancías IMMEX en productos para el mercado nacional sin el pedimento V5 correspondiente.'),
  makeBlock('b24', 'Los errores más comunes en empresas que inician operaciones IMMEX son consistentes: subestimar la complejidad técnica del Anexo 24 y no asignar recursos suficientes para su implementación; no separar físicamente los insumos bajo régimen IMMEX de otros inventarios de la empresa; dejar vencer el plazo de 18 meses en insumos no utilizados sin cambiarlos de régimen; y asumir que el equipo de contabilidad general puede gestionar las obligaciones de comercio exterior sin especialización adicional.'),
  makeBlock('b25', 'Las consecuencias de una cancelación son asimétricas respecto al costo del cumplimiento. La prohibición de cinco años para reregistrarse interrumpe la operación exportadora durante ese período. Las mercancías bajo régimen temporal deben retornarse o cambiar de régimen en 60 días calendario, con los costos arancelarios que eso implica. Y la reputación fiscal ante el SAT —relevante para la obtención de la Certificación IVA e IEPS y otras facilidades administrativas— queda afectada. Una empresa que planifica correctamente los recursos de cumplimiento desde el inicio invierte en IMMEX una fracción del costo que representa recuperarse de una cancelación.'),

  makeH2('h06', 'Para empresas extranjeras: la figura de albergue como entrada rápida'),
  makeBlock('b26', 'Una empresa manufacturera extranjera que evalúa establecer operaciones en México enfrenta un dilema de secuencia: para obtener IMMEX necesita una entidad legal en México, pero constituir esa entidad, operarla, cumplir con el SAT y tramitar el programa lleva entre tres y seis meses solo para el registro —sin contar la construcción o adecuación de instalaciones, la contratación de personal y la curva de aprendizaje regulatorio.'),
  makeBlock('b27', 'La modalidad de albergue resuelve ese problema de arranque. En este esquema, una empresa mexicana que ya cuenta con programa IMMEX activo actúa como titular del régimen. La empresa extranjera aporta tecnología, maquinaria y personal técnico clave, y opera bajo el paraguas del programa del albergue sin necesidad de constituir una persona moral en México para comenzar. Esto elimina también el riesgo de establecimiento permanente fiscal —la exposición tributaria que surge cuando una empresa extranjera opera directamente en México sin estructura local adecuada.'),
  makeBlock('b28', 'El resultado práctico es una reducción significativa del tiempo de entrada: de los 12 a 18 meses típicos de un establecimiento independiente a tres a seis meses bajo albergue. Esa diferencia no es solo de velocidad: permite a la empresa extranjera probar la viabilidad operativa de la ubicación —disponibilidad de talento, calidad de proveedores locales, logística real— antes de comprometer capital en la constitución de una entidad propia y en instalaciones permanentes.'),
  makeBlock('b29', 'Aproximadamente 300 empresas operan actualmente bajo modalidad albergue en México, con clientes de Estados Unidos, Canadá, Alemania, Corea del Sur, Japón y China. El esquema no es un mecanismo provisional exclusivo para empresas pequeñas: varias operaciones de escala media han mantenido la estructura de albergue de forma permanente porque el costo de gestión delegada del compliance regulatorio supera el costo de tener equipo interno dedicado.'),
  makeBlock('b30', 'La evaluación de si conviene entrar por albergue o directamente con entidad propia depende de tres variables: el tiempo que la empresa tiene para comenzar a operar, su apetito por el riesgo regulatorio en una jurisdicción nueva, y si tiene relaciones establecidas con un operador de albergue confiable. Grupo Nelson trabaja con operadores de albergue con trayectoria probada en Mexicali y puede facilitar esa conexión para empresas que están en la fase inicial de evaluación.'),

  makeBlock('b_fuentes', 'Fuentes: Secretaría de Economía de México — Decreto IMMEX y sus modificaciones · Diario Oficial de la Federación — Decreto del 19 de diciembre de 2024 (aranceles textil/confección) · Diario Oficial de la Federación — Modificaciones al Anexo 24, publicación del 6 de enero de 2025 · SAT — Reglas Generales de Comercio Exterior 2025 · INEGI — Estadística Mensual sobre Establecimientos con Programa IMMEX, diciembre 2024 (personal ocupado: 3,232,585 a nivel nacional) · Secretaría de Economía — Cancelaciones de programas IMMEX 2023-2025 · Banco de México — Exportaciones manufactureras México 2024 (USD $554,443 millones) · USMCA — Artículo 32.10, cláusula de drawback · Ventanilla Única de Comercio Exterior Mexicano (VUCEM) — Guía de trámite IMMEX'),
]

const body = [
  {
    _key: 'es',
    _type: 'internationalizedArrayBlockContentValue',
    value: blocks,
  },
]

const descriptionField = [
  {
    _key: 'es',
    _type: 'internationalizedArrayTextValue',
    value: description,
  },
]

try {
  const result = await client
    .patch(DOC_ID)
    .set({ body, description: descriptionField })
    .commit()
  console.log('✅ Post actualizado:', result._id)
} catch (err) {
  console.error('❌ Error:', err.message)
}

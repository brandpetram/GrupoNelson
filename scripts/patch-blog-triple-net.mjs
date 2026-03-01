/**
 * Parcha el post de blog: Qué Significa Realmente un Contrato Triple Net en México
 * (y Cómo Negociarlo)
 * Documento ID: uqKP1CJoSsgXdCXPUwMAqX
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMAqX'

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

const description = 'El NNN que conoces de California no es el mismo que firmarás en Mexicali. Este análisis descompone qué paga realmente el inquilino en un contrato Triple Net mexicano, qué retiene el propietario, las siete cláusulas que los equipos legales extranjeros pasan por alto, y qué es negociable en el mercado actual con vacancia al alza.'

const blocks = [
  makeBlock('b01', 'El director legal de una empresa manufacturera de dispositivos médicos con sede en San Diego describió la situación así después de firmar su primer contrato industrial en Mexicali: "Revisamos el contrato, era NNN, pensamos que sabíamos qué significaba, y lo firmamos. Tardamos seis meses en entender que el techo no era nuestra responsabilidad pero que tampoco era clara la del propietario. La cláusula estaba redactada de forma ambigua. Cuando tuvimos una filtración, pasamos dos meses disputando quién pagaba."'),
  makeBlock('b02', 'Esa situación no es una anomalía. Es la consecuencia predecible de asumir que el Triple Net (NNN) mexicano funciona con las mismas definiciones que el NNN de California, Texas o cualquier mercado industrial estadounidense. No funciona igual. Las diferencias no son filosóficas ni menores: afectan directamente a los costos operativos, a la exposición financiera del inquilino y a la capacidad de planificar el presupuesto de ocupación a cinco o diez años.'),
  makeBlock('b03', 'Este artículo está escrito para CFOs, directores de operaciones y legal counsel que están en una negociación real, no para quienes están en fase de exploración general. Los datos corresponden al mercado de parques industriales Clase A en Mexicali y Tijuana, Baja California, con referencia al norte de México.'),

  makeH2('h01', 'El NNN mexicano no es el mismo que el de California: tres diferencias que importan'),
  makeBlock('b04', 'En Estados Unidos, el Triple Net tiene definiciones relativamente estandarizadas. Organizaciones como BOMA (Building Owners and Managers Association) y SIOR (Society of Industrial and Office Realtors) han establecido marcos de referencia que la mayoría de los desarrolladores institucionales usa como base. Cuando un CFO firma un NNN en Dallas, sabe con alta confianza qué está asumiendo. En México, esa estandarización no existe con la misma consistencia.'),
  makeBlock('b05', 'Primera diferencia: la responsabilidad sobre el techo. En un NNN estadounidense estándar, el inquilino asume el mantenimiento del techo junto con el resto de los componentes de la propiedad. En México, en muchos contratos de parques Clase A, el propietario retiene la responsabilidad sobre el techo y la estructura. Técnicamente eso sería un "modified gross" en terminología americana. En México se comercializa y firma como NNN. No es necesariamente una práctica desfavorable para el inquilino, pero sí crea confusión cuando el equipo legal extranjero llega con supuestos que no aplican.'),
  makeBlock('b06', 'Segunda diferencia: los CAM caps. En EE.UU., los caps sobre las cuotas de mantenimiento de áreas comunes (Common Area Maintenance) son práctica estándar en contratos institucionales. En México, los CAM caps deben negociarse explícitamente. Sin ellos, el propietario puede incrementar las cuotas de mantenimiento del parque —seguridad perimetral, alumbrado, vialidades internas, áreas verdes— sin límite contractual. Es una exposición real que no aparece en el análisis de renta base.'),
  makeBlock('b07', 'Tercera diferencia: el proceso de desalojo. En California, un propietario puede ejecutar un proceso de desalojo por incumplimiento en 30 a 90 días. En México, el proceso judicial de desalojo puede tomar entre 1 y 3 años en tribunales ordinarios. Esto tiene una implicación directa sobre las garantías que los propietarios mexicanos exigen: son más robustas precisamente porque la recuperación legal de la propiedad es más lenta y costosa.'),

  makeH2('h02', 'Qué paga realmente el inquilino: renta base y los cuatro gastos adicionales'),
  makeBlock('b08', 'La renta base NNN en parques industriales Clase A del norte de México se cotiza y se paga en dólares estadounidenses. Prácticamente todos los contratos Clase A en México están denominados en USD —es el estándar del mercado, no la excepción. Sin embargo, la Ley Monetaria de los Estados Unidos Mexicanos otorga al inquilino el derecho de pagar en pesos al tipo de cambio del día. En contratos sofisticados, las partes resuelven esta ambigüedad explícitamente en el contrato, generalmente acordando que el pago se realice en dólares o en pesos al tipo de cambio publicado por el Banco de México el día del pago.'),
  makeBlock('b09', 'Sobre la renta base, el inquilino asume cuatro categorías adicionales de gasto. Primera: impuesto predial. El inquilino asume el predial del inmueble. En parques multiusuario se prorratea entre los inquilinos en proporción a la superficie ocupada. Segunda: seguros de la propiedad. Esto cubre el seguro de daños, incendio y responsabilidad civil general del inmueble, con un rango de mercado de aproximadamente $0.015 a $0.03 USD/sq ft/mes adicionales. El seguro de contenidos, maquinaria y activos del negocio corre siempre por cuenta del inquilino, incluso en esquemas gross lease.'),
  makeBlock('b10', 'Tercera: CAM Charges. La cuota de mantenimiento del parque cubre seguridad perimetral, alumbrado de áreas comunes, mantenimiento de vialidades internas, áreas verdes y gestión general del parque. El rango de mercado es de $0.015 a $0.03 USD/sq ft/mes adicionales a la renta base. Cuarta: mantenimiento del inmueble propio. Esto incluye HVAC, plomería e instalaciones eléctricas internas de la nave, con el alcance que defina el contrato —y aquí está la mayor fuente de ambigüedad, particularmente sobre si el techo entra en esta categoría.'),
  makeBlock('b11', 'Adicionalmente, las utilidades son 100% responsabilidad del inquilino: CFE o suministrador alterno de energía, agua, gas y telecomunicaciones. Para operaciones con alta demanda energética —manufactura electrónica, procesos industriales con equipos de mayor consumo—, el costo de energía puede ser significativo y debe modelarse por separado antes de firmar. Los permisos operativos —IMMEX, licencias ambientales, permisos de operación municipales y estatales— también corren por cuenta del inquilino.'),

  makeH2('h03', 'Datos de mercado 2025: cuánto cuesta y qué poder de negociación tienes hoy'),
  makeBlock('b12', 'En Mexicali, la renta promedio para espacio industrial cerró junio 2024 en $6.58 USD/m²/mes, un incremento de 12% anual, según datos de Solili. Expresado en pies cuadrados —la métrica preferida por equipos financieros de empresas norteamericanas—, el rango de mercado en segmento Clase A está entre $0.56 y $0.61 USD/sq ft/mes, conforme a datos de Cushman & Wakefield y Solili. Para contexto: antes de la pandemia el mercado se ubicaba alrededor de $0.31 USD/sq ft/mes. La revalorización fue estructural, no transitoria.'),
  makeBlock('b13', 'En Tijuana, la renta promedio del primer trimestre de 2025 llegó a $0.80 USD/sq ft/mes, equivalente a $8.61 USD/m²/mes, sobre un inventario de 102 millones de pies cuadrados, según datos de Newmark. Tijuana cotiza con prima respecto a Mexicali, reflejo de su ubicación inmediata a San Diego y su perfil de manufactura de mayor valor agregado.'),
  makeBlock('b14', 'El dato más relevante para quien está negociando hoy: la vacancia está al alza en ambos mercados. En Mexicali, la vacancia llegó a 6.3% en noviembre de 2025 con 250,000 m² disponibles —el segundo nivel más alto del país— según Solili. En Tijuana, la vacancia del primer trimestre de 2025 se ubicó en 5.91%, también al alza. Comparado con el pico de escasez de 2022, cuando la vacancia en Mexicali llegó a 1.7% y no había espacio disponible, el mercado actual tiene una dinámica completamente diferente.'),
  makeBlock('b15', 'En la práctica: un inquilino que negoció en 2022 prácticamente no tenía poder. Aceptaba condiciones o perdía el espacio. En el mercado de 2025, el inquilino tiene opciones reales. Los propietarios compiten por ocupar vacíos. Esa diferencia no es menor y debe reflejarse en la negociación de condiciones —no solo en la renta base.'),
  makeBlock('b16', 'Los plazos de contrato más comunes en parques Clase A del norte de México van de 5 a 15 años, con 10 años como el plazo más frecuente en transacciones de mayor escala. Para empresas que operan bajo programa IMMEX, el contrato debe tener un plazo mínimo de 1 año con al menos 11 meses de vigencia al momento de la solicitud del programa. Los incrementos anuales de renta en contratos denominados en USD generalmente son de un incremento fijo de 2% a 3% anual, o indexados al CPI de EE.UU. publicado por el Bureau of Labor Statistics. Para contratos en pesos, el índice de referencia es el INPC publicado por el INEGI, históricamente más volátil.'),

  makeH2('h04', 'El marco legal que el legal counsel debe leer antes de firmar'),
  makeBlock('b17', 'Los arrendamientos industriales en Mexicali se rigen por el Código Civil del Estado de Baja California, con el Código Civil Federal aplicable de forma supletoria. El principio de autonomía de la voluntad en materia de arrendamiento industrial es amplio: las partes pueden acordar prácticamente cualquier condición, lo que significa que el contrato —no la ley— es el documento determinante. Una ley débil en arrendamientos comerciales favorece al que negoció mejor el contrato, no necesariamente al inquilino ni al propietario por defecto.'),
  makeBlock('b18', 'Si el propietario vende la propiedad durante la vigencia del arrendamiento, el contrato subsiste. El nuevo propietario queda obligado por los términos del arrendamiento existente. Para el inquilino esto es una protección real: cambio de propietario no significa renegociación ni terminación anticipada del contrato. Sin embargo, esta protección opera con mayor solidez cuando el contrato está registrado ante el Registro Público de la Propiedad del Estado de Baja California. El registro hace el arrendamiento oponible a terceros. Se recomienda registrar —en transacciones de escala, es práctica estándar.'),
  makeBlock('b19', 'En cuanto a garantías, hay tres figuras distintas que el legal counsel debe conocer con precisión. El depósito en garantía equivale a 1 o 2 meses de renta y se devuelve al terminar el contrato si el inquilino cumplió sus obligaciones. El obligado solidario —o fiador solidario— es la garantía preferida por los propietarios mexicanos: una empresa que garantiza solidariamente el contrato, lo que permite al propietario demandar directamente al garante sin agotar primero las acciones contra el inquilino. Para empresas extranjeras, la empresa matriz en EE.UU. actúa frecuentemente en este rol. La tercera figura es la fianza: un surety bond emitido por una afianzadora mexicana como CHUBB o Mapfre. Tiene costo para el inquilino (prima anual) y el proceso de cobro es más lento que con el obligado solidario, por lo que es menos preferida por los propietarios.'),
  makeBlock('b20', 'Una aclaración terminológica que evita confusión: el aval técnicamente aplica a títulos de crédito (pagarés), no a contratos de arrendamiento. Se usa coloquialmente en conversaciones, pero el documento correcto en un contrato de arrendamiento es el obligado solidario. Si el equipo legal redacta un "aval" en un contrato de arrendamiento, la figura jurídica aplicable es distinta a la que probablemente se buscaba.'),

  makeH2('h05', 'Las cláusulas que nadie menciona en la negociación y que cuestan caro después'),
  makeBlock('b21', 'La primera cláusula crítica es la definición de "mantenimiento" en el tercer net. Es la más ambigua del contrato y la fuente más común de disputas. ¿El techo entra en la responsabilidad del inquilino o del propietario? ¿La estructura? ¿El HVAC central, si lo hay? Un contrato que dice "el inquilino asume el mantenimiento del inmueble" sin una lista exhaustiva en un Exhibit específico deja un espacio de interpretación que eventualmente alguien llena con una disputa. Insistir en que el alcance del tercer net quede definido con una lista detallada, no con lenguaje genérico.'),
  makeBlock('b22', 'La segunda cláusula que frecuentemente no se negocia con suficiente detalle es la de mejoras al inmueble y su destino al terminar el contrato. Los mezzanines, las oficinas internas, las instalaciones de producción especializadas: ¿quedan para el propietario al terminar el contrato? ¿El inquilino tiene obligación de retirarlas y devolver el inmueble a su estado original? ¿A qué costo? Si el propietario financió Tenant Improvements (TIs) y el inquilino termina anticipadamente, ¿debe reembolsar la porción no amortizada? Estas condiciones deben estar explícitas, no inferibles.'),
  makeBlock('b23', 'La tercera: cláusulas de uso permitido. En parques multiusuario, el reglamento del parque —generalmente un Exhibit del contrato— puede restringir tipos de materiales almacenados, procesos con ruido o vibración, horarios de operación, número de empleados, tipos de vehículos en las vialidades. Para empresas que operan bajo IMMEX con procesos que implican materiales controlados, procesos con emisiones o actividades que requieren permisos ambientales especiales, la revisión del reglamento del parque es tan importante como la revisión del contrato principal.'),
  makeBlock('b24', 'La cuarta: los incrementos de CAM sin límite ("uncapped CAM"). Sin un cap negociado, el propietario puede incrementar las cuotas de mantenimiento del parque año a año sin restricción contractual. Un CAM cap de 3% a 5% anual es perfectamente viable de negociar en el mercado mexicano actual y no es una petición inusual en transacciones institucionales. El argumento para no negociarlo —"así son los contratos aquí"— no es una respuesta adecuada para un CFO que necesita modelar costos de ocupación a 10 años.'),
  makeBlock('b25', 'La quinta: la cláusula de asignación y subarrendamiento. ¿Puede el inquilino asignar el contrato a una empresa del mismo grupo corporativo sin aprobación del propietario? ¿En caso de una fusión o adquisición, el contrato vence automáticamente o subsiste con el nuevo controlador? Para empresas que forman parte de grupos corporativos con estructuras cambiantes —particularmente común en empresas de manufactura con reorganizaciones de entidades legales—, esta cláusula puede determinar si una transacción corporativa obliga a renegociar un portafolio entero de arrendamientos.'),
  makeBlock('b26', 'La sexta, crítica para build-to-suit: las condiciones de entrega y las penalizaciones por retraso. En contratos de construcción a la medida, el contrato puede incluir una renta "de construcción" durante la obra. Si el propietario entrega la nave con retraso, el inquilino puede terminar pagando renta sin tener acceso operativo al inmueble. Negociar rent-free adicional por cada semana o mes de retraso, o penalizaciones que funcionen como incentivo real para entregar en tiempo, protege la planificación de operaciones.'),
  makeBlock('b27', 'La séptima: la notificación anticipada de no renovación. La ley otorga al inquilino un derecho de preferencia en la renovación, pero sin una cláusula que obligue al propietario a notificar con 6 a 12 meses de anticipación si no renovará en las mismas condiciones, el inquilino puede perder meses de planificación críticos para una reubicación operacional. Esa planificación —encontrar alternativa, negociar nuevo contrato, coordinar el traslado de maquinaria y certificaciones— no se hace en semanas.'),

  makeH2('h06', 'Qué es negociable y cómo aprovecharlo en el mercado actual'),
  makeBlock('b28', 'El mercado de 2025 es cualitativamente diferente al de 2021-2022. Con vacancia al alza en Mexicali y Tijuana, los propietarios necesitan llenar espacio. Esa necesidad es el fundamento del poder de negociación del inquilino, y debe aprovecharse de forma sistemática, no solo en la renta base.'),
  makeBlock('b29', 'El primer instrumento negociable es el rent-free period. En el pico del mercado de 2022, con vacancia de 1.7% en Mexicali, el rent-free era prácticamente inexistente —los propietarios no lo necesitaban ofrecer. En el mercado actual, 1 a 6 meses de renta gratuita en contratos de 5 a 10 años es un rango razonable. Para contratos más largos o superficies mayores, el rango puede ser superior. Este instrumento tiene valor directo en el P&L del inquilino y no altera la renta base nominal, lo que puede ser conveniente para el propietario en su reporte de tasas.'),
  makeBlock('b30', 'El segundo instrumento son los Tenant Improvements (TIs). Cuando el propietario financia mejoras a la nave —oficinas, instalaciones eléctricas específicas, sistemas de HVAC adicionales, docks—, permite al inquilino entrar operacional sin una inversión de capital inicial significativa. En el mercado actual, con propietarios compitiendo por ocupar naves vacías, los TIs se han convertido en el principal instrumento de diferenciación entre opciones similares en precio. La contraprestación típica es un plazo de contrato mayor o un ajuste mínimo de renta.'),
  makeBlock('b31', 'El tamaño de la transacción amplifica el poder de negociación de forma no lineal. Una empresa que ocupa 50,000 sq ft tiene poder moderado: TIs razonables y rent-free de 1 a 2 meses son alcanzables. Una empresa que ocupa 200,000 sq ft tiene poder alto: TIs sustanciales, rent-free de 3 a 6 meses, y condiciones de CAM más favorables. Una empresa que requiere 500,000 sq ft o más está en posición de un build-to-suit completo donde puede dictar prácticamente todos los términos del contrato, incluyendo especificaciones constructivas, cronograma de entrega y estructura de garantías.'),
  makeBlock('b32', 'Otros instrumentos negociables en este mercado: el Right of First Refusal sobre naves adyacentes para empresas con planes de expansión; una cláusula de early termination con fee razonable —típicamente 3 a 6 meses de renta— que otorga flexibilidad sin la exposición total del plazo restante; y el plazo del contrato mismo, donde los propietarios con vacancia aceptan plazos más cortos para cerrar transacciones que antes solo consideraban en horizontes de 10 años.'),
  makeBlock('b33', 'Una nota final sobre el proceso: la negociación de un contrato industrial en México es un proceso que involucra al equipo legal local, al equipo financiero y al desarrollador. Los equipos legales extranjeros que llegan con plantillas de contratos de California o Texas y buscan adaptar los términos mexicanos a esas plantillas frecuentemente generan fricciones innecesarias. El punto de partida más eficiente es partir del contrato estándar del desarrollador, identificar las cláusulas de mayor riesgo para el inquilino, y negociar sobre esa base con conocimiento específico del mercado mexicano. Los desarrolladores con experiencia institucional en Baja California tienen práctica en negociar con equipos legales de empresas norteamericanas y entienden las diferencias que más importan.'),
  makeBlock('b34', 'Para empresas que están evaluando opciones en el mercado de Mexicali, Grupo Nelson opera en la región desde hace seis décadas y ha acompañado negociaciones de contrato con empresas manufactureras de múltiples sectores. La inteligencia de mercado sobre condiciones actuales, disponibilidad de naves y prácticas de negociación de la región es parte del proceso de due diligence que cualquier empresa debería completar antes de firmar.'),

  makeBlock('b_fuentes', 'Fuentes: Solili — Reporte de Mercado Industrial Mexicali, junio 2024 y noviembre 2025 · Cushman & Wakefield — Mexico Industrial Market Report 2024 · Newmark — Tijuana Industrial Market Report Q1 2025 · Código Civil del Estado de Baja California · Código Civil Federal (México) · Ley Monetaria de los Estados Unidos Mexicanos · BOMA International — Lease Guide · SIOR — Industrial Lease Standards · Bureau of Labor Statistics — Consumer Price Index (CPI) · INEGI / Banxico — Índice Nacional de Precios al Consumidor (INPC)'),
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

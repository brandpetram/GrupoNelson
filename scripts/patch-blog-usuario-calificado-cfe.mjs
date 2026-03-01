/**
 * Parcha el post de blog: Usuario Calificado CFE: Cuándo Tiene Sentido Salirse de la Tarifa Regulada
 * Documento ID: uqKP1CJoSsgXdCXPUwMTcF
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMTcF'

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

const description = 'La figura de Usuario Calificado promete ahorros de hasta 30% frente a la tarifa GDMTH, pero el proceso de calificación, las obligaciones que permanecen y los riesgos específicos de Baja California hacen que la decisión requiera más análisis del que suele presentar un SSC en su primera propuesta.'

const blocks = [
  makeBlock('b01', 'La tarifa GDMTH tiene una virtud que pocas empresas industriales aprecian hasta que consideran abandonarla: es predecible. CFE cobra por demanda, energía y factor de potencia, y aunque el recibo puede ser elevado, no exige que el director de planta entienda cómo funciona un mercado mayorista de electricidad. El Mercado Eléctrico Mayorista (MEM) promete ahorros reales, documentados entre 15% y 30% frente a la tarifa regulada, pero esos ahorros tienen condiciones que pocas presentaciones comerciales de Suministradores de Servicios Calificados mencionan con la misma claridad que el porcentaje de descuento.'),

  makeBlock('b02', 'Para una nave industrial en Mexicali que paga entre 800,000 y 2,000,000 de pesos mensuales en electricidad, la diferencia puede ser significativa. El problema es que el camino hacia esos ahorros tiene costos de entrada, obligaciones permanentes y riesgos específicos que dependen de la geografía, el perfil de consumo y la capacidad de gestión interna de cada empresa. Este artículo no busca desalentar la figura del Usuario Calificado: busca describir con precisión cuándo tiene sentido económico y operativo, y cuándo no.'),

  makeH2('h01', 'Qué es un Usuario Calificado y cómo funciona el MEM'),

  makeBlock('b03', 'La Ley de la Industria Eléctrica define al Usuario Calificado en su artículo 3, fracción XLVIII, como aquel consumidor con una demanda medida igual o superior a 1 MW que está habilitado para comprar energía directamente en el Mercado Eléctrico Mayorista. En la práctica, las consultoras especializadas recomiendan no iniciar el proceso por debajo de 2 a 5 MW de demanda, porque por debajo de ese umbral los costos de gestión, medición y cumplimiento normativo tienden a diluir el ahorro. Para empresas que individualmente no alcanzan 1 MW, la LIE permite agregar múltiples centros de carga del mismo grupo económico, con un mínimo de 25 kW por nodo, para sumar la demanda total.'),

  makeBlock('b04', 'En el MEM, operado por CENACE, la energía se valoriza a través del Precio Marginal Local (PML), que se compone de tres elementos: el componente de energía (el precio base de generación), el componente de congestión (reflejo de las limitaciones en la red de transmisión entre zonas) y el componente de pérdidas (asociado a la resistencia física del cable). Participar directamente en el MEM requiere capacidad técnica para programar consumo, gestionar desvíos y operar como participante del mercado, lo que está fuera del alcance operativo de la mayoría de las empresas industriales. Por eso existe la figura del Suministrador de Servicios Calificados: hay 12 SSCs autorizados por la CRE, entre los que se encuentran Iberdrola Clientes, Enel Energía México, E2M, Ammper y Energía Real, entre los más activos en el norte del país.'),

  makeBlock('b05', 'El mecanismo más utilizado en la práctica no es la participación spot en el MEM, sino los Contratos de Cobertura Eléctrica (CCE). Estos contratos fijan el precio de la energía por períodos de uno a cinco años, eliminando la exposición directa a la volatilidad del mercado de corto plazo. Un CCE bien estructurado es lo que convierte el ahorro teórico del MEM en un beneficio real y planificable para el área de finanzas. Sin ese contrato, el usuario calificado queda expuesto a precios que en 2024 promediaron 924 pesos por MWh a nivel nacional, con un incremento de 14% respecto a 2023, y que en veranos calurosos pueden subir de forma abrupta.'),

  makeH2('h02', 'El proceso real de calificación: tiempos, pasos y lo que nadie anticipa'),

  makeBlock('b06', 'El proceso para convertirse en Usuario Calificado tiene cuatro etapas principales, y la suma de sus tiempos sorprende a la mayoría de las empresas que se acercan al tema esperando que la transición tome semanas. El primero es el Registro de Usuarios Calificados ante la CRE, cuyo proceso de revisión tarda entre 30 y 40 días hábiles una vez que el expediente está completo. El segundo es el registro como participante del mercado ante CENACE, que añade entre cuatro y ocho semanas adicionales. El tercero es la instalación del sistema de medición avanzada (AEMI), que puede tardar entre cuatro y doce semanas dependiendo de la disponibilidad de equipos, acceso a la instalación y capacidad del contratista autorizado; el costo de este sistema oscila entre 50,000 y más de 200,000 pesos mexicanos, dependiendo de la complejidad del punto de medición. Sumando las etapas, el proceso completo toma entre cuatro y seis meses desde el inicio de los trámites hasta el primer día de operación como UC.'),

  makeBlock('b07', 'Lo que pocas presentaciones comerciales anticipan es que el costo del medidor AEMI recae directamente sobre la empresa, no sobre CFE ni sobre el SSC, y que la coordinación para su instalación puede convertirse en un cuello de botella si el proveedor certificado no tiene disponibilidad. Tampoco suele mencionarse que, si el expediente presentado ante la CRE tiene inconsistencias, los plazos se reinician. El SSC usualmente incluye sus honorarios de gestión dentro del margen del contrato de cobertura, no como un cargo separado visible, lo que hace que el costo real de la transición sea difícil de evaluar de forma aislada.'),

  makeH2('h03', 'Lo que el Usuario Calificado no elimina: obligaciones y cargos que permanecen'),

  makeBlock('b08', 'Uno de los malentendidos más comunes sobre la figura del Usuario Calificado es pensar que implica una ruptura total con CFE. No es así. Al calificarse, la empresa deja de comprarle energía a CFE Suministrador de Servicios Básicos, pero sigue pagando a CFE Transmisión por el uso de la Red Nacional de Transmisión, a CFE Distribución por el uso de la red de distribución local, y cargos por capacidad, servicios conexos y el cargo de CENACE, que en 2026 asciende a aproximadamente 7.62 pesos por MWh. El sistema de medición AEMI también tiene costos de mantenimiento recurrentes que corren por cuenta del usuario.'),

  makeBlock('b09', 'La obligación más relevante que pocas presentaciones de SSC colocan en el primer plano es la de los Certificados de Energías Limpias (CELs). La Ley de Transición Energética establece que los usuarios calificados deben acreditar que aproximadamente el 35% de su consumo anual proviene de fuentes limpias, mediante la tenencia de CELs equivalentes. El precio de estos certificados ha oscilado históricamente entre 20 y 47 dólares por MWh en las subastas de la CRE. El incumplimiento en la entrega de CELs acarrea sanciones que van de 6 a 50 salarios mínimos por cada CEL faltante. Un SSC competente incluye la cobertura de CELs en el contrato, pero es fundamental verificarlo explícitamente y entender el costo asociado antes de firmar.'),

  makeBlock('b10', 'Otro riesgo que permanece, y que tiene consecuencias económicas directas, es el de los desvíos entre el consumo programado y el consumo real. En el MEM, si la empresa consume más o menos de lo que declaró en su programa de consumo, la diferencia se liquida al precio spot de ese momento. Para una planta con consumo estable y predecible, este riesgo es manejable. Para una empresa cuya demanda varía según pedidos, temporadas o paros no planificados, el costo de los desvíos puede erosionar una parte importante del ahorro esperado.'),

  makeH2('h04', 'Los riesgos específicos de Baja California'),

  makeBlock('b11', 'Baja California opera dentro del Sistema Eléctrico de Baja California (SEBC), que históricamente ha estado interconectado con la red de California (CAISO) y no con el Sistema Interconectado Nacional (SIN). Esta condición geográfica tiene implicaciones directas sobre los precios del MEM en la región: en verano, cuando la demanda de aire acondicionado en California y en el propio Mexicali alcanza su punto máximo, los precios spot del SEBC se correlacionan con el mercado californiano y pueden dispararse. Un empresario industrial en Monterrey o Querétaro enfrenta una exposición spot diferente a la de uno en Mexicali, y las simulaciones que un SSC presenta usando promedios nacionales pueden no reflejar la realidad del SEBC en julio o agosto.'),

  makeBlock('b12', 'En Mexicali, las temperaturas de verano superan regularmente los 45 grados Celsius. Las plantas industriales con procesos de climatización intensa, como manufactura de electrónica, dispositivos médicos o alimentos con cadena de frío, tienen picos de consumo precisamente cuando los precios spot son más altos. Un Contrato de Cobertura Eléctrica bien estructurado protege contra esta volatilidad, pero el precio de ese seguro se negocia en función del nivel de riesgo que el SSC asume, y en el SEBC ese nivel es más elevado que en otras zonas del país.'),

  makeBlock('b13', 'Hay un tercer riesgo de Baja California que no tiene solución dentro del esquema del Usuario Calificado: los apagones físicos. Ser UC no cambia la infraestructura física de transmisión y distribución que entrega la electricidad a la planta. Durante el verano de 2025, medios locales reportaron hasta diez apagones por día en Mexicali, con el 91% de los parques industriales reportando afectaciones. Un usuario calificado que sufre un apagón enfrenta exactamente las mismas interrupciones que uno en tarifa regulada, porque la causa es la red física, no el mecanismo de compra de energía. Para las plantas que requieren continuidad operativa, el análisis de respaldo mediante generación distribuida o UPS industriales es independiente de la decisión sobre calificación.'),

  makeH2('h05', 'El perfil de empresa para quien tiene sentido y para quien no'),

  makeBlock('b14', 'La candidatura natural al esquema de Usuario Calificado en Mexicali es una empresa manufacturera con demanda estable de entre 2 y 5 MW o más, consumo anual que supere los 10 a 15 GWh, y un proceso productivo de alta continuidad, como maquiladoras de autopartes, manufactura de electrónica de consumo, producción de dispositivos médicos o plantas de alimentos con refrigeración continua. Estas empresas tienen un perfil de consumo predecible que minimiza el riesgo de desvíos, un horizonte de operación que justifica comprometerse en un contrato de cobertura de tres a cinco años, y una estructura organizacional que puede absorber, o contratar externamente, la gestión energética que requiere el esquema.'),

  makeBlock('b15', 'En contraste, hay perfiles donde el esquema no tiene sentido económico. Una empresa con consumo variable o estacional, como ensambladores que operan por pedidos o empresas de distribución con picos impredecibles, asume un riesgo de desvíos que puede convertir el ahorro esperado en un costo adicional. Tampoco conviene a empresas sin recursos para dedicar a la gestión energética, ya sea internamente o a través de un consultor; el MEM no es un sistema que pueda ignorarse una vez que se firma el contrato. Finalmente, un horizonte de operación menor a tres años en la ubicación actual hace difícil recuperar la inversión en medición AEMI y los costos de la transición antes de que la empresa cambie de instalación o cierre el ciclo del proyecto.'),

  makeH2('h06', 'El contexto regulatorio actual y la perspectiva de mediano plazo'),

  makeBlock('b16', 'La reforma eléctrica impulsada por el gobierno anterior introdujo en 2021 modificaciones que alteraron las reglas de despacho en el MEM, dando prioridad a la generación de CFE sobre la de privados, lo que redujo la certidumbre para los inversores en energías limpias y generó incertidumbre regulatoria en todo el esquema. Esa reforma fue uno de los argumentos que algunos asesores usaron para recomendar cautela antes de calificarse. Desde octubre de 2024, el gobierno de la presidenta Sheinbaum ha mostrado señales más pragmáticas en materia energética, con menor confrontación retórica hacia el sector privado, aunque sin revertir los cambios regulatorios de fondo.'),

  makeBlock('b17', 'En paralelo, CFE anunció un plan de inversión 2025–2030 por 8,177 millones de dólares para modernizar la red de transmisión, lo que en el largo plazo podría reducir los problemas de congestión que afectan los precios del MEM en zonas como Baja California. La incertidumbre regulatoria es un argumento para estructurar contratos de cobertura con cláusulas de salida claras, no necesariamente para evitar la calificación. Un asesor energético independiente, sin conflicto de interés sobre la comisión del contrato, puede ayudar a evaluar el CCE propuesto por el SSC con criterio técnico antes de la firma.'),

  makeBlock('b18', 'La figura del Usuario Calificado es un mecanismo real con ahorros documentados, pero su valor depende de que la empresa entienda con precisión qué está comprando y qué obligaciones asume. El 15% o 30% de ahorro que aparece en la primera diapositiva de la presentación del SSC es el punto de partida del análisis, no la conclusión. Desde Grupo Nelson acompañamos a empresas industriales en Mexicali en el proceso de evaluar si la calificación tiene sentido para su operación específica, incluyendo la revisión del Contrato de Cobertura antes de la firma.'),

  makeBlock('b_fuentes', 'Fuentes: Ley de la Industria Eléctrica, Art. 3 fracc. XLVIII (DOF); Ley de Transición Energética, obligación de CELs (DOF); CENACE, Reportes de Resultados del MEM 2024; CRE, Registro de Suministradores de Servicios Calificados; El Imparcial, cobertura crisis eléctrica Mexicali julio 2025; CFE, Plan de Negocios 2025–2030; SENER, Programa de Desarrollo del Sistema Eléctrico Nacional (PRODESEN) 2024–2038.'),
]

const body = [{ _key: 'es', _type: 'internationalizedArrayBlockContentValue', value: blocks }]
const descriptionField = [{ _key: 'es', _type: 'internationalizedArrayTextValue', value: description }]

try {
  const result = await client.patch(DOC_ID).set({ body, description: descriptionField }).commit()
  console.log('✅ Post actualizado:', result._id)
} catch (err) {
  console.error('❌ Error:', err.message)
}

/**
 * Parcha el post de blog: De Terreno Baldío a Parque Industrial: Lo Que Hay Detrás de un Parque Que Funciona
 * Documento ID: uqKP1CJoSsgXdCXPUwMOsh
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMOsh'

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

const description = 'El 91% de los parques industriales en México experimentó problemas de suministro eléctrico en 2024. La mayoría de los arrendatarios lo descubrió después de firmar. Detrás de ese dato hay un proceso de desarrollo que pocos brochures documentan: de terreno vacío a parque operable hay entre cinco y ocho años, inversiones en infraestructura que pueden superar los 20 millones de dólares, y decisiones técnicas tempranas que determinan si un parque puede alojar manufactura de primer nivel o solo almacenamiento básico.'

const blocks = [
  // Apertura
  makeBlock('b01', 'El 91% de los parques industriales en México experimentó problemas de suministro eléctrico en 2024, según datos de BBVA Research y AMPIP. No fue un año excepcionalmente malo para la red: fue el resultado acumulado de una demanda que creció más rápido que la infraestructura de generación y transmisión. Lo que hace relevante ese porcentaje para un VP de Operaciones o un director de Supply Chain no es la cifra en sí, sino cuándo la mayoría de los arrendatarios lo descubrió: después de firmar el contrato.'),

  makeBlock('b02', 'El fenómeno tiene nombre en el sector: "dark buildings". Naves construidas, listas para ocupar en papel, que no pueden operar porque la capacidad eléctrica contratada no está disponible o porque la infraestructura del parque no está dimensionada para soportar la carga real del proceso productivo. No es un problema marginal. Está documentado en múltiples estados del norte y el Bajío, y es la consecuencia directa de evaluar un parque industrial por lo que se ve en un recorrido —la nave, el acceso, el cerco perimetral— en lugar de lo que determinó su capacidad operativa años antes de que el primer inquilino llegara.'),

  makeBlock('b03', 'Entender qué hay detrás de un parque industrial que funciona requiere entender el proceso que lo creó. Ese proceso rara vez aparece en los materiales de marketing. Aparece, en cambio, en las decisiones técnicas y financieras que un desarrollador tomó entre cinco y ocho años antes de la firma del primer contrato de arrendamiento.'),

  makeH2('h01', 'Las fases que nadie menciona en el brochure: de terreno vacío a parque operable'),

  makeBlock('b04', 'La NMX-R-046-SCFI-2015, norma mexicana de parques industriales, establece criterios mínimos de infraestructura para que un desarrollo pueda llamarse parque industrial: superficie urbanizada mínima de 10 hectáreas, con recomendación de reserva adicional de otras 10 hectáreas para expansión. Pero la norma describe el resultado, no el proceso. El proceso empieza mucho antes.'),

  makeBlock('b05', 'La Fase 0 —selección estratégica del sitio— es la que más condiciona todo lo que viene después. Un terreno puede ser barato, estar bien ubicado sobre papel y tener todos los permisos de uso de suelo en orden, y aun así ser inviable para un parque industrial serio si la topografía requiere movimientos de tierra excesivos, si la factibilidad de servicios básicos no existe en el horizonte de inversión razonable o si la conectividad logística no soporta operación de trailers de doble remolque. Los desarrolladores que no hacen este análisis antes de comprar el terreno trasladan ese riesgo al primer inquilino, generalmente sin decirlo.'),

  makeBlock('b06', 'La Fase 1 comprende los estudios previos: mecánica de suelos, Manifestación de Impacto Ambiental (MIA) ante SEMARNAT —con plazos de revisión de 60 a 120 días en condiciones normales—, y factibilidades de agua y electricidad. La factibilidad eléctrica ante CFE es el documento que más frecuentemente determina el ritmo de desarrollo de un parque. Si CFE no puede garantizar suministro en el horizonte de tiempo que requiere el desarrollador para arrancar operaciones, hay dos opciones: esperar, o financiar la infraestructura de transmisión. La segunda opción cuesta decenas de millones de pesos y no todos los desarrolladores están dispuestos a acometerla.'),

  makeBlock('b07', 'La Fase 2 es la urbanización propiamente dicha: calles diseñadas con radio de giro mínimo de 25 metros para trailers de largo alcance, drenaje sanitario y pluvial separados —no el mismo sistema, aunque la norma básica no siempre lo exija—, red de agua con hidrantes dimensionados para protección contra incendios, alumbrado de vialidades, y red eléctrica interna. Cada uno de estos elementos tiene un costo real que el desarrollador decide absorber como infraestructura del parque o trasladar al inquilino en forma de obras complementarias. La diferencia entre un parque Clase A y uno que se presenta como tal sin serlo frecuentemente se localiza en estas decisiones de Fase 2.'),

  makeBlock('b08', 'Un dato que ilustra la escala de decisiones en Fase 0: el Valle de Mexicali tiene una recarga anual de su acuífero de 197.3 millones de metros cúbicos contra una extracción de 602 millones de metros cúbicos. CONAGUA documentó la sobreexplotación desde 2015. El acuífero tiene disponibilidad cero para nuevas concesiones. Un parque industrial que se desarrolle en esa región hoy no puede simplemente conectarse a la red de agua como si la disponibilidad fuera ilimitada: requiere gestión activa de concesiones existentes, sistemas de reciclaje de agua y, en algunos casos, tecnologías de reducción de consumo que el desarrollador debe prever desde el diseño. El caso Constellation Brands —una planta que requería 20 millones de metros cúbicos anuales, diez veces el consumo combinado de las diez industrias más grandes de Mexicali, cuya cancelación fue anunciada en 2019— muestra lo que ocurre cuando esta variable se ignora hasta que es políticamente insostenible.'),

  makeH2('h02', 'La infraestructura eléctrica: el diferenciador que no aparece en los renders'),

  makeBlock('b09', 'México tiene 477 parques industriales activos con una demanda agregada superior a 13,000 MW. Para 2030, el sector necesitará 2,500 MW adicionales solo para absorber la demanda proyectada por nearshoring. AMPIP proyecta una inversión histórica de 4,161 millones de dólares en parques industriales durante 2025. En ese contexto, la infraestructura eléctrica ha dejado de ser un insumo dado por sentado para convertirse en el principal diferenciador entre parques que pueden alojar manufactura intensiva y parques que no pueden.'),

  makeBlock('b10', 'Un parque de 50 hectáreas orientado a manufactura general requiere una subestación de entre 30 y 50 MVA. Las líneas de transmisión en parques avanzados operan típicamente a 115 kV o 230 kV. La pregunta que separa los parques serios de los que prometen es simple: ¿quién paga la subestación?'),

  makeBlock('b11', 'Los desarrolladores Clase A financian la subestación como infraestructura del parque. Es una decisión de capital que puede representar varios millones de dólares, y que el desarrollador amortiza a lo largo de los contratos de arrendamiento. Los parques de menor escala o menor solidez financiera típicamente trasladan ese costo al inquilino: la subestación aparece como una obra complementaria que el arrendatario debe costear antes de iniciar operaciones. En parques informales, el inquilino descubre la capacidad insuficiente después de firmar, cuando ya no hay margen de negociación. El costo de una subestación industrial puede superar varios millones de dólares adicionales no presupuestados.'),

  makeBlock('b12', 'CFE estructura las tarifas industriales en tres categorías principales: GDMTO para demandas menores a 100 kW, GDMTH para demandas iguales o superiores a 100 kW con cargos diferenciados en horarios base, intermedio y punta, y la figura de Usuario Calificado para consumos superiores a 1 MW que puede acceder al mercado mayorista eléctrico. En 2025, CFE lanzó el programa "Energía para la Industria" con cinco paquetes de suministro diseñados específicamente para hubs industriales del norte y el Bajío. La existencia de ese programa es una señal de que CFE reconoce que la demanda industrial superó la capacidad de respuesta tradicional del sistema de factibilidades caso por caso.'),

  makeBlock('b13', 'Para un director de Supply Chain o un VP de Operaciones evaluando un parque, la pregunta correcta no es "¿tienen electricidad?" sino "¿cuál es la capacidad disponible instalada, cuál es la capacidad contratada actual con otros inquilinos, y cuál es la capacidad real que pueden garantizar para nuestra operación en el horizonte de los próximos doce meses?". Si el desarrollador no puede responder con cifras específicas respaldadas por documentación de CFE, la respuesta efectiva es que no lo sabe.'),

  makeH2('h03', 'La administración del parque: lo que distingue la operación institucional de la improvisada'),

  makeBlock('b14', 'La NMX-R-046-SCFI-2015 exige que todo parque industrial cuente con una empresa administradora responsable de las áreas comunes. En la práctica, la diferencia entre administración institucional y administración improvisada es tan grande como la diferencia entre los parques mismos.'),

  makeBlock('b15', 'La administración institucional en un parque maduro incluye: seguridad 24/7 con CCTV y control de acceso vehicular registrado, mantenimiento preventivo de vialidades y áreas verdes con calendario documentado, gestión activa de servicios básicos con interlocución directa ante CFE, CONAGUA y aduana cuando aplica, y protocolos de respuesta ante incidentes con tiempos de respuesta definidos. Estos elementos no son decorativos: determinan si una planta puede operar con los estándares de seguridad que exigen sus clientes corporativos y sus aseguradoras.'),

  makeBlock('b16', 'El AMPIP Programa "Parque Industrial Seguro" establece 286 criterios distribuidos en 10 estándares de evaluación. El proceso de certificación toma aproximadamente 10 meses y está basado en las normas ISO 28000 (gestión de la seguridad en la cadena de suministro), ISO 31000 (gestión de riesgos), C-TPAT y OEA (Operador Económico Autorizado). La primera generación de parques certificados bajo este programa se acreditó en 2021. Para empresas que operan cadenas de suministro con clientes en Estados Unidos o con requerimientos de auditoría de proveedores, esta certificación es una señal verificable de que el parque opera con estándares documentados, no con promesas verbales.'),

  makeBlock('b17', 'En el ámbito de sostenibilidad, México ocupa el décimo lugar mundial en proyectos LEED registrados, con 729 proyectos en 2023. El primer edificio industrial LEED en México fue EcoLogistics 1 de Hines en San Luis Potosí. La certificación LEED en una nave industrial no es solo una distinción ambiental: implica eficiencia energética documentada, gestión de agua verificada y materiales de construcción con trazabilidad. Para CFOs que evalúan el costo total de operación a 10 o 15 años, la diferencia en consumo energético entre una nave certificada LEED y una nave estándar puede ser material.'),

  makeBlock('b18', 'Los parques maduros también ofrecen servicios de valor agregado que emergen orgánicamente con los años: agencias aduanales dentro del parque o a distancia caminable, comedores industriales, servicios médicos básicos y transporte de personal organizado. Ninguno de estos servicios aparece en el contrato de arrendamiento. Todos tienen impacto directo en la capacidad de atraer y retener personal operativo, especialmente en ciudades con mercados laborales industriales competitivos como Mexicali o Tijuana.'),

  makeH2('h04', 'Mexicali como laboratorio de 60 años: lo que construye un ecosistema industrial'),

  makeBlock('b19', 'En 1966, Mario Hernández, Héctor Sada, Ignacio Guajardo y Eduardo Martínez Palomera fundaron PIMSA —Parque Industrial Mexicali S.A.—, el primer parque industrial de Baja California y del occidente de México. Ese mismo desarrollo introdujo en México el concepto de "nave en inventario": una nave construida antes de tener un inquilino confirmado. La apuesta de que habría demanda industrial suficiente para absorber naves ya construidas resultó correcta, y el modelo se replicó eventualmente en toda la república.'),

  makeBlock('b20', 'Para 1973, Baja California ya contaba con 102 empresas industriales en Ensenada, Mexicali, Tecate y Tijuana. Los primeros inquilinos de PIMSA incluyeron a Hughes, Rockwell, Mattel, Paper-Mate, Emerson, Data Products y Lucky Gold Star —hoy LG—. Esa concentración de manufactura extranjera estableció las condiciones que 60 años después hacen de Mexicali uno de los mercados industriales más competitivos de México: proveedores locales especializados, personal con cultura manufacturera consolidada, autoridades con experiencia en trámites industriales, y servicios de apoyo que no existen donde no hay demanda acumulada.'),

  makeBlock('b21', 'La manufactura como porcentaje del PIB de Baja California llegó a 36.3% en agosto de 2024, con 297,711 empleos directos. El estado es la cuarta entidad manufacturera de México en términos de empleo. Esos números no se construyeron en un ciclo de nearshoring: son el resultado de seis décadas de inversión acumulada en infraestructura industrial, formación de talento y consolidación de cadenas de suministro regionales.'),

  makeBlock('b22', 'Los principales desarrolladores activos en Mexicali hoy reflejan esa historia acumulada: PIMSA opera cuatro parques principales y dos unidades especializadas; IAMSA tiene 27 parques y 38 años de experiencia en el mercado; Centinela Industrial Park gestiona 706 hectáreas; Grupo PICSA y otros desarrolladores completan un mercado con múltiples opciones en distintas escalas y configuraciones. La absorción bruta impulsada por nearshoring alcanzó 1.7 millones de metros cuadrados en el tercer trimestre de 2024, un incremento del 14% respecto al año anterior según CBRE. AMPIP reporta 98% de ocupación en sus parques miembro. Hay 103 nuevos parques en construcción en México. La demanda existe; la pregunta para cualquier empresa que evalúa instalarse es si la infraestructura del parque específico puede satisfacerla.'),

  makeH2('h05', 'Parque maduro vs. parque nuevo: el análisis del primer inquilino'),

  makeBlock('b23', 'Ser el primer inquilino de un parque nuevo tiene ventajas reales: precios por metro cuadrado generalmente más bajos, mayor flexibilidad en la negociación de especificaciones, posibilidad de influir en el diseño de la nave. También tiene riesgos que pocos desarrolladores mencionan en las presentaciones iniciales.'),

  makeBlock('b24', 'Los riesgos del primer inquilino incluyen: infraestructura no probada en condiciones reales de operación —los sistemas de drenaje, eléctrico y de agua existen en papel, pero no han sido estresados por la operación simultánea de múltiples plantas—; ausencia de servicios de apoyo en el entorno inmediato del parque, que tardan años en desarrollarse orgánicamente; riesgo de abandono del proyecto por el desarrollador si la absorción de naves es más lenta de lo proyectado, dejando al inquilino en un parque a medio desarrollar con servicios de administración subdimensionados; y recursos de seguridad menores en las etapas iniciales, cuando hay menos cuotas de administración para financiarlos.'),

  makeBlock('b25', 'Un parque maduro ofrece lo opuesto: infraestructura probada durante años de operación, red de proveedores locales consolidada que reduce los tiempos de respuesta para mantenimiento y servicios técnicos, relaciones establecidas con CFE, CONAGUA, aduana y autoridades municipales que aceleran trámites, y servicios de apoyo —desde restaurantes hasta servicios médicos— que los trabajadores ya utilizan. El costo de esa madurez es generalmente un precio por metro cuadrado más alto y menor flexibilidad en las especificaciones de la nave.'),

  makeBlock('b26', 'El análisis correcto no es si un parque nuevo es mejor o peor que uno maduro: es si los riesgos específicos del parque nuevo que se está evaluando están cubiertos por el precio y las condiciones del contrato. Un desarrollador nuevo con sólido respaldo financiero, infraestructura completamente instalada antes de la firma y compromisos verificables de CFE puede ofrecer condiciones competitivas con un nivel de riesgo aceptable. Un desarrollador que promete infraestructura futura sin documentación que respalde los plazos y los costos está transfiriendo ese riesgo al inquilino sin precio explícito.'),

  makeH2('h06', 'Las preguntas que separan los parques serios de los que prometen'),

  makeBlock('b27', 'Evaluar un parque industrial con el rigor que la inversión justifica requiere ir más allá del recorrido en nave y la presentación de renders. Hay un conjunto de preguntas técnicas y operativas que un desarrollador serio puede responder con documentación; uno que no puede hacerlo está respondiendo con promesas.'),

  makeBlock('b28', 'Sobre infraestructura eléctrica: ¿cuál es la capacidad instalada de la subestación del parque en MVA, cuánta está ya comprometida con inquilinos existentes, y cuál es la capacidad disponible documentada por CFE para nuevas conexiones? Un parque que no puede entregar esta información con respaldo documental no puede garantizar que su infraestructura eléctrica soporte la operación proyectada.'),

  makeBlock('b29', 'Sobre agua: ¿cuáles son los títulos de concesión de agua vigentes del parque, cuál es el volumen autorizado, y cuánto del volumen disponible está ya asignado a inquilinos actuales? En mercados con acuíferos sobreexplotados como el Valle de Mexicali, esta pregunta no es burocrática: determina si la expansión futura del parque es físicamente posible.'),

  makeBlock('b30', 'Sobre administración y seguridad: ¿el parque tiene certificación AMPIP "Parque Industrial Seguro" o está en proceso? ¿Cuál es el protocolo de respuesta ante incidentes y cuáles son los tiempos de respuesta comprometidos? ¿La empresa administradora es independiente del desarrollador o es la misma entidad con posible conflicto de interés entre maximizar la ocupación y mantener estándares de servicio?'),

  makeBlock('b31', 'Sobre el contrato de arrendamiento: ¿cuáles son las obligaciones del desarrollador en caso de falla en el suministro de servicios básicos —electricidad, agua, seguridad— y cuáles son los remedios contractuales disponibles para el arrendatario? Un contrato que no define consecuencias para el desarrollador por fallas de infraestructura es un contrato que asigna ese riesgo al inquilino sin compensación.'),

  makeBlock('b32', 'Sobre la estructura financiera del desarrollo: ¿el parque está financiado con deuda respaldada por contratos de arrendamiento firmados, con capital propio del desarrollador, o con preventas de terreno? Esta pregunta determina el alineamiento de incentivos: un desarrollador que vendió terrenos para financiar infraestructura ya recuperó su inversión independientemente de si el parque funciona; uno que opera bajo modelo de arrendamiento tiene incentivos para mantener la infraestructura porque su flujo de caja depende de ello.'),

  // Cierre con mención natural de Grupo Nelson
  makeBlock('b33', 'La brecha entre un parque industrial que funciona y uno que promete funcionar no siempre es visible en un recorrido de dos horas. Se construye —o se descuida— en decisiones tomadas años antes: en la factibilidad eléctrica que el desarrollador gestionó antes de vender la primera nave, en la subestación que financió como infraestructura del parque en lugar de trasladarla al inquilino, en los sistemas de administración que instaló antes de que hubiera cuotas suficientes para justificarlos. Grupo Nelson ha desarrollado aproximadamente cuatro millones de pies cuadrados en Mexicali, con parques que incluyen operaciones de manufactura aeroespacial de primer nivel como la expansión de Gulfstream en Nelson II. La decisión de qué preguntar antes de firmar —y exigir documentación en respuesta— es la que más frecuentemente diferencia una instalación industrial exitosa de una que descubre sus limitaciones operativas cuando ya no hay margen para negociar.'),

  // Bloque de fuentes
  makeBlock('b_fuentes', 'Fuentes: AMPIP (ampip.org.mx), Programa "Parque Industrial Seguro" AMPIP; BBVA Research/AMPIP, Situación Inmobiliaria México 2024; NMX-R-046-SCFI-2015, Parques Industriales — Especificaciones; CBRE MarketView Industrial México 3T 2024; The Logistics World, Nearshoring y parques industriales México 2024; Mexico Industry, Infraestructura eléctrica parques industriales; PIMSA (pimsa.com.mx), Historia y desarrollo Mexicali; IAMSA (iamsa.com.mx); MarketDataMéxico, Mercado industrial Baja California 2024; CONAGUA, Disponibilidad media anual acuífero Valle de Mexicali (1006); Scielo / Pie de Página, Caso Constellation Brands y agua Mexicali; U.S. Green Building Council, LEED en México 2023; Hines EcoLogistics 1, Primer edificio industrial LEED México; CFE, Tarifas industriales GDMTO / GDMTH / Usuario Calificado; CFE / Marsam Solar, Programa Energía para la Industria 2025; FM Global, Industrial Property Risk Engineering.'),
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

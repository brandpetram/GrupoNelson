/**
 * Parcha el post de blog: IMMEX Anexo 24 y 30: Guía de Cumplimiento para No Perder tu Certificación
 * Documento ID: uqKP1CJoSsgXdCXPUwM7np
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwM7np'

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

const description = 'En septiembre de 2025, 170 empresas perdieron su programa IMMEX de forma definitiva. No por fraude ni por mala fe: por no presentar un reporte anual a tiempo. Esta guía explica la arquitectura técnica del Anexo 24, qué obliga el Anexo 30, qué cambió con el Apartado C en 2024, cómo opera una auditoría de la AGACE y los errores que acumulan saldos fantasma en los sistemas de inventarios.'

const blocks = [
  makeBlock('b01', 'En septiembre de 2025, la Secretaría de Economía publicó en el Diario Oficial de la Federación la cancelación definitiva de 170 programas IMMEX. La causa fue idéntica en todos los casos: no presentar el Reporte Anual de Operaciones de Comercio Exterior (RAOCE) correspondiente al ejercicio 2024. No hubo fraude documentado, ni evasión de impuestos, ni exportación de mercancía prohibida. Solo un plazo incumplido. El patrón se repite cada año: 117 cancelaciones en 2023, 155 en 2024, 170 en 2025.'),
  makeBlock('b02', 'Una cancelación definitiva por esta causa activa una prohibición de cinco años para solicitar un nuevo programa. Las mercancías bajo régimen temporal deben retornarse o cambiar de régimen en 60 días calendario. La prórroga de 180 días que el SAT otorga para casos de cancelación —vía Forma B5— no está disponible cuando la causa es incumplimiento del RAOCE.'),
  makeBlock('b03', 'Este artículo no introduce el programa IMMEX —para eso existe la guía anterior de esta serie. Lo que describe aquí es la mecánica operativa que determina si una empresa mantiene o pierde su certificación: la arquitectura técnica del Anexo 24, la distinción con el Anexo 30, los cambios regulatorios de 2024-2025, el funcionamiento de las auditorías de la AGACE, y los errores de sistema que acumulan saldos fantasma que después son indefendibles.'),

  makeH2('h01', 'El Anexo 24 no es un software: es una arquitectura de datos'),
  makeBlock('b04', 'Una confusión frecuente entre empresas que inician operaciones IMMEX es asociar el Anexo 24 con un programa informático específico. El Anexo 24 —cuya versión vigente fue publicada el 6 de enero de 2025 en el DOF como parte de las Reglas Generales de Comercio Exterior 2025— no exige ningún software en particular. Exige que cualquier sistema que use la empresa tenga los módulos y catálogos obligatorios definidos en el Apartado A.'),
  makeBlock('b05', 'Los catálogos requeridos son tres. El catálogo de datos generales del contribuyente: RFC, número de programa IMMEX, domicilio fiscal. El catálogo de materiales: fracción arancelaria según la TIGIE, descripción comercial, unidad de medida TIGIE, número de parte del proveedor, y carta de materiales (BOM —Bill of Materials). El catálogo de productos terminados: fracción arancelaria del bien que sale de la planta.'),
  makeBlock('b06', 'Los módulos requeridos son cinco. El módulo de Entradas registra cada pedimento de importación temporal con número de operación, fecha, fracción arancelaria, cantidad y valor. El módulo de Materiales Utilizados descarga del inventario conforme avanza el proceso productivo, registra mermas y desperdicios, y aplica el método PEPS. El módulo de Salidas documenta retornos, destrucciones, donaciones, cambios de régimen y transferencias entre empresas IMMEX. El módulo de Activo Fijo controla maquinaria y equipo importado temporalmente, con número de serie, modelo y pedimento de importación. Y el módulo de Reportes genera tres documentos obligatorios: Reporte de Entrada de Mercancías de Importación Temporal, Reporte de Salida de Mercancías de Importación Temporal, y Reporte de Saldos por fracción arancelaria.'),
  makeBlock('b07', 'El sistema puede ser un ERP global, un software de comercio exterior local, o una aplicación desarrollada internamente. Lo que determina el cumplimiento no es la plataforma sino si los módulos capturan los datos correctos, si el método PEPS se aplica consistentemente, y si los tres reportes obligatorios pueden generarse con los datos que el sistema contiene.'),

  makeH2('h02', 'Anexo 30: el hermano menor que solo aplica si tienes Certificación IVA'),
  makeBlock('b08', 'El Anexo 30 y el Anexo 24 coexisten dentro de las RGCE pero no son equivalentes ni tienen el mismo universo de obligados. Confundirlos genera tanto cumplimiento innecesario como, más peligrosamente, incumplimiento de obligaciones reales.'),
  makeBlock('b09', 'El Anexo 24 es obligatorio para toda empresa con programa IMMEX activo, independientemente de si tiene o no Certificación IVA e IEPS. Es un sistema de control de inventarios en tiempo continuo. El Anexo 30 solo aplica a empresas IMMEX que además cuentan con Certificación IVA e IEPS del SAT. Es un reporte mensual que comprueba el retorno del crédito fiscal y documenta los saldos pendientes.'),
  makeBlock('b10', 'La Certificación IVA e IEPS permite importar temporalmente sin pagar el 16% de IVA en el momento de la importación —el SAT otorga un crédito fiscal del 100% del IVA causado. Si una empresa con esta certificación incumple el Anexo 30, pierde ese beneficio: tendrá que pagar el IVA en cada importación temporal y recuperarlo después vía acreditamiento, con el impacto correspondiente en flujo de caja. Para una empresa con volumen de importaciones significativo, ese costo financiero puede ser material.'),
  makeBlock('b11', 'La periodicidad también difiere. El Anexo 24 es un sistema que debe estar actualizado de forma continua —y desde octubre de 2024, en tiempo prácticamente real, con un plazo máximo de 48 horas para registrar la información de cada pedimento. El Anexo 30 es un reporte mensual. Son dos obligaciones con naturaleza diferente y no pueden gestionarse con el mismo equipo ni el mismo proceso.'),

  makeH2('h03', 'El Apartado C: lo que cambió en 2024 y lo que tenías que haber hecho ya'),
  makeBlock('b12', 'El 14 de octubre de 2024, el DOF publicó la Segunda Resolución de Modificaciones a las RGCE 2024. El cambio más significativo para las operaciones IMMEX fue la incorporación del Apartado C al Anexo 24: la obligación de dar al SAT —específicamente a la Administración General de Auditoría de Comercio Exterior, AGACE— acceso remoto en línea al sistema de control de inventarios, en todo momento y sin previo aviso.'),
  makeBlock('b13', 'El mecanismo concreto: presentar un escrito ante la Oficialía de Partes de la AGACE con usuario, contraseña —o mecanismo informático equivalente—, manuales del sistema y datos de contacto del soporte técnico. El plazo original para cumplir esta obligación fue el 15 de noviembre de 2024. El 6 de enero de 2025, el DOF publicó los Anexos de las RGCE 2025, que introdujeron ajustes de flexibilización: se eliminó el concepto "sistema corporativo" —ya no se exige que el Anexo 24 esté ligado al ERP corporativo principal; basta que el sistema de inventarios cumpla por sí mismo los requisitos del Apartado A. También se reordenó el texto del Apartado C para mayor claridad.'),
  makeBlock('b14', 'Lo que no cambió con la flexibilización de enero: la obligación de acceso remoto en tiempo real existe, es vigente, y cada vez que cambie el usuario, la contraseña o el mecanismo de acceso, la empresa debe presentar un nuevo escrito ante la AGACE. El sistema debe recibir electrónicamente, en no más de 48 horas, la información del Apartado A correspondiente a cada pedimento.'),
  makeBlock('b15', 'La implicación operativa es directa: una empresa que actualizaba su sistema de inventarios de forma semanal o quincenal tiene que revisar ese proceso. El Apartado C transforma el Anexo 24 de una obligación de cumplimiento periódico a una obligación de cumplimiento continuo. La AGACE puede auditar el sistema en cualquier momento sin que la empresa lo sepa de antemano.'),

  makeH2('h04', 'Cómo funciona una auditoría de la AGACE'),
  makeBlock('b16', 'Las auditorías de la AGACE sobre sistemas de control de inventarios IMMEX operan en dos modalidades con procesos y consecuencias distintas.'),
  makeBlock('b17', 'La auditoría electrónica —también llamada de gabinete— consiste en cruzar el sistema Anexo 24 de la empresa contra las bases de datos del SAT: pedimentos liquidados, declaraciones presentadas, CFDI emitidos y recibidos. Si el cruce detecta inconsistencias —por ejemplo, un pedimento que aparece en las bases del SAT pero no está registrado en el sistema de la empresa, o fracciones arancelarias que no coinciden— la AGACE emite una solicitud de documentación electrónica. La empresa tiene un plazo definido para responder con la información. Si la respuesta es insuficiente o la inconsistencia no se puede justificar, el expediente avanza.'),
  makeBlock('b18', 'La visita domiciliaria implica que auditores de la AGACE se presentan físicamente en las instalaciones. Se utiliza para casos considerados graves o cuando se requiere validar el inventario físico contra los saldos del sistema. Es más frecuente en sectores que el SAT considera sensibles: textiles, siderúrgicos, llantas y azúcar.'),
  makeBlock('b19', 'Los documentos que solicita la AGACE en ambas modalidades son consistentes: acceso al sistema Anexo 24 o reportes generados por él, pedimentos de importación temporal, facturas, inventario físico de mercancías y de activo fijo, cartas de materiales (BOM) actualizadas, documentación de destrucciones, donaciones y transferencias, y los reportes del RAOCE presentados ante la SE.'),
  makeBlock('b20', 'Las irregularidades que detecta una auditoría se clasifican en subsanables y causales de cancelación directa. Son subsanables los errores de captura, el retorno extemporáneo espontáneo —que genera multas de $2,670 a $4,030 por cada 15 días desde el vencimiento—, y las diferencias de inventario que se pueden justificar con mermas documentadas. Son causales de cancelación directa: no haber presentado el RAOCE, domicilio fiscal inactivo, firma electrónica vencida, opinión de cumplimiento negativa ante el SAT, y mercancías con plazo de permanencia ya vencido al momento de la cancelación.'),

  makeH2('h05', 'Los errores que acumulan saldos fantasma'),
  makeBlock('b21', 'El "virtual stock" —inventario fantasma— es el problema más frecuente y el más difícil de defender en una auditoría física. Ocurre cuando el sistema muestra más inventario del que físicamente existe porque los descargos de materiales están atrasados. La causa más común: el sistema solo actualiza cuando se genera el pedimento de retorno, en lugar de hacerlo conforme avanza la producción. En el momento en que un auditor de la AGACE hace el conteo físico, la diferencia entre el sistema y el estante no tiene justificación documental.'),
  makeBlock('b22', 'Los errores de catálogo son la segunda fuente de problemas. El más frecuente, según documentan múltiples firmas especializadas en comercio exterior: el BOM (carta de materiales) desactualizado. Si la ingeniería modificó componentes de un producto y el catálogo de materiales del Anexo 24 no refleja ese cambio, los descargos se calculan sobre una fórmula incorrecta. El sistema registra que se consumieron materiales que en realidad ya no se usan, y no registra el consumo de los que sí se usan.'),
  makeBlock('b23', 'El segundo error de catálogo más común es usar la fracción arancelaria que aparece en la factura del proveedor en lugar de la que corresponde según la TIGIE. Las fracciones pueden coincidir o no. Cuando no coinciden, los reportes de saldos por fracción arancelaria —uno de los tres reportes obligatorios del Anexo 24— muestran saldos en fracciones que el SAT no reconoce como importadas bajo ese pedimento.'),
  makeBlock('b24', 'Las unidades de medida generan otro tipo de inconsistencia. El sistema puede estar capturando en unidades comerciales (piezas, cajas, rollos) mientras que la TIGIE requiere unidades específicas con factores de conversión (kilogramos, metros lineales, litros). Si no se aplica la conversión correcta en cada descargo, los saldos se distorsionan progresivamente.'),
  makeBlock('b25', 'El scrap y los desperdicios son una fuente silenciosa de saldos vencidos. El Anexo 24 exige descargar desperdicios al momento de su donación, destrucción, transferencia, cambio de régimen o retorno, usando método PEPS. Hay cuatro salidas legales para el scrap: destrucción fiscal con aviso ante la AGACE 30 días hábiles antes vía VUCEM; donación a institución autorizada con pedimentos correspondientes; cambio de régimen pagando los impuestos para nacionalizar; o transferencia a otra empresa IMMEX con programa activo —por ejemplo, una recicladora. Una empresa que acumula scrap sin darle ninguna de estas cuatro salidas formales acumula saldos positivos en fracciones arancelarias de materiales que ya son basura. Si el SAT determina que esas mercancías superaron su plazo de permanencia, puede exigir el pago de IVA y aranceles sobre su valor en aduana, más multas e intereses.'),
  makeBlock('b26', 'El activo fijo genera un cuarto tipo de inconsistencia. El plazo de permanencia para maquinaria y equipo importado temporalmente es de 36 meses —no 18, que es el plazo para insumos. Equipos sin número de serie registrado en el sistema, maquinaria dada de baja en el ERP pero activa en el Anexo 24, o equipos que superaron los 36 meses sin regularizarse son irregularidades que una auditoría física identifica de inmediato.'),

  makeH2('h06', 'El RAOCE: un calendario que no admite olvidos'),
  makeBlock('b27', 'El Reporte Anual de Operaciones de Comercio Exterior es el único reporte anual obligatorio del programa IMMEX y el que con mayor frecuencia causa cancelaciones definitivas. Los datos que contiene son operativos, no complicados: total de ventas en miles de pesos, total de exportaciones realizadas, total de importaciones temporales bajo IMMEX y PROSEC, número de empleados, fracciones arancelarias de los bienes producidos. La Secretaría de Economía calcula automáticamente el porcentaje de exportación sobre ventas. La presentación se hace vía VUCEM.'),
  makeBlock('b28', 'El calendario es fijo y se repite cada año. El período de presentación abre el 1 de abril y cierra el último día hábil de mayo. Las empresas que no presentan reciben una suspensión automática el 1 de junio. Tienen hasta el 30 de agosto para subsanar —presentar el reporte fuera de plazo. Las que no subsanan reciben cancelación definitiva el 1 de septiembre.'),
  makeBlock('b29', 'Hay dos reglas que producen errores irreversibles. La primera: una vez firmado el RAOCE con firma electrónica, no puede modificarse. Si la empresa detecta un error después de la firma, tiene cinco días hábiles para notificarlo a la SE mediante escrito. La SE determina si acepta la corrección. La segunda: si la empresa no presentó el RAOCE antes de la cancelación definitiva, la prórroga de 180 días del SAT —disponible para otras causas de cancelación— no aplica. La cancelación es definitiva y la prohibición de cinco años para reregistrarse entra en vigor de inmediato.'),
  makeBlock('b30', 'Las opciones una vez cancelado el programa son limitadas. La nueva solicitud de IMMEX es posible si la SE lo autoriza dentro de los 60 días posteriores a la cancelación —pero la prohibición de cinco años aplica cuando la cancelación fue por incumplimiento del artículo 11, que incluye el RAOCE y el domicilio fiscal. Si se considera que la cancelación fue improcedente, existe el recurso de revisión ante la SE o el juicio de nulidad ante el Tribunal Federal de Justicia Administrativa. Ninguna de estas vías es rápida ni barata.'),
  makeBlock('b31', 'La gestión preventiva del RAOCE no es técnicamente compleja: requiere que el área de comercio exterior tenga acceso oportuno a los datos de ventas, exportaciones e importaciones del año anterior, y que la firma electrónica de quien presenta el reporte esté vigente antes del 1 de abril. Empresas que han perdido su programa por este motivo reportan invariablemente la misma causa: el reporte quedó en el escritorio de alguien que salió de la empresa, cambió de rol, o simplemente asumió que otra área lo estaba gestionando.'),
  makeBlock('b32', 'Para empresas que están evaluando establecerse en Mexicali o que ya operan en la región y necesitan apoyo para estructurar su operación de cumplimiento IMMEX, Grupo Nelson trabaja con especialistas en comercio exterior con trayectoria verificada en la ciudad y puede facilitar esa conexión desde la etapa de prospección.'),

  makeBlock('b_fuentes', 'Fuentes: Diario Oficial de la Federación — Segunda Resolución de Modificaciones a las RGCE 2024 (14 de octubre de 2024) · Diario Oficial de la Federación — Anexos RGCE 2025, publicación del 6 de enero de 2025 (Apartado C, Anexo 24) · Secretaría de Economía de México — Cancelaciones definitivas de programas IMMEX 2023, 2024 y 2025 (DOF 22 de septiembre de 2025) · SAT — Reglas Generales de Comercio Exterior 2025, Anexo 24 Apartado A (estructura de módulos y catálogos obligatorios) · SAT — Reglas Generales de Comercio Exterior 2025, Anexo 30 (obligaciones empresas con Certificación IVA e IEPS) · Ventanilla Única de Comercio Exterior Mexicana (VUCEM) — Guía de presentación del RAOCE · SAT — AGACE, procedimientos de auditoría electrónica y visita domiciliaria en materia de comercio exterior · Decreto IMMEX — Artículo 11, causales de cancelación y prohibición de reregistro'),
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

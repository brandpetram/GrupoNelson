/**
 * Datos de tablas para los 30 posts del blog de Grupo Nelson.
 * 2 tablas por post, distribuidas a lo largo del contenido.
 *
 * Generado: 2026-04-10
 */

export const TABLE_DATA = {
  "mexicali-vs-tijuana-cual-es-la-mejor-ciudad-para-instalar-tu-operacion-en-mexico": [
    {
      title: "Comparativa de indicadores industriales: Mexicali vs Tijuana (2025)",
      source: "CBRE Industrial Report Baja California Q4 2025; INEGI Censos Económicos 2024",
      columns: ["Indicador", "Mexicali", "Tijuana"],
      rows: [
        { cells: ["Inventario industrial (millones ft²)", "52.3", "93.7"] },
        { cells: ["Tasa de vacancia", "4.2%", "1.8%"] },
        { cells: ["Renta promedio USD/ft²/mes", "$0.54", "$0.64"] },
        { cells: ["Cruces fronterizos comerciales", "2", "3"] },
        { cells: ["Empleados manufactura (miles)", "148", "285"] },
      ]
    },
    {
      title: "Costo total de operación mensual estimado: nave de 100,000 ft²",
      source: "Estimación basada en datos de CBRE, CFE e IMSS 2025",
      columns: ["Concepto", "Mexicali", "Tijuana", "Diferencia"],
      rows: [
        { cells: ["Renta mensual", "$54,000", "$64,000", "-$10,000"] },
        { cells: ["Electricidad (500 kW promedio)", "$23,400", "$28,080", "-$4,680"] },
        { cells: ["Nómina (200 operadores)", "$153,600", "$172,800", "-$19,200"] },
        { cells: ["Total mensual estimado", "$231,000", "$264,880", "-$33,880"] },
      ]
    }
  ],

  "por-que-las-empresas-fortune-500-eligen-mexicali-para-su-expansion-en-nearshoring": [
    {
      title: "Fortune 500 con operaciones en Mexicali (selección)",
      source: "INDEX Mexicali 2025; reportes corporativos públicos",
      columns: ["Empresa", "Sector", "Tipo de operación", "Años en Mexicali"],
      rows: [
        { cells: ["Gulfstream (General Dynamics)", "Aeroespacial", "Manufactura de componentes", "15+"] },
        { cells: ["Honeywell", "Aeroespacial/Tecnología", "Manufactura y R&D", "40+"] },
        { cells: ["Kimberly-Clark", "Consumo", "Planta de producción", "25+"] },
        { cells: ["Bosch", "Automotriz/Tecnología", "Manufactura", "20+"] },
        { cells: ["Skyworks Solutions", "Semiconductores", "Manufactura", "30+"] },
      ]
    },
    {
      title: "Ventajas competitivas de Mexicali vs otras ciudades fronterizas para Fortune 500",
      source: "Deloitte Nearshoring Survey 2025; JLL Industrial Outlook México 2025",
      columns: ["Factor", "Mexicali", "Juárez", "Monterrey"],
      rows: [
        { cells: ["Distancia al puerto de Long Beach", "320 km", "1,250 km", "1,100 km"] },
        { cells: ["Tiempo de cruce fronterizo promedio", "45 min", "90 min", "N/A"] },
        { cells: ["Costo electricidad USD/kWh", "$0.065", "$0.072", "$0.082"] },
        { cells: ["Clúster aeroespacial (años)", "50+", "15+", "10+"] },
        { cells: ["Zona Libre Frontera Norte", "Sí", "Sí", "No"] },
      ]
    }
  ],

  "la-region-calibaja-el-corredor-industrial-de-250-mil-millones-que-redefine-la-manufactura-global": [
    {
      title: "Indicadores económicos de la región CaliBaja",
      source: "CaliBaja Mega-Region Initiative 2025; U.S. Census Bureau; INEGI",
      columns: ["Indicador", "Valor"],
      rows: [
        { cells: ["PIB combinado", "$250+ mil millones USD"] },
        { cells: ["Comercio bilateral diario", "$2.3 mil millones USD"] },
        { cells: ["Población combinada", "7.5 millones"] },
        { cells: ["Empresas maquiladoras en BC", "1,100+"] },
        { cells: ["Cruces fronterizos anuales (personas)", "50+ millones"] },
        { cells: ["Empleos directos en manufactura (BC)", "350,000+"] },
      ]
    },
    {
      title: "Clústeres industriales principales de CaliBaja",
      source: "Secretaría de Economía de BC 2025; INDEX Mexicali/Tijuana",
      columns: ["Clúster", "Ciudad ancla", "Empleos directos", "Empresas clave"],
      rows: [
        { cells: ["Aeroespacial", "Mexicali/Tijuana", "38,000+", "Gulfstream, Honeywell, Collins"] },
        { cells: ["Dispositivos médicos", "Tijuana", "70,000+", "BD, Edwards, DJO"] },
        { cells: ["Electrónica", "Tijuana/Mexicali", "85,000+", "Samsung, Skyworks, Plantronics"] },
        { cells: ["Automotriz", "Mexicali/Ensenada", "25,000+", "Toyota, Bosch, Kenworth"] },
      ]
    }
  ],

  "total-landed-cost-por-que-mexico-gana-a-china-en-el-analisis-real-de-costos": [
    {
      title: "Total Landed Cost comparativo: producto de $100 desde China vs México a EE.UU.",
      source: "Kearney Reshoring Index 2025; análisis con datos de freight indexes y Section 301",
      columns: ["Componente", "China → EE.UU.", "México → EE.UU.", "Diferencia"],
      rows: [
        { cells: ["Costo de producto (FOB)", "$100.00", "$108.00", "+$8.00"] },
        { cells: ["Aranceles (Section 301 / USMCA)", "$25.00", "$0.00", "-$25.00"] },
        { cells: ["Flete marítimo + inland", "$8.50", "$3.20", "-$5.30"] },
        { cells: ["Seguro de carga", "$1.20", "$0.45", "-$0.75"] },
        { cells: ["Capital inmovilizado (45 vs 3 días)", "$1.85", "$0.12", "-$1.73"] },
        { cells: ["Total Landed Cost", "$136.55", "$111.77", "-$24.78"] },
      ]
    },
    {
      title: "Tiempo total de entrega: China vs México a destino en EE.UU.",
      source: "Flexport Transit Time Index 2025; CBP Processing Times",
      columns: ["Etapa", "China", "México (frontera)"],
      rows: [
        { cells: ["Producción a puerto/frontera", "3-5 días", "1 día"] },
        { cells: ["Tránsito internacional", "25-35 días", "1-2 días"] },
        { cells: ["Aduanas y despacho", "3-7 días", "4-8 horas"] },
        { cells: ["Inland a destino final", "3-5 días", "1-3 días"] },
        { cells: ["Total promedio", "34-52 días", "3-6 días"] },
      ]
    }
  ],

  "la-estrategia-china1-y-por-que-mexicali-es-el-destino-preferido": [
    {
      title: "Destinos China+1 comparados: indicadores clave para manufactura",
      source: "McKinsey Global Institute 2025; World Bank Ease of Doing Business; UNCTAD",
      columns: ["Factor", "México", "Vietnam", "India", "Tailandia"],
      rows: [
        { cells: ["Distancia a EE.UU. (km)", "0 (frontera)", "13,500", "14,000", "14,200"] },
        { cells: ["TLC con EE.UU.", "USMCA", "No", "No", "No"] },
        { cells: ["Costo manufactura/hora USD", "$4.15", "$3.20", "$2.50", "$3.80"] },
        { cells: ["Infraestructura (1-10)", "7.2", "5.8", "5.1", "6.5"] },
        { cells: ["Protección IP (1-10)", "6.8", "4.5", "5.2", "5.0"] },
      ]
    },
    {
      title: "Inversión asiática en Mexicali y Baja California (2020-2025)",
      source: "Secretaría de Economía BC 2025; INDEX Mexicali; medios especializados",
      columns: ["País de origen", "Empresas nuevas/expansiones", "Sectores principales"],
      rows: [
        { cells: ["China", "25+", "Electrónica, autopartes, solar"] },
        { cells: ["Japón", "15+", "Automotriz, electrónica"] },
        { cells: ["Corea del Sur", "10+", "Electrónica, baterías"] },
        { cells: ["Taiwán", "8+", "Semiconductores, PCB"] },
      ]
    }
  ],

  "guia-completa-del-programa-immex-2025-lo-que-todo-director-de-operaciones-debe-saber": [
    {
      title: "Beneficios fiscales del stack IMMEX completo",
      source: "SAT; Ley Aduanera; Decreto IMMEX actualizado 2024",
      columns: ["Programa", "Beneficio principal", "Ahorro estimado"],
      rows: [
        { cells: ["IMMEX base", "Importación temporal sin aranceles", "0% arancel en insumos"] },
        { cells: ["Certificación IVA (RECE)", "No pago de IVA en importaciones", "16% sobre valor importado"] },
        { cells: ["PROSEC", "Arancel preferencial en bienes de capital", "0-5% vs 15-25% MFN"] },
        { cells: ["Zona Libre Frontera Norte", "IVA 8% + ISR reducido", "8% vs 16% IVA"] },
        { cells: ["Stack completo", "Combinación de todos", "25-40% ahorro total"] },
      ]
    },
    {
      title: "Modalidades IMMEX y sus requisitos",
      source: "Decreto IMMEX; Secretaría de Economía 2025",
      columns: ["Modalidad", "Descripción", "Requisito ventas anuales"],
      rows: [
        { cells: ["Controladora", "Empresa con 2+ plantas IMMEX", "$500M+ MXN"] },
        { cells: ["Industrial", "Manufactura o transformación", "$500K+ USD exportación"] },
        { cells: ["Servicios", "Servicios a empresas IMMEX", "Contratos vigentes"] },
        { cells: ["Albergue (Shelter)", "Empresas extranjeras sin entidad legal", "Proveedor autorizado"] },
        { cells: ["Terciarización", "Subcontratación autorizada", "Programa vigente"] },
      ]
    }
  ],

  "immex-anexo-24-y-30-guia-de-cumplimiento-para-no-perder-tu-certificacion": [
    {
      title: "Diferencias clave entre Anexo 24 y Anexo 30",
      source: "Reglas Generales de Comercio Exterior 2025; SAT",
      columns: ["Aspecto", "Anexo 24", "Anexo 30"],
      rows: [
        { cells: ["Aplica a", "Todas las empresas IMMEX", "Solo con Certificación IVA"] },
        { cells: ["Qué controla", "Inventarios de importación temporal", "Descargos de IVA/IEPS"] },
        { cells: ["Software requerido", "Sí (certificado)", "Sí (integrado con Anexo 24)"] },
        { cells: ["Frecuencia de reporte", "Mensual", "Mensual"] },
        { cells: ["Sanción por incumplimiento", "Cancelación IMMEX", "Pérdida de Certificación IVA"] },
      ]
    },
    {
      title: "Errores más comunes en auditorías AGACE y su consecuencia",
      source: "Experiencia de mercado; Baker McKenzie Comercio Exterior 2025",
      columns: ["Error", "Frecuencia", "Consecuencia"],
      rows: [
        { cells: ["Saldos fantasma (inventario no descargado)", "Muy alta", "Multas + presunción de no retorno"] },
        { cells: ["Clasificación arancelaria incorrecta", "Alta", "Recalificación + pago diferencial"] },
        { cells: ["RAOCE fuera de plazo", "Media", "Pérdida de Certificación IVA"] },
        { cells: ["Pedimentos sin vincular al sistema", "Alta", "Discrepancia de inventarios"] },
        { cells: ["Mermas no documentadas", "Media", "Presunción de desvío al mercado nacional"] },
      ]
    }
  ],

  "que-significa-realmente-un-contrato-triple-net-en-mexico-y-como-negociarlo": [
    {
      title: "Estructura de costos en un contrato Triple Net industrial en México (2025)",
      source: "CBRE México Industrial Market Report 2025; contratos tipo del mercado",
      columns: ["Concepto", "Rango típico", "Quién paga"],
      rows: [
        { cells: ["Renta base", "$0.45-$0.70 USD/ft²/mes", "Inquilino"] },
        { cells: ["Mantenimiento de áreas comunes (CAM)", "$0.03-$0.08 USD/ft²/mes", "Inquilino"] },
        { cells: ["Impuesto predial", "~0.1% valor catastral/año", "Inquilino"] },
        { cells: ["Seguro del inmueble", "$0.01-$0.02 USD/ft²/mes", "Inquilino"] },
        { cells: ["Mantenimiento estructural", "Variable", "Propietario (excepciones existen)"] },
      ]
    },
    {
      title: "Cláusulas negociables en un contrato NNN: qué pedir y cuándo",
      source: "Análisis de mercado; prácticas de negociación en BC 2025",
      columns: ["Cláusula", "Posición estándar", "Margen de negociación"],
      rows: [
        { cells: ["Periodo de gracia", "0-1 mes", "1-3 meses en naves grandes"] },
        { cells: ["TI Allowance", "No incluido", "$2-5 USD/ft² en contratos 5+ años"] },
        { cells: ["Escalamiento anual", "3-4% fijo", "INPC o cap del 3%"] },
        { cells: ["Opción de renovación", "No garantizada", "Derecho de primera oferta"] },
        { cells: ["Subarrendamiento", "Prohibido", "Permitido con autorización previa"] },
      ]
    }
  ],

  "los-costos-ocultos-del-desarrollo-industrial-en-mexico-que-tu-consultor-no-te-menciona": [
    {
      title: "Costos ocultos típicos en un proyecto industrial de 50,000 ft² en México",
      source: "Estimaciones basadas en proyectos reales en BC 2023-2025",
      columns: ["Costo oculto", "Monto estimado USD", "Cuándo aparece"],
      rows: [
        { cells: ["Adecuaciones eléctricas (transformador propio)", "$80,000-$150,000", "Mes 2-3"] },
        { cells: ["Permisos y licencias municipales", "$15,000-$40,000", "Mes 1-4"] },
        { cells: ["Importación de equipo (agente aduanal)", "$8,000-$25,000", "Mes 3-5"] },
        { cells: ["Reclutamiento y capacitación inicial", "$50,000-$120,000", "Mes 2-6"] },
        { cells: ["Seguridad privada (primer año)", "$36,000-$72,000", "Mes 1+"] },
        { cells: ["Ajustes al piso/estructura post-entrega", "$20,000-$60,000", "Mes 1-2"] },
      ]
    },
    {
      title: "Brecha entre costo laboral publicado y costo laboral real en manufactura (BC)",
      source: "IMSS; Ley Federal del Trabajo; prácticas de mercado 2025",
      columns: ["Componente", "Publicado", "Real (con prestaciones)"],
      rows: [
        { cells: ["Salario base/hora", "$3.80 USD", "$3.80 USD"] },
        { cells: ["IMSS patronal", "No mencionado", "+28-32%"] },
        { cells: ["Infonavit + SAR", "No mencionado", "+7%"] },
        { cells: ["Aguinaldo + vacaciones + PTU", "No mencionado", "+15-20%"] },
        { cells: ["Transporte y comedor", "No mencionado", "+$0.50-0.80/hora"] },
        { cells: ["Costo real/hora", "$3.80", "$5.44-$6.20 USD"] },
      ]
    }
  ],

  "como-evaluar-un-parque-industrial-en-mexico-la-checklist-que-usan-los-expertos": [
    {
      title: "Checklist de evaluación de parque industrial: especificaciones críticas",
      source: "AMPIP estándares 2025; mejores prácticas del mercado",
      columns: ["Categoría", "Especificación", "Estándar Clase A"],
      rows: [
        { cells: ["Estructura", "Clear height", "32-40 ft (9.7-12.2 m)"] },
        { cells: ["Estructura", "Capacidad de piso", "2.5-3.0 ton/m²"] },
        { cells: ["Electricidad", "Capacidad", "Subestación dedicada 1+ MVA"] },
        { cells: ["Piso", "Planaridad", "FF50/FL30 mínimo"] },
        { cells: ["Seguridad contra incendio", "Sistema", "ESFR K25.2 o superior"] },
        { cells: ["Docas", "Ratio", "1 por cada 5,000-10,000 ft²"] },
      ]
    },
    {
      title: "Red flags en due diligence de parques industriales",
      source: "Experiencia de mercado; AMPIP; asesores legales especializados",
      columns: ["Red flag", "Riesgo", "Qué verificar"],
      rows: [
        { cells: ["Sin uso de suelo industrial registrado", "Clausura municipal", "Licencia de uso de suelo vigente"] },
        { cells: ["Subestación compartida sin contrato", "Cortes y disputas de capacidad", "Contrato CFE individual"] },
        { cells: ["Sin manifesto de impacto ambiental", "Multas SEMARNAT", "MIA vigente y resolutivo"] },
        { cells: ["Administración ausente", "Deterioro de áreas comunes", "Contrato de administración activo"] },
        { cells: ["Sin protección contra inundación", "Daño a mercancía e infraestructura", "Estudio hidrológico"] },
      ]
    }
  ],

  "tendencias-de-renta-industrial-en-mexicali-y-baja-california-panorama-20252026": [
    {
      title: "Evolución de renta y vacancia industrial en Mexicali (2020-2025)",
      source: "CBRE Baja California Industrial Reports 2020-2025",
      columns: ["Año", "Renta promedio USD/ft²/mes", "Tasa de vacancia", "Absorción neta (ft²)"],
      rows: [
        { cells: ["2020", "$0.42", "6.8%", "1,200,000"] },
        { cells: ["2021", "$0.44", "5.5%", "1,800,000"] },
        { cells: ["2022", "$0.48", "3.8%", "2,400,000"] },
        { cells: ["2023", "$0.52", "2.9%", "2,100,000"] },
        { cells: ["2024", "$0.55", "3.5%", "1,500,000"] },
        { cells: ["2025 (Q2)", "$0.54", "4.2%", "800,000"] },
      ]
    },
    {
      title: "Comparativa de rentas industriales en ciudades fronterizas (Q2 2025)",
      source: "JLL México; CBRE; Cushman & Wakefield Industrial Reports Q2 2025",
      columns: ["Ciudad", "Renta USD/ft²/mes", "Vacancia", "Inventario (M ft²)"],
      rows: [
        { cells: ["Tijuana", "$0.64", "1.8%", "93.7"] },
        { cells: ["Juárez", "$0.55", "3.8%", "82.5"] },
        { cells: ["Mexicali", "$0.54", "4.2%", "52.3"] },
        { cells: ["Reynosa", "$0.48", "5.1%", "45.8"] },
        { cells: ["Nogales", "$0.46", "6.2%", "12.4"] },
      ]
    }
  ],

  "los-sectores-que-mas-demandan-naves-industriales-en-baja-california-automotriz-aeroespacial-y-medtech": [
    {
      title: "Demanda industrial por sector en Baja California (2025)",
      source: "Secretaría de Economía BC; INDEX Mexicali/Tijuana; CBRE",
      columns: ["Sector", "Empleos directos", "Absorción 2024 (ft²)", "Ciudad principal"],
      rows: [
        { cells: ["Electrónica", "85,000+", "1,200,000", "Tijuana"] },
        { cells: ["Dispositivos médicos", "70,000+", "950,000", "Tijuana"] },
        { cells: ["Aeroespacial", "38,000+", "600,000", "Mexicali"] },
        { cells: ["Automotriz", "25,000+", "450,000", "Mexicali/Ensenada"] },
        { cells: ["Alimentos y bebidas", "18,000+", "300,000", "Mexicali"] },
      ]
    },
    {
      title: "Requerimientos técnicos por sector: nave industrial en BC",
      source: "Especificaciones de mercado; AMPIP; experiencia de desarrolladores",
      columns: ["Especificación", "Electrónica", "Medtech", "Aeroespacial"],
      rows: [
        { cells: ["Clear height mínimo", "28 ft", "24 ft", "32 ft"] },
        { cells: ["Piso (FF/FL)", "FF50/FL30", "FF80/FL50", "FF100/FL50"] },
        { cells: ["Capacidad eléctrica", "1.5+ MVA", "1+ MVA", "2+ MVA"] },
        { cells: ["Cuarto limpio", "Clase 10,000", "Clase 100-1,000", "Clase 1,000-10,000"] },
        { cells: ["Certificaciones", "ISO 9001", "ISO 13485 + FDA", "AS9100 + NADCAP"] },
      ]
    }
  ],

  "que-hace-realmente-clase-a-a-una-nave-industrial-la-guia-tecnica-definitiva": [
    {
      title: "Especificaciones Clase A vs Clase B: comparativa real",
      source: "AMPIP; CBRE Classification Guide 2025; estándares de mercado en BC",
      columns: ["Especificación", "Clase A", "Clase B", "Impacto operativo"],
      rows: [
        { cells: ["Clear height", "32-40 ft", "24-30 ft", "30-50% más capacidad cúbica"] },
        { cells: ["Piso (FF/FL)", "FF50+/FL30+", "FF25/FL15", "Habilita automatización"] },
        { cells: ["Sistema contra incendio", "ESFR K25.2", "Convencional wet", "Permite rack alto sin in-rack"] },
        { cells: ["Capacidad de piso", "2.5+ ton/m²", "1.5-2.0 ton/m²", "Maquinaria pesada"] },
        { cells: ["Aislamiento térmico", "R-19 mínimo", "R-11 o sin", "Ahorro energético 15-25%"] },
        { cells: ["Docas", "1:5,000 ft²", "1:8,000-10,000 ft²", "Throughput logístico"] },
      ]
    },
    {
      title: "Lo que se comercializa como Clase A pero no lo es",
      source: "Análisis de mercado en BC; experiencia de brokers industriales",
      columns: ["Claim del brochure", "Realidad frecuente", "Cómo verificar"],
      rows: [
        { cells: ["\"Clear height 40 ft\"", "Medido al pico, no al bajo de estructura", "Medir al bajo de armadura/joist"] },
        { cells: ["\"Sistema ESFR\"", "Instalado pero sin certificar por FM Global", "Pedir certificación FM/UL"] },
        { cells: ["\"Piso de alta resistencia\"", "Sin especificación FF/FL medida", "Solicitar reporte F-number"] },
        { cells: ["\"Subestación eléctrica\"", "Compartida entre varias naves", "Verificar contrato CFE individual"] },
        { cells: ["\"Construcción 2024\"", "Shell terminado, TI pendiente", "Confirmar fecha de CO/habitabilidad"] },
      ]
    }
  ],

  "clear-height-por-que-36-pies-puede-transformar-tu-operacion-de-almacenamiento": [
    {
      title: "Capacidad de almacenamiento por clear height (nave de 100,000 ft²)",
      source: "Cálculos basados en rack selectivo estándar con pasillos de 12 ft",
      columns: ["Clear height", "Niveles de rack", "Posiciones de pallet", "Capacidad vs 28 ft"],
      rows: [
        { cells: ["24 ft", "3", "4,500", "-25%"] },
        { cells: ["28 ft", "4", "6,000", "Base"] },
        { cells: ["32 ft", "5", "7,500", "+25%"] },
        { cells: ["36 ft", "5-6", "9,000", "+50%"] },
        { cells: ["40 ft", "6-7", "10,500", "+75%"] },
      ]
    },
    {
      title: "Evolución del clear height estándar en naves industriales",
      source: "CBRE Historical Industrial Standards; SIOR",
      columns: ["Década", "Estándar típico", "Driver principal"],
      rows: [
        { cells: ["1970s", "18-20 ft", "Almacenamiento manual"] },
        { cells: ["1980s", "22-24 ft", "Forklifts de mayor alcance"] },
        { cells: ["1990s", "24-28 ft", "Rack selectivo 4 niveles"] },
        { cells: ["2000s", "28-32 ft", "E-commerce y volumen"] },
        { cells: ["2010s", "32-36 ft", "Automatización parcial"] },
        { cells: ["2020s", "36-40 ft", "ASRS y automatización total"] },
      ]
    }
  ],

  "tilt-up-vs-estructura-metalica-cual-es-la-mejor-opcion-para-tu-nave-industrial": [
    {
      title: "Comparativa técnica: Tilt-Up vs Estructura Metálica",
      source: "Datos de constructoras en BC 2025; Portland Cement Association; AISC",
      columns: ["Factor", "Tilt-Up", "Estructura metálica"],
      rows: [
        { cells: ["Costo USD/ft²", "$45-55", "$35-45"] },
        { cells: ["Tiempo de construcción", "6-9 meses", "4-6 meses"] },
        { cells: ["Resistencia al fuego", "2-4 horas", "Requiere fireproofing"] },
        { cells: ["Aislamiento térmico", "Superior (masa del concreto)", "Requiere panel adicional"] },
        { cells: ["Claros máximos", "60-80 ft", "100+ ft"] },
        { cells: ["Mantenimiento a 20 años", "Bajo", "Medio (corrosión)"] },
        { cells: ["Resistencia sísmica", "Excelente (con diseño)", "Excelente (flexible)"] },
      ]
    },
    {
      title: "Cuándo elegir cada sistema constructivo",
      source: "Experiencia de desarrolladores industriales en Baja California",
      columns: ["Escenario", "Recomendación", "Razón"],
      rows: [
        { cells: ["Nave Clase A especulativa", "Tilt-Up", "Mayor valor percibido, menor mantenimiento"] },
        { cells: ["Nave temporal < 5 años", "Metálica", "Menor costo, más rápida"] },
        { cells: ["Manufactura con cuarto limpio", "Tilt-Up", "Mejor control térmico y hermeticidad"] },
        { cells: ["Nave > 200,000 ft² claros grandes", "Metálica", "Claros mayores sin columnas"] },
        { cells: ["Zona sísmica D (BC)", "Tilt-Up preferido", "Comportamiento sísmico probado en la región"] },
      ]
    }
  ],

  "esfr-vs-sprinklers-convencionales-lo-que-nadie-te-dice-sobre-fire-protection": [
    {
      title: "Comparativa técnica: ESFR vs Sprinklers Convencionales",
      source: "NFPA 13; FM Global Data Sheets; especificaciones de mercado",
      columns: ["Parámetro", "ESFR", "Convencional wet"],
      rows: [
        { cells: ["Modo de acción", "Supresión (extingue)", "Control (contiene)"] },
        { cells: ["K-factor típico", "K25.2 / K33.6", "K5.6 / K8.0"] },
        { cells: ["Presión requerida (psi)", "50-75", "15-30"] },
        { cells: ["Requiere in-rack sprinklers", "No (si cumple limitaciones)", "Sí, para rack > 12 ft"] },
        { cells: ["Costo instalación USD/ft²", "$3.50-5.00", "$2.00-3.50"] },
        { cells: ["Impacto en prima de seguro", "-15-25%", "Base"] },
      ]
    },
    {
      title: "Limitaciones del ESFR que afectan la operación",
      source: "FM Global; NFPA 13 Chapter 20; experiencia de mercado",
      columns: ["Limitación", "Detalle", "Alternativa"],
      rows: [
        { cells: ["Almacenamiento máximo", "Depende de commodity class", "In-rack + convencional"] },
        { cells: ["Flue spaces requeridos", "6\" transversal, 3\" longitudinal", "Reduce densidad de almacenamiento"] },
        { cells: ["Obstrucciones de techo", "Sin obstrucciones a < 36\" del deflector", "Rediseño de ductos/iluminación"] },
        { cells: ["Plásticos expandidos (Group A)", "No permitido sin análisis especial", "In-rack obligatorio"] },
        { cells: ["Clear height máximo", "Limitado según K-factor", "Doble fila o K33.6"] },
      ]
    }
  ],

  "pisos-industriales-ff100fl50-el-estandar-que-permite-automatizacion-total": [
    {
      title: "Escala práctica de F-numbers y su impacto operativo",
      source: "ACI 117; Face Construction Technologies; especificaciones de AGV manufacturers",
      columns: ["Clasificación", "FF", "FL", "Tolerancia aprox.", "Aplicación"],
      rows: [
        { cells: ["Convencional", "20", "15", "±6mm en 3m", "Almacén manual, montacargas"] },
        { cells: ["Plano", "35", "25", "±4mm en 3m", "Operación estándar con reach truck"] },
        { cells: ["Muy plano", "50", "30", "±3mm en 3m", "Turret trucks, rack estrecho"] },
        { cells: ["Superplano", "80", "50", "±2mm en 3m", "AGVs, wire-guided vehicles"] },
        { cells: ["Ultra plano", "100", "50", "±1.5mm en 3m", "ASRS, automatización total"] },
      ]
    },
    {
      title: "Costo del piso vs nivel de planaridad",
      source: "Estimaciones de constructoras especializadas en BC 2025",
      columns: ["Nivel", "Costo USD/ft²", "Premium vs FF20", "Método de colocación"],
      rows: [
        { cells: ["FF20/FL15", "$4.50-5.50", "Base", "Convencional con regla"] },
        { cells: ["FF35/FL25", "$5.50-7.00", "+20-25%", "Láser screed"] },
        { cells: ["FF50/FL30", "$7.00-9.00", "+55-65%", "Láser screed + acabado"] },
        { cells: ["FF100/FL50", "$12.00-16.00", "+165-190%", "Superflat con grinding"] },
      ]
    }
  ],

  "sismicidad-en-baja-california-lo-que-todo-ingeniero-industrial-debe-exigir-en-su-nave": [
    {
      title: "Sismos significativos en Baja California (últimos 30 años)",
      source: "SSN; USGS; CICESE; estudios post-sísmicos publicados",
      columns: ["Fecha", "Magnitud", "Epicentro", "Daño industrial documentado"],
      rows: [
        { cells: ["Abril 2010", "7.2 Mw", "Sierra El Mayor-Cucapah", "Daño estructural en naves, licuefacción"] },
        { cells: ["Junio 2010", "5.7 Mw", "Guadalupe Victoria", "Daño menor, réplica del principal"] },
        { cells: ["Agosto 2012", "5.3 Mw", "Brawley (cerca de frontera)", "Sin daño significativo"] },
        { cells: ["Enero 2022", "5.0 Mw", "Delta, BC", "Daño cosmético en algunas naves"] },
        { cells: ["Enero 2024", "4.7 Mw", "Valle de Mexicali", "Sin daño reportado"] },
      ]
    },
    {
      title: "Checklist de due diligence sísmico para naves industriales en BC",
      source: "NTC-Sismo 2023; CFE Manual de Diseño Sísmico; experiencia de ingenieros estructurales",
      columns: ["Verificación", "Estándar mínimo", "Documento a solicitar"],
      rows: [
        { cells: ["Zona sísmica", "D (máxima)", "Estudio de mecánica de suelos"] },
        { cells: ["Tipo de suelo", "Identificar Tipo I, II o III", "Estudio geotécnico"] },
        { cells: ["Diseño estructural", "NTC-Sismo 2023 o posterior", "Memoria de cálculo"] },
        { cells: ["Anclaje de rack", "Diseño para Zona D", "Planos de instalación certificados"] },
        { cells: ["Contenido asegurado", "Póliza con cobertura sísmica", "Copia de póliza vigente"] },
      ]
    }
  ],

  "docas-de-carga-tipos-dimensiones-y-como-impactan-la-eficiencia-logistica": [
    {
      title: "Tipos de docas de carga y sus especificaciones",
      source: "ANSI MH28.1; Rite-Hite Engineering Guide; estándares de mercado",
      columns: ["Tipo", "Ancho", "Altura", "Uso principal"],
      rows: [
        { cells: ["Estándar con nivelador", "8.5 ft", "9-10 ft", "Carga general, pallets"] },
        { cells: ["Amplia para full-trailer", "9-10 ft", "9-10 ft", "Transporte de larga distancia"] },
        { cells: ["Drive-in (a nivel de piso)", "12-14 ft", "14 ft", "Carga pesada, maquinaria"] },
        { cells: ["Refrigerada con sello inflable", "8.5 ft", "9 ft", "Cold storage, perecederos"] },
      ]
    },
    {
      title: "Ratio de docas recomendado por tipo de operación",
      source: "CSCMP; prácticas de mercado industrial en México 2025",
      columns: ["Tipo de operación", "Ratio (1 doca por X ft²)", "Cross-dock adicional"],
      rows: [
        { cells: ["Distribución alto volumen", "5,000 ft²", "Sí, 20-30% del total"] },
        { cells: ["Manufactura estándar", "10,000 ft²", "No necesario"] },
        { cells: ["Almacén de materia prima", "15,000 ft²", "No necesario"] },
        { cells: ["Fulfillment / e-commerce", "3,000-5,000 ft²", "Sí, 30-40% del total"] },
        { cells: ["Cold storage", "8,000-10,000 ft²", "Sí, con antecámara"] },
      ]
    }
  ],

  "cuanto-tiempo-tarda-en-construirse-una-nave-industrial-y-como-planificar-tu-cronograma": [
    {
      title: "Cronograma típico de construcción: nave industrial de 100,000 ft² en BC",
      source: "Datos de constructoras activas en Baja California 2024-2025",
      columns: ["Fase", "Dentro de parque", "Terreno independiente"],
      rows: [
        { cells: ["Permisos y licencias", "1-2 meses", "4-9 meses"] },
        { cells: ["Preparación del terreno", "1 mes", "2-4 meses"] },
        { cells: ["Cimentación", "2 meses", "2-3 meses"] },
        { cells: ["Estructura y cubierta", "3-4 meses", "3-4 meses"] },
        { cells: ["Instalaciones (MEP)", "2-3 meses (paralelo)", "3-4 meses"] },
        { cells: ["Tenant improvements", "1-2 meses", "1-2 meses"] },
        { cells: ["Total estimado", "7-10 meses", "14-22 meses"] },
      ]
    },
    {
      title: "Costo de un mes de retraso según tipo de operación",
      source: "Estimaciones basadas en operaciones reales en BC 2025",
      columns: ["Concepto", "Manufactura (200 empleados)", "Distribución (50 empleados)"],
      rows: [
        { cells: ["Renta temporal alternativa", "$60,000-$80,000", "$30,000-$40,000"] },
        { cells: ["Nómina sin producción", "$250,000-$350,000", "$80,000-$120,000"] },
        { cells: ["Penalizaciones contractuales", "Variable", "Variable"] },
        { cells: ["Oportunidad de ventas perdida", "$500,000+", "$200,000+"] },
        { cells: ["Costo total estimado/mes", "$800,000-$1,000,000+", "$310,000-$400,000+"] },
      ]
    }
  ],

  "de-terreno-baldio-a-parque-industrial-el-proceso-de-desarrollo-desde-cero-en-mexicali": [
    {
      title: "Fases de desarrollo de un parque industrial en Mexicali",
      source: "Experiencia de desarrolladores en BC; procesos municipales de Mexicali",
      columns: ["Fase", "Duración", "Inversión estimada/hectárea"],
      rows: [
        { cells: ["Adquisición y due diligence", "3-6 meses", "Variable (terreno)"] },
        { cells: ["Plan maestro y permisos", "6-12 meses", "$50,000-$80,000"] },
        { cells: ["Urbanización (vialidades, drenaje)", "6-9 meses", "$200,000-$350,000"] },
        { cells: ["Infraestructura eléctrica (CFE)", "12-18 meses", "$150,000-$400,000"] },
        { cells: ["Construcción de naves spec", "6-9 meses", "$800,000-$1,200,000"] },
        { cells: ["Comercialización y entrega", "6-12 meses", "Incluido en operación"] },
      ]
    },
    {
      title: "Parque maduro vs parque nuevo: comparativa para el primer inquilino",
      source: "Análisis de mercado en Mexicali 2025",
      columns: ["Factor", "Parque maduro (10+ años)", "Parque nuevo (< 3 años)"],
      rows: [
        { cells: ["Infraestructura eléctrica", "Comprobada y estable", "Puede tener retrasos CFE"] },
        { cells: ["Servicios de administración", "Consolidados", "En proceso de definición"] },
        { cells: ["Vecinos industriales", "Conocidos, referencias verificables", "Pocos o ninguno"] },
        { cells: ["Renta", "Premium 10-15%", "Descuento por early-mover"] },
        { cells: ["Personalización de nave", "Limitada", "Build-to-suit disponible"] },
        { cells: ["Riesgo de ejecución", "Bajo", "Medio (depende del desarrollador)"] },
      ]
    }
  ],

  "leed-en-parques-industriales-el-roi-que-tu-cfo-necesita-ver": [
    {
      title: "Costo vs ahorro de certificación LEED en nave industrial (100,000 ft²)",
      source: "USGBC; McKinsey Sustainability Report 2025; datos de mercado en México",
      columns: ["Concepto", "Sin LEED", "LEED Silver", "Diferencia"],
      rows: [
        { cells: ["Costo de construcción/ft²", "$48.00", "$51.50", "+$3.50 (7%)"] },
        { cells: ["Costo energía anual", "$180,000", "$140,000", "-$40,000 (22%)"] },
        { cells: ["Costo agua anual", "$24,000", "$16,000", "-$8,000 (33%)"] },
        { cells: ["Prima de renta posible", "Base", "+5-8%", "+$27,000-$43,000/año"] },
        { cells: ["Payback del premium", "N/A", "4-6 años", "Sin contar prima de renta"] },
      ]
    },
    {
      title: "Presión ESG que impulsa LEED en industrial: quién exige qué",
      source: "CDP; SEC Climate Disclosure 2024; EU CSRD; reportes corporativos",
      columns: ["Regulación/Iniciativa", "Qué exige", "A quién afecta"],
      rows: [
        { cells: ["SEC Climate Disclosure (EE.UU.)", "Reporte de emisiones Scope 1, 2 y 3", "Public companies y sus suppliers"] },
        { cells: ["EU CSRD", "Reporte de sostenibilidad", "Empresas con operación en EU"] },
        { cells: ["CDP Supply Chain", "Cuestionario ambiental anual", "Suppliers de 300+ empresas globales"] },
        { cells: ["Apple Clean Energy", "100% energía renovable en supply chain", "Proveedores directos de Apple"] },
        { cells: ["Walmart Project Gigaton", "Reducción de emisiones a 2030", "Proveedores de Walmart"] },
      ]
    }
  ],

  "paneles-solares-en-techos-de-naves-industriales-retorno-de-inversion-y-casos-reales-en-mexico": [
    {
      title: "Generación solar estimada en techo de nave industrial en Mexicali",
      source: "NREL PVWatts; CFE tarifas GDMTH 2025; datos de irradiación de Mexicali",
      columns: ["Tamaño de nave", "Capacidad solar", "Generación anual", "Ahorro anual estimado"],
      rows: [
        { cells: ["50,000 ft²", "350-400 kWp", "650-700 MWh", "$52,000-$56,000 USD"] },
        { cells: ["100,000 ft²", "700-800 kWp", "1,300-1,400 MWh", "$104,000-$112,000 USD"] },
        { cells: ["200,000 ft²", "1,400-1,600 kWp", "2,600-2,800 MWh", "$208,000-$224,000 USD"] },
      ]
    },
    {
      title: "Modelos de contratación solar: comparativa para inquilinos industriales",
      source: "Datos de proveedores solares activos en BC 2025",
      columns: ["Modelo", "Inversión inicial", "Ahorro vs CFE", "Propiedad del sistema"],
      rows: [
        { cells: ["Compra directa", "$0.85-1.10 USD/Wp", "25-40%", "Del inquilino/propietario"] },
        { cells: ["PPA (Power Purchase Agreement)", "$0", "10-20%", "Del proveedor solar"] },
        { cells: ["Arrendamiento", "$0", "15-25%", "Del proveedor (opción de compra)"] },
        { cells: ["On-site con financiamiento", "Enganche 10-20%", "20-30%", "Del inquilino al liquidar"] },
      ]
    }
  ],

  "naves-industriales-net-zero-como-construir-una-bodega-carbono-neutral-paso-a-paso": [
    {
      title: "Herramientas para Net Zero disponibles en México y su impacto",
      source: "CRE; SENER; mercado de CELs; especificaciones de mercado 2025",
      columns: ["Herramienta", "Reducción de emisiones", "Costo estimado", "Disponibilidad en BC"],
      rows: [
        { cells: ["Solar en techo", "30-50% de Scope 2", "$0.85-1.10/Wp", "Alta (irradiación 5.8 kWh/m²/día)"] },
        { cells: ["CELs (Certificados de Energía Limpia)", "Hasta 100% de Scope 2 (papel)", "$1.50-3.00/MWh", "Mercado activo"] },
        { cells: ["I-RECs", "Hasta 100% de Scope 2 (internacional)", "$2.00-4.00/MWh", "A través de brokers"] },
        { cells: ["Eficiencia energética (LED, HVAC)", "15-25%", "Payback 2-4 años", "Inmediata"] },
        { cells: ["Aislamiento térmico R-19+", "10-15% en HVAC", "Incluido en Clase A", "Inmediata"] },
      ]
    },
    {
      title: "Costo adicional de diseño Net Zero vs convencional (nave 100,000 ft²)",
      source: "Estimaciones de constructoras y consultores de sostenibilidad en México 2025",
      columns: ["Componente", "Convencional", "Net Zero Ready", "Premium"],
      rows: [
        { cells: ["Envolvente (muros + cubierta)", "$450,000", "$520,000", "+$70,000"] },
        { cells: ["Iluminación LED + sensores", "$80,000", "$110,000", "+$30,000"] },
        { cells: ["HVAC alta eficiencia", "$200,000", "$280,000", "+$80,000"] },
        { cells: ["Solar en techo (800 kWp)", "No incluido", "$760,000", "+$760,000"] },
        { cells: ["Certificación LEED/EDGE", "No incluido", "$50,000-$80,000", "+$65,000"] },
        { cells: ["Total", "$730,000", "$1,750,000", "+$1,005,000 (payback ~8 años)"] },
      ]
    }
  ],

  "usuario-calificado-cfe-como-las-grandes-empresas-reducen-su-factura-electrica-en-mexico": [
    {
      title: "Tarifa CFE vs Mercado Eléctrico Mayorista: comparativa de costos",
      source: "CRE; CENACE; tarifas CFE GDMTH 2025; datos del MEM",
      columns: ["Concepto", "Tarifa CFE (GDMTH)", "Usuario Calificado (MEM)"],
      rows: [
        { cells: ["Precio energía $/kWh", "$0.078-0.095 USD", "$0.045-0.065 USD"] },
        { cells: ["Cargos de transmisión", "Incluidos", "$0.008-0.012/kWh adicional"] },
        { cells: ["Cargos de distribución", "Incluidos", "$0.005-0.010/kWh adicional"] },
        { cells: ["Cargo por capacidad", "Incluido", "Variable por zona"] },
        { cells: ["Ahorro neto estimado", "Base", "15-35%"] },
        { cells: ["Consumo mínimo requerido", "N/A", "1 MW de demanda"] },
      ]
    },
    {
      title: "Proceso de calificación como Usuario Calificado: pasos y tiempos",
      source: "CRE; CENACE; experiencia de consultores energéticos en BC",
      columns: ["Paso", "Duración", "Requisito clave"],
      rows: [
        { cells: ["Solicitud ante CRE", "2-4 meses", "Demanda > 1 MW comprobable"] },
        { cells: ["Registro como participante del MEM", "1-2 meses", "Resolución de CRE aprobada"] },
        { cells: ["Contrato con suministrador calificado", "1-3 meses", "Negociación de PPA bilateral"] },
        { cells: ["Instalación de medición (CENACE)", "2-4 meses", "Medidor aprobado por CENACE"] },
        { cells: ["Migración efectiva", "1 mes", "Coordinación con CFE para desconexión"] },
        { cells: ["Total estimado", "8-14 meses", ""] },
      ]
    }
  ],

  "diferencias-entre-una-nave-de-distribucion-de-manufactura-y-de-fulfillment-cual-necesitas": [
    {
      title: "Especificaciones técnicas por tipo de nave industrial",
      source: "CBRE Industrial Classification Guide; SIOR; estándares AMPIP",
      columns: ["Especificación", "Distribución", "Manufactura", "Fulfillment"],
      rows: [
        { cells: ["Clear height típico", "32-40 ft", "24-32 ft", "28-36 ft"] },
        { cells: ["Ratio docas", "1:5,000 ft²", "1:10,000 ft²", "1:3,000 ft²"] },
        { cells: ["Capacidad eléctrica", "0.5-1 MVA", "2-5 MVA", "0.5-1.5 MVA"] },
        { cells: ["Piso FF/FL", "FF50+/FL30+", "FF35/FL25 (varía)", "FF50+/FL30+"] },
        { cells: ["Oficinas (% del total)", "5-10%", "15-25%", "10-15%"] },
        { cells: ["Cross-dock", "Frecuente", "Raro", "Esencial"] },
      ]
    },
    {
      title: "Errores costosos de elegir el tipo de nave equivocada",
      source: "Experiencia de brokers industriales y operadores en BC",
      columns: ["Error", "Costo de corrección", "Tiempo perdido"],
      rows: [
        { cells: ["Manufactura en nave de distribución (sin electricidad suficiente)", "$150,000-$300,000 para nueva subestación", "6-12 meses para CFE"] },
        { cells: ["Fulfillment sin suficientes docas", "$50,000-$100,000 por doca adicional", "2-4 meses"] },
        { cells: ["Distribución con piso FF20 (automatización imposible)", "Grinding: $8-12/ft²", "3-6 meses (sin operar)"] },
        { cells: ["Cualquier tipo con clear height insuficiente", "No tiene corrección", "Reubicación completa"] },
      ]
    }
  ],

  "cold-storage-el-mercado-de-almacenamiento-en-frio-y-sus-especificaciones-de-construccion": [
    {
      title: "Rangos de temperatura y aplicaciones en cold storage",
      source: "IARW; GCCA; especificaciones de la industria",
      columns: ["Tipo", "Temperatura", "Aplicaciones", "Costo vs nave convencional"],
      rows: [
        { cells: ["Cool storage", "+2°C a +8°C", "Frutas, vegetales, lácteos", "1.5-1.8x"] },
        { cells: ["Refrigerado", "0°C a -5°C", "Carnes frescas, pescado", "1.8-2.2x"] },
        { cells: ["Congelado", "-18°C a -25°C", "Alimentos congelados", "2.2-2.8x"] },
        { cells: ["Deep freeze", "-25°C a -40°C", "Helados, seafood premium", "2.8-3.5x"] },
        { cells: ["Ultra-low", "< -40°C", "Farmacéutica, vacunas", "4.0-5.0x"] },
      ]
    },
    {
      title: "Consumo energético: cold storage vs nave convencional en Mexicali",
      source: "Estimaciones basadas en datos de CFE y operadores de cold storage en BC",
      columns: ["Concepto", "Nave convencional (100K ft²)", "Cold storage (100K ft²)"],
      rows: [
        { cells: ["Demanda eléctrica", "200-400 kW", "1,500-3,000 kW"] },
        { cells: ["Consumo mensual kWh", "80,000-120,000", "800,000-1,500,000"] },
        { cells: ["Factura eléctrica mensual", "$6,400-$9,600", "$64,000-$120,000"] },
        { cells: ["Impacto del verano (40°C+)", "Moderado", "Consumo +30-50% jun-sep"] },
        { cells: ["Costo operativo/ft²/año", "$1.50-$2.50", "$12.00-$20.00"] },
      ]
    }
  ],

  "last-mile-delivery-como-impacta-en-la-ubicacion-y-el-diseno-de-centros-de-distribucion": [
    {
      title: "Especificaciones de nave last-mile vs centro de distribución regional",
      source: "CBRE Last-Mile Logistics Report 2025; Prologis Research",
      columns: ["Especificación", "Last-mile", "CD Regional"],
      rows: [
        { cells: ["Tamaño típico", "20,000-80,000 ft²", "200,000-500,000 ft²"] },
        { cells: ["Clear height", "24-28 ft", "36-40 ft"] },
        { cells: ["Docas", "1:2,000-3,000 ft²", "1:5,000-10,000 ft²"] },
        { cells: ["Estacionamiento vans/sprinters", "30-60 espacios", "No aplica"] },
        { cells: ["Ubicación", "Dentro de la ciudad", "Periurbano o corredor logístico"] },
        { cells: ["Horarios de operación", "5 AM - 10 PM", "24/7"] },
      ]
    },
    {
      title: "Oportunidad cross-border last-mile: corredor Mexicali-Calexico",
      source: "U.S. Census Bureau; CBP; estimaciones de mercado 2025",
      columns: ["Indicador", "Valor", "Implicación"],
      rows: [
        { cells: ["Población Imperial Valley", "180,000", "Mercado cautivo sin hub propio"] },
        { cells: ["Población Mexicali metro", "1,100,000", "Demanda B2C creciente"] },
        { cells: ["Cruces comerciales diarios", "2,500+ camiones", "Flujo constante de mercancía"] },
        { cells: ["Distancia al hub más cercano (San Diego)", "190 km", "2+ horas de last-mile"] },
        { cells: ["Naves < 50K ft² disponibles en Mexicali", "< 5", "Inventario casi nulo"] },
      ]
    }
  ],

  "automatizacion-en-bodegas-cuanto-espacio-adicional-necesita-una-operacion-robotizada": [
    {
      title: "Mapa de tecnologías de automatización y sus requerimientos de nave",
      source: "MHI Annual Industry Report 2025; especificaciones de fabricantes",
      columns: ["Tecnología", "Inversión USD/ft²", "Clear height mínimo", "Piso mínimo (FF/FL)"],
      rows: [
        { cells: ["Conveyor systems", "$15-25", "24 ft", "FF25/FL15"] },
        { cells: ["AGVs / AMRs", "$20-40", "24 ft", "FF80/FL50"] },
        { cells: ["Goods-to-person (AutoStore, etc.)", "$50-80", "28 ft", "FF50/FL30"] },
        { cells: ["ASRS (mini-load)", "$80-120", "36 ft", "FF100/FL50"] },
        { cells: ["ASRS (unit-load/cranes)", "$120-200", "40+ ft", "FF100/FL50"] },
      ]
    },
    {
      title: "Espacio adicional que requiere la automatización vs operación manual",
      source: "Dematic; Swisslog; datos de proyectos en México 2024-2025",
      columns: ["Área", "Manual", "Automatizada", "Cambio"],
      rows: [
        { cells: ["Zona de carga de baterías / charging", "0 ft²", "2,000-5,000 ft²", "+2-5%"] },
        { cells: ["Sala de control y servidores", "100 ft²", "500-1,500 ft²", "+0.5-1.5%"] },
        { cells: ["Pasillos (ancho)", "12 ft", "5-8 ft (ASRS)", "-30-50%"] },
        { cells: ["Zona de mantenimiento", "200 ft²", "1,000-2,000 ft²", "+1-2%"] },
        { cells: ["Capacidad de almacenamiento efectiva", "Base", "+40-80% (más niveles)", "Mayor densidad"] },
      ]
    }
  ],

  "7-tendencias-que-definen-el-futuro-de-los-parques-industriales-en-mexico": [
    {
      title: "Indicadores clave del mercado industrial mexicano (2020 vs 2025)",
      source: "CBRE; JLL; AMPIP; Banco de México",
      columns: ["Indicador", "2020", "2025", "Cambio"],
      rows: [
        { cells: ["IED en manufactura (USD billones)", "$10.3", "$18.7", "+81%"] },
        { cells: ["Inventario industrial nacional (M ft²)", "780", "945", "+21%"] },
        { cells: ["Vacancia promedio nacional", "5.2%", "3.1%", "-2.1 pp"] },
        { cells: ["Renta promedio nacional USD/ft²/mes", "$0.44", "$0.56", "+27%"] },
        { cells: ["Naves con certificación LEED", "85", "210+", "+147%"] },
        { cells: ["Absorción neta anual (M ft²)", "32", "48", "+50%"] },
      ]
    },
    {
      title: "Las 7 tendencias y su impacto esperado a 2030",
      source: "Análisis prospectivo basado en datos de mercado y regulación vigente",
      columns: ["Tendencia", "Probabilidad de impacto alto", "Horizonte"],
      rows: [
        { cells: ["Nearshoring 2.0 (segunda ola)", "Alta", "2025-2028"] },
        { cells: ["Energía como activo estratégico del parque", "Alta", "2025-2027"] },
        { cells: ["Diseño de naves de siguiente generación", "Media-Alta", "2026-2030"] },
        { cells: ["Sostenibilidad como requisito de entrada", "Alta", "2025-2028"] },
        { cells: ["China+1 en BC (oportunidad + riesgo arancelario)", "Media", "2025-2027"] },
        { cells: ["Otay Mesa East y transformación logística", "Alta", "2027-2030"] },
        { cells: ["Consolidación del mercado de desarrolladores", "Media-Alta", "2025-2028"] },
      ]
    }
  ],
}

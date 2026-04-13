// Data centralizada de los 5 parques industriales de Grupo Nelson
// Fuentes: PDFs de especificaciones (mapeados a /docs/) + sitio web antiguo

import type { IndustrialPark, Building } from './types'

// === NAVES: El Vigía I (11 naves) ===

const vigiaIBuildings: Building[] = [
  {
    id: 'vigia-i-nave-17b',
    name: 'Nave 17B',
    generalData: {
      landArea: { m2: 865.63 },
      totalConstructionArea: { m2: 525.16, sqft: 5652.82 },
    },
    structure: {
      type: 'Marco rígido metálico',
      maxHeight: { m: 6.09, ft: 20 },
      minHeight: { m: 4.87, ft: 16 },
      beamSpacing: '20.58 m x 7.35 m (67.51 ft x 24.11 ft)',
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 5" con resistencia de 3,000 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        skylights: true,
        rainwaterSystem: true,
      },
      walls: {
        material: 'Muro de block de concreto 6" x 8" x 16" con acabado pintado',
      },
      lighting: {
        substation: '1/300 KVA',
        warehouseLighting: 'Fluorescente T5',
        officeLighting: 'Fluorescente T5',
      },
      bathrooms: { description: 'Incluidos' },
    },
    loadingArea: {
      totalDocks: 1,
      description: '1 andén',
    },
    fireProtection: {
      cabinets: true,
      sprinklers: false,
      waterTank: false,
      description: 'Gabinetes y mangueras cumpliendo con códigos del departamento de bomberos local',
    },
  },
  {
    id: 'vigia-i-nave-24',
    name: 'Nave 24',
    generalData: {
      landArea: { m2: 2019.90 },
      totalConstructionArea: { m2: 1623.96, sqft: 17480.15 },
      subAreas: {
        bathrooms: { m2: 101.56, sqft: 1093.15 },
      },
    },
    structure: {
      type: 'Marco rígido metálico',
      maxHeight: { m: 5.40, ft: 18 },
      minHeight: { m: 4.92, ft: 16 },
      clearHeight: { m: 4.92, ft: 16 },
      beamSpacing: '19.59 m x 6.50 m (64 ft x 20 ft)',
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 6" con resistencia de 3,500 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        skylights: true,
        rainwaterSystem: true,
      },
      walls: {
        material: 'Unidades de mampostería de concreto 6" x 8" x 16" pintadas',
      },
      lighting: {
        warehouseLighting: 'Metal hide GHB high bay 450W/480',
        exteriorLighting: 'Wall pack 250W/2400',
      },
      bathrooms: {
        description: 'Baños de producción con ventilación',
        details: [
          { area: 'Producción - Hombres', fixtures: '8 WC, 6 urinales, 3 lavabos' },
          { area: 'Producción - Mujeres', fixtures: '4 WC, 3 lavabos' },
        ],
      },
    },
    loadingArea: {
      totalDocks: 2,
      description: '2 espacios para andén de camión',
    },
    fireProtection: {
      cabinets: true,
      sprinklers: false,
      waterTank: false,
      description: 'Gabinetes y mangueras cumpliendo con códigos del departamento de bomberos local',
    },
  },
  {
    id: 'vigia-i-naves-2-4',
    name: 'Naves 2-4',
    generalData: {
      landArea: { m2: 4504.50 },
      totalConstructionArea: { m2: 3886.29, sqft: 41831.90 },
      subAreas: {
        offices: { m2: 205.90, sqft: 2216.28 },
      },
    },
    structure: {
      type: 'Muro de concreto con techo de marco metálico',
      maxHeight: { m: 5.57, ft: 18.27 },
      minHeight: { m: 4.59, ft: 15.05 },
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 6" con resistencia de 3,982 PSI sobre 5" del piso antiguo',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        rainwaterSystem: true,
      },
      walls: {
        material: 'Unidades de mampostería de concreto 6" x 8" x 16" pintadas',
      },
      lighting: {
        substation: '1/300 KVA (compartida con otros inquilinos)',
        warehouseLighting: 'Metal hide GHB high bay 470W/277',
        officeLighting: 'Fluorescente 4-40W/120V',
      },
      bathrooms: { description: '2 baños 2/1 en área de oficinas' },
    },
    loadingArea: {
      totalDocks: 3,
      docksWithLevelers: 3,
      description: '3 andenes de carga/descarga con niveladores edge of dock',
    },
    fireProtection: {
      cabinets: false,
      sprinklers: false,
      waterTank: false,
      description: 'Cumple con códigos locales',
    },
  },
  {
    id: 'vigia-i-nave-4',
    name: 'Nave 4',
    generalData: {
      landArea: { m2: 1644.50 },
      totalConstructionArea: { m2: 1572.14, sqft: 16922.44 },
      subAreas: {
        warehouse: { m2: 1366.24, sqft: 14706.16 },
        offices: { m2: 205.90, sqft: 2216.28 },
      },
    },
    structure: {
      type: 'Muro de concreto con techo de marco metálico',
      maxHeight: { m: 5.57, ft: 18.27 },
      minHeight: { m: 4.59, ft: 15.05 },
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 6" con resistencia de 3,982 PSI sobre 5" del piso antiguo',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        rainwaterSystem: true,
      },
      walls: {
        material: 'Unidades de mampostería de concreto 6" x 8" x 16" pintadas',
      },
      lighting: {
        substation: '1/300 KVA (compartida con otros inquilinos)',
        warehouseLighting: 'Metal hide GHB high bay 470W/277',
        officeLighting: 'Fluorescente 4-40W/120V',
      },
      bathrooms: { description: '2 baños 2/1 en área de oficinas' },
    },
    loadingArea: {
      totalDocks: 1,
      description: '1 andén',
    },
    fireProtection: {
      cabinets: false,
      sprinklers: false,
      waterTank: false,
      description: 'Cumple con códigos locales',
    },
  },
  {
    id: 'vigia-i-naves-5-6',
    name: 'Naves 5-6',
    generalData: {
      landArea: { m2: 2772.77 },
      totalConstructionArea: { m2: 1938.61, sqft: 20867.08 },
      subAreas: {
        mezzanine: { m2: 67.46, sqft: 726.13 },
      },
    },
    structure: {
      type: 'Muro de concreto con techo de marco metálico',
      maxHeight: { m: 12.19, ft: 40 },
      minHeight: { m: 9.75, ft: 32 },
      clearHeight: { m: 9.14, ft: 30 },
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 6" con resistencia de 3,500 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        rainwaterSystem: true,
      },
      walls: {
        material: 'Muro de block de concreto 6" x 8" x 16". Lámina metálica pintada en fábrica aislada con fibra de vidrio cubierta con vinil reforzado (R-11)',
      },
      lighting: {
        substation: '1/300 KVA (compartida con otros inquilinos)',
        warehouseLighting: 'Metal hide GHB high bay 470W/277',
        officeLighting: 'Fluorescente 4-40W/120V',
      },
      bathrooms: {
        description: 'Baños de producción',
        details: [
          { area: 'Hombres', fixtures: '4 WC, 3 urinales, 10 lavabos' },
          { area: 'Mujeres', fixtures: '4 WC, 4 lavabos' },
        ],
      },
    },
    loadingArea: {
      totalDocks: 3,
      docksWithLevelers: 3,
      description: '3 andenes de carga/descarga con niveladores edge of dock',
    },
    fireProtection: {
      cabinets: true,
      sprinklers: false,
      waterTank: true,
      description: 'Cisterna de almacenamiento de agua con bomba impulsora. Gabinetes y mangueras cumpliendo con códigos del departamento de bomberos local',
    },
  },
  {
    id: 'vigia-i-naves-18-19',
    name: 'Naves 18-19',
    generalData: {
      landArea: { m2: 2453.94 },
      totalConstructionArea: { m2: 2019.61, sqft: 21738.95 },
    },
    structure: {
      type: 'Marco rígido metálico',
      maxHeight: { m: 6.09, ft: 20 },
      minHeight: { m: 4.87, ft: 16 },
      beamSpacing: '20.58 m x 7.35 m (67.51 ft x 24.11 ft)',
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 5" con resistencia de 3,000 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        skylights: true,
        rainwaterSystem: true,
      },
      walls: {
        material: 'Muro de block de concreto 6" x 8" x 16" con acabado pintado',
      },
      lighting: {
        substation: '1/500 KVA',
        warehouseLighting: 'Metal Hide GHB 470W/277',
        officeLighting: 'Fluorescente 4-40W/120V',
      },
      bathrooms: { description: 'Incluidos' },
    },
    loadingArea: {
      totalDocks: 2,
      description: '2 andenes',
    },
    fireProtection: {
      cabinets: true,
      sprinklers: false,
      waterTank: false,
      description: 'Gabinetes y mangueras cumpliendo con códigos del departamento de bomberos local',
    },
  },
  {
    id: 'vigia-i-nave-26',
    name: 'Nave 26',
    generalData: {
      landArea: { m2: 2981.12 },
      totalConstructionArea: { m2: 1187.99, sqft: 12787.41 },
    },
    structure: {
      type: 'Marco rígido metálico',
      maxHeight: { m: 6.09, ft: 20 },
      minHeight: { m: 4.87, ft: 16 },
      beamSpacing: '20.58 m x 7.35 m (67.51 ft x 24.11 ft)',
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 5" con resistencia de 3,000 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        skylights: true,
        rainwaterSystem: true,
      },
      walls: {
        material: 'Muro de block de concreto 6" x 8" x 16" con acabado pintado',
      },
      lighting: {
        warehouseLighting: 'Metal hide GHB high bay 450W/480',
        exteriorLighting: 'Wall pack 250W/2400',
      },
      bathrooms: { description: 'Área de producción' },
    },
    loadingArea: {
      totalDocks: 0,
      description: 'Ninguno',
    },
    fireProtection: {
      cabinets: true,
      sprinklers: false,
      waterTank: false,
      description: 'Gabinetes y mangueras cumpliendo con códigos del departamento de bomberos local',
    },
  },
  {
    id: 'vigia-i-naves-26-27',
    name: 'Naves 26-27',
    generalData: {
      landArea: { m2: 4170.54 },
      totalConstructionArea: { m2: 2591.28, sqft: 27892.30 },
    },
    structure: {
      type: 'Marco rígido metálico',
      maxHeight: { m: 6.09, ft: 20 },
      minHeight: { m: 4.87, ft: 16 },
      beamSpacing: '20.58 m x 7.35 m (67.51 ft x 24.11 ft)',
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 5" con resistencia de 3,000 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        skylights: true,
        rainwaterSystem: true,
      },
      walls: {
        material: 'Muro de block de concreto 6" x 8" x 16" con acabado pintado',
      },
      lighting: {
        warehouseLighting: 'Metal hide GHB high bay 450W/480',
        exteriorLighting: 'Wall pack 250W/2400',
      },
      bathrooms: {
        description: 'Baños de producción',
        details: [
          { area: 'Producción - Mujeres', fixtures: '2 WC, 2 lavabos' },
          { area: 'Producción - Hombres', fixtures: '4 WC, 3 mingitorios, 2 lavabos' },
        ],
      },
    },
    loadingArea: {
      totalDocks: 7,
      description: '7 andenes',
    },
    fireProtection: {
      cabinets: true,
      sprinklers: false,
      waterTank: false,
      description: 'Gabinetes y mangueras cumpliendo con códigos del departamento de bomberos local',
    },
  },
  {
    id: 'vigia-i-naves-29-33',
    name: 'Naves 29-33',
    generalData: {
      landArea: { m2: 6187.93 },
      totalConstructionArea: { m2: 5459.90, sqft: 58769.82 },
      subAreas: {
        warehouse: { m2: 4842.31, sqft: 52122.14 },
        dockNorth: { m2: 162.31, sqft: 1747.09 },
        dockSouth: { m2: 176.62, sqft: 1901.12 },
        other: [
          { label: 'Oficinas y baños', area: { m2: 278.66, sqft: 2999.47 } },
        ],
      },
    },
    structure: {
      type: 'Marco rígido metálico con muro de block',
      maxHeight: { m: 5.57, ft: 18.27 },
      minHeight: { m: 4.75, ft: 16 },
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 5" con resistencia de 3,982 PSI',
        joints: 'Juntas de control y construcción selladas',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        rainwaterSystem: true,
      },
      walls: {
        material: 'Unidades de mampostería de concreto 6" x 8" x 16" pintadas',
      },
      lighting: {
        substation: '500 KVA',
        warehouseLighting: 'Metal hide GHB high bay 470W/277',
        officeLighting: 'Fluorescente 4-40W/120V',
      },
      bathrooms: { description: 'Disponibles en área de almacén y área de oficinas' },
    },
    loadingArea: {
      totalDocks: 7,
      description: '7 andenes',
    },
    fireProtection: {
      cabinets: false,
      sprinklers: false,
      waterTank: false,
      description: 'Cumple con códigos locales',
    },
  },
  {
    id: 'vigia-i-naves-55-56',
    name: 'Naves 55-56',
    generalData: {
      landArea: { m2: 8118 },
      totalConstructionArea: { m2: 3573, sqft: 38460 },
      subAreas: {
        offices: { m2: 1025.29, sqft: 11036.12 },
      },
    },
    structure: {
      type: 'Muro de concreto con techo de marco metálico',
      bays: [
        {
          name: 'Bahía Sur',
          minHeight: { m: 5.57, ft: 16 },
          clearHeight: { m: 4.59, ft: 15 },
          beamSpacing: '20.00 m x 7.00 m (66 ft x 23 ft)',
        },
      ],
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 4" con resistencia de 2,986.90 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado con pintura epóxica',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        rainwaterSystem: true,
      },
      walls: {
        material: 'Unidades de mampostería de concreto 8" x 8" x 16"',
        color: 'café',
        windows: 'Ventanas fijas con vidrio templado doble panel aislante Low-E',
      },
      lighting: {
        substation: '500 KVA 227-480V',
        warehouseLighting: 'Metal hide GHB high bay 470W/277',
        officeLighting: 'Fluorescente 4-40W/120V',
      },
      bathrooms: {
        description: 'Baños de oficina y producción',
        details: [
          { area: 'Oficina - Hombres', fixtures: '2 WC, 1 lavabo' },
          { area: 'Oficina - Mujeres', fixtures: '1 WC, 1 lavabo' },
          { area: 'Producción - Hombres', fixtures: '9 WC, 4 urinales, 4 lavabos' },
          { area: 'Producción - Mujeres', fixtures: '4 WC, 4 lavabos' },
        ],
      },
    },
    loadingArea: {
      totalDocks: 4,
      docksWithLevelers: 3,
      floorLevelDoors: 1,
      description: '3 puertas a nivel de andén, 1 puerta a nivel de piso',
    },
    exteriorArea: {
      parkingSpaces: 100,
      truckSpaces: 3,
      guardBooth: true,
    },
    fireProtection: {
      cabinets: true,
      sprinklers: true,
      waterTank: true,
      description: 'Gabinetes y mangueras. Sistema de rociadores (sprinkler). Tanque de agua y sistema de bombeo. Cumple con códigos del departamento de bomberos local',
    },
  },
  {
    id: 'vigia-i-naves-55-57',
    name: 'Naves 55-57',
    generalData: {
      landArea: { m2: 8859.53 },
      totalConstructionArea: { m2: 5817.56, sqft: 62614.14 },
      subAreas: {
        warehouse: { m2: 5430.84, sqft: 58457.12 },
        offices: { m2: 386.72, sqft: 4157.02 },
      },
    },
    structure: {
      type: 'Muro de concreto con techo de marco metálico',
      bays: [
        {
          name: 'Bahía Central',
          minHeight: { m: 10.71, ft: 32 },
          clearHeight: { m: 5.57, ft: 22 },
          beamSpacing: '27.10 m x 7.00 m (89 ft x 23 ft)',
        },
        {
          name: 'Bahía Sur',
          minHeight: { m: 5.57, ft: 16 },
          clearHeight: { m: 4.59, ft: 15 },
          beamSpacing: '20.00 m x 7.00 m (66 ft x 23 ft)',
        },
      ],
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 4" con resistencia de 2,986.90 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado con pintura epóxica',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        rainwaterSystem: true,
      },
      walls: {
        material: 'Unidades de mampostería de concreto 8" x 8" x 16"',
        color: 'café',
        windows: 'Ventanas fijas con vidrio templado doble panel aislante Low-E',
      },
      lighting: {
        substation: '500 KVA 227-480V',
        warehouseLighting: 'Metal hide GHB high bay 470W/277',
        officeLighting: 'Fluorescente 4-40W/120V',
      },
      bathrooms: {
        description: 'Baños de oficina y producción',
        details: [
          { area: 'Oficina - Hombres', fixtures: '2 WC, 1 lavabo' },
          { area: 'Oficina - Mujeres', fixtures: '1 WC, 1 lavabo' },
          { area: 'Producción - Hombres', fixtures: '9 WC, 4 urinales, 4 lavabos' },
          { area: 'Producción - Mujeres', fixtures: '4 WC, 4 lavabos' },
        ],
      },
    },
    loadingArea: {
      totalDocks: 5,
      docksWithLevelers: 4,
      floorLevelDoors: 1,
      description: '4 puertas a nivel de andén, 1 puerta a nivel de piso',
    },
    exteriorArea: {
      parkingSpaces: 100,
      truckSpaces: 3,
      guardBooth: true,
    },
    fireProtection: {
      cabinets: true,
      sprinklers: true,
      waterTank: true,
      description: 'Gabinetes y mangueras. Sistema de rociadores (sprinkler). Tanque de agua y sistema de bombeo. Cumple con códigos del departamento de bomberos local',
    },
  },
]

// === NAVES: El Vigía II (2 naves) ===

const vigiaIIBuildings: Building[] = [
  {
    id: 'vigia-ii-v2-01',
    name: 'V2_01',
    generalData: {
      landArea: { m2: 11844.02 },
      totalConstructionArea: { m2: 6074.79, sqft: 65388.50 },
    },
    structure: {
      type: 'Marco rígido metálico',
      maxHeight: { m: 10.53, ft: 34.55 },
      minHeight: { m: 7.80, ft: 25.60 },
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 6" con resistencia de 3,500 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'Lámina galvanizada de costura alzada',
        gauge: 24,
        insulation: 'Fibra de vidrio cubierta con vinil reforzado (R-19)',
        skylights: true,
        rainwaterSystem: true,
      },
      walls: {
        material: 'Unidades de mampostería de concreto',
        dimensions: '6" x 8" x 16"',
        color: 'Pintadas',
      },
      lighting: {
        substation: '1/225 KVA',
        warehouseLighting: 'Metal Hide GHB High 470W/277',
        officeLighting: 'Fluorescente 4-40W/120V',
        additionalNotes: 'Incluye subpaneles y alimentadores para iluminación, HVAC y requisitos de oficinas',
      },
      bathrooms: {
        description: 'Baños para hombres, mujeres y adicional',
        details: [
          { area: 'Hombres', fixtures: '2 WC, 2 urinales, 2 lavabos' },
          { area: 'Mujeres', fixtures: '3 WC, 2 lavabos' },
          { area: 'Adicional', fixtures: '1 WC, 1 lavabo' },
        ],
      },
    },
    loadingArea: {
      totalDocks: 7,
      docksWithLevelers: 5,
      docksWithoutLevelers: 2,
      floorLevelDoors: 1,
      railDoors: 3,
    },
    fireProtection: {
      cabinets: true,
      sprinklers: false,
      waterTank: false,
      description: 'Gabinetes y mangueras cumpliendo con códigos del departamento de bomberos local',
    },
  },
  {
    id: 'vigia-ii-west-building',
    name: 'West Building',
    generalData: {
      landArea: { m2: 9943 },
      totalConstructionArea: { m2: 5061.90, sqft: 54485.84 },
      subAreas: {
        warehouse: { m2: 4768.14, sqft: 51322.32 },
        offices: { m2: 293.76, sqft: 3162 },
      },
    },
    structure: {
      type: 'Marco rígido metálico',
      maxHeight: { m: 10.24, ft: 33.59 },
      clearHeight: { m: 8.23, ft: 27 },
    },
    constructionSpecs: {
      floor: {
        description: 'Losa de concreto de 6" con resistencia de 3,500 PSI',
        joints: 'Juntas de control y construcción selladas',
        finish: 'Acabado endurecedor de piso',
      },
      roof: {
        material: 'KR-18 SSR',
        gauge: 24,
        insulation: 'Fibra de vidrio R-19',
        skylights: true,
        rainwaterSystem: true,
      },
      walls: {
        material: 'Panel Ternium de 2" R-11 calibre 26/26',
      },
      lighting: {
        substation: '1/112.5 KVA',
        warehouseLighting: '30 ft/candle en área de producción (básico)',
      },
      bathrooms: { description: 'Baños en área de oficinas' },
    },
    loadingArea: {
      totalDocks: 5,
      docksWithLevelers: 5,
      description: '5 andenes disponibles (1 por cada 10,000 sq ft), incluyen niveladores de andén',
    },
    exteriorArea: {
      parkingSpaces: 54,
    },
    fireProtection: {
      cabinets: true,
      sprinklers: false,
      waterTank: false,
      description: 'Gabinetes y mangueras cumpliendo con códigos del departamento de bomberos local',
    },
    hvac: {
      description: 'Área de oficinas cuenta con HVAC',
    },
  },
]

// === NAVES: Nelson II (6 naves — datos actualizados de Susana Osuna, marzo 2026) ===

const nelsonIIBuildings: Building[] = [
  {
    id: 'nelson-ii-n2-01',
    name: 'N2_01',
    tenant: 'DHL',
    availability: { status: 'occupied' },
    generalData: {
      totalConstructionArea: { m2: 12214.22, sqft: 131477.05 },
    },
    loadingArea: {
      totalDocks: 16,
      description: '15 a nivel de piso y 1 ascendente',
    },
  },
  {
    id: 'nelson-ii-n2-02',
    name: 'N2_02',
    tenant: 'Direct Pack',
    availability: { status: 'occupied' },
    generalData: {
      totalConstructionArea: { m2: 19206.42, sqft: 206743 },
    },
    loadingArea: {
      totalDocks: 9,
      description: '8 a nivel de piso + 1 ascendente',
    },
  },
  {
    id: 'nelson-ii-n2-03',
    name: 'N2_03',
    tenant: 'SDS de Mexico (Envista)',
    availability: { status: 'occupied' },
    generalData: {
      totalConstructionArea: { m2: 8945.71, sqft: 96294 },
    },
    loadingArea: {
      totalDocks: 2,
      description: '1 es ascendente',
    },
  },
  {
    id: 'nelson-ii-n2-04',
    name: 'N2_04',
    tenant: 'Rheem',
    availability: { status: 'occupied' },
    generalData: {
      totalConstructionArea: { m2: 15123.55, sqft: 162793.91 },
    },
    loadingArea: {
      totalDocks: 20,
      description: '18 a nivel de piso y 2 ascendentes',
    },
  },
  {
    id: 'nelson-ii-n2-05',
    name: 'N2_05',
    tenant: 'Jonathan MFG',
    availability: { status: 'occupied' },
    generalData: {
      totalConstructionArea: { m2: 24435.02, sqft: 263025 },
    },
    loadingArea: {
      totalDocks: 5,
      description: '2 son a nivel de piso',
    },
  },
  {
    id: 'nelson-ii-n2-06',
    name: 'N2_06',
    tenant: 'Gulfstream',
    availability: { status: 'occupied' },
    generalData: {
      totalConstructionArea: { m2: 5652.22, sqft: 60842 },
    },
    loadingArea: {
      totalDocks: 6,
      description: '1 es ascendente',
    },
  },
]

// === LOS 4 PARQUES INDUSTRIALES ===

export const industrialParks: IndustrialPark[] = [
  {
    slug: 'nelson-ii',
    name: 'Parque Industrial Nelson II',
    shortName: 'Nelson II',
    description: 'Parque industrial de primer nivel con ubicación estratégica',
    heroImage: '/parque-industrial-nelson-2-en-mexicali.jpeg',
    since: 2018,
    location: 'Corredor Industrial, Blvd. Venustiano Carranza, entre Av. Piñon y Manzanilla',
    address: 'Venustiano Carranza #350, Mexicali B.C. CP. 21383',
    landSizeHectares: 26.6,
    availableBuildings: 0,
    availableAreaM2: 0,
    availableLandM2: 72264.37,
    immediateAvailability: false,
    establishedCompanies: 6,
    totalBuildings: 6,
    tenants: [
      { name: 'Gulfstream',   logo: '/logos-clientes/logo-gulfstream.svg' },
      { name: 'DHL',          logo: '/logos-clientes/logo-dhl.svg' },
      { name: 'Direct Pack',  logo: '/logos-clientes/logo-direct-pack.svg' },
      { name: 'Envista',      logo: '/logos-clientes/logo-envista.svg' },
      { name: 'Jonathan',     logo: '/logos-clientes/logo-jonathan.svg' },
      { name: 'Rheem',        logo: '/logos-clientes/logo-rheem.svg' },
    ],
    infrastructure: [
      'Seguridad 24/7',
      'Agua potable',
      'Drenaje',
      'Electricidad',
      'Comunicaciones',
      'Acceso pavimentado',
      'Gas natural',
      'Sistema centralizado de protección contra incendios bajo estándares NFPA y FM',
      'Fuerza laboral disponible en la zona',
    ],
    buildings: nelsonIIBuildings,
    hasSpecs: true,
    coordinates: { lat: 32.576968954561124, lng: -115.41184960281856 },
    mapsUrl: 'https://www.google.com/maps?ll=32.576752,-115.41185&z=12&t=h&hl=es-MX&gl=MX&mapclient=embed&cid=15970312143839776453',
    gallery: [
      {
        label: 'Parque',
        images: [
          '/fotos-dron/NELSON II/parque-industrial-nelson-2-1.JPG',
          '/fotos-dron/NELSON II/parque-industrial-nelson-2-2.JPG',
          '/fotos-dron/NELSON II/parque-industrial-nelson-2-3.JPG',
          '/fotos-dron/NELSON II/parque-industrial-nelson-2-4.JPG',
          '/fotos-dron/NELSON II/parque-industrial-nelson-2-5.JPG',
          '/fotos-dron/NELSON II/parque-industrial-nelson-2-6.JPG',
          '/fotos-dron/NELSON II/parque-industrial-nelson-2-7.JPG',
          '/fotos-dron/NELSON II/parque-industrial-nelson-2-8.JPG',
        ],
      },
      {
        label: 'Gulfstream',
        images: [
          '/fotos-dron/NELSON II/nave-gulfstream-en-parque-nelson-2-1.jpg',
          '/fotos-dron/NELSON II/nave-gulfstream-en-parque-nelson-2-2.jpg',
          '/fotos-dron/NELSON II/nave-gulfstream-en-parque-nelson-2-3.jpg',
          '/fotos-dron/NELSON II/nave-gulfstream-en-parque-nelson-2-4.jpg',
          '/fotos-dron/NELSON II/nave-gulfstream-en-parque-nelson-2-5.jpg',
        ],
      },
      {
        label: 'DHL',
        images: [
          '/fotos-dron/NELSON II/nave-dhl-en-parque-nelson-2-1.JPG',
          '/fotos-dron/NELSON II/nave-dhl-en-parque-nelson-2-2.JPG',
          '/fotos-dron/NELSON II/nave-dhl-en-parque-nelson-2-3.JPG',
          '/fotos-dron/NELSON II/nave-dhl-en-parque-nelson-2-4.jpeg',
        ],
      },
      {
        label: 'Direct Pack',
        images: [
          '/fotos-dron/NELSON II/nave-direct-pack-en-parque-nelson-2-1.JPG',
          '/fotos-dron/NELSON II/nave-direct-pack-en-parque-nelson-2-2.JPG',
          '/fotos-dron/NELSON II/nave-direct-pack-en-parque-nelson-2-3.JPG',
        ],
      },
      {
        label: 'Envista',
        images: [
          '/fotos-dron/NELSON II/nave-envista-en-parque-nelson-2-1.JPG',
          '/fotos-dron/NELSON II/nave-envista-en-parque-nelson-2-2.JPG',
          '/fotos-dron/NELSON II/nave-envista-en-parque-nelson-2-3.jpeg',
          '/fotos-dron/NELSON II/nave-envista-en-parque-nelson-2-4.jpeg',
        ],
      },
      {
        label: 'Jonathan',
        images: [
          '/fotos-dron/NELSON II/nave-jonathan-en-parque-nelson-2-1.JPG',
          '/fotos-dron/NELSON II/nave-jonathan-en-parque-nelson-2-2.JPG',
          '/fotos-dron/NELSON II/nave-jonathan-en-parque-nelson-2-3.JPG',
        ],
      },
      {
        label: 'Rheem',
        images: [
          '/fotos-dron/NELSON II/nave-rheem-en-parque-nelson-2-1.jpeg',
          '/fotos-dron/NELSON II/nave-rheem-en-parque-nelson-2-2.jpeg',
        ],
      },
    ],
  },
  {
    slug: 'nelson-i',
    name: 'Parque Industrial Nelson I',
    shortName: 'Nelson I',
    description: 'Centro industrial establecido con más de 50 años de historia',
    heroImage: '/parque-industrial-nelson-1-en-mexicali.jpeg',


    since: 1987,
    location: 'Carretera a San Luis R.C. Km 14',
    landSizeHectares: 27,
    availableBuildings: 0,
    availableAreaM2: 0,
    availableLandM2: 17169.3,
    immediateAvailability: false,
    establishedCompanies: 9,
    // Coordenadas aproximadas — verificar con ubicación real
    coordinates: { lat: 32.550000, lng: -115.393000 },
    infrastructure: [
      'Seguridad 24/7',
      'Agua potable',
      'Drenaje',
      'Electricidad',
      'Comunicaciones',
      'Acceso pavimentado',
      'Gas natural',
      'Guardería del Seguro Social',
      'Clínica del Seguro Social',
      'Fuerza laboral disponible en la zona',
    ],
    buildings: [],
    hasSpecs: false,
  },
  {
    slug: 'vigia-i',
    name: 'Parque Industrial El Vigía I',
    shortName: 'El Vigía I',
    description: 'Ubicación estratégica con infraestructura completa',
    heroImage: '/parque-industrial-el-vigia-1-en-mexicali.jpeg',

    since: 1967,
    location: 'Carretera a San Luis Km. 12.5',
    landSizeHectares: 14,
    establishedCompanies: 11,
    totalBuildings: 16,
    // Coordenadas aproximadas — verificar con ubicación real
    coordinates: { lat: 32.557000, lng: -115.398000 },
    infrastructure: [
      'Seguridad 24/7',
      'Agua potable',
      'Drenaje',
      'Electricidad',
      'Comunicaciones',
      'Acceso pavimentado',
      'Gas natural',
      'Fuerza laboral disponible en la zona',
    ],
    buildings: vigiaIBuildings,
    hasSpecs: true,
  },
  {
    slug: 'vigia-ii',
    name: 'Parque Industrial El Vigía II',
    shortName: 'El Vigía II',
    description: 'Instalaciones modernas con tecnología de punta',
    heroImage: '/parque-industrial-el-vigia-2-en-mexicali.jpeg',

    since: 1997,
    location: 'Carretera a San Luis Km. 12.5',
    address: 'Carretera a San Luis R.C. KM 12, Mexicali B.C.',
    landSizeHectares: 7.5,
    // Coordenadas aproximadas — verificar con ubicación real
    coordinates: { lat: 32.558000, lng: -115.397000 },
    availableBuildings: 1,
    availableAreaM2: 6074.79,
    availableLandM2: 0,
    immediateAvailability: true,
    immediateAvailabilityNote: 'Avisar con 1 mes de anticipación',
    establishedCompanies: 2,
    totalBuildings: 2,
    infrastructure: [
      'Seguridad 24/7',
      'Agua potable',
      'Drenaje',
      'Electricidad',
      'Comunicaciones',
      'Acceso pavimentado',
      'Gas natural',
      'Guardería del Seguro Social',
      'Clínica del Seguro Social',
      'Fuerza laboral disponible en la zona',
    ],
    buildings: vigiaIIBuildings,
    hasSpecs: true,
  },
]

// === HELPERS ===

export function getParkBySlug(slug: string): IndustrialPark | undefined {
  return industrialParks.find((p) => p.slug === slug)
}

export const parkSlugs = industrialParks.map((p) => p.slug)

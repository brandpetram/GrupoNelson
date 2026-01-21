import { FeatureLink, BrandLink } from './types';

export const serviciosDeConveyorsLinks: FeatureLink[] = [
  {
    href: '/conveyors-industriales/mantenimiento',
    name: 'Mantenimiento a Conveyors',
    description: 'Mantenimiento preventivo/correctivo y soporte.',
    iconKey: 'wrench',
  },
  {
    href: '/conveyors-industriales/refacciones',
    name: 'Refacciones y kits',
    description: 'Kits de desgaste y refacciones disponibles.',
    iconKey: 'package',
  },
  {
    href: '/conveyors-industriales/built-to-suit',
    name: 'Sistemas de conveyors built to suit (hechos a medida)',
    description: 'Diseño, fabricación, montaje y puesta en marcha.',
    iconKey: 'ruler',
  },
  {
    href: '/conveyors-industriales/integracion',
    name: 'Integración de nuevas líneas de conveyors',
    description: 'Integración con PLC/HMI y control de procesos.',
    iconKey: 'blocks',
  },
];

// Sectores/Tipos de sistemas para el menú de Conveyors (antes en Header2)
export const sectoresConveyorsLinks: FeatureLink[] = [
  {
    href: '/conveyors-industriales/industria-alimenticia',
    name: 'Para la Industria Alimenticia',
    description: 'Soluciones para alimentos y bebidas (ej. PepsiCo, Mondelez).',
    iconKey: 'package',
  },
  {
    href: '/conveyors-industriales/industria-manufactura',
    name: 'Para Industria Manufacturera',
    description: 'Conveyors para líneas de manufactura (ej. Nemak).',
    iconKey: 'settings',
  },
  {
    href: '/conveyors-industriales/industria-automotriz',
    name: 'Para la Industria Automotriz',
    description: 'Soluciones para plantas y proveedores Tier 1/2.',
    iconKey: 'car',
  },
];

export const conveyorsMarcasLinks: BrandLink[] = [
  {
    href: '/conveyors-industriales/dorner',
    name: 'Dorner',
    description: 'Refacciones y kits para sistemas Dorner',
    logoSrc: '/dorner.svg',
  },
  {
    href: '/conveyors-industriales/flexlink',
    name: 'FlexLink',
    description: 'Refacciones y kits para sistemas FlexLink',
    logoSrc: '/flexlink.svg',
  },
  {
    href: '/conveyors-industriales/rapid-industries',
    name: 'Rapid Industries',
    description: 'Conveyors de alta velocidad para industria',
    logoSrc: '/rapid-industries.svg',
  },
  {
    href: '/conveyors-industriales/pacline',
    name: 'Pacline',
    description: 'Sistemas de conveyors aéreos y de piso',
    logoSrc: '/pacline.svg',
  },
  {
    href: '/conveyors-industriales/tci',
    name: 'TCI',
    description: 'Tecnología avanzada en sistemas de conveyors',
    logoSrc: '/tci-transportadores.svg',
  },
  {
    href: '/conveyors-industriales/ambaflex',
    name: 'Ambaflex',
    description: 'Refacciones y kits para elevadores espirales',
    logoSrc: '/ambaflex.svg',
  },
  {
    href: '/conveyors-industriales/hytrol',
    name: 'Hytrol',
    description: 'Soluciones de conveyors industriales robustos',
    logoSrc: '/hytrol.svg',
  },
  {
    href: '/conveyors-industriales/intralox',
    name: 'Intralox',
    description: 'Refacciones y kits para banda modular Intralox',
    logoSrc: '/intralox.svg',
  },
  {
    href: '/conveyors-industriales/omni-metal-craft',
    name: 'Omni Metal Craft',
    description: 'Fabricación especializada de conveyors metálicos',
    logoSrc: '/omni-metal-craft.svg',
  },
  {
    href: '/conveyors-industriales/octava-soluciones',
    name: 'Octava Soluciones',
    description: 'Soluciones integrales para conveyors industriales',
    logoSrc: '/octava-soluciones.svg',
  },
];

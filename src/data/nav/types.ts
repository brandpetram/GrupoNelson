export type IconKey =
  | 'car'
  | 'settings'
  | 'monitor'
  | 'cpu'
  | 'shield'
  | 'activity'
  | 'radar'
  | 'zap'
  | 'circuit'
  | 'power'
  | 'box'
  | 'battery'
  | 'cable'
  | 'toggle'
  | 'wrench'
  | 'package'
  | 'ruler'
  | 'blocks';

export interface FeatureLink {
  href: string;
  name: string;
  description?: string;
  iconKey: IconKey;
}

export interface BrandLink {
  href: string;
  name: string;
  description?: string;
  logoSrc: string; // ruta del .svg/.webp en /public
}

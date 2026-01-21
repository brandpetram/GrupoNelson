'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoNelson } from '@/components/logo-nelson';
import { LanguageFlags } from '@/components/language-flags';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  ChevronRight,
  ArrowLeft,
  // WHY NELSON icons
  History,
  Star,
  Users,
  Trophy,
  // PARKS icons
  Building2,
  Warehouse,
  Map,
  LayoutGrid,
  // SOLUTIONS icons
  Hammer,
  KeyRound,
  FileText,
  Layers,
  Plane,
  Truck,
  Factory,
  Cpu,
  // EXPERTISE icons
  HardHat,
  Compass,
  Settings,
  Leaf,
  Globe,
  Award,
  // INSIGHTS icons
  Newspaper,
  BookOpen,
  Download,
  Megaphone,
  Calendar,
} from 'lucide-react';
import { useMedia } from '@/hooks/use-media';
import { cn } from '@/lib/utils';

// === Data imports ===
import {
  whyNelsonLinks as whyNelsonLinksData,
  parksMexicaliLinks as parksMexicaliLinksData,
  parksInventoryLinks as parksInventoryLinksData,
  solutionsServicesLinks as solutionsServicesLinksData,
  solutionsIndustryLinks as solutionsIndustryLinksData,
  expertiseCapabilitiesLinks as expertiseCapabilitiesLinksData,
  expertiseStandardsLinks as expertiseStandardsLinksData,
  insightsLearnLinks as insightsLearnLinksData,
  insightsConnectLinks as insightsConnectLinksData,
} from '@/data/nav/navigation';

// === Interfaces ===
interface FeatureLink {
  href: string;
  name: string;
  description?: string;
  icon: React.ReactElement;
}

// === Icon Maps ===
const whyNelsonIconMap: Record<string, React.ReactElement> = {
  history: <History className="size-5 stroke-foreground" />,
  star: <Star className="size-5 stroke-foreground" />,
  users: <Users className="size-5 stroke-foreground" />,
  trophy: <Trophy className="size-5 stroke-foreground" />,
};

const parksIconMap: Record<string, React.ReactElement> = {
  building: <Building2 className="size-5 stroke-foreground" />,
  warehouse: <Warehouse className="size-5 stroke-foreground" />,
  map: <Map className="size-5 stroke-foreground" />,
  grid: <LayoutGrid className="size-5 stroke-foreground" />,
};

const solutionsIconMap: Record<string, React.ReactElement> = {
  hammer: <Hammer className="size-5 stroke-foreground" />,
  key: <KeyRound className="size-5 stroke-foreground" />,
  fileContract: <FileText className="size-5 stroke-foreground" />,
  layers: <Layers className="size-5 stroke-foreground" />,
  plane: <Plane className="size-5 stroke-foreground" />,
  truck: <Truck className="size-5 stroke-foreground" />,
  factory: <Factory className="size-5 stroke-foreground" />,
  cpu: <Cpu className="size-5 stroke-foreground" />,
};

const expertiseIconMap: Record<string, React.ReactElement> = {
  hardHat: <HardHat className="size-5 stroke-foreground" />,
  compass: <Compass className="size-5 stroke-foreground" />,
  settings: <Settings className="size-5 stroke-foreground" />,
  leaf: <Leaf className="size-5 stroke-foreground" />,
  globe: <Globe className="size-5 stroke-foreground" />,
  award: <Award className="size-5 stroke-foreground" />,
};

const insightsIconMap: Record<string, React.ReactElement> = {
  newspaper: <Newspaper className="size-5 stroke-foreground" />,
  bookOpen: <BookOpen className="size-5 stroke-foreground" />,
  download: <Download className="size-5 stroke-foreground" />,
  megaphone: <Megaphone className="size-5 stroke-foreground" />,
  calendar: <Calendar className="size-5 stroke-foreground" />,
};

// === Processed Data ===
const whyNelsonLinks: FeatureLink[] = whyNelsonLinksData.map((item) => ({
  href: item.href,
  name: item.name,
  description: item.description,
  icon: whyNelsonIconMap[item.iconKey] ?? <Star className="size-5 stroke-foreground" />,
}));

const parksMexicaliLinks: FeatureLink[] = parksMexicaliLinksData.map((item) => ({
  href: item.href,
  name: item.name,
  description: item.description,
  icon: parksIconMap[item.iconKey] ?? <Building2 className="size-5 stroke-foreground" />,
}));

const parksInventoryLinks: FeatureLink[] = parksInventoryLinksData.map((item) => ({
  href: item.href,
  name: item.name,
  description: item.description,
  icon: parksIconMap[item.iconKey] ?? <Warehouse className="size-5 stroke-foreground" />,
}));

const solutionsServicesLinks: FeatureLink[] = solutionsServicesLinksData.map((item) => ({
  href: item.href,
  name: item.name,
  description: item.description,
  icon: solutionsIconMap[item.iconKey] ?? <Hammer className="size-5 stroke-foreground" />,
}));

const solutionsIndustryLinks: FeatureLink[] = solutionsIndustryLinksData.map((item) => ({
  href: item.href,
  name: item.name,
  description: item.description,
  icon: solutionsIconMap[item.iconKey] ?? <Factory className="size-5 stroke-foreground" />,
}));

const expertiseCapabilitiesLinks: FeatureLink[] = expertiseCapabilitiesLinksData.map((item) => ({
  href: item.href,
  name: item.name,
  description: item.description,
  icon: expertiseIconMap[item.iconKey] ?? <HardHat className="size-5 stroke-foreground" />,
}));

const expertiseStandardsLinks: FeatureLink[] = expertiseStandardsLinksData.map((item) => ({
  href: item.href,
  name: item.name,
  description: item.description,
  icon: expertiseIconMap[item.iconKey] ?? <Award className="size-5 stroke-foreground" />,
}));

const insightsLearnLinks: FeatureLink[] = insightsLearnLinksData.map((item) => ({
  href: item.href,
  name: item.name,
  description: item.description,
  icon: insightsIconMap[item.iconKey] ?? <Newspaper className="size-5 stroke-foreground" />,
}));

const insightsConnectLinks: FeatureLink[] = insightsConnectLinksData.map((item) => ({
  href: item.href,
  name: item.name,
  description: item.description,
  icon: insightsIconMap[item.iconKey] ?? <Calendar className="size-5 stroke-foreground" />,
}));

// === Mobile Menu Data ===
interface MobileMenuCategory {
  title: string;
  links: FeatureLink[];
}

interface MobileMenuSection {
  name: string;
  categories: MobileMenuCategory[];
}

const mobileMenuData: MobileMenuSection[] = [
  {
    name: 'Nosotros',
    categories: [{ title: 'La Empresa', links: whyNelsonLinks }],
  },
  {
    name: 'Parques',
    categories: [
      { title: 'Mexicali', links: parksMexicaliLinks },
      { title: 'Inventario', links: parksInventoryLinks },
    ],
  },
  {
    name: 'Soluciones',
    categories: [
      { title: 'Servicios', links: solutionsServicesLinks },
      { title: 'Por Industria', links: solutionsIndustryLinks },
    ],
  },
  {
    name: 'Experiencia',
    categories: [
      { title: 'Capacidades', links: expertiseCapabilitiesLinks },
      { title: 'Estándares', links: expertiseStandardsLinks },
    ],
  },
  {
    name: 'Recursos',
    categories: [
      { title: 'Aprender', links: insightsLearnLinks },
      { title: 'Conectar', links: insightsConnectLinks },
    ],
  },
];

// === List Item Component ===
interface ListItemProps {
  href: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

function ListItem({ title, description, children, href }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="grid grid-cols-[auto_1fr] gap-3">
          <div className="bg-muted/50 ring-foreground/10 flex size-10 items-center justify-center rounded-lg ring-1">
            {children}
          </div>
          <div className="space-y-0.5">
            <div className="text-foreground text-sm font-medium">{title}</div>
            {description && (
              <p className="text-muted-foreground line-clamp-2 text-xs leading-none">{description}</p>
            )}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

// === Main Header Component ===
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isLarge = useMedia('(min-width: 64rem)');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        role="banner"
        data-state={isMobileMenuOpen ? 'active' : 'inactive'}
        {...(isScrolled && { 'data-scrolled': true })}
        className="[--color-popover:color-mix(in_oklch,var(--color-muted)_25%,var(--color-background))]"
      >
        {/* Contenedor externo fijo */}
        <div
          className={cn(
            'fixed inset-x-0 top-0 z-50 pt-4 md:pt-6 lg:pt-3',
            !isLarge && !isMobileMenuOpen && 'h-18 md:h-28 max-lg:overflow-hidden max-lg:px-2',
            isMobileMenuOpen && 'max-lg:bg-background/75 max-lg:h-screen max-lg:backdrop-blur max-lg:px-2'
          )}
        >
          {/* Contenedor interno que se encoge con efecto */}
          <div
            className={cn(
              // Estado inicial
              'mx-auto w-full max-w-[1280px] rounded-2xl border border-transparent px-4 lg:px-6',
              'ring-1 ring-transparent shadow-md shadow-transparent',
              'transition-all duration-500 ease-in-out',
              // Estado scroll - SE ENCOGE y aparece fondo
              'in-data-scrolled:max-w-5xl',
              'in-data-scrolled:bg-background/80',
              'in-data-scrolled:backdrop-blur-md',
              'in-data-scrolled:ring-foreground/5',
              'in-data-scrolled:shadow-black/10',
              // Mobile menu activo
              'max-lg:in-data-[state=active]:backdrop-blur',
              'max-lg:in-data-[state=active]:ring-foreground/5',
              'max-lg:in-data-[state=active]:bg-background/80',
              'max-lg:in-data-[state=active]:px-5',
              'max-lg:in-data-[state=active]:shadow-black/10',
              'max-lg:in-data-[state=active]:h-full'
            )}
          >
            <div className="relative lg:py-4">
              {/* Mobile layout */}
              <div
                className={cn(
                  'flex justify-between items-center gap-4 h-14 md:h-20 w-full lg:hidden',
                  isMobileMenuOpen && 'border-b'
                )}
              >
                <Link href="/" aria-label="home" className="flex items-center space-x-2">
                  <LogoNelson variant="auto" width={140} className="scale-100 md:scale-125" />
                </Link>

                {/* Banderas en móvil/tablet */}
                <LanguageFlags size="sm" className="flex-shrink-0" />

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={isMobileMenuOpen ? 'Cerrar Menú' : 'Abrir Menú'}
                  className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 text-white transition-colors duration-300 in-data-scrolled:text-foreground in-data-[state=active]:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className={cn(
                      'm-auto size-6 md:size-8 duration-200 fill-current',
                      isMobileMenuOpen && 'rotate-180 scale-0 opacity-0'
                    )}
                  >
                    <path d="M94.5 10.9v15h-89v-15h89zm-89 46.6h89v-15h-89v15zm0 31.6h89v-15h-89v15z"/>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 99.082 100"
                    className={cn(
                      'absolute inset-0 m-auto size-6 md:size-8 -rotate-180 scale-0 opacity-0 duration-200 fill-current',
                      isMobileMenuOpen && 'rotate-0 scale-100 opacity-100'
                    )}
                  >
                    <path d="M49.54 0C22.198-.019.027 22.375 0 49.973.027 77.618 22.198 100.01 49.54 100c27.352.01 49.521-22.382 49.542-50.027C99.062 22.375 76.892-.019 49.54 0zm0 88.477c-21.037 0-38.095-17.225-38.077-38.504-.021-21.232 17.04-38.463 38.077-38.452 21.047-.01 38.107 17.221 38.131 38.452-.024 21.279-17.084 38.504-38.131 38.504z"/>
                    <path d="m71.57 37.466-9.497-9.496L49.54 40.504 37.006 27.97l-9.497 9.496 12.538 12.541-12.538 12.527 9.497 9.496L49.54 59.496 62.073 72.03l9.497-9.496-12.534-12.527z"/>
                  </svg>
                </button>
              </div>

              {/* Desktop layout - 3 cols en 1024, 4 cols en 1280+ */}
              <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] 1280:grid-cols-[auto_1fr_auto_auto] lg:items-center lg:gap-x-6 1024:gap-x-8">
                {/* Logo - izquierda */}
                <div className="flex justify-start">
                  <Link href="/" aria-label="home" className="flex items-center space-x-2">
                    <LogoNelson variant="auto" width={140} className="scale-100 md:scale-125" />
                  </Link>
                </div>

                {/* Menu - centro */}
                <div className="flex justify-center">
                  <NavMenu />
                </div>

                {/* Banderas - antes del botón (ocultas en 1024) */}
                <div className="hidden 1280:flex justify-end">
                  <LanguageFlags size="md" />
                </div>

                {/* Button - derecha */}
                <div className="flex justify-end">
                  <Button asChild size="sm">
                    <Link href="/contact">
                      <span>Contacto</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {!isLarge && isMobileMenuOpen && (
                <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

// === Mobile Menu with Drill-Down Navigation ===
const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);

  const activeSection = activeSubmenu
    ? mobileMenuData.find((section) => section.name === activeSubmenu)
    : null;

  return (
    <nav role="navigation" className="fixed inset-x-0 top-[4.5rem] md:top-[7rem] lg:top-14 bottom-0 z-40 flex bg-background">
      {/* Main Menu */}
      <div
        className={cn(
          'w-full flex flex-col transition-transform duration-300 ease-in-out',
          activeSubmenu ? '-translate-x-full' : 'translate-x-0'
        )}
      >
        <ul className="flex-1 px-2 py-4">
          {mobileMenuData.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveSubmenu(section.name)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-4 text-lg font-medium hover:bg-muted transition-colors"
              >
                <span>{section.name}</span>
                <ChevronRight className="size-5 text-muted-foreground" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button and Language Flags at bottom */}
        <div className="border-t px-4 py-4 space-y-3">
          <Button asChild size="lg" className="w-full">
            <Link href="/contact" onClick={closeMenu}>
              <span>Contacto</span>
            </Link>
          </Button>

          {/* Banderas en menú móvil */}
          <div className="flex justify-center pt-2">
            <LanguageFlags size="md" />
          </div>
        </div>
      </div>

      {/* Submenu */}
      <div
        className={cn(
          'absolute inset-0 flex flex-col bg-background transition-transform duration-300 ease-in-out',
          activeSubmenu ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Submenu Header */}
        <div className="flex items-center gap-3 border-b px-2 py-3">
          <button
            onClick={() => setActiveSubmenu(null)}
            className="flex items-center gap-2 rounded-lg p-2 hover:bg-muted transition-colors"
            aria-label="Regresar al menú principal"
          >
            <ArrowLeft className="size-5" />
          </button>
          <span className="text-lg font-semibold">{activeSubmenu}</span>
        </div>

        {/* Submenu Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {activeSection?.categories.map((category, catIndex) => (
            <div key={catIndex} className="border-b border-muted last:border-b-0">
              <div className="sticky top-0 bg-muted/50 backdrop-blur-sm px-4 py-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {category.title}
                </h3>
              </div>
              <ul className="px-2 py-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-muted transition-colors"
                    >
                      <div
                        aria-hidden
                        className="flex items-center justify-center *:size-5 text-muted-foreground"
                      >
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-base font-medium">{link.name}</div>
                        {link.description && (
                          <div className="text-sm text-muted-foreground line-clamp-1">
                            {link.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

// === Desktop Navigation Menu ===
const NavMenu = () => {
  return (
    <NavigationMenu
        className={cn(
          'max-lg:hidden',
          // Estilos base del trigger
          '**:data-[slot=navigation-menu-trigger]:text-sm **:data-[slot=navigation-menu-trigger]:uppercase **:data-[slot=navigation-menu-trigger]:tracking-wide **:data-[slot=navigation-menu-trigger]:font-semibold',
          // Colores sin scroll (fondo oscuro)
          '**:data-[slot=navigation-menu-trigger]:text-white/90',
          '**:data-[slot=navigation-menu-trigger]:hover:text-white **:data-[slot=navigation-menu-trigger]:hover:bg-white/10',
          '**:data-[slot=navigation-menu-trigger]:data-[state=open]:text-white **:data-[slot=navigation-menu-trigger]:data-[state=open]:bg-white/10',
          // Colores con scroll (fondo claro)
          '**:data-[slot=navigation-menu-trigger]:in-data-scrolled:text-muted-foreground',
          '**:data-[slot=navigation-menu-trigger]:in-data-scrolled:hover:text-foreground **:data-[slot=navigation-menu-trigger]:in-data-scrolled:hover:bg-foreground/5',
          '**:data-[slot=navigation-menu-trigger]:in-data-scrolled:data-[state=open]:text-foreground **:data-[slot=navigation-menu-trigger]:in-data-scrolled:data-[state=open]:bg-foreground/5',
          // Transición
          '**:data-[slot=navigation-menu-trigger]:transition-colors **:data-[slot=navigation-menu-trigger]:duration-300'
        )}
      >
      <NavigationMenuList className="gap-1">
        {/* NOSOTROS - 2 columnas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[620px] pr-[1.5px]">
              <div className="bg-card ring-foreground/5 rounded-[calc(var(--radius)-2px)] border border-transparent p-4 shadow ring-1">
                <div className="grid grid-cols-[45%_55%] gap-4 pr-4">
                  {/* La Empresa links */}
                  <div>
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      La Empresa
                    </span>
                    <ul className="mt-3 space-y-1">
                      {whyNelsonLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          href={item.href}
                          title={item.name}
                          description={item.description}
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  {/* Visual content placeholder */}
                  <div className="flex items-center justify-center rounded-lg bg-blue-600 p-4">
                    <div className="text-center">
                      <p className="text-white text-sm font-medium">Visual content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* PARQUES - 2 columnas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Parques</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[620px] pr-[1.5px]">
              <div className="bg-card ring-foreground/5 rounded-[calc(var(--radius)-2px)] border border-transparent p-4 shadow ring-1">
                <div className="grid grid-cols-2 gap-6 divide-x divide-foreground/10">
                  {/* Mexicali */}
                  <div className="pr-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Mexicali
                    </span>
                    <ul className="mt-3 space-y-1">
                      {parksMexicaliLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          href={item.href}
                          title={item.name}
                          description={item.description}
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  {/* Inventario */}
                  <div className="pl-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Inventario
                    </span>
                    <ul className="mt-3 space-y-1">
                      {parksInventoryLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          href={item.href}
                          title={item.name}
                          description={item.description}
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* SOLUCIONES - 2 columnas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Soluciones</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[620px] pr-[1.5px]">
              <div className="bg-card ring-foreground/5 rounded-[calc(var(--radius)-2px)] border border-transparent p-4 shadow ring-1">
                <div className="grid grid-cols-2 gap-6 divide-x divide-foreground/10">
                  {/* Servicios */}
                  <div className="pr-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Servicios
                    </span>
                    <ul className="mt-3 space-y-1">
                      {solutionsServicesLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          href={item.href}
                          title={item.name}
                          description={item.description}
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  {/* Por Industria */}
                  <div className="pl-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Por Industria
                    </span>
                    <ul className="mt-3 space-y-1">
                      {solutionsIndustryLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          href={item.href}
                          title={item.name}
                          description={item.description}
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* EXPERIENCIA - 2 columnas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Experiencia</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[620px] pr-[1.5px]">
              <div className="bg-card ring-foreground/5 rounded-[calc(var(--radius)-2px)] border border-transparent p-4 shadow ring-1">
                <div className="grid grid-cols-2 gap-6 divide-x divide-foreground/10">
                  {/* Capacidades */}
                  <div className="pr-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Capacidades
                    </span>
                    <ul className="mt-3 space-y-1">
                      {expertiseCapabilitiesLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          href={item.href}
                          title={item.name}
                          description={item.description}
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  {/* Estándares */}
                  <div className="pl-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Estándares
                    </span>
                    <ul className="mt-3 space-y-1">
                      {expertiseStandardsLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          href={item.href}
                          title={item.name}
                          description={item.description}
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* RECURSOS - 2 columnas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[620px] pr-[1.5px]">
              <div className="bg-card ring-foreground/5 rounded-[calc(var(--radius)-2px)] border border-transparent p-4 shadow ring-1">
                <div className="grid grid-cols-2 gap-6 divide-x divide-foreground/10">
                  {/* Aprender */}
                  <div className="pr-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Aprender
                    </span>
                    <ul className="mt-3 space-y-1">
                      {insightsLearnLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          href={item.href}
                          title={item.name}
                          description={item.description}
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  {/* Conectar */}
                  <div className="pl-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Conectar
                    </span>
                    <ul className="mt-3 space-y-1">
                      {insightsConnectLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          href={item.href}
                          title={item.name}
                          description={item.description}
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

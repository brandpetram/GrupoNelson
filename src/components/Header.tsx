'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoNelson } from '@/components/logo-nelson';
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
  Menu,
  X,
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
    name: 'Why Nelson',
    categories: [{ title: 'The Company', links: whyNelsonLinks }],
  },
  {
    name: 'Parks',
    categories: [
      { title: 'Mexicali', links: parksMexicaliLinks },
      { title: 'Inventory', links: parksInventoryLinks },
    ],
  },
  {
    name: 'Solutions',
    categories: [
      { title: 'Services', links: solutionsServicesLinks },
      { title: 'By Industry', links: solutionsIndustryLinks },
    ],
  },
  {
    name: 'Expertise',
    categories: [
      { title: 'Capabilities', links: expertiseCapabilitiesLinks },
      { title: 'Standards', links: expertiseStandardsLinks },
    ],
  },
  {
    name: 'Insights',
    categories: [
      { title: 'Learn', links: insightsLearnLinks },
      { title: 'Connect', links: insightsConnectLinks },
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
              <p className="text-muted-foreground line-clamp-2 text-xs">{description}</p>
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
            'fixed inset-x-0 top-0 z-50 pt-2 lg:pt-3',
            !isLarge && 'max-lg:h-18 max-lg:overflow-hidden max-lg:px-2',
            isMobileMenuOpen && 'max-lg:bg-background/75 max-lg:h-screen max-lg:backdrop-blur'
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
              'max-lg:in-data-[state=active]:shadow-black/10'
            )}
          >
            <div className="relative flex flex-wrap items-center justify-between lg:py-4">
              <div
                className={cn(
                  'flex justify-between gap-8 max-lg:h-14 max-lg:w-full',
                  isMobileMenuOpen && 'max-lg:border-b'
                )}
              >
                <Link href="/" aria-label="home" className="flex items-center space-x-2">
                  <LogoNelson variant="auto" width={140} />
                </Link>

                {isLarge && <NavMenu />}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={isMobileMenuOpen ? 'Cerrar Menú' : 'Abrir Menú'}
                  className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden text-white transition-colors duration-300 in-data-scrolled:text-foreground in-data-[state=active]:text-foreground"
                >
                  <Menu
                    className={cn(
                      'm-auto size-5 duration-200',
                      isMobileMenuOpen && 'rotate-180 scale-0 opacity-0'
                    )}
                  />
                  <X
                    className={cn(
                      'absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200',
                      isMobileMenuOpen && 'rotate-0 scale-100 opacity-100'
                    )}
                  />
                </button>
              </div>

              {!isLarge && isMobileMenuOpen && (
                <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
              )}

              {/* Desktop CTA button - solo en lg */}
              <div className="hidden lg:flex lg:items-center lg:gap-3">
                <Button asChild size="sm">
                  <Link href="/contact">
                    <span>Contact</span>
                  </Link>
                </Button>
              </div>
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
    <nav role="navigation" className="fixed inset-x-0 top-14 bottom-0 z-40 flex bg-background">
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

        {/* CTA Button at bottom */}
        <div className="border-t px-4 py-4 space-y-3">
          <Button asChild size="lg" className="w-full">
            <Link href="/contact" onClick={closeMenu}>
              <span>Contact</span>
            </Link>
          </Button>
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
          '**:data-[slot=navigation-menu-viewport]:left-8 **:data-[slot=navigation-menu-viewport]:top-3 max-lg:hidden',
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
        {/* WHY NELSON - Columna única */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Why Nelson</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[320px] pr-[1.5px]">
              <div className="bg-card ring-foreground/5 rounded-[calc(var(--radius)-2px)] border border-transparent p-4 shadow ring-1">
                <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                  The Company
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
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* PARKS - 2 columnas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Parks</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[580px] pr-[1.5px]">
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
                  {/* Inventory */}
                  <div className="pl-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Inventory
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

        {/* SOLUTIONS - 2 columnas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[620px] pr-[1.5px]">
              <div className="bg-card ring-foreground/5 rounded-[calc(var(--radius)-2px)] border border-transparent p-4 shadow ring-1">
                <div className="grid grid-cols-2 gap-6 divide-x divide-foreground/10">
                  {/* Services */}
                  <div className="pr-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Services
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
                  {/* By Industry */}
                  <div className="pl-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      By Industry
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

        {/* EXPERTISE - 2 columnas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Expertise</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[580px] pr-[1.5px]">
              <div className="bg-card ring-foreground/5 rounded-[calc(var(--radius)-2px)] border border-transparent p-4 shadow ring-1">
                <div className="grid grid-cols-2 gap-6 divide-x divide-foreground/10">
                  {/* Capabilities */}
                  <div className="pr-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Capabilities
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
                  {/* Standards */}
                  <div className="pl-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Standards
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

        {/* INSIGHTS - 2 columnas */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0.5">
            <div className="w-[520px] pr-[1.5px]">
              <div className="bg-card ring-foreground/5 rounded-[calc(var(--radius)-2px)] border border-transparent p-4 shadow ring-1">
                <div className="grid grid-cols-2 gap-6 divide-x divide-foreground/10">
                  {/* Learn */}
                  <div className="pr-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Learn
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
                  {/* Connect */}
                  <div className="pl-6">
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      Connect
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

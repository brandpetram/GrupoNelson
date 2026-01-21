import Image from 'next/image';
import Link from 'next/link';

// Datos de marcas - editar directamente aquí
const marcas = [
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

];

export function LogosMarcas() {
  return (
    <section className="container pt-12 ">
      {/* Título - editar aquí */}
      <p className="text-muted-foreground text-2xl 1024:text-3xl text-balance mb-6">
        Marcas de conveyors con las que trabajamos:
      </p>

      {/* Grid de marcas con líneas divisorias internas */}
      <ul className="grid grid-cols-2 md:grid-cols-2 1200:grid-cols-3 gap-px bg-foreground/10">
        {marcas.map((marca, index) => (
          <li key={index} className="bg-background">
            <Link
              href={marca.href}
              className="group flex items-start gap-3 p-4 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 transition-all"
            >
              {/* Logo */}
              <div className="bg-background ring-foreground/10 flex size-12 shrink-0 items-center justify-center rounded-md shadow-sm ring-1 group-hover:bg-white group-hover:ring-white">
                <Image
                  src={marca.logoSrc}
                  alt={marca.name}
                  width={32}
                  height={32}
                  className="w-auto h-auto max-w-8 max-h-8"
                />
              </div>

              {/* Texto */}
              <div className="space-y-0.5 min-w-0 max-w-32">
                <div className="text-foreground text-sm font-medium truncate group-hover:text-white">
                  {marca.name}
                </div>
                <p className="text-muted-foreground line-clamp-2 text-xs group-hover:text-white/80">
                  {marca.description}
                </p>
              </div>
            </Link>
          </li>
        ))}

        {/* Botón CTA - Solo visible en móvil/tablet (2 columnas) */}
        <li className="bg-background 1200:hidden">
          <div className="flex h-full items-center justify-center p-6">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors"
            >
              Cotizar
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
}

// Variante compacta - solo logos en grid más denso
export function LogosMarcasCompacto() {
  return (
    <section className="container mx-auto w-11/12 lg:max-w-6xl py-12">
      <p className="text-muted-foreground text-sm mb-6">
        Marcas con las que trabajamos
      </p>

      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {marcas.map((marca, index) => (
          <li key={index}>
            <Link
              href={marca.href}
              className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="bg-background ring-foreground/10 relative flex size-14 items-center justify-center rounded-md border border-transparent shadow-sm ring-1 group-hover:ring-foreground/20 group-hover:scale-105 transition-all">
                <Image
                  src={marca.logoSrc}
                  alt={marca.name}
                  width={40}
                  height={40}
                  className="w-auto h-auto max-w-10 max-h-10"
                />
              </div>
              <span className="text-foreground text-xs font-medium text-center truncate w-full">
                {marca.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Variante con fondo - para secciones destacadas
export function LogosMarcasDestacado() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto w-11/12 lg:max-w-6xl">
        <p className="text-muted-foreground text-sm mb-8">
          Marcas con las que trabajamos
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {marcas.map((marca, index) => (
            <li key={index}>
              <Link
                href={marca.href}
                className="group flex flex-col bg-background rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
              >
                {/* Logo centrado */}
                <div className="flex items-center justify-center h-16 mb-3">
                  <Image
                    src={marca.logoSrc}
                    alt={marca.name}
                    width={48}
                    height={48}
                    className="w-auto h-auto max-w-12 max-h-12 group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Texto */}
                <div className="text-center">
                  <div className="text-foreground text-sm font-medium">
                    {marca.name}
                  </div>
                  <p className="text-muted-foreground line-clamp-1 text-xs mt-1">
                    {marca.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { LogoNelson } from '@/components/logo-nelson';

// Social media icons
const TwitterIcon = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

// Footer data structure
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterColumn {
  heading: string;
  sections: FooterSection[];
}

const footerData: FooterColumn[] = [
  {
    heading: 'Productos',
    sections: [
      {
        title: 'Plataforma',
        links: [
          { label: 'Lorem Ipsum', href: '#' },
          { label: 'Dolor Sit Amet', href: '#' },
          { label: 'Consectetur', href: '#' },
          { label: 'Adipiscing Elit', href: '#' },
        ],
      },
      {
        title: 'Soluciones',
        links: [
          { label: 'Sed Do Eiusmod', href: '#' },
          { label: 'Tempor Incididunt', href: '#' },
          { label: 'Ut Labore', href: '#' },
        ],
      },
    ],
  },
  {
    heading: 'Servicios',
    sections: [
      {
        title: 'Consultoría',
        links: [
          { label: 'Magna Aliqua', href: '#' },
          { label: 'Enim Ad Minim', href: '#' },
          { label: 'Veniam Quis', href: '#' },
          { label: 'Nostrud Exercitation', href: '#' },
          { label: 'Ullamco Laboris', href: '#' },
        ],
      },
      {
        title: 'Soporte',
        links: [
          { label: 'Nisi Ut Aliquip', href: '#' },
          { label: 'Ex Ea Commodo', href: '#' },
          { label: 'Consequat Duis', href: '#' },
        ],
      },
    ],
  },
  {
    heading: 'Industrias',
    sections: [
      {
        title: 'Sectores',
        links: [
          { label: 'Aute Irure Dolor', href: '#' },
          { label: 'In Reprehenderit', href: '#' },
          { label: 'Voluptate Velit', href: '#' },
          { label: 'Esse Cillum', href: '#' },
          { label: 'Dolore Eu Fugiat', href: '#' },
          { label: 'Nulla Pariatur', href: '#' },
        ],
      },
    ],
  },
  {
    heading: 'Recursos',
    sections: [
      {
        title: 'Aprendizaje',
        links: [
          { label: 'Excepteur Sint', href: '#' },
          { label: 'Occaecat Cupidatat', href: '#' },
          { label: 'Non Proident', href: '#' },
          { label: 'Sunt In Culpa', href: '#' },
        ],
      },
      {
        title: 'Comunidad',
        links: [
          { label: 'Qui Officia', href: '#' },
          { label: 'Deserunt Mollit', href: '#' },
          { label: 'Anim Id Est', href: '#' },
        ],
      },
    ],
  },
  {
    heading: 'Empresa',
    sections: [
      {
        title: 'Nosotros',
        links: [
          { label: 'Laborum Lorem', href: '#' },
          { label: 'Ipsum Dolor', href: '#' },
          { label: 'Sit Amet', href: '#' },
        ],
      },
      {
        title: 'Carreras',
        links: [
          { label: 'Consectetur Elit', href: '#' },
          { label: 'Sed Eiusmod', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Tempor Magna', href: '#' },
          { label: 'Aliqua Enim', href: '#' },
        ],
      },
    ],
  },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Twitter', href: '#', icon: TwitterIcon },
  { name: 'YouTube', href: '#', icon: YouTubeIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
];

const legalLinks = [
  { label: 'Aviso de Privacidad', href: '#' },
  { label: 'Términos de Uso', href: '#' },
  { label: 'Política de Cookies', href: '#' },
  { label: 'Configuración de Privacidad', href: '#' },
];

export default function Footer1() {
  return (
    <footer className="bg-[#000000] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-6 xl:gap-8">
          {/* Logo Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <LogoNelson variant="white" width={160} />
            </Link>
          </div>

          {/* Link Columns */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-5 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {footerData.slice(0, 3).map((column) => (
                <div key={column.heading} className="mt-10 md:mt-0 first:mt-0">
                  <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
                  <div className="mt-6 space-y-6">
                    {column.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-xs font-medium uppercase tracking-wider text-gray-400">
                          {section.title}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerData.slice(3, 5).map((column) => (
                <div key={column.heading} className="mt-10 md:mt-0 first:mt-0">
                  <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
                  <div className="mt-6 space-y-6">
                    {column.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-xs font-medium uppercase tracking-wider text-gray-400">
                          {section.title}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Company Info */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
              {/* Logo */}
              <Link href="/" className="inline-block">
                <LogoNelson variant="white" width={120} />
              </Link>

              {/* Address */}
              <div className="text-sm text-gray-400">
                <p>Lorem Ipsum Inc.</p>
                <p>123 Dolor Street, Suite 456</p>
                <p>Consectetur, CA 12345</p>
                <p>1-800-123-4567</p>
              </div>
            </div>

            {/* Social Links and Careers */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </Link>
                ))}
              </div>

              {/* Careers Link */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Ver Carreras
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Copyright */}
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Lorem Ipsum. Todos los derechos reservados.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-4">
                  <Link
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

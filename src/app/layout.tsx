import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { VercelToolbar } from "@vercel/toolbar/next";
import { DevOverlay } from "@/components/ui/dev-label";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Grupo Nelson — Parques Industriales en Mexicali',
    template: '%s | Grupo Nelson',
  },
  description: 'Desarrollo industrial con más de 60 años de experiencia en Mexicali. Parques industriales, construcción build-to-suit, naves industriales y terrenos disponibles.',
  metadataBase: new URL('https://www.nelson.com.mx'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Grupo Nelson',
    title: 'Grupo Nelson — Parques Industriales en Mexicali',
    description: 'Desarrollo industrial con más de 60 años de experiencia en Mexicali. Parques industriales, construcción build-to-suit, naves industriales y terrenos disponibles.',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Grupo Nelson',
  alternateName: ['Grupo Nelson Industrial', 'Nelson Industrial Parks'],
  url: 'https://www.nelson.com.mx',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Grupo Nelson',
  url: 'https://www.nelson.com.mx',
  logo: 'https://www.nelson.com.mx/logo-nelson.svg',
  description:
    'Industrial park developer in Mexicali, Baja California with over 60 years of experience. Operator of Nelson II, El Vigía I, and El Vigía II industrial parks.',
  foundingDate: '1967',
  telephone: '+52-686-553-4088',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ave. Reforma #1699, Col. Nueva',
    addressLocality: 'Mexicali',
    addressRegion: 'Baja California',
    postalCode: '21100',
    addressCountry: 'MX',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "development" && <><DevOverlay /><VercelToolbar /></>}
      </body>
    </html>
  );
}

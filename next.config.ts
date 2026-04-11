import type { NextConfig } from "next";
import createWithVercelToolbar from "@vercel/toolbar/plugins/next";

const withVercelToolbar = createWithVercelToolbar();

const nextConfig: NextConfig = {
  transpilePackages: ['@brandpetram/componentes-2026'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui.shadcn.com',
      },
      {
        protocol: 'https',
        hostname: 'img.brandpetram.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'www.orbentech.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      // Temporal: raíz y /en redirigen a español hasta que existan páginas inglés
      { source: '/', destination: '/es', permanent: false },
      { source: '/en', destination: '/es', permanent: false },
      { source: '/en/:path*', destination: '/es', permanent: false },

      // Redirects de WordPress legacy → /es
      { source: '/web', destination: '/es', permanent: true },
      { source: '/web/:path*', destination: '/es', permanent: true },
      { source: '/wp-content/uploads/2019/07/Specs-Building-Nelson-II-7Sept18.pdf', destination: '/es/parques-industriales-mexicali/nelson-ii', permanent: true },
      { source: '/wp-content/uploads/2024/06/Specs-Nave-1-Vigia-II.pdf', destination: '/es/parques-industriales-mexicali/vigia-ii', permanent: true },
      { source: '/wp-content/uploads/2019/02/Terreno-Lit-On.pdf', destination: '/es/inventario/terrenos', permanent: true },
      { source: '/wp-content/uploads/:path*', destination: '/es', permanent: true },

      // Redirects 301: rutas españolas viejas → /es/*
      { source: '/nelson/:path*', destination: '/es/nelson/:path*', permanent: true },
      { source: '/parques-industriales-mexicali/:path*', destination: '/es/parques-industriales-mexicali/:path*', permanent: true },
      { source: '/constructora/:path*', destination: '/es/constructora/:path*', permanent: true },
      { source: '/experiencia/:path*', destination: '/es/experiencia/:path*', permanent: true },
      { source: '/inventario/:path*', destination: '/es/inventario/:path*', permanent: true },
      { source: '/blog/:path*', destination: '/es/blog/:path*', permanent: true },
      { source: '/noticias/:path*', destination: '/es/noticias/:path*', permanent: true },
      { source: '/contacto', destination: '/es/contacto', permanent: true },
      { source: '/contactanos', destination: '/es/contactanos', permanent: true },
      { source: '/gracias', destination: '/es/gracias', permanent: true },
      { source: '/recursos', destination: '/es/recursos', permanent: true },
      { source: '/aviso-de-privacidad', destination: '/es/aviso-de-privacidad', permanent: true },
      { source: '/terminos', destination: '/es/terminos', permanent: true },
      { source: '/politica-de-cookies', destination: '/es/politica-de-cookies', permanent: true },
    ]
  },
  async headers() {
    const cacheHeaders = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
    return [
      { source: '/:path*.mp4',  headers: cacheHeaders },
      { source: '/:path*.jpg',  headers: cacheHeaders },
      { source: '/:path*.jpeg', headers: cacheHeaders },
      { source: '/:path*.png',  headers: cacheHeaders },
      { source: '/:path*.webp', headers: cacheHeaders },
      { source: '/:path*.avif', headers: cacheHeaders },
      { source: '/:path*.svg',  headers: cacheHeaders },
    ]
  },
};

export default withVercelToolbar(nextConfig);

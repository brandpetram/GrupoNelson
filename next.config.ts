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
      {
        source: '/web',
        destination: '/',
        permanent: true,
      },
      {
        source: '/web/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2019/07/Specs-Building-Nelson-II-7Sept18.pdf',
        destination: '/parques-industriales-mexicali/nelson-ii',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2024/06/Specs-Nave-1-Vigia-II.pdf',
        destination: '/parques-industriales-mexicali/vigia-ii',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2019/02/Terreno-Lit-On.pdf',
        destination: '/inventario/terrenos',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/:path*',
        destination: '/',
        permanent: true,
      },
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

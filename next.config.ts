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
    return []
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

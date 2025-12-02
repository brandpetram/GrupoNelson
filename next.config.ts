import type { NextConfig } from "next";

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
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.openstreetmap.org',
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;

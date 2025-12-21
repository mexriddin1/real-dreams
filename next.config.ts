import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', '127.0.0.1', 'http://185.191.141.85:8080'],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://185.191.141.85:8080/:path*",
      },
    ];
  },
};

export default nextConfig;

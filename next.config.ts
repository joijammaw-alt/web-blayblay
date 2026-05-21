import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/blayblay',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
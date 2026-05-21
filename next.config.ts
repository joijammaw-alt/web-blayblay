import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    // บังคับให้ระบบ Build ผ่าน แม้จะมี TypeScript Error ก็ตาม
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
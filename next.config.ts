import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // ลบ basePath ออก เพื่อให้เว็บเข้าหน้าแรกได้เลย ไม่ต้องมี /blayblay ต่อท้าย
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
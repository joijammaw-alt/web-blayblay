import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: "/blayblay", // เพิ่มบรรทัดนี้เพื่อให้แอปรับรู้ว่าตัวเองอยู่ที่ /blayblay
  trailingSlash: true,    // ช่วยให้การจัดการ Path ผ่าน Proxy เสถียรขึ้น
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
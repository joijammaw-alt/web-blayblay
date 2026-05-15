import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // แก้ไขจาก '/blayblay.com' หรือ '/home' เป็น '/blayblay'
  basePath: '/blayblay', 
};

export default nextConfig;
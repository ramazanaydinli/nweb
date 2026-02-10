import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Statik HTML çıktısı almak için bu satır şart:
  output: 'export',

  // 2. GitHub Pages'de resim optimizasyonu sunucusu olmadığı için bunu kapatmalıyız:
  images: {
    unoptimized: true,
  },
  
  // Not: Özel domain (odtuluakademi.com.tr) kullanacağın için basePath ayarına gerek yok!
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Statik HTML çıktısı için şart
  
  // basePath SİLİNDİ (Özel domainde buna gerek yok)
  
  images: {
    unoptimized: true, // Next.js Image optimizasyonunu kapatır
  },
};

export default nextConfig;
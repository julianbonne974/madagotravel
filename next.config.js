/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Désactiver les composants React stricts pour éviter les doubles rendus en dev
  reactStrictMode: true,
}

module.exports = nextConfig

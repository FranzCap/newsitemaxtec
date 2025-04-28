// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['maxtec.com.br'],
    unoptimized: true,
  },
  // Para exportação estática quando necessário
  // output: 'export',
};

module.exports = nextConfig;

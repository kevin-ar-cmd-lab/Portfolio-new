/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    scrollRestoration: true,
  },

  images: {
    unoptimized: !isProd,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kevinjuma.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;

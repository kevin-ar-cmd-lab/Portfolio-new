/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    scrollRestoration: true,
  },

  images: {
    unoptimized: !isProd,
    domains: [
      'www.kevinjuma.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;

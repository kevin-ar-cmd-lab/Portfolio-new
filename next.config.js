/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    scrollRestoration: true,
  },

  images: {
    unoptimized: !isProd, // OFF locally, ON in production
    domains: ['www.kevinjuma.com'],
  },
};

module.exports = nextConfig;

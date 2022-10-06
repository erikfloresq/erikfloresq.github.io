/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/blog/mi-primer-wwdc': { page: '/blog/[slug]' },
      '/blog/uisearchcontroller': { page: '/blog/[slug]' },
      '/blog/usar-json-unittest-spm': { page: '/blog/[slug]' },
    }
  },
}

module.exports = withContentlayer(nextConfig)
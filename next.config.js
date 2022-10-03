/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/a/mi-primer-wwdc': { page: '/article', query: { title: 'mi-primer-wwdc' } },
      '/a/ui-search-viewcontroller': { page: '/article', query: { title: 'ui-search-viewcontroller' } },
      '/a/usar-json-unittest-spm': { page: '/article', query: { title: 'usar-json-unittest-spm' } },
    }
  },
}

module.exports = withContentlayer(nextConfig)
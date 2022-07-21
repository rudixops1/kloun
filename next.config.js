/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.']
  },
  poweredByHeader: false,
  trailingSlash: true,
  generateEtags: false,
  // basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true, // was true
  experimental: {
    images: {
      unoptimized: true
    }
    // runtime: 'experimental-edge',
  },
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'img.pr0gramm.com',
      'thumb.pr0gramm.com',
      'nstatic.nova.bg',
      'm.netinfo.bg',
      'static.dir.bg'
    ]
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right'
  }
});

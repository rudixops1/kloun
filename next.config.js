/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  env: {
    // dir: __dirname,
  },
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
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
      unoptimized: true,
    },
  },

  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
}

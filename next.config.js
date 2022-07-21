/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src']
  },

  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'img.pr0gramm.com',
      'thumb.pr0gramm.com',
      'nstatic.nova.bg',
      'm.netinfo.bg',
      'static.dir.bg'
    ]
  },

  // SVGR

  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true
          }
        }
      ]
    });

    return config;
  }
};

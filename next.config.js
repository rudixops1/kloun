const headers = [
  {
    key: 'Cache-Control',
    value: 'public, s-maxage=10, stale-while-revalidate=59',
  },
  {
    key: 'x-powered-by',
    value: 'RudixOps',
  },
];
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'img.pr0gramm.com',
      'thumb.pr0gramm.com',
      'nstatic.nova.bg',
      'm.netinfo.bg',
      'static.dir.bg',
    ],
  },
  async headers () {
    return [
      {
        source: '/joke/:id',
        headers,
      },
      {
        source: '/news/:id',
        headers,
      },
    ];
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

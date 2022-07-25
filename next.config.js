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

const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  env: {
    AWS_REGION: process.env.AWS_REGION,
  },
  trailingSlash: true,
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'img.pr0gramm.com',
      'thumb.pr0gramm.com',
      'nstatic.nova.bg',
      'm.netinfo.bg',
      'static.dir.bg',
      'klounda-s3.s3.us-east-1.amazonaws.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/joke/:id',
        headers,
      },
      {
        source: '/news/:slug/:id',
        headers,
      },
    ];
  },
  webpack(config) {
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
module.exports = nextConfig;

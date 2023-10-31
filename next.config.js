/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
    emotion: {
      sourceMap: true,
      labelFormat: '[local]',
    },
  },
  transpilePackages: ['@chakra-ui', 'lodash'],
  modularizeImports: {
    '@chakra-ui': {
      transform: '@chakra-ui/{{member}}',
    },
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const TerserPlugin = require('terser-webpack-plugin');
      config.optimization.minimizer.push(new TerserPlugin());
    }

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: process.env.NEXT_PUBLIC_REST_API_URL + '/' + ':slug*',
      },
    ];
  },
};

module.exports = nextConfig;

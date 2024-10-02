import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  basePath: '',
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'photos.applyboard.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'img.youtube.com',
      // },
    ],
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);

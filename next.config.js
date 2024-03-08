/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
  output: 'export',
  images: {
    unoptimized: true,
  }
}
module.exports = nextConfig
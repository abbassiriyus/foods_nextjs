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
      {
        source: '/menudetail/:id',
        destination: '/menudetail/[id]',
      },
      {
        source: '/oneuser/:id',
        destination: '/oneuser/[id]',
      },
    ];
  },
  
  output: 'export',
  images: {
    unoptimized: true,
  }, 
  trailingSlash: true,
}
module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/_next/:path',
          has: [
            {
              type: 'host',
              value: 'bella.daughter.of.gregorydbarker.com',
            },
          ],
          destination: '/_next/:path',
        },
        {
          source: '/images/:path',
          has: [
            {
              type: 'host',
              value: 'bella.daughter.of.gregorydbarker.com',
            },
          ],
          destination: '/images/:path',
        },
        {
          source: '/:path((?!_next).*)',
          has: [
            {
              type: 'host',
              value: 'bella.daughter.of.gregorydbarker.com',
            },
          ],
          destination: '/bella/:path*',
        },
      ]
    }
  }
}

module.exports = nextConfig

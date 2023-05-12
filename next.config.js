/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
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
  },
}

module.exports = nextConfig

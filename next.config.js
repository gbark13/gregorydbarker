/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'bella.daughter.of.gregorydbarker.com',
            },
          ],
          destination: '/bella/:path*',
        },
      ],
      fallback: [
        {
          source: '/:path*',
          destination: '/:path*',
        },
      ],
    }
  }
}

module.exports = nextConfig

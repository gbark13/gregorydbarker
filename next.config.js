/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'bella.daughter.of.gregorydbarker.com',
            },
          ],
          destination: '/bella/src/app/:path*',
        },
      ]
    }
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/mysubdomain/:path*',
        destination: 'https://mysubdomain.mydomain.com/:path*'
      }
    ];
  }
}

module.exports = nextConfig

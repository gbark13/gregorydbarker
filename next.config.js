/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/bella/:path*',
        destination: 'https://bella.daughter.of.gregorydbarker.com/:path*'
      }
    ];
  }
}

module.exports = nextConfig

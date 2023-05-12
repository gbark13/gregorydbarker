/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'bella.daughter.of.gregorydbarker.com',
          },
        ],
        destination: '/bella/:path*',
      }
    ];
  },
  webpack: (config) => {
    // Add your app directory to the module search path
    config.resolve.modules.push(path.resolve(__dirname, 'src'));

    return config;
  },
}

module.exports = nextConfig

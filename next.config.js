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
          destination: (req, res) => {
            const subdomain = req.headers.host.split('.')[0];
            const path = req.params.path.join('/');
            const shouldRedirect = !path.startsWith('_next') && !path.startsWith('public');
  
            if (subdomain !== 'www' && shouldRedirect) {
              return { destination: `/${subdomain}/${path}` };
            }
  
            return null;
          }
        },
      ]
    }
  }
}

module.exports = nextConfig

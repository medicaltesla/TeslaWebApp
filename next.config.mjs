/** @type {import('next').NextConfig} */
const nextConfig = {
    // typescript: {
    //   ignoreBuildErrors: true,
    // },
    async headers() {
      return [
        {
          source: '/api(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: '*',
            },
            // Add any other headers needed for GTM here
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  
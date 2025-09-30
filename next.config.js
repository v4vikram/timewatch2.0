/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: [
      'http://localhost:3001',
      'storage.googleapis.com',
      'https://timewatch2-0-311005204045.europe-west1.run.app'
    ],
    remotePatterns: [
      {
        protocol: 'http', 
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;





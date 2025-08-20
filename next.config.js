// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '3001',
//         pathname: '/**',
//       },
//     ],
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/api/backend/:path*',
//         destination: 'http://localhost:3001/api/:path*',
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: [
      'http://localhost:3001',
      'storage.googleapis.com'
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





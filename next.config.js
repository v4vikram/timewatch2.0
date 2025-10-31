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
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true, // faster minification, modern JS
//   experimental: {
//     legacyBrowsers: false, // don't transpile JS for old browsers
//   },
//   images: {
//     domains: [
//       'localhost', // remove http:// prefix
//       'storage.googleapis.com',
//       'timewatch2-0-311005204045.europe-west1.run.app',
//     ],
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: '*',
//       },
//     ],
//   },
// };

// export default nextConfig;





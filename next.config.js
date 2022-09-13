/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   async headers() {
    return [
      {
        source: "/pdf",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Length",
            value: '10',
          }
        ],
      },
    ];
  },
};


module.exports = nextConfig;

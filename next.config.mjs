/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kingarthurbaking.com",
      },
    ],
  },
};

export default nextConfig;

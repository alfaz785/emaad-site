/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emaad-site-next.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

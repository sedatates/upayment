/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["store.storeimages.cdn-apple.com"],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;

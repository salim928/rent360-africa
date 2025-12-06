/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@rent360/types", "@rent360/utils"],
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

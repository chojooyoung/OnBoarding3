/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.resolve.modules.push(__dirname); // 추가
    return config;
  },
};

module.exports = nextConfig;

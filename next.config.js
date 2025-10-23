// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  env: {
    BASE_URL: 'https://peteletricaufba.github.io',
  },
  images: {
    loader: "custom",
  },
};

module.exports = withMDX(nextConfig);

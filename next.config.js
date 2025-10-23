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
    unoptimized: true, // Desabilitar otimização de imagens
    loader: 'imgix',  // Usar um loader de imagens externo
    path: '',  // Isso pode ajudar a evitar o caminho de otimização padrão do Next
  },
};

module.exports = withMDX(nextConfig);

const nextra = require('nextra').default

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
  reactStrictMode: true,
})

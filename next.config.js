const nextra = require('nextra').default

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    rehypePrettyCodeOptions: {
      // "one-dark-pro" is dark, readable, and closest to a cyberpunk terminal feel
      // among Shiki's built-in themes
      theme: 'one-dark-pro',
    },
  },
})

module.exports = withNextra({
  reactStrictMode: true,
})

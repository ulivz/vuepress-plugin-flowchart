module.exports = {
  title: 'vuepress-plugin-flowchart',

  description: "flowchart plugin for vuepress",

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  plugins: [
    require('../../index')
  ],

  themeConfig: {
    repo: "ulivz/vuepress-plugin-flowchart",
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated'
  },

  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }
  }
}
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
  ]
}
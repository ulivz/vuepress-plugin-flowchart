const path = require('path')

module.exports = {
  // component: './flowcharts.vue'
  enhanceAppFiles: [
    path.resolve(__dirname, './lib/client.js')
  ],

  chainMarkdown (config) {
    config
      .plugin('flowchart')
      .use(require('./lib/markdownItPlugin'))
  }
}

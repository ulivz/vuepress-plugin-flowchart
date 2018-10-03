const path = require('path')

module.exports = {
  // component: './flowcharts.vue'
  enhanceAppFiles: [
    path.resolve(__dirname, 'client.js')
  ],

  chainMarkdown (config) {
    config
      .plugin('flowchart')
      .use(require('./markdownItPlugin'))
  }
}

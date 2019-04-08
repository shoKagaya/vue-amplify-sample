const StylelintPlugin = require('stylelint-webpack-plugin')
plugins: [
  new StylelintPlugin({
    files: [
      'src/**/*.vue',
      'src/**/*.scss'
    ]
  })
]

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? `/${process.env.VUE_APP_S3_PATH}/`
      : '/'
}

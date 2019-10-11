const HtmlWebpackPlugin = require('html-webpack-plugin')
const parts = require('./build-utils/webpack.parts')
const { PATHS } = require('./build-utils/paths')
const merge = require('webpack-merge')

const commonConfig = merge([
  parts.loadTypescript({ include: PATHS.entry, exclude: /node_modules/ })
])

module.exports = ({ mode }) => {
  const modeConfig = require(`./build-utils/webpack.${mode}.js`)
  return merge(
    {
      entry: './src/index',
      output: {
        path: PATHS.output,
        chunkFilename: '[name].[chunkhash:4].js',
        filename: '[name].[hash:4].bundle.js'
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js']
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: PATHS.html
        })
      ],
    },
    commonConfig,
    modeConfig
  )
}
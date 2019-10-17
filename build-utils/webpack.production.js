const merge = require('webpack-merge')
const parts = require('./webpack.parts')
const glob = require('glob')
const { PATHS } = require('./paths')

module.exports = merge([
  {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      },
      runtimeChunk: {
        name: 'manifest'
      },
      usedExports: true,
      sideEffects: true
    }
  },
  parts.clean(),
  parts.environment({ env: 'production' }),
  parts.minifyJavascript(),
  parts.minifyCss({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  }),
  parts.extractCss({
    include: PATHS.styles,
    use: ['css-loader', parts.autoprefix(), 'fast-sass-loader']
  }),
  parts.purifyCss({
    paths: glob.sync(`${PATHS.entry}/**/*.tsx`, { nodir: true })
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash:4].[ext]'
    }
  }),
  parts.loadSvg({
    options: {
      limit: 15000,
      name: '[name].[hash:4].[ext]'
    }
  }),
  parts.moduleConcatenation()
])

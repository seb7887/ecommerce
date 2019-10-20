const merge = require('webpack-merge')
const parts = require('./webpack.parts')
const { PATHS } = require('./paths')

module.exports = merge([
  parts.environment({ env: 'development' }),
  parts.devServer({
    host: process.env.HOST,
    port: 3000
  }),
  parts.loadSass({ include: PATHS.styles }),
  parts.loadImages(),
  parts.loadSvg()
])

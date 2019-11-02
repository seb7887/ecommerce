const path = require('path')

const PATHS = {
  entry: path.join(__dirname, '../src'),
  output: path.join(__dirname, '../dist'),
  html: path.join(__dirname, '../public/index.html'),
  styles: path.join(__dirname, '../src/styles'),
  favicon: path.join(__dirname, '../public/favicon.ico')
}

module.exports = { PATHS }

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cssnano = require('cssnano')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurifyCssPlugin = require('purifycss-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

exports.clean = () => ({
  plugins: [new CleanWebpackPlugin()]
})

exports.environment = ({ env }) => {
  const plugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env)
  })

  return {
    plugins: [plugin]
  }
}

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: 'errors-only',
    host,
    port,
    hot: true
  }
})

exports.loadTypescript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include,
        exclude,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
})

exports.loadFiles = () => ({
  module: {
    rules: [
      {
        test: /\.(eot|webp|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:4].[ext]'
          }
        }
      }
    ]
  }
})

exports.loadSass = ({ include }) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'fast-sass-loader'],
        include
      }
    ]
  }
})

exports.minifyJavascript = () => ({
  optimization: {
    minimizer: [new TerserPlugin({ sourceMap: true })]
  }
})

exports.minifyCss = ({ options }) => ({
  plugins: [
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false
    })
  ]
})

exports.extractCss = ({ include, exclude, use = [] }) => {
  const plugin = new MiniCssExtractPlugin({
    filename: '[name].[contenthash:4].css'
  })

  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,
          use: [MiniCssExtractPlugin.loader].concat(use)
        }
      ]
    },
    plugins: [plugin]
  }
}

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')()]
  }
})

exports.purifyCss = ({ paths }) => ({
  plugins: [
    new PurifyCssPlugin({
      paths,
      minimize: true
    })
  ]
})

exports.moduleConcatenation = () => ({
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
})

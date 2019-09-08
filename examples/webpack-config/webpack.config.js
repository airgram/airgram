const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeEnv = process.env.NODE_ENV || 'development'
const isProd = nodeEnv === 'production'
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// Uncomment to analyze bundle size
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new HtmlWebpackPlugin({
    title: 'Webpack config example',
    template: '!!ejs-loader!src/index.html'
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      tslfint: {
        emitErrors: true,
        failOnHint: true
      }
    }
  }),
  new CopyPlugin([
    {
      from: path.resolve(__dirname, '../../node_modules/tdweb/dist/**/*'),
      to: '.',
      flatten: true,
      copyUnmodified: true,
      ignore: ['tdweb.js']
    }
  ]),
  // Uncomment to analyze bundle size
  new BundleAnalyzerPlugin()
]

var config = {
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  context: path.resolve('./src'),
  node: {},
  entry: {
    app: './App.ts'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js'
  },
  // Uncomment if you want to use `tdweb` as an external package
  // externals: {
  //   tdweb: 'tdweb'
  // },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: [/\/node_modules\//],
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            // compile with TypeScript, then transpile with Babel
            useBabel: true
          }
        }, 'source-map-loader']
      },
      !isProd
        ? {
          test: /\.(js|ts)$/,
          loader: 'istanbul-instrumenter-loader',
          exclude: [/\/node_modules\//],
          query: {
            esModules: true
          }
        }
        : null,
      { test: /\.html$/, loader: 'html-loader' }
    ].filter(Boolean)
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    compress: true,
    port: 8000,
    hot: true,
    https: {
      key: fs.readFileSync(path.resolve('ssl/rootCAKey.pem')),
      cert: fs.readFileSync(path.resolve('ssl/rootCACert.pem'))
    },
    writeToDisk: true
  }
}

module.exports = config

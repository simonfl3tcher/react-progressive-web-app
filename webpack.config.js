/*eslint-disable */
'use strict';

var webpack = require('webpack')
var FlowtypePlugin = require('flowtype-loader/plugin');
var OfflinePlugin = require('offline-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/App.jsx',
    vendor: [
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
    path: __dirname + '/public/',
    filename: 'assets/[name].[hash].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'scss']
  },
  resolveLoader: {
    modules: ['node_modules', __dirname + '/client/node_modules'],
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
          'flowtype'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                'react',
                ['es2015', { "modules": false } ]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style',
          'css?sourceMap',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'assets/images/[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/vendor.js',
      minChunks: Infinity
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'meta', chunks: ['vendor'], filename: 'assets/meta.[hash].js' }),
    new FlowtypePlugin(),
    new OfflinePlugin({
      externals: ['index.html'],
      AppCache: false
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome to React PWA',
      filename: 'index.html',
      template: 'public/index.ejs',
      hash: true,
      excludeChunks: 'appcache/manifest.appcache',
      inject: 'body'
    })
  ]
}

if(process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}

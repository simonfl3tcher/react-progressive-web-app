/*eslint-disable */
'use strict';

var webpack = require('webpack')
var FlowtypePlugin = require('flowtype-loader/plugin');
var OfflinePlugin = require('offline-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/App.jsx'
  },
  output: {
    path: __dirname + '/public/',
    filename: 'assets/[name].js',
    publicPath: '/'
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
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: [
            'react',
            ['es2015', { "modules": false } ]
          ]
        }
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
    new FlowtypePlugin(),
    new OfflinePlugin({
      externals: ['index.html']
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

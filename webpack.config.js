'use strict';

var webpack = require('webpack')
var FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/App.jsx',
  output: {
    path: __dirname + '/public/assets',
    filename: 'bundle.js',
    publicPath: '/public/assets'
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
          'style',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
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
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new FlowtypePlugin()
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

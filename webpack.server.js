const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: ['@babel/polyfill', './src/server/index.js'],
  module: {},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(config, serverConfig)
// const path = require('path')
// const webpack = require('webpack')

import path from 'path'
import webpack from 'webpack'

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'simple-db.js',
    library: 'simpleDB'
  },
  plugins: [
    // Webpack 5 no longer polyfills 'process'
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    fallback: {
      // BREAKING CHANGE: webpack < 5 used to include polyfills for
      // node.js core modules by default. This is no longer the
      // case.
      'util': false,
      'assert': false
    }
  }
}

export default [ config ]

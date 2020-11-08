const path = require('path')
const webpack = require('webpack')
const glob = require("glob");

const config = {
  mode: 'development',
  plugins: [
    // Webpack 5 no longer polyfills 'process'
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  target: 'web',
  resolve: {
    fallback: {
      // BREAKING CHANGE: webpack < 5 used to include polyfills for
      // node.js core modules by default. This is no longer the
      // case.
      'assert': false,
      "buffer": require.resolve("buffer/"),
      "fs": false,
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      'util': false
    }
  }
}

module.exports = [{
  ...config,
  entry: './src/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'simple-db.js',
    library: 'simpleDB'
  }
}, {
  ...config,
  entry: glob.sync("./test/src/*.js"),
  output: {
    path: path.resolve('test/sandbox'),
    filename: 'browser-tests.js'
  },
}]

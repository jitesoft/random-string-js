const Path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  optimization: {
    minimize: process.env.NODE_ENV === 'production'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  entry: {
    index: [
      Path.join(__dirname, 'src', 'index.js')
    ]
  },
  output: {
    filename: 'index.js',
    library: '@jitesoft/rand',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
};

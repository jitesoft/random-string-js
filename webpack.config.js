const Path = require('path');

const shared = {
  mode: process.env.NODE_ENV,
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  }
};

const web = Object.assign({}, shared, {
  target: 'web',
  entry: Path.join(__dirname, 'src', 'Web', 'index.js'),
  output: {
    filename: 'index.web.js',
    library: '@jitesoft/random-string',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
});

const node = Object.assign({}, shared, {
  target: 'node',
  entry: Path.join(__dirname, 'src', 'Node', 'index.js'),
  output: {
    filename: 'index.node.js',
    library: '@jitesoft/random-string',
    libraryTarget: 'umd'
  }
});

module.exports = [
  web,
  node
];

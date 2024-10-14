const path = require('path');

module.exports = {
  mode: 'development',
  entry: './journey-mate/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'journey-mate': path.resolve(__dirname, 'journey-mate')
    },
    extensions: ['.js', '.jsx', '.json']
  }
};

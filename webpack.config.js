const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  target: 'node',
  resolve: {
    mainFields: ['main', 'module'],
    extensions: ['.js', '.ts'],
  },
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  externals: {
    'coc.nvim': 'commonjs coc.nvim',
  },
};

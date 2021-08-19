const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   Buffer: ["buffer", "Buffer"],
    // }),
    // new webpack.DefinePlugin({
    //   process: {
    //     browser: true,
    //     nextTick: () => null,
    //   },
    // })
  ]
};
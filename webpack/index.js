const { resolve } = require('path');
const vendor = require('./vendor');
const rules = require('./rules');
const plugins = require('./plugins');
const devServer = require('./dev_server');
const devtool = require('./devtool');

const settings = {
  resolve: {
    alias: {
      '@actions': resolve(__dirname, '../src/actions'),
      '@components': resolve(__dirname, '../src/components'),
      '@helpers': resolve(__dirname, '../src/helpers'),
      '@shapes': resolve(__dirname, '../src/shapes'),
      '@views': resolve(__dirname, '../src/views')
    },
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  context: resolve(__dirname, '..'),
  entry: {
    app: [
      'react-hot-loader/patch',
      'babel-polyfill',
      './src/index'
    ],
    vendor,
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules,
  },
  plugins,
  devServer,
  devtool,
};

module.exports = settings;

const { join } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rules = [{
  test: /.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
}, {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      },
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    }],
  }),
}, {
  test: /\.global\.css$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    }
  ]
}, {
  test: /^((?!\.global).)*\.css$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMap: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]__[hash:base64:5]',
      }
    },
  ]
}, {
  test: /\.(woff2|woff|ttf|eot|svg)(\?.*$|$)/,
  loader: 'file-loader?name=fonts/[name].[ext]',
  include: [
    join(__dirname, 'src'),
    join(__dirname, 'node_modules'),
  ],
}, {
  test: /\.(jpg|jpeg|gif|png|ico)(\?.*$|$)$/,
  loader: 'file-loader?name=img/[name].[ext]',
  include: [
    join(__dirname, 'src'),
    join(__dirname, 'node_modules'),
  ],
}, {
  test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 10000,
      mimetype: 'application/font-woff',
    }
  },
}, {
  test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 10000,
      mimetype: 'application/font-woff',
    }
  }
}, {
  test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 10000,
      mimetype: 'application/octet-stream'
    }
  }
}, {
  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
  use: 'file-loader',
}, {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 10000,
      mimetype: 'image/svg+xml',
    }
  }
}, {
  test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
  use: 'url-loader',
}];

module.exports = rules;

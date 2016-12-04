const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [resolve(__dirname, '../src')],
  output: {
    path: resolve(__dirname, '../dist/assets'),
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      title: 'redux-react-starter',
      template: 'webpack/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, '../src')],
        use: 'babel-loader',
      },
    ],
  },
}

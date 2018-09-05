const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js',
    publicPath: 'bundle'
  },
  devtool: "eval-source-map", 
  plugins: [
    new MiniCssExtractPlugin({filename: 'bundle.css'})
  ],
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

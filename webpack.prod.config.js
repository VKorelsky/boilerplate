const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJs = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public/bundle"),
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'bundle.css'})
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJs
    ]
  }

}

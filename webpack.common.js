const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/home.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/covid-monitor.html",
      filename: "covid-monitor.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about.html",
      filename: "about.html",
    }),
  ],
};
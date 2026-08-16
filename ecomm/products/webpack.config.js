const HtmlWebpackPlugin = require("html-webpack-plugin"); // This plugin is to ensure that webpack bundle files (or script tags) are correctly inserted to public/index.html

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

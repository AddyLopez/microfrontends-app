const HtmlWebpackPlugin = require("html-webpack-plugin"); // This plugin is to ensure that webpack bundle files (or script tags) are correctly inserted to public/index.html
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// remoteEntry.js lists different modules that can be loaded from the Products project

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

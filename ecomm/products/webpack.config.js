const HtmlWebpackPlugin = require("html-webpack-plugin"); // This plugin is to ensure that webpack bundle files (or script tags) are correctly inserted to public/index.html
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin"); // This plugin enables set up for a remote modules to integrate with a host

// remoteEntry.js lists different modules that can be loaded from the Products project
// ProductsIndex is a descriptive alias
// name property (and port) must match products@http://localhost:8081/remoteEntry.js in container/webpack.config.js

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
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

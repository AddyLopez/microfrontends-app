const HtmlWebpackPlugin = require("html-webpack-plugin"); // This plugin is to ensure that webpack bundle files (or script tags) are correctly inserted to public/index.html
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin"); // This plugin enables set up for a remote modules to integrate with a host

// It's not necessary to add name property to host (only to remote), but it's named here by convention
// products@http://localhost:8081/remoteEntry.js matches name property of remote. see products/webpack.config.js
// products property matches products/ProductsIndex in container/src/bootstrap.js

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

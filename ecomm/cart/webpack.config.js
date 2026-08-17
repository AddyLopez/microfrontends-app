const HtmlWebpackPlugin = require("html-webpack-plugin"); // This plugin is to ensure that webpack bundle files (or script tags) are correctly inserted to public/index.html
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin"); // This plugin enables set up for a remote modules to integrate with a host

// remoteEntry.js lists different modules that can be loaded from the Cart project
// CartDisplay is a descriptive alias
// name property (and port) must match cart@http://localhost:8082/remoteEntry.js in container/webpack.config.js

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartDisplay": "./src/index",
      },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

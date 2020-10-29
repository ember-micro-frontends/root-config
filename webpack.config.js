const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const result = {
    entry: path.resolve(__dirname, "src/ember-mfe-root-config"),
    output: {
      filename: "root-application.js",
      libraryTarget: "system",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: "sourcemap",
    module: {
      rules: [
        { parser: { system: false } },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{ loader: "babel-loader" }],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      https: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: env && env.isLocal === "true",
        },
      }),
      new CleanWebpackPlugin(),
    ],
    externals: ["single-spa", /^@react-mf\/.+$/],
  };

  return result;
};

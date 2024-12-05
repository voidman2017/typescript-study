const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: ["web", "es6"],
};

const umdConfig = {
  ...commonConfig,
  output: {
    filename: "bundle.umd.js",
    path: path.resolve(__dirname, "dist"),
    library: "MyLibrary",
    libraryTarget: "umd",
    globalObject: "this",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 模板文件路径
      filename: "index.umd.html",
      inject: "body",
      scriptLoading: "blocking",
    }),
  ],
};

const esmConfig = {
  ...commonConfig,
  output: {
    filename: "bundle.esm.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 模板文件路径
      filename: "index.esm.html",
      inject: "body",
      scriptLoading: "module",
    }),
  ],
};

const commonJsConfig = {
  ...commonConfig,
  output: {
    filename: "bundle.cjs.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "commonjs2",
    },
  },
};

module.exports = [umdConfig, esmConfig, commonJsConfig];

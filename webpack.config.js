const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  //mode: "development",
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js",
    //clean: true, // Clean the output directory before emit.
  },
  module: {
    rules: [
      {
        //test: /\.js$/,
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
    ],
  },
  //devtool: 'inline-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html",
      //ask is title is require
      //title: 'Production' or 'development,
    }),
    // Only update what has changed on hot reload
    // new webpack.HotModuleReplacementPlugin(),
    //DefinePlugin to value development/production. Enables useful names for modules and chunks.
    // new webpack.DefinePlugin({
    //   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    // }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    // proxy: {
    //   "/api": "http://localhost:3000",
    // },
  },
};

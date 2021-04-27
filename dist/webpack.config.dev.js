"use strict";

var path = require("path");

module.exports = {
  entry: {
    app: "./index.jsx"
  },
  context: path.resolve(__dirname, "static_src"),
  output: {
    path: path.resolve(__dirname, "static", "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, "static_src"),
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        presets: ["@babel/env", "@babel/react"]
      }
    }, {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    }]
  }
};
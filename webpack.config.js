const path = require("path");

const config = {
  context: path.resolve(__dirname, "src"),
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]"
  }
};

module.exports = config;
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

const devConfig = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: common.output.path
  }
});

module.exports = devConfig;
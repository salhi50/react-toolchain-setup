const path = require("path");
const HTMLWebpackPligin = require("html-webpack-plugin");

const commonConfig = {
  context: path.resolve(__dirname, "src"),
  entry: "./main.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
    assetModuleFilename: "assets/[name].[id][ext][query]"
  },
  module: {
    rules: [
      // Loading CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        generator: {
          filename: "assets/css/[name].[id][ext][query]"
        }
      },
      // Loading images
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[id][ext][query]"
        }
      },
      // Loading fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "assets/fonts/[name].[id][ext][query]"
        }
      },
      // Loading yaml data
      {
        test: /\.yaml$/i,
        use: "yaml-loader"
      },
      // Loading texts
      {
        test: /\.txt$/i,
        type: "asset/source",
        // type: "asset/resource", // Get file url
        // type: "asset/source", // Get the text content of the file
        // type: "asset/inline", // Get file data url
      },
      // Loading typescript
      {
        test: /\.ts(x)?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPligin({
      title: "My website",
      template: "../public/index.html"
    })
  ],
  resolve: {
    modules: ["node_modules"], // default
    alias: {
      _: "lodash", // alias for module path
      utils: "./utilities.ts", // exact match,
      data: "./data/" // alias for relative path
    },
    // Fields in package.json that are used for resolving module requests
    exportsFields: ["exports"], // default
    extensions: [".tsx", ".ts", ".js"] // default
  },
}

module.exports = commonConfig;
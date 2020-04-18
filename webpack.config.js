const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  ////Used for multiple multiple enteries

  // entry: {
  //   about: "./src/contact.js",
  //   contact: "./src/contact.js",
  // },
  // output: {
  //   filename: "[name].bundle.js",
  //   path: path.resolve(__dirname, "dist"),
  // },

  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],

  optimization: {
    // minimize: false,
    // splitChunks: {
    //   chunks: "all",
    // },
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};

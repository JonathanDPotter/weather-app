// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

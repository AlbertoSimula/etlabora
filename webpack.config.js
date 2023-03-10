const path = require("path");

module.exports = {
  entry: {
    chart: "./chart.js",
    esercizi: "./esercizi.js",
    login: "./login autenthication/login.js",
    socket: "/eserciziosocket/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [{
          loader: 
            "babel-loader",
          options: {
            presets: 
              ["@babel/preset-env"],
            }
          },{
            loader: "prettier-loader"}, 
        ],
      }]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
  }
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: "hamsa_map.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } }
    ]
  }
}

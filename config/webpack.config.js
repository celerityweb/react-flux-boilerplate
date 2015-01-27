module.exports = {
  entry: "./app/app.jsx",
  output: {
    filename: "bundle.js"
  },
  devtool: "#inline-source-map",
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  module: {
    loaders: [
    {test: /\.jsx?$/, loader: 'jsx-loader?harmony&stripTypes'}
    ]
  }
};

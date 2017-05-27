module.exports = {
  output: {
    library: 'trafficlight',
    libraryTarget: 'umd',
  },

  externals: {
    react: 'React',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

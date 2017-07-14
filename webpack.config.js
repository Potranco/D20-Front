var path = require('path');
module.exports = {
  resolve: {
    extensions: ['.js']
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist/'),
    filename: 'app.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
},
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}

const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'production',
  entry: [
    './lib/app.js'
  ],
  output: {
    path: path.resolve(__dirname, './app/'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, '/node_modules/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, '/node_modules/'),
        use: [
          'ts-loader',
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     presets: [
          //       '@babel/preset-env',
          //       '@babel/preset-react',
          //     ]
          //   }
          // }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    contentBase: './app',
    host: 'localhost'
  }
}

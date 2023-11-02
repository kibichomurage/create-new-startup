const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require('path');
var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || "0.0.0.0";

module.exports = {
  entry: './frontend/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin()],
  },
  target: 'web',
  devtool: false,
  devServer: {
    port: server_port,
    allowedHosts: 'all',
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    hot: true,
    liveReload: true,
    compress: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  module: {
    rules: [
      { //Open .js and .jsx files
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { //Open .md files for react-markdown
        test: /\.md$/,
        use: 'file-loader'
      },
      { //Open .svg files
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: { limit: 10000,},

      },
      { //Open .css files
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.join(__dirname, 'public', 'index.html'),}),
    //new BundleAnalyzerPlugin()
  ],
};
//npm prune
//npm dedupe
//npm install lodash-webpack-plugin -save--dev
//https://medium.com/fbdevclagos/possible-ways-to-reduce-your-webpack-bundle-size-js-secrets-7bbecf427609
//npm i -S preact preact-compat
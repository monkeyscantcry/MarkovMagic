var path = require("path");
var webpack = require("webpack");
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  // This is the main file that should include all other JS files
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server',
    "./app/scripts/main.js"
    // "./styles/main.scss"
  ],
  resolve: {
      root: [path.join(__dirname, "node_modules")]
  },
  context: __dirname,
  target: "web",
  debug: true,
  // We are watching in the gulp.watch, so tell webpack not to watch
  watch: false,
  // watchDelay: 300,
  output: {
        path: path.join(__dirname, 'app'),
        publicPath: '',
    contentBase: path.join(__dirname, 'app'),
        filename: "app.js",
        chunkFilename: "[chunkhash].js"
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
    dgram: 'empty',
    dns: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.css/, loader: "style-loader!css-loader" },
      { test: /\.scss/, loader: "style-loader!css-loader!sass" },
      { test: /\.gif/, loader: "url-loader?limit=10000&minetype=image/gif" },
      { test: /\.jpg/, loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.png/, loader: "url-loader?limit=10000&minetype=image/png" },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', '6to5-loader'] },
      { test: /\.jsx$/, loaders: ['6to5-loader'] },
      { test: /\.coffee$/, loader: "jsx-loader!coffee-loader" }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __ROOT_PATH__: '"' + __dirname.toString() + '"'
    })
  ]
};

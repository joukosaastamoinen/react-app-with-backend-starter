const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const AssetsPlugin = require('assets-webpack-plugin')
const plugins = [new AssetsPlugin({ filename: './build/client/assets.json' })]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CompressionPlugin({
      asset: '[file].gz',
      algorithm: 'gzip',
      regExp: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/client/bootstrap-in-browser.js']
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'build/client'),
    // In development, generate bundles without the [hash] part in filenames.
    // This avoids the need to restart the server every time a new client
    // bundle is generated. The manifest.json file (which contains the
    // bundle filenames) is read by the server only when the process starts,
    // and thus changing bundle filename would require a restart.
    filename:
      process.env.NODE_ENV === 'production' ? '[name].[hash].js' : '[name].js'
  },
  devtool:
    process.env.NODE_ENV === 'production'
      ? false
      : 'cheap-module-eval-source-map',
  plugins,
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: [{ loader: 'babel-loader' }]
      }
    ]
  }
}

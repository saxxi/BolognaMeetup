const webpack = require("webpack");
const environment = require('./environment')

var custom_env = environment.toWebpackConfig()
custom_env.output.filename = '[name].js'
custom_env.output.chunkFilename = '[name].chunk.js'

custom_env.plugins = [
  ...custom_env.plugins,
  new webpack.ProvidePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]

module.exports = custom_env

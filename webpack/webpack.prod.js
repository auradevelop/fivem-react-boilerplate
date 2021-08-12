const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ResourceManifestPlugin = require('webpack-fivem-manifest');

module.exports = require('./webpack.common')({
  mode: 'production',

  // In production, we skip all hot-reloading stuff
  entry: [path.join(process.cwd(), 'src/app.js')],

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks : ['main'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new ResourceManifestPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
  ],

  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});

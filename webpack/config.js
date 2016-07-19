const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
      webpack = require('webpack');

const cwd = path.dirname(__dirname);

const config = {

  entry: {
    polyfills: 'app/polyfills.ts',
    vendor: 'app/vendor.ts',
    main: 'app/main.ts'
  },

  output: {
    path: 'build',
    publicPath: '/',
    filename: 'app/[name].js',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    root: path.join(cwd, 'src'),
    extensions: ['', '.ts', '.js', '.html'],
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts', 'angular2-template-loader'],
      exclude: [/node_modules\/(?!(ng2-.+))/]
    }, {
      test: /\.html$/,
      loader: 'raw'
    }],
    noParse: [
      /.+zone\.js\/dist\/.+/,
      /.+angular2\/bundles\/.+/,
      /angular2-polyfills\.js/
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/static/index.html',
      chunksSortMode: 'dependency'
    })
  ]

};

module.exports = config;

const path = require('path');

const autoprefixer = require('autoprefixer'),
      cssMqpacker = require('css-mqpacker'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      webpack = require('webpack');

const cwd = path.dirname(__dirname),
      src = path.join(cwd, 'src'),
      styleExtract = new ExtractTextPlugin('assets/styles/[name].css');

const config = {

  entry: {
    polyfills: 'app/polyfills.ts',
    vendor: 'app/vendor.ts',
    main: 'app/main.ts'
  },

  output: {
    path: 'build',
    publicPath: '/',
    filename: 'assets/app/[name].js',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    root: src,
    extensions: ['', '.ts', '.js', '.pug', '.styl']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts!angular2-template',
      exclude: [/node_modules\/(?!(ng2-.+))/]
    }, {
      test: /\.styl$/,
      loader: 'raw!postcss!stylus',
      exclude: path.join(cwd, 'src', 'styles')
    }, {
      test: /\.styl$/,
      loader: styleExtract.extract('style', 'css?sourceMap!postcss!stylus'),
      exclude: path.join(cwd, 'src', 'app')
    }, {
      test: /\.pug$/,
      loader: 'raw!pug-html'
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
      template: 'src/templates/app.pug',
      chunksSortMode: 'dependency'
    }),
    styleExtract,
    new CopyWebpackPlugin([{
      from: 'fonts/**/*.@(svg|ttf|woff)',
      to: 'assets',
      context: src
    }])
  ],

  pugHtml: {
    basedir: path.join(src, 'templates')
  },

  stylus: {
    paths: [
      path.join(src, 'styles', 'imports'),
      path.join(cwd, 'node_modules')
    ],
    'include css': true,
    url: {
      name: 'inline-url',
      limit: false
    }
  },

  postcss: () => [
    autoprefixer({
      browsers: ['> 0.25%'],
      remove: false
    }),
    cssMqpacker()
  ]

};

module.exports = config;

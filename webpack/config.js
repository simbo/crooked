const path = require('path');

const autoprefixer = require('autoprefixer'),
      cssMqpacker = require('css-mqpacker'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      webpack = require('webpack');

const cwd = path.dirname(__dirname),
      styleExtract = new ExtractTextPlugin('style/[name].css');

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
    extensions: ['', '.ts', '.js', '.pug', '.styl']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts', 'angular2-template-loader'],
      exclude: [/node_modules\/(?!(ng2-.+))/]
    }, {
      test: /\.styl$/,
      exclude: path.join(cwd, 'src/styl'),
      loader: `raw!postcss!stylus`
    }, {
      test: /\.styl$/,
      exclude: path.join(cwd, 'src/app'),
      loader: styleExtract.extract('style', `css?sourceMap!postcss!stylus`)
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
    styleExtract
  ],

  pugHtml: {
    basedir: path.join(cwd, 'src', 'templates')
  },

  stylus: {
    paths: [
      path.join(cwd, 'src/styl/imports'),
      path.join(cwd, 'node_modules')
    ],
    'include css': true,
    url: {
      name: 'inline-url',
      limit: false
    }
  },

  postcss: function() {
    return [
      autoprefixer({
        browsers: ['> 0%'],
        remove: false
      }),
      cssMqpacker()
    ];
  }

};

module.exports = config;

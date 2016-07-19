const path = require('path');

const autoprefixer = require('autoprefixer'),
      cssMqpacker = require('css-mqpacker'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      webpack = require('webpack');

const cwd = path.dirname(__dirname);

const styleExtract = new ExtractTextPlugin('style/[name].css'),
      stylusPaths = [
        path.join(cwd, 'src/styl/imports'),
        path.join(cwd, 'node_modules')
      ];

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
    extensions: ['', '.ts', '.js', '.html', '.styl']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts', 'angular2-template-loader'],
      exclude: [/node_modules\/(?!(ng2-.+))/]
    }, {
      test: /\.styl$/,
      exclude: path.join(cwd, 'src/app'),
      loader: styleExtract.extract('style', `css?sourceMap!postcss!stylus?paths=${stylusPaths}`)
    }, {
      test: /\.styl$/,
      exclude: path.join(cwd, 'src/styl'),
      loader: `raw!postcss!stylus?paths=${stylusPaths}`
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
    }),
    styleExtract
  ],

  stylus: {
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

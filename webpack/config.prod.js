const csswring = require('csswring'),
      webpack = require('webpack'),
      webpackMerge = require('webpack-merge');

const config = require('./config');

const configProd = webpackMerge(config, {

  devtool: 'source-map',

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        drop_debugger: true,
        unsafe_comps: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        warnings: false,
        negate_iife: true,
        pure_getters: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    })
  ],

  postcss: () => config.postcss().concat([
    csswring({
      preserveHacks: true
    })
  ])

});

module.exports = configProd;

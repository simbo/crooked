const webpackMerge = require('webpack-merge');

const config = require('./config');

const configDev = webpackMerge(config, {

  devtool: 'eval-source-map',

  debug: true,

  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    stats: 'minimal',
    inline: true,
    port: 8080
  },

  pugHtml: {
    compileDebug: true,
    pretty: true
  }

});

module.exports = configDev;

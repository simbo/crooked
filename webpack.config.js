var env = require('./webpack/env').env;

console.log(`[ENV] ${env}`);

module.exports = require(`./webpack/config.${env}`);

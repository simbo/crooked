const env = ((env) => {
  switch(env) {
    case 'build':
    case 'production':
    case 'prod':
      return 'prod';
    default:
      return 'dev';
  }
})(process.env.npm_lifecycle_event || process.env.NODE_ENV);

console.log(`Environment: ${env}`);

module.exports = require(`./webpack/config.${env}`);

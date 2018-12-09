const path = require('path');
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      // mutate config for production...
      config.resolve = {
        alias: {
          vue: path.resolve(__dirname, './node_modules/vue')
        }
      };
    }
  }
};

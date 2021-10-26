const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [],
          indentedSyntax: false
        },
        additionalData: '@import "~@/assets/scss/variable.scss";'
      }
    }
  },
  assetsDir: '@/assets/'
}
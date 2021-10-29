const path = require('path');

//Add absolute paths to the main dirs
const fs = require('fs');
const dirs = fs.readdirSync(path.resolve(__dirname, "src"));

const alias = {
  src: path.resolve(__dirname, "src"),
};

dirs.forEach((name) => {
  const filePath = path.resolve(__dirname, "src", name);
  //Only add folders
  if (fs.statSync(filePath).isDirectory()) {
    alias[name] = filePath;
  }
});

module.exports = {
  configureWebpack: {
    resolve: {
      alias,
    },
    //plugins: [new BundleAnalyzerPlugin()]
  },
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
const fs = require('fs');
const loaderUtils = require('loader-utils');

module.exports = function (inSource) {
  const options = loaderUtils.getOptions(this);
  console.log('weapp-wxml-loader.js=>', inSource.replace('#images','/assets/images'));
  return inSource.replace('#images','/assets/images');
  // return inSource;
};

// module.exports.raw = true;
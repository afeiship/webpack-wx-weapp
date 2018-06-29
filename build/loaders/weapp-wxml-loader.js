const fs = require('fs');
const loaderUtils = require('loader-utils');

module.exports = function (inSource) {
  const options = loaderUtils.getOptions(this);
  // console.log(inSource, options);
  return inSource;
};
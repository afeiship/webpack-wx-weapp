const fs = require('fs');
const loaderUtils = require('loader-utils');

module.exports = function (inSource) {
  // console.log(inSource);
  const options = loaderUtils.getOptions(this);
  return inSource;
};

module.exports.row = true;
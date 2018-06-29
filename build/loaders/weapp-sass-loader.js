const fs = require('fs');
const loaderUtils = require('loader-utils');

module.exports = function (inSource) {
  const options = loaderUtils.getOptions(this);
  return inSource.replace('/*@import "/app.wxss";*/', '@import "/app.wxss";');
};

// module.exports.raw = true;
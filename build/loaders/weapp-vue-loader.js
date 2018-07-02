const fs = require('fs');
const beautify = require('js-beautify');
const loaderUtils = require('loader-utils');
const weappVueParser = require('weapp-vue-parser').default;
const babelLoader = require('babel-loader');


module.exports = function (inSource) {
  // console.log(inSource);
  const options = loaderUtils.getOptions(this);
  const result = weappVueParser(inSource);
  // console.log(
  //   babelLoader(result.script)
  // );
  // this.emitFile('components/views/card/card.js', babelLoader(result.script));
  // this.emitFile('components/views/card/card.wxml', result.html);
  // this.emitFile('components/views/card/card.wxss', result.style);
  return result.script;
};

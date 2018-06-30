const fs = require('fs');
const beautify = require('js-beautify');
const requireFromString = require('require-from-string');
const loaderUtils = require('loader-utils');
const weappVueParser = require('weapp-vue-parser').default;


module.exports = function (inSource) {
  // console.log(inSource);
  const options = loaderUtils.getOptions(this);
  const result = weappVueParser(inSource);
  const jsObject = requireFromString(result.script);
  this.emitFile('components/views/card/card.json', JSON.stringify(jsObject.config, null, 2));
  this.emitFile('components/views/card/card.js', beautify(
    `Component(${JSON.stringify(jsObject.component)})`,
    {indent_size: 2}
  ));


  this.emitFile('components/views/card/card.wxml', result.html);
  this.emitFile('components/views/card/card.wxss', result.style);
  return 'NONE';
};

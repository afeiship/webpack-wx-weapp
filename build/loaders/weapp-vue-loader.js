const fs = require('fs');
const loaderUtils = require('loader-utils');

module.exports = function (inSource) {
  // console.log(inSource);
  const options = loaderUtils.getOptions(this);
  const content = inSource.split('<!--SP-->');
  const str = content[1].replace('<script>', '').replace('</script>', '').replace('export default', '');

  // console.log('str iwth options:------->', options);
  // console.log(eval(str.trim()));

  // console.log(content);

  // this.emitFile('components/views/card/card.wxml', content[0].replace('<template>', '').replace('</template>', ''));
  // this.emitFile('components/views/card/card.js', script.component);
  // this.emitFile('components/views/card/card.json', script.config);
  // this.emitFile('components/views/card/card.wxss', content[2].replace('<style>', '').replace('</style>', ''));
  // fs.writeFileSync(content[0],'/Users/feizheng/github/webpack-wx-weapp/dist/card.wxml');
  // fs.writeFileSync(content[1],'/Users/feizheng/github/webpack-wx-weapp/dist/card.js');
  // fs.writeFileSync(content[2],'/Users/feizheng/github/webpack-wx-weapp/dist/card.wxss');

  //Must return String OR Buffer
  return '';
};
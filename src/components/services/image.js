import $config from './config';
const PROTOCOL_RE = /https?:\/\//;


export default class {

  static toImgs(inImgStr, inCallback) {
    const list = inImgStr.split(',');
    const { IMG_URL } = $config;
    const callback = inCallback || nx.noop;
    return list.map(item => {
      return callback(IMG_URL, item) || this.toImg(item);
    });
  }

  static toImg(inValue) {
    const { IMG_URL } = $config;
    return PROTOCOL_RE.test(inValue) ? inValue : `${IMG_URL}/${inValue}`;
  }

  static toThumbnail(inValue, inOptions) {
    const options = nx.mix({ width: 750 }, inOptions);
    return inValue + '?x-oss-process=image/resize,w_' + options.width + ',limit_0';
  }

}

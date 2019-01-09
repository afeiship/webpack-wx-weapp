import $config from "./config";

export default class {
  static toThumbnail(inValue, inOptions) {
    const options = nx.mix({ width: 750 }, inOptions);
    return (
      inValue + "?x-oss-process=image/resize,w_" + options.width + ",limit_0"
    );
  }
}

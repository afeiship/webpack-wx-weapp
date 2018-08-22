import {$config} from '#';


export default class {

  static instance = null;

  static start(inMethod, inUrl, inData) {
    this.instance = new this();
    this.instance.init(inMethod, inUrl, inData);
    return this.instance.end();
  }

  init(inMethod, inUrl, inData) {
    this._method = inMethod;
    this._url = inUrl;
    this._data = inData;
    this.common();
    this.dispatch();
  }

  dispatch() {
    const {APIS} = $config;
    this._api = this._url.split(APIS.baseUrl + '/')[1];
    this._filter = `$${nx.underscored(this._api)}`;
  }

  common() {
    //TODO: common filter.
  }

  end(){
    //template method:
  }

}
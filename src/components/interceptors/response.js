import Abstract from './abstract';

export default class extends Abstract {
  get data() {
    return nx.path(this._data, 'data.data');
  }

  common() {
    // console.log(this._data, 'common filter!');
  }

  end() {
    const filterMethod = this[this._filter];
    return filterMethod ? filterMethod.call(this) : this.data;
  }

  $app_pmall_ad_content_list() {
    console.log(this._api, this._method, this._data, this.data);
    return this.data;
  }
}

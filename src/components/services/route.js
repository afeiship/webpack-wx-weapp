import $config from './config';
import NxWeappRoute from 'next-weapp-route';

export default nx.declare({
  statics: {
    init() {
      nx.mix(this, NxWeappRoute.__statics__);
    },
    to(inKey, inData) {
      return this.go(`/pages/${inKey}/index`, inData);
    }
  }
});

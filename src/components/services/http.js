import NxWeappRequest from 'next-weapp-request';
import 'next-content-type';
import 'next-param';
import { Request, Response, Error } from 'interceptors';
import { $auth } from '#';

const Http = nx.declare({
  extends: NxWeappRequest,
  methods: {
    getHeaders: function() {
      const token = nx.get(nx.$local, 'auth.token');
      return {
        'X-Tu-Token': token
      };
    },
    setResponseInterceptor: function(inMethod, inUrl, inData, inOptions) {
      return inData.data.data;
    },
    setErrorInterceptor: function(inMethod, inUrl, inData, inOptions) {
      return inData;
    }
  }
});

export default Http.getInstance();

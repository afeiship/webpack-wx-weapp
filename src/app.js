import { $storage, $config, $api } from '#';
import 'next-weapp-boot';

nx.App({
  $config: {
    prefix: $config.STORE_PREFIX
  },
  initialState(inStorage) {
    return {
      memory: {
        test: 123
      },
      local: {
        auth: {}
      }
    };
  },
  onLaunch() {
    wx.login({
      success({ code }) {
        const data = nx.mix({ code }, $config.APP_CONFIG);
        $api.signin(data).then((auth) => {
          nx.$local = {
            auth
          };
        });
      }
    });
  },
  globalData: {
    test: 123,
    userInfo: null
  }
});

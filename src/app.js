import { $storage } from '#';
import 'next-weapp-boot';

nx.App({
  initialState(inStorage) {
    return {
      memory: {
        test: 123
      },
      local: {
        testloca: 'str',
        obj: { test: 'sdfdf' }
      }
    };
  },
  onLaunch() {
    console.log(nx, nx.VERSION, $storage);
    // 调用API从本地缓存中获取数据
    nx.GLOBAL.$storage = $storage;
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },
  getUserInfo(cb) {
    if (this.globalData.userInfo) {
      typeof cb === 'function' && cb(this.globalData.userInfo);
    } else {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.globalData.userInfo = res.userInfo;
              typeof cb === 'function' && cb(this.globalData.userInfo);
            }
          });
        }
      });
    }
  },
  globalData: {
    test: 123,
    userInfo: null
  }
});

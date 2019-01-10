import { $route } from '#';
nx.Page({
  data: {
    logs: []
  },
  methods: {
    back() {
      $route.back();
    }
  },
  lifetimes: {
    load() {
      console.log('load other page.. ');
      this.setData({
        logs: (wx.getStorageSync('logs') || []).map(function(log) {
          return new Date(log);
        })
      });
    }
  }
});

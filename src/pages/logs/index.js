Page({
  data: {
    logs: [],
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return new Date(log);
      }),
    });
  },
});

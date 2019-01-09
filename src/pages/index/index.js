const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));

nx.Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    gData: null
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/index'
    });
  },
  test1() {
    console.log('test1');
    wx.navigateTo({
      url: '../logs/index'
    });
  },
  test2() {
    this.setData({
      gData: nx.stringify(nx.$memory.userInfo, null, 2)
    });
  },
  async onLoad() {
    await delay();
    // 调用应用实例的方法获取全局数据
    nx.$app.getUserInfo((userInfo) => {
      // 更新数据
      this.setData({ userInfo });
    });
  }
});

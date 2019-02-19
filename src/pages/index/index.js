const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));
import { $route } from '#';

nx.Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    gData: null,
    auth: {}
  },
  // 事件处理函数
  methods: {
    test1() {
      console.log('test1');
      // $route.go('/pages/logs/index')
      $route.to('logs').then((_) => {
        console.log('success go!');
      });
    },
    test2() {
      console.log('set global data');
    },
    showSheet() {
      nx.wx.actions({
        itemList: ['A', 'B', 'C'],
        complete() {
          console.log('sheet complete.');
        }
      });
    }
  },
  lifetimes: {
    load() {
      const { auth } = nx.$local;
      this.setData({
        auth: JSON.stringify(auth)
      });
    }
  }
});

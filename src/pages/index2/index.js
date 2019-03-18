const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));
import { $route } from '#';

nx.Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    gData: null,
    auth: {},
    mini: false
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
      wx.createIntersectionObserver()
        .relativeToViewport({ bottom: 50 })
        .observe('.fixed-header-hd', (res) => {
          if (res.intersectionRatio !== 1) {
            this.setData({ mini: !res.intersectionRect.bottom });
          }
        });
    }
  }
});

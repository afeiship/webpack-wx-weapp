const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));
import { $route } from '#';

nx.Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    gData: null
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
      nx.wii.actions({
        itemList: ['A', 'B', 'C'],
        complete() {
          console.log('sheet complete.');
        }
      });
    }
  },
  lifetimes: {
    load() {
      console.log('page start load', this.data, $route);
      console.log('wait 1s, page onload?');
      // 调用应用实例的方法获取全局数据
      nx.$app.getUserInfo((userInfo) => {
        // 更新数据
        this.setData({ userInfo });
      });
    }
  }
});

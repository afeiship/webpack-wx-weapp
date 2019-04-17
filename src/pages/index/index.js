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
    toWebs() {
      $route.to('webs');
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
        .relativeTo('.fixed-header')
        .observe('.user-avatar', (res) => {
          console.log('res', res.intersectionRect.top);
          if (res.intersectionRect.top > 0) {
            console.log('collapse!');
            // this.setData({ mini: true });
          } else {
            console.log('expand');
            // this.setData({ mini: false });
          }
          // console.log('trigger!', res.intersectionRatio);

          // res.intersectionRatio; // 相交区域占目标节点的布局区域的比例
          // res.intersectionRect; // 相交区域
          // res.intersectionRect.left; // 相交区域的左边界坐标
          // res.intersectionRect.top; // 相交区域的上边界坐标
          // res.intersectionRect.width; // 相交区域的宽度
          // res.intersectionRect.height; // 相交区域的高度
        });
    }
  }
});

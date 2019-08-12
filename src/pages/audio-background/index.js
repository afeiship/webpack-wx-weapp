const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));
import { $route } from '#';

nx.Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    gData: null,
    auth: {},
    mini: false,
    richWxml: ``
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
      const backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.title = '此时此刻';
      backgroundAudioManager.epname = '此时此刻';
      backgroundAudioManager.singer = '汪峰';
      backgroundAudioManager.coverImgUrl =
        'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
      backgroundAudioManager.src =
        'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'; // 设置了 src 之后会自动播放
    }
  }
});

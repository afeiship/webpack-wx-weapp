const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));
import { $route } from '#';

nx.Page({
  data: {
    value: '天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。',
    value2: '天下皆知美之为美',
    visible: false,
    visible2: false
  },
  // 事件处理函数
  methods: {
    showInput() {
      this.setData({ visible: true });
    },
    submitMsg() {
      this.setData({ visible: false });
    },
    onInput() {
      console.log('input');
    },
    showInput2() {
      this.setData({ visible2: true });
    },
    submitMsg2() {
      this.setData({ visible2: false });
    },
    onInput2() {
      console.log('input');
    }
  },
  lifetimes: {
    load() {}
  }
});
